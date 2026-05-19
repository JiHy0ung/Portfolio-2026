interface Project {
  type: string;
  year: string;
  title: string;
  desc: string;
  bullets: string[];
  tech: string[];
  links: { label: string; href: string; primary?: boolean }[];
}

const PROJECTS: Project[] = [
  {
    type: "팀 프로젝트",
    year: "2026",
    title: "방방곡곡 (BangBang Trip)",
    desc: "한국관광공사 Tour API와 AI를 활용한 국내 여행 정보 조회 및 여행 일정 생성 서비스",
    bullets: [
      "한국관광공사 Tour API 연동으로 여행지 조회 및 AI 기반 일정 생성 구현",
      "Supabase Auth를 활용한 소셜 로그인 및 사용자 데이터 관리",
      "TanStack Query 도입으로 서버 상태 관리 및 API 캐싱 최적화",
      "Vercel CI/CD 자동 배포 파이프라인 구성",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "TanStack Query",
      "Supabase",
      "Tour API",
    ],
    links: [
      {
        label: "라이브 데모",
        href: "https://bangbang-trip.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/SoYoungLEE-me/bangbang-trip",
      },
    ],
  },
  {
    type: "팀 프로젝트",
    year: "2025",
    title: "TidyMind",
    desc: "AI 기반 메모 자동 분류 및 할 일 관리 애플리케이션",
    bullets: [
      "AI 기반 메모 자동 분류 기능",
      "음성 메모 입력 기능",
      "Google OAuth + Cloudinary 이미지 업로드",
      "Husky + lint-staged 코드 품질 자동화",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "FullCalendar",
      "Cloudinary",
    ],
    links: [
      {
        label: "라이브 데모",
        href: "https://tidymind-ai.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/JiHy0ung/tidy-mind-fe" },
    ],
  },
  {
    type: "개인 프로젝트",
    year: "2024",
    title: "나이키 클론 코딩",
    desc: "Nike 공식 사이트 UI 클론",
    bullets: ["컴포넌트 단위 구조 설계", "React Router 기반 SPA 라우팅"],
    tech: ["React", "JavaScript", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/JiHy0ung" }],
  },
  {
    type: "개인 프로젝트",
    year: "2024",
    title: "스포티파이 클론 코딩",
    desc: "Spotify 웹 플레이어 UI 클론",
    bullets: ["CSS Grid/Flex 레이아웃 구현", "오디오 플레이어 UI 인터랙션"],
    tech: ["React", "JavaScript", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/JiHy0ung" }],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        relative overflow-hidden
        bg-[#2a0f0f]/70 border border-[#3b1e1e] rounded-2xl
        p-8 px-10
        grid grid-cols-[1fr_auto] gap-8 items-start
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
          <span className="text-[#966d6d]">· {project.year}</span>
        </div>

        <h3 className="font-syne font-bold text-[1.4rem] text-[#F1F5F9] mb-3">
          {project.title}
        </h3>

        <p className="text-[#966d6d] text-[0.95rem] leading-[1.75] mb-5">
          {project.desc}
        </p>

        <ul className="mb-5 flex flex-col gap-1.5">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="text-[#966d6d] text-[0.875rem] pl-4 relative
              before:absolute before:left-0 before:content-['▸'] before:text-red-500"
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
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 min-w-[110px]">
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
    <section className="py-28 ">
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
