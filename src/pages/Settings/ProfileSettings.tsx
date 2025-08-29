import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { ArrowLeft, User, Save } from 'lucide-react';
import { ROLE_LABELS } from '../../utils/constants';

interface ProfileSettingsProps {
  onBack: () => void;
}

export function ProfileSettings({ onBack }: ProfileSettingsProps) {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    organization: user?.organization || '',
    licenseNumber: user?.licenseNumber || ''
  });

  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Profile', current: true }
  ];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center">
          <Breadcrumbs items={breadcrumbs} />
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Button>
        </div>


      </div>

      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-gray-600">{user ? ROLE_LABELS[user.role] : ''}</p>
              <p className="text-sm text-gray-500">
                Member since {user ? new Date(user.createdAt).toLocaleDateString() : ''}
              </p>
            </div>
          </div>

          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                value={profileData.firstName}
                onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                required
              />

              <Input
                label="Last Name"
                value={profileData.lastName}
                onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                required
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
              required
            />

            <Input
              label="Organization"
              value={profileData.organization}
              onChange={(e) => setProfileData(prev => ({ ...prev, organization: e.target.value }))}
              helperText="Your healthcare facility, law firm, or organization"
            />

            {user?.role && (user.role === 'healthcare' || user.role === 'legal') && (
              <Input
                label={user.role === 'healthcare' ? 'Medical License Number' : 'Bar Number'}
                value={profileData.licenseNumber}
                onChange={(e) => setProfileData(prev => ({ ...prev, licenseNumber: e.target.value }))}
                helperText="For verification purposes only"
              />
            )}

            <div className="flex justify-end">
              <Button type="submit">
                <Save className="h-5 w-5 mr-2" />
                Update Profile
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}