import { useEffect, useState } from "react";
import { FaNodeJs, FaAws, FaGithub, FaLinux } from "react-icons/fa";
import {
  SiGo, SiDjango, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiKubernetes, SiPrometheus, SiGrafana, SiNginx, SiReact,
  SiTailwindcss, SiNestjs, SiExpress, SiPrisma, SiNextdotjs,
  SiOpenai, SiTensorflow, SiPostman,
} from "react-icons/si";
import { LuInfinity, LuCommand, LuShieldCheck, LuZap } from "react-icons/lu";

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
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#050505] text-zinc-300 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* TERMINAL HEADER */}
        <div className="mb-12 font-mono text-sm opacity-80">
          <span className="text-amber-500">➜</span>
          <span className="text-zinc-500 ml-2">~/the-alcodist</span>
          <span className="text-white ml-2">$ {typedCommand}</span>
          <span className="animate-pulse w-2 h-4 bg-amber-500/50 inline-block ml-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* CATEGORY: BACKEND */}
          <SkillSection title="High-Integrity Systems" subtitle="Backend & Logic Architecture">
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiGo />} name="Go (Gin)" />
            <Skill icon={<SiDjango />} name="Django" />
            <Skill icon={<SiNestjs />} name="NestJS" />
            <Skill icon={<SiPostgresql />} name="PostgreSQL" />
            <Skill icon={<SiRedis />} name="Redis" />
            <Skill icon={<SiPrisma />} name="Prisma" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
          </SkillSection>

          {/* CATEGORY: CLOUD & DEVOPS */}
          <SkillSection title="Reliability & Scale" subtitle="Infrastructure & Orchestration">
            <Skill icon={<SiDocker />} name="Docker" />
            <Skill icon={<SiKubernetes />} name="Kubernetes" />
            <Skill icon={<FaAws />} name="AWS" />
            <Skill icon={<SiPrometheus />} name="Prometheus" />
            <Skill icon={<SiGrafana />} name="Grafana" />
            <Skill icon={<FaGithub />} name="CI/CD" />
            <Skill icon={<SiNginx />} name="Nginx" />
            <Skill icon={<FaLinux />} name="Linux" />
          </SkillSection>

          {/* CATEGORY: AI & FRONTEND */}
          <SkillSection title="Product Engineering" subtitle="UI & Intelligent Automations">
            <Skill icon={<SiReact />} name="React" />
            <Skill icon={<SiNextdotjs />} name="Next.js" />
            <Skill icon={<SiTailwindcss />} name="Tailwind" />
            <Skill icon={<SiOpenai />} name="OpenAI" />
            <Skill icon={<SiTensorflow />} name="Workflows" />
          </SkillSection>

          {/* CATEGORY: PRINCIPLES (The Soft Skills) */}
          <SkillSection title="Engineering Principles" subtitle="Founder's Mindset">
            <Skill icon={<LuShieldCheck />} name="Extreme Ownership" />
            <Skill icon={<LuZap />} name="Problem Solver" />
            <Skill icon={<LuCommand />} name="Autonomy" />
            <Skill icon={<LuInfinity />} name="Life-long Learner" />
          </SkillSection>

        </div>
      </div>
    </section>
  );
}

function SkillSection({ title, subtitle, children }) {
  return (
    <div className="group">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
           {title}
        </h2>
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-y-8 gap-x-4">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center group/item">
      <div className="text-2xl mb-2 text-zinc-600 group-hover/item:text-amber-500 transition-colors duration-300">
        {icon}
      </div>
      <p className="text-[10px] font-mono text-zinc-500 text-center uppercase tracking-tighter">
        {name}
      </p>
    </div>
  );
}
