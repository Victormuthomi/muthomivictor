import { useEffect, useState } from "react";
import { LuInfinity, LuWifi, LuClock, LuArrowUp } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  // Live Nairobi Time Ticker
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeStyle: "short",
          timeZone: "Africa/Nairobi",
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-16 px-6 font-mono relative overflow-hidden">
      {/* SUBTLE SCANLINE EFFECT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        {/* BRAND & STATUS */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3 text-white font-bold tracking-tighter">
            <LuInfinity
              className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
              size={20}
            />
            <span className="text-lg">ALCODIST_OS</span>
            <span className="text-[9px] text-zinc-500 py-0.5 px-2 border border-zinc-800 bg-zinc-950/50 rounded uppercase tracking-tighter">
              v2.0.26_STABLE
            </span>
          </div>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.25em] leading-none pl-1">
            Architecting Resilient Distributed Systems
          </p>
        </div>

        {/* SYSTEM METRICS */}
        <div className="flex gap-12 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="text-zinc-800 flex items-center gap-2">
              <LuClock size={12} /> Uptime_NBO
            </span>
            <span className="text-amber-500/90 tabular-nums">
              {time || "00:00"} EAT
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="text-zinc-800 flex items-center gap-2">
              <LuWifi size={12} /> Protocol
            </span>
            <span className="text-green-500/70 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              Encrypted
            </span>
          </div>
        </div>

        {/* NAVIGATION & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <div className="flex gap-8 items-center">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[10px] font-black text-zinc-500 hover:text-white transition-all tracking-widest"
            >
              <LuArrowUp className="group-hover:-translate-y-1 transition-transform text-amber-500" />
              BACK_TO_INIT
            </button>
            <a
              href="#contact"
              className="text-[10px] font-black text-zinc-500 hover:text-amber-500 transition-colors tracking-widest"
            >
              UPLINK_NODE
            </a>
          </div>
          <p className="text-[9px] text-zinc-800 uppercase tracking-[0.3em] font-medium">
            © {currentYear} Muthomi Victor // Root_Access_Only
          </p>
        </div>
      </div>
    </footer>
  );
}
