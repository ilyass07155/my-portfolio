import React from 'react';
import { X } from 'lucide-react';

export default function DataEditor({ isOpen, onClose, data, onProfileUpdate, setData, initialData }: any) {
  return (
  isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Live Data Editor</h3>
              <button 
                onClick={() => onClose()}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={data.profile.name}
                  onChange={e => onProfileUpdate('name', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Professional Title</label>
                <input 
                  type="text" 
                  value={data.profile.title}
                  onChange={e => onProfileUpdate('title', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Status Badge</label>
                <input 
                  type="text" 
                  value={data.profile.status}
                  onChange={e => onProfileUpdate('status', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tagline</label>
                <textarea 
                  rows="2"
                  value={data.profile.tagline}
                  onChange={e => onProfileUpdate('tagline', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Profile Photo Image URL</label>
                <input 
                  type="text" 
                  value={data.profile.photoUrl}
                  onChange={e => onProfileUpdate('photoUrl', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={data.profile.email}
                  onChange={e => onProfileUpdate('email', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Location</label>
                <input 
                  type="text" 
                  value={data.profile.location}
                  onChange={e => onProfileUpdate('location', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Credentials Tag</label>
                <input 
                  type="text" 
                  value={data.profile.credentials}
                  onChange={e => onProfileUpdate('credentials', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                />
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => setData(initialData)}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-md transition-colors"
                >
                  Reset to Default Data
                </button>
              </div>
            </div>

          </div>
        </div>
      )
  );
}
