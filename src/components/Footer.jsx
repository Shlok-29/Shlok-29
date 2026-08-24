import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Code2, ArrowUp, Sparkles } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 border-t border-white/10 bg-cyber-dark overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (Left 6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                SD
              </div>
              <span className="font-bold text-lg text-white font-sans">SHLOK DUBEY</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              AI/ML Engineer & Full-Stack Developer creating production AI products, autonomous agent architectures, and responsive web platforms.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for AI/ML and Full-Stack Engineering roles</span>
            </div>
          </div>

          {/* Social Profiles & Coding Links (Right 6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider">
              CONNECT & CODING PROFILES
            </h3>
            
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-slate-200 hover:text-blue-300 border border-white/10 hover:border-blue-500/40 text-xs font-mono transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-slate-200 hover:text-rose-300 border border-white/10 hover:border-rose-500/40 text-xs font-mono transition-all"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Email</span>
              </a>

              <a
                href={personalInfo.codingProfiles.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-slate-200 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 text-xs font-mono transition-all"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500 pt-2">
              Direct Contact: <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">{personalInfo.email}</a>
            </p>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Shlok Dubey. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Built with React, Vite & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-panel text-cyan-400 hover:text-white hover:border-cyan-400 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
