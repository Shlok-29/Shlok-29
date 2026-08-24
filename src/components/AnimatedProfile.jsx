import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

export const AnimatedProfile = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * 15;
    const rotateY = -((e.clientX - centerX) / rect.width) * 15;
    setMouseOffset({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const floatingLabels = [
    { text: 'AI/ML', pos: 'top-2 -left-4', delay: 'delay-100', color: 'border-cyan-500/40 text-cyan-300' },
    { text: 'PYTHON', pos: 'top-1/4 -right-6', delay: 'delay-300', color: 'border-blue-500/40 text-blue-300' },
    { text: 'GENAI', pos: 'bottom-1/3 -left-8', delay: 'delay-500', color: 'border-purple-500/40 text-purple-300' },
    { text: 'REACT', pos: '-bottom-2 right-4', delay: 'delay-700', color: 'border-cyan-400/40 text-cyan-200' },
    { text: 'FULL STACK', pos: 'bottom-2 -left-2', delay: 'delay-900', color: 'border-blue-400/40 text-blue-200' },
  ];

  return (
    <div 
      className="relative flex items-center justify-center p-6 md:p-8 perspective-1000 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Container with 3D Tilt */}
      <div 
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${mouseOffset.x}deg) rotateY(${mouseOffset.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Slow Rotating Outer Tech Ring 1 */}
        <div className="absolute -inset-4 rounded-full border border-cyan-500/30 border-dashed animate-spin-slow opacity-80 pointer-events-none" />
        
        {/* Slow Rotating Outer Ring 2 (Reverse) */}
        <div className="absolute -inset-8 rounded-full border border-blue-500/20 animate-spin-reverse-slow opacity-60 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f0ff] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Outer Conic Gradient Animated Border Container */}
        <div className={`w-full h-full rounded-2xl md:rounded-3xl p-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          
          {/* Inner Image Wrapper */}
          <div className="relative w-full h-full rounded-[22px] md:rounded-[22px] overflow-hidden bg-cyber-dark scanline-overlay">
            
            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Shlok Dubey - AI/ML Engineer & Full-Stack Developer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />

            {/* Subtle Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-80" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-80" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-80" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-80" />
          </div>
        </div>

        {/* Floating Technical Labels */}
        {floatingLabels.map((lbl, idx) => (
          <div
            key={idx}
            className={`absolute ${lbl.pos} z-30 transition-all duration-700 ${lbl.delay} ${
              loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75'
            }`}
          >
            <span className={`inline-flex items-center px-2.5 py-1 text-[10px] md:text-xs font-mono font-semibold tracking-wider uppercase rounded-full bg-cyber-dark/90 backdrop-blur-md border ${lbl.color} shadow-lg shadow-black/50 hover:scale-110 transition-transform`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
              {lbl.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
