import { MapLocation } from '@/types/shared/map';

export const mockMapLocations: MapLocation[] = [
  {
    id: 'b1',
    name: 'Tech Solutions Inc',
    type: 'business',
    category: 'technology',
    description: 'Leading software development and IT consulting firm',
    address: '123 Innovation Drive',
    coordinates: {
      latitude: 37.7849,
      longitude: -122.4194
    },
    rating: {
      positive: 156,
      negative: 12
    },
    verified: true,
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'contact@techsolutions.com',
      website: 'https://techsolutions.com'
    },
    hours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '17:00' }
    },
    images: [
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg'
    ]
  },
  {
    id: 'b2',
    name: 'Green Earth Market',
    type: 'business',
    category: 'retail',
    description: 'Organic grocery store featuring local produce',
    address: '456 Sustainable Way',
    coordinates: {
      latitude: 37.7869,
      longitude: -122.4169
    },
    rating: {
      positive: 234,
      negative: 18
    },
    verified: true,
    contact: {
      phone: '+1 (555) 234-5678',
      email: 'info@greenearthmarket.com',
      website: 'https://greenearthmarket.com'
    },
    hours: {
      monday: { open: '08:00', close: '20:00' },
      tuesday: { open: '08:00', close: '20:00' },
      wednesday: { open: '08:00', close: '20:00' },
      thursday: { open: '08:00', close: '20:00' },
      friday: { open: '08:00', close: '21:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: { open: '10:00', close: '16:00' }
    },
    images: [
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      'https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg'
    ]
  },
  {
    id: 'o1',
    name: 'City Planning Department',
    type: 'organization',
    category: 'government',
    description: 'Municipal department responsible for urban development',
    address: '789 Civic Center Plaza',
    coordinates: {
      latitude: 37.7889,
      longitude: -122.4174
    },
    rating: {
      positive: 89,
      negative: 45
    },
    verified: true,
    contact: {
      phone: '+1 (555) 345-6789',
      email: 'planning@citygovt.org',
      website: 'https://citygovt.org/planning'
    },
    hours: {
      monday: { open: '09:00', close: '17:00' },
      tuesday: { open: '09:00', close: '17:00' },
      wednesday: { open: '09:00', close: '17:00' },
      thursday: { open: '09:00', close: '17:00' },
      friday: { open: '09:00', close: '16:00' }
    },
    images: [
      'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg'
    ]
  }
];

export const getMapLocations = async (filters?: MapFilters) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredLocations = [...mockMapLocations];

  if (filters) {
    if (filters.type && filters.type !== 'all') {
      filteredLocations = filteredLocations.filter(loc => loc.type === filters.type);
    }
    if (filters.category) {
      filteredLocations = filteredLocations.filter(loc => loc.category === filters.category);
    }
    if (filters.verified !== undefined) {
      filteredLocations = filteredLocations.filter(loc => loc.verified === filters.verified);
    }
  }

  return filteredLocations;
};