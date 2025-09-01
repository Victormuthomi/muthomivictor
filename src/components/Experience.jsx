import { useEffect, useState } from "react";

export default function Experience() {
  const command = "cat experience.txt";
  const [typedCommand, setTypedCommand] = useState("");

  const experiences = [
    {
      period: "2024 – 2025",
      role: "Backend-Focused Full-Stack Developer (Freelance Projects)",
      company: "Eleli Afrika",
      details: [
        "Delivered backend solutions for multiple clients, building APIs with Node.js, TypeScript, Go (Gin), and Django REST Framework.",
        "Automated CI/CD pipelines using GitHub Actions, reducing deployment errors by 50%.",
        "Deployed scalable microservices with Docker and Kubernetes, leveraging IaC tools like Terraform.",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Backend Developer (Freelance)",
      company: "Bandika Creative Agency",
      details: [
        "Designed and implemented backend systems using Node.js (Express) and Go (Gin) for multiple client projects.",
        "Containerized services using Docker & Docker Compose and managed deployment workflows independently.",
        "Developed complex business logic and database models for diverse industry applications.",
      ],
    },
    {
      period: "2022 – 2023",
      role: "Backend Developer",
      company: "Kisumu Lakeside Homes",
      details: [
        "Built robust REST APIs with Django REST Framework.",
        "Optimized SQL/PostgreSQL queries, improving performance and reducing response times by 30%.",
        "Introduced early DevOps workflows to enhance deployment reliability.",
      ],
    },
    {
      period: "2025",
      role: "Founder & Backend Lead",
      company: "Ajirinow",
      details: [
        "Planned and implemented full backend, database, and DevOps pipelines independently.",
        "Built a scalable platform connecting construction workers to clients using Django REST Framework, PostgreSQL, Docker, and Kubernetes.",
        "Delivered a fully functional MVP, showcasing end-to-end backend engineering and problem-solving skills.",
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
          }, 1000); // pause before deleting
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
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      {/* Terminal typing (loops forever) */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ muthomivictor | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {/* Experience list */}
      <div className="w-full max-w-4xl font-mono">
        {experiences.map((exp, index) => (
          <div key={index}>
            {/* Job Title */}
            <h3 className="text-xl font-bold text-green-400">
              {exp.role} @ {exp.company}
            </h3>

            {/* Period */}
            <p className="text-sm text-yellow-400">{exp.period}</p>

            {/* Details */}
            <ul className="mt-2 text-gray-300 text-sm space-y-1 list-disc list-inside">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            {/* Separator */}
            {index < experiences.length - 1 && (
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
