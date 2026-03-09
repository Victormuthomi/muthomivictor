import { useEffect, useState } from "react";
import { LuInfinity, LuFolder, LuTerminal, LuGithub, LuExternalLink } from "react-icons/lu";

export default function Projects({ onComplete }) {
  const projects = [
    {
      name: "MO-jobs",
      role: "Founder & Lead Architect",
      desc: "Distributed labor marketplace engine. Architected multi-actor state machines for job-matching and transactional integrity.",
      stack: ["Django REST", "PostgreSQL", "Kubernetes", "React"],
      challenge: "Atomic Escrow & Race-Condition Prevention",
      github: "https://github.com/Victormuthomi/ajirinow-backend",
      live: "https://mojobs.vercel.app/",
    },
    {
      name: "RotaFlow",
      role: "Systems Engineer",
      desc: "Workforce coordination system. Engineered a conflict-free scheduling engine for real-time resource contention management.",
      stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
      challenge: "Database-Level Pessimistic Locking",
      github: "https://github.com/Victormuthomi/rotaflow-backend",
      live: "https://rotaflow-frontend.vercel.app/",
    },
    {
      name: "RazorGPT",
      role: "AI Product Engineer",
      desc: "High-speed sports intelligence platform. Transmuting real-time data into insights via optimized LLM orchestration layers.",
      stack: ["Node.js", "Next.js", "OpenAI API", "Redis"],
      challenge: "Semantic Caching & LLM Token Optimization",
      github: "https://github.com/Victormuthomi/razorbill-backend-old",
      live: "https://razorbill-website.vercel.app/sportgpt",
    },
    {
      name: "Alcodist Academy",
      role: "Platform Architect",
      desc: "Enterprise-grade LMS architecture. Built autonomous background workers for grading and certification workflows.",
      stack: ["NestJS", "MongoDB", "Docker", "React"],
      challenge: "Scalable Event-Driven Background Jobs",
      github: "https://github.com/Victormuthomi/academy-backend",
      live: "https://alcodist-academy.vercel.app/",
    },
    {
      name: "GoChat",
      role: "Systems Research",
      desc: "Low-latency P2P communication engine utilizing WebSockets for real-time state synchronization.",
      stack: ["Go (Gin)", "WebSockets", "Docker", "React"],
      challenge: "Concurrent Connection Handling in Go",
      github: "https://github.com/Victormuthomi/go-chat-system",
      live: "https://chat-system-5ppc.onrender.com/",
    },
  ];

  const command = "ls --architectural-view projects/";
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        if (onComplete) setTimeout(onComplete, 1000);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <section className="py-20 bg-[#050505] text-zinc-300 px-6 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* TERMINAL HEADER */}
        <div className="mb-12 text-sm opacity-80">
          <span className="text-amber-500 font-bold">➜</span>
          <span className="text-zinc-500 ml-2">~/the-alcodist</span>
          <span className="text-white ml-2">$ {typedCommand}</span>
          <span className="animate-pulse w-2 h-4 bg-amber-500/50 inline-block ml-1" />
        </div>

        {/* PROJECTS LOG */}
        <div className="space-y-16">
          {projects.map((proj, index) => (
            <div key={index} className="relative group pl-8 border-l border-zinc-800 hover:border-amber-500/40 transition-colors duration-500">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-amber-500 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{proj.name}</h3>
                  <p className="text-amber-500/70 text-[10px] tracking-[0.2em] font-bold uppercase">{proj.role}</p>
                </div>
                <div className="flex gap-4">
                  <a href={proj.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    <LuGithub size={16}/> SOURCE
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-xs">
                      <LuExternalLink size={16}/> DEPLOYMENT
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-6">
                {proj.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
                <div>
                  <p className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Architectural Challenge</p>
                  <p className="text-zinc-300 text-xs italic">"{proj.challenge}"</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Stack Manifest</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map(s => (
                      <span key={s} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[9px] rounded uppercase">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SYSTEM FOOTER */}
        <div className="mt-20 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 flex justify-between uppercase tracking-[0.3em]">
          <span>Project Logs: 05/05</span>
          <span className="flex items-center gap-2">
            <LuInfinity size={12} /> ALCODIST_OS_V2
          </span>
        </div>
      </div>
    </section>
  );
}
