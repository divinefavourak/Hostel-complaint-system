import React, { useState } from 'react';

export const NewComplaint: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            alert("Complaint Logged Successfully!");
        }, 1500);
    }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Log New Complaint</h1>
        <p className="text-slate-500">Provide detailed information about the issue in your hostel for prompt resolution.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Hostel Name</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                        <option>Select Hostel</option>
                        <option>Moremi Hall</option>
                        <option>Jaja Hall</option>
                        <option>Mariere Hall</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Room Number</label>
                    <input type="text" placeholder="e.g. A-302" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Issue Category</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                        <option>Select Category</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Carpentry</option>
                    </select>
                </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Urgency Level</label>
                    <div className="flex gap-3">
                        {['Low', 'Medium', 'High'].map(level => (
                            <label key={level} className="flex-1 relative cursor-pointer group">
                                <input type="radio" name="urgency" className="peer sr-only" />
                                <div className="text-center py-3 rounded-xl border border-slate-200 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary-dark font-medium text-sm transition-all">
                                    {level}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Description of Issue</label>
                 <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Describe the problem in detail..."></textarea>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Evidence (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-primary transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-4xl mb-2">cloud_upload</span>
                    <p className="text-sm">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400 mt-1">JPG, PNG up to 5MB</p>
                </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
                <button type="button" className="px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button 
                    type="submit" 
                    disabled={submitting}
                    className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-slate-900 font-bold shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-70"
                >
                    {submitting ? 'Submitting...' : 'Submit Complaint'}
                    {!submitting && <span className="material-symbols-outlined">send</span>}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};