import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
// import { Toast } from '../ui/Toast';

interface LoginFormProps {
  onToast?: (message: string, type: 'success' | 'error') => void;
}

export function LoginForm({ onToast }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const { login, verifyEmail, loading } = useAuth();

  const showToast = (message: string, type: 'success' | 'error') => {
    if (onToast) onToast(message, type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (needsVerification && !isVerifying) {
        await verifyEmail(email, code);
        setNeedsVerification(false);
        setIsVerifying(false);
        setCode('');
        showToast('Your email has been successfully verified!', 'success');
      } else {
        await login(email, password);
        showToast('Logged in successfully!', 'success');
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      if (errorMessage === 'EMAIL_NOT_VERIFIED') {
        setNeedsVerification(true);
        setError('Please verify your email address first. Enter the 6-digit code sent to your email.');
      } else {
        setError(errorMessage);
        showToast(errorMessage, 'error');
      }
    }
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsVerifying(true);

    try {
      await verifyEmail(email, code);
      setNeedsVerification(false);
      setIsVerifying(false);
      setCode('');
      showToast('Email verified successfully! You can now log in.', 'success');
    } catch (err) {
      const errMsg = (err as Error).message;
      setError(errMsg);
      showToast(errMsg, 'error');
      setIsVerifying(false);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
      />

      {needsVerification && (
        <>
          <Input
            label="Verification Code"
            value={code}
            onChange={handleCodeChange}
            required
            placeholder="Enter 6-digit code"
            maxLength={6}
          />
          <Button
            type="button"
            onClick={handleVerifyEmail}
            loading={isVerifying}
            variant="secondary"
            fullWidth
          >
            Verify Email
          </Button>
        </>
      )}

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <Button type="submit" fullWidth loading={loading} disabled={needsVerification}>
        {needsVerification ? 'Verify Email First' : 'Sign In'}
      </Button>

      <div className="text-sm text-gray-600">
           <p>Demo credentials:</p>
           <p>Admin: admin@wrc.org / password / code: 123456</p>
           <p>Doctor: doctor@example.com / password / code: 654321</p>
           <p>Unverified: unverified@example.com / password / code: 111111</p>
         </div>
    </form>
  );
}
