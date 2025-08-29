import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacySettingsProps {
  onBack: () => void;
}

export function PrivacySettings({ onBack }: PrivacySettingsProps) {
  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Privacy', current: true }
  ];

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Privacy Settings</h1>
            <p className="text-gray-600">Manage your privacy and data preferences</p>
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
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Privacy & Data</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Data Protection</h4>
              <p className="text-sm text-blue-800">
                Your reports are encrypted and stored securely. Personal identifying information is never included in reports to maintain confidentiality of those you're advocating for.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-2">Data Retention</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Reports are retained for advocacy and analysis purposes. You can request deletion of your account and associated data.
                </p>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-2">Account Actions</h4>
                <div className="space-y-3">
                  <Button variant="outline">Download My Data</Button>
                  <Button variant="danger">Delete My Account</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}