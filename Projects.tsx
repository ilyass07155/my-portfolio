import React from 'react';
import { Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects, onAddProject, onSelectCaseStudy }: any) {
  return (
    <section id="projects" className="scroll-mt-20 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Selected Projects</h2>
          <p className="text-sm text-slate-500 mt-1">
            Case studies in machine learning, software engineering, and applied logic.
          </p>
        </div>
        <button
          onClick={onAddProject}
          className="inline-flex items-center space-x-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelectCaseStudy} />
        ))}
      </div>
    </section>
  );
}
