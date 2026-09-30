import React from 'react';
import { Github, X } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }: any) {
  return (
  project && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl space-y-6 p-6 sm:p-8 relative my-8">
            
            {/* Close Button */}
            <button 
              onClick={() => onClose()}
              className="absolute top-6 right-6 p-1 text-slate-400 hover:text-slate-700 rounded-md"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h2>
            </div>

            {/* Case Study Details Grid */}
            <div className="space-y-6 divide-y divide-slate-100 text-sm leading-relaxed text-slate-600">
              
              <div className="pt-2 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Problem Statement</h4>
                <p>{project.problem}</p>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Technical Approach</h4>
                <p>{project.approach}</p>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">System Architecture</h4>
                <p>{project.architecture}</p>
              </div>

              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Datasets & Inputs</h4>
                  <p className="text-xs text-slate-600">{project.dataset || "N/A"}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Algorithms & Methods</h4>
                  <p className="text-xs text-slate-600">{project.algorithms || "N/A"}</p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Results & Key Metrics</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                  {project.metrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {project.lessons && (
                <div className="pt-4 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Lessons Learned & Engineering Takeaways</h4>
                  <p className="text-xs italic text-slate-600">{project.lessons}</p>
                </div>
              )}

              {/* Technologies Used */}
              <div className="pt-4 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Technology Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end space-x-3">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium text-xs inline-flex items-center space-x-2"
                >
                  <Github size={14} />
                  <span>Repository</span>
                </a>
              )}
              <button
                onClick={() => onClose()}
                className="px-4 py-2 bg-slate-900 text-white rounded-md font-medium text-xs hover:bg-slate-800"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )
  );
}
