import React from 'react';

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: "Product Videography",
      category: "E-commerce Hero Video",
      // Your new Cloudinary link is actively working here!
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/v1780945065/Premium_Smoothie_Cups-done_kqbygg.mp4", 
    },
    {
      id: 2,
      title: "Product Videography",
      category: "E-commerce Hero Video",
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/v1780945053/Twist_handle_A_video-done_oatvbm.mp4", 
    },
    {
      id: 3,
      title: "Product Videography",
      category: "E-commerce Hero Video",
      src: "https://res.cloudinary.com/dp5iixm06/video/upload/v1780945050/Black_ripple_cup_without_lid_A_vid_fblb5e.mp4", 
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
      <div className="mb-12 px-6 md:px-16 w-full max-w-5xl mx-auto">
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
                className="w-[85vw] md:w-[600px] lg:w-[700px] aspect-video shrink-0 bg-[#0a0a0a] border border-white/5 rounded-3xl p-2 flex flex-col group hover:bg-[#0c0c0c] hover:border-white/20 transition-all duration-500 relative"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#050505]">
                  {/* CHANGED HERE: object-cover is now object-contain */}
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain opacity-100 "
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
              </div>
            ))}
          </div>

          {/* --- SET 2 (Duplicate for infinite loop) --- */}
          <div className="flex gap-6 md:gap-8 items-center">
            {videos.map((video, index) => (
              <div 
                key={`set2-${index}`} 
                className="w-[85vw] md:w-[600px] lg:w-[700px] aspect-video shrink-0 bg-[#0a0a0a] border border-white/5 rounded-3xl p-2 flex flex-col group hover:bg-[#0c0c0c] hover:border-white/20 transition-all duration-500 relative"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#050505]">
                  {/* CHANGED HERE: object-cover is now object-contain */}
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <span className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-2 drop-shadow-md">
                      {video.category}
                    </span>
                    <h3 className="text-white text-xl md:text-3xl font-medium drop-shadow-lg">
                      {video.title}
                    </h3>
                  </div>
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