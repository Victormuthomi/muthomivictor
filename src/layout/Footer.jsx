import { LuInfinity, LuWifi, LuClock, LuArrowUp } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Optional: Get Nairobi Time (UTC+3)
  const nairobiTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "short",
    timeZone: "Africa/Nairobi",
  }).format(new Date());

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-12 px-6 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* BRAND & STATUS */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
            <LuInfinity className="text-amber-500" size={18} />
            <span>ALCODIST_OS</span>
            <span className="text-[10px] text-zinc-600 ml-2 py-0.5 px-2 border border-zinc-800 rounded-md uppercase">
              v2.0.26
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none">
            Architecting Resilient Distributed Systems
          </p>
        </div>

        {/* SYSTEM METRICS (Live-ish data) */}
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-zinc-700 flex items-center gap-1">
              <LuClock size={12} /> Uptime (EAT)
            </span>
            <span className="text-amber-500/80">{nairobiTime} NBO</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-zinc-700 flex items-center gap-1">
              <LuWifi size={12} /> Connection
            </span>
            <span className="text-green-900">Encrypted</span>
          </div>
        </div>

        {/* NAVIGATION & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 items-center">
            <a
              href="#banner"
              className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <LuArrowUp className="group-hover:-translate-y-1 transition-transform" />
              BACK_TO_INIT
            </a>
            <a
              href="#contact"
              className="text-xs text-zinc-400 hover:text-amber-500 transition-colors"
            >
              UPLINK_NODE
            </a>
          </div>
          <p className="text-[9px] text-zinc-700 uppercase tracking-widest">
            © {currentYear} Muthomi Victor // All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
