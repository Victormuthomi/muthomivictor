import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center px-6 py-2 bg-black text-white">
      {/* Terminal typing */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ muthomivictor | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="animate-pulse text-white">▋</span>
        </pre>
      </div>

      {/* Bio content */}
      {showContent && (
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 mt-6 animate-fade-in-up">
          {/* Profile image */}
          <img
            src="/profile.png"
            alt="Muthomi Victor"
            className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg"
          />

          {/* Text content */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">#</span> About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I am{" "}
              <span className="text-green-400 font-semibold">
                Muthomi Victor
              </span>
              , a self-taught{" "}
              <span className="text-cyan-400 font-semibold">
                Backend Engineer{" "}
              </span>
              and problem solver. I thrive on building robust, scalable, and
              maintainable APIs, handling complex business logic, and creating
              elegant solutions to challenging problems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With experience in{" "}
              <span className="text-cyan-400">Django REST Framework</span>,
              <span className="text-cyan-400">Node.js</span>,
              <span className="text-cyan-400">SQL/NoSQL databases</span>, and
              cloud platforms (AWS, GCP, Oracle Cloud), I craft backend systems
              that power modern applications. My background in DevOps adds a
              unique edge, ensuring code and infrastructure integrate seamlessly
              for end-to-end reliability.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I amm curious, detail-oriented, and love to explore new
              technologies. From freelance projects to startup initiatives, I’ve
              delivered backend solutions across multiple domains — always
              aiming for world-class quality and developer-level precision.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
