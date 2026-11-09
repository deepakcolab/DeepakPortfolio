import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { experiencesData } from '../../data/experience';
import { educationData } from '../../data/education';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome-msg',
      command: 'welcome',
      timestamp: '10:00:00',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-amber-400 font-bold">Deepak Singh — Developer Interactive Shell [Version 2.4.0-release]</p>
          <p className="text-zinc-400">Type <span className="text-amber-300 font-bold">help</span> to list available commands or click the shortcut chips below.</p>
        </div>
      )
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = ['help', 'about', 'skills', 'projects', 'experience', 'contact', 'clear'];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setCmdHistoryIdx(-1);

    const now = new Date().toLocaleTimeString();

    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-400 font-bold mb-2">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
              <div><span className="text-amber-300 font-bold">about</span> - Brief professional overview & philosophy</div>
              <div><span className="text-amber-300 font-bold">skills</span> - Core technology toolkit summary</div>
              <div><span className="text-amber-300 font-bold">projects</span> - Selected enterprise case studies</div>
              <div><span className="text-amber-300 font-bold">experience</span> - Career timeline & key roles</div>
              <div><span className="text-amber-300 font-bold">education</span> - Degrees & universities</div>
              <div><span className="text-amber-300 font-bold">contact</span> - Direct email & LinkedIn details</div>
              <div><span className="text-amber-300 font-bold">resume</span> - Download official resume PDF</div>
              <div><span className="text-amber-300 font-bold">whoami</span> - Display current user identity</div>
              <div><span className="text-amber-300 font-bold">clear</span> - Clear current terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">{profileData.name} — {profileData.title}</p>
            <p className="text-zinc-300">{profileData.professionalIntro}</p>
            <p className="text-zinc-400">Core Location: {profileData.location}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">Technology Matrix:</p>
            <div className="space-y-1">
              <p><span className="text-zinc-400 font-mono">Backend:</span> C#, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework, MediatR</p>
              <p><span className="text-zinc-400 font-mono">Database:</span> MS SQL Server, Stored Procedures, T-SQL Query Optimization, MySQL, MongoDB</p>
              <p><span className="text-zinc-400 font-mono">AI & ML:</span> Ollama, Qwen3, Local LLM, RAG Architecture, AI Chatbots</p>
              <p><span className="text-zinc-400 font-mono">Frontend:</span> React, TypeScript, JavaScript, Bootstrap, HTML5, CSS3, Tailwind</p>
              <p><span className="text-zinc-400 font-mono">DevOps:</span> Docker, Windows Server, IIS, AWS, Git, GitHub Actions</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">Selected Case Studies:</p>
            <ul className="space-y-1.5">
              {projectsData.map((p, i) => (
                <li key={p.id}>
                  <span className="text-zinc-200 font-bold">{i + 1}. {p.title}</span> —{' '}
                  <span className="text-zinc-400">{p.tagline}</span>{' '}
                  <span className="text-amber-400">[{p.technologies.slice(0, 3).join(', ')}]</span>
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">Career Timeline:</p>
            <ul className="space-y-1.5">
              {experiencesData.map((e) => (
                <li key={e.id}>
                  <span className="text-white font-bold">{e.role}</span> @{' '}
                  <span className="text-zinc-300">{e.organization}</span>{' '}
                  <span className="text-zinc-500 font-mono">({e.period})</span>
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">Academic Qualifications:</p>
            <ul className="space-y-1">
              {educationData.map((edu) => (
                <li key={edu.id}>
                  <span className="text-white font-bold">{edu.degree}</span> — {edu.institution} ({edu.period})
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-400 font-bold">Contact Coordinates:</p>
            <p>Email: <a href={`mailto:${profileData.email}`} className="text-amber-300 underline">{profileData.email}</a></p>
            <p>LinkedIn: <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{profileData.linkedin}</a></p>
            <p>Location: <span className="text-zinc-300">{profileData.location}</span></p>
          </div>
        );
        break;

      case 'resume':
        output = (
          <div className="text-xs space-y-1">
            <p className="text-emerald-400">Triggering resume download...</p>
            <a 
              href="/documents/Deepak-Singh-Resume.pdf" 
              download="Deepak-Singh-Resume.pdf"
              className="text-amber-300 underline font-bold"
            >
              Click here to manually download Deepak-Singh-Resume.pdf
            </a>
          </div>
        );
        window.open('/documents/Deepak-Singh-Resume.pdf', '_blank');
        break;

      case 'whoami':
        output = (
          <p className="text-xs text-zinc-300">
            visitor@portfolio: uid=1000(guest) gid=1000(guest) groups=1000(guest) [Visiting Deepak Singh's Digital Console]
          </p>
        );
        break;

      case 'sudo':
        output = (
          <p className="text-xs text-red-400">
            Permission denied: guest user is not in the sudoers file. This incident will be reported to Deepak.
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-xs space-y-1 text-red-400">
            <p>bash: command not found: "{trimmed}"</p>
            <p className="text-zinc-500">Type <span className="text-amber-400 font-bold">help</span> to view all valid commands.</p>
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output,
        timestamp: now
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = cmdHistoryIdx === -1 ? cmdHistory.length - 1 : Math.max(0, cmdHistoryIdx - 1);
        setCmdHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIdx !== -1) {
        const nextIdx = cmdHistoryIdx + 1;
        if (nextIdx >= cmdHistory.length) {
          setCmdHistoryIdx(-1);
          setInputVal('');
        } else {
          setCmdHistoryIdx(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        }
      }
    }
  };

  const copyTerminalOutput = () => {
    const text = history.map(h => `$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 bg-slate-100/50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-sm">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Environment</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight uppercase">
            DEVELOPER CONSOLE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Interact with Deepak's portfolio through an interactive Unix-style shell simulation.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Quick Command Chips for Touch & Mobile Users */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 mr-1 hidden sm:inline">Quick shortcuts:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 hover:border-amber-500/40 text-xs font-mono text-amber-600 dark:text-amber-400 transition-colors focus:outline-none shadow-sm"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-3xl bg-[#0d0d0d] border border-slate-300 dark:border-white/10 shadow-2xl overflow-hidden font-mono text-sm text-white">
          
          {/* Terminal Window Title Bar */}
          <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              <span className="ml-3 text-xs text-zinc-400 font-mono hidden sm:inline">
                deepak@portfolio-terminal:~
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={copyTerminalOutput}
                className="text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-1 focus:outline-none"
                title="Copy Terminal History"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={() => executeCommand('clear')}
                className="text-zinc-400 hover:text-white transition-colors text-xs focus:outline-none"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 min-h-[360px] max-h-[480px] overflow-y-auto space-y-4 cursor-text bg-black/75"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <span className="text-emerald-400 font-bold">deepak@devbox:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-zinc-600 text-[10px] ml-auto">{item.timestamp}</span>
                </div>
                <div className="pl-4 border-l-2 border-zinc-800 py-1">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-xs pt-2">
              <span className="text-emerald-400 font-bold shrink-0">deepak@devbox:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or command..."
                className="w-full bg-transparent text-amber-300 font-mono outline-none border-none p-0 focus:ring-0 text-xs sm:text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-amber-400 sm:hidden"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
