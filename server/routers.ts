import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  reviews: router({
    zocdoc: publicProcedure.query(async () => {
      try {
        const response = await fetch('https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105');
        const html = await response.text();
        
        // Extract review count from the HTML
        const reviewCountMatch = html.match(/(\d+)\s*reviews/);
        const reviewCount = reviewCountMatch ? parseInt(reviewCountMatch[1]) : 45;
        
        // Extract overall rating
        const ratingMatch = html.match(/Overall rating[\s\S]*?(\d+\.\d+)/);
        const overallRating = ratingMatch ? parseFloat(ratingMatch[1]) : 4.98;
        
        // Extract percentage of 5-star reviews
        const percentMatch = html.match(/(\d+)%\s*of patients gave this doctor 5 stars/);
        const fiveStarPercent = percentMatch ? parseInt(percentMatch[1]) : 98;
        
        return {
          reviewCount,
          overallRating,
          fiveStarPercent,
          profileUrl: 'https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105',
        };
      } catch (error) {
        console.error('Error fetching ZocDoc reviews:', error);
        return {
          reviewCount: 45,
          overallRating: 4.98,
          fiveStarPercent: 98,
          profileUrl: 'https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105',
        };
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
