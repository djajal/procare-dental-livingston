import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../\..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Add cache headers middleware for static assets
  app.use((req, res, next) => {
    // Cache assets with hash in filename for 1 year
    if (req.path.match(/\.(js|css|woff2|woff|ttf|eot|svg|png|jpg|jpeg|webp|gif|ico)$/i)) {
      // Check if filename contains hash (assets-HASH.js pattern)
      if (req.path.match(/[a-zA-Z0-9]{8,}\.(js|css|woff2|woff|ttf|eot|svg|png|jpg|jpeg|webp|gif|ico)$/i)) {
        // Immutable assets with hash - cache for 1 year
        res.set({
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Expires': new Date(Date.now() + 31536000000).toUTCString(),
        });
      } else {
        // Assets without hash - cache for 1 day
        res.set({
          'Cache-Control': 'public, max-age=86400',
          'Expires': new Date(Date.now() + 86400000).toUTCString(),
        });
      }
    }
    next();
  });

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    // Don't cache HTML - always serve fresh
    res.set({
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Expires': new Date(0).toUTCString(),
    });
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
