import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const HALL_DATA = [
  { name: 'Moremi', score: 85, color: '#13ec5b' },
  { name: 'Jaja', score: 65, color: '#fbbf24' },
  { name: 'Mariere', score: 45, color: '#f87171' },
  { name: 'Eni Njoku', score: 75, color: '#60a5fa' },
  { name: 'Sodeinde', score: 55, color: '#a78bfa' },
];

const ISSUE_DATA = [
    { name: 'Plumbing', value: 40, color: '#3b82f6' },
    { name: 'Electrical', value: 25, color: '#f59e0b' },
    { name: 'Wi-Fi', value: 20, color: '#8b5cf6' },
    { name: 'Security', value: 15, color: '#ef4444' },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
       {/* Header */}
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Hostel Satisfaction Dashboard</h1>
            <p className="text-slate-500 text-sm">Session 2023/2024</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600">Download Report</button>
            <button className="px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold">Live View</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
            { label: 'Total Complaints', value: '1,284', change: '+12%', trend: 'up', icon: 'forum', color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Active Issues', value: '156', change: '-5%', trend: 'down', icon: 'pending_actions', color: 'text-amber-500', bg: 'bg-amber-50' },
            { label: 'Avg. Satisfaction', value: '4.2/5', change: '+0.3', trend: 'up', icon: 'star', color: 'text-primary-dark', bg: 'bg-green-50' },
            { label: 'Resolved Rate', value: '88%', change: '-2%', trend: 'down', icon: 'check_circle', color: 'text-purple-500', bg: 'bg-purple-50' },
        ].map((kpi, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                        <span className="material-symbols-outlined">{kpi.icon}</span>
                    </div>
                    <div className={`flex items-center text-xs font-bold ${kpi.trend === 'up' ? 'text-primary-dark' : 'text-red-500'}`}>
                        {kpi.change}
                        <span className="material-symbols-outlined text-sm">{kpi.trend === 'up' ? 'trending_up' : 'trending_down'}</span>
                    </div>
                </div>
                <p className="text-slate-500 text-sm font-medium">{kpi.label}</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-900">{kpi.value}</h3>
            </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Leaderboard */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-[400px]">
            <h3 className="font-bold text-slate-900 mb-1">Hostel Performance</h3>
            <p className="text-xs text-slate-500 mb-6">Ranked by satisfaction score</p>
            
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {[...HALL_DATA].sort((a,b) => b.score - a.score).map((hall, idx) => (
                    <div key={hall.name} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${idx === 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
                                {idx + 1}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">{hall.name} Hall</p>
                                <div className="flex items-center">
                                    {[1,2,3,4,5].map(s => (
                                        <span key={s} className={`material-symbols-outlined text-[10px] ${s <= (hall.score/20) ? 'icon-filled text-amber-400' : 'text-slate-200'}`}>star</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <span className={`text-sm font-bold ${hall.score >= 80 ? 'text-primary-dark' : hall.score >= 60 ? 'text-slate-600' : 'text-red-500'}`}>
                            {hall.score}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Resolution Time (Bar Chart) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[400px]">
            <h3 className="font-bold text-slate-900 mb-6">Efficiency Analytics</h3>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart data={HALL_DATA}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                        {HALL_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-slate-900">Top Issues Breakdown</h3>
                    <p className="text-xs text-slate-500">Categorized by volume</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold">450</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Total</p>
                </div>
            </div>
            
            <div className="space-y-4">
                {ISSUE_DATA.map((issue) => (
                    <div key={issue.name}>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700">{issue.name}</span>
                            <span className="font-bold text-slate-900">{issue.value}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${issue.value}%`, backgroundColor: issue.color }}></div>
                        </div>
                    </div>
                ))}
            </div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
                 <h3 className="font-bold text-slate-900 mb-1">Sentiment Analysis</h3>
                 <p className="text-xs text-slate-500 mb-4">AI analysis of feedback</p>
                 <div className="space-y-2">
                     <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-primary"></span>
                         <span className="text-sm text-slate-600">Positive (72%)</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                         <span className="text-sm text-slate-600">Neutral (18%)</span>
                     </div>
                      <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-red-400"></span>
                         <span className="text-sm text-slate-600">Negative (10%)</span>
                     </div>
                 </div>
            </div>
            <div className="relative w-40 h-40 flex items-center justify-center">
                 {/* Abstract Donut representation */}
                <div className="absolute inset-0 rounded-full border-[12px] border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-[12px] border-primary border-l-transparent border-b-transparent rotate-45"></div>
                <div className="text-center">
                    <span className="text-2xl font-black text-slate-900 block">72%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Positive</span>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};