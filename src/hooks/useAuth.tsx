import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, SignupData, UserRole } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@wrc.org',
    isEmailVerified: true,
    role: 'admin',
    firstName: 'Admin',
    lastName: 'User',
    organization: 'Women\'s Refugee Commission',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'doctor@example.com',
    isEmailVerified: true,
    role: 'healthcare',
    firstName: 'Dr. Sarah',
    lastName: 'Johnson',
    organization: 'Metro General Hospital',
    licenseNumber: 'MD123456',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    email: 'nverified@example.com',
    isEmailVerified: false,
    role: 'healthcare',
    firstName: 'Dr. Jane',
    lastName: 'Smith',
    organization: 'City Hospital',
    licenseNumber: 'MD789012',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

// Mock verification codes
const mockVerificationCodes: Record<string, string> = {
  'admin@wrc.org': '123456',
  'doctor@example.com': '654321',
  'nverified@example.com': '111111'
};
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' | 'error' } | null>(null);

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const login = async (email: string, password: string, code?: string) => {
    setLoading(true);
    
    try {
      // Mock login - in production, this would be an API call
      const foundUser = mockUsers.find(u => u.email === email);
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Check if email is verified
      if (!foundUser.isEmailVerified) {
        if (!code) {
          throw new Error('EMAIL_NOT_VERIFIED');
        }
        
        // Verify the code
        const expectedCode = mockVerificationCodes[email];
        if (code !== expectedCode) {
          throw new Error('Invalid verification code');
        }
      }
      
      setUser(foundUser);
      localStorage.setItem('auth_user', JSON.stringify(foundUser));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (email: string, code: string) => {
    setLoading(true);
    
    try {
      const foundUser = mockUsers.find(u => u.email === email);
      if (!foundUser) {
        throw new Error('User not found');
      }
      
      const expectedCode = mockVerificationCodes[email];
      if (code !== expectedCode) {
        throw new Error('Invalid verification code');
      }
      
      // Mark email as verified
      foundUser.isEmailVerified = true;
      showToast('Email verified successfully! You can now sign in.', 'success');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const signup = async (userData: SignupData) => {
    setLoading(true);
    
    try {
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      // Mock signup - in production, this would be an API call
      const newUser: User = {
        id: Date.now().toString(),
        ...userData,
        isEmailVerified: false,
        createdAt: new Date().toISOString()
      };
      
      mockUsers.push(newUser);
      
      // Generate verification code for new user
      mockVerificationCodes[userData.email] = Math.floor(100000 + Math.random() * 900000).toString();
      
      showToast('Account created! Please check your email for a verification code.', 'success');
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      signup, 
      loading, 
      verifyEmail,
      showToast,
      toast,
      hideToast
    }}>
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