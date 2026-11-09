import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Code2,
  ShieldCheck,
  Database,
  Cloud,
  TrendingUp,
  X,
  Maximize2,
  Calendar,
  Check
} from 'lucide-react';
import { experiencesData, ExperienceItem } from '../../data/experience';
import { educationData } from '../../data/education';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState(false);

  // Primary experience (Velocis Systems)
  const primaryExperience = experiencesData[0];
  // Prior experiences (Santram ITI, Torrent Infotech)
  const priorExperiences = experiencesData.slice(1);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Application Development & Portal Engineering': <Code2 className="w-4 h-4 text-purple-400" />,
    'Project Delivery & Workflow Automation': <Layers className="w-4 h-4 text-blue-400" />,
    'Security, Authorization & Compliance': <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    'Performance Optimization & Database Tuning': <Database className="w-4 h-4 text-amber-400" />,
    'Cloud, Server & CI/CD Deployment': <Cloud className="w-4 h-4 text-cyan-400" />
  };

  const categories = [
    'All',
    'Application Development & Portal Engineering',
    'Project Delivery & Workflow Automation',
    'Security, Authorization & Compliance',
    'Performance Optimization & Database Tuning',
    'Cloud, Server & CI/CD Deployment'
  ];

  const getFilteredResponsibilities = () => {
    if (!primaryExperience.groupedResponsibilities) return [];
    if (selectedCategory === 'All') {
      return primaryExperience.groupedResponsibilities.flatMap((g) =>
        g.items.map((item) => ({ ...item, category: g.category }))
      );
    }
    const group = primaryExperience.groupedResponsibilities.find(
      (g) => g.category === selectedCategory
    );
    return group ? group.items.map((item) => ({ ...item, category: group.category })) : [];
  };

  return (
    <section id="journey" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            THE JOURNEY SO FAR
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
            Documented timeline of enterprise software engineering, portal deliverables, and verified technical achievements.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Selector: Experience vs Education */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {activeTab === 'experience' ? (
          <div className="space-y-12">

            {/* ======================================================== */}
            {/* PRIMARY EXPERIENCE CARD: VELOCIS SYSTEMS PVT. LTD.       */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 border-2 border-amber-500/30 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full"></div>

              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      Current Primary Role
                    </span>
                    <span className="text-zinc-500 font-mono text-xs hidden sm:inline">
                      NIC Portal Infrastructure
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                    {primaryExperience.organization}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold">
                    <span className="text-amber-400 font-mono">
                      Designation: {primaryExperience.role}
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-300 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {primaryExperience.period}
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {primaryExperience.location}
                    </span>
                  </div>
                </div>

                {/* Modal View Trigger */}
                <div className="flex items-center gap-2 self-start md:self-center">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black font-semibold text-xs border border-zinc-700 hover:border-amber-400 transition-all shadow-md focus:outline-none"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Full Audit View</span>
                  </button>
                </div>
              </div>

              {/* Verified Metrics Strip for Velocis */}
              <div className="my-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  Key Documented Benchmarks & Metrics:
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {primaryExperience.metrics?.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded-xl bg-black/50 border border-zinc-800/80 hover:border-amber-500/40 transition-colors flex flex-col justify-between text-center"
                    >
                      <div className="text-xl sm:text-2xl font-display font-black text-amber-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono leading-tight mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="mb-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Responsibilities by Functional Domain:
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/20'
                            : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/60'
                        }`}
                      >
                        {cat !== 'All' && categoryIcons[cat]}
                        <span>{cat === 'All' ? 'All Responsibilities (9)' : cat.split('&')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Responsibilities List with Metric Badges */}
              <div className="space-y-3 mb-8">
                {getFilteredResponsibilities().map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                        {item.text}
                      </p>
                    </div>

                    {item.metric && (
                      <div className="shrink-0 self-start sm:self-center pl-8 sm:pl-0">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs">
                          {item.metric.value}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Technologies Utilized at Velocis Systems:
                </div>
                <div className="flex flex-wrap gap-2">
                  {primaryExperience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-300 font-mono text-xs border border-zinc-800 hover:border-amber-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ======================================================== */}
            {/* PREVIOUS ORGANIZATIONS (COMPACT TIMELINE CARDS)          */}
            {/* ======================================================== */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 px-2">
                Prior Professional Appointments:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {priorExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Period & Type */}
                      <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                        <span>{exp.period}</span>
                        <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/40">
                          {exp.type}
                        </span>
                      </div>

                      {/* Organization & Role */}
                      <h4 className="font-display font-bold text-lg text-white mb-1">
                        {exp.organization}
                      </h4>
                      <div className="text-sm font-semibold text-zinc-300 mb-3">
                        {exp.role}
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ======================================================== */
          /* EDUCATION SECTION                                       */
          /* ======================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-7 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 hover:bg-zinc-900/90 backdrop-blur-md transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                    <span>{edu.period}</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">University Degree</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {edu.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-zinc-300 mb-1">
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-800">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Field: {edu.field}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Degree Conferred
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* ======================================================== */}
      {/* DETAILED MODAL: VELOCIS SYSTEMS FULL AUDIT BREAKDOWN     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="sticky top-0 float-right z-20 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Metadata */}
              <div className="mb-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                  Detailed Experience Dossier
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                  {primaryExperience.organization}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-zinc-400 mt-2">
                  <span className="text-white font-bold">Role: {primaryExperience.role}</span>
                  <span>•</span>
                  <span>Duration: {primaryExperience.period}</span>
                  <span>•</span>
                  <span>Location: {primaryExperience.location}</span>
                </div>
              </div>

              {/* All 9 Responsibilities in Order */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  Complete Deliverables & Key Contributions (1–9)
                </h4>
                <div className="space-y-3">
                  {primaryExperience.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-zinc-800 mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Core Technical Ecosystem:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {primaryExperience.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="flex justify-end pt-4 border-t border-zinc-800">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
