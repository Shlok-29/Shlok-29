import React, { useState, useEffect } from 'react';
import portraitSvg from '../assets/portrait.svg';

export const AnimatedPortrait = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const imageSrc = src || portraitSvg;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * 12;
    const rotateY = -((e.clientX - centerX) / rect.width) * 12;
    setMouseOffset({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const techLabels = [
    { text: 'AI / ML', pos: 'top-4 -left-4 sm:-left-6', delay: 'delay-100', color: 'border-cyan-500/40 text-cyan-300' },
    { text: 'GENAI', pos: 'top-1/4 -right-4 sm:-right-8', delay: 'delay-300', color: 'border-purple-500/40 text-purple-300' },
    { text: 'PYTHON', pos: 'bottom-1/3 -left-6 sm:-left-10', delay: 'delay-500', color: 'border-blue-500/40 text-blue-300' },
    { text: 'REACT', pos: '-bottom-3 right-4', delay: 'delay-700', color: 'border-cyan-400/40 text-cyan-200' },
    { text: 'NODE.JS', pos: 'bottom-2 -left-2', delay: 'delay-900', color: 'border-indigo-400/40 text-indigo-300' },
  ];

  return (
    <div
      className="relative flex items-center justify-center p-4 sm:p-8 perspective-1000 group cursor-pointer w-full max-w-lg mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main 3D Parallax Container */}
      <div
        className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${mouseOffset.x}deg) rotateY(${mouseOffset.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Slow Rotating Outer HUD Ring 1 */}
        <div className="absolute -inset-3 sm:-inset-6 rounded-full border border-cyan-500/30 border-dashed animate-spin-slow opacity-80 pointer-events-none" />

        {/* Slow Rotating Reverse HUD Ring 2 */}
        <div className="absolute -inset-6 sm:-inset-10 rounded-full border border-blue-500/20 animate-spin-reverse-slow opacity-60 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f0ff] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Outer Frame with Conic Gradient & Ambient Glow */}
        <div className={`w-full h-full rounded-2xl md:rounded-3xl p-[3px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_45px_rgba(0,240,255,0.25)] transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Inner SVG Canvas Wrapper with Scanline Overlay */}
          <div className="relative w-full h-full rounded-[21px] md:rounded-[21px] overflow-hidden bg-cyber-dark/95 backdrop-blur-xl scanline-overlay flex items-center justify-center p-2">
            
            {/* SVG Image Artwork */}
            <img
              src={imageSrc}
              alt="Shlok Dubey - Futuristic AI/ML Engineer SVG Portrait"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-transform duration-700 group-hover:scale-102"
              loading="eager"
            />

            {/* Glowing Corner Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-80" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-80" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-80" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-80" />
          </div>
        </div>

        {/* Floating Glass Tech Labels */}
        {techLabels.map((lbl, idx) => (
          <div
            key={idx}
            className={`absolute ${lbl.pos} z-30 transition-all duration-700 ${lbl.delay} ${
              loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75'
            }`}
          >
            <span className={`inline-flex items-center px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase rounded-full bg-cyber-dark/90 backdrop-blur-md border ${lbl.color} shadow-lg shadow-black/60 hover:scale-110 transition-transform`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
              {lbl.text}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};
