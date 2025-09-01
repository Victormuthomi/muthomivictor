import { useEffect, useState } from "react";

export default function Projects({ onComplete }) {
  const projects = [
    {
      name: "Ajirinow",
      desc: "Platform connecting clients with construction workers. Built MVP independently, handling backend, database, and DevOps pipelines.",
      backend: "Django REST Framework · PostgreSQL · Docker · Kubernetes",
      github: "https://github.com/victormdevops/ajirinow",
      live: "https://ajirinow.vercel.app/",
    },
    {
      name: "RotaFlow",
      desc: "Scheduling system for assigning roles and managing workers. Designed RESTful APIs and database models for smooth workforce management.",
      backend: "Node.js (Express) · PostgreSQL · REST APIs",
      github: "https://github.com/victormdevops/rotaflow",
      live: "https://rotaflow-frontend.vercel.app/",
    },
    {
      name: "GitConnect",
      desc: "Social platform for developers to share projects, profiles, and job opportunities. Built backend APIs and integrated authentication, data relationships, and real-time features.",
      backend: "Go (Gin) · PostgreSQL · JWT Authentication · Real-time APIs",
      github: "https://github.com/victormdevops/gitconnect",
      live: "https://gitconnect-frontend.vercel.app/",
    },
    {
      name: "TuVote",
      desc: "Secure online voting solution for organizations and communities. Developed backend API, authentication, and vote tallying system ensuring data integrity and security.",
      backend: "Node.js (Express) · MongoDB · JWT Authentication · REST APIs",
      github: "https://github.com/victormdevops/tuvote",
      live: "https://tuvote-frontend.vercel.app/",
    },
    {
      name: "RazorBill",
      desc: "Streaming platform showcasing backend orchestration, monitoring, and CI/CD pipelines.",
      backend: "Node.js (MERN) · Kubernetes · Docker · Prometheus + Grafana",
      github: "https://github.com/victormdevops/razorbill",
      live: "https://razorbill-website.vercel.app/",
    },
  ];

  const command = "ls backend-projects/";
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
    <div className="flex flex-col items-center justify-center px-6 py-6 bg-black text-white">
      {/* Terminal command */}
      <div className="w-full max-w-4xl mb-4">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ muthomivictor | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {/* Projects */}
      <div className="w-full max-w-4xl font-mono space-y-6">
        {projects.map((proj, index) => (
          <div key={index} className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-green-400">{proj.name}</h3>
            <p className="text-gray-300 mt-1">{proj.desc}</p>

            {/* Backend stack */}
            <p className="mt-2 text-sm">
              <span className="text-yellow-400">Backend ⚙️</span>:{" "}
              {proj.backend}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-2">
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
              <div className="my-4">
                <pre className="text-green-400">
                  ----------------------------------------
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
