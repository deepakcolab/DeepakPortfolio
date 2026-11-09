import React from 'react';
import { Mail, Linkedin, Github, ArrowUp, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-zinc-900 text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle top amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-zinc-900 border border-amber-500/40 flex items-center justify-center font-display font-black text-amber-500 text-lg">
                DS
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg tracking-tight">
                  {profileData.displayName}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {profileData.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              {profileData.heroTagline} Specializing in enterprise .NET Core, robust SQL Server architecture, and privacy-first local AI deployments.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Static portfolio architecture • No third-party trackers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-amber-400 transition-colors">Technology Toolkit</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-400 transition-colors">Career Journey</a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-amber-400 transition-colors">Developer Console</a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Direct Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="truncate">{profileData.email}</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub Repositories</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                📍 {profileData.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 transition-all flex items-center gap-1.5 focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
