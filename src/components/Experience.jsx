import { useEffect, useState } from "react";
import { LuInfinity, LuBinary, LuHistory } from "react-icons/lu";

export default function Experience() {
  const command = "history | grep 'engineering_roles'";
  const [typedCommand, setTypedCommand] = useState("");

  const experiences = [
    {
      period: "2025 – PRESENT",
      role: "Founder & Principal Engineer",
      company: "Ajirinow",
      impact: "Building a high-concurrency labor marketplace from zero to one.",
      details: [
        "Architected a resilient Django REST/PostgreSQL backend capable of handling concurrent bid-locking and secure state transitions.",
        "Engineered the complete MVP infrastructure using Docker for rapid, zero-downtime iterations.",
        "Integrated transactional integrity patterns to ensure 100% accuracy in job-matching and payment triggers."
      ],
    },
    {
      period: "2024 – 2025",
      role: "Lead Full-Stack Engineer (Contract)",
      company: "Eleli Afrika",
      impact: "Architecting high-stakes systems for a global client portfolio.",
      details: [
        "Transmuted business requirements into production-grade microservices using Node.js (TypeScript) and Go (Gin).",
        "Owned the 'Delivery Alchemy': Standardized agency-wide CI/CD pipelines via GitHub Actions, reducing deployment failure rates by 60%.",
        "Orchestrated cloud-native environments with Kubernetes, ensuring 99.9% uptime for client MVPs.",
        "Optimized data layer performance using PostgreSQL indexing and Django REST query refactoring."
      ],
    },
    {
      period: "2023 – 2024",
      role: "Systems Consultant & Developer",
      company: "Freelance",
      impact: "Providing backend-first engineering for high-growth startups.",
      details: [
        "Designed scalable backend services with Go (Gin) and Express.js, prioritizing stateless auth and low-latency performance.",
        "Migrated legacy client applications to containerized Docker workflows, improving developer productivity by 40%.",
        "Bridged the gap between complex logic and UX by delivering high-performance React/Tailwind frontends."
      ],
    },
    {
      period: "2022 – 2023",
      role: "Backend Developer",
      company: "Kisumu Lakeside Homes",
      impact: "Optimizing the core of a regional real estate leader.",
      details: [
        "Improved system performance by 30% through database query optimization and the implementation of Redis caching layers.",
        "Engineered mission-critical REST APIs using Django REST Framework and PostgreSQL.",
        "Introduced automated DevOps pipelines, establishing a culture of reliability and automated testing."
      ],
    },
  ];

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#050505] text-zinc-300 px-6 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* TERMINAL HEADER */}
        <div className="mb-16 text-sm opacity-80">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-amber-500 font-bold">➜</span>
            <span className="text-zinc-500 underline underline-offset-4">~/career_history</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">$ {typedCommand}</span>
            <span className="animate-pulse w-2 h-4 bg-amber-500 inline-block" />
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="space-y-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/50 via-zinc-800 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 group">
              <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-amber-500/50 group-hover:bg-amber-500 transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {exp.role} <span className="text-amber-500/80 mx-1">@</span> {exp.company || "Independent"}
                </h3>
                <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold bg-zinc-900/50 px-3 py-1 border border-zinc-800 rounded-full">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-amber-500/60 mb-4 italic flex items-center gap-2">
                <LuBinary size={14} /> // {exp.impact}
              </p>

              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
                    <span className="text-amber-500/40 mt-1.5 text-[8px]">▶</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FINAL SYSTEM LOGOUT (Simplified) */}
        <div className="mt-24 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 flex justify-between uppercase tracking-[0.3em]">
          <span>Career History: End of Stream</span>
          <span className="flex items-center gap-2">
            <LuInfinity size={12} /> ALCODIST_OS_V2
          </span>
        </div>
      </div>
    </section>
  );
}
