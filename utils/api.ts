import { Platform } from 'react-native';

const API_BASE_URL = Platform.select({
  web: '/api',
  default: 'http://localhost:3000/api'
});

interface QualityMetrics {
  userRatings: number;
  verificationStatus: boolean;
  communityFeedback?: number;
}

interface QualityScore {
  score: number;
  metrics: QualityMetrics;
}

interface QualityUpdateResponse {
  success: boolean;
  newScore: number;
}

/**
 * Fetches the quality score for a business
 */
export async function fetchQualityScore(businessId: string): Promise<QualityScore> {
  const response = await fetch(`${API_BASE_URL}/quality/${businessId}`);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  return response.json();
}

/**
 * Updates the quality score metrics for a business
 */
export async function updateQualityScore(
  businessId: string, 
  updateData: Partial<QualityMetrics>
): Promise<QualityUpdateResponse> {
  if (!Object.keys(updateData).length) {
    throw new Error('Invalid update data');
  }

  const response = await fetch(`${API_BASE_URL}/quality/${businessId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}