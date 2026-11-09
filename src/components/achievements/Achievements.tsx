import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, Cpu, FileCheck } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-200">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Validated Credentials</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight uppercase">
            CERTIFICATIONS & IMPACT
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Formal credentials and documented enterprise milestones backed by production audit results.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 hover:border-amber-500/50 hover:bg-slate-50/50 dark:hover:bg-zinc-900/90 backdrop-blur-md transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-sm">
                    {item.category === 'Certification' ? (
                      <Award className="w-5 h-5" />
                    ) : item.category === 'Security & Compliance' ? (
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    item.badge === 'Certified'
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30'
                      : item.badge === 'Security'
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                      : 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  {item.issuer}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-mono border border-slate-200 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle className="w-3 h-3" /> Verified Document
                  </span>
                  <span>{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for future certifications */}
          <div className="p-6 rounded-3xl bg-slate-100/60 dark:bg-zinc-950/40 border border-dashed border-slate-300 dark:border-zinc-800 flex flex-col justify-center items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-400 dark:text-zinc-500 mb-3 shadow-sm">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-semibold text-sm text-slate-800 dark:text-zinc-300 mb-1">
              Ongoing Professional Upskilling
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-500 max-w-xs">
              Actively pursuing advanced Microsoft Certified: DevOps Engineer Expert & Cloud Native Architecture credentials.
            </p>
            <span className="mt-4 text-[10px] font-mono px-2.5 py-1 rounded bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 shadow-sm">
              Future Ingestion Pipeline
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
