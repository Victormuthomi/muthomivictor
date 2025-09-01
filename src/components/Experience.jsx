import { useEffect, useState } from "react";

export default function Experience() {
  const command = "cat experience.txt";
  const [typedCommand, setTypedCommand] = useState("");

  const experiences = [
    {
      period: "2022 – 2023",
      role: "Backend Developer",
      company: "Kisumu Lakeside Homes",
      details: [
        "Built REST APIs with Django and Django REST Framework, implementing robust authentication systems.",
        "Optimized database queries, improving system performance and reducing response times by 30%.",
        "Gained early exposure to deployment workflows, laying the foundation for DevOps practices.",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Full-Stack Developer",
      company: "Bandika IoT",
      details: [
        "Developed IoT dashboards with React for real-time device monitoring.",
        "Built REST APIs with Node.js (Express) and Go (Gin).",
        "Implemented containerized deployments using Docker and Docker Compose, streamlining development-to-production workflow.",
        "Collaborated across teams to bridge development and operational workflows.",
      ],
    },
    {
      period: "2024 – 2025",
      role: "DevOps Engineer",
      company: "Eleli Afrika",
      details: [
        "Automated CI/CD pipelines with GitHub Actions, reducing deployment errors by 50% and accelerating release cycles.",
        "Deployed microservices using Docker and Kubernetes, ensuring scalable and resilient production environments.",
        "Implemented infrastructure as code with Terraform and configuration management with Ansible.",
        "Set up observability with Prometheus and Grafana, improving system uptime and performance by 25%.",
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
          <span className="text-green-400">$ victormdevops | </span>
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
