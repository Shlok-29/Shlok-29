import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  {cert.issuer}
                </p>
              </div>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors pt-3 border-t border-white/10"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-500">
                  Verified Award
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
