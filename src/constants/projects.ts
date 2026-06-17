export interface Project {
  type: string;
  year: string;
  title: string;
  desc: string;
  bullets: string[];
  tech: string[];
  links: { label: string; href: string; primary?: boolean }[];
}

export const PROJECTS: Project[] = [
  {
    type: "개인 프로젝트 · 진행 중",
    year: "2026",
    title: "Trace Blog",
    desc: "Next.js와 Supabase를 활용한 개발 블로그 및 TIL 기록 플랫폼",
    bullets: [
      "Next.js App Router 기반 SSR/SSG 환경 구축",
      "Supabase Auth를 활용한 GitHub OAuth 관리자 로그인 구현",
      "Markdown 에디터 기반 게시글 작성 및 관리 기능 개발",
      "다크 모드 지원 및 반응형 UI 구현",
      "Vercel 배포 및 CI/CD 환경 구성",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    links: [
      {
        label: "라이브 데모",
        href: "https://trace-yjh.vercel.app",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/JiHy0ung/trace",
      },
    ],
  },
  {
    type: "팀 프로젝트",
    year: "2026",
    title: "방방곡곡",
    desc: "한국관광공사 Tour API와 AI를 활용한 국내 여행 정보 조회 및 여행 일정 생성 서비스",
    bullets: [
      "한국관광공사 Tour API 연동으로 여행지 조회 및 AI 기반 일정 생성 구현",
      "Supabase Auth를 활용한 소셜 로그인 및 사용자 데이터 관리",
      "TanStack Query 도입으로 서버 상태 관리 및 API 캐싱 최적화",
      "Vercel CI/CD 자동 배포 파이프라인 구성",
    ],
    tech: ["React", "TypeScript", "Vite", "MUI", "TanStack Query", "Supabase"],
    links: [
      {
        label: "라이브 데모",
        href: "https://bangbang-trip.vercel.app/",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/JiHy0ung/bangbang-trip",
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
    tech: ["React", "TypeScript", "Redux Toolkit", "MUI", "Cloudinary"],
    links: [
      {
        label: "라이브 데모",
        href: "https://tidymind-ai.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/JiHy0ung/tidy-mind-fe" },
    ],
  },
];
