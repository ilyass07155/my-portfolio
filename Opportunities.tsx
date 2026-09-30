import React from 'react';

export default function Opportunities({ openTo }: any) {
  return (
        <section id="opportunities" className="scroll-mt-20">
          <div className="bg-slate-900 rounded-lg p-6 sm:p-8 text-white shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Career Alignment
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Open to Opportunities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-medium">Target Roles</div>
                <div className="flex flex-wrap gap-1.5">
                  {openTo.roles.map((role, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-medium">Work Arrangement</div>
                <div className="flex flex-wrap gap-1.5">
                  {openTo.setup.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-medium">Domain Focus</div>
                <div className="flex flex-wrap gap-1.5">
                  {openTo.interests.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
