import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { radarSkills, categorizedSkills } from '../data/portfolioData';
import { Cpu, Terminal, Layers, Cloud } from 'lucide-react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-cyber-dark/95 backdrop-blur-md border border-cyan-500/40 p-3 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.2)]">
        <p className="font-mono text-xs text-cyan-400 font-semibold uppercase">{data.subject}</p>
        <p className="text-sm font-bold text-white mt-0.5">
          Score: <span className="text-cyan-300 font-mono">{data.value}</span> / 100
        </p>
      </div>
    );
  }
  return null;
};

export const SkillRadar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (idx) => {
    switch (idx) {
      case 0: return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 1: return <Layers className="w-4 h-4 text-blue-400" />;
      case 2: return <Cloud className="w-4 h-4 text-purple-400" />;
      default: return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skill Radar & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">Core Competencies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Multi-dimensional visualization of core AI/ML algorithms, full-stack development, and modern cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Radar Chart Card (Left 7 Cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 md:p-8 border border-white/10 relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-30 font-mono text-[10px] text-cyan-400">
              RADAR_METRICS_V2.0
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="font-mono text-sm font-semibold uppercase text-cyan-300 tracking-wider">
                  Proficiency Radar
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">Interactive Map</span>
            </div>

            {/* Radar Chart Component */}
            <div className="w-full h-[340px] sm:h-[380px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarSkills}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(255, 255, 255, 0.05)" tick={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="Skill Score"
                    dataKey="value"
                    stroke="#00f0ff"
                    strokeWidth={2}
                    fill="url(#radarGradient)"
                    fillOpacity={0.55}
                  />
                  <defs>
                    <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 text-center text-xs font-mono text-slate-500">
              * Normalized proficiency values for portfolio visualization.
            </div>
          </div>

          {/* Categorized Tech Stack Tabs & Pills (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category Navigation Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-cyber-dark/80 border border-white/10">
              {categorizedSkills.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[130px] flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeTab === idx
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {getCategoryIcon(idx)}
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Selected Category Detail Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 relative min-h-[300px]">
              <div className="mb-4 pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  {getCategoryIcon(activeTab)}
                  <span>{categorizedSkills[activeTab].category}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {categorizedSkills[activeTab].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {categorizedSkills[activeTab].skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-cyber-dark/90 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/30 transition-all duration-300 cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff]" />
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 group-hover:text-cyan-300">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
