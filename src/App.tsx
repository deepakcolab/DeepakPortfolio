import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { DeveloperIdCard } from './components/idcard/DeveloperIdCard';
import { Expertise } from './components/expertise/Expertise';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Achievements } from './components/achievements/Achievements';
import { Terminal } from './components/terminal/Terminal';
import { Contact } from './components/contact/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'expertise', 'projects', 'journey', 'achievements', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-amber-500/30 selection:text-amber-300 font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* 3D Developer Identity Badge */}
        <DeveloperIdCard />

        {/* Technology Toolkit / Expertise */}
        <Expertise />

        {/* Selected Work / Featured Projects */}
        <Projects />

        {/* Career Timeline & Academic Foundations */}
        <Experience />

        {/* Certifications & Milestones */}
        <Achievements />

        {/* Simulated Interactive Developer Terminal */}
        <Terminal />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
