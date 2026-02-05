import React from 'react';

interface LoginProps {
  onLogin: (role: 'STUDENT' | 'ADMIN') => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side: Visual Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface-dark overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop")' }} // Generic university building
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-end p-20 text-white w-full">
            <div className="mb-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-surface-dark">
                <span className="material-symbols-outlined text-4xl icon-filled">school</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-4 font-sans tracking-tight">University of Lagos</h1>
            <p className="text-xl font-medium text-white/80">Hostel Complaint Management System</p>
            
            <div className="mt-10 flex items-center gap-4">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <p className="text-sm uppercase tracking-widest text-white/70 font-bold">Excellence in Service</p>
            </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24">
        <div className="max-w-md w-full mx-auto">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Student Login</h2>
                <p className="text-slate-500">Access the official hostel complaint portal.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin('STUDENT'); }}>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Matriculation Number</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                        <input 
                            type="text" 
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                            placeholder="e.g., 180402000"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                        <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                    </div>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                        <input 
                            type="password" 
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-slate-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-primary/20"
                >
                    Login to Portal
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
            </form>

            <div className="mt-8 text-center">
                <button onClick={() => onLogin('ADMIN')} className="text-sm font-medium text-slate-400 hover:text-slate-600">
                    Admin Access
                </button>
            </div>

            <div className="mt-12 p-5 rounded-xl border border-primary/20 bg-primary/5 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Secure Verification</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Access is restricted to legally registered residents. Your credentials will be cross-referenced with the database.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};