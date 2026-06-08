import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const caseStudiesData = {
  "broadband-now": {
    badge: "Web UI Design",
    title: "BroadbandNow",
    summary: "Designing a trustworthy internet comparison experience to help users discover and evaluate broadband services in their area.",
    heroImage: "https://res.cloudinary.com/dp5iixm06/image/upload/v1780948732/Hero_broadbandnow_sq0gjp.png",
    meta: { role: "UI Designer", timeline: "15–20 Days", platform: "Desktop Web" },
    overview: "BroadbandNow is an internet provider comparison platform that helps users discover broadband services available in their area. The goal of the project was to create a more trustworthy and user-friendly visual experience while making it easier for users to search, compare, and explore internet providers.",
    overviewDetails: "As the sole designer on the project, I was responsible for wireframing, UI design, component creation, visual exploration, and prototyping. Although I was provided with a structural reference, the final visual design, interactions, hierarchy, and design system were created from scratch.",
    responsibilities: ["UI Design", "Wireframing", "Visual Exploration", "Component Design", "Interactive Prototyping"],
    challengeTitle: "The Challenge",
    challenge: "The platform contained a large amount of information, provider listings, search functionality, and educational content. The challenge was creating a layout that remained easy to scan while building trust with users searching for internet services. Another challenge was communication. Feedback was delivered indirectly through developers rather than directly from the client, requiring multiple iterations and careful interpretation of requirements.",
    goalsTitle: "Design Goals",
    goals: [
      "Create a trustworthy and professional visual appearance.",
      "Improve content hierarchy across a long-scrolling page.",
      "Make the search experience the primary focus.",
      "Organize provider information for quick scanning.",
      "Maintain consistency across all components and sections."
    ],
    explorationTitle: "Visual Exploration",
    explorationText: "To explore different visual directions, I created two complete design concepts. The first concept experimented with a bold pink visual identity to create a distinctive appearance. While visually unique, the color palette felt less aligned with typical tech expectations. The second concept focused on reliability, clarity, and trust using a blue-centered palette. This direction was ultimately selected because it better communicated credibility.",
    explorationImages: [
      "https://res.cloudinary.com/dp5iixm06/image/upload/v1780948730/pink_demo_et6wp7.png",
      "https://res.cloudinary.com/dp5iixm06/image/upload/v1780948730/blue_final_lw69bm.png"
    ],
    decisionsTitle: "Key Design Decisions",
    decisions: [
      { title: "Search-First Experience", desc: "The search functionality was placed prominently above the fold because it represented the platform's primary user action." },
      { title: "Strong Visual Hierarchy", desc: "Large headings, clear spacing, and structured content blocks were used to help users quickly understand available information." },
      { title: "Provider Discovery", desc: "Provider logos and cards were organized into clean, scannable layouts to reduce cognitive load and improve discoverability." },
      { title: "Interactive Components", desc: "Custom dropdown interactions and hover states were designed to create a more engaging and responsive experience." }
    ],
    learnings: "This project was one of my earliest freelance experiences and became an important learning opportunity. I learned how to design within client constraints, present multiple visual directions, and structure information-heavy interfaces. Most importantly, I learned how to balance creativity with business requirements while collaborating with developers throughout the design process.",
    finalImages: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  
  // --- NEW KRYPTO PROJECT ---
  "krypto-nft": {
    badge: "Learning Project",
    title: "Krypto — NFT Landing Page",
    summary: "Reverse-engineering an existing interface to master visual hierarchy, layout systems, and typography.",
    heroImage: "https://res.cloudinary.com/dp5iixm06/image/upload/v1780953482/ChatGPT_Image_Jun_9_2026_02_41_39_AM_glb1im.png", // Dark abstract crypto placeholder
    meta: { role: "Visual Design", timeline: "~2 Hours", platform: "Figma" },
    overview: "Krypto is a recreated NFT marketplace landing page that I built as part of my UI learning process. The goal of this project was not to design from scratch, but to reverse-engineer an existing interface to better understand visual hierarchy, layout systems, and typography.",
    overviewDetails: "Rather than passively watching tutorials, I actively rebuilt the interface to learn by doing. *Note: This is a recreated project for learning purposes only. The original design inspiration belongs to its respective creators.*",
    responsibilities: ["Layout Deconstruction", "Grid & Spacing Analysis", "Typography Scaling", "Visual Hierarchy Study"],
    challengeTitle: "The Challenge",
    challenge: "This project was guided by a tutorial, so there were no major blockers in execution. However, the core challenge was psychological: forcing myself to actively observe and understand the underlying design decisions rather than just replicating the visuals mindlessly.",
    goalsTitle: "Learning Objectives",
    goals: [
      "Understand how sections contribute to visual hierarchy.",
      "Analyze how layout grids structure a complete page.",
      "Observe how a typography scale improves readability and flow.",
      "Deconstruct spacing systems to create visual rhythm."
    ],
    explorationTitle: "The Approach: Deconstruction",
    explorationText: "I broke the design into three clear phases. First, Layout Deconstruction: separating the Hero, Features, Testimonials, and Footer to see how content grouping guides attention. Second, Grid Systems: focusing on consistent horizontal alignment and balanced padding. Third, Typography: replicating heading scales and font weights to see how type alone defines importance.",
    explorationImages: [
      "https://res.cloudinary.com/dp5iixm06/image/upload/v1780953494/Gemini_Generated_Image_m5wsj4m5wsj4m5ws_kgccea.png",// Crypto UI placeholder
      "https://res.cloudinary.com/dp5iixm06/image/upload/v1780954461/wireframe_1_laabow.webp"  // Grid/Layout placeholder
      
    ],
    decisionsTitle: "Key Learnings & Observations",
    decisions: [
      { title: "Hierarchy is Beyond Font Size", desc: "I learned that hierarchy is dictated by section order, spacing, contrast, and CTA placement. Each section guides the user from awareness to action." },
      { title: "Grids Are Foundational", desc: "Grids are not always visible, but they control alignment, balance, and responsiveness. Recreating this design helped me 'feel' the structure." },
      { title: "Typography Drives UX", desc: "Typography decisions directly impact scannability and user attention. Even small changes in size or line spacing shift the entire experience." },
      { title: "Future Enhancements", desc: "If designing from scratch, I would add micro-interactions for engagement, a marquee scroll for featured logos, and stronger product storytelling." }
    ],
    learnings: "This project strengthened my foundation in layout systems, visual hierarchy, and typography scaling. More importantly, it successfully shifted my approach from just 'designing' to critically analyzing the decisions behind the design.",
    finalImages: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      "https://res.cloudinary.com/dp5iixm06/image/upload/v1780954825/ChatGPT_Image_Jun_9_2026_03_10_07_AM_k4ujqf.png"
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const data = caseStudiesData[id];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-green-400 hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 pb-32">
      
      <nav className="w-full p-6 md:p-10 flex items-center">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        
        <header className="flex flex-col items-center text-center mt-10 mb-20">
          <div className="flex items-center gap-2 bg-[#1a1a1a] text-gray-300 text-xs font-medium px-4 py-1.5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            {data.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {data.summary}
          </p>
        </header>

        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 mb-16 relative group">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-16 border-y border-white/5">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm font-medium text-gray-200">{data.meta.role}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Timeline</p>
            <p className="text-sm font-medium text-gray-200">{data.meta.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Platform</p>
            <p className="text-sm font-medium text-gray-200">{data.meta.platform}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Core Focus</p>
            <p className="text-sm font-medium text-gray-200">UI/UX & Prototyping</p>
          </div>
        </div>

        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-6">Overview</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{data.overview}</p>
            <p className="text-gray-400 leading-relaxed italic">{data.overviewDetails}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Focus Areas</h3>
            <ul className="space-y-3">
              {data.responsibilities.map((req, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0a] p-10 rounded-3xl border border-white/5">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{data.challengeTitle}</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{data.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{data.goalsTitle}</h2>
            <ul className="space-y-3 text-sm md:text-base text-gray-400 list-disc pl-5">
              {data.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-6">{data.explorationTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-10">{data.explorationText}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-white/10 relative">
              <img src={data.explorationImages[0]} alt="Exploration 1" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-white/10 relative">
              <img src={data.explorationImages[1]} alt="Exploration 2" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8">{data.decisionsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.decisions.map((dec, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-[#050505]">
                <h3 className="text-lg font-medium text-gray-200 mb-2">{dec.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{dec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
            <img src={data.finalImages[0]} alt="UI Mockup 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
            <img src={data.finalImages[1]} alt="UI Mockup 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          </div>
        </div>

        <section className="text-center max-w-2xl mx-auto border-t border-white/5 pt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Outcome & Reflection</h2>
          <p className="text-gray-400 leading-relaxed italic">
            "{data.learnings}"
          </p>
        </section>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5 text-gray-500 text-sm">
        <p>© Copyright 2026. All rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Made by <span className="text-gray-300 font-medium">Vedika Basotia</span>
        </p>
      </div>
      </main>
    </div>
  );
};

export default CaseStudy;