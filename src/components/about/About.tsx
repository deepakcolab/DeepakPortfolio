import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, ShieldCheck, Cpu, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    Database: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-200">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Mindset</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight uppercase">
            MORE THAN JUST CODE.
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Top Split: Professional Intro & Verified Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md relative overflow-hidden shadow-xl dark:shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950 dark:text-white mb-4">
                Enterprise .NET Architect with an AI-Augmented Horizon
              </h3>

              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg mb-4 font-light">
                {profileData.professionalIntro}
              </p>

              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                Over years of engineering critical public sector applications at Velocis Systems for client National Informatics Centre (NIC), I have maintained and scaled high-stakes systems including national video conferencing booking engines, financial webcast billing portals, and accessible citizen-facing websites.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-zinc-800 flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  Government Portal Maintenance
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  Mission-Critical SQL Optimization
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  On-Premise Privacy-Preserving AI
                </span>
              </div>
            </div>

            {/* Verification Transparency Notice */}
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-zinc-950 border border-amber-500/30 flex items-start gap-3 text-xs text-slate-700 dark:text-zinc-400 shadow-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-800 dark:text-amber-300">Single Source of Truth:</span>{' '}
                All professional experience records, company appointments, deliverables, and performance metrics are strictly verified against the confirmed official resume ("Resume (2)(1).pdf").
              </div>
            </div>
          </div>

          {/* Right: Verified Metrics Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profileData.metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 hover:border-amber-500/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform origin-left">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-3 leading-snug">
                  {metric.description}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Documented Record</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Development Philosophy Cards */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white tracking-tight">
              {profileData.philosophy.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-2">
              {profileData.philosophy.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.philosophy.points.map((pt, idx) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200/80 dark:border-white/5 hover:border-amber-500/40 hover:bg-slate-50 dark:hover:bg-zinc-900/90 transition-all group relative flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                    {iconMap[pt.icon] || <Layers className="w-5 h-5 text-amber-500" />}
                  </div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/60 text-[11px] font-mono text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300 transition-colors">
                  Pillar 0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
