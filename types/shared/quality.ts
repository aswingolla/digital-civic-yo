export interface QualityMetrics {
  userRatings: number;
  verificationStatus: boolean;
  communityFeedback?: number;
}

export interface QualityScore {
  score: number;
  metrics: QualityMetrics;
}

export interface QualityUpdateResponse {
  success: boolean;
  newScore: number;
}