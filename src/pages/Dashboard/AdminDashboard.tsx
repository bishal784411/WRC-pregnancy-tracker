import React, { useState } from 'react';
import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { IssuesTable } from '../../components/tables/IssuesTable';
import { FilterPanel } from '../../components/filters/FilterPanel';
import { Pagination } from '../../components/pagination/Pagination';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { FileText, AlertTriangle, Clock, CheckCircle, Users, TrendingUp } from 'lucide-react';

interface FilterState {
  category: string;
  severity: string;
  status: string;
  reporterRole: string;
  dateRange: string;
}

export function AdminDashboard() {
  const { issues, loading, updateIssueStatus } = useIssues();
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    severity: '',
    status: '',
    reporterRole: '',
    dateRange: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Apply filters
  const filteredIssues = issues.filter(issue => {
    if (filters.category && issue.category !== filters.category) return false;
    if (filters.severity && issue.severity !== filters.severity) return false;
    if (filters.status && issue.status !== filters.status) return false;
    if (filters.reporterRole && issue.reporterRole !== filters.reporterRole) return false;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredIssues.length / itemsPerPage);
  const paginatedIssues = filteredIssues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: issues.length,
    open: issues.filter(i => i.status === 'open').length,
    inProgress: issues.filter(i => i.status === 'in_progress').length,
    resolved: issues.filter(i => i.status === 'resolved').length,
    critical: issues.filter(i => i.severity === 'critical').length,
    urgent: issues.filter(i => i.urgentMedicalAttention).length
  };

  const breadcrumbs = [
    { label: 'Admin Dashboard', current: true }
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
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Overview of all reported issues and system activity
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Issues</p>
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
              <p className="text-sm font-medium text-gray-600">Open</p>
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
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Critical</p>
              <p className="text-2xl font-bold text-gray-900">{stats.critical}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Urgent Medical</p>
              <p className="text-2xl font-bold text-gray-900">{stats.urgent}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Issues Table */}
      <Card>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">All Issues</h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage and track all reported issues ({filteredIssues.length} total)
              </p>
            </div>
            <div className="flex space-x-2">
              {stats.critical > 0 && (
                <Badge variant="danger">{stats.critical} Critical</Badge>
              )}
              {stats.urgent > 0 && (
                <Badge variant="warning">{stats.urgent} Urgent Medical</Badge>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <FilterPanel
            filters={filters}
            onFiltersChange={setFilters}
            showReporterRole={true}
          />
        </div>

        <IssuesTable
          issues={paginatedIssues}
          isAdmin={true}
          onUpdateStatus={updateIssueStatus}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Card>
    </div>
  );
}