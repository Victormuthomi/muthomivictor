import { useEffect, useState, useRef } from "react";
import { LuInfinity } from "react-icons/lu";

const colors = [
  "text-red-400",
  "text-orange-400",
  "text-yellow-400",
  "text-green-400",
  "text-cyan-400",
  "text-blue-400",
  "text-purple-400",
];

export default function Banner({ onComplete }) {
  const bannerText = "VICTOR MUTHOMI";
  const subtitleText =
    "Software Engineer Crafting the unseen architecture where logic becomes life.";

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
            setTimeout(() => {
              onComplete();
              window.location.hash = "about";
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  const renderSubtitle = (text) => {
    if (!text) return null;

    const role = "Software Engineer";
    const rest = text.slice(role.length);

    return (
      <>
        <span className="text-green-400 font-semibold">{role}</span>
        <LuInfinity className="text-cyan-400 mx-1" size={20} />
        <span className="text-white/70">{rest}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 text-center px-4">
      {/* Main Name */}
      <pre className="text-4xl sm:text-6xl font-bold tracking-widest break-words">
        {bannerDisplay.split("").map((char, idx) => (
          <span key={idx} className={colors[idx % colors.length]}>
            {char}
          </span>
        ))}
        {bannerDisplay.length < bannerText.length && (
          <span className="animate-pulse text-white">▋</span>
        )}
      </pre>

      {/* Subtitle */}
      <p className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed flex flex-wrap items-center justify-center gap-1">
        {renderSubtitle(subtitleDisplay)}
        {subtitleDisplay.length < subtitleText.length && (
          <span className="animate-pulse">▋</span>
        )}
      </p>
    </div>
  );
}
