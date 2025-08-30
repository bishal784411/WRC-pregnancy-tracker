import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { ISSUE_CATEGORIES, SEVERITY_LEVELS, STATUS_LABELS, ROLE_LABELS } from '../../utils/constants';
interface FilterState {
  category: string;
  severity: string;
  status: string;
  reporterRole: string;
  dateRange: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  showReporterRole?: boolean;
}

export function FilterPanel({ filters, onFiltersChange, showReporterRole = false }: FilterPanelProps) {
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...Object.entries(ISSUE_CATEGORIES).map(([value, label]) => ({ value, label }))
  ];

  const severityOptions = [
    { value: '', label: 'All Severities' },
    ...Object.entries(SEVERITY_LEVELS).map(([value, label]) => ({ value, label }))
  ];

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    ...Object.entries(STATUS_LABELS).map(([value, label]) => ({ value, label }))
  ];

  const roleOptions = [
    { value: '', label: 'All Roles' },
    ...Object.entries(ROLE_LABELS)
      .filter(([key]) => key !== 'admin')
      .map(([value, label]) => ({ value, label }))
  ];

  const dateRangeOptions = [
    { value: '', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: '3months', label: 'Last 3 Months' }
  ];

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: '',
      severity: '',
      status: '',
      reporterRole: '',
      dateRange: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button size="sm" variant="outline" onClick={clearFilters}>
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Select
          label="Category"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          options={categoryOptions}
        />

        <Select
          label="Severity"
          value={filters.severity}
          onChange={(e) => handleFilterChange('severity', e.target.value)}
          options={severityOptions}
        />

        <Select
          label="Status"
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          options={statusOptions}
        />

        {showReporterRole && (
          <Select
            label="Reporter Role"
            value={filters.reporterRole}
            onChange={(e) => handleFilterChange('reporterRole', e.target.value)}
            options={roleOptions}
          />
        )}

        <Select
          label="Date Range"
          value={filters.dateRange}
          onChange={(e) => handleFilterChange('dateRange', e.target.value)}
          options={dateRangeOptions}
        />
      </div>
    </div>
  );
}