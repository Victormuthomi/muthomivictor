import { useEffect, useState } from "react";
import { FaNodeJs, FaAws, FaGithub, FaLinux } from "react-icons/fa";
import {
  SiGo,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import { LuInfinity } from "react-icons/lu";

export default function Skills() {
  const [typedCommand, setTypedCommand] = useState("");
  const command = "cat techstack.txt";

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const loop = () => {
      if (!deleting) {
        if (i < command.length) {
          setTypedCommand(command.slice(0, i + 1));
          i++;
          timeout = setTimeout(loop, 120);
        } else {
          timeout = setTimeout(() => {
            deleting = true;
            loop();
          }, 1000);
        }
      } else {
        if (i > 0) {
          setTypedCommand(command.slice(0, i - 1));
          i--;
          timeout = setTimeout(loop, 80);
        } else {
          deleting = false;
          timeout = setTimeout(loop, 800);
        }
      }
    };

    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-6 py-8 bg-black text-white"
    >
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
          <span className="animate-pulse">█</span>
        </pre>
      </div>

      <div className="w-full max-w-5xl space-y-8">
        {/* Backend Architecture */}
        <SkillSection title="🧩 Backend Architecture">
          <Skill icon={<FaNodeJs />} name="Node.js" />
          <Skill icon={<SiDjango />} name="Django REST" />
          <Skill icon={<SiNestjs />} name="NestJS" />
          <Skill icon={<SiExpress />} name="Express.js" />
          <Skill icon={<SiGo />} name="Gin (Go)" />
          <Skill icon={<SiPrisma />} name="Prisma ORM" />
          <Skill icon={<SiPostgresql />} name="PostgreSQL" />
          <Skill icon={<SiMongodb />} name="MongoDB" />
          <Skill icon={<SiRedis />} name="Redis" />
        </SkillSection>

        {/* Frontend Craft */}
        <SkillSection title="🌐 Frontend Craft">
          <Skill icon={<SiReact />} name="React" />
          <Skill icon={<SiTailwindcss />} name="TailwindCSS" />
        </SkillSection>

        {/* Cloud & DevOps */}
        <SkillSection title="☁️ Cloud & DevOps">
          <Skill icon={<SiDocker />} name="Docker" />
          <Skill icon={<SiKubernetes />} name="Kubernetes" />
          <Skill icon={<SiNginx />} name="Nginx" />
          <Skill icon={<FaAws />} name="AWS" />
          <Skill icon={<SiPrometheus />} name="Prometheus" />
          <Skill icon={<SiGrafana />} name="Grafana" />
          <Skill icon={<FaGithub />} name="GitHub Actions" />
          <Skill icon={<FaLinux />} name="Linux Systems" />
          <Skill icon={<FaGithub />} name="CI/CD" />
        </SkillSection>
      </div>
    </section>
  );
}

function SkillSection({ title, children }) {
  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold mb-3">
        <span className="text-green-400">#</span> {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-1 text-green-400">{icon}</div>
      <p className="text-white text-center text-sm">{name}</p>
    </div>
  );
}
