import { useEffect, useState } from "react";
import { LuInfinity } from "react-icons/lu";

export default function Projects({ onComplete }) {
  const projects = [
    {
      name: "Ajirinow",
      desc: "A platform connecting clients with construction workers. Developed the complete MVP — backend, frontend, and deployment pipeline — ensuring seamless system integration and scalability.",
      stack:
        "Django REST Framework · React · TailwindCSS · PostgreSQL · Kubernetes",
      github: "https://github.com/Victormuthomi/ajirinow-backend",
      live: "https://ajirinow.vercel.app/",
    },
    {
      name: "RotaFlow",
      desc: "Workforce scheduling system for managing roles and shifts. Built RESTful APIs, database models, and the frontend interface for smooth team coordination and control.",
      stack: "Node.js (Express) · React · TailwindCSS · PostgreSQL · Docker",
      github: "https://github.com/Victormuthomi/rotaflow-backend",
      live: "https://rotaflow-frontend.vercel.app/",
    },
    {
      name: "GitConnect",
      desc: "Social platform for developers to share projects, profiles, and opportunities. Implemented backend APIs, authentication, and real-time features — paired with an elegant frontend UI.",
      stack: "Go (Gin) · React · TailwindCSS · PostgreSQL · Docker",
      github: "https://github.com/Victormuthomi/gitconnect-backend",
      live: "https://gitconnect-frontend.vercel.app/",
    },
    {
      name: "TuVote",
      desc: "Secure online voting solution for organizations and communities. Built backend authentication, vote tallying, and responsive frontend, ensuring data integrity and transparency.",
      stack: "Node.js (Express) · React · TailwindCSS · MongoDB · Kubernetes",
      github: "https://github.com/Victormuthomi/tuvote-backend",
      live: "https://tuvote-frontend.vercel.app/",
    },
    {
      name: "GoChat",
      desc: "Lightweight, real-time peer-to-peer chat application with WebSockets. Focused on low-latency performance and clean interface design for instant communication.",
      stack: "Go (Gin) · React · TailwindCSS · WebSockets · Docker",
      github: "https://github.com/Victormuthomi/go-chat-system",
      live: "https://chat-system-5ppc.onrender.com/",
    },
  ];

  const command = "ls projects/";
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const typingInterval = setInterval(() => {
      if (!deleting) {
        setTypedCommand(command.slice(0, i + 1));
        i++;
        if (i === command.length) {
          setTimeout(() => {
            deleting = true;
          }, 1000);
        }
      } else {
        setTypedCommand(command.slice(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // Auto trigger onComplete after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 bg-black text-white">
      {/* Terminal command */}
      <div className="w-full max-w-4xl mb-4">
        <pre className="text-lg font-mono">
          <span className="text-green-400">
            $ the-alcodist{""}
            <LuInfinity
              className="inline text-cyan-400 opacity-90 animate-pulse"
              size={18}
            />{" "}
            |{" "}
          </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {/* Projects */}
      <div className="w-full max-w-4xl font-mono space-y-4">
        {projects.map((proj, index) => (
          <div key={index} className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-green-400">{proj.name}</h3>
            <p className="text-gray-300 mt-1">{proj.desc}</p>

            {/* Stack */}
            <p className="mt-1 text-sm">
              <span className="text-yellow-400">Stack ⚙️</span>: {proj.stack}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-1">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* Separator */}
            {index < projects.length - 1 && (
              <div className="my-3">
                <pre className="text-green-400">
                  ----------------------------------------
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
