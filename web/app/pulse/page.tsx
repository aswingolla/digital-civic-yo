import React from 'react';
import { Metadata } from 'next';
import { TrendingUp, TrendingDown, Users, Award, Activity, Calendar, BarChart3, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Pulse | Civic YO',
  description: 'Real-time insights into your community. See what\'s trending, popular, and needs attention.',
};

export default function PulsePage() {
  const trendingData = [
    { name: 'Community Center', score: 92, trend: 'up', change: '+5%', category: 'Recreation' },
    { name: 'Public Library', score: 89, trend: 'up', change: '+3%', category: 'Education' },
    { name: 'City Park', score: 87, trend: 'stable', change: '0%', category: 'Recreation' },
    { name: 'Health Clinic', score: 85, trend: 'up', change: '+2%', category: 'Healthcare' },
    { name: 'Bus Station', score: 72, trend: 'down', change: '-4%', category: 'Transportation' },
  ];

  const weeklyInsights = [
    {
      title: 'Most Active Day',
      value: 'Saturday',
      description: 'Peak community engagement',
      icon: Calendar,
      color: 'blue',
    },
    {
      title: 'Top Category',
      value: 'Recreation',
      description: 'Most reviewed category',
      icon: Award,
      color: 'green',
    },
    {
      title: 'Rising Star',
      value: 'New Cafe',
      description: 'Fastest growing ratings',
      icon: TrendingUp,
      color: 'yellow',
    },
    {
      title: 'Needs Attention',
      value: 'Parking Areas',
      description: 'Declining satisfaction',
      icon: TrendingDown,
      color: 'red',
    },
  ];

  const timeFilters = ['Today', 'This Week', 'This Month', 'This Year'];

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
              <a href="/pulse" className="text-blue-600 font-medium">Pulse</a>
              <a href="/quality" className="text-gray-700 hover:text-blue-600 transition-colors">Quality</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Pulse</h1>
              <p className="text-lg text-gray-600">Real-time insights into your community</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Activity size={20} className="mr-2" />
              Live Data
            </button>
          </div>
        </div>

        {/* Time Filter */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {timeFilters.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  index === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp size={32} />
              <span className="text-blue-200 text-sm">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">4.7</div>
            <div className="text-blue-200">Average Rating</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Users size={32} className="text-green-600" />
              <span className="text-green-600 text-sm">+8%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2.8K</div>
            <div className="text-gray-600">Active Users</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 size={32} className="text-yellow-600" />
              <span className="text-yellow-600 text-sm">+15%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">847</div>
            <div className="text-gray-600">Reviews This Week</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Eye size={32} className="text-purple-600" />
              <span className="text-purple-600 text-sm">+22%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-gray-600">Places Reviewed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending Places */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Trending Places</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>

              <div className="space-y-4">
                {trendingData.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center">
                          {item.trend === 'up' ? (
                            <TrendingUp size={16} className="text-green-600 mr-1" />
                          ) : item.trend === 'down' ? (
                            <TrendingDown size={16} className="text-red-600 mr-1" />
                          ) : (
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                          )}
                          <span
                            className={`text-sm font-medium ${
                              item.trend === 'up'
                                ? 'text-green-600'
                                : item.trend === 'down'
                                ? 'text-red-600'
                                : 'text-gray-600'
                            }`}
                          >
                            {item.change}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600">{item.category}</span>
                        <span className="text-sm text-gray-600">Score: {item.score}</span>
                      </div>
                      
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.score >= 85
                              ? 'bg-green-500'
                              : item.score >= 70
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Insights */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Insights</h2>
              
              <div className="space-y-4">
                {weeklyInsights.map((insight, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-${insight.color}-100`}>
                      <insight.icon size={20} className={`text-${insight.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                      <p className="text-lg font-bold text-blue-600 mb-1">{insight.value}</p>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  📊 Generate Report
                </button>
                <button className="w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  📈 View Analytics
                </button>
                <button className="w-full text-left p-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
                  🔔 Set Alerts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}