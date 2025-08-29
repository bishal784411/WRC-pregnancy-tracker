import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../hooks/useIssues';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Card } from '../ui/Card';
import { IssueCategory } from '../../types';
import { ISSUE_CATEGORIES, SEVERITY_LEVELS } from '../../utils/constants';

interface IssueFormProps {
  onSuccess: () => void;
}

export function IssueForm({ onSuccess }: IssueFormProps) {
  const { user } = useAuth();
  const { addIssue } = useIssues();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    reportingFor: 'third_party',
    category: 'prenatal_care' as IssueCategory,
    severity: 'medium',
    description: '',
    location: '',
    dateOfIncident: '',
    urgentMedicalAttention: false,
    followUpNeeded: false
  });

  const categoryOptions = Object.entries(ISSUE_CATEGORIES).map(([value, label]) => ({
    value,
    label
  }));

  const severityOptions = Object.entries(SEVERITY_LEVELS).map(([value, label]) => ({
    value,
    label
  }));

  const reportingForOptions = [
    { value: 'third_party', label: 'For someone else (Third party)' },
    { value: 'self', label: 'For myself' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await addIssue({
        reporterId: user.id,
        reporterRole: user.role,
        reportingFor: formData.reportingFor as 'self' | 'third_party',
        category: formData.category,
        severity: formData.severity as 'low' | 'medium' | 'high' | 'critical',
        description: formData.description,
        location: formData.location,
        dateOfIncident: formData.dateOfIncident,
        urgentMedicalAttention: formData.urgentMedicalAttention,
        followUpNeeded: formData.followUpNeeded
      });
      onSuccess();
    } catch (error) {
      console.error('Failed to submit issue:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Report New Issue</h2>
        <p className="text-sm text-gray-600">
          Please provide details about the issue. All information is confidential and will be used to improve conditions for pregnant women in immigration custody.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Select
          label="Who are you reporting for?"
          value={formData.reportingFor}
          onChange={(e) => handleInputChange('reportingFor', e.target.value)}
          options={reportingForOptions}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Issue Category"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            options={categoryOptions}
            required
          />

          <Select
            label="Severity Level"
            value={formData.severity}
            onChange={(e) => handleInputChange('severity', e.target.value)}
            options={severityOptions}
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
            rows={4}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please provide details about the issue. Avoid including personally identifiable information."
          />
          <p className="text-xs text-gray-500">
            Do not include names, identification numbers, or other personally identifiable information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            required
            placeholder="Facility name or general location"
            helperText="General facility name or location only"
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

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Confidentiality Notice
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This report will be submitted confidentially. The information will be used to identify patterns and advocate for improved conditions, but individual identifying details will be protected.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <div className='w-[200px]'>
            <Button type="submit" loading={loading}>
              Submit Report
            </Button>
          </div>
          <div className='w-[200px]'>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}