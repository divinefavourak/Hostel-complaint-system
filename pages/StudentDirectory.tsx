import React from 'react';
import { Student } from '../types';

const MOCK_STUDENTS: Student[] = [
    { id: '1', name: 'Olawale Johnson', matricNo: '180402000', hall: 'Moremi', room: 'A-302', department: 'Computer Science', level: '400L', email: 'o.johnson@uni.edu.ng', phone: '08012345678' },
    { id: '2', name: 'Chioma Okeke', matricNo: '190402111', hall: 'Moremi', room: 'C-102', department: 'Law', level: '300L', email: 'c.okeke@uni.edu.ng', phone: '08087654321' },
    { id: '3', name: 'Ahmed Musa', matricNo: '200402222', hall: 'Jaja', room: 'B-404', department: 'Economics', level: '200L', email: 'a.musa@uni.edu.ng', phone: '08123450987' },
    { id: '4', name: 'Sarah Doe', matricNo: '210402333', hall: 'Madam Tinubu', room: 'E-201', department: 'English', level: '100L', email: 's.doe@uni.edu.ng', phone: '09011223344' },
    { id: '5', name: 'Emeka Uche', matricNo: '170402444', hall: 'Mariere', room: 'D-112', department: 'Engineering', level: '500L', email: 'e.uche@uni.edu.ng', phone: '07055443322' },
];

export const StudentDirectory: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-black text-slate-900">Student Directory</h1>
            <p className="text-slate-500 text-sm">Database of registered hostel residents.</p>
        </div>
        <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input type="text" placeholder="Search by name or matric no..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-64 focus:ring-2 focus:ring-primary outline-none text-sm" />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Student</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Academic Info</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Residence</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Contact</th>
                    <th className="p-4 text-xs font-bold text-slate-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {MOCK_STUDENTS.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">
                                    {student.name.split(' ').map(n=>n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{student.name}</p>
                                    <p className="text-xs text-slate-500">{student.matricNo}</p>
                                </div>
                            </div>
                        </td>
                        <td className="p-4">
                            <p className="text-sm font-medium text-slate-700">{student.department}</p>
                            <p className="text-xs text-slate-500">{student.level}</p>
                        </td>
                        <td className="p-4">
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold">
                                <span className="material-symbols-outlined text-[14px]">apartment</span>
                                {student.hall}, {student.room}
                            </span>
                        </td>
                         <td className="p-4 text-sm text-slate-500">
                            <p>{student.email}</p>
                            <p className="text-xs">{student.phone}</p>
                        </td>
                        <td className="p-4">
                            <button className="text-primary hover:text-primary-dark font-bold text-xs">View Profile</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};