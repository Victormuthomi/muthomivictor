import { useEffect, useState } from "react";
import { LuInfinity, LuUser, LuTerminal } from "react-icons/lu";

export default function AboutMe({ onComplete }) {
  const command = "cat manifesto.md"; // Changed to .md to sound more "Senior"
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
    }, 60);
    return () => clearInterval(typing);
  }, [command, onComplete]);

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-6 py-20 bg-[#050505] text-zinc-300"
    >
      <div className="w-full max-w-4xl">
        {/* TERMINAL PROMPT */}
        <div className="flex items-center gap-3 font-mono text-sm mb-8 opacity-80">
          <span className="text-amber-500">➜</span>
          <span className="text-zinc-500">~/the-alcodist</span>
          <span className="flex items-center gap-1 text-zinc-400">
            <LuTerminal size={14} className="text-amber-500/70" />{" "}
            {typedCommand}
          </span>
          <span className="animate-pulse w-2 h-4 bg-amber-500/50" />
        </div>

        {/* CONTENT WINDOW */}
        {showContent && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* LEFT SIDE: Identity Card */}
            <div className="md:col-span-4 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-zinc-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img
                  src="/profile.png"
                  alt="Victor Muthomi"
                  className="relative w-full aspect-square object-cover rounded-xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl font-mono text-[11px] space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">LEVEL:</span>{" "}
                  <span className="text-amber-500">SENIOR_SYSTEMS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">TYPE:</span>{" "}
                  <span className="text-zinc-300">INDIE_HACKER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">ORIGIN:</span>{" "}
                  <span className="text-zinc-300">BACKEND_CORE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">STATUS:</span>{" "}
                  <span className="text-green-500/70 animate-pulse">
                    BUILDING_GOLD
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: The Manifesto */}
            <div className="md:col-span-8 space-y-6 text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-amber-500/50 text-xl font-mono font-normal">
                  01.
                </span>
                The Manifesto
              </h2>

              <div className="space-y-4 text-zinc-400 leading-relaxed text-base font-light">
                <p>
                  I am{" "}
                  <span className="text-white font-medium italic">
                    The Alcodist
                  </span>{" "}
                  — a Systems Engineer fueled by a relentless curiosity for how
                  things break. Most of my expertise wasn't found in a corporate
                  cubicle; it was forged in the{" "}
                  <strong>"Endless Hours."</strong>
                </p>

                <p>
                  I spent my formative years as an{" "}
                  <span className="text-zinc-200">Indie Hacker</span>,
                  navigating the late-night sessions spent debugging race
                  conditions in marketplaces like <strong>MO-jobs</strong> and
                  perfecting the atomic transactions that keep a system honest.
                </p>

                <p>
                  I am a{" "}
                  <span className="text-amber-500/80">
                    Generalist by Necessity and a Specialist by Choice.
                  </span>{" "}
                  I build full-stack products because I love the craft of
                  creation, but I obsess over the <strong>Backend</strong>{" "}
                  because that is where the "Truth" of the system lives.
                </p>

                <p className="border-l-2 border-amber-500/30 pl-4 py-1 text-sm italic italic">
                  "I don't just write code that runs; I architect systems that
                  survive the edge cases of reality."
                </p>
              </div>

              {/* ACTION TAGS */}
              <div className="flex flex-wrap gap-2 pt-4">
                {[
                  "Distributed Systems",
                  "Indie Hacking",
                  "Product Ownership",
                  "Backend Resilience",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full"
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
