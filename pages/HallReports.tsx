import React, { useState } from 'react';

const HALLS = [
    { name: 'Moremi', capacity: 1200, occupants: 1150, score: 85, openIssues: 12, color: 'border-l-purple-500' },
    { name: 'Jaja', capacity: 800, occupants: 780, score: 65, openIssues: 45, color: 'border-l-amber-500' },
    { name: 'Mariere', capacity: 1000, occupants: 950, score: 45, openIssues: 62, color: 'border-l-red-500' },
    { name: 'Eni Njoku', capacity: 900, occupants: 890, score: 75, openIssues: 23, color: 'border-l-blue-500' },
    { name: 'Sodeinde', capacity: 1500, occupants: 400, score: 55, openIssues: 10, color: 'border-l-green-500' }, 
];

export const HallReports: React.FC = () => {
    const [selectedHall, setSelectedHall] = useState<typeof HALLS[0] | null>(null);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 relative">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Hall Reports</h1>
                    <p className="text-slate-500">Facility status overview per hostel.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HALLS.map(hall => (
                    <div key={hall.name} className={`bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 ${hall.color} p-6 hover:shadow-md transition-shadow`}>
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-slate-900">{hall.name} Hall</h3>
                            <div className="bg-slate-50 px-3 py-1 rounded-lg text-xs font-bold text-slate-500">
                                {Math.round((hall.occupants / hall.capacity) * 100)}% Full
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500 uppercase font-bold">Health Score</p>
                                <p className={`text-2xl font-black ${hall.score > 70 ? 'text-primary-dark' : hall.score > 50 ? 'text-amber-500' : 'text-red-500'}`}>
                                    {hall.score}/100
                                </p>
                            </div>
                             <div className="p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500 uppercase font-bold">Open Tickets</p>
                                <p className="text-2xl font-black text-slate-900">{hall.openIssues}</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                             <button 
                                onClick={() => setSelectedHall(hall)}
                                className="flex-1 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                             >
                                View Details
                             </button>
                             <button 
                                onClick={() => setSelectedHall(hall)}
                                className="flex-1 py-2 rounded-lg bg-slate-900 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                             >
                                Maintenance
                             </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedHall && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedHall(null)}></div>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className={`h-24 ${selectedHall.color.replace('border-l-', 'bg-')}`}></div>
                        <div className="px-8 pb-8 -mt-12">
                            <div className="flex justify-between items-end mb-6">
                                <div className="bg-white p-2 rounded-xl shadow-sm inline-block">
                                    <h2 className="text-2xl font-black text-slate-900 px-2">{selectedHall.name} Hall</h2>
                                </div>
                                <button onClick={() => setSelectedHall(null)} className="text-slate-400 hover:text-slate-600 mb-2">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Water Supply</p>
                                    <p className="font-bold text-primary-dark">Stable</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Power Grid</p>
                                    <p className="font-bold text-amber-500">Fluctuating</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Cleanliness</p>
                                    <p className="font-bold text-slate-700">8.5/10</p>
                                </div>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-4">Recent Critical Reports</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 p-3 border border-slate-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800">Main Generator Fault</p>
                                        <p className="text-xs text-slate-500">Reported 2 hours ago by Porter</p>
                                    </div>
                                    <button className="text-xs font-bold text-primary hover:underline">View Ticket</button>
                                </div>
                                <div className="flex items-center gap-4 p-3 border border-slate-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800">Water Pump Leakage</p>
                                        <p className="text-xs text-slate-500">Reported yesterday by Block A Rep</p>
                                    </div>
                                    <button className="text-xs font-bold text-primary hover:underline">View Ticket</button>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
                                <button onClick={() => setSelectedHall(null)} className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-lg">Close</button>
                                <button className="px-4 py-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg">Generate Full Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};