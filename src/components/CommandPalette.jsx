import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Search, X, Home, User, Cpu, FolderGit2, Trophy, Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // trigger toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { name: 'Navigate to Home', href: '#home', icon: <Home className="w-4 h-4 text-cyan-400" /> },
    { name: 'Navigate to About', href: '#about', icon: <User className="w-4 h-4 text-blue-400" /> },
    { name: 'Navigate to Technical Arsenal', href: '#skills', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { name: 'Navigate to Featured Projects', href: '#projects', icon: <FolderGit2 className="w-4 h-4 text-emerald-400" /> },
    { name: 'Navigate to Achievements', href: '#achievements', icon: <Trophy className="w-4 h-4 text-amber-400" /> },
    { name: 'Navigate to GitHub Grid', href: '#github', icon: <Github className="w-4 h-4 text-slate-300" /> },
    { name: 'Open GitHub Repository (Shlok-29)', external: personalInfo.github, icon: <ExternalLink className="w-4 h-4 text-cyan-400" /> },
    { name: 'Open LinkedIn Profile', external: personalInfo.linkedin, icon: <Linkedin className="w-4 h-4 text-blue-400" /> },
    { name: 'Send Email (shlokdubey2903@gmail.com)', external: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4 text-rose-400" /> },
    { name: 'Open LeetCode Profile', external: personalInfo.codingProfiles.leetcode, icon: <FileText className="w-4 h-4 text-amber-500" /> },
  ];

  const filteredActions = actions.filter(action =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleActionClick = (action) => {
    if (action.external) {
      window.open(action.external, '_blank');
    } else if (action.href) {
      window.location.href = action.href;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="glass-panel w-full max-w-xl rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm font-mono focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleActionClick(action)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-cyan-950/40 hover:border hover:border-cyan-500/30 transition-all text-left group"
              >
                <div className="flex items-center space-x-3">
                  {action.icon}
                  <span>{action.name}</span>
                </div>
                <span className="text-[10px] text-slate-500 group-hover:text-cyan-400">
                  {action.external ? 'External ↗' : 'Jump to section'}
                </span>
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands found for "{query}"
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-cyber-dark/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use ESC or click outside to dismiss</span>
          <span>Shlok Dubey AI Portfolio</span>
        </div>
      </div>
    </div>
  );
};
