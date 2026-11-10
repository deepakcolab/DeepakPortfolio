import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles, Code2, Database, Cpu } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profileData.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-[#080808] transition-colors duration-200"
    >
      {/* Background Animated Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Radial Amber Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-amber-500/30 backdrop-blur-md shadow-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-amber-600 dark:text-amber-400">
                HELLO, I'M DEEPAK KUMAR SINGH
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-slate-950 dark:text-white leading-[1.08]"
            >
              BUILDING DIGITAL{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-400 dark:via-amber-500 dark:to-amber-200">
                EXPERIENCES
              </span>{' '}
              THAT MATTER.
            </motion.h1>

            {/* Rotating Role Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-display font-semibold text-slate-700 dark:text-zinc-300 min-h-[40px]"
            >
              <span className="text-slate-400 dark:text-zinc-500 font-light">I am a</span>
              <span className="text-amber-600 dark:text-amber-400 relative border-b-2 border-amber-500 pb-0.5 font-mono font-bold">
                {profileData.roles[currentRoleIndex]}
              </span>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans"
            >
              {profileData.supportingText}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
            >
              <button
                onClick={() => handleScrollTo('#projects')}
                className="group px-6 py-3.5 rounded-full bg-amber-500 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:bg-amber-400 hover:shadow-amber-500/40 transition-all hover:scale-105 active:scale-95 focus:outline-none"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/documents/Deepak-Singh-Resume.pdf"
                download="Deepak-Singh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:border-amber-500/40 transition-all hover:scale-105 active:scale-95 focus:outline-none shadow-sm"
              >
                <Download className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 font-semibold text-sm flex items-center gap-2 hover:bg-slate-300/80 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all hover:scale-105 active:scale-95 focus:outline-none shadow-sm"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Tech Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-zinc-500"
            >
              <span className="text-slate-700 dark:text-zinc-400 font-semibold tracking-wider uppercase">CORE STACK:</span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm">C#</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm">ASP.NET Core</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm">SQL Server</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm">Ollama AI</span>
                <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-sm">Docker</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Creative Profile Frame & Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Amber Halo Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-transparent to-amber-600/20 blur-2xl opacity-70 animate-pulse-subtle"></div>

              {/* Main Photo Card Container */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl p-3 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-amber-500/30 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden group">
                
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-black/40 pointer-events-none"></div>

                {/* Real Profile Image */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-zinc-950">
                  <img
                    src="/images/deepak-singh.jpg"
                    alt="Deepak Kumar Singh - Software Developer"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-zinc-900 text-amber-500 font-display font-black text-6xl">
                            DS
                            <span class="text-xs font-mono text-zinc-400 mt-2 font-normal">Deepak Singh</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Gradient Overlay for Lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Overlay Name & Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                    <div>
                      <div className="font-display font-bold text-sm">
                        Deepak Kumar Singh
                      </div>
                      <div className="text-[11px] text-amber-400 font-mono">
                        Software Developer
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: .NET Enterprise */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 sm:-left-8 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-slate-200 dark:border-amber-500/30 backdrop-blur-md shadow-lg dark:shadow-xl flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Stack</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">.NET Core & C#</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: SQL Server Performance */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-slate-200 dark:border-amber-500/30 backdrop-blur-md shadow-lg dark:shadow-xl flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider">Database</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">SQL Optimization</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: AI & LLM */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute top-1/2 -right-10 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-slate-200 dark:border-amber-500/40 backdrop-blur-md shadow-lg dark:shadow-xl items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-mono text-slate-800 dark:text-amber-300 font-semibold">Ollama + Qwen</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex flex-col items-center justify-center">
          <button
            onClick={() => handleScrollTo('#about')}
            className="group flex flex-col items-center gap-2 text-slate-400 dark:text-zinc-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase font-medium">Explore Story</span>
            <div className="w-5 h-9 rounded-full border-2 border-slate-300 dark:border-zinc-700 group-hover:border-amber-500 transition-colors flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-amber-500"
              />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
