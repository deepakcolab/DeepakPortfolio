import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, ChevronRight } from 'lucide-react';
import { profileData } from '../../data/profile';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Deepak Singh Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/40 flex items-center justify-center font-display font-black text-amber-500 tracking-wider shadow-md group-hover:border-amber-400 group-hover:scale-105 transition-all">
              DS
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors text-base sm:text-lg">
                Deepak Singh
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-tight -mt-1 hidden sm:block">
                .NET Engineer & AI Enthusiast
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/20'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#terminal"
              onClick={(e) => handleScrollTo(e, '#terminal')}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              title="Open Developer Terminal"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              href="/documents/Deepak-Singh-Resume.pdf"
              download="Deepak-Singh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/documents/Deepak-Singh-Resume.pdf"
              download="Deepak-Singh-Resume.pdf"
              className="p-2 rounded-lg bg-amber-500 text-black text-xs font-medium flex items-center justify-center sm:hidden"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 font-semibold border-l-2 border-amber-500'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href="/documents/Deepak-Singh-Resume.pdf"
              download="Deepak-Singh-Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Approved Resume
            </a>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Senior .NET & Full-Stack roles</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
