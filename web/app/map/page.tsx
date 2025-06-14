import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Search, Filter, MapPin, Star, Navigation, Layers, Clock, Phone, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive Map | Civic YO',
  description: 'Explore your community with our interactive map. Discover local businesses, services, and civic facilities.',
};

export default function MapPage() {
  const nearbyPlaces = [
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
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'education', name: 'Education', count: 23 },
    { id: 'healthcare', name: 'Healthcare', count: 18 },
    { id: 'recreation', name: 'Recreation', count: 34 },
    { id: 'government', name: 'Government', count: 12 },
    { id: 'business', name: 'Business', count: 69 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Civic YO</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/map" className="text-blue-600 font-medium">Map</a>
              <a href="/pulse" className="text-gray-700 hover:text-blue-600 transition-colors">Pulse</a>
              <a href="/quality" className="text-gray-700 hover:text-blue-600 transition-colors">Quality</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          {/* Search Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-3 mb-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search places..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    category.id === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Places List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Nearby Places ({nearbyPlaces.length})
              </h3>
              
              <div className="space-y-4">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={place.image}
                          alt={place.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 truncate">{place.name}</h4>
                          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                            <Star size={12} className="text-yellow-500 fill-current mr-1" />
                            <span className="text-sm font-medium text-yellow-700">{place.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-blue-600 mb-1">{place.category}</p>
                        <p className="text-sm text-gray-600 mb-2">{place.address}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {place.hours}
                          </div>
                          <span>{place.distance} away</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Map Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={64} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 max-w-md">
                Explore your neighborhood and discover local places. Click on markers to see detailed information.
              </p>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <button className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Layers size={20} className="text-gray-600" />
            </button>
            <button className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Navigation size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Selected Place Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={nearbyPlaces[0].image}
                    alt={nearbyPlaces[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{nearbyPlaces[0].name}</h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                      <Star size={14} className="text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-yellow-700">{nearbyPlaces[0].rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-600 text-sm mb-1">{nearbyPlaces[0].category}</p>
                  <p className="text-gray-600 text-sm mb-3">{nearbyPlaces[0].address}</p>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone size={14} className="mr-1" />
                      Call
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Navigation size={14} className="mr-1" />
                      Directions
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Globe size={14} className="mr-1" />
                      Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}