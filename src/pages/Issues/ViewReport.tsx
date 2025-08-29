import { useIssues } from '../../hooks/useIssues';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import InlineReloadIndicator from '../../components/ui/InlineReloadIndicator';
import { ArrowLeft, Calendar, MapPin, User, AlertTriangle } from 'lucide-react';
import { ISSUE_CATEGORIES, SEVERITY_LEVELS, STATUS_LABELS, SEVERITY_COLORS, STATUS_COLORS, ROLE_LABELS } from '../../utils/constants';

interface ViewReportProps {
  reportId: string;
  onBack: () => void;
  isAdmin?: boolean;
}

export function ViewReport({ reportId, onBack, isAdmin = false }: ViewReportProps) {
  const { issues, loading } = useIssues();
  const issue = issues.find(i => i.id === reportId);

  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <InlineReloadIndicator />
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="space-y-6">
        <Card className="p-8 text-center shadow-md rounded-2xl border border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Report Not Found</h2>
          <p className="text-gray-600 mb-6">The requested report could not be found.</p>
          <Button onClick={onBack} className="rounded-xl px-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'View Report', current: true }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Breadcrumbs items={breadcrumbs} />
        <div>
            <Button
          onClick={onBack}
         
          className="border-gray-300 hover:bg-gray-100 rounded-xl shadow-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
            <div className="p-6">
              {/* Title */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-semibold text-gray-900">
                      {ISSUE_CATEGORIES[issue.category]}
                    </h1>
                    {issue.urgentMedicalAttention && (
                      <div className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <AlertTriangle className="h-4 w-4" />
                        Urgent
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Report ID: {issue.id}</p>
                  <div className="flex items-center space-x-3 mt-4">
                    <Badge className={`${SEVERITY_COLORS[issue.severity]} px-3 py-1 rounded-full`}>
                      {SEVERITY_LEVELS[issue.severity]}
                    </Badge>
                    <Badge className={`${STATUS_COLORS[issue.status]} px-3 py-1 rounded-full`}>
                      {STATUS_LABELS[issue.status]}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 whitespace-pre-wrap">{issue.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{issue.location}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Date of Incident</h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(issue.dateOfIncident).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Additional Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={issue.urgentMedicalAttention}
                        disabled
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <span className="text-gray-700 text-sm">Requires urgent medical attention</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={issue.followUpNeeded}
                        disabled
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <span className="text-gray-700 text-sm">Follow-up needed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Report Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Reporter Role</p>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900">{ROLE_LABELS[issue.reporterRole]}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Reporting For</p>
                  <p className="text-sm text-gray-900">
                    {issue.reportingFor === 'self' ? 'Self' : 'Third Party'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Submitted</p>
                  <p className="text-sm text-gray-900">{formatDate(issue.createdAt)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Last Updated</p>
                  <p className="text-sm text-gray-900">{formatDate(issue.updatedAt)}</p>
                </div>
              </div>
            </div>
          </Card>

          {isAdmin && (
            <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
              <div className="p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full text-sm rounded-lg">
                    Print Report
                  </Button>
                  <Button variant="outline" className="w-full text-sm rounded-lg">
                    Export PDF
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
