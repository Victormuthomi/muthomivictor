import { useEffect, useState } from "react";
import {
  LuInfinity,
  LuBinary,
  LuGithub,
  LuExternalLink,
  LuCpu,
  LuShieldAlert,
} from "react-icons/lu";

export default function TechnicalTrace() {
  const command = "cat /var/log/alcodist/system_evolution.log";
  const [typedCommand, setTypedCommand] = useState("");

  const history = [
    {
      id: "01",
      title: "The Alcodist Ecosystem",
      role: "Lead Architect",
      period: "2025 – PRESENT",
      impact:
        "Architecting a decoupled microservice mesh to isolate R&D from production traffic.",
      stack: "NestJS / Go-Gin / PostgreSQL / Docker",
      points: [
        "Microservice Isolation: Engineered a headless NestJS core (Alcodist Lab) to handle deep R&D logic, decoupled from the Go-Gin production gateway.",
        "Alcodist Lab: High-integrity schema auditing and PostgreSQL optimization, ensuring business logic remains 'audit-ready' before deployment.",
        "Alcodist Hub: Deployed a high-concurrency Go/Gin service for real-time data synchronization, achieving sub-100ms API response times.",
        "System Resilience: Built for 'audit-ready' code stability, testing complex business logic and database-level constraints in isolated environments.",
      ],
      links: {
        github: "https://github.com/Victormuthomi/alcodist-lab-new",
        live: "https://razorbill-website.vercel.app/",
      },
    },
    {
      id: "02",
      title: "MO-Jobs (Labor Marketplace)",
      role: "Founder & Lead Engineer",
      period: "2024 – 2025",
      impact:
        "Full lifecycle ownership of a construction-sector logistics marketplace.",
      stack: "Marketplace Logic / Transactional Integrity",
      points: [
        "Marketplace Logic: Architected a supply/demand engine using PostgreSQL row-level locking (SELECT FOR UPDATE) to eliminate race conditions in high-volume bookings.",
        "Regional Optimization: Engineered efficient payload management and localized caching to handle low-bandwidth constraints (Meru).",
        "Direct Utility: Managed the full stack from schema design to deployment, ensuring 100% transactional integrity in a direct-revenue environment.",
      ],
      links: {
        github: "https://github.com/Victormuthomi/ajirinow-backend",
        live: "https://mojobs.vercel.app/",
      },
    },
    {
      id: "03",
      title: "RotaFlow",
      role: "Systems Research",
      period: "2024",
      impact: "Workforce coordination and resource contention management.",
      stack: "Node.js / Express / PostgreSQL / Docker",
      points: [
        "Engineered a conflict-free scheduling engine utilizing database-level pessimistic locking for real-time resource management.",
        "Implemented containerized Docker workflows to ensure consistent environment parity across all deployment cycles.",
      ],
      links: {
        github: "https://github.com/Victormuthomi/rotaflow-backend",
        live: "https://rotaflow-frontend.vercel.app/",
      },
    },
  ];
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 40);
    return () => clearInterval(typing);
  }, [command]);

  return (
    <section
      id="history"
      className="py-24 bg-[#050505] text-zinc-300 px-6 font-mono"
    >
      <div className="max-w-4xl mx-auto">
        {/* TERMINAL HEADER */}
        <div className="mb-16 text-sm opacity-80 border-b border-zinc-900 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-amber-500 font-bold">➜</span>
            <span className="text-zinc-500 underline underline-offset-4">
              ~/alcodist/evolution
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white tracking-tight font-sans">
              $ {typedCommand}
            </span>
            <span className="animate-pulse w-2 h-4 bg-amber-500" />
          </div>
        </div>

        {/* SYSTEM TRACE TIMELINE */}
        <div className="space-y-28 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/30 via-zinc-800 to-transparent" />

          {history.map((item) => (
            <div key={item.id} className="relative pl-10 group">
              {/* Glow Dot */}
              <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-amber-500 transition-all duration-500 shadow-[0_0_15px_rgba(251,191,36,0.3)]" />

              <div className="mb-8">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-sm">
                    {item.period}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest">
                  <span className="text-amber-500/80 font-bold">
                    {item.role}
                  </span>
                  <span className="text-zinc-800">|</span>
                  <span className="text-zinc-500">{item.stack}</span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xs text-zinc-500 italic flex items-center gap-2 border-l border-zinc-800 pl-4 py-1">
                  <LuShieldAlert size={14} className="text-amber-500/40" />{" "}
                  {item.impact}
                </p>

                <ul className="space-y-4">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3 max-w-2xl"
                    >
                      <span className="text-amber-500/40 mt-1.5 text-[8px]">
                        ▶
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6 pt-4">
                  {item.links.github !== "#" && (
                    <a
                      href={item.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] uppercase font-bold"
                    >
                      <LuGithub size={14} /> Source
                    </a>
                  )}
                  {item.links.live !== "#" && (
                    <a
                      href={item.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] uppercase font-bold"
                    >
                      <LuExternalLink size={14} /> Deployment
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SYSTEM FOOTER */}
        <div className="mt-32 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 flex justify-between uppercase tracking-[0.3em]">
          <span>Trace Finished: 100% Autonomy</span>
          <span className="flex items-center gap-2">
            <LuInfinity size={12} /> ALCODIST_OS_V2
          </span>
        </div>
      </div>
    </section>
  );
}
