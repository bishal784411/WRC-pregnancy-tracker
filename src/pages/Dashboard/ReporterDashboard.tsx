import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { IssuesTable } from '../../components/tables/IssuesTable';
import { FilterPanel } from '../../components/filters/FilterPanel';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { FileText } from 'lucide-react';
import InlineReloadIndicator from '../../components/ui/InlineReloadIndicator';


interface FilterState {
  category: string;
  severity: string;
  status: string;
  reporterRole: string;
  dateRange: string;
}

interface ReporterDashboardProps {
  onNewIssue: () => void;
  onViewReport: (id: string) => void;
  onEditReport: (id: string) => void;
}

export function ReporterDashboard({ onNewIssue, onViewReport, onEditReport }: ReporterDashboardProps) {
  const { user } = useAuth();
  const { issues, loading } = useIssues();
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    severity: '',
    status: '',
    reporterRole: '',
    dateRange: ''
  });

  // Filter issues by current user (non-admin users only see their own reports)
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
    return <InlineReloadIndicator />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="space-y-8">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.firstName ?? "Anonymous"}
              </h1>
            </div>
            <div>
              <Button onClick={onNewIssue} className="w-full md:w-auto">
                <FileText className="h-5 w-5 mr-2" />
                Report New Issue
              </Button>
            </div>
          </div>
        </div>

        {/* Modern Stats Cards with glassmorphism and animations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative p-6 bg-white/80 backdrop-blur-xl border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Total Reports</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stats.total}
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative p-6 bg-white/80 backdrop-blur-xl border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Open Issues</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stats.open}
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative p-6 bg-white/80 backdrop-blur-xl border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
             
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">In Progress</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stats.inProgress}
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative p-6 bg-white/80 backdrop-blur-xl border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center">
                
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600">Resolved</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stats.resolved}
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Modern Reports Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
          <Card className="relative bg-white/70 backdrop-blur-xl border-0 rounded-3xl shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-indigo-50/50 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
            
            <div className="relative border-b">
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                    Your Reports
                  </h2>
                 
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-6">
                <FilterPanel
                  filters={filters}
                  onFiltersChange={setFilters}
                  showReporterRole={false}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent rounded-2xl"></div>
                <div className="relative bg-white/60 rounded-2xl overflow-hidden shadow-lg border border-slate-200/50">
                  <IssuesTable
                    issues={filteredIssues}
                    isAdmin={false}
                    onViewReport={onViewReport}
                    onEditReport={onEditReport}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}