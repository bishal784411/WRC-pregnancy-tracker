import { ProfileSettings } from './ProfileSettings';
import { SecuritySettings } from './SecuritySettings';

export function Settings() {
  const handleBack = () => {
    console.log('Back to dashboard');
  };

  return (
    <div className="space-y-6">

      <div className='flex flex-col gap-4'>
        <ProfileSettings onBack={handleBack} />
        <SecuritySettings onBack={handleBack} />
      </div>
    </div>
  );
}
