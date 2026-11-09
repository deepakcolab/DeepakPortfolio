import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  RotateCw, 
  Sparkles, 
  Mail, 
  Linkedin, 
  MapPin, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { profileData } from '../../data/profile';

export const DeveloperIdCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt angle
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    setRotateX(-deltaY * 12);
    setRotateY(deltaX * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Interactive 3D Badge</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            DEVELOPER IDENTITY BADGE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto">
            Hover to tilt in 3D perspective. Click or tap anywhere to flip between identity and credentials.
          </p>
        </div>

        {/* 3D Card Stage */}
        <div className="flex justify-center items-center perspective-1000">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={toggleFlip}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`,
              transition: isFlipped ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.15s ease-out',
            }}
            className="w-80 sm:w-96 h-[480px] relative rounded-3xl transform-style-3d cursor-pointer shadow-2xl group select-none"
          >
            
            {/* FRONT OF CARD */}
            <div className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-br from-zinc-900 via-[#141414] to-black border-2 border-amber-500/40 backface-hidden shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Holographic Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity"></div>
              
              {/* Top Row: Chip & Brand */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-7 rounded-md bg-gradient-to-r from-amber-400 to-amber-600 p-1 flex items-center justify-center border border-amber-300/40 shadow">
                    <div className="w-full h-full border border-amber-700/60 rounded flex flex-col justify-between p-0.5">
                      <div className="h-0.5 bg-amber-800"></div>
                      <div className="h-0.5 bg-amber-800"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    SECURE ID #DS-2026
                  </span>
                </div>

                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-display font-black text-amber-500 text-xs">
                  DS
                </div>
              </div>

              {/* Middle: Profile Image & Name */}
              <div className="flex flex-col items-center text-center my-auto z-10">
                <div className="relative w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 to-zinc-700 shadow-xl mb-4">
                  <img
                    src="/images/deepak-singh.jpg"
                    alt="Deepak Singh"
                    className="w-full h-full object-cover rounded-xl filter grayscale contrast-110"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-zinc-950 border border-amber-500/50 flex items-center justify-center text-amber-400 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  {profileData.displayName}
                </h3>
                <div className="text-xs font-mono font-bold text-amber-400 mt-1 uppercase tracking-wider">
                  Senior Software Developer
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  .NET Core • SQL Architecture • AI RAG
                </div>
              </div>

              {/* Bottom Row */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs z-10">
                <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>{profileData.location}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-amber-400 font-mono">
                  <RotateCw className="w-3 h-3 animate-spin-slow" />
                  <span>Click to Flip</span>
                </div>
              </div>

            </div>

            {/* BACK OF CARD */}
            <div className="absolute inset-0 w-full h-full rounded-3xl p-6 bg-gradient-to-br from-black via-[#141414] to-zinc-900 border-2 border-amber-500/40 backface-hidden rotate-y-180 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Top: Magnetic stripe & Header */}
              <div>
                <div className="h-9 -mx-6 bg-zinc-950 border-y border-zinc-800 mb-4 flex items-center px-6">
                  <div className="w-full h-4 bg-zinc-900 rounded font-mono text-[9px] text-zinc-500 flex items-center justify-between px-2">
                    <span>SECURITY HASH: 8A72F-99B-NIC</span>
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    Core Specializations
                  </span>
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                    OK
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['C# / .NET 10', 'ASP.NET Core', 'SQL Server Tuning', 'Ollama & Qwen', 'WCAG 2.1 AA', 'Docker', 'IIS Security'].map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-zinc-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle: Direct Contact Info */}
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-zinc-300 font-mono text-[11px] truncate">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-zinc-300 font-mono text-[11px] truncate">linkedin.com/in/deepak-singh...</span>
                </div>
              </div>

              {/* Bottom: Signature & Flip return */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div className="text-left">
                  <div className="font-display font-black text-amber-400 text-sm tracking-wider">
                    Deepak Singh
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500">
                    Authorized Engineer Signature
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1 text-[11px] text-amber-400 font-mono hover:underline"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>Flip Back</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
