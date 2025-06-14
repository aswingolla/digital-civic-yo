export async function GET() {
  // Mock events data
  const events = [
    {
      id: 1,
      title: 'Town Hall Meeting',
      date: 'March 15, 2024',
      time: '7:00 PM',
      location: 'Community Center',
      attendees: 45,
      description: 'Monthly town hall meeting to discuss community issues and upcoming projects.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'City Council',
    },
    {
      id: 2,
      title: 'Park Cleanup Day',
      date: 'March 20, 2024',
      time: '9:00 AM',
      location: 'Riverside Park',
      attendees: 23,
      description: 'Join us for a community cleanup day at Riverside Park. Supplies provided.',
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'Green Community Group',
    },
    {
      id: 3,
      title: 'Local Business Fair',
      date: 'March 25, 2024',
      time: '10:00 AM',
      location: 'Main Street',
      attendees: 78,
      description: 'Discover local businesses and services in our community. Free admission.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'Chamber of Commerce',
    },
  ];

  return Response.json({ events });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // In a real app, this would save to a database
  const newEvent = {
    id: Date.now(),
    ...body,
    attendees: 0,
    organizer: 'Current User', // Would come from auth
  };

  return Response.json({ event: newEvent }, { status: 201 });
}