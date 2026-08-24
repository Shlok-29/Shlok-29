import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, GraduationCap, Brain, Code2, Trophy, Users, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Shlok Dubey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            
            <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">B.Tech Computer Science Engineering (AI & ML)</h3>
                <p className="text-xs font-mono text-cyan-400">IES University • Specialization in Artificial Intelligence</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am an AI/ML Engineer and Full-Stack Developer dedicated to transforming theoretical machine learning algorithms into production-ready software solutions. My work centers on autonomous multi-agent systems, Generative AI models, and real-time web architecture.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Beyond individual coding, I serve as <strong className="text-white">Vice President of the Student Council</strong> at IES University, managing cross-functional technical initiatives and leading flagship symposiums like INFORIA and TEDx conferences.
            </p>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-white/5 space-y-1.5">
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-semibold">
                  <Brain className="w-4 h-4" />
                  <span>AI & AGENTIC SYSTEMS</span>
                </div>
                <p className="text-xs text-slate-400">
                  Building autonomous CrewAI agents, Gemini-powered mentors, and NLP recommendation engines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-white/5 space-y-1.5">
                <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-semibold">
                  <Code2 className="w-4 h-4" />
                  <span>FULL STACK ARCHITECTURE</span>
                </div>
                <p className="text-xs text-slate-400">
                  Crafting modern React/Next.js interfaces, FastAPI microservices, and Node.js REST APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-white/5 space-y-1.5">
                <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs font-semibold">
                  <Trophy className="w-4 h-4" />
                  <span>HACKATHON FINALIST</span>
                </div>
                <p className="text-xs text-slate-400">
                  Top 10 Udbhav'26 Grand Finalist & TIT Srijan 2026 National Hackathon Finalist.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-white/5 space-y-1.5">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold">
                  <Users className="w-4 h-4" />
                  <span>STUDENT LEADERSHIP</span>
                </div>
                <p className="text-xs text-slate-400">
                  VP Student Council & Former Junior Manager at AIESEC Bhopal.
                </p>
              </div>
            </div>

          </div>

          {/* Identity Quick Metrics (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-sm font-mono font-semibold uppercase text-cyan-400 tracking-wider">
                CORE TECHNICAL FOCUS
              </h3>
              
              <div className="space-y-3">
                {[
                  "Generative AI & LLM Orchestration",
                  "Multi-Agent Supply Chain & Financial Simulators",
                  "Full-Stack Web (React, Node, Express, FastAPI)",
                  "Database Engineering (MongoDB, PostgreSQL, MySQL)",
                  "Cloud Deployment & Dockerized Microservices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-blue-950/30">
              <p className="font-mono text-xs text-cyan-300 mb-2">⚡ CURRENT MISSION</p>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                "Seeking high-impact AI/ML engineering or full-stack software development roles where I can build production systems that impact thousands of real users."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
