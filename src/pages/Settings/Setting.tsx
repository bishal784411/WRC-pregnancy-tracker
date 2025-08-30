import { ProfileSettings } from './ProfileSettings';
import { SecuritySettings } from './SecuritySettings';
import InlineReloadIndicator from '../../components/ui/InlineReloadIndicator';
import { useIssues } from '../../hooks/useIssues';


export function Settings() {
    const { loading } = useIssues();
  
  
  const handleBack = () => {
    console.log('Back to dashboard');
  };

  if (loading) {
    return <InlineReloadIndicator />;
  }

  return (
    <div className="space-y-6">
      <div className='flex flex-col gap-4'>
        <ProfileSettings onBack={handleBack} />
        <SecuritySettings onBack={handleBack} />
      </div>
    </div>
  );
}
