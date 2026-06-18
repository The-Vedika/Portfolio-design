import React, { useState, useEffect } from 'react';
// UI icons stay with Lucide
import { Home, User, FolderGit2, Layers, Mail, Menu, X } from 'lucide-react';
// Brand icons are now imported from FontAwesome 6 (fa6) inside react-icons
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaBehance, FaMedium } from 'react-icons/fa6';
import { MdMarkEmailUnread } from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', icon: <Home size={18} /> },
    { name: 'Projects', icon: <FolderGit2 size={18} /> },
    { name: 'Capabilities', icon: <Layers size={18} /> },
    { name: 'Philosophy', icon: <User size={18} /> },
    { name: 'Contact', icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    { 
      icon: <Mail size={18} />, 
      href: 'mailto:vedikab25@gmail.com' 
    }, 
    { 
      icon: <FaLinkedinIn size={18} />, 
      href: 'https://www.linkedin.com/in/vedika-basotia' 
    },
    { 
      icon: <FaMedium size={18} />, 
      href: 'https://medium.com/@vedikab25' 
    },
  ];

  // ScrollSpy Logic (Tracks active section)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, footer');
      let current = 'home';

      const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (reachedBottom) {
        current = 'contact';
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionId = section.getAttribute('id');
          
          if (window.scrollY >= sectionTop - window.innerHeight / 3) {
            if (sectionId) {
              if (sectionId === 'footer' || section.tagName.toLowerCase() === 'footer') {
                current = 'contact';
              } else {
                current = sectionId;
              }
            }
          }
        });
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- NEW: Smooth Scroll Function ---
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevents the instant 'boom' jump
    setIsOpen(false); // Closes the mobile menu when a link is clicked

    const element = document.getElementById(targetId);
    if (element) {
      // Calculates the exact position and scrolls smoothly
      // The '- 60' accounts for the mobile top bar so it doesn't overlap your section titles!
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 60; 
      
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="backdrop-blur md:hidden fixed top-0 left-0 w-full bg-[#0a0a0a]/75 border-b border-white/10 p-4 flex justify-between items-center z-50">
        <span className="text-white font-semibold">V</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Blurred Backdrop Overlay for Mobile */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Desktop Sidebar & Mobile Menu Overlay */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col p-6 text-gray-300 z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 pt-20' : '-translate-x-full pt-6'} 
        md:translate-x-0 md:flex
      `}>
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 rounded-2xl overflow-hidden mb-4 border-2 border-white/10 relative bg-neutral-800">
            <a href='#home'>
              <img 
                src="./11-11-03.jpg"
                alt="Vedika"
                className="w-full h-full object-cover transition-all duration-500 grayscale-0 md:grayscale md:hover:grayscale-0"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-2 bg-[#063319] text-green-400 text-xs font-medium px-4 py-1.5 rounded-full border border-green-900/50 w-full justify-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Work
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2 w-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();

            return (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                // Applied the smooth scroll function here!
                onClick={(e) => handleSmoothScroll(e, link.name.toLowerCase())} 
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                  ${isActive 
                    ? 'bg-[#1a1a1a] text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]' 
                    : 'hover:bg-white/5 hover:text-white'
                  }`}
              >
                <span className={isActive ? 'text-white' : 'text-gray-500'}>
                  {link.icon}
                </span>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-between items-center w-full px-2 pt-6 border-t border-white/5">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;