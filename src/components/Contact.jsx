import { useEffect, useState } from "react";
import { Mail, Github, Phone } from "lucide-react";

// Reusable terminal block for typing commands
function TerminalBlock({ command, onComplete }) {
  const [typedCommand, setTypedCommand] = useState("");
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting) {
        setTypedCommand(command.slice(0, i + 1));
        i++;
        if (i === command.length) setTimeout(() => (deleting = true), 1200);
      } else {
        setTypedCommand(command.slice(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
          setLoop((prev) => prev + 1);
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, [loop, command]);

  useEffect(() => {
    if (loop >= 1 && onComplete) onComplete();
  }, [loop, onComplete]);

  return (
    <div className="w-full max-w-4xl mb-6">
      <pre className="text-lg font-mono bg-black p-4 rounded-lg shadow-lg">
        <span className="text-green-400">$ muthomivictor | </span>
        <span className="text-white">{typedCommand}</span>
        <span className="text-green-400 animate-pulse">▋</span>
      </pre>
    </div>
  );
}

export default function Contact() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      {/* Terminal typing */}
      <TerminalBlock
        command="cat contact.txt"
        onComplete={() => setShowLinks(true)}
      />

      {/* Contact Links */}
      {showLinks && (
        <div className="w-full max-w-4xl space-y-4 text-lg">
          <a
            href="mailto:muthomi.victor.dev@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Mail className="w-5 h-5 text-yellow-400" />
            muthomi.victor.dev@gmail.com
          </a>
          <a
            href="https://github.com/Victormuthomi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Github className="w-5 h-5 text-yellow-400" />
            github.com/Victormuthomi
          </a>
          <a
            href="https://wa.me/254710210258"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            +254710210258
          </a>
          <p className="text-gray-300 mt-4">
            I’m a <span className="text-cyan-400">Backend Engineer </span>
            with experience in Node.js, Go, Django, PostgreSQL, MongoDB, REST
            APIs, JWT authentication, and containerized deployments. I also have
            foundational knowledge in{" "}
            <span className="text-cyan-400">DevOps & Cloud </span>
            which I leverage to build scalable and reliable systems.
          </p>
        </div>
      )}
    </div>
  );
}
