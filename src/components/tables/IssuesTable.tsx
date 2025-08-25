import React from 'react';
import { Issue } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ISSUE_CATEGORIES, SEVERITY_LEVELS, STATUS_LABELS, SEVERITY_COLORS, STATUS_COLORS, ROLE_LABELS } from '../../utils/constants';
import { Eye, Edit } from 'lucide-react';

interface IssuesTableProps {
  issues: Issue[];
  isAdmin?: boolean;
  onUpdateStatus?: (issueId: string, status: Issue['status']) => void;
}

export function IssuesTable({ issues, isAdmin = false, onUpdateStatus }: IssuesTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (issues.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">No issues reported yet</div>
        <div className="text-gray-500 text-sm">
          Issues will appear here once they are submitted
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Issue Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Severity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            {isAdmin && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reporter
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {issues.map((issue) => (
            <tr key={issue.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-gray-900 line-clamp-2">
                    {issue.description.length > 100 
                      ? `${issue.description.substring(0, 100)}...`
                      : issue.description
                    }
                  </div>
                  <div className="text-xs text-gray-500">
                    {issue.location}
                  </div>
                  <div className="flex space-x-2">
                    {issue.urgentMedicalAttention && (
                      <Badge variant="danger">Urgent Medical</Badge>
                    )}
                    {issue.followUpNeeded && (
                      <Badge variant="warning">Follow-up Needed</Badge>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-900">
                  {ISSUE_CATEGORIES[issue.category]}
                </span>
              </td>
              <td className="px-6 py-4">
                <Badge className={SEVERITY_COLORS[issue.severity]}>
                  {SEVERITY_LEVELS[issue.severity]}
                </Badge>
              </td>
              <td className="px-6 py-4">
                {isAdmin && onUpdateStatus ? (
                  <select
                    value={issue.status}
                    onChange={(e) => onUpdateStatus(issue.id, e.target.value as Issue['status'])}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                ) : (
                  <Badge className={STATUS_COLORS[issue.status]}>
                    {STATUS_LABELS[issue.status]}
                  </Badge>
                )}
              </td>
              {isAdmin && (
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-gray-900 font-medium">
                      {ROLE_LABELS[issue.reporterRole]}
                    </div>
                    <div className="text-xs text-gray-500">
                      Reporting for: {issue.reportingFor === 'self' ? 'Self' : 'Third party'}
                    </div>
                  </div>
                </td>
              )}
              <td className="px-6 py-4">
                <div className="text-sm">
                  <div className="text-gray-900">
                    {formatDate(issue.createdAt)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Incident: {formatDate(issue.dateOfIncident)}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {isAdmin && (
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}