import React, { useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { Header } from './components/navigation/Header';
import { Sidebar } from './components/navigation/Sidebar';
import { Login } from './pages/Auth/Login';
import { ReporterDashboard } from './pages/Dashboard/ReporterDashboard';
import { AdminDashboard } from './pages/Dashboard/AdminDashboard';
import { RaiseIssue } from './pages/Issues/RaiseIssue';
import { ProfileSettings } from './pages/Profile/ProfileSettings';

function AppContent() {
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

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
        return user.role === 'admin' ? (
          <AdminDashboard />
        ) : (
          <ReporterDashboard onNewIssue={() => setActiveSection('new-issue')} />
        );
      case 'admin':
        return user.role === 'admin' ? <AdminDashboard /> : null;
      case 'new-issue':
        return <RaiseIssue onBackToDashboard={() => setActiveSection('dashboard')} />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <ReporterDashboard onNewIssue={() => setActiveSection('new-issue')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;