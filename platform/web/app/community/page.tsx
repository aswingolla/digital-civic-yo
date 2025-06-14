import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Users, MessageSquare, Calendar, Award, TrendingUp, Heart, Share2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Hub | Civic YO',
  description: 'Connect with your community. Join discussions, attend events, and make a difference.',
};

export default function CommunityPage() {
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
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Town Hall Meeting',
      date: 'March 15, 2024',
      time: '7:00 PM',
      location: 'Community Center',
      attendees: 45,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 2,
      title: 'Park Cleanup Day',
      date: 'March 20, 2024',
      time: '9:00 AM',
      location: 'Riverside Park',
      attendees: 23,
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 3,
      title: 'Local Business Fair',
      date: 'March 25, 2024',
      time: '10:00 AM',
      location: 'Main Street',
      attendees: 78,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const topContributors = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      contributions: 47,
      badge: 'Community Champion',
    },
    {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      contributions: 34,
      badge: 'Local Expert',
    },
    {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      contributions: 28,
      badge: 'Rising Star',
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
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/map" className="text-gray-700 hover:text-blue-600 transition-colors">Map</a>
              <a href="/pulse" className="text-gray-700 hover:text-blue-600 transition-colors">Pulse</a>
              <a href="/community" className="text-blue-600 font-medium">Community</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
          <p className="text-lg text-gray-600">Connect, discuss, and make a difference in your community</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Users size={24} className="text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <MessageSquare size={24} className="text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-600">Active Discussions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Calendar size={24} className="text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <TrendingUp size={24} className="text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">89%</div>
                <div className="text-sm text-gray-600">Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Discussions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Discussions</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Discussion
                </button>
              </div>

              <div className="space-y-6">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={discussion.avatar}
                        alt={discussion.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                            {discussion.category}
                          </span>
                          <span className="text-sm text-gray-500">{discussion.time}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <span className="font-medium">{discussion.author}</span>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <MessageSquare size={16} className="mr-1" />
                              {discussion.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Heart size={16} className="mr-1" />
                              {discussion.likes} likes
                            </div>
                            <button className="flex items-center hover:text-blue-600 transition-colors">
                              <Share2 size={16} className="mr-1" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-32">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-2" />
                          {event.attendees} attending
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Join Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Contributors</h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={contributor.avatar}
                        alt={contributor.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Award size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{contributor.name}</div>
                      <div className="text-sm text-gray-600">{contributor.contributions} contributions</div>
                      <div className="text-xs text-blue-600">{contributor.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community Guidelines</h3>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 mt-0.5 text-blue-600" />
                  <span>Be respectful and constructive in discussions</span>
                </div>
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 mt-0.5 text-blue-600" />
                  <span>Share accurate information and cite sources</span>
                </div>
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 mt-0.5 text-blue-600" />
                  <span>Focus on community improvement</span>
                </div>
                <div className="flex items-start">
                  <BookOpen size={16} className="mr-2 mt-0.5 text-blue-600" />
                  <span>Report inappropriate content</span>
                </div>
              </div>
              
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Read Full Guidelines
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  💬 Start a Discussion
                </button>
                <button className="w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  📅 Create an Event
                </button>
                <button className="w-full text-left p-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
                  📝 Submit Feedback
                </button>
                <button className="w-full text-left p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  🏆 Nominate a Hero
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}