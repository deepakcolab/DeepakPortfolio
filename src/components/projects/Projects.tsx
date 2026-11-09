import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  X, 
  ArrowRight, 
  Lock, 
  Activity
} from 'lucide-react';
import { projectsData, Project } from '../../data/projects';
import { ProjectMockup } from './ProjectMockup';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Enterprise Case Studies</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight uppercase">
            SELECTED WORK
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Architectural case studies of mission-critical systems, government portals, financial pipelines, and AI integration.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-amber-500/50 hover:bg-slate-50/50 dark:hover:bg-zinc-900/90 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Card Header & Mockup */}
              <div className="p-6">
                
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-zinc-400 font-mono bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-full border border-slate-200 dark:border-zinc-700/60 shadow-sm">
                    <Lock className="w-2.5 h-2.5 text-slate-400 dark:text-zinc-400" />
                    <span>Case Study</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Custom UI Mockup Preview */}
                <div className="my-4 rounded-xl overflow-hidden shadow-inner border border-slate-200 dark:border-zinc-800/80 group-hover:border-amber-500/30 transition-colors">
                  <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 font-mono border border-slate-200 dark:border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/40 text-slate-500 dark:text-zinc-500 font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Metrics & Detail Trigger */}
              <div className="px-6 py-4 bg-slate-50/80 dark:bg-zinc-950/70 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                {project.impactMetrics && project.impactMetrics[0] ? (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase">Key Benchmark</span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {project.impactMetrics[0].label}: {project.impactMetrics[0].value}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 dark:text-zinc-500 font-mono">Enterprise Solution</span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500 text-amber-700 dark:text-amber-400 hover:text-black font-semibold text-xs border border-amber-500/30 hover:border-amber-500 transition-all focus:outline-none shadow-sm"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs text-slate-600 dark:text-zinc-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              All featured works represent architectural case studies of government and enterprise systems. In compliance with strict confidentiality and security protocols, internal production URLs, administrative credentials, and proprietary datasets are withheld.
            </span>
          </p>
        </div>

        {/* In-Depth Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="sticky top-0 float-right z-20 p-2 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title & Category */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-sans text-slate-600 dark:text-zinc-400 italic mt-1">
                    "{selectedProject.tagline}"
                  </p>
                </div>

                {/* Mockup embedded in modal */}
                <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800">
                  <ProjectMockup type={selectedProject.mockupType} accentColor={selectedProject.accentColor} />
                </div>

                {/* Impact Metrics Bar */}
                {selectedProject.impactMetrics && (
                  <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800">
                    {selectedProject.impactMetrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg sm:text-xl font-display font-black text-amber-600 dark:text-amber-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Full Description & Problem Statement */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-zinc-300 uppercase tracking-wider">
                    Architectural Overview
                  </h4>
                  <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-zinc-300 uppercase tracking-wider">
                    Key Features & Workflows
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-zinc-300 uppercase tracking-wider">
                    Engineering & Security Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.architectureHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 text-xs text-slate-700 dark:text-zinc-300">
                        <Activity className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
                    Technologies Utilized:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-900 text-xs text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Note */}
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-zinc-900/90 border border-amber-500/20 text-xs text-slate-700 dark:text-zinc-400">
                  <span className="font-semibold text-amber-800 dark:text-amber-300">Enterprise Case Study Note:</span>{' '}
                  {selectedProject.caseStudyNote}
                </div>

                {/* Modal Actions */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors shadow-md"
                  >
                    Close Case Study
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
