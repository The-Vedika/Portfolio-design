import React from 'react';
// Importing icons to match the services in your screenshot
import { Camera, ShoppingCart, Layers, LayoutTemplate, Mail, Zap } from 'lucide-react';

const Capabilities = () => {
  // Data array for your expert services
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

      {/* --- SECTION HEADER --- */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3 block">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
          Expert Design Services
        </h2>
      </div>

      {/* --- SEPARATED CARDS GRID --- 
          Changed from the connected hairline grid to individual separated cards (gap-6)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 overflow-hidden hover:border-white/10 hover:bg-[#0c0c0c] transition-all duration-500 flex flex-col items-center text-center"
          >
            
            {/* --- THE GLOWING SWEEPING LINE --- 
                Sits at the very top of each separated card. 
                'animationDelay' makes them fire in a cool staggered sequence.
            */}
            <div className="absolute top-0 left-0 w-full h-[2px] z-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <div 
                className="w-full h-full bg-gradient-to-r from-transparent via-green-400/80 to-transparent animate-flow" 
                style={{ animationDelay: `${index * 0.15}s` }}
              ></div>
            </div>

            {/* Subtle ambient green corner glow on hover */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon Box - Centered and scales up/glows on hover */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-[#050505] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:border-green-500/20 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
                {service.description}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Capabilities;