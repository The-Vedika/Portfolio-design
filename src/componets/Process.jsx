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

  // --- DYNAMIC SEQUENTIAL ANIMATION MATH ---
  // We calculate this dynamically so if you ever add a 5th or 6th step, 
  // the math automatically updates and the line keeps flowing perfectly!
  const numLines = steps.length - 1; // 3 connecting lines
  const timePerLine = 1.5; // How long it takes the glow to cross one line (seconds)
  const totalDuration = numLines * timePerLine; // Total animation cycle (4.5 seconds)
  
  // The percentage of the animation where the glow is actively moving across a single line
  const activePercentage = (100 / numLines).toFixed(2); 

  return (
    <section id="process" className="py-20 border-t border-white/5">
      
      {/* INJECTED CUSTOM KEYFRAMES */}
      <style>
        {`
          @keyframes sequential-flow {
            0% { transform: translateX(-100%); }
            ${activePercentage}% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
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

      {/* TIMELINE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 group">
            
            {/* --- THE SEQUENTIAL CONNECTING LINE --- */}
            {index < numLines && (
              <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-1.5rem)] h-[2px] bg-white/5 z-[-1] overflow-hidden">
                {/* The Glowing Gradient:
                    We use inline styles here to perfectly stagger the animation delay 
                    based on the index of the line (0s, 1.5s, 3.0s).
                */}
                <div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
                  style={{
                    animation: `sequential-flow ${totalDuration}s linear infinite`,
                    animationDelay: `${index * timePerLine}s`,
                    animationFillMode: 'both' // Ensures the glow stays hidden while waiting its turn
                  }}
                ></div>
              </div>
            )}

            {/* Numbered Box */}
            <div className="w-12 h-12 rounded-xl border border-white/20 bg-[#050505] flex items-center justify-center text-white font-medium text-lg mb-6 group-hover:border-green-500/50 group-hover:text-green-400 group-hover:bg-[#0a0a0a] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300 relative z-10">
              {step.number}
            </div>

            {/* Step Title */}
            <h3 className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-sm text-gray-500 leading-relaxed pr-4">
              {step.description}
            </p>
            
          </div>
        ))}
      </div>

    </section>
  );
};

export default Process;