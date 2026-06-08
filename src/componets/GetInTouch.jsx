import React from 'react';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaBehance, FaMedium } from 'react-icons/fa6';

const GetInTouch = () => {
  const links = [
    {
      name: "Email Me",
      url: "mailto:vedikab25@gmail.com", // <-- Update your email
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
      url: "https://medium.com/@vedikab25", // <-- Update your Medium
      icon: <FaMedium size={20} />,
      handle: "Read my thoughts"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 flex flex-col items-center py-10 px-6 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Back Button */}
      <div className="w-full max-w-2xl flex justify-start mb-10 relative z-10">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-12 text-center relative z-10">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border border-white/10 relative bg-[#0a0a0a] shadow-[0_0_30px_rgba(34,197,94,0.15)] p-1">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80" 
            alt="Vedika Basotia"
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Vedika Basotia</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
          UI/UX & E-commerce Designer. Crafting editorial aesthetics and high-converting visual experiences.
        </p>
      </div>

      {/* Links Section (Linktree Style) */}
      <div className="w-full max-w-xl flex flex-col gap-4 relative z-10 pb-20">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 md:p-5 flex items-center justify-between hover:border-green-500/50 hover:bg-[#0c140f] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] overflow-hidden"
          >
            {/* Glowing Sweep Effect on Hover */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-center gap-5 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300">
                {link.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-gray-200 group-hover:text-white transition-colors text-lg">
                  {link.name}
                </span>
                <span className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  {link.handle}
                </span>
              </div>
            </div>
            
            {/* Arrow that slides in on hover */}
            <div className="relative z-10 text-gray-500 group-hover:text-green-400 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
              <ArrowRight size={24} />
            </div>
          </a>
        ))}
      </div>
   <div className="w-xl flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-white/5 pt-8">
        <p>© Copyright 2026. All rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Made by <span className="text-gray-300 font-medium">Vedika Basotia</span>
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;