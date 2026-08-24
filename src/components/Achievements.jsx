import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, Star, Mic, Calendar } from 'lucide-react';

export const Achievements = () => {
  const getIcon = (cat) => {
    if (cat.includes('Hackathon')) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (cat.includes('Leadership')) return <Award className="w-5 h-5 text-cyan-400" />;
    if (cat.includes('Public Speaking')) return <Mic className="w-5 h-5 text-purple-400" />;
    return <Star className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hackathon recognitions, event management milestones, and public engagements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyber-dark border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    {getIcon(item.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {item.organization}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-cyan-400">
                Category: {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
