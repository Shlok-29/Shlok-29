import React, { useState, useEffect } from 'react';
import { AnimatedPortrait } from './AnimatedPortrait';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Github, Linkedin, FileText, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = ({ onOpenCommandPalette }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "AI/ML Engineer • Full-Stack Developer • Multi-Agent Systems Builder";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Cyber Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop Two-Column / Mobile Stacked Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile Portrait View (First on small screens) */}
          <div className="lg:hidden flex justify-center w-full mb-4">
            <AnimatedPortrait />
          </div>

          {/* Text & CTAs Column (Left 7 Cols on Desktop) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-cyber-dark/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                {personalInfo.status}
              </span>
              <span className="text-xs text-slate-500 font-mono">| B.Tech CSE (AI & ML)</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                SHLOK <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">DUBEY</span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-base font-mono font-semibold text-cyan-400 tracking-wider">
                <span>AI/ML ENGINEER</span>
                <span>•</span>
                <span>FULL-STACK DEVELOPER</span>
                <span>•</span>
                <span>GENAI ENTHUSIAST</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              "{personalInfo.tagline}"
            </p>

            {/* Terminal-Style Identity Box */}
            <div className="glass-panel rounded-xl p-4 border border-cyan-500/30 font-mono text-xs sm:text-sm text-slate-200 shadow-xl max-w-xl">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-500 text-[11px]">bash — 80x24</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-purple-400">~/{personalInfo.terminalContent.user}</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-white">{personalInfo.terminalContent.command}</span>
                </div>
                <div className="text-emerald-400 min-h-[24px] flex items-center">
                  <span>{typedText}</span>
                  <span className="w-2 h-4 bg-cyan-400 inline-block ml-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:scale-[1.02] transition-all"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GITHUB</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-blue-300 border border-white/10 hover:border-blue-500/40 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={`${personalInfo.githubRepo}/raw/main/README.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>RESUME</span>
              </a>
            </div>

          </div>

          {/* Desktop Animated SVG Portrait Column (5 Cols on Desktop ~40-45% width) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
            <AnimatedPortrait />
          </div>

        </div>
      </div>
    </section>
  );
};
