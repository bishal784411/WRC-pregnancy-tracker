import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface SignupFormProps {
  onToast: (message: string, type: 'success' | 'error') => void;
}

export function SignupForm({ onToast }: SignupFormProps) {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Fake success/error
    const success = Math.random() > 0.5;

    if (success) {
      onToast('Account created successfully! If your email is correct, a verification code has been sent! You can now log in.', 'success');
    } else {
      onToast('Failed to create account. Try again.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <Input
          label="First Name"
          name="firstName"
          required
          placeholder="Enter your first name"
        />
        <Input
          label="Last Name"
          name="lastName"
          required
          placeholder="Enter your last name"
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
      />

      <div className="grid grid-cols-1 gap-4">
        <Input
          label="Password"
          type="password"
          name="password"
          required
          placeholder="Create a password"
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm your password"
        />
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <Button type="submit" fullWidth>
        Create Account
      </Button>
    </form>
  );
}
