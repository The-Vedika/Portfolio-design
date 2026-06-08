import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 max-w-5xl mx-auto px-6 pt-20 pb-10 flex flex-col items-center relative z-20">
      
      {/* --- REUSED CUSTOM ANIMATION FOR GLOW --- */}
      <style>
        {`
          @keyframes flow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-flow {
            animation: flow 2.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Main CTA Box */}
      {/* Removed the outer glow (shadow) and changed static border to match capabilities (border-white/5) */}
      <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center transition-all duration-500 hover:border-white/10 hover:bg-[#0c0c0c] mb-16 relative overflow-hidden group">

        {/* --- THE GLOWING SWEEPING LINE (From Capabilities) --- */}
        <div className="absolute top-0 left-0 w-full h-[2px] z-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-green-400/80 to-transparent animate-flow"></div>
        </div>

        {/* Subtle ambient glow inside the top of the box (kept for depth) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-green-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-8 relative z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-green-500 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-[3.5rem] font-bold text-white mb-12 tracking-tight leading-tight max-w-2xl relative z-10">
          Let's build something<br />amazing together.
        </h2>

        {/* CTA Button routing to the new page */}
        <Link 
          to="/get-in-touch"
          className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-medium text-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300 relative z-10"
        >
          Get in touch <ArrowRight size={20} />
        </Link>
      </div>

      {/* Bottom Copyright Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-white/5 pt-8">
        <p>© Copyright 2026. All rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Made by <span className="text-gray-300 font-medium">Vedika Basotia</span>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;