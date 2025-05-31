import { fetchQualityScore, updateQualityScore } from '../../api/quality';

describe('Quality Score API Integration', () => {
  const mockBusinessId = 'test-business-123';
  
  beforeEach(() => {
    // Reset fetch mocks before each test
    global.fetch = jest.fn();
  });

  describe('fetchQualityScore', () => {
    it('successfully fetches quality score', async () => {
      const mockResponse = {
        score: 85,
        metrics: {
          userRatings: 150,
          verificationStatus: true,
          communityFeedback: 4.5
        }
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const result = await fetchQualityScore(mockBusinessId);
      
      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining(`/api/quality/${mockBusinessId}`),
        expect.objectContaining({ method: 'GET' })
      );
    });

    it('handles API errors gracefully', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(fetchQualityScore(mockBusinessId)).rejects.toThrow('Network error');
    });

    it('handles non-200 responses', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });

      await expect(fetchQualityScore(mockBusinessId)).rejects.toThrow('Not Found');
    });
  });

  describe('updateQualityScore', () => {
    const mockUpdateData = {
      userRatings: 160,
      verificationStatus: true
    };

    it('successfully updates quality score', async () => {
      const mockResponse = {
        success: true,
        newScore: 87
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      const result = await updateQualityScore(mockBusinessId, mockUpdateData);
      
      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining(`/api/quality/${mockBusinessId}`),
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(mockUpdateData)
        })
      );
    });

    it('validates update payload', async () => {
      const invalidData = {};
      
      await expect(updateQualityScore(mockBusinessId, invalidData))
        .rejects.toThrow('Invalid update data');
    });

    it('handles rate limiting', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 429,
        statusText: 'Too Many Requests'
      });

      await expect(updateQualityScore(mockBusinessId, mockUpdateData))
        .rejects.toThrow('Too Many Requests');
    });
  });

  describe('API error scenarios', () => {
    it('handles timeout errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('timeout'));
      
      await expect(fetchQualityScore(mockBusinessId))
        .rejects.toThrow('timeout');
    });

    it('handles malformed JSON responses', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => { throw new Error('Invalid JSON'); }
      });

      await expect(fetchQualityScore(mockBusinessId))
        .rejects.toThrow('Invalid JSON');
    });

    it('handles server errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error'
      });

      await expect(fetchQualityScore(mockBusinessId))
        .rejects.toThrow('Internal Server Error');
    });
  });
});