import { useEffect, useState } from "react";
import { FaNodeJs, FaGithub, FaLinux } from "react-icons/fa";
import {
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si";
import {
  LuInfinity,
  LuCommand,
  LuShieldCheck,
  LuZap,
  LuActivity,
} from "react-icons/lu";

// SUB-COMPONENTS (Defined outside to keep the export clean)
function Skill({ icon, name, primary }) {
  return (
    <div className="flex flex-col items-start group/item cursor-default">
      <div
        className={`text-3xl mb-3 transition-all duration-300 
        ${primary ? "text-amber-500" : "text-zinc-700"} 
        group-hover/item:text-amber-400 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_8px_rgba(251,191,36,0.2)]`}
      >
        {icon}
      </div>
      <p
        className={`text-[9px] font-mono uppercase tracking-tighter transition-colors duration-300
        ${primary ? "text-zinc-300 font-bold" : "text-zinc-600"} 
        group-hover/item:text-zinc-200`}
      >
        {name}
      </p>
    </div>
  );
}

function SkillSection({ title, subtitle, children }) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-black text-white tracking-tighter uppercase italic flex items-center gap-2">
          <span className="w-1 h-4 bg-amber-500/50 rounded-full" />
          {title}
        </h3>
        <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] mt-1">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-10 gap-x-4">{children}</div>
    </div>
  );
}

// MAIN EXPORT
export default function Skills() {
  const [typedCommand, setTypedCommand] = useState("");
  const command = "systemctl status tech-stack.service";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 45);
    return () => clearInterval(typing);
  }, [command]);

  return (
    <section id="skills" className="py-24 bg-[#050505] text-zinc-300 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TERMINAL HEADER */}
        <div className="mb-16 font-mono text-xs opacity-70 border-l-2 border-amber-500/30 pl-4 py-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">➜</span>
            <span className="text-zinc-500">~/alcodist-hub</span>
            <span className="text-white tracking-tight">$ {typedCommand}</span>
            <span className="animate-pulse w-2 h-4 bg-amber-500/50" />
          </div>
          <p className="mt-2 text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
            ● tech-stack.service - Backend Infrastructure & Core Logic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <SkillSection
            title="Core Systems"
            subtitle="Scalable Backend Architecture"
          >
            <Skill icon={<SiNestjs />} name="NestJS" primary />
            <Skill icon={<SiGo />} name="Go (Gin)" primary />
            <Skill icon={<SiPostgresql />} name="PostgreSQL" primary />
            <Skill icon={<SiRedis />} name="Redis" />
            <Skill icon={<SiPrisma />} name="Prisma" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<FaNodeJs />} name="Node.js" />
          </SkillSection>

          <SkillSection
            title="Infrastructure"
            subtitle="Orchestration & Deployment"
          >
            <Skill icon={<SiDocker />} name="Docker" primary />
            <Skill icon={<FaGithub />} name="CI/CD" />
            <Skill icon={<SiKubernetes />} name="K8s" />
            <Skill icon={<SiNginx />} name="Nginx" />
            <Skill icon={<FaLinux />} name="Linux" />
            <Skill icon={<LuActivity />} name="Monitoring" />
          </SkillSection>

          <SkillSection title="Interfaces" subtitle="Frontend & AI Workflows">
            <Skill icon={<SiReact />} name="React" />
            <Skill icon={<SiNextdotjs />} name="Next.js" />
            <Skill icon={<SiTailwindcss />} name="Tailwind" />
            <Skill icon={<SiOpenai />} name="LLM Ops" />
          </SkillSection>

          <SkillSection title="Principles" subtitle="Architect Mindset">
            <Skill icon={<LuShieldCheck />} name="Ownership" primary />
            <Skill icon={<LuCommand />} name="Autonomy" primary />
            <Skill icon={<LuZap />} name="TDD First" />
            <Skill icon={<LuInfinity />} name="R&D Logic" />
          </SkillSection>
        </div>
      </div>
    </section>
  );
}
