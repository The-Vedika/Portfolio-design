import React from 'react';

const VideoShowcase = () => {
  const videos = [
    {
      id: 2,
      title: "Product Videography",
      category: "E-commerce Hero Video", // Flat Smoothie cup 10sec
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/q_auto/f_auto/v1781113616/sflat_10sec_lpg3oy.mp4", 
    },
    {
      id: 3,
      title: "Product Videography",
      category: "E-commerce Hero Video", // Black Ripple Cup without lid
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/q_auto/f_auto/v1781113615/10sec_2_inogkm.mp4", 
    },
    {
      id: 4,
      title: "Product Videography",
      category: "E-commerce Hero Video",
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/v1780945034/Brown_Ripple_cups_with_lid-done_xrtjzk.mp4", 
    },
    {
      id: 5,
      title: "Product Videography",
      category: "E-commerce Hero Video",
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/v1780945030/Brown_ripple_cups-done_wrh384.mp4", 
    }
  ];

  return (
    <section id="videos" className="py-20 border-t border-white/5 overflow-hidden flex flex-col">
      
      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-scroll {
            display: flex;
            width: max-content;
            animation: marquee-scroll 25s linear infinite;
          }
        `}
      </style>

      {/* Section Header */}
      <div className="mb-12 w-full max-w-5xl md:px-0">
        <h2 className="text-3xl font-medium text-white tracking-tight mb-2">
          Motion & E-commerce
        </h2>
        <p className="text-gray-500">
          High-converting Amazon A+ product videos and listing showcases.
        </p>
      </div>

      <div className="w-full relative py-4 pause-on-hover cursor-crosshair">

        <div className="animate-marquee-scroll gap-6 md:gap-8 px-4">
          
          {/* --- SET 1 --- */}
          <div className="flex gap-6 md:gap-8 items-center">
            {videos.map((video, index) => (
              <div 
                key={`set1-${index}`} 
                /* Removed p-2, added overflow-hidden directly here, fixed aspect ratio class */
                className="w-[85vw] md:w-[600px] lg:w-[700px] aspect-[16/9] shrink-0 bg-[#050505] border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 relative"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  /* Switched to object-cover so it bleeds perfectly to the edges */
                  className="w-full h-full object-cover opacity-100"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-2 drop-shadow-md">
                    {video.category}
                  </span>
                  <h3 className="text-white text-xl md:text-3xl font-medium drop-shadow-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* --- SET 2 (Required for infinite loop) --- */}
          <div className="flex gap-6 md:gap-8 items-center">
            {videos.map((video, index) => (
              <div 
                key={`set2-${index}`} 
                className="w-[85vw] md:w-[600px] lg:w-[700px] aspect-[16/9] shrink-0 bg-[#050505] border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 relative"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-100"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-2 drop-shadow-md">
                    {video.category}
                  </span>
                  <h3 className="text-white text-xl md:text-3xl font-medium drop-shadow-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default VideoShowcase;