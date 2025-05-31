import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthError, SignInCredentials } from '@/types/shared/auth';
import { mockUsers } from '@/utils/mockData';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    // Simulate checking for existing session
    const checkSession = async () => {
      try {
        // In a real app, this would verify the session token
        setLoading(false);
      } catch (err) {
        setError({ code: 'session_error', message: 'Failed to restore session' });
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const signIn = async (credentials: SignInCredentials) => {
    try {
      setLoading(true);
      // Simulate API call with mock data
      const matchedUser = mockUsers.find(u => u.email === credentials.email);
      
      if (!matchedUser) {
        throw new Error('Invalid credentials');
      }

      setUser(matchedUser);
      setError(null);
    } catch (err) {
      setError({ code: 'auth_error', message: 'Invalid credentials' });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      // In a real app, this would clear the session
      setUser(null);
      setError(null);
    } catch (err) {
      setError({ code: 'signout_error', message: 'Failed to sign out' });
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      if (!user) return;
      // In a real app, this would update the user profile on the backend
      setUser({ ...user, ...userData });
    } catch (err) {
      setError({ code: 'update_error', message: 'Failed to update user profile' });
    }
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    
    const rolePerms = rolePermissions[user.role];
    if (!rolePerms) return false;

    const levelPerms = rolePerms[user.privilegeLevel];
    if (!levelPerms) return false;

    return levelPerms.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signIn,
        signOut,
        updateUser,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};