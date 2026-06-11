import React, { useEffect, useRef, useState } from 'react';
import { Camera, ShoppingCart, Layers, LayoutTemplate, Mail, Zap } from 'lucide-react';

// --- NEW COMPONENT: Scroll-Aware Capability Card ---
const CapabilityCard = ({ service, index }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers when the card is 50% visible on the screen
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 overflow-hidden transition-all duration-500 flex flex-col items-center text-center md:hover:border-white/10 md:hover:bg-[#0c0c0c]"
    >
      
      {/* THE GLOWING SWEEPING LINE */}
      {/* Mobile: Activates on scroll. Desktop: Activates on hover */}
      <div className={`absolute top-0 left-0 w-full h-[2px] z-0 overflow-hidden transition-opacity duration-500 
        ${isActive ? 'opacity-100' : 'opacity-50'} 
        md:opacity-50 md:group-hover:opacity-100`}
      >
        <div 
          className="w-full h-full bg-gradient-to-r from-transparent via-green-400/80 to-transparent animate-flow" 
          style={{ animationDelay: `${index * 0.15}s` }}
        ></div>
      </div>

      {/* AMBIENT CORNER GLOW */}
      <div className={`absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none 
        ${isActive ? 'opacity-100' : 'opacity-0'} 
        md:opacity-0 md:group-hover:opacity-100`}
      ></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* ICON BOX */}
        {/* Uses complex Tailwind to manage Mobile Scroll vs Desktop Hover states */}
        <div className={`mb-6 w-14 h-14 rounded-2xl bg-[#050505] flex items-center justify-center transition-all duration-300 border 
          ${isActive ? 'text-green-400 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'text-gray-400 border-white/5 shadow-none'} 
          md:text-gray-400 md:border-white/5 md:shadow-none 
          md:group-hover:text-green-400 md:group-hover:border-green-500/20 md:group-hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]`}
        >
          {service.icon}
        </div>
        
        {/* TITLE */}
        <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 
          ${isActive ? 'text-white' : 'text-gray-200'} 
          md:text-gray-200 md:group-hover:text-white`}
        >
          {service.title}
        </h3>
        
        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
          {service.description}
        </p>
      </div>

    </div>
  );
};

// --- MAIN CAPABILITIES SECTION ---
const Capabilities = () => {
  const services = [
    {
      icon: <Camera size={24} strokeWidth={1.5} />,
      title: "Product Hero Images",
      description: "High-end product photography art direction and retouching for luxury retail."
    },
    {
      icon: <ShoppingCart size={24} strokeWidth={1.5} />,
      title: "A+ Content Design",
      description: "Converting Amazon EBC/A+ content that elevates brand perceived value."
    },
    {
      icon: <Layers size={24} strokeWidth={1.5} />,
      title: "Lifestyle Composites",
      description: "Seamless digital manipulation combining studio shots with atmospheric settings."
    },
    {
      icon: <LayoutTemplate size={24} strokeWidth={1.5} />,
      title: "Landing Page Design",
      description: "Conversion-optimized interfaces for startups and established tech brands."
    },
    {
      icon: <Mail size={24} strokeWidth={1.5} />,
      title: "Email Design",
      description: "Sophisticated CRM templates that maintain brand integrity in the inbox."
    },
    {
      icon: <Zap size={24} strokeWidth={1.5} />,
      title: "AI Creative Work",
      description: "Leveraging Midjourney and Stable Diffusion for rapid high-fidelity conceptualization."
    }
  ];

  return (
    <section id="capabilities" className="py-20 border-t border-white/5">
      
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

      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3 block">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
          Expert Design Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <CapabilityCard key={index} service={service} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Capabilities;