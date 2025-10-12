import { useEffect, useState } from "react";
import { LuInfinity } from "react-icons/lu";

export default function Experience() {
  const command = "cat experience.txt";
  const [typedCommand, setTypedCommand] = useState("");

  const experiences = [
    {
      period: "2024 – 2025",
      role: "Full-Stack Software Engineer — Freelance Projects",
      company: "Eleli Afrika",
      details: [
        "Architected and delivered full-stack solutions — from backend systems to production deployments.",
        "Built scalable APIs and microservices with Node.js, TypeScript, Go (Gin), and Django REST Framework.",
        "Designed and developed responsive frontends using React and TailwindCSS.",
        "Automated CI/CD pipelines via GitHub Actions, ensuring seamless and reliable releases.",
        "Deployed cloud-native services with Docker and Kubernetes, achieving efficient scalability and uptime.",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Freelance Backend & Frontend Developer",
      company: "",
      details: [
        "Developed backend services with Node.js (Express) and Go (Gin) for diverse client applications.",
        "Crafted user interfaces with React and TailwindCSS, aligning design with functionality.",
        "Containerized and deployed client solutions using Docker, simplifying release workflows.",
      ],
    },
    {
      period: "2022 – 2023",
      role: "Backend Developer",
      company: "Kisumu Lakeside Homes",
      details: [
        "Built and maintained REST APIs using Django REST Framework and PostgreSQL.",
        "Optimized database queries and caching layers, improving performance by over 30%.",
        "Introduced lightweight DevOps pipelines to enhance deployment reliability.",
      ],
    },
    {
      period: "2025",
      role: "Founder & Full-Stack Engineer",
      company: "Ajirinow",
      details: [
        "Planned and implemented the complete MVP — backend, frontend, and infrastructure.",
        "Engineered APIs with Django REST Framework and structured the database with PostgreSQL.",
        "Integrated a minimal frontend using React and TailwindCSS for seamless usability.",
        "Deployed containerized environments using Docker, enabling smooth scaling and iteration.",
      ],
    },
  ];

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

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 bg-black text-white">
      {/* Terminal typing */}
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

      {/* Experience list */}
      <div className="w-full max-w-4xl font-mono space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="animate-fade-in-up">
            {/* Job Title */}
            <h3 className="text-xl font-bold text-green-400">
              {exp.role} {exp.company && <>@ {exp.company}</>}
            </h3>

            {/* Period */}
            <p className="text-sm text-yellow-400">{exp.period}</p>

            {/* Details */}
            <ul className="mt-1 text-gray-300 text-sm space-y-1 list-disc list-inside">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            {/* Separator */}
            {index < experiences.length - 1 && (
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
