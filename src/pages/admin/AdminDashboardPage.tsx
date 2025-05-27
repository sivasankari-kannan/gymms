import React from 'react';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { AdminDashboardStats, GymOwner } from '../../types';
import { formatDate, formatCurrency } from '../../lib/utils';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data for demonstration
const adminStats: AdminDashboardStats = {
  totalGymOwners: 156,
  activeSubscriptions: 142,
  trialSubscriptions: 14,
  monthlyRecurringRevenue: 15600,
  recentGymOwners: [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@fitnesshub.com',
      phone: '(555) 123-4567',
      gymName: 'FitnessHub Elite',
      subscriptionStatus: 'active',
      subscriptionPlan: 'Professional',
      subscriptionStartDate: '2024-02-15',
      lastLoginDate: '2024-03-10',
      memberCount: 245,
      revenue: 12500,
    },
    // Add more mock data as needed
  ],
  subscriptionStats: [
    { name: 'Basic', value: 45 },
    { name: 'Professional', value: 89 },
    { name: 'Enterprise', value: 22 },
  ],
  revenueData: Array.from({ length: 12 }, (_, i) => ({
    date: `2024-${String(i + 1).padStart(2, '0')}`,
    amount: 10000 + Math.random() * 10000,
  })),
};

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin Dashboard"
        description="Overview of all gym management systems"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Gym Owners"
          value={adminStats.totalGymOwners}
          icon={<Users className="h-full w-full" />}
          change={{ value: 12, isPositive: true }}
        />
        
        <StatCard
          title="Active Subscriptions"
          value={adminStats.activeSubscriptions}
          icon={<Activity className="h-full w-full" />}
          change={{ value: 8, isPositive: true }}
          iconColor="text-green-600"
          iconBackground="bg-green-100"
        />
        
        <StatCard
          title="Trial Users"
          value={adminStats.trialSubscriptions}
          icon={<Users className="h-full w-full" />}
          change={{ value: 3, isPositive: true }}
          iconColor="text-amber-600"
          iconBackground="bg-amber-100"
        />
        
        <StatCard
          title="Monthly Revenue"
          value={formatCurrency(adminStats.monthlyRecurringRevenue)}
          icon={<DollarSign className="h-full w-full" />}
          change={{ value: 15, isPositive: true }}
          iconColor="text-green-600"
          iconBackground="bg-green-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adminStats.revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) => formatDate(value)}
                  />
                  <YAxis
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    labelFormatter={(label) => formatDate(label as string)}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adminStats.subscriptionStats.map((stat) => (
                <div key={stat.name} className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-dark-700">
                        {stat.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {stat.value} gyms
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 rounded-full h-2"
                        style={{
                          width: `${(stat.value / adminStats.totalGymOwners) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Gym Owners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gym Owner
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gym Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Members
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {adminStats.recentGymOwners.map((owner) => (
                  <tr key={owner.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(owner.name)}&background=0EA5E9&color=fff`}
                            alt={owner.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {owner.name}
                          </div>
                          <div className="text-sm text-gray-500">{owner.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{owner.gymName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {owner.subscriptionPlan}
                      </div>
                      <div className="text-sm text-gray-500">
                        Since {formatDate(owner.subscriptionStartDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {owner.memberCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(owner.revenue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;