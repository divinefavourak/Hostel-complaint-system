import React, { useState } from 'react';

const HOSTEL_FACTS = [
    {
        id: 'moremi',
        name: 'Moremi Hall',
        category: 'Female',
        occupancy: '1,200 Bed Spaces',
        satisfaction: 85,
        status: 'Good Condition',
        statusColor: 'text-green-600 bg-green-50',
        topIssues: [
            { issue: 'Water Pressure', detail: 'Low pressure on top floors during peak hours (6AM - 8AM).', frequency: 'Daily' },
            { issue: 'Window Latches', detail: 'Stiff mechanisms in Block C.', frequency: 'Occasional' }
        ],
        recentUpgrades: ['New Kitchenette installed in Block A', 'Solar Inverter for Reading Room']
    },
    {
        id: 'jaja',
        name: 'Jaja Hall',
        category: 'Male',
        occupancy: '800 Bed Spaces',
        satisfaction: 65,
        status: 'Fair Condition',
        statusColor: 'text-amber-600 bg-amber-50',
        topIssues: [
            { issue: 'Electrical Sockets', detail: 'Limited working outlets in older blocks.', frequency: 'High' },
            { issue: 'Fan Regulators', detail: 'Ceiling fans stuck on high speed.', frequency: 'Medium' }
        ],
        recentUpgrades: ['Perimeter fencing repainted']
    },
    {
        id: 'mariere',
        name: 'Mariere Hall',
        category: 'Male',
        occupancy: '1,000 Bed Spaces',
        satisfaction: 45,
        status: 'Needs Attention',
        statusColor: 'text-red-600 bg-red-50',
        topIssues: [
            { issue: 'Door Locks', detail: 'Aging lock cylinders prone to jamming.', frequency: 'Critical' },
            { issue: 'Lighting', detail: 'Corridor lights frequently blow out.', frequency: 'High' }
        ],
        recentUpgrades: ['Plumbing assessment initiated']
    },
    {
        id: 'eni-njoku',
        name: 'Eni Njoku Hall',
        category: 'Male',
        occupancy: '900 Bed Spaces',
        satisfaction: 75,
        status: 'Good Condition',
        statusColor: 'text-blue-600 bg-blue-50',
        topIssues: [
            { issue: 'Reading Room', detail: 'Crowded during exam periods.', frequency: 'Seasonal' },
            { issue: 'Mosquito Nets', detail: 'Torn nets in ground floor rooms.', frequency: 'Medium' }
        ],
        recentUpgrades: ['New Water Pump installed']
    }
];

export const HostelBallot: React.FC = () => {
    const [selectedHostel, setSelectedHostel] = useState<typeof HOSTEL_FACTS[0] | null>(null);
    const [acknowledged, setAcknowledged] = useState(false);
    const [ballotStatus, setBallotStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS'>('IDLE');

    const handleProceed = () => {
        setBallotStatus('PROCESSING');
        setTimeout(() => {
            setBallotStatus('SUCCESS');
        }, 2000);
    };

    if (ballotStatus === 'SUCCESS') {
        return (
            <div className="p-8 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl text-green-600">how_to_vote</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">Redirecting to Ballot...</h1>
                <p className="text-slate-500 max-w-md">
                    You have acknowledged the transparency report for <span className="font-bold text-slate-900">{selectedHostel?.name}</span>. You can now proceed to select your bed space on the main portal.
                </p>
                <button 
                    onClick={() => { setBallotStatus('IDLE'); setSelectedHostel(null); setAcknowledged(false); }}
                    className="mt-8 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                    Return to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Hostel Clarity Check</h1>
                <p className="text-slate-500">Review infrastructure conditions before participating in the accommodation ballot.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {HOSTEL_FACTS.map((hostel) => (
                    <button 
                        key={hostel.id}
                        onClick={() => { setSelectedHostel(hostel); setAcknowledged(false); }}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary transition-all text-left group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-3 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider ${hostel.statusColor}`}>
                            {hostel.status}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                             <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-primary">
                                {hostel.category === 'Female' ? 'female' : 'male'}
                             </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{hostel.name}</h3>
                        <p className="text-xs text-slate-500 mb-4">{hostel.occupancy}</p>
                        
                        <div className="flex items-center gap-1">
                             <span className="text-sm font-black text-slate-900">{hostel.satisfaction}%</span>
                             <span className="text-xs text-slate-400 font-medium">Satisfaction Score</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Insight Modal/Panel */}
            {selectedHostel && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                     <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !ballotStatus.includes('PROCESSING') && setSelectedHostel(null)}></div>
                     <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in slide-in-from-bottom-4 duration-300">
                        
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">{selectedHostel.name}</h2>
                                <p className="text-sm text-slate-500 font-bold">Transparency Report • 2023/2024 Session</p>
                            </div>
                            <button onClick={() => setSelectedHostel(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
                                <span className="material-symbols-outlined text-slate-500">close</span>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-4">
                                <span className="material-symbols-outlined text-blue-600">info</span>
                                <div>
                                    <p className="text-sm font-bold text-blue-900 mb-1">Why this check?</p>
                                    <p className="text-xs text-blue-700 leading-relaxed">
                                        The Student Affairs Division believes in full transparency. By proceeding, you acknowledge that you are aware of the current state of facilities in this hall.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">warning</span>
                                        Common Reported Issues
                                    </h3>
                                    <div className="grid gap-3">
                                        {selectedHostel.topIssues.map((issue, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                                                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="material-symbols-outlined text-sm font-bold">priority_high</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-sm">{issue.issue}</p>
                                                    <p className="text-sm text-slate-600 mt-1">{issue.detail}</p>
                                                    <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-slate-200 text-slate-600 text-[10px] font-bold uppercase">
                                                        Freq: {issue.frequency}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">check_circle</span>
                                        Recent Improvements
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedHostel.recentUpgrades.map((upgrade, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                {upgrade}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer / Action */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50">
                            <label className="flex items-start gap-3 cursor-pointer mb-6 group">
                                <div className="relative flex items-center">
                                    <input 
                                        type="checkbox" 
                                        checked={acknowledged}
                                        onChange={(e) => setAcknowledged(e.target.checked)}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-primary checked:bg-primary"
                                    />
                                     <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-sm text-slate-600 select-none group-hover:text-slate-900 transition-colors">
                                    I have read and understood the facility report for {selectedHostel.name}. I wish to proceed to the balloting portal.
                                </span>
                            </label>
                            
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => setSelectedHostel(null)}
                                    className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-200 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleProceed}
                                    disabled={!acknowledged || ballotStatus === 'PROCESSING'}
                                    className="flex-[2] py-3 text-sm font-bold text-slate-900 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    {ballotStatus === 'PROCESSING' ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            Proceed to Ballot
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                     </div>
                </div>
            )}
        </div>
    );
};