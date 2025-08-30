import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useEffect, useState } from 'react';
import { Edit, Save } from 'lucide-react';
interface SecuritySettingsProps {
  onBack: () => void;
}

export function SecuritySettings({ }: SecuritySettingsProps) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
  }, [isEditing]);

  const handleEditToggle = () => {
    const newEditingState = !isEditing;

    if (isEditing) {
    }

    setIsEditing(newEditingState);

    setTimeout(() => {
    }, 100);
  };

  return (
    <div className="space-y-6">

      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter current password"
            />
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
          <div className="flex justify-end gap-3 mt-4">
            {isEditing && (
              <Button
                type="button"
                variant="secondary"
                className="w-[200px]"
                onClick={handleEditToggle}
              >
                Cancel
              </Button>
            )}

            {isEditing ? (
              <div className='w-[200px]'>
                <Button type="button" className="w-[200px]">
                Update Password
              </Button>
              </div>
              
            ) : (
              <Button
                type="button"
                variant="secondary"
                className="w-[200px]"
                onClick={handleEditToggle}
              >
                <Edit className="h-5 w-5 mr-2" />
                Edit Profile
              </Button>
            )}

            <Button variant="danger" className="w-[200px]">
              Delete My Account
            </Button>
          </div>

        </div>
      </Card>
    </div>
  );
}