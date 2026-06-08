import React from 'react';
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


const MainPortfolio = () => {
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
