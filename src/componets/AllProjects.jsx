import React, { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  // --- BUG FIX 1: Scroll to top on page load ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: "broadband-now",
      title: "BroadbandNow UI Design",
      tag: "Web Experience",
      image:
        "https://res.cloudinary.com/dp5iixm06/image/upload/v1780948732/Hero_broadbandnow_sq0gjp.png",
      bgGradient: "from-blue-900/40 via-cyan-950/20 to-transparent",
    },
    {
      id: "krypto-nft",
      title: "Krypto NFT Landing Page",
      tag: "UI Recreation",
      image:"https://res.cloudinary.com/dp5iixm06/image/upload/v1780953665/Gemini_Generated_Image_jk05qjk05qjk05qj_wob1uq.png",
      bgGradient: "from-fuchsia-900/40 via-purple-950/20 to-transparent",
    },
  ];

  // Creates an array of 15 arrows for the scrolling effect
  const arrows = Array(15).fill("→");

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 flex flex-col overflow-x-hidden">
      <style>
        {`
          /* Animation moves from left to right */
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marquee-right 15s linear infinite;
          }
        `}
      </style>

      {/* --- BUG FIX 2: Changed from 'sticky' to 'fixed', added 'left-0' --- */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-10 py-5 flex items-center justify-between">
          
          {/* Back Button */}
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          
          {/* 'Scroll to top' helper */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-green-400 transition-colors"
          >
            Top ↑
          </button>
          
        </div>
      </nav>

      {/* Main Content Area */}
      {/* Added 'pt-32' here to push the content down below the new fixed header */}
      <main className="w-full flex-grow flex flex-col items-center pt-32">
        {/* Container for Header and Grid */}
        <div className="max-w-5xl mx-auto w-full px-6 relative z-20">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              All Projects
            </h1>
            <p className="text-gray-400 text-lg">
              A complete archive of my case studies, UI explorations, and design
              projects.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/case-study/${project.id}`}
                className="group block relative rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              >
                <div
                  className={`aspect-[4/3] w-full bg-gradient-to-br ${project.bgGradient} p-8 flex items-center justify-center overflow-hidden relative`}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 scale-70 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 backdrop-blur-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-2">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Expanding Playground Section */}
        <section className="w-full relative flex flex-col items-center pt-24 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 px-6 text-center">
            New projects will appear here soon.
          </h2>

          <div className="relative z-10 border border-green-500/50 bg-[#05140a]/80 backdrop-blur-sm rounded-lg px-8 py-3 text-green-400 font-medium text-lg md:text-xl tracking-wide mb-10 shadow-[0_0_20px_rgba(34,197,94,0.15)] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:bg-[#071a0d]/90">
            The Playground Is Still Expanding
          </div>

          <div className="relative z-10 text-gray-400 text-base md:text-lg leading-relaxed text-center mb-20 px-6 max-w-lg">
            <p>Some ideas are still on the drawing board.</p>
            <p>Some are being prototyped.</p>
            <p>Others are being polished into full case studies.</p>
          </div>

          <div className="relative w-full py-10 flex items-center justify-center group cursor-pointer">
            <h1 className="relative z-0 text-[4rem] md:text-[11rem] font-black text-white tracking-normal leading-none select-none">
              stay tuned
            </h1>

            {/* Note: Kept your commented out arrows section exactly as you had it */}
            {/* <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center justify-center overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="animate-marquee-right gap-16 md:gap-24">
                <div className="flex gap-16 md:gap-24 items-center">
                  {arrows.map((arrow, i) => (
                    <span
                      key={i}
                      className="text-5xl md:text-7xl font-light text-[#34d399] drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                    >
                      {arrow}
                    </span>
                  ))}
                </div>
                <div className="flex gap-16 md:gap-24 items-center">
                  {arrows.map((arrow, i) => (
                    <span
                      key={`dup-${i}`}
                      className="text-5xl md:text-7xl font-light text-[#34d399] drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                    >
                      {arrow}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      {/* Bottom Footer */}
      <footer className="max-w-5xl mx-auto w-full px-6 py-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm bg-[#050505] relative z-20">
        <p>© Copyright 2026. All rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Made by{" "}
          <span className="text-gray-300 font-medium">Vedika Basotia</span>
        </p>
      </footer>
    </div>
  );
};

export default AllProjects;