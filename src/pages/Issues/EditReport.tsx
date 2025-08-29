import React, { useState } from 'react';
import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { ArrowLeft, Save } from 'lucide-react';
import { ISSUE_CATEGORIES, SEVERITY_LEVELS, STATUS_LABELS } from '../../utils/constants';
import { Issue } from '../../types';

interface EditReportProps {
  reportId: string;
  onBack: () => void;
}

export function EditReport({ reportId, onBack }: EditReportProps) {
  const { issues, updateIssueStatus } = useIssues();
  const issue = issues.find(i => i.id === reportId);
  
  const [formData, setFormData] = useState({
    category: issue?.category || 'prenatal_care',
    severity: issue?.severity || 'medium',
    status: issue?.status || 'open',
    description: issue?.description || '',
    location: issue?.location || '',
    dateOfIncident: issue?.dateOfIncident || '',
    urgentMedicalAttention: issue?.urgentMedicalAttention || false,
    followUpNeeded: issue?.followUpNeeded || false
  });

  const [loading, setLoading] = useState(false);

  if (!issue) {
    return (
      <div className="space-y-6">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Not Found</h2>
          <p className="text-gray-600 mb-6">The requested report could not be found.</p>
          <Button onClick={onBack}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Edit Report', current: true }
  ];

  const categoryOptions = Object.entries(ISSUE_CATEGORIES).map(([value, label]) => ({
    value,
    label
  }));

  const severityOptions = Object.entries(SEVERITY_LEVELS).map(([value, label]) => ({
    value,
    label
  }));

  const statusOptions = Object.entries(STATUS_LABELS).map(([value, label]) => ({
    value,
    label
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Update status if changed
      if (formData.status !== issue.status) {
        await updateIssueStatus(issue.id, formData.status as Issue['status']);
      }
      
      // In a real app, you would update other fields too
      console.log('Updated report:', formData);
      onBack();
    } catch (error) {
      console.error('Failed to update report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Report</h1>
            <p className="text-gray-600">Report ID: {issue.id}</p>
          </div>
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                options={categoryOptions}
                required
              />

              <Select
                label="Severity"
                value={formData.severity}
                onChange={(e) => handleInputChange('severity', e.target.value)}
                options={severityOptions}
                required
              />

              <Select
                label="Status"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                options={statusOptions}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
                rows={6}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                required
              />

              <Input
                label="Date of Incident"
                type="date"
                value={formData.dateOfIncident}
                onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="urgentMedicalAttention"
                  checked={formData.urgentMedicalAttention}
                  onChange={(e) => handleInputChange('urgentMedicalAttention', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="urgentMedicalAttention" className="ml-2 block text-sm text-gray-900">
                  Requires urgent medical attention
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="followUpNeeded"
                  checked={formData.followUpNeeded}
                  onChange={(e) => handleInputChange('followUpNeeded', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="followUpNeeded" className="ml-2 block text-sm text-gray-900">
                  Follow-up needed
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button type="button" variant="outline" onClick={onBack}>
                Cancel
              </Button>
              <Button type="submit" loading={loading}>
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}