import React from 'react';
import { Github, Linkedin, Edit3, X, Menu } from 'lucide-react';

export default function Header({ profile, onEdit, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }: any) {
  return (
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  IJ
                </div>
                <div>
                  <span className="font-bold text-slate-900 tracking-tight block text-sm sm:text-base leading-none">
                    {profile.name}
                  </span>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                    Data Scientist & AI Engineer
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#opportunities" className="text-slate-600 hover:text-blue-600 transition-colors">Opportunities</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-3">
              <a 
                href={profile.github}
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={profile.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              
              <button 
                onClick={() => onEdit()}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 text-xs font-semibold rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors"
              >
                <Edit3 size={14} className="text-blue-600" />
                <span className="hidden sm:inline">Edit Data</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => onToggleMobileMenu()}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#about" 
              onClick={() => onCloseMobileMenu()}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => onCloseMobileMenu()}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Selected Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => onCloseMobileMenu()}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Technical Skills
            </a>
            <a 
              href="#experience" 
              onClick={() => onCloseMobileMenu()}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              onClick={() => onCloseMobileMenu()}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        )}
      </header>
  );
}
