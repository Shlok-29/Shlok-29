import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">AI & Web Products</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Production-ready multi-agent platforms, AI financial mentors, and full-stack collaborative tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 p-1 rounded-xl bg-cyber-dark border border-white/10">
            {['All', 'AI/ML', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Card Gradient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div>
                {/* Top Number & Highlight Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                    {project.id}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{project.highlight}</span>
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1 mb-4 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem Solved Container */}
                <div className="p-3.5 rounded-xl bg-cyber-dark/80 border border-white/5 mb-6 text-xs text-slate-400">
                  <div className="flex items-center space-x-1.5 text-cyan-400 font-mono font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PROBLEM SOLVED:</span>
                  </div>
                  <p>{project.problemSolved}</p>
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>GitHub Code</span>
                    </a>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      Repo Available
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
