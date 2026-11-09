import React from 'react';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  FileText, 
  Check, 
  Bot, 
  Send, 
  ShieldCheck, 
  Layers, 
  BarChart3, 
  Package, 
  ArrowUpRight, 
  Clock, 
  Search,
  Globe,
  Lock
} from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectMockupProps {
  type: Project['mockupType'];
  accentColor: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, accentColor }) => {
  switch (type) {
    case 'booking-portal':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-zinc-400 font-sans text-[11px] font-semibold">Reserve Portal • Conf Scheduling</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Active Server
            </span>
          </div>

          {/* Calendar Slots Grid */}
          <div className="grid grid-cols-4 gap-2 my-2">
            <div className="p-2 rounded bg-zinc-900 border border-blue-500/30 flex flex-col justify-between">
              <span className="text-zinc-500 text-[10px]">Studio Alpha</span>
              <span className="text-blue-400 font-bold">10:00 - 11:30</span>
              <span className="text-[9px] text-zinc-400">Reserved (Gov)</span>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <span className="text-zinc-500 text-[10px]">Studio Beta</span>
              <span className="text-emerald-400 font-bold">Available</span>
              <span className="text-[9px] text-zinc-400">Slot Open</span>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-amber-500/30 flex flex-col justify-between">
              <span className="text-zinc-500 text-[10px]">Conference C</span>
              <span className="text-amber-400 font-bold">13:00 - 14:00</span>
              <span className="text-[9px] text-zinc-400">Pending RBAC</span>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
              <span className="text-zinc-500 text-[10px]">National Link</span>
              <span className="text-purple-400 font-bold">15:00 - 17:00</span>
              <span className="text-[9px] text-zinc-400">High-Bandwidth</span>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-400" /> Auto Conflict Resolution Engine: Online
            </span>
            <span className="text-zinc-500">Latency: 18ms</span>
          </div>
        </div>
      );

    case 'financial-ledger':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-zinc-400 font-sans text-[11px] font-semibold">Webcast Ledger & eSign</span>
            </div>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              1,000+ Concurrent
            </span>
          </div>

          <div className="space-y-1.5 my-2">
            <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/90 border border-zinc-800">
              <span className="text-zinc-300">INV-84920 National Broadcaster</span>
              <span className="text-zinc-400 font-bold">Tier 3 Clear</span>
              <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                <Check className="w-3 h-3" /> eSign Signed
              </span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/90 border border-zinc-800">
              <span className="text-zinc-300">INV-84921 Regional Tech Summit</span>
              <span className="text-zinc-400 font-bold">Tier 2 In-Review</span>
              <span className="text-amber-400 flex items-center gap-1 text-[10px]">
                <Clock className="w-3 h-3" /> Controller Review
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" /> Multi-level Approval Matrix Verified
            </span>
            <span className="text-zinc-500">Auto Reconciliation</span>
          </div>
        </div>
      );

    case 'vidcon-portal':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-zinc-400 font-sans text-[11px] font-semibold">Vidcon Portal • WCAG 2.1 AA</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-800">EN</span>
              <span className="text-[10px] text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/20">HI</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2 text-center">
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
              <div className="text-amber-400 font-bold text-sm">4.5:1+</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">Contrast Ratio</div>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
              <div className="text-emerald-400 font-bold text-sm">100%</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">Keyboard Nav</div>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
              <div className="text-blue-400 font-bold text-sm">ARIA</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">Screen Reader</div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3 h-3" /> WCAG 2.1 Compliance Verified
            </span>
            <span className="text-zinc-500">Security: HSTS & CSP</span>
          </div>
        </div>
      );

    case 'inventory-system':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-zinc-400 font-sans text-[11px] font-semibold">VCStock Asset Infrastructure</span>
            </div>
            <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              RBAC Governed
            </span>
          </div>

          <div className="space-y-1.5 my-2">
            <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/90 border border-zinc-800">
              <span className="text-zinc-300">Codec 4K Rack #A-102</span>
              <span className="text-zinc-400">SN-998412-VC</span>
              <span className="text-emerald-400 text-[10px]">Deployed</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-zinc-900/90 border border-zinc-800">
              <span className="text-zinc-300">PTZ Camera Unit 12X</span>
              <span className="text-zinc-400">SN-410294-CAM</span>
              <span className="text-amber-400 text-[10px]">Maintenance</span>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1 text-zinc-400">
              <Lock className="w-3 h-3 text-purple-400" /> Warehouse & Field Engineer Segregation
            </span>
            <span className="text-zinc-500">Lifecycle Audit: OK</span>
          </div>
        </div>
      );

    case 'ai-chatbot':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-zinc-400 font-sans text-[11px] font-semibold">Local LLM • Qwen3 + Ollama</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              100% On-Premise
            </span>
          </div>

          <div className="space-y-1.5 my-1">
            <div className="p-1.5 rounded bg-zinc-900 text-zinc-300 text-[10px] flex items-center justify-between">
              <span>&gt; How do I reserve an encrypted telepresence room?</span>
              <span className="text-zinc-500">User</span>
            </div>
            <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-zinc-200 text-[10px]">
              <span className="text-amber-400 font-bold">[RAG Grounded]</span> Navigate to Reserve Portal &gt; Studio Alpha. RBAC Tier 2 verification required...
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1 text-amber-400">
              <Layers className="w-3 h-3" /> Vector RAG Search • Zero Cloud Exfiltration
            </span>
            <span className="text-zinc-500">SSE Streamed</span>
          </div>
        </div>
      );

    case 'form-builder':
      return (
        <div className="w-full h-48 bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 flex flex-col justify-between font-mono text-[11px] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-zinc-400 font-sans text-[11px] font-semibold">Dynamic Form Schema Engine</span>
            </div>
            <span className="text-[10px] text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
              5,000+ monthly
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
              <div className="text-zinc-500">Schema Node</div>
              <div className="text-pink-400 font-bold">Rating & NPS Scale</div>
              <div className="text-zinc-400 mt-1">Rule: Required, Min 1</div>
            </div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
              <div className="text-zinc-500">Conditional Logic</div>
              <div className="text-emerald-400 font-bold">If Score &lt; 3 Show Detail</div>
              <div className="text-zinc-400 mt-1">Dynamic Cascade</div>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="text-zinc-400">Turnaround: +25% Faster</span>
            <span className="text-zinc-500">JSON Schema Validated</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
