import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }: any) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            {project.category}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech: string, index: number) => (
            <span key={index} className="px-2 py-0.5 rounded text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200/60">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 rounded-b-lg flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View Case Study</span>
          <ChevronRight size={14} />
        </button>
        <div className="flex items-center space-x-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors" title="GitHub Repository">
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors" title="Live Demo">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
