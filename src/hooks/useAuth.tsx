import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, SignupData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@wrc.org',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'User',
    organization: 'Women\'s Refugee Commission',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'doctor@example.com',
    role: 'healthcare',
    firstName: 'Dr. Sarah',
    lastName: 'Johnson',
    organization: 'Metro General Hospital',
    licenseNumber: 'MD123456',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Mock login - in production, this would be an API call
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('auth_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const signup = async (userData: SignupData) => {
    setLoading(true);
    // Mock signup - in production, this would be an API call
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}