import React from 'react';

interface HeaderProps {
  title: string;
  userInitials: string;
  userName: string;
  userSubtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, userInitials, userName, userSubtitle }) => {
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
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
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