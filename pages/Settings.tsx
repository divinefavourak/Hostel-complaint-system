import React from 'react';

export const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-500">Manage your profile and application preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200">
            <button className="px-6 py-4 text-sm font-bold text-primary border-b-2 border-primary bg-slate-50">Profile</button>
            <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700">Notifications</button>
            <button className="px-6 py-4 text-sm font-bold text-slate-500 hover:text-slate-700">Security</button>
        </div>

        <div className="p-8 space-y-8">
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold border-4 border-slate-50 shadow-sm">
                    OJ
                </div>
                <div>
                    <button className="text-sm font-bold text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">Change Photo</button>
                    <p className="text-xs text-slate-400 mt-2">Max file size 2MB</p>
                </div>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                        <input type="text" defaultValue="Olawale Johnson" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                        <input type="email" defaultValue="o.johnson@uni.edu.ng" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-slate-500 cursor-not-allowed" disabled />
                    </div>
                </div>
                
                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                    <input type="tel" defaultValue="08012345678" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>

                <div className="pt-4 flex justify-end">
                    <button type="button" className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">Save Changes</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};