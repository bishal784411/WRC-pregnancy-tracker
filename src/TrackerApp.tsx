import { useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { Header } from './components/navigation/Header';
import { Sidebar } from './components/navigation/Sidebar';
import { Login } from './pages/Auth/Login';
import { ReporterDashboard } from './pages/Dashboard/ReporterDashboard';
import { AdminReports } from './pages/Dashboard/AdminReports';
import { RaiseIssue } from './pages/Issues/RaiseIssue';
import { ViewReport } from './pages/Issues/ViewReport';
import { EditReport } from './pages/Issues/EditReport';
import { ProfileSettings } from './pages/Settings/ProfileSettings';
import { SecuritySettings } from './pages/Settings/SecuritySettings';
import { NotificationSettings } from './pages/Settings/NotificationSettings';
import { PrivacySettings } from './pages/Settings/PrivacySettings';

function TrackerAppContent() {
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  // Handle responsive sidebar behavior
  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleCloseSidebar = () => {
    setSidebarCollapsed(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <ReporterDashboard 
            onNewIssue={() => setActiveSection('new-issue')}
            onViewReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('view-report');
            }}
            onEditReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('edit-report');
            }}
          />
        );
      case 'reports-submitted':
        return user?.role === 'admin' ? (
          <AdminReports 
            onViewReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('view-report');
            }}
            onEditReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('edit-report');
            }}
          />
        ) : null;
      case 'new-issue':
        return user?.role !== 'admin' ? (
          <RaiseIssue onBackToDashboard={() => setActiveSection('dashboard')} />
        ) : null;
      case 'view-report':
        return selectedReportId ? (
          <ViewReport 
            reportId={selectedReportId} 
            onBack={() => setActiveSection('dashboard')} 
          />
        ) : null;
      case 'edit-report':
        return selectedReportId ? (
          <EditReport 
            reportId={selectedReportId} 
            onBack={() => setActiveSection('dashboard')} 
          />
        ) : null;
      case 'settings-profile':
        return <ProfileSettings onBack={() => setActiveSection('dashboard')} />;
      case 'settings-security':
        return <SecuritySettings onBack={() => setActiveSection('dashboard')} />;
      case 'settings-notifications':
        return <NotificationSettings onBack={() => setActiveSection('dashboard')} />;
      case 'settings-privacy':
        return <PrivacySettings onBack={() => setActiveSection('dashboard')} />;
      default:
        return (
          <ReporterDashboard 
            onNewIssue={() => setActiveSection('new-issue')}
            onViewReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('view-report');
            }}
            onEditReport={(id) => {
              setSelectedReportId(id);
              setActiveSection('edit-report');
            }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        collapsed={sidebarCollapsed}
        onClose={handleCloseSidebar}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        <Header 
          onSettingsChange={setActiveSection}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={handleToggleSidebar}
        />
        
        <main className="flex-1 p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export function TrackerApp() {
  return (
    <AuthProvider>
      <TrackerAppContent />
    </AuthProvider>
  );
}