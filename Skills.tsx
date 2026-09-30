import React from 'react';
import { Code, Brain, Cpu, Layers, Database } from 'lucide-react';

export default function Skills({ skills }: any) {
  return (
        <section id="skills" className="scroll-mt-20">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Technical Skills
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Practical stack and functional competencies demonstrated across research and deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Languages */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <Code size={18} className="text-blue-600" />
                  <span>Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data & ML */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <Brain size={18} className="text-blue-600" />
                  <span>Data & Machine Learning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.dataMl.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & NLP */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <Cpu size={18} className="text-blue-600" />
                  <span>AI & Natural Language Processing</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.aiNlp.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering & Web */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <Layers size={18} className="text-blue-600" />
                  <span>Engineering & Web Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.engineeringWeb.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-50 border border-slate-200/80 md:col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <Database size={18} className="text-blue-600" />
                  <span>Databases & Tooling</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databasesTools.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
  );
}
