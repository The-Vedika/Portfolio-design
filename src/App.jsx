import React, { useEffect } from 'react';
import Hero from './componets/Hero';
import Sidebar from './componets/Sidebar';
import Projects from './componets/Projects';
import Capabilities from './componets/Capabilities';
import Process from './componets/Process';
import Philosophy from './componets/Philosophy';
import Footer from './componets/Footer';
import CaseStudy from './componets/CaseStudy';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AllProjects from './componets/AllProjects';
import GetInTouch from './componets/GetInTouch';
import VideoShowcase from './componets/VideoShowcase';
import Lenis from 'lenis';

const MainPortfolio = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Gives that heavy, luxurious scroll feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Keeps it snappy on mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      <Sidebar />
      <main className="md:ml-64 min-h-screen flex flex-col pt-16 md:pt-0">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-16">
          <Hero />
          <Projects />
          <Capabilities />
          <Process />
          <Philosophy />
          <VideoShowcase />
          <Footer />
        </div>
      </main>
    </div>
  );
};

function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/all-projects" element={<AllProjects />} />
            
            {/* ADD THIS NEW ROUTE HERE */}
            <Route path="/get-in-touch" element={<GetInTouch />} />
            
          </Routes>
        </BrowserRouter>
      );
    }

export default App;
