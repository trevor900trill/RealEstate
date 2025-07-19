"use client";

import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

interface AuthState {
  isLoggedIn: boolean;
  isSeller: boolean;
}

interface AuthContextType extends AuthState {
  login: (data: { isSeller: boolean }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({ isLoggedIn: false, isSeller: false });
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('auth');
      if (storedAuth) {
        setAuthState(JSON.parse(storedAuth));
      }
    } catch (error) {
      console.error("Failed to parse auth from localStorage", error);
      localStorage.removeItem('auth');
    }
    setIsLoaded(true);
  }, []);

  const login = useCallback((data: { isSeller: boolean }) => {
    const newAuthState = { isLoggedIn: true, isSeller: data.isSeller };
    setAuthState(newAuthState);
    try {
      localStorage.setItem('auth', JSON.stringify(newAuthState));
    } catch (error) {
      console.error("Failed to save auth to localStorage", error);
    }
  }, []);

  const logout = useCallback(() => {
    const newAuthState = { isLoggedIn: false, isSeller: false };
    setAuthState(newAuthState);
    try {
      localStorage.removeItem('auth');
    } catch (error) {
      console.error("Failed to remove auth from localStorage", error);
    }
    router.push('/');
  }, [router]);
  
  const value = { ...authState, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {isLoaded ? children : null /* Or a loading spinner */}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
