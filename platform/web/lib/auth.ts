import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  isVerified: boolean;
  neighborhood?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
  updateUser: (data: Partial<User>) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: true,
      signIn: (user) => set({ user, loading: false }),
      signOut: () => set({ user: null, loading: false }),
      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);