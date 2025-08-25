import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { UserRole } from '../../types';
import { ROLE_LABELS } from '../../utils/constants';

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'healthcare' as UserRole,
    organization: '',
    licenseNumber: ''
  });
  const [error, setError] = useState('');
  const { signup, loading } = useAuth();

  const roleOptions = Object.entries(ROLE_LABELS)
    .filter(([key]) => key !== 'admin')
    .map(([value, label]) => ({ value, label }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        organization: formData.organization || undefined,
        licenseNumber: formData.licenseNumber || undefined
      });
    } catch (err) {
      setError('Failed to create account');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={formData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          required
          placeholder="Enter your first name"
        />
        
        <Input
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          required
          placeholder="Enter your last name"
        />
      </div>
      
      <Input
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        required
        placeholder="Enter your email"
      />
      
      <Select
        label="Professional Role"
        value={formData.role}
        onChange={(e) => handleInputChange('role', e.target.value)}
        options={roleOptions}
        required
      />
      
      <Input
        label="Organization"
        value={formData.organization}
        onChange={(e) => handleInputChange('organization', e.target.value)}
        placeholder="Enter your organization"
        helperText="Optional - Your healthcare facility, law firm, or organization"
      />
      
      {(formData.role === 'healthcare' || formData.role === 'legal') && (
        <Input
          label={formData.role === 'healthcare' ? 'Medical License Number' : 'Bar Number'}
          value={formData.licenseNumber}
          onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
          placeholder={`Enter your ${formData.role === 'healthcare' ? 'medical license' : 'bar'} number`}
          helperText="Optional - For verification purposes only"
        />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          required
          placeholder="Create a password"
        />
        
        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          required
          placeholder="Confirm your password"
        />
      </div>
      
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      <Button type="submit" fullWidth loading={loading}>
        Create Account
      </Button>
    </form>
  );
}