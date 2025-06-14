export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  
  // Mock data - in a real app, this would come from a database
  const places = [
    {
      id: 1,
      name: 'Central Library',
      category: 'Education',
      rating: 4.8,
      reviews: 156,
      distance: '0.3 km',
      address: '123 Main Street',
      phone: '(555) 123-4567',
      hours: 'Open until 8:00 PM',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      id: 2,
      name: 'Community Garden',
      category: 'Recreation',
      rating: 4.6,
      reviews: 89,
      distance: '0.7 km',
      address: '456 Park Avenue',
      phone: '(555) 234-5678',
      hours: 'Open 24 hours',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 37.7849, lng: -122.4094 },
    },
    {
      id: 3,
      name: 'Health Clinic',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 234,
      distance: '1.1 km',
      address: '789 Health Boulevard',
      phone: '(555) 345-6789',
      hours: 'Open until 6:00 PM',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 37.7649, lng: -122.4294 },
    },
    {
      id: 4,
      name: 'City Hall',
      category: 'Government',
      rating: 4.2,
      reviews: 67,
      distance: '1.5 km',
      address: '321 Civic Center',
      phone: '(555) 456-7890',
      hours: 'Closes at 5:00 PM',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 37.7549, lng: -122.4394 },
    },
  ];

  let filteredPlaces = places;

  // Filter by category
  if (category && category !== 'all') {
    filteredPlaces = filteredPlaces.filter(
      place => place.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search term
  if (search) {
    filteredPlaces = filteredPlaces.filter(
      place => 
        place.name.toLowerCase().includes(search.toLowerCase()) ||
        place.category.toLowerCase().includes(search.toLowerCase()) ||
        place.address.toLowerCase().includes(search.toLowerCase())
    );
  }

  return Response.json({
    places: filteredPlaces,
    total: filteredPlaces.length,
  });
}