export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'member';
  avatar?: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  membershipId: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface Membership {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  features: string[];
  color: string;
}

export interface Attendance {
  id: string;
  memberId: string;
  memberName: string;
  checkIn: string;
  checkOut: string | null;
  duration?: number; // in minutes
}

export interface DashboardSummary {
  totalMembers: number;
  activeMembers: number;
  newMembersToday: number;
  checkedInToday: number;
  membershipStats: {
    name: string;
    value: number;
  }[];
  recentAttendance: Attendance[];
}

export interface GymOwner {
  id: string;
  name: string;
  email: string;
  phone: string;
  gymName: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  subscriptionPlan: string;
  subscriptionStartDate: string;
  lastLoginDate: string;
  memberCount: number;
  revenue: number;
}

export interface AdminDashboardStats {
  totalGymOwners: number;
  activeSubscriptions: number;
  trialSubscriptions: number;
  monthlyRecurringRevenue: number;
  recentGymOwners: GymOwner[];
  subscriptionStats: {
    name: string;
    value: number;
  }[];
  revenueData: {
    date: string;
    amount: number;
  }[];
}