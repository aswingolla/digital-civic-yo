import { ItemType, HeatmapPoint, PulseReportType, NotificationType } from '@/types';
import * as Location from 'expo-location';

// Mock data service - in a real app, these would make API calls

// Sample image URLs from Pexels
const sampleImageUrls = [
  'https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

// Mocked nearby items data
const mockItems: ItemType[] = [
  {
    id: '1',
    name: 'Springfield Elementary School',
    category: 'school',
    description: 'A public elementary school serving grades K-6 with a focus on STEM education and arts programs.',
    imageUrl: sampleImageUrls[0],
    address: '123 Education St, Springfield',
    location: { latitude: 37.7749, longitude: -122.4194 },
    distance: 0.8,
    positiveRatings: 250,
    negativeRatings: 15,
    commentCount: 42,
    topTags: ['Good Teachers', 'Clean', 'Well Maintained'],
  },
  {
    id: '2',
    name: 'Cafe Mocha',
    category: 'restaurant',
    description: 'Cozy cafe with specialty coffee drinks, breakfast items, and fresh-baked pastries.',
    imageUrl: sampleImageUrls[1],
    address: '456 Main St, Springfield',
    location: { latitude: 37.7739, longitude: -122.4164 },
    distance: 1.2,
    positiveRatings: 420,
    negativeRatings: 32,
    commentCount: 87,
    topTags: ['Good Coffee', 'Friendly Staff', 'Fast Service'],
  },
  {
    id: '3',
    name: 'Lakeside Apartments',
    category: 'property',
    description: 'Modern apartment complex with lake views, featuring 1-3 bedroom units, a pool, and fitness center.',
    imageUrl: sampleImageUrls[2],
    address: '789 Lake Dr, Springfield',
    location: { latitude: 37.7759, longitude: -122.4174 },
    distance: 1.5,
    positiveRatings: 178,
    negativeRatings: 42,
    commentCount: 35,
    topTags: ['Clean', 'Good Management', 'Noisy'],
  },
  {
    id: '4',
    name: 'Community Medical Center',
    category: 'business',
    description: 'Full-service medical facility offering primary care, specialty services, and urgent care.',
    imageUrl: sampleImageUrls[3],
    address: '101 Health Blvd, Springfield',
    location: { latitude: 37.7769, longitude: -122.4184 },
    distance: 2.1,
    positiveRatings: 310,
    negativeRatings: 75,
    commentCount: 62,
    topTags: ['Professional', 'Long Wait Times', 'Expensive'],
  },
  {
    id: '5',
    name: 'City Council',
    category: 'government',
    description: 'Local governing body responsible for city ordinances, budgeting, and civic services.',
    imageUrl: sampleImageUrls[4],
    address: '202 Civic Center, Springfield',
    location: { latitude: 37.7779, longitude: -122.4154 },
    distance: 1.8,
    positiveRatings: 130,
    negativeRatings: 210,
    commentCount: 94,
    topTags: ['Slow Response', 'Good Infrastructure', 'Transparent'],
  },
  {
    id: '6',
    name: 'Tech Startup Incubator',
    category: 'investment',
    description: 'Shared workspace and resources for early-stage tech startups, with funding opportunities.',
    imageUrl: sampleImageUrls[5],
    address: '303 Innovation Way, Springfield',
    location: { latitude: 37.7789, longitude: -122.4144 },
    distance: 2.5,
    positiveRatings: 205,
    negativeRatings: 28,
    commentCount: 47,
    topTags: ['Innovative', 'Supportive', 'Networking'],
  },
];

// Mock functions that would normally communicate with a backend

export async function fetchNearbyItems(
  location: Location.LocationObject,
  category: string | null = null
): Promise<ItemType[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Filter by category if needed
  if (category) {
    return mockItems.filter(item => item.category === category);
  }
  
  return mockItems;
}

export async function getMapItems(
  location: Location.LocationObject,
  category: string | null = null
): Promise<ItemType[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Filter by category if needed
  if (category) {
    return mockItems.filter(item => item.category === category);
  }
  
  return mockItems;
}

export async function getHeatmapData(
  location: Location.LocationObject,
  category: string | null = null
): Promise<HeatmapPoint[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Create heatmap points around the given location
  const baseLatitude = location.coords.latitude;
  const baseLongitude = location.coords.longitude;
  
  // Generate points in a grid pattern around the location
  const points: HeatmapPoint[] = [];
  
  for (let i = -10; i <= 10; i++) {
    for (let j = -10; j <= 10; j++) {
      // Add some randomness
      const weight = Math.random();
      
      if (weight > 0.3) { // Only include some points for a more natural pattern
        points.push({
          latitude: baseLatitude + (i * 0.002),
          longitude: baseLongitude + (j * 0.002),
          weight,
        });
      }
    }
  }
  
  return points;
}

export async function getPulseReports(
  location: Location.LocationObject,
  timePeriod: 'day' | 'week' | 'month'
): Promise<PulseReportType[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Return different mock data based on time period
  return [
    {
      id: '1',
      title: 'Top Rated Places',
      period: timePeriod === 'day' ? 'Today' : timePeriod === 'week' ? 'This Week' : 'This Month',
      items: [
        { id: '1', name: 'Springfield Elementary School', category: 'School', score: 92, trend: 'up' },
        { id: '2', name: 'Cafe Mocha', category: 'Restaurant', score: 89, trend: 'up' },
        { id: '4', name: 'Community Medical Center', category: 'Healthcare', score: 84, trend: 'stable' },
        { id: '6', name: 'Tech Startup Incubator', category: 'Business', score: 81, trend: 'down' },
        { id: '7', name: 'Green Park', category: 'Recreation', score: 78, trend: 'up' },
      ],
    },
    {
      id: '2',
      title: 'Needs Improvement',
      period: timePeriod === 'day' ? 'Today' : timePeriod === 'week' ? 'This Week' : 'This Month',
      items: [
        { id: '5', name: 'City Council', category: 'Government', score: 38, trend: 'down' },
        { id: '8', name: 'Downtown Parking Garage', category: 'Infrastructure', score: 42, trend: 'stable' },
        { id: '9', name: 'Bus Line #42', category: 'Transportation', score: 45, trend: 'down' },
      ],
    },
    {
      id: '3',
      title: 'Trending This Week',
      period: 'New & Notable',
      items: [
        { id: '10', name: 'New Farmers Market', category: 'Shopping', score: 76, trend: 'up' },
        { id: '11', name: 'River Cleanup Project', category: 'Environment', score: 91, trend: 'up' },
        { id: '12', name: 'Sunset Concert Series', category: 'Event', score: 88, trend: 'up' },
      ],
    },
  ];
}

export async function getNotifications(userId: string): Promise<NotificationType[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock notifications
  return [
    {
      id: '1',
      type: 'rating',
      title: 'Your rating was submitted',
      message: 'Thank you for rating Springfield Elementary School. Your feedback helps improve our community!',
      itemId: '1',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: '2',
      type: 'comment',
      title: 'New comments on Cafe Mocha',
      message: 'There are 5 new comments on Cafe Mocha that you might want to check out.',
      itemId: '2',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    },
    {
      id: '3',
      type: 'announcement',
      title: 'New Feature: Weekly Pulse',
      message: 'We\'ve added a new feature! Check out the Weekly Pulse to see what\'s trending in your community.',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
    {
      id: '4',
      type: 'mention',
      title: 'You were mentioned in a comment',
      message: 'Jane mentioned you in a comment about City Council: "I agree with @user123, we need more transparency."',
      itemId: '5',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    },
  ];
}

export async function markNotificationAsRead(notificationId: string): Promise<void> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // This would normally update the backend
  console.log(`Marked notification ${notificationId} as read`);
}