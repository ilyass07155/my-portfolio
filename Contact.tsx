import React from 'react';
import { Mail, MapPin, Github, Linkedin, Check, Copy } from 'lucide-react';

export default function Contact({ profile, onCopyEmail, copiedEmail, githubStats, formspreeEndpoint, contactStatus, onContactStatusChange }: any) {
  return (
        <section id="contact" className="scroll-mt-20">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Let's Work Together
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  I am available for full-time technical roles, machine learning engineering consulting, and collaborative software projects.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <Mail size={18} className="text-blue-600 shrink-0" />
                  <span className="font-medium">{profile.email}</span>
                  <button 
                    onClick={onCopyEmail}
                    className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <MapPin size={18} className="text-blue-600 shrink-0" />
                  <span>{profile.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-4">
                <a 
                  href={profile.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-blue-600"
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                </a>
                <a 
                  href={profile.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-blue-600"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
              {githubStats && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                  <span><strong className="text-slate-800">{githubStats.repos}</strong> public repositories</span>
                  <span><strong className="text-slate-800">{githubStats.followers}</strong> followers</span>
                </div>
              )}
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-lg border border-slate-200">
              <form
                action={formspreeEndpoint || undefined}
                method="POST"
                onSubmit={async (e) => {
                  if (!formspreeEndpoint) {
                    e.preventDefault();
                    onContactStatusChange('Contact form is not configured yet. Add VITE_FORMSPREE_ENDPOINT to your environment variables.');
                    return;
                  }

                  e.preventDefault();
                  onContactStatusChange('Sending…');
                  try {
                    const form = e.currentTarget;
                    const response = await fetch(formspreeEndpoint, {
                      method: 'POST',
                      body: new FormData(form),
                      headers: { Accept: 'application/json' }
                    });
                    if (!response.ok) throw new Error('Form submission failed');
                    form.reset();
                    onContactStatusChange('Message sent successfully. Thank you for reaching out.');
                  } catch {
                    onContactStatusChange('Something went wrong. Please try again or email me directly.');
                  }
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Machine Learning Role Inquiry / Project"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    required 
                    placeholder="Brief description of project requirements or opportunity..."
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition-colors shadow-sm"
                >
                  Send Message
                </button>
                {contactStatus && (
                  <p role="status" className="text-xs text-slate-600">{contactStatus}</p>
                )}
              </form>
            </div>

          </div>
        </section>
  );
}
