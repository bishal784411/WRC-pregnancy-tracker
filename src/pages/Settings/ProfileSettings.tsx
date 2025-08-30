import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { User, Save, Edit } from 'lucide-react';
import { ROLE_LABELS } from '../../utils/constants';

interface ProfileSettingsProps {
  onBack: () => void;
}

export function ProfileSettings({}: ProfileSettingsProps) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  // Debug: Track state changes
  useEffect(() => {
  }, [isEditing]);

  useEffect(() => {
  }, [user]);

  const handleEditToggle = () => {
    const newEditingState = !isEditing;
    
    if (isEditing) {
      // Reset to original values when canceling edit
      setProfileData({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
      });
    }
    
    setIsEditing(newEditingState);
    
    setTimeout(() => {
    }, 100);
  };

  const handleProfileUpdate = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
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

      

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  label="First Name"
                  value={profileData.firstName}
                  onChange={(e) => {
                    setProfileData(prev => ({ ...prev, firstName: e.target.value }));
                  }}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div>
                <Input
                  label="Last Name"
                  value={profileData.lastName}
                  onChange={(e) => {
                    setProfileData(prev => ({ ...prev, lastName: e.target.value }));
                  }}
                  disabled={!isEditing}
                  required
                />
                
              </div>
            </div>

            <div>
              <Input
                label="Email Address"
                type="email"
                value={profileData.email}
                onChange={(e) => {
                  setProfileData(prev => ({ ...prev, email: e.target.value }));
                }}
                disabled={!isEditing}
                required
              />
              
            </div>

            <div className="flex justify-end space-x-3">
              {isEditing && (
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={handleEditToggle}
                >
                  Cancel
                </Button>
              )}
              
              {isEditing ? (
                <div className='w-[200px]'>
                  <Button 
                  type="button"
                  onClick={handleProfileUpdate}
                >
                  <Save className="h-5 w-5 mr-2" />
                  Update Profile
                </Button>
                  </div>
              ) : (
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={handleEditToggle}
                >
                  <Edit className="h-5 w-5 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}