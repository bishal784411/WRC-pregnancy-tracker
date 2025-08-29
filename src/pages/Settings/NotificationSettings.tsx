import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { ArrowLeft, Bell } from 'lucide-react';

interface NotificationSettingsProps {
  onBack: () => void;
}

export function NotificationSettings({ onBack }: NotificationSettingsProps) {
  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Notifications', current: true }
  ];

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notification Settings</h1>
            <p className="text-gray-600">Manage your notification preferences</p>
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
            <Bell className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Issue Status Updates</p>
                  <p className="text-sm text-gray-500">Get notified when the status of your reports changes</p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">System Announcements</p>
                  <p className="text-sm text-gray-500">Important updates about the reporting system</p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Follow-up Requests</p>
                  <p className="text-sm text-gray-500">When additional information is needed for your reports</p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}