import React from 'react';

interface SidebarProps {
  currentView: string;
  onChangeView: (view: string) => void;
  role: 'STUDENT' | 'ADMIN';
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, role, onLogout }) => {
  const menuItems = role === 'STUDENT' ? [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'my-complaints', label: 'My Complaints', icon: 'assignment' },
    { id: 'new-complaint', label: 'New Complaint', icon: 'add_circle' },
    { id: 'history', label: 'History', icon: 'history' },
  ] : [
    { id: 'admin-dashboard', label: 'Overview', icon: 'dashboard' },
    { id: 'hall-reports', label: 'Hall Reports', icon: 'domain' },
    { id: 'complaint-logs', label: 'Complaint Logs', icon: 'assignment_late' },
    { id: 'student-dir', label: 'Student Directory', icon: 'group' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center p-1 overflow-hidden">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/University_of_Lagos_logo.png/1200px-University_of_Lagos_logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-900 leading-tight">UNILAG</h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            {role === 'STUDENT' ? 'Student Portal' : 'Hostel Admin'}
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              currentView === item.id
                ? 'bg-primary/10 text-slate-900 font-semibold border-l-4 border-primary'
                : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined ${currentView === item.id ? 'icon-filled text-primary' : ''}`}>
              {item.icon}
            </span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <div className="pt-4 mt-4 border-t border-slate-100">
             <button
            onClick={() => onChangeView('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              currentView === 'settings'
                ? 'bg-primary/10 text-slate-900 font-semibold'
                : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button 
            onClick={onLogout}
            className="w-full flex items-center gap-2 text-slate-500 hover:text-red-600 px-4 py-2 transition-colors"
        >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};