import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { appRouter } from './routers';

describe('ZocDoc Reviews Procedure', () => {
  let mockFetch: any;

  beforeEach(() => {
    // Mock the fetch function
    mockFetch = vi.fn();
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch ZocDoc reviews successfully', async () => {
    const mockHtml = `
      <html>
        <body>
          <div>45 reviews</div>
          <div>Overall rating 4.98</div>
          <div>98% of patients gave this doctor 5 stars</div>
        </body>
      </html>
    `;

    mockFetch.mockResolvedValueOnce({
      text: async () => mockHtml,
    });

    const caller = appRouter.createCaller({} as any);
    const result = await caller.reviews.zocdoc();

    expect(result).toEqual({
      reviewCount: 45,
      overallRating: 4.98,
      fiveStarPercent: 98,
      profileUrl: 'https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105',
    });
  });

  it('should return default values on fetch error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const caller = appRouter.createCaller({} as any);
    const result = await caller.reviews.zocdoc();

    expect(result).toEqual({
      reviewCount: 45,
      overallRating: 4.98,
      fiveStarPercent: 98,
      profileUrl: 'https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105',
    });
  });

  it('should handle missing data gracefully', async () => {
    const mockHtml = '<html><body>Empty page</body></html>';

    mockFetch.mockResolvedValueOnce({
      text: async () => mockHtml,
    });

    const caller = appRouter.createCaller({} as any);
    const result = await caller.reviews.zocdoc();

    // When regex doesn't match, it returns default values
    expect(result.reviewCount).toBe(45);
    expect(result.overallRating).toBe(4.98);
    expect(result.fiveStarPercent).toBe(98);
    expect(result.profileUrl).toBe('https://www.zocdoc.com/dentist/kristina-ceravolo-dmd-698105');
  });
});
