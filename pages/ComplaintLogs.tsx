import React, { useState } from 'react';
import { Complaint, ComplaintStatus, UrgencyLevel } from '../types';

const MOCK_ALL_COMPLAINTS: Complaint[] = [
  {
    id: '#REF-9021',
    title: 'Faulty Socket Outlet',
    category: 'Electrical',
    location: 'Jaja Hall - Rm 101',
    description: 'Socket not working.',
    dateFiled: 'Oct 26, 2023',
    status: ComplaintStatus.SUBMITTED,
    urgency: UrgencyLevel.LOW,
    upvotes: 2,
    stage: 1
  },
  {
    id: '#REF-8842',
    title: 'Leaking Water Pipe',
    category: 'Plumbing',
    location: 'Moremi Hall - Rm 302',
    description: 'The pipe under the sink is leaking heavily.',
    dateFiled: 'Oct 24, 2023',
    status: ComplaintStatus.IN_PROGRESS,
    urgency: UrgencyLevel.HIGH,
    upvotes: 12,
    stage: 3,
    assignedTo: 'Mr. Okafor'
  },
  {
    id: '#REF-8810',
    title: 'Broken Door Lock',
    category: 'Carpentry',
    location: 'Mariere Hall - Rm 112',
    description: 'Lock is jammed.',
    dateFiled: 'Oct 23, 2023',
    status: ComplaintStatus.ASSIGNED,
    urgency: UrgencyLevel.NORMAL,
    upvotes: 1,
    stage: 2,
    assignedTo: 'Facility Mgr'
  },
  {
    id: '#REF-7210',
    title: 'Ceiling Fan Sparks',
    category: 'Electrical',
    location: 'Jaja Hall - Rm 404',
    description: 'Dangerous sparks.',
    dateFiled: 'Oct 12, 2023',
    status: ComplaintStatus.RESOLVED,
    urgency: UrgencyLevel.URGENT,
    upvotes: 45,
    stage: 5
  },
];

export const ComplaintLogs: React.FC = () => {
  const [tickets, setTickets] = useState(MOCK_ALL_COMPLAINTS);
  const [filter, setFilter] = useState('ALL');
  const [editingTicket, setEditingTicket] = useState<Complaint | null>(null);

  // Form State
  const [editForm, setEditForm] = useState({
      status: '',
      assignedTo: ''
  });

  const handleEditClick = (ticket: Complaint) => {
      setEditingTicket(ticket);
      setEditForm({
          status: ticket.status,
          assignedTo: ticket.assignedTo || ''
      });
  };

  const handleSave = () => {
      if (!editingTicket) return;
      
      const updatedTickets = tickets.map(t => {
          if (t.id === editingTicket.id) {
              return {
                  ...t,
                  status: editForm.status as ComplaintStatus,
                  assignedTo: editForm.assignedTo,
                  stage: editForm.status === ComplaintStatus.RESOLVED ? 5 : 
                         editForm.status === ComplaintStatus.IN_PROGRESS ? 3 :
                         editForm.status === ComplaintStatus.ASSIGNED ? 2 : 1
              };
          }
          return t;
      });
      
      setTickets(updatedTickets);
      setEditingTicket(null);
  };

  const filtered = filter === 'ALL' 
    ? tickets 
    : tickets.filter(c => c.status === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-black text-slate-900">Complaint Logs</h1>
            <p className="text-slate-500 text-sm">Manage and assign incoming maintenance requests.</p>
        </div>
        <div className="flex gap-2">
            <select 
                className="bg-white border border-slate-200 text-sm font-medium px-4 py-2 rounded-lg outline-none focus:border-primary"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
            >
                <option value="ALL">All Status</option>
                <option value={ComplaintStatus.SUBMITTED}>Submitted</option>
                <option value={ComplaintStatus.ASSIGNED}>Assigned</option>
                <option value={ComplaintStatus.IN_PROGRESS}>In Progress</option>
                <option value={ComplaintStatus.RESOLVED}>Resolved</option>
            </select>
            <button className="bg-primary text-slate-900 font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Export CSV
            </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">ID</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Issue Details</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Location</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Priority</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Assigned To</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {filtered.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-slate-50 group transition-colors">
                        <td className="p-4 text-xs font-mono text-slate-400">{ticket.id}</td>
                        <td className="p-4">
                            <p className="font-bold text-slate-900 text-sm">{ticket.title}</p>
                            <p className="text-xs text-slate-500">{ticket.category} • {ticket.dateFiled}</p>
                        </td>
                        <td className="p-4 text-sm text-slate-700">{ticket.location}</td>
                        <td className="p-4">
                             <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${
                                ticket.urgency === UrgencyLevel.URGENT ? 'bg-red-50 text-red-600 border-red-100' :
                                ticket.urgency === UrgencyLevel.HIGH ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                ticket.urgency === UrgencyLevel.LOW ? 'bg-slate-50 text-slate-500 border-slate-100' :
                                'bg-blue-50 text-blue-600 border-blue-100'
                             }`}>
                                {ticket.urgency}
                             </span>
                        </td>
                        <td className="p-4">
                             <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
                                ticket.status === ComplaintStatus.RESOLVED ? 'bg-green-100 text-green-700' :
                                ticket.status === ComplaintStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-700' :
                                ticket.status === ComplaintStatus.ASSIGNED ? 'bg-purple-100 text-purple-700' :
                                'bg-amber-100 text-amber-700'
                             }`}>
                                {ticket.status}
                             </span>
                        </td>
                        <td className="p-4 text-sm text-slate-500">
                            {ticket.assignedTo || <span className="text-slate-300 italic">Unassigned</span>}
                        </td>
                        <td className="p-4">
                            <button 
                                onClick={() => handleEditClick(ticket)}
                                className="text-slate-400 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">edit_square</span>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {filtered.length === 0 && (
            <div className="p-8 text-center text-slate-400">No logs found matching filter.</div>
        )}
      </div>

        {/* Edit Modal */}
        {editingTicket && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setEditingTicket(null)}></div>
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative z-10 p-6 animate-in fade-in zoom-in duration-200">
                    <h2 className="text-xl font-black text-slate-900 mb-1">Update Ticket</h2>
                    <p className="text-sm text-slate-500 mb-6 font-mono">{editingTicket.id} - {editingTicket.title}</p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Assign To Staff</label>
                            <input 
                                type="text" 
                                value={editForm.assignedTo}
                                onChange={(e) => setEditForm({...editForm, assignedTo: e.target.value})}
                                placeholder="Enter staff name..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Update Status</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[ComplaintStatus.SUBMITTED, ComplaintStatus.ASSIGNED, ComplaintStatus.IN_PROGRESS, ComplaintStatus.RESOLVED, ComplaintStatus.CLOSED].map(status => (
                                    <button
                                        key={status}
                                        onClick={() => setEditForm({...editForm, status})}
                                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                                            editForm.status === status 
                                            ? 'bg-primary text-slate-900 border-primary' 
                                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
                        <button 
                            onClick={() => setEditingTicket(null)} 
                            className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSave}
                            className="px-6 py-2 text-sm font-bold text-slate-900 bg-primary hover:bg-primary-dark rounded-lg shadow-lg shadow-primary/20"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};