import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Metrics | Civic YO',
  description: 'View and analyze quality metrics for your community',
};

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Quality Metrics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Overall Score</span>
                <span className="text-green-600 font-medium">92/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Reviews</span>
                <span className="text-gray-900 font-medium">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Rating</span>
                <span className="text-gray-900 font-medium">4.8/5.0</span>
              </div>
            </div>
          </div>

          {/* Trends Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Trends</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">This Week</span>
                <span className="text-green-600 font-medium">↑ 3.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">This Month</span>
                <span className="text-green-600 font-medium">↑ 8.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">This Quarter</span>
                <span className="text-green-600 font-medium">↑ 12.4%</span>
              </div>
            </div>
          </div>

          {/* Areas of Improvement */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Areas of Improvement</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Response time to community feedback
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Documentation completeness
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                User engagement metrics
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Metrics Section */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Detailed Metrics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">User Satisfaction</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">92%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">90%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Exceeding
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Response Time</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">4.2h</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3.0h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Needs Improvement
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Documentation Coverage</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">87%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">95%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      In Progress
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}