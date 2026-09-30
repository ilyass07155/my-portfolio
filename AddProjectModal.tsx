import React from 'react';
import { X } from 'lucide-react';

export default function AddProjectModal({ isOpen, onClose, newProject, setNewProject, onSubmit }: any) {
  return (
  isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg border border-slate-200 max-w-xl w-full shadow-xl p-6 sm:p-8 space-y-4 relative my-8">
            <button 
              onClick={() => onClose()}
              className="absolute top-6 right-6 p-1 text-slate-400 hover:text-slate-700 rounded-md"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-slate-900">Add New Project Case Study</h3>

            <form onSubmit={onSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Project Title</label>
                <input 
                  type="text" 
                  required
                  value={newProject.title}
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                  placeholder="e.g. Predictive Analytics Pipeline"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category</label>
                  <input 
                    type="text" 
                    required
                    value={newProject.category}
                    onChange={e => setNewProject({...newProject, category: e.target.value})}
                    placeholder="e.g. NLP / Machine Learning"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Tech Stack (comma separated)</label>
                  <input 
                    type="text" 
                    required
                    value={newProject.techStack}
                    onChange={e => setNewProject({...newProject, techStack: e.target.value})}
                    placeholder="Python, PyTorch, React"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Short Summary</label>
                <textarea 
                  required
                  rows="2"
                  value={newProject.summary}
                  onChange={e => setNewProject({...newProject, summary: e.target.value})}
                  placeholder="1-2 sentences overview..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Problem Statement</label>
                <textarea 
                  required
                  rows="2"
                  value={newProject.problem}
                  onChange={e => setNewProject({...newProject, problem: e.target.value})}
                  placeholder="What technical problem does this solve?"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Approach & Architecture</label>
                <textarea 
                  required
                  rows="2"
                  value={newProject.approach}
                  onChange={e => setNewProject({...newProject, approach: e.target.value})}
                  placeholder="How was it implemented?"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">GitHub URL</label>
                  <input 
                    type="url" 
                    value={newProject.githubUrl}
                    onChange={e => setNewProject({...newProject, githubUrl: e.target.value})}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Metrics (comma separated)</label>
                  <input 
                    type="text" 
                    value={newProject.metrics}
                    onChange={e => setNewProject({...newProject, metrics: e.target.value})}
                    placeholder="95% Accuracy, <50ms latency"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={() => onClose()}
                  className="px-4 py-2 border border-slate-300 rounded-md text-slate-700"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )
  );
}
