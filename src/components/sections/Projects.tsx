import { useNavigate } from "react-router-dom";
import { PROJECTS, type Project } from "../../constants/projects";

function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      className="
      relative overflow-hidden
      bg-[#2a0f0f]/70 border border-[#3b1e1e] rounded-2xl
      p-8 px-10

      grid grid-cols-1 md:grid-cols-[1fr_auto]
      gap-8 items-start

      hover:-translate-y-1 hover:border-red-500/40
      hover:shadow-[0_20px_60px_rgba(0,0,0,.4)]
      transition-all duration-300
      group
      "
    >
      <div
        className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-br from-red-500/[0.04] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      "
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 font-intel text-[0.7rem] text-red-400">
          <span className="bg-red-950/30 border border-red-500/20 px-2 py-0.5 rounded-[4px]">
            {project.type}
          </span>
          <span className="text-[#966d6d]">· {project.period}</span>
        </div>

        <h3 className="font-syne font-bold text-[1.4rem] text-[#F1F5F9] mb-3">
          {project.title}
        </h3>

        <p className="text-[#966d6d] text-[0.95rem] leading-[1.75] mb-5 break-keep">
          {project.desc}
        </p>

        <ul className="mb-5 flex flex-col gap-1.5">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="text-[#966d6d] text-[0.875rem] pl-4 relative
              before:absolute before:left-0 before:content-['▸'] before:text-red-500 break-keep"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                bg-[#271111] border border-[#3b1e1e] text-[#966d6d]
                rounded-[5px] px-2.5 py-0.5 text-[0.75rem]
                group-hover:text-red-300 group-hover:border-red-500/25
                break-keep
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className="
        relative z-10
        flex flex-row md:flex-col
        gap-3
        w-full md:w-auto
        "
      >
        {" "}
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center
              px-4 py-2 rounded-lg text-[0.8rem]
              border transition-all duration-200
              whitespace-nowrap
              break-keep
              ${
                link.primary
                  ? "bg-red-950/30 border-red-500/30 text-red-300 hover:bg-red-500/25"
                  : "bg-transparent border-[#3b1e1e] text-[#8b6464] hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/[0.06]"
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="py-28 ">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-3 text-[0.75rem] text-red-500 tracking-[.2em]">
          PROJECTS
          <div className="flex-1 h-px bg-red-900/50" />
        </div>

        <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,2.575rem)] tracking-tight mb-14 text-white">
          프로젝트
        </h2>

        {/* list */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
