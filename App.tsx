import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import { StudentDashboard } from './pages/StudentDashboard';
import { NewComplaint } from './pages/NewComplaint';
import { AdminDashboard } from './pages/AdminDashboard';
import { History } from './pages/History';
import { ComplaintLogs } from './pages/ComplaintLogs';
import { HallReports } from './pages/HallReports';
import { StudentDirectory } from './pages/StudentDirectory';
import { Settings } from './pages/Settings';
import { UserRole } from './types';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = (role: 'STUDENT' | 'ADMIN') => {
    setUserRole(role === 'STUDENT' ? UserRole.STUDENT : UserRole.ADMIN);
    setCurrentView(role === 'STUDENT' ? 'dashboard' : 'admin-dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentView('login');
  };

  const renderContent = () => {
    switch (currentView) {
      // Student Routes
      case 'dashboard':
      case 'my-complaints':
        return <StudentDashboard />;
      case 'new-complaint':
        return <NewComplaint />;
      case 'history':
        return <History />;
        
      // Admin Routes
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'hall-reports':
        return <HallReports />;
      case 'complaint-logs':
        return <ComplaintLogs />;
      case 'student-dir':
        return <StudentDirectory />;
        
      // Shared Routes
      case 'settings':
        return <Settings />;
        
      default:
        return userRole === UserRole.ADMIN ? <AdminDashboard /> : <StudentDashboard />;
    }
  };

  if (currentView === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        role={userRole || UserRole.STUDENT}
        onLogout={handleLogout}
      />
      <div className="flex-1 ml-64 flex flex-col">
        <Header 
            title={
                currentView === 'dashboard' ? 'Overview' : 
                currentView === 'new-complaint' ? 'File Complaint' :
                currentView === 'history' ? 'History' :
                currentView === 'admin-dashboard' ? 'Admin Overview' : 
                currentView === 'hall-reports' ? 'Hall Reports' :
                currentView === 'complaint-logs' ? 'Complaint Logs' :
                currentView === 'student-dir' ? 'Student Directory' :
                currentView === 'settings' ? 'Settings' :
                'Portal'
            }
            userInitials={userRole === UserRole.ADMIN ? 'AU' : 'OJ'}
            userName={userRole === UserRole.ADMIN ? 'Admin User' : 'Olawale Johnson'}
            userSubtitle={userRole === UserRole.ADMIN ? 'DSA Office' : 'Moremi Hall • 302'}
        />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;