import { useEffect, useState, useRef } from "react";

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
  const bannerText = "Muthomi Victor";
  const subtitleText =
    "🚀 Backend Engineer • APIs • Scalable Systems • Node.js | Go | Python";

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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <pre className="text-4xl sm:text-6xl font-bold tracking-widest">
        {bannerDisplay.split("").map((char, idx) => (
          <span key={idx} className={colors[idx % colors.length]}>
            {char}
          </span>
        ))}
        {bannerDisplay.length < bannerText.length && (
          <span className="animate-pulse text-white">▋</span>
        )}
      </pre>

      <p className="mt-2 text-white/70 text-lg">
        {subtitleDisplay}
        {subtitleDisplay.length < subtitleText.length && (
          <span className="animate-pulse">▋</span>
        )}
      </p>
    </div>
  );
}
