import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "broadband-now",
      title: "BroadbandNow UI Design",
      tag: "Web Experience",
      image: "https://res.cloudinary.com/dp5iixm06/image/upload/v1780948732/Hero_broadbandnow_sq0gjp.png", 
      bgGradient: "from-blue-900/40 via-cyan-950/20 to-transparent", 
    },
    {
      id: "krypto-nft", // <-- New ID for the Krypto project
      title: "Krypto NFT Landing Page",
      tag: "UI Recreation",
      // A dark, abstract/neon placeholder fitting for Crypto/NFTs
      image: "https://res.cloudinary.com/dp5iixm06/image/upload/v1780953665/Gemini_Generated_Image_jk05qjk05qjk05qj_wob1uq.png",
      // A Web3-inspired purple/pink gradient
      bgGradient: "from-fuchsia-900/40 via-purple-950/20 to-transparent",
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Recent Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/case-study/${project.id}`} 
            className="group block relative rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
          >
            <div className={`aspect-[4/3] w-full bg-gradient-to-br ${project.bgGradient} p-8 flex items-center justify-center overflow-hidden relative`}>
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

      {/* Replace this block at the bottom of Projects.jsx */}
      <div className="flex justify-center mt-12">
        <Link 
          to="/all-projects" 
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-[#0a0a0a] text-md text-gray-400 hover:text-white hover:border-white/10 transition-all duration-300 shadow-md"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;