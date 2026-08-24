import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Search, Terminal, Github, Linkedin, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'GitHub', href: '#github' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-black text-white text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
              SD
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-wider font-sans group-hover:text-cyan-300 transition-colors">
                SHLOK DUBEY
              </span>
              <span className="text-[10px] font-mono text-cyan-400">AI/ML • FULL STACK</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Command Palette Trigger & Socials) */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Ctrl + K Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-cyber-dark/90 border border-cyan-500/30 text-slate-300 hover:text-white hover:border-cyan-400 text-xs font-mono transition-all shadow-md"
              title="Search Portfolio (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300 border border-white/10">
                Ctrl K
              </kbd>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-blue-300 hover:border-blue-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl glass-panel text-cyan-400"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:bg-cyan-950/40 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-white/10 flex items-center justify-around">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-mono text-blue-400"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
