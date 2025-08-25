import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { IssuesTable } from '../../components/tables/IssuesTable';
import { FilterPanel } from '../../components/filters/FilterPanel';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { FileText, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { ROLE_LABELS } from '../../utils/constants';

interface FilterState {
  category: string;
  severity: string;
  status: string;
  reporterRole: string;
  dateRange: string;
}

interface ReporterDashboardProps {
  onNewIssue: () => void;
}

export function ReporterDashboard({ onNewIssue }: ReporterDashboardProps) {
  const { user } = useAuth();
  const { issues, loading } = useIssues();
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    severity: '',
    status: '',
    reporterRole: '',
    dateRange: ''
  });

  // Filter issues by current user
  const userIssues = issues.filter(issue => issue.reporterId === user?.id);

  // Apply filters
  const filteredIssues = userIssues.filter(issue => {
    if (filters.category && issue.category !== filters.category) return false;
    if (filters.severity && issue.severity !== filters.severity) return false;
    if (filters.status && issue.status !== filters.status) return false;
    return true;
  });

  const stats = {
    total: userIssues.length,
    open: userIssues.filter(i => i.status === 'open').length,
    inProgress: userIssues.filter(i => i.status === 'in_progress').length,
    resolved: userIssues.filter(i => i.status === 'resolved').length
  };

  const breadcrumbs = [
    { label: 'Dashboard', current: true }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.firstName}
          </h1>
          <p className="text-gray-600">
            {ROLE_LABELS[user?.role || 'healthcare']} Dashboard
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open Issues</p>
              <p className="text-2xl font-bold text-gray-900">{stats.open}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900">{stats.resolved}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        </div>
        <div className="space-y-3">
          <Button onClick={onNewIssue} className="w-full md:w-auto">
            <FileText className="h-5 w-5 mr-2" />
            Report New Issue
          </Button>
          <p className="text-sm text-gray-600">
            Submit a confidential report about issues affecting pregnant women in immigration custody.
          </p>
        </div>
      </Card>

      {/* Recent Issues */}
      <Card>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Your Reports</h2>
          <p className="text-sm text-gray-600 mt-1">
            Track the status of your submitted reports
          </p>
        </div>

        <div className="p-6">
          <FilterPanel
            filters={filters}
            onFiltersChange={setFilters}
            showReporterRole={false}
          />
        </div>

        <IssuesTable
          issues={filteredIssues}
          isAdmin={false}
        />
      </Card>
    </div>
  );
}