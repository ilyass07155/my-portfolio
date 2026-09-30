import React from 'react';
import { Brain, Cpu, Layers } from 'lucide-react';

export default function About({ profile }: any) {
  return (
        <section id="about" className="scroll-mt-20">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              About
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>{profile.bioParagraph1}</p>
              <p>{profile.bioParagraph2}</p>
            </div>

            {/* Focus Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-start space-x-3">
                <Brain className="text-blue-600 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Machine Learning & NLP</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Scikit-learn, textual parsing, model pipelines, LLM APIs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cpu className="text-blue-600 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Quantitative Logic</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Formal logic verification, discrete mathematics, analytical math</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Layers className="text-blue-600 mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Software Architecture</h3>
                  <p className="text-xs text-slate-500 mt-0.5">REST APIs, React full-stack, Stripe integrations, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
