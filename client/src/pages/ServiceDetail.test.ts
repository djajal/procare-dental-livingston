import { describe, it, expect } from "vitest";

// We need to import the SERVICES_DATA from ServiceDetail.tsx
// Since it's not exported, we'll re-import the file and test the data structure
// by importing the module and checking the component's data

// For data integrity testing, we'll extract the service IDs and validate structure
const SERVICE_IDS = [
  "teeth-whitening",
  "preventative-care",
  "cosmetic-dentistry",
  "family-dentistry",
  "dental-implants",
  "root-canal",
  "invisalign",
  "emergency-dentistry",
];

// We need to test the data directly, so let's import the file as a module
// Since SERVICES_DATA is not exported, we'll read the file and validate via regex/parsing
// Better approach: test via dynamic import of the component file
import * as fs from "fs";
import * as path from "path";

const serviceDetailPath = path.resolve(__dirname, "ServiceDetail.tsx");
const fileContent = fs.readFileSync(serviceDetailPath, "utf-8");

describe("ServiceDetail Page - Data Integrity", () => {
  describe("Service Coverage", () => {
    it("should contain all 8 service IDs in SERVICES_DATA", () => {
      SERVICE_IDS.forEach((id) => {
        expect(fileContent).toContain(`"${id}"`);
      });
    });

    it("should have exactly 8 services defined", () => {
      // Count occurrences of top-level service keys in SERVICES_DATA
      const serviceKeyMatches = SERVICE_IDS.filter((id) =>
        fileContent.includes(`"${id}": {`)
      );
      expect(serviceKeyMatches).toHaveLength(8);
    });
  });

  describe("Service Data Structure", () => {
    SERVICE_IDS.forEach((serviceId) => {
      describe(`Service: ${serviceId}`, () => {
        it("should have a title field", () => {
          // Extract the service block and check for title
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          expect(serviceStart).toBeGreaterThan(-1);
          // Find next service or end of object
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);
          expect(serviceBlock).toContain("title:");
        });

        it("should have a details field with substantial content (350+ words)", () => {
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);

          // Extract the details content between backticks
          const detailsMatch = serviceBlock.match(/details:\s*`([^`]+)`/s);
          expect(detailsMatch).not.toBeNull();
          if (detailsMatch) {
            const wordCount = detailsMatch[1].split(/\s+/).length;
            expect(wordCount).toBeGreaterThanOrEqual(350); // Multi-paragraph content
          }
        });

        it("should have exactly 3 gallery items", () => {
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);

          // Count gallery items by counting "caption:" occurrences in gallery array
          const galleryStart = serviceBlock.indexOf("gallery:");
          const galleryEnd = serviceBlock.indexOf("],", galleryStart);
          const galleryBlock = serviceBlock.slice(galleryStart, galleryEnd);
          const captionCount = (galleryBlock.match(/caption:/g) || []).length;
          expect(captionCount).toBe(3);
        });

        it("should have exactly 3 reviews", () => {
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);

          // Count reviews by counting "treatment:" occurrences in reviews array
          const reviewsStart = serviceBlock.indexOf("reviews:");
          const reviewsEnd = serviceBlock.indexOf("],", reviewsStart);
          const reviewsBlock = serviceBlock.slice(reviewsStart, reviewsEnd);
          const treatmentCount = (reviewsBlock.match(/treatment:/g) || []).length;
          expect(treatmentCount).toBe(3);
        });

        it("should have exactly 6 FAQs", () => {
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);

          // Count FAQs by counting "question:" occurrences in faqs array
          const faqsStart = serviceBlock.indexOf("faqs:");
          const faqsEnd = serviceBlock.indexOf("]", faqsStart + 100); // skip past first ]
          const faqsBlock = serviceBlock.slice(faqsStart, faqsEnd + 500);
          const questionCount = (faqsBlock.match(/question:/g) || []).length;
          expect(questionCount).toBe(6);
        });

        it("should have 6 benefits", () => {
          const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
          const nextServiceIdx = SERVICE_IDS
            .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
            .filter((idx) => idx > serviceStart)
            .sort((a, b) => a - b)[0] || fileContent.length;
          const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);

          const benefitsStart = serviceBlock.indexOf("benefits:");
          const benefitsEnd = serviceBlock.indexOf("],", benefitsStart);
          const benefitsBlock = serviceBlock.slice(benefitsStart, benefitsEnd);
          // Count string items in benefits array
          const benefitCount = (benefitsBlock.match(/"/g) || []).length / 2;
          expect(benefitCount).toBe(6);
        });
      });
    });
  });

  describe("SEO and Content Quality", () => {
    it("should include Livingston NJ in service descriptions", () => {
      SERVICE_IDS.forEach((serviceId) => {
        const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
        const nextServiceIdx = SERVICE_IDS
          .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
          .filter((idx) => idx > serviceStart)
          .sort((a, b) => a - b)[0] || fileContent.length;
        const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);
        expect(serviceBlock.toLowerCase()).toContain("livingston");
      });
    });

    it("should include ProCare Dental in service descriptions", () => {
      SERVICE_IDS.forEach((serviceId) => {
        const serviceStart = fileContent.indexOf(`"${serviceId}": {`);
        const nextServiceIdx = SERVICE_IDS
          .map((id) => fileContent.indexOf(`"${id}": {`, serviceStart + 1))
          .filter((idx) => idx > serviceStart)
          .sort((a, b) => a - b)[0] || fileContent.length;
        const serviceBlock = fileContent.slice(serviceStart, nextServiceIdx);
        expect(serviceBlock).toContain("ProCare Dental");
      });
    });

    it("should include Essex County references for local SEO", () => {
      // At least some services should mention Essex County
      const essexCount = (fileContent.match(/Essex County/g) || []).length;
      expect(essexCount).toBeGreaterThanOrEqual(4);
    });

    it("should include phone number (973) 533-1777", () => {
      expect(fileContent).toContain("(973) 533-1777");
    });

    it("should include practice address", () => {
      expect(fileContent).toContain("22 Old Short Hills Rd Ste 207");
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
      // Extract all rating values
      const ratingMatches = fileContent.match(/rating:\s*(\d)/g) || [];
      ratingMatches.forEach((match) => {
        const rating = parseInt(match.replace("rating: ", "").replace("rating:", ""));
        expect(rating).toBe(5);
      });
    });

    it("all reviews should have non-empty text", () => {
      // Check that review text fields are not empty
      const reviewTextMatches = fileContent.match(/text:\s*"[^"]+"/g) || [];
      expect(reviewTextMatches.length).toBeGreaterThanOrEqual(24); // 8 services * 3 reviews
    });

    it("all reviews should have treatment labels", () => {
      const treatmentMatches = fileContent.match(/treatment:\s*"[^"]+"/g) || [];
      expect(treatmentMatches.length).toBeGreaterThanOrEqual(24); // 8 services * 3 reviews
    });
  });

  describe("Gallery Data Quality", () => {
    it("all gallery items should have captions", () => {
      const captionMatches = fileContent.match(/caption:\s*"[^"]+"/g) || [];
      expect(captionMatches.length).toBeGreaterThanOrEqual(24); // 8 services * 3 items
    });

    it("all gallery items should have image URLs", () => {
      const beforeMatches = fileContent.match(/before:\s*"https:\/\/[^"]+"/g) || [];
      const afterMatches = fileContent.match(/after:\s*"https:\/\/[^"]+"/g) || [];
      expect(beforeMatches.length).toBeGreaterThanOrEqual(24);
      expect(afterMatches.length).toBeGreaterThanOrEqual(24);
    });
  });
});
