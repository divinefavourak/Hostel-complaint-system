import React from 'react';

const HALLS = [
    { name: 'Moremi', capacity: 1200, occupants: 1150, score: 85, openIssues: 12, color: 'border-l-purple-500' },
    { name: 'Jaja', capacity: 800, occupants: 780, score: 65, openIssues: 45, color: 'border-l-amber-500' },
    { name: 'Mariere', capacity: 1000, occupants: 950, score: 45, openIssues: 62, color: 'border-l-red-500' },
    { name: 'Eni Njoku', capacity: 900, occupants: 890, score: 75, openIssues: 23, color: 'border-l-blue-500' },
    { name: 'Sodeinde', capacity: 1500, occupants: 400, score: 55, openIssues: 10, color: 'border-l-green-500' }, // New hall
];

export const HallReports: React.FC = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
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
                             <button className="flex-1 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50">View Details</button>
                             <button className="flex-1 py-2 rounded-lg bg-slate-900 text-sm font-bold text-white hover:bg-slate-800">Maintenance</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};