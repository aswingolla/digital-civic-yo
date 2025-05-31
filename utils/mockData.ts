import { User, UserRole, PrivilegeLevel } from '@/types/shared/auth';

// Helper function to create a user
function createUser(
  id: string,
  name: string,
  role: UserRole,
  privilegeLevel: PrivilegeLevel,
  extraData?: Partial<User>
): User {
  return {
    id,
    email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
    name,
    role,
    privilegeLevel,
    isVerified: true,
    createdAt: new Date(),
    lastLogin: new Date(),
    ...extraData,
  };
}

// Mock Users Data
export const mockUsers: User[] = [
  // Residents
  createUser('r1', 'John Smith', 'resident', 'general', {
    neighborhood: 'Downtown',
    phoneNumber: '+1234567890',
  }),
  createUser('r2', 'Sarah Johnson', 'resident', 'admin', {
    neighborhood: 'Westside',
    phoneNumber: '+1234567891',
  }),
  createUser('r3', 'Michael Chen', 'resident', 'superAdmin', {
    neighborhood: 'Eastside',
    phoneNumber: '+1234567892',
  }),

  // Business Owners
  createUser('b1', 'Emma Davis', 'business', 'general', {
    business: {
      id: 'biz1',
      name: 'Cafe Mocha',
      type: 'restaurant',
      position: 'Owner',
    },
  }),
  createUser('b2', 'James Wilson', 'business', 'admin', {
    business: {
      id: 'biz2',
      name: 'Tech Solutions Inc',
      type: 'technology',
      position: 'CEO',
    },
  }),
  createUser('b3', 'Lisa Anderson', 'business', 'superAdmin', {
    business: {
      id: 'biz3',
      name: 'Downtown Mall',
      type: 'retail',
      position: 'Managing Director',
    },
  }),

  // Organization Representatives
  createUser('o1', 'David Miller', 'organization', 'general', {
    organization: {
      id: 'org1',
      name: 'City Planning Department',
      type: 'government',
      position: 'Urban Planner',
    },
  }),
  createUser('o2', 'Patricia Lee', 'organization', 'admin', {
    organization: {
      id: 'org2',
      name: 'Community Health Center',
      type: 'public',
      position: 'Director',
    },
  }),
  createUser('o3', 'Robert Taylor', 'organization', 'superAdmin', {
    organization: {
      id: 'org3',
      name: 'Environmental Foundation',
      type: 'private',
      position: 'Executive Director',
    },
  }),
];

// Role-specific permissions
export const rolePermissions = {
  resident: {
    general: [
      'view_community_posts',
      'create_posts',
      'rate_places',
      'submit_comments',
    ],
    admin: [
      'moderate_community_posts',
      'organize_events',
      'create_polls',
      'manage_neighborhood_groups',
    ],
    superAdmin: [
      'manage_resident_accounts',
      'approve_community_moderators',
      'access_analytics',
      'manage_global_settings',
    ],
  },
  business: {
    general: [
      'manage_business_profile',
      'respond_to_reviews',
      'post_updates',
      'view_business_analytics',
    ],
    admin: [
      'manage_staff_accounts',
      'create_promotions',
      'access_advanced_analytics',
      'manage_multiple_locations',
    ],
    superAdmin: [
      'manage_business_accounts',
      'approve_business_verifications',
      'access_global_analytics',
      'manage_business_categories',
    ],
  },
  organization: {
    general: [
      'post_announcements',
      'respond_to_inquiries',
      'view_organization_analytics',
      'create_events',
    ],
    admin: [
      'manage_department_accounts',
      'create_official_polls',
      'access_advanced_reports',
      'manage_public_services',
    ],
    superAdmin: [
      'manage_organization_structure',
      'approve_official_accounts',
      'manage_emergency_alerts',
      'access_sensitive_data',
    ],
  },
};