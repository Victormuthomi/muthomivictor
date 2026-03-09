import { useEffect, useState } from "react";
import {
  LuMail,
  LuGithub,
  LuPhone,
  LuInfinity,
  LuTerminal,
  LuRadio,
} from "react-icons/lu";

function TerminalBlock({ command }) {
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [command]);

  return (
    <div className="mb-10 font-mono text-sm opacity-80">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-amber-500 font-bold">➜</span>
        <span className="text-zinc-500 underline underline-offset-4">
          ~/establish_connection
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white">$ {typedCommand}</span>
        <span className="animate-pulse w-2 h-4 bg-amber-500 inline-block" />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] text-zinc-300 px-6 font-mono"
    >
      <div className="max-w-4xl mx-auto border border-zinc-900 bg-zinc-900/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <LuInfinity size={120} className="text-amber-500" />
        </div>

        <TerminalBlock command="ssh protocols --secure" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* LEFT COLUMN: CONNECTION STATUS */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase">
              Initiate Uplink
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              Currently open for systems architecture roles, high-concurrency
              engineering, and specialized consulting for remote-first teams.
            </p>

            <div className="flex items-center gap-3 text-[10px] font-bold text-amber-500/80 bg-amber-500/5 border border-amber-500/20 w-fit px-4 py-2 rounded-full uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              System Status: Ready for Deployment
            </div>
          </div>

          {/* RIGHT COLUMN: ACCESS NODES */}
          <div className="flex flex-col gap-6">
            <ContactLink
              href="mailto:victor.muthomi.alcodist@gmail.com"
              icon={<LuMail size={20} />}
              label="Email"
              value="victor.muthomi.alcodist@gmail.com"
            />
            <ContactLink
              href="https://github.com/Victormuthomi"
              icon={<LuGithub size={20} />}
              label="GitHub"
              value="github.com/Victormuthomi"
            />
            <ContactLink
              href="https://wa.me/254758407285"
              icon={<LuPhone size={20} />}
              label="WhatsApp"
              value="+254 758 40 72 85"
            />
          </div>
        </div>

        {/* SYSTEM FOOTER */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-wrap justify-between items-center gap-4 text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4">
            <span>Location: 01.02° S, 36.82° E</span>
            <span className="hidden md:block">Timezone: UTC +3</span>
          </div>
          <div className="flex items-center gap-2">
            <LuTerminal className="text-amber-500/50" />
            <span>Encrypted Connection Established</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:border-amber-500/40 hover:bg-zinc-800/40 transition-all duration-300"
    >
      <div className="text-zinc-500 group-hover:text-amber-500 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest group-hover:text-zinc-400">
          {label}
        </p>
        <p className="text-sm text-zinc-300 group-hover:text-white">{value}</p>
      </div>
    </a>
  );
}
