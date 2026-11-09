import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Copy, 
  Check, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { profileData } from '../../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim()) errs.message = 'Please write a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Deepak,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatusMessage(
      'Preparing draft... Opening your default email client with pre-filled details.'
    );

    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#080808] relative overflow-hidden transition-colors duration-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight uppercase">
            LET'S CREATE SOMETHING MEANINGFUL.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Whether exploring enterprise backend architecture, .NET consulting, or AI integration, I'm always open to discussing high-impact opportunities.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Copy Pill (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md relative overflow-hidden shadow-xl dark:shadow-none">
              <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white mb-3">
                Reach Out Directly
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-light">
                Feel free to copy my direct email, reach out on LinkedIn, or trigger the pre-filled form to open your native email application.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 flex items-center justify-between mb-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono">{profileData.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700/60 text-slate-600 dark:text-zinc-300 hover:text-amber-500 transition-colors focus:outline-none shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Professional Profile</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Deepak Singh on LinkedIn
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300">Connect &rarr;</span>
              </a>

              {/* Location */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-500 dark:text-zinc-500 flex items-center gap-2">
                <span>📍 Primary Location:</span>
                <span className="text-slate-800 dark:text-zinc-300 font-medium">{profileData.location}</span>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 flex items-start gap-3 text-xs text-slate-600 dark:text-zinc-400 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">Zero-Tracking Privacy Guarantee:</span>{' '}
                This static frontend does not collect or transmit personal form data to any third-party database or cloud server. Submitting simply launches your email client securely with pre-formatted content.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xl dark:shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none transition-colors shadow-sm ${
                          errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-200 dark:border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none transition-colors shadow-sm ${
                          errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-200 dark:border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Enterprise .NET Architecture Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none transition-colors shadow-sm ${
                      errors.subject ? 'border-red-500 focus:border-red-400' : 'border-slate-200 dark:border-zinc-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none transition-colors resize-none shadow-sm ${
                      errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-200 dark:border-zinc-800 focus:border-amber-500'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.message}</p>}
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-700 dark:text-amber-300 font-mono">
                    {statusMessage}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-[11px] text-slate-500 dark:text-zinc-500 font-mono flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-500" />
                    <span>Opens your local email client</span>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-amber-500 text-black font-bold text-sm flex items-center gap-2 hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 focus:outline-none"
                  >
                    <span>Launch Email Draft</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
