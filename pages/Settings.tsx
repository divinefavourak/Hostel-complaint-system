import React, { useState } from 'react';

type Tab = 'PROFILE' | 'NOTIFICATIONS' | 'SECURITY';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('PROFILE');
  const [isSaving, setIsSaving] = useState(false);

  // Profile State
  const [profile, setProfile] = useState({
    fullName: 'Olawale Johnson',
    email: 'o.johnson@uni.edu.ng',
    phone: '08012345678'
  });

  // Notifications State
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    inAppAlerts: true,
    statusChanges: true,
    newAnnouncements: false,
    weeklyDigest: false
  });

  // Security State
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
        setIsSaving(false);
        alert('Settings saved successfully!');
    }, 1000);
  };

  const Toggle: React.FC<{ 
    label: string; 
    description: string; 
    checked: boolean; 
    onChange: () => void 
  }> = ({ label, description, checked, onChange }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
        <div>
            <p className="font-bold text-slate-800 text-sm">{label}</p>
            <p className="text-xs text-slate-500">{description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
    </div>
  );

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-500">Manage your profile and application preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 overflow-x-auto">
            {[
                { id: 'PROFILE', label: 'Profile' },
                { id: 'NOTIFICATIONS', label: 'Notifications' },
                { id: 'SECURITY', label: 'Security' }
            ].map((tab) => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`px-6 py-4 text-sm font-bold transition-colors whitespace-nowrap ${
                        activeTab === tab.id 
                        ? 'text-primary border-b-2 border-primary bg-slate-50' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="p-8">
            {/* PROFILE TAB */}
            {activeTab === 'PROFILE' && (
                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold border-4 border-slate-50 shadow-sm">
                            {profile.fullName.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                            <button className="text-sm font-bold text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">Change Photo</button>
                            <p className="text-xs text-slate-400 mt-2">Max file size 2MB</p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    value={profile.fullName} 
                                    onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    value={profile.email} 
                                    disabled
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-slate-400 cursor-not-allowed" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                value={profile.phone} 
                                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all" 
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button 
                                type="submit" 
                                disabled={isSaving}
                                className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70 flex items-center gap-2"
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === 'NOTIFICATIONS' && (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Alert Preferences</h3>
                        <p className="text-sm text-slate-500">Choose how and when you want to be notified.</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <Toggle 
                            label="Email Notifications" 
                            description="Receive updates about your complaints via email."
                            checked={notifications.emailUpdates}
                            onChange={() => setNotifications(prev => ({...prev, emailUpdates: !prev.emailUpdates}))}
                        />
                        <Toggle 
                            label="In-App Alerts" 
                            description="Show popup notifications when using the portal."
                            checked={notifications.inAppAlerts}
                            onChange={() => setNotifications(prev => ({...prev, inAppAlerts: !prev.inAppAlerts}))}
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 mt-6">Subscriptions</h3>
                        <p className="text-sm text-slate-500">Select the type of content you want to receive.</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <Toggle 
                            label="Complaint Status Changes" 
                            description="Notify me when my complaint status changes (e.g., Assigned, Resolved)."
                            checked={notifications.statusChanges}
                            onChange={() => setNotifications(prev => ({...prev, statusChanges: !prev.statusChanges}))}
                        />
                         <Toggle 
                            label="Hostel Announcements" 
                            description="News about water supply, power, and general maintenance."
                            checked={notifications.newAnnouncements}
                            onChange={() => setNotifications(prev => ({...prev, newAnnouncements: !prev.newAnnouncements}))}
                        />
                         <Toggle 
                            label="Weekly Digest" 
                            description="A summary of your weekly activity and hostel stats."
                            checked={notifications.weeklyDigest}
                            onChange={() => setNotifications(prev => ({...prev, weeklyDigest: !prev.weeklyDigest}))}
                        />
                    </div>

                    <div className="pt-4 flex justify-end border-t border-slate-100">
                        <button 
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70"
                        >
                             {isSaving ? 'Saving...' : 'Update Preferences'}
                        </button>
                    </div>
                </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === 'SECURITY' && (
                <div className="space-y-6">
                     <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Password & Authentication</h3>
                        <p className="text-sm text-slate-500">Update your access credentials securely.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Current Password</label>
                            <input 
                                type="password" 
                                value={security.currentPassword}
                                onChange={(e) => setSecurity({...security, currentPassword: e.target.value})}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">New Password</label>
                                <input 
                                    type="password" 
                                    value={security.newPassword}
                                    onChange={(e) => setSecurity({...security, newPassword: e.target.value})}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Confirm New Password</label>
                                <input 
                                    type="password" 
                                    value={security.confirmPassword}
                                    onChange={(e) => setSecurity({...security, confirmPassword: e.target.value})}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                         <div className="pt-4 flex justify-end border-t border-slate-100">
                            <button 
                                type="submit" 
                                disabled={isSaving}
                                className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-70"
                            >
                                {isSaving ? 'Updating...' : 'Change Password'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <h3 className="text-sm font-bold text-red-600 mb-2">Danger Zone</h3>
                        <div className="flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-xl">
                            <div>
                                <p className="font-bold text-slate-900 text-sm">Deactivate Account</p>
                                <p className="text-xs text-slate-500">This will temporarily disable your access to the portal.</p>
                            </div>
                            <button className="text-red-600 font-bold text-sm hover:underline">Deactivate</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};