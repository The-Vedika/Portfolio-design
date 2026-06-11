import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "Immersion into your brand goals, target audience, and market landscape."
    },
    {
      number: "2",
      title: "Concept",
      description: "Iterative exploration of visual directions and structural frameworks."
    },
    {
      number: "3",
      title: "Refinement",
      description: "Polishing chosen concepts with obsessive attention to typography and detail."
    },
    {
      number: "4",
      title: "Delivery",
      description: "Comprehensive asset handoff with guidelines for consistent implementation."
    }
  ];

  return (
    <section id="process" className="py-20 border-t border-white/5 overflow-hidden">
      
      {/* INJECTED CUSTOM KEYFRAMES */}
      <style>
        {`
          /* Sweeps exactly from one edge to the other */
          @keyframes sweep-x {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes sweep-y {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>

      {/* SECTION HEADER */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium text-white tracking-tight mb-2">
          The Process
        </h2>
        <p className="text-gray-500">
          A structured approach to creative problem solving.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-0 md:gap-6">
        
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 group flex flex-row md:flex-col gap-6 md:gap-0 pb-12 md:pb-0">
            
            {/* --- DESKTOP HORIZONTAL LINE --- */}
            {/* Runs strictly from center of this node to center of next node */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-6 w-[calc(100%+1.5rem)] h-[2px] bg-white/5 z-[-1] overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
                  style={{
                    animation: `sweep-x 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.4}s` // Cascading delay
                  }}
                ></div>
              </div>
            )}

            {/* --- MOBILE VERTICAL LINE --- */}
            {/* Runs perfectly down the left side, hiding exactly behind the boxes */}
            {index < steps.length - 1 && (
              <div className="block md:hidden absolute top-6 left-6 w-[2px] h-full bg-white/5 z-[-1] overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-b from-transparent via-green-400 to-transparent"
                  style={{
                    animation: `sweep-y 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.4}s` // Cascading delay
                  }}
                ></div>
              </div>
            )}

            {/* NUMBER BOX */}
            <div className="shrink-0 relative z-10">
              {/* Opaque background ensures lines passing underneath are hidden */}
              <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#050505] flex items-center justify-center text-white font-medium text-lg md:mb-6 group-hover:border-green-500/50 group-hover:text-green-400 group-hover:bg-[#0a0a0a] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300">
                {step.number}
              </div>
            </div>

            {/* TEXT CONTENT */}
            {/* pt-2 aligns the text perfectly with the center of the mobile box */}
            <div className="flex flex-col pt-2 md:pt-0">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed pr-4 md:pr-0">
                {step.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>

    </section>
  );
};

export default Process;
