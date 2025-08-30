import { useState, useEffect } from 'react';
import { Issue } from '../types';

// Mock data for development
const mockIssues: Issue[] = [
  {
    id: '1',
    reporterId: '2',
    reporterRole: 'healthcare',
    reportingFor: 'third_party',
    category: 'prenatal_care',
    severity: 'high',
    description: 'Pregnant woman denied regular prenatal check-ups for over 3 weeks',
    location: 'Detention Facility A',
    dateOfIncident: '2024-01-15',
    urgentMedicalAttention: true,
    followUpNeeded: true,
    status: 'open',
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z'
  },
  {
    id: '2',
    reporterId: '2',
    reporterRole: 'healthcare',
    reportingFor: 'third_party',
    category: 'nutrition_issues',
    severity: 'medium',
    description: 'Inadequate nutrition provided for pregnant women',
    location: 'Detention Facility B',
    dateOfIncident: '2024-01-10',
    urgentMedicalAttention: false,
    followUpNeeded: true,
    status: 'in_progress',
    createdAt: '2024-01-11T14:30:00Z',
    updatedAt: '2024-01-16T09:00:00Z'
  }
];

export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setIssues(mockIssues);
      setLoading(false);
    }, 500);
  }, []);

  const addIssue = async (issueData: Omit<Issue, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const newIssue: Issue = {
      ...issueData,
      id: Date.now().toString(),
      status: 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setIssues(prev => [newIssue, ...prev]);
    mockIssues.unshift(newIssue);
    
    return newIssue;
  };

  const updateIssueStatus = async (issueId: string, status: Issue['status']) => {
    setIssues(prev => prev.map(issue => 
      issue.id === issueId 
        ? { ...issue, status, updatedAt: new Date().toISOString() }
        : issue
    ));
    
    const index = mockIssues.findIndex(issue => issue.id === issueId);
    if (index !== -1) {
      mockIssues[index] = { 
        ...mockIssues[index], 
        status, 
        updatedAt: new Date().toISOString() 
      };
    }
  };

  return {
    issues,
    loading,
    addIssue,
    updateIssueStatus
  };
}