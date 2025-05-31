export interface ItemType {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  positiveRatings: number;
  negativeRatings: number;
  commentCount: number;
  topTags?: string[];
}

export interface HeatmapPoint {
  latitude: number;
  longitude: number;
  weight: number;
}

export interface PulseReportItem {
  id: string;
  name: string;
  category: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
}

export interface PulseReportType {
  id: string;
  title: string;
  period: string;
  items: PulseReportItem[];
}

export interface NotificationType {
  id: string;
  type: 'rating' | 'comment' | 'mention' | 'announcement';
  title: string;
  message: string;
  itemId?: string;
  read: boolean;
  createdAt: Date;
}