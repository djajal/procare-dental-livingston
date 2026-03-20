import { describe, it, expect } from "vitest";
import { blogPosts, blogCategories, getPaginatedPosts, getPostById } from "@/data/blogData";

describe("Blog Data Functions", () => {
  describe("blogPosts", () => {
    it("should have 63 blog posts", () => {
      expect(blogPosts).toHaveLength(63);
    });

    it("each post should have required fields", () => {
      blogPosts.forEach((post) => {
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        expect(post).toHaveProperty("category");
        expect(post).toHaveProperty("excerpt");
        expect(post).toHaveProperty("content");
        expect(post).toHaveProperty("image");
        expect(post).toHaveProperty("author");
        expect(post).toHaveProperty("date");
        expect(post).toHaveProperty("readTime");
        expect(post).toHaveProperty("metaDescription");
        expect(post).toHaveProperty("keywords");
      });
    });

    it("each post should have valid data types", () => {
      blogPosts.forEach((post) => {
        expect(typeof post.id).toBe("string");
        expect(typeof post.title).toBe("string");
        expect(typeof post.category).toBe("string");
        expect(typeof post.excerpt).toBe("string");
        expect(typeof post.content).toBe("string");
        expect(typeof post.image).toBe("string");
        expect(typeof post.author).toBe("string");
        expect(typeof post.date).toBe("string");
        expect(typeof post.readTime).toBe("number");
        expect(typeof post.metaDescription).toBe("string");
        expect(Array.isArray(post.keywords)).toBe(true);
      });
    });

    it("each post should have unique id", () => {
      const ids = blogPosts.map((post) => post.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(blogPosts.length);
    });
  });

  describe("blogCategories", () => {
    it("should have 13 categories", () => {
      expect(blogCategories).toHaveLength(13);
    });

    it("categories should be sorted alphabetically", () => {
      const sorted = [...blogCategories].sort();
      expect(blogCategories).toEqual(sorted);
    });

    it("all posts should belong to a valid category", () => {
      blogPosts.forEach((post) => {
        expect(blogCategories).toContain(post.category);
      });
    });
  });

  describe("getPaginatedPosts", () => {
    it("should return correct number of posts per page", () => {
      const result = getPaginatedPosts("all", 1, 9);
      expect(result.posts).toHaveLength(9);
    });

    it("should return correct total pages", () => {
      const result = getPaginatedPosts("all", 1, 9);
      expect(result.totalPages).toBe(Math.ceil(63 / 9));
    });

    it("should return correct total posts", () => {
      const result = getPaginatedPosts("all", 1, 9);
      expect(result.totalPosts).toBe(63);
    });

    it("should filter posts by category", () => {
      const category = "General Dentistry";
      const result = getPaginatedPosts(category, 1, 9);
      result.posts.forEach((post) => {
        expect(post.category).toBe(category);
      });
    });

    it("should handle pagination correctly", () => {
      const result1 = getPaginatedPosts("all", 1, 9);
      const result2 = getPaginatedPosts("all", 2, 9);
      
      // First post of page 2 should be different from last post of page 1
      expect(result1.posts[result1.posts.length - 1].id).not.toBe(result2.posts[0].id);
    });

    it("should return empty array for invalid page", () => {
      const result = getPaginatedPosts("all", 100, 9);
      expect(result.posts).toHaveLength(0);
    });

    it("should handle custom posts per page", () => {
      const result = getPaginatedPosts("all", 1, 5);
      expect(result.posts.length).toBeLessThanOrEqual(5);
    });
  });

  describe("getPostById", () => {
    it("should return post by id", () => {
      const post = blogPosts[0];
      const result = getPostById(post.id);
      expect(result).toEqual(post);
    });

    it("should return undefined for invalid id", () => {
      const result = getPostById("invalid-id");
      expect(result).toBeUndefined();
    });

    it("should return correct post for each id", () => {
      blogPosts.forEach((post) => {
        const result = getPostById(post.id);
        expect(result).toEqual(post);
      });
    });
  });

  describe("SEO Optimization", () => {
    it("each post should have meta description", () => {
      blogPosts.forEach((post) => {
        expect(post.metaDescription).toBeTruthy();
        expect(post.metaDescription.length).toBeGreaterThan(0);
      });
    });

    it("each post should have keywords", () => {
      blogPosts.forEach((post) => {
        expect(post.keywords.length).toBeGreaterThan(0);
        post.keywords.forEach((keyword) => {
          expect(typeof keyword).toBe("string");
        });
      });
    });

    it("meta descriptions should be reasonable length", () => {
      blogPosts.forEach((post) => {
        expect(post.metaDescription.length).toBeLessThanOrEqual(160);
      });
    });

    it("each post should have valid image URL", () => {
      blogPosts.forEach((post) => {
        expect(post.image).toMatch(/^https?:\/\//);
      });
    });
  });

  describe("Content Quality", () => {
    it("each post should have substantial content", () => {
      blogPosts.forEach((post) => {
        expect(post.content.length).toBeGreaterThan(500);
      });
    });

    it("each post should have meaningful excerpt", () => {
      blogPosts.forEach((post) => {
        expect(post.excerpt.length).toBeGreaterThan(50);
        expect(post.excerpt.length).toBeLessThan(300);
      });
    });

    it("read time should be reasonable", () => {
      blogPosts.forEach((post) => {
        expect(post.readTime).toBeGreaterThan(0);
        expect(post.readTime).toBeLessThan(30);
      });
    });
  });
});
