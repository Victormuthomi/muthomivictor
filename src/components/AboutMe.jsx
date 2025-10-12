import { useEffect, useState } from "react";
import { LuInfinity } from "react-icons/lu";

export default function AboutMe({ onComplete }) {
  const command = "cat aboutme.txt";
  const [typedCommand, setTypedCommand] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [hasShownContent, setHasShownContent] = useState(false);

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const loop = () => {
      if (!deleting) {
        if (i < command.length) {
          setTypedCommand(command.slice(0, i + 1));
          i++;
          timeout = setTimeout(loop, 100);
        } else {
          if (!hasShownContent) {
            setShowContent(true);
            setHasShownContent(true);
            if (onComplete) onComplete();
          }
          timeout = setTimeout(() => {
            deleting = true;
            loop();
          }, 1500);
        }
      } else {
        if (i > 0) {
          setTypedCommand(command.slice(0, i - 1));
          i--;
          timeout = setTimeout(loop, 50);
        } else {
          deleting = false;
          timeout = setTimeout(loop, 800);
        }
      }
    };

    loop();
    return () => clearTimeout(timeout);
  }, [command, onComplete, hasShownContent]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 bg-black text-white">
      {/* Terminal typing */}
      <div className="w-full max-w-4xl mb-4">
        <pre className="text-lg font-mono">
          <span className="text-green-400">
            $ the-alcodist
            <LuInfinity
              className="inline text-cyan-400 opacity-90 animate-pulse"
              size={18}
            />{" "}
            |{" "}
          </span>
          <span className="text-white">{typedCommand}</span>
          <span className="animate-pulse text-white">▋</span>
        </pre>
      </div>
      {/* Bio content */}
      {showContent && (
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 mt-4 animate-fade-in-up">
          {/* Profile image */}
          <img
            src="/profile.png"
            alt="The Alcodist"
            className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg"
          />

          {/* Text content */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">#</span> About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I am{" "}
              <span className="text-green-400 font-semibold">The Alcodist</span>{" "}
              — a software engineer who began at the core: the{" "}
              <span className="text-cyan-400 font-semibold">backend</span>.
              That’s where I learned to speak the language of{" "}
              <span className="text-cyan-400 font-semibold">
                logic, data, and design
              </span>{" "}
              — where systems breathe and ideas find structure.
            </p>

            <p className="text-gray-300 leading-relaxed">
              From there, I explored the{" "}
              <span className="text-cyan-400 font-semibold">frontend</span> to
              understand how humans meet the machine, and stepped into{" "}
              <span className="text-cyan-400 font-semibold">DevOps</span> to
              master the art of delivery — ensuring that what was built reached
              the world with precision and reliability.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I now craft backend systems with a complete vision — they are not
              only functional, but alive; architectures that grow, scale, and
              adapt like organisms of code. Every system I build is designed to
              be reliable, elegant, and resilient, turning abstract ideas into
              tangible, maintainable solutions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              To me, engineering is modern alchemy — transforming imagination
              into living systems that move seamlessly from concept to
              production.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
