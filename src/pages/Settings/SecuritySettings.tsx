import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { ArrowLeft, Lock, Shield } from 'lucide-react';

interface SecuritySettingsProps {
  onBack: () => void;
}

export function SecuritySettings({ onBack }: SecuritySettingsProps) {
  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Security', current: true }
  ];

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
            <p className="text-gray-600">Manage your account security</p>
          </div>
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
          </div>
          
          <div className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter current password"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />
              <Input
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
            <Button>Update Password</Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Two-Factor Authentication</h2>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              Two-factor authentication adds an extra layer of security to your account. This feature will be available soon.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}