import React from 'react';

export default function Experience({ experience }: any) {
  return (
        <section id="experience" className="scroll-mt-20">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Experience & Academic Background
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Engineering practice, professional registration, and academic progression.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-6 my-4">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-blue-600">
                      {exp.organization} • <span className="text-slate-500">{exp.location}</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}
