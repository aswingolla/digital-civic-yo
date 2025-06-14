export async function GET() {
  // Mock discussion data
  const discussions = [
    {
      id: 1,
      title: 'New bike lanes on Main Street - What do you think?',
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 23,
      likes: 45,
      time: '2 hours ago',
      category: 'Transportation',
      content: 'The city is planning to add bike lanes on Main Street. This could improve safety for cyclists but might affect parking. What are your thoughts?',
    },
    {
      id: 2,
      title: 'Community Garden Volunteer Day - Join us!',
      author: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 12,
      likes: 67,
      time: '4 hours ago',
      category: 'Environment',
      content: 'We\'re organizing a volunteer day at the community garden this Saturday. Come help us plant new vegetables and flowers!',
    },
    {
      id: 3,
      title: 'Library renovation plans - Community input needed',
      author: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 34,
      likes: 89,
      time: '1 day ago',
      category: 'Education',
      content: 'The library board is considering renovation plans. They want community input on what improvements would be most valuable.',
    },
  ];

  return Response.json({ discussions });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // In a real app, this would save to a database
  const newDiscussion = {
    id: Date.now(),
    ...body,
    author: 'Current User', // Would come from auth
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    replies: 0,
    likes: 0,
    time: 'just now',
  };

  return Response.json({ discussion: newDiscussion }, { status: 201 });
}