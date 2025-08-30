export interface User {
  id: string;
  email: string;
  isEmailVerified: boolean;
  role: UserRole;
  firstName: string;
  lastName: string;
  organization?: string;
  licenseNumber?: string;
  createdAt: string;
}

export type UserRole = 'healthcare' | 'legal' | 'chaplain' | 'social_worker' | 'admin';

export interface Issue {
  id: string;
  reporterId: string;
  reporterRole: UserRole;
  reportingFor: 'self' | 'third_party';
  category: IssueCategory;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: string;
  dateOfIncident: string;
  urgentMedicalAttention: boolean;
  followUpNeeded: boolean;
  status: IssueStatus;
  createdAt: string;
  updatedAt: string;
}

export type IssueCategory = 
  | 'medical_care_denial'
  | 'prenatal_care'
  | 'nutrition_issues'
  | 'mental_health'
  | 'legal_representation'
  | 'detention_conditions'
  | 'family_separation'
  | 'religious_support'
  | 'other';

export type IssueStatus = 'open' | 'in_progress' | 'resolved' | 'closed';

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  logout: () => void;
  signup: (userData: SignupData) => Promise<void>;
  loading: boolean;
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  toast: { message: string; type: 'success' | 'info' | 'warning' | 'error' } | null;
  hideToast: () => void;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  organization?: string;
  licenseNumber?: string;
}