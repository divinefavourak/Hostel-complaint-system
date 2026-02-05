import React, { useState } from 'react';
import { Complaint, ComplaintStatus, UrgencyLevel } from '../types';

const MOCK_COMPLAINTS: Complaint[] = [
  {
    id: '#REF-8842',
    title: 'Leaking Water Pipe in Room 302',
    category: 'Plumbing',
    location: 'Moremi Hall',
    description: 'The pipe under the sink is leaking heavily.',
    dateFiled: 'Oct 24, 2023',
    status: ComplaintStatus.IN_PROGRESS,
    urgency: UrgencyLevel.HIGH,
    upvotes: 12,
    stage: 3,
    estimatedCompletion: 'Oct 28'
  },
  {
    id: '#REF-7210',
    title: 'Broken Ceiling Fan in Block B',
    category: 'Electrical',
    location: 'Jaja Hall',
    description: 'Fan wires are sparking.',
    dateFiled: 'Oct 12, 2023',
    status: ComplaintStatus.RESOLVED,
    urgency: UrgencyLevel.NORMAL,
    upvotes: 45,
    stage: 5
  },
    {
    id: '#REF-9021',
    title: 'Faulty Socket Outlet',
    category: 'Electrical',
    location: 'Jaja Hall',
    description: 'Socket not working.',
    dateFiled: 'Oct 26, 2023',
    status: ComplaintStatus.SUBMITTED,
    urgency: UrgencyLevel.LOW,
    upvotes: 2,
    stage: 1
  }
];

export const StudentDashboard: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('ALL');

  const filteredComplaints = MOCK_COMPLAINTS.filter((complaint) => {
    const matchesStatus = statusFilter === 'ALL' || complaint.status === statusFilter;
    const matchesUrgency = urgencyFilter === 'ALL' || complaint.urgency === urgencyFilter;
    return matchesStatus && matchesUrgency;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Activity</h1>
        <p className="text-slate-500">Track your filed reports and supported community issues.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Complaints Filed', value: '12', icon: 'assignment', color: 'text-slate-900' },
          { label: 'Total Upvotes Given', value: '45', icon: 'thumb_up', color: 'text-secondary' },
          { label: 'Resolved Issues', value: '08', icon: 'check_circle', color: 'text-primary' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
            <span className={`material-symbols-outlined text-4xl opacity-20 ${stat.color}`}>{stat.icon}</span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200">
          <button className="flex-1 py-4 text-sm font-bold border-b-4 border-primary text-primary flex items-center justify-center gap-2 bg-slate-50">
            <span className="material-symbols-outlined text-lg">assignment</span>
            My Complaints
          </button>
          <button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">favorite</span>
            Upvoted Issues
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Status:</span>
                <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-white border border-slate-200 text-xs rounded-lg px-2 py-1.5 focus:ring-primary focus:border-primary outline-none cursor-pointer"
                >
                    <option value="ALL">All Statuses</option>
                    <option value={ComplaintStatus.SUBMITTED}>Submitted</option>
                    <option value={ComplaintStatus.IN_PROGRESS}>In Progress</option>
                    <option value={ComplaintStatus.RESOLVED}>Resolved</option>
                    <option value={ComplaintStatus.CLOSED}>Closed</option>
                </select>
            </div>
             <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Urgency:</span>
                <select 
                    value={urgencyFilter}
                    onChange={(e) => setUrgencyFilter(e.target.value)}
                    className="bg-white border border-slate-200 text-xs rounded-lg px-2 py-1.5 focus:ring-primary focus:border-primary outline-none cursor-pointer"
                >
                    <option value="ALL">All Levels</option>
                    <option value={UrgencyLevel.LOW}>Low</option>
                    <option value={UrgencyLevel.NORMAL}>Normal</option>
                    <option value={UrgencyLevel.HIGH}>High</option>
                    <option value={UrgencyLevel.URGENT}>Urgent</option>
                </select>
            </div>
        </div>

        {/* List */}
        <div className="p-6 space-y-6">
          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                     <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
                        complaint.status === ComplaintStatus.RESOLVED ? 'bg-slate-100 text-slate-500' :
                        complaint.status === ComplaintStatus.IN_PROGRESS ? 'bg-primary/10 text-primary-dark' :
                        complaint.status === ComplaintStatus.CLOSED ? 'bg-slate-200 text-slate-600' :
                        'bg-amber-100 text-amber-700'
                     }`}>
                        {complaint.status.replace('_', ' ')}
                     </span>
                     <span className="text-xs text-slate-400 font-mono">{complaint.id}</span>
                     
                     <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${
                        complaint.urgency === UrgencyLevel.URGENT ? 'bg-red-50 text-red-600 border-red-100' :
                        complaint.urgency === UrgencyLevel.HIGH ? 'bg-orange-50 text-orange-600 border-orange-100' :
                        complaint.urgency === UrgencyLevel.LOW ? 'bg-slate-50 text-slate-500 border-slate-100' :
                        'bg-blue-50 text-blue-600 border-blue-100'
                     }`}>
                        {complaint.urgency}
                     </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{complaint.title}</h3>
                </div>
                <span className="text-xs font-medium text-slate-400">{complaint.dateFiled}</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-bold text-primary">Stage {complaint.stage}: {
                        complaint.stage === 1 ? 'Submitted' :
                        complaint.stage === 2 ? 'Assigned' :
                        complaint.stage === 3 ? 'Repair in Progress' :
                        complaint.stage === 4 ? 'Verification' : 'Resolved'
                    }</span>
                    {complaint.estimatedCompletion && (
                        <span className="text-[10px] font-bold text-slate-400">Est: {complaint.estimatedCompletion}</span>
                    )}
                </div>
                <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-500" 
                        style={{ width: `${(complaint.stage / 5) * 100}%` }}
                    ></div>
                </div>
                
                {/* Steps Visual */}
                <div className="flex justify-between mt-2 px-1">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="flex flex-col items-center gap-1">
                            <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                                step <= complaint.stage ? 'bg-primary' : 'bg-slate-200'
                            }`}>
                                {step <= complaint.stage && <span className="material-symbols-outlined text-[8px] text-white font-bold">check</span>}
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              {complaint.status === ComplaintStatus.RESOLVED && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-primary">
                          <span className="material-symbols-outlined text-sm">verified</span>
                          <span className="text-xs font-bold">Issue Resolved Successfully</span>
                      </div>
                      <button className="text-xs font-bold text-slate-500 hover:text-primary">View Report</button>
                  </div>
              )}
            </div>
          ))) : (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
                  <p className="text-sm font-medium">No complaints found matching filters.</p>
                  <button 
                    onClick={() => { setStatusFilter('ALL'); setUrgencyFilter('ALL'); }}
                    className="mt-2 text-primary font-bold text-xs hover:underline"
                  >
                    Clear Filters
                  </button>
              </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
            <button className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Load More Activity</button>
        </div>
      </div>
    </div>
  );
};