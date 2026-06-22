import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";

// Now that data is in a separate exported file, we can import it directly
import { SERVICES_DATA, SERVICE_CATEGORIES } from "../data/serviceData";

// All 26 service IDs that should exist
const ALL_SERVICE_IDS = [
  "dental-hygiene",
  "oral-cancer-screenings",
  "digital-xray",
  "lumineers",
  "veneers",
  "zoom-whitening",
  "snap-on-smile",
  "bonding",
  "dental-implants",
  "bridges",
  "crowns",
  "dentures",
  "inlays-onlays",
  "root-canal",
  "root-canal-retreatment",
  "periodontal-disease",
  "scaling-root-planing",
  "wisdom-teeth",
  "extractions",
  "sleep-apnea",
  "sealants",
  "mouth-guards",
  "night-guards",
  "tmj-treatment",
  "occlusal-adjustment",
  "advanced-technology",
];

// Read the ServiceDetail.tsx for component structure tests
const serviceDetailPath = path.resolve(__dirname, "ServiceDetail.tsx");
const fileContent = fs.readFileSync(serviceDetailPath, "utf-8");

// Read the data file for content tests
const dataFilePath = path.resolve(__dirname, "../data/serviceData.ts");
const dataFileContent = fs.readFileSync(dataFilePath, "utf-8");

describe("ServiceDetail Page - Data Integrity", () => {
  describe("Service Coverage", () => {
    it("should contain all 26 service IDs in SERVICES_DATA", () => {
      ALL_SERVICE_IDS.forEach((id) => {
        expect(SERVICES_DATA[id]).toBeDefined();
      });
    });

    it("should have exactly 26 services defined", () => {
      expect(Object.keys(SERVICES_DATA)).toHaveLength(26);
    });

    it("should have all service categories defined", () => {
      expect(SERVICE_CATEGORIES).toContain("Preventative & General");
      expect(SERVICE_CATEGORIES).toContain("Cosmetic Services");
      expect(SERVICE_CATEGORIES).toContain("Restorative");
      expect(SERVICE_CATEGORIES).toContain("Endodontics");
      expect(SERVICE_CATEGORIES).toContain("Periodontic");
      expect(SERVICE_CATEGORIES).toContain("Oral Surgery");
      expect(SERVICE_CATEGORIES).toContain("Pediatric & Specialty");
      expect(SERVICE_CATEGORIES).toContain("Technology");
    });
  });

  describe("Service Data Structure", () => {
    ALL_SERVICE_IDS.forEach((serviceId) => {
      describe(`Service: ${serviceId}`, () => {
        const service = SERVICES_DATA[serviceId];

        it("should have a title field", () => {
          expect(service.title).toBeTruthy();
          expect(service.title.length).toBeGreaterThan(3);
        });

        it("should have a category field", () => {
          expect(service.category).toBeTruthy();
          expect(SERVICE_CATEGORIES).toContain(service.category);
        });

        it("should have a details field with substantial content (450+ words)", () => {
          expect(service.details).toBeTruthy();
          const wordCount = service.details.split(/\s+/).length;
          expect(wordCount).toBeGreaterThanOrEqual(450);
        });

        it("should have exactly 3 gallery items", () => {
          expect(service.gallery).toHaveLength(3);
        });

        it("should have exactly 3 reviews", () => {
          expect(service.reviews).toHaveLength(3);
        });

        it("should have exactly 6 FAQs", () => {
          expect(service.faqs).toHaveLength(6);
        });

        it("should have 6 benefits", () => {
          expect(service.benefits).toHaveLength(6);
        });
      });
    });
  });

  describe("SEO and Content Quality", () => {
    it("should include Livingston in service descriptions", () => {
      ALL_SERVICE_IDS.forEach((serviceId) => {
        const service = SERVICES_DATA[serviceId];
        expect(service.details.toLowerCase()).toContain("livingston");
      });
    });

    it("should include ProCare Dental in service descriptions", () => {
      ALL_SERVICE_IDS.forEach((serviceId) => {
        const service = SERVICES_DATA[serviceId];
        expect(service.details).toContain("ProCare Dental");
      });
    });

    it("should include Essex County references for local SEO", () => {
      const essexCount = Object.values(SERVICES_DATA).filter(
        (s) => s.details.includes("Essex County")
      ).length;
      expect(essexCount).toBeGreaterThanOrEqual(10);
    });

    it("ServiceDetail.tsx should include phone number (973) 533-1777", () => {
      expect(fileContent).toContain("(973) 533-1777");
    });
  });

  describe("Component Structure", () => {
    it("should render a Breadcrumb component", () => {
      expect(fileContent).toContain("Breadcrumb");
    });

    it("should render Header and Footer components", () => {
      expect(fileContent).toContain("<Header");
      expect(fileContent).toContain("<Footer");
    });

    it("should include JSON-LD schema markup", () => {
      expect(fileContent).toContain("application/ld+json");
      expect(fileContent).toContain("schema.org");
    });

    it("should include FAQPage schema", () => {
      expect(fileContent).toContain("FAQPage");
    });

    it("should include aggregateRating in schema", () => {
      expect(fileContent).toContain("aggregateRating");
    });

    it("should use accordion-style details/summary for FAQs", () => {
      expect(fileContent).toContain("<details");
      expect(fileContent).toContain("<summary");
    });

    it("should have a CTA section with phone and booking links", () => {
      expect(fileContent).toContain("tel:9735331777");
      expect(fileContent).toContain("zocdoc.com");
    });

    it("should include star ratings in reviews", () => {
      expect(fileContent).toContain("fill-yellow-400");
    });

    it("should have gallery section with Camera icon", () => {
      expect(fileContent).toContain("Camera");
      expect(fileContent).toContain("Smile Gallery");
    });

    it("should have reviews section with MessageSquare icon", () => {
      expect(fileContent).toContain("MessageSquare");
      expect(fileContent).toContain("Patient Reviews");
    });

    it("should have FAQ section with HelpCircle icon", () => {
      expect(fileContent).toContain("HelpCircle");
      expect(fileContent).toContain("Frequently Asked Questions");
    });
  });

  describe("Review Data Quality", () => {
    it("all reviews should have 5-star ratings", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.reviews.forEach((review) => {
          expect(review.rating).toBe(5);
        });
      });
    });

    it("all reviews should have non-empty text", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.reviews.forEach((review) => {
          expect(review.text.length).toBeGreaterThan(20);
        });
      });
    });

    it("all reviews should have treatment labels", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.reviews.forEach((review) => {
          expect(review.treatment.length).toBeGreaterThan(3);
        });
      });
    });
  });

  describe("Gallery Data Quality", () => {
    it("all gallery items should have captions", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.gallery.forEach((item) => {
          expect(item.caption.length).toBeGreaterThan(5);
        });
      });
    });

    it("all gallery items should have image references", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.gallery.forEach((item) => {
          expect(item.before).toBeTruthy();
          expect(item.after).toBeTruthy();
        });
      });
    });
  });

  describe("FAQ Data Quality", () => {
    it("all FAQs should have questions ending with ?", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.faqs.forEach((faq) => {
          expect(faq.question.endsWith("?")).toBe(true);
        });
      });
    });

    it("all FAQs should have answers with substantial content", () => {
      Object.values(SERVICES_DATA).forEach((service) => {
        service.faqs.forEach((faq) => {
          expect(faq.answer.length).toBeGreaterThan(50);
        });
      });
    });
  });
});
