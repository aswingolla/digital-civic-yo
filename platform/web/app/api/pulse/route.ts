export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || 'week';
  
  // Mock pulse data - in a real app, this would come from analytics
  const pulseData = {
    stats: {
      averageRating: 4.7,
      activeUsers: 2847,
      reviewsThisWeek: 847,
      placesReviewed: 156,
    },
    trending: [
      { name: 'Community Center', score: 92, trend: 'up', change: '+5%', category: 'Recreation' },
      { name: 'Public Library', score: 89, trend: 'up', change: '+3%', category: 'Education' },
      { name: 'City Park', score: 87, trend: 'stable', change: '0%', category: 'Recreation' },
      { name: 'Health Clinic', score: 85, trend: 'up', change: '+2%', category: 'Healthcare' },
      { name: 'Bus Station', score: 72, trend: 'down', change: '-4%', category: 'Transportation' },
    ],
    insights: [
      {
        title: 'Most Active Day',
        value: 'Saturday',
        description: 'Peak community engagement',
        type: 'calendar',
      },
      {
        title: 'Top Category',
        value: 'Recreation',
        description: 'Most reviewed category',
        type: 'award',
      },
      {
        title: 'Rising Star',
        value: 'New Cafe',
        description: 'Fastest growing ratings',
        type: 'trending-up',
      },
      {
        title: 'Needs Attention',
        value: 'Parking Areas',
        description: 'Declining satisfaction',
        type: 'trending-down',
      },
    ],
  };

  return Response.json(pulseData);
}