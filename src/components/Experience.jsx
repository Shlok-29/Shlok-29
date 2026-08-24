import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>LEADERSHIP & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Leadership & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Organizational Impact</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l border-cyan-500/30 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              
              {/* Timeline Node Glow Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all" />

              {/* Date Badge Desktop Floating Left */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                  {exp.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl">
                
                <div className="sm:hidden mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-4">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.organization}</span>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
