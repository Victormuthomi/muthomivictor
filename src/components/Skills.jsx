import { useEffect, useState } from "react";
import {
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiGo,
  SiDjango,
  SiGin,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiRabbitmq,
  SiApachekafka,
} from "react-icons/si";
import ManualScrollHint from "./ManualScrollHint";

export default function Skills() {
  const [typedCommand, setTypedCommand] = useState("");
  const command = "cat skills.txt";

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
      className="flex flex-col items-center justify-center px-6 py-16 bg-black text-white"
    >
      {/* Terminal command */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ muthomivictor | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="animate-pulse">█</span>
        </pre>
      </div>

      <div className="w-full max-w-4xl mb-6 block md:hidden">
        <ManualScrollHint />
      </div>

      <div className="w-full max-w-5xl space-y-12">
        {/* Backend Section */}
        <SkillSection title="Backend & Developer Skills">
          <Skill icon={<FaNodeJs />} name="Node.js" />
          <Skill icon={<SiGo />} name="Go" />
          <Skill icon={<FaPython />} name="Python" />
          <Skill icon={<SiGin />} name="Gin (Go)" />
          <Skill icon={<SiDjango />} name="Django" />
          <Skill icon={<SiPostgresql />} name="PostgreSQL" />
          <Skill icon={<SiMongodb />} name="MongoDB" />
          <Skill icon={<SiRedis />} name="Redis" />
          <Skill icon={<FaGithub />} name="Git & GitHub" />
          <Skill icon={<SiNginx />} name="Nginx" />
          <Skill icon={<SiDocker />} name="Docker (backend context)" />
          <Skill icon={<FaLinux />} name="Linux" />
        </SkillSection>

        {/* Cloud & DevOps Section */}
        <SkillSection title="Cloud & DevOps Skills">
          <Skill icon={<SiKubernetes />} name="Kubernetes" />
          <Skill icon={<SiTerraform />} name="Terraform" />
          <Skill icon={<SiAnsible />} name="Ansible" />
          <Skill icon={<SiPrometheus />} name="Prometheus" />
          <Skill icon={<SiGrafana />} name="Grafana" />
          <Skill icon={<FaAws />} name="AWS" />
          <Skill icon={<FaGithub />} name="CI/CD Basics" />
          <Skill icon={<SiRabbitmq />} name="RabbitMQ" />
          <Skill icon={<SiApachekafka />} name="Kafka" />
        </SkillSection>
      </div>

      <div className="w-full max-w-4xl mt-6 hidden md:block">
        <ManualScrollHint />
      </div>
    </section>
  );
}

function SkillSection({ title, children }) {
  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-green-400">#</span> {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-2 text-green-400">{icon}</div>
      <p className="text-white">{name}</p>
    </div>
  );
}
