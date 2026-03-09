import { useEffect, useState, useRef } from "react";
import { LuInfinity, LuTerminal, LuCpu } from "react-icons/lu";

export default function Banner({ onComplete }) {
  // THE MASTER BRANDING
  const bannerText = "VICTOR MUTHOMI";
  const subtitleText =
    "Systems Architect & Product Builder crafting the resilient architecture where logic becomes life.";

  const [bannerDisplay, setBannerDisplay] = useState("");
  const [subtitleDisplay, setSubtitleDisplay] = useState("");
  const completedOnce = useRef(false);

  const iRef = useRef(0);
  const jRef = useRef(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (iRef.current <= bannerText.length) {
        setBannerDisplay(bannerText.slice(0, iRef.current));
        iRef.current++;
      } else if (jRef.current <= subtitleText.length) {
        setSubtitleDisplay(subtitleText.slice(0, jRef.current));
        jRef.current++;
      } else {
        clearInterval(typingInterval);
        if (!completedOnce.current) {
          completedOnce.current = true;
          if (onComplete) {
            setTimeout(() => onComplete(), 500);
          }
        }
      }
    }, 40); // Faster typing speed for a snappier, "High-Performance" feel

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  const renderSubtitle = (text) => {
    if (!text) return null;
    const role = "Systems Architect & Product Builder";

    if (text.length <= role.length) {
      return (
        <span className="text-amber-400 font-mono font-bold tracking-tight">
          {text}
        </span>
      );
    }

    const rest = text.slice(role.length);
    return (
      <>
        <span className="text-amber-400 font-mono font-bold tracking-tight">
          {role}
        </span>
        <span className="text-zinc-500 mx-2">/</span>
        <span className="text-zinc-300 font-light italic">{rest}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] py-12 text-center px-4 relative overflow-hidden">
      {/* BACKGROUND DECORATION: Subtle Grid for that "World Class" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* SYSTEM METADATA BAR */}
      <div className="flex items-center gap-4 mb-6 text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
        <span className="flex items-center gap-1">
          <LuTerminal size={12} /> Status: Online
        </span>
        <span className="flex items-center gap-1">
          <LuCpu size={12} /> Mode: Indie Hacker
        </span>
        <span className="animate-pulse text-amber-500/50">●</span>
      </div>

      {/* MAIN NAME: Monochromatic & Bold */}
      <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white mb-2 relative">
        {bannerDisplay}
        {bannerDisplay.length < bannerText.length && (
          <span className="animate-pulse text-amber-500 absolute ml-1">▋</span>
        )}
      </h1>

      {/* SUBTITLE */}
      <div className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed flex flex-wrap items-center justify-center min-h-[3rem]">
        {renderSubtitle(subtitleDisplay)}
        {subtitleDisplay.length >= bannerText.length &&
          subtitleDisplay.length < subtitleText.length && (
            <span className="animate-pulse text-zinc-500 ml-1">▋</span>
          )}
      </div>

      {/* FOOTER DECORATION */}
      <div className="mt-8 flex items-center gap-2 text-zinc-600">
        <div className="h-[1px] w-12 bg-zinc-800" />
        <LuInfinity size={14} className="text-zinc-700" />
        <div className="h-[1px] w-12 bg-zinc-800" />
      </div>
    </div>
  );
}
