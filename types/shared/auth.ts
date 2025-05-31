export type UserRole = 'resident' | 'business' | 'organization';
export type PrivilegeLevel = 'general' | 'admin' | 'superAdmin';

export interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber?: string;
  role: UserRole;
  privilegeLevel: PrivilegeLevel;
  isVerified: boolean;
  neighborhood?: string;
  organization?: {
    id: string;
    name: string;
    type: 'government' | 'public' | 'private';
    position?: string;
  };
  business?: {
    id: string;
    name: string;
    type: string;
    position?: string;
  };
  createdAt: Date;
  lastLogin: Date;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
}

export interface AuthError {
  code: string;
  message: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}