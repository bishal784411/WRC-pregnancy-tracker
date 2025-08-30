import { useState } from 'react';
import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { IssuesTable } from '../../components/tables/IssuesTable';
import { FilterPanel } from '../../components/filters/FilterPanel';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { FileText, AlertTriangle, Clock, CheckCircle, Users } from 'lucide-react';
import InlineReloadIndicator from '../../components/ui/InlineReloadIndicator';


interface FilterState {
  category: string;
  severity: string;
  status: string;
  reporterRole: string;
  dateRange: string;
}

interface AdminReportsProps {
  onViewReport: (id: string) => void;
  onEditReport: (id: string) => void;
}

export function AdminReports({ onViewReport, onEditReport }: AdminReportsProps) {
  const { issues, loading, updateIssueStatus } = useIssues();
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    severity: '',
    status: '',
    reporterRole: '',
    dateRange: ''
  });

  // Admin sees all issues
  const allIssues = issues;

  // Apply filters
  const filteredIssues = allIssues.filter(issue => {
    if (filters.category && issue.category !== filters.category) return false;
    if (filters.severity && issue.severity !== filters.severity) return false;
    if (filters.status && issue.status !== filters.status) return false;
    if (filters.reporterRole && issue.reporterRole !== filters.reporterRole) return false;
    return true;
  });

  const stats = {
    total: allIssues.length,
    open: allIssues.filter(i => i.status === 'open').length,
    inProgress: allIssues.filter(i => i.status === 'in_progress').length,
    resolved: allIssues.filter(i => i.status === 'resolved').length,
    uniqueReporters: new Set(allIssues.map(i => i.reporterId)).size
  };

  const breadcrumbs = [
    { label: 'Reports Submitted', current: true }
  ];

  if (loading) {
    return <InlineReloadIndicator />;

  }

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Reports Submitted
          </h1>
          <p className="text-gray-600">
            Overview of all reported issues from healthcare providers, attorneys, chaplains, and advocates
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Reporters</p>
              <p className="text-2xl font-bold text-gray-900">{stats.uniqueReporters}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Reports Table */}
      <Card>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">All Submitted Reports</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage and review all reports submitted by healthcare providers, attorneys, chaplains, and advocates
          </p>
        </div>

        <div className="p-6">
          <FilterPanel
            filters={filters}
            onFiltersChange={setFilters}
            showReporterRole={true}
          />
        </div>

        <IssuesTable
          issues={filteredIssues}
          isAdmin={true}
          onUpdateStatus={updateIssueStatus}
          onViewReport={onViewReport}
          onEditReport={onEditReport}
        />
      </Card>
    </div>
  );
}