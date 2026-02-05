import React from 'react';
import { ComplaintStatus, UrgencyLevel } from '../types';

const HISTORY_DATA = [
  {
    id: '#REF-6021',
    title: 'Broken Window Latch',
    category: 'Carpentry',
    location: 'Moremi Hall',
    dateFiled: 'Sep 10, 2023',
    dateResolved: 'Sep 12, 2023',
    status: ComplaintStatus.CLOSED,
    urgency: UrgencyLevel.LOW,
  },
  {
    id: '#REF-5590',
    title: 'No Water in Block C',
    category: 'Plumbing',
    location: 'Moremi Hall',
    dateFiled: 'Aug 05, 2023',
    dateResolved: 'Aug 06, 2023',
    status: ComplaintStatus.RESOLVED,
    urgency: UrgencyLevel.URGENT,
  },
  {
    id: '#REF-4112',
    title: 'Burnt Fuse Box',
    category: 'Electrical',
    location: 'Moremi Hall',
    dateFiled: 'Jul 20, 2023',
    dateResolved: 'Jul 21, 2023',
    status: ComplaintStatus.CLOSED,
    urgency: UrgencyLevel.HIGH,
  }
];

export const History: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Complaint History</h1>
        <p className="text-slate-500">Archive of your previously resolved and closed issues.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
             <h3 className="font-bold text-slate-800">Past Records</h3>
             <button className="text-primary font-bold text-sm hover:underline">Download Statement</button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-bold tracking-wider">
                        <th className="p-4">Reference</th>
                        <th className="p-4">Issue</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Date Filed</th>
                        <th className="p-4">Date Resolved</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                    {HISTORY_DATA.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-mono text-slate-400">{item.id}</td>
                            <td className="p-4 font-bold text-slate-800">{item.title}</td>
                            <td className="p-4 text-slate-600">{item.category}</td>
                            <td className="p-4 text-slate-600">{item.dateFiled}</td>
                            <td className="p-4 text-slate-600">{item.dateResolved}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                                    item.status === ComplaintStatus.RESOLVED 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-slate-200 text-slate-600'
                                }`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {HISTORY_DATA.length === 0 && (
             <div className="p-12 text-center text-slate-400">
                 No history found.
             </div>
        )}
      </div>
    </div>
  );
};