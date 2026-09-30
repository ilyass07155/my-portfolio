import React from 'react';
import { MapPin, Award, ChevronRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero({ profile }: any) {
  return (
        <section id="hero" className="pt-4 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>{profile.status}</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {profile.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-blue-600">
                  {profile.title}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {profile.tagline}
              </p>

              {/* Location & Credentials */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-medium border-t border-slate-200 pt-4">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{profile.location}</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <Award size={16} className="text-slate-400" />
                  <span>{profile.credentials}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="#projects"
                  className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm inline-flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ChevronRight size={16} />
                </a>

                <a 
                  href="#contact"
                  className="px-4 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors shadow-sm inline-flex items-center space-x-2"
                >
                  <Mail size={16} className="text-slate-500" />
                  <span>Get in Touch</span>
                </a>

                <a 
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors shadow-sm inline-flex items-center space-x-2"
                >
                  <Github size={16} className="text-slate-700" />
                  <span>GitHub</span>
                </a>

                <a 
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors shadow-sm inline-flex items-center space-x-2"
                >
                  <Linkedin size={16} className="text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* Profile Photo Display */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center">
                  {profile.photoUrl ? (
                    <img 
                      src={profile.photoUrl} 
                      alt={profile.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/400x400/0F172A/FFFFFF?text=MIJ";
                      }}
                    />
                  ) : (
                    <div className="text-4xl font-bold text-slate-400">
                      MIJ
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs text-slate-500 font-medium">PEC Registered Software Engineer</span>
                </div>
              </div>
            </div>

          </div>
        </section>
  );
}
