import React from 'react';
// Importing our UI icons. 
// MapPin for the location, ArrowRight for the button, and PenLine for that little circle button in your screenshot.
import { MapPin, ArrowRight, PenLine } from 'lucide-react';

const Hero = () => {
  return (
    // 'min-h-[80vh]' makes sure this section takes up at least 80% of the screen height.
    // 'flex flex-col justify-center' aligns all the text vertically in the middle.
    <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-20 ">
      
      {/* --- HEADLINE ---
        'text-5xl md:text-7xl': Responsive text! Large on phones, huge on desktop.
        'tracking-tight': Reduces the space between letters slightly for that premium SaaS/editorial look.
      */}
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
        Hi, I'm Vedika.
      </h1>

      {/* --- SUBHEADLINE ---
        'max-w-3xl': Prevents the text from stretching too wide, making it easier to read.
        'leading-relaxed': Increases the line height so the text breathes.
      */}
      <div className="max-w-3xl space-y-4 mb-8">
        <p className="text-xl md:text-2xl text-gray-300 font-medium">
          "Designing visuals that turn attention into action."
        </p>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
          From Amazon A+ content and listing images to landing pages, product hero visuals, 
          and AI-powered creative production — I create digital experiences that help 
          products stand out and sell.
        </p>
      </div>

      {/* --- BOTTOM ROW: Location, Dotted Line, and Buttons ---
        'flex items-center': Aligns everything in a perfect horizontal row.
        'w-full': Stretches the row to the full width of its container.
      */}
      <div className="flex items-center w-full mt-8">
        
        {/* Location Pin */}
        <div className="flex items-center gap-2 text-sm text-gray-400 whitespace-nowrap">
          <MapPin size={16} className="text-green-500" />
          <span>Ahmedabad, India</span>
        </div>

        {/* The Dotted Line 
          'flex-grow': This tells the line to take up all the remaining empty space between the location and the buttons!
          'border-dotted': Creates the dot effect from your reference image.
        */}
        <div className="flex-grow border-b-2 border-dotted border-gray-800 mx-4 md:mx-8 opacity-50"></div>

        {/* Buttons Container */}
        <div className="flex items-center gap-3">
          {/* Main CTA Button */}
          <a 
            href="#philosophy" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            More about Me
            <ArrowRight size={16} />
          </a>

          {/* Secondary Circular Button (from the screenshot) */}
          <a 
            href="#contact"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <PenLine size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;