import React from 'react';

const Philosophy = () => {
  // Pulling from your exact skill list for the core stack pills
  const coreStack = [
    "Figma", 
    "Adobe Photoshop", 
    "Adobe Illustrator", 
    "Adobe Premiere Pro", 
    "Canva",
    "ChatGPT",
    "Runway"
  ];

  return (
    <section id="philosophy" className="py-20 ">
      
      {/* --- SPLIT LAYOUT GRID --- 
          'md:grid-cols-2': Splits the section perfectly in half on desktop.
          'gap-12 md:gap-20': Adds generous breathing room between the image and the text.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* --- LEFT COLUMN: Portrait Image --- */}
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
          {/* Replace this Unsplash link with your own high-quality portrait */}
          <img 
            src="./try.jpeg" 
            alt="Vedika Portrait" 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
        </div>

        {/* --- RIGHT COLUMN: Text & Stack --- */}
        <div>
          
          {/* Philosophy Header */}
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            Philosophy
          </span>
          
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8">
            Design is the silent ambassador of your brand.
          </h3>

          {/* Bio Paragraphs */}
          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed mb-12">
            <p>
              I am Vedika, a visual designer bridging the gap between artistic intuition and strategic business needs. My work is defined by a relentless pursuit of clarity and a belief that every pixel should serve a purpose.
            </p>
            <p>
              I specialize in creating high-end visual systems, Amazon A+ content, and landing pages for brands that value craftsmanship and quality. When I'm not designing, I'm exploring the intersection of generative AI and traditional digital art to push creative boundaries.
            </p>
          </div>

          {/* Core Stack Section */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Core Stack
            </span>
            
            {/* Flex container for the pill badges */}
            <div className="flex flex-wrap gap-3">
              {coreStack.map((skill, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Philosophy;