export interface MapLocation {
  id: string;
  name: string;
  type: 'business' | 'organization';
  category: string;
  description: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: {
    positive: number;
    negative: number;
  };
  verified: boolean;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  images: string[];
}

export interface MapFilters {
  type?: 'business' | 'organization' | 'all';
  category?: string;
  verified?: boolean;
  radius?: number; // in kilometers
}