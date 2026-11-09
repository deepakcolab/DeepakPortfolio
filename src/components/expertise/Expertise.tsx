import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cpu, 
  Cloud, 
  Layout, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Layers, 
  Terminal, 
  Info,
  X
} from 'lucide-react';
import { skillsData, skillCategories, SkillCategory, SkillItem } from '../../data/skills';

export const Expertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-red-400" />;
      case 'AI & ML':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-4 h-4 text-blue-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const getLevelBadgeClass = (level: SkillItem['level']) => {
    switch (level) {
      case 'Core Mastery':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/40';
      case 'Advanced':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/40';
      case 'Practitioner':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      case 'Emerging':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <section id="expertise" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            MY TECHNOLOGY TOOLKIT
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
            Grounded in enterprise .NET and SQL Server ecosystems, extended into modern React interfaces, and pioneering local AI and LLM architectures.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                  {category === 'All' ? skillsData.length : skillsData.filter((s) => s.category === category).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3D Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedSkill(skill)}
                className="cursor-pointer group relative p-6 rounded-2xl bg-zinc-900/70 border border-white/5 hover:border-amber-500/40 hover:bg-zinc-900/90 backdrop-blur-sm transition-all shadow-lg flex flex-col justify-between"
              >
                {/* Glow accent bar on hover */}
                <div 
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color || '#F59E0B' }}
                ></div>

                <div>
                  {/* Top Bar with Icon & Level */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{skill.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </h3>

                  {/* Category */}
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5 mb-3">
                    {skill.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {skill.description}
                  </p>
                </div>

                {/* Practical Use Cases Pills */}
                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Production Application:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.useCases.slice(0, 2).map((useCase) => (
                      <span
                        key={useCase}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-sans border border-zinc-700/50"
                      >
                        {useCase}
                      </span>
                    ))}
                    {skill.useCases.length > 2 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800/50 text-zinc-500">
                        +{skill.useCases.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {getCategoryIcon(selectedSkill.category)}
                  </div>
                  <div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(selectedSkill.level)}`}>
                      {selectedSkill.level}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-amber-400 mb-4 uppercase tracking-wider">
                  Category: {selectedSkill.category}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  {selectedSkill.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-zinc-800">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    Key Real-World Applications:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSkill.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-5 py-2 rounded-full bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors"
                  >
                    Close Toolkit View
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
