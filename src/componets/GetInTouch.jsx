import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaBehance, FaMedium } from 'react-icons/fa6';

const GetInTouch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
    {
      name: "Email Me",
      url: "mailto:vedikab25@gmail.com",
      icon: <Mail size={20} />,
      handle: "Let's discuss your project"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vedika-basotia", 
      icon: <FaLinkedinIn size={20} />,
      handle: "Connect professionally"
    },
    {
      name: "Medium",
      url: "https://medium.com/@vedikab25", 
      icon: <FaMedium size={20} />,
      handle: "Read my thoughts"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 flex flex-col items-center relative overflow-x-hidden">
      
      {/* CUSTOM KEYFRAMES FOR MOBILE SWEEP */}
      <style>
        {`
          @keyframes mobile-sweep {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); } /* Pauses briefly before sweeping again */
          }
        `}
      </style>

      {/* Background ambient glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* FIXED GLASSMORPHIC HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-2xl mx-auto w-full px-6 py-5 flex justify-start">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-12 text-center relative z-10 pt-32 px-6">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border border-white/10 relative bg-[#0a0a0a] shadow-[0_0_30px_rgba(34,197,94,0.15)] p-1">
          <img 
            src="https://res.cloudinary.com/dp5iixm06/image/upload/v1780948803/11-11-03_ksyvtf.jpg" 
            alt="Vedika Basotia"
            className="w-full h-full object-cover rounded-full transition-all duration-500 grayscale-0 md:grayscale md:hover:grayscale-0"
        
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Vedika Basotia</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
          UI/UX & E-commerce Designer. Crafting editorial aesthetics and high-converting visual experiences.
        </p>
      </div>

      {/* Links Section (Linktree Style) */}
      <div className="w-full max-w-xl flex flex-col gap-4 relative z-10 pb-20 px-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            // MOBILE: Always active (green border, lifted up, shadow, lighter bg)
            // DESKTOP (md:): Inactive state by default, turns active on hover
            className={`group relative w-full rounded-2xl p-4 md:p-5 flex items-center justify-between overflow-hidden transition-all duration-300
              bg-[#0c140f] border border-green-500/50 -translate-y-1 shadow-[0_10px_30px_rgba(34,197,94,0.1)]
              md:bg-[#0a0a0a] md:border-white/10 md:translate-y-0 md:shadow-none
              md:hover:bg-[#0c140f] md:hover:border-green-500/50 md:hover:-translate-y-1 md:hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)]
            `}
          >
            {/* Glowing Sweep Effect */}
            {/* MOBILE: Continuous looping animation, cascaded using the index delay */}
            {/* DESKTOP (md:): Reverts to the static left-side position waiting for hover */}
            <div 
              className={`absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 
                animate-[mobile-sweep_3s_ease-in-out_infinite]
                md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000
              `}
              style={{ animationDelay: `${index * 0.4}s` }}
            ></div>

            <div className="flex items-center gap-5 relative z-10">
              {/* ICON */}
              {/* MOBILE: Always green and scaled up */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center transition-all duration-300
                text-green-400 scale-110
                md:text-gray-300 md:scale-100 md:group-hover:text-green-400 md:group-hover:scale-110
              `}>
                {link.icon}
              </div>
              
              <div className="flex flex-col text-left">
                {/* NAME */}
                <span className={`font-semibold text-lg transition-colors
                  text-white 
                  md:text-gray-200 md:group-hover:text-white
                `}>
                  {link.name}
                </span>
                {/* HANDLE */}
                <span className={`text-xs md:text-sm transition-colors
                  text-gray-400 
                  md:text-gray-500 md:group-hover:text-gray-400
                `}>
                  {link.handle}
                </span>
              </div>
            </div>
            
            {/* ARROW */}
            {/* MOBILE: Always visible, green, and pushed into position */}
            <div className={`relative z-10 transition-all duration-300
              opacity-100 translate-x-0 text-green-400
              md:opacity-0 md:-translate-x-4 md:text-gray-500 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:text-green-400
            `}>
              <ArrowRight size={24} />
            </div>
          </a>
        ))}
      </div>
      
      {/* Footer */}
      <div className="w-full max-w-xl flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-white/5 pt-8 pb-10 px-6 relative z-10">
        <p>© Copyright 2026. All rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Made by <span className="text-gray-300 font-medium">Vedika Basotia</span>
        </p>
      </div>

    </div>
  );
};

export default GetInTouch;