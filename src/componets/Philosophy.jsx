import React, { useEffect, useRef, useState } from 'react';

const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger the color transition when the image is 50% visible on screen
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

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
    <section id="philosophy" className="py-20 border-t border-white/5">
      
      {/* --- SPLIT LAYOUT GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
        
        {/* --- LEFT COLUMN: Portrait Image --- */}
        {/* Added ref here to track when the image container enters the viewport */}
        <span className="sm:hidden text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2 block">
            Philosophy
          </span>
          <span className="sm:hidden text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8">
            Design is the silent ambassador of your brand.
          </span>
        <div ref={imageRef} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
          <img 
            src="./try.jpeg" 
            alt="Vedika Portrait" 
            className={`w-full h-full object-cover transition-all duration-700 
              ${isVisible ? 'grayscale-0 opacity-100' : 'grayscale opacity-90'} 
              md:grayscale md:opacity-90 md:group-hover:grayscale-0 md:group-hover:opacity-100`}
          />
        </div>

        {/* --- RIGHT COLUMN: Text & Stack --- */}
        <div>
          
          {/* Philosophy Header */}
          <span className="hidden sm:block text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            Philosophy
          </span>
          
          <h3 className="hidden sm:block text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8">
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
                  className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors duration-300 cursor-default"
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