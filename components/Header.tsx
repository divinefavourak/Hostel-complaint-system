import React, { useState } from 'react';

interface HeaderProps {
  title: string;
  userInitials: string;
  userName: string;
  userSubtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, userInitials, userName, userSubtitle }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Ticket #REF-8842 has been assigned to Mr. Okafor.', time: '2 mins ago', unread: true },
    { id: 2, text: 'New announcement from Moremi Hall Warden.', time: '1 hour ago', unread: true },
    { id: 3, text: 'Your complaint #REF-7210 was marked resolved.', time: '1 day ago', unread: false },
  ];

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input
            type="text"
            placeholder="Search tickets..."
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary transition-all outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors ${showNotifications ? 'bg-slate-100 text-slate-800' : ''}`}
            >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 text-sm">Notifications</h3>
                        <button className="text-xs text-primary font-bold hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                        {notifications.map(notif => (
                            <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${notif.unread ? 'bg-blue-50/30' : ''}`}>
                                <div className="flex gap-3">
                                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notif.unread ? 'bg-primary' : 'bg-slate-300'}`}></div>
                                    <div>
                                        <p className="text-sm text-slate-700 leading-snug mb-1">{notif.text}</p>
                                        <p className="text-xs text-slate-400">{notif.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 bg-slate-50 text-center">
                        <button className="text-xs font-bold text-slate-500 hover:text-slate-800">View All Activity</button>
                    </div>
                </div>
            )}
          </div>
          
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold leading-none text-slate-800">{userName}</p>
              <p className="text-xs text-slate-500">{userSubtitle}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
              {userInitials}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};