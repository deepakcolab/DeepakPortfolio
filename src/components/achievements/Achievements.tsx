import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, Sparkles, ExternalLink, Cpu, FileCheck } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Validated Credentials</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            CERTIFICATIONS & IMPACT
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
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
              className="p-6 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 hover:bg-zinc-900/90 backdrop-blur-md transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    {item.category === 'Certification' ? (
                      <Award className="w-5 h-5" />
                    ) : item.category === 'Security & Compliance' ? (
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Cpu className="w-5 h-5 text-blue-400" />
                    )}
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    item.badge === 'Certified'
                      ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      : item.badge === 'Security'
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                      : 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  {item.issuer}
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3 h-3" /> Verified Document
                  </span>
                  <span>{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for future certifications */}
          <div className="p-6 rounded-3xl bg-zinc-950/40 border border-dashed border-zinc-800 flex flex-col justify-center items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-semibold text-sm text-zinc-300 mb-1">
              Ongoing Professional Upskilling
            </h4>
            <p className="text-xs text-zinc-500 max-w-xs">
              Actively pursuing advanced Microsoft Certified: DevOps Engineer Expert & Cloud Native Architecture credentials.
            </p>
            <span className="mt-4 text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
              Future Ingestion Pipeline
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
