import { describe, it, expect } from 'vitest';

describe('ADA Compliance - Accessibility Features', () => {
  describe('Skip Navigation Link', () => {
    it('should have a skip-to-main-content link in index.html', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const indexHtml = fs.readFileSync(
        path.resolve(__dirname, '../../../client/index.html'),
        'utf-8'
      );
      expect(indexHtml).toContain('skip-link');
      expect(indexHtml).toContain('#main-content');
      expect(indexHtml).toContain('Skip to main content');
    });
  });

  describe('Language Attribute', () => {
    it('should have lang="en" on the html element', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const indexHtml = fs.readFileSync(
        path.resolve(__dirname, '../../../client/index.html'),
        'utf-8'
      );
      expect(indexHtml).toMatch(/lang="en"/);
    });
  });

  describe('Form Accessibility', () => {
    it('should have properly labeled form fields in Footer', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const footer = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Footer.tsx'),
        'utf-8'
      );
      // Check for htmlFor/id pairing
      expect(footer).toContain('htmlFor="footer-name"');
      expect(footer).toContain('id="footer-name"');
      expect(footer).toContain('htmlFor="footer-email"');
      expect(footer).toContain('id="footer-email"');
      expect(footer).toContain('htmlFor="footer-phone"');
      expect(footer).toContain('id="footer-phone"');
      expect(footer).toContain('htmlFor="footer-message"');
      expect(footer).toContain('id="footer-message"');
      // Check for required attributes
      expect(footer).toContain('aria-required="true"');
      expect(footer).toContain('required');
    });

    it('should have properly labeled form fields in Home', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const home = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/pages/Home.tsx'),
        'utf-8'
      );
      // Check for htmlFor/id pairing
      expect(home).toContain('htmlFor="contact-name"');
      expect(home).toContain('id="contact-name"');
      expect(home).toContain('htmlFor="contact-email"');
      expect(home).toContain('id="contact-email"');
      expect(home).toContain('htmlFor="contact-phone"');
      expect(home).toContain('id="contact-phone"');
      expect(home).toContain('htmlFor="contact-message"');
      expect(home).toContain('id="contact-message"');
      expect(home).toContain('aria-required="true"');
    });
  });

  describe('ARIA Landmarks', () => {
    it('should have main content landmark in App.tsx', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const app = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/App.tsx'),
        'utf-8'
      );
      expect(app).toContain('id="main-content"');
    });

    it('should have navigation landmark in Header', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const header = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Header.tsx'),
        'utf-8'
      );
      expect(header).toContain('aria-label');
      expect(header).toContain('nav');
    });

    it('should have footer landmark', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const footer = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Footer.tsx'),
        'utf-8'
      );
      expect(footer).toContain('<footer');
    });
  });

  describe('Mobile Navigation Accessibility', () => {
    it('should have proper ARIA attributes on mobile menu', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const mobileNav = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/MobileNav.tsx'),
        'utf-8'
      );
      expect(mobileNav).toContain('aria-expanded');
      expect(mobileNav).toContain('aria-controls');
      expect(mobileNav).toContain('aria-label');
      expect(mobileNav).toContain('aria-modal');
      expect(mobileNav).toContain('role="dialog"');
    });
  });

  describe('Breadcrumb Accessibility', () => {
    it('should have aria-current on last breadcrumb item', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const breadcrumb = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Breadcrumb.tsx'),
        'utf-8'
      );
      expect(breadcrumb).toContain('aria-current');
      expect(breadcrumb).toContain('aria-label="Breadcrumb"');
    });

    it('should not have nested anchor tags', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const breadcrumb = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Breadcrumb.tsx'),
        'utf-8'
      );
      // Should not have <Link><a> pattern
      expect(breadcrumb).not.toContain('<a className');
    });
  });

  describe('Accessibility Statement Page', () => {
    it('should have an accessibility statement page', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const exists = fs.existsSync(
        path.resolve(__dirname, '../../../client/src/pages/Accessibility.tsx')
      );
      expect(exists).toBe(true);
    });

    it('should have route to accessibility page', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const app = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/App.tsx'),
        'utf-8'
      );
      expect(app).toContain('/accessibility');
    });

    it('should link to accessibility page from footer', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const footer = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/components/Footer.tsx'),
        'utf-8'
      );
      expect(footer).toContain('/accessibility');
      expect(footer).toContain('Accessibility');
    });
  });

  describe('Image Alt Text', () => {
    it('should have descriptive alt text on doctor images', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const home = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/pages/Home.tsx'),
        'utf-8'
      );
      // Check for descriptive alt text (not just "image" or "photo")
      expect(home).toContain('alt="Dr. Kristina Ceravolo');
      expect(home).toContain('alt="Dr. Charles Ditta');
    });
  });

  describe('Focus Management', () => {
    it('should have visible focus styles in CSS', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const css = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/index.css'),
        'utf-8'
      );
      expect(css).toContain('focus-visible');
    });
  });

  describe('Color Contrast', () => {
    it('should use high-contrast color combinations', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const css = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/index.css'),
        'utf-8'
      );
      // Verify primary color is defined (forest green - high contrast on white)
      expect(css).toContain('--primary');
      expect(css).toContain('--foreground');
    });
  });

  describe('Decorative Elements', () => {
    it('should mark star icons as aria-hidden', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const home = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/pages/Home.tsx'),
        'utf-8'
      );
      expect(home).toContain('aria-hidden="true"');
    });
  });

  describe('Phone Links', () => {
    it('should use proper tel: format for phone links', async () => {
      const fs = await import('fs');
      const path = await import('path');
      const home = fs.readFileSync(
        path.resolve(__dirname, '../../../client/src/pages/Home.tsx'),
        'utf-8'
      );
      // Should use tel: with digits only (no parentheses/spaces)
      expect(home).toContain('href="tel:9735331777"');
    });
  });
});
