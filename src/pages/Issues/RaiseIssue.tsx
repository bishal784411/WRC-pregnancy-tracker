import React, { useState } from 'react';
import { IssueForm } from '../../components/forms/IssueForm';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface RaiseIssueProps {
  onBackToDashboard: () => void;
}

export function RaiseIssue({ onBackToDashboard }: RaiseIssueProps) {
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Report Issue', current: true }
  ];

  const handleSuccess = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <Card className="max-w-2xl mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Report Submitted Successfully
          </h2>
          
          <p className="text-gray-600 mb-6">
            Thank you for submitting this report. Your information has been received and will be reviewed by our team. All reports are handled confidentially and used to advocate for improved conditions.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
            <ul className="text-sm text-blue-800 text-left space-y-1">
              <li>• Your report will be reviewed by our advocacy team</li>
              <li>• If urgent medical attention was indicated, priority review will occur</li>
              <li>• The information will be used to identify patterns and systemic issues</li>
              <li>• You can track the status in your dashboard</li>
              <li>• If follow-up is needed, our team may reach out through secure channels</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <Button onClick={onBackToDashboard} className="w-full md:w-auto">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to Dashboard
            </Button>
            
            <p className="text-sm text-gray-500">
              If you need immediate assistance or have urgent concerns, please contact our emergency line at (555) 123-4567
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <div className="max-w-full">
        <IssueForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
}