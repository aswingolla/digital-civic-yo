import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, TrendingUp, Users, Award, Star, ChevronRight, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredPlaces = [
    {
      id: 1,
      name: 'Downtown Community Center',
      category: 'Community',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '0.5 km',
    },
    {
      id: 2,
      name: 'Riverside Park',
      category: 'Recreation',
      rating: 4.6,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '1.2 km',
    },
    {
      id: 3,
      name: 'City Library',
      category: 'Education',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '0.8 km',
    },
  ];

  const quickActions = [
    { 
      icon: MapPin, 
      title: 'Explore Map', 
      subtitle: 'Find nearby places', 
      color: '#3B82F6',
      href: '/map'
    },
    { 
      icon: TrendingUp, 
      title: 'Community Pulse', 
      subtitle: 'What\'s trending', 
      color: '#10B981',
      href: '/pulse'
    },
    { 
      icon: Users, 
      title: 'Community Hub', 
      subtitle: 'Connect locally', 
      color: '#F59E0B',
      href: '/community'
    },
    { 
      icon: Award, 
      title: 'Quality Metrics', 
      subtitle: 'Top rated places', 
      color: '#EF4444',
      href: '/quality'
    },
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
              <Link href="/map" className="text-gray-700 hover:text-blue-600 transition-colors">
                Map
              </Link>
              <Link href="/pulse" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pulse
              </Link>
              <Link href="/quality" className="text-gray-700 hover:text-blue-600 transition-colors">
                Quality
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 transition-colors">
                Community
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search size={20} />
              </button>
              <Link 
                href="/auth/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Your
              <span className="block text-blue-200">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Rate, review, and explore local businesses, services, and civic facilities. 
              Help build a better community through shared insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/map" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Start Exploring
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                href="/pulse" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View Community Pulse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600">Everything you need to engage with your community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index} 
                href={action.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <action.icon size={24} color={action.color} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600">{action.subtitle}</p>
                <ChevronRight size={16} className="text-gray-400 mt-2 group-hover:text-blue-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Places</h2>
              <p className="text-lg text-gray-600">Highly rated locations in your community</p>
            </div>
            <Link 
              href="/map" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              View All
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {place.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
                      <Star size={14} className="text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-900">{place.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{place.reviews} reviews</span>
                    <span>{place.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Impact</h2>
            <p className="text-lg text-gray-600">Together, we're building a better community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,847</div>
              <div className="text-lg text-gray-600">Community Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">156</div>
              <div className="text-lg text-gray-600">Places Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.7</div>
              <div className="text-lg text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of community members making a difference
          </p>
          <Link 
            href="/auth/signup" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Join the Community
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Civic YO</h3>
              <p className="text-gray-400">
                Empowering communities through shared insights and civic engagement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/map" className="hover:text-white transition-colors">Interactive Map</Link></li>
                <li><Link href="/pulse" className="hover:text-white transition-colors">Community Pulse</Link></li>
                <li><Link href="/quality" className="hover:text-white transition-colors">Quality Metrics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/community" className="hover:text-white transition-colors">Community Hub</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Civic YO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}