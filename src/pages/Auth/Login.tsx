import React, { useState } from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import { SignupForm } from '../../components/forms/SignupForm';
import { Card } from '../../components/ui/Card';
import { Shield } from 'lucide-react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Women's Refugee Commission
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Pregnancy Support Tracker
          </p>
          <p className="mt-4 text-sm text-gray-500 max-w-sm mx-auto">
            Confidential reporting system for healthcare providers, attorneys, chaplains, and advocates supporting pregnant women in immigration custody.
          </p>
        </div>

        <Card>
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 text-sm font-medium text-center border-b-2 transition-colors ${
                  isLogin
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 text-sm font-medium text-center border-b-2 transition-colors ${
                  !isLogin
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {isLogin ? <LoginForm /> : <SignupForm />}
        </Card>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By using this system, you agree to maintain confidentiality and use the information solely for advocacy and support purposes.
          </p>
        </div>
      </div>
    </div>
  );
}