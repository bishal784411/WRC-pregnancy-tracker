import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useEffect, useState } from 'react';
import { Edit } from 'lucide-react';
import InlineReloadIndicator from '../../components/ui/InlineReloadIndicator';


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
            <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
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
                Change Password
              </Button>
            )}


          </div>

          <div className="space-y-6 mt-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Data Protection</h4>
              <p className="text-sm text-blue-800">
                Your reports are stored securely. Personal identifying information is never included in reports to maintain confidentiality of those you're advocating for. <br /> Reports are retained for advocacy and analysis purposes. <br /> You can request deletion of your account and associated data.
              </p>
            </div>

            <div className="space-y-4">

              <div className='flex justify-end'>
                <div className="space-y-3 w-[200px]">
                  <Button variant="danger" className="w-[200px]">Delete My Account</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
}