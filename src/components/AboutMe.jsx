import { useEffect, useState } from "react";
import { LuTerminal, LuCpu, LuShieldCheck, LuLayers } from "react-icons/lu";

export default function AboutMe({ onComplete }) {
  const command = "cat manifesto.md";
  const [typedCommand, setTypedCommand] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setShowContent(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 50); // Snappy terminal speed
    return () => clearInterval(typing);
  }, [command, onComplete]);

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-6 py-24 bg-[#050505] text-zinc-300 relative overflow-hidden"
    >
      <div className="w-full max-w-5xl relative z-10">
        {/* TERMINAL PROMPT - High-integrity styling */}
        <div className="flex items-center gap-3 font-mono text-xs mb-12 opacity-90 border-b border-zinc-900 pb-4">
          <span className="text-amber-500 font-bold">➜</span>
          <span className="text-zinc-500">~/alcodist-hub</span>
          <span className="flex items-center gap-2 text-zinc-300">
            <LuTerminal size={14} className="text-amber-500/70" />{" "}
            <span className="tracking-tight">{typedCommand}</span>
          </span>
          <span className="animate-pulse w-2 h-4 bg-amber-500/50" />
        </div>

        {/* CONTENT WINDOW */}
        {showContent && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            {/* LEFT SIDE: Technical Identity Card */}
            <div className="lg:col-span-4 space-y-8">
              <div className="relative group max-w-[280px] lg:max-w-none mx-auto lg:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src="/profile.png"
                  alt="Victor Muthomi"
                  className="relative w-full aspect-square object-cover rounded-2xl border border-zinc-800 grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
              </div>

              {/* SYSTEM STATS TABLE */}
              <div className="bg-zinc-950 border border-zinc-800/60 p-5 rounded-2xl font-mono text-[10px] space-y-3 shadow-2xl">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 flex items-center gap-2 uppercase tracking-tighter">
                    <LuLayers size={12} /> CLASS
                  </span>
                  <span className="text-amber-500 font-bold tracking-widest">
                    PRINCIPAL_ENG
                  </span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 flex items-center gap-2 uppercase tracking-tighter">
                    <LuCpu size={12} /> ENGINE
                  </span>
                  <span className="text-zinc-300 font-bold tracking-widest uppercase">
                    AUTODIDACT
                  </span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 flex items-center gap-2 uppercase tracking-tighter">
                    <LuShieldCheck size={12} /> INTEGRITY
                  </span>
                  <span className="text-zinc-300 font-bold tracking-widest uppercase text-right">
                    SECURED
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-zinc-600 uppercase tracking-tighter italic">
                    Status:
                  </span>
                  <span className="text-green-500/80 font-bold flex items-center gap-1.5 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    Operational
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: The Manifesto */}
            <div className="lg:col-span-8 space-y-8 text-left">
              <div className="space-y-2">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
                  The Manifesto
                </h2>
                <div className="h-1 w-20 bg-amber-500/40 rounded-full" />
              </div>

              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                <p>
                  I am{" "}
                  <span className="text-white font-semibold">The Alcodist</span>{" "}
                  — a systems engineer obsessed with resilience. My background
                  was forged in the
                  <span className="text-zinc-200"> "Endless Hours"</span> of
                  deep R&D, focusing on the systems that stay upright when
                  others fail.
                </p>

                <p>
                  As an{" "}
                  <span className="text-amber-400/90 font-medium">
                    Independent Operator
                  </span>
                  , I’ve spent my formative years building production-grade
                  logic like <strong>MO-jobs</strong>, where I solved critical
                  race conditions and perfected atomic transaction handling in
                  distributed marketplaces.
                </p>

                <p>
                  I am a{" "}
                  <span className="text-zinc-200">Specialist by Choice</span>.
                  While I build full-stack products, I obsess over the{" "}
                  <strong>Backend</strong> because that is where the truth of a
                  system lives. I don’t just write code that runs; I architect
                  systems that survive reality.
                </p>

                <blockquote className="border-l-4 border-amber-500/40 pl-6 py-2 bg-amber-500/[0.02] rounded-r-lg">
                  <p className="text-zinc-300 italic font-medium">
                    "My philosophy is rooted in logic: optimize for
                    maintainability, build for autonomy, and never stop
                    self-educating."
                  </p>
                </blockquote>
              </div>

              {/* ACTION TAGS: Modern & Clean */}
              <div className="flex flex-wrap gap-3 pt-6">
                {[
                  "Distributed Architecture",
                  "Atomic Logic",
                  "PostgreSQL Integrity",
                  "Autodidactic Research",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 text-zinc-500 text-[10px] uppercase font-bold tracking-widest rounded-sm transition-colors hover:border-amber-500/30 hover:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
