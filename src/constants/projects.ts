export interface TeamMember {
  role: string;
  count: number;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string; // URL용 식별자
  type: string;
  year: string;
  title: string;

  // 카드용
  desc: string;
  bullets: string[];
  tech: string[];
  links: { label: string; href: string; primary?: boolean }[];

  // 디테일 페이지용
  overview: string;
  background: string;
  period: string;
  team: TeamMember[];
  myRole: string[];
  techDetail: { category: string; items: string[] }[];
  challenges: ProjectChallenge[];
  images: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "trace",
    type: "개인 프로젝트 · 진행 중",
    year: "2026",
    title: "Trace Blog",
    desc: "학습 기록의 지속성과 접근성을 높이기 위해 직접 설계·구축한 TIL 블로그 플랫폼",
    bullets: [
      "Next.js App Router 서버 컴포넌트를 활용해 클라이언트 번들 최소화 및 초기 로딩 성능 개선",
      "RLS(Row Level Security) 정책 설계로 인증 없이 DB에 직접 접근하는 보안 취약점 차단",
      "GitHub Actions 기반 CI 파이프라인 구축으로 타입 에러·린트 오류가 배포되는 것을 사전 차단",
      "Hydration Mismatch 문제를 useSyncExternalStore로 해결해 다크 모드 깜빡임 현상 제거",
      "Supabase Auth GitHub OAuth로 관리자 권한을 환경변수 기반으로 분리해 보안 구조 설계",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "GitHub Actions",
    ],
    links: [
      {
        label: "라이브 데모",
        href: "https://trace-yjh.vercel.app",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/JiHy0ung/trace" },
    ],

    overview:
      "단순히 블로그를 운영하는 것이 아니라, 실제 서비스를 혼자 설계·구현·배포하는 경험을 목표로 만든 TIL 플랫폼. 기능 구현보다 '왜 이 구조를 선택했는가'를 고민하며 Next.js App Router의 렌더링 전략, Supabase의 보안 정책, CI/CD 파이프라인까지 직접 결정하고 적용했습니다.",
    background:
      "기존 블로그 플랫폼은 학습 기록을 체계적으로 관리하기 어렵고, 직접 만들어보지 않으면 알 수 없는 영역이 있다고 판단했습니다. 프론트엔드 개발자로서 단순 UI 구현을 넘어 인증, DB 설계, 보안, 배포 자동화까지 전체 흐름을 이해하는 것을 목표로 시작했습니다.",
    period: "2026.05 — 진행 중",
    team: [{ role: "개인 개발", count: 1 }],
    myRole: [
      "서비스 전체 기획 및 기술 스택 선정",
      "Next.js App Router 기반 렌더링 전략 설계 및 구현",
      "Supabase PostgreSQL DB 스키마 설계 및 RLS 보안 정책 구성",
      "GitHub OAuth 기반 관리자 인증 및 권한 분리 구현",
      "Markdown 에디터 기반 게시글 CRUD 구현",
      "useSyncExternalStore 활용 다크 모드 Hydration 문제 해결",
      "GitHub Actions CI + Vercel CD 파이프라인 구성",
    ],
    techDetail: [
      { category: "Framework", items: ["Next.js (App Router)", "TypeScript"] },
      { category: "Style", items: ["Tailwind CSS"] },
      { category: "Backend / DB", items: ["Supabase", "PostgreSQL"] },
      { category: "Auth", items: ["GitHub OAuth (Supabase Auth)"] },
      { category: "Infra", items: ["Vercel", "GitHub Actions"] },
    ],
    challenges: [
      {
        problem:
          "next-themes 적용 시 서버·클라이언트 간 theme 값 불일치로 Hydration Mismatch 발생. 초기 렌더링 시 다크 모드 UI가 깜빡이는 현상이 나타남.",
        solution:
          "mounted 상태로 클라이언트 마운트 이후에만 theme UI를 렌더링하도록 수정. 이후 별도 useState 없이 useSyncExternalStore로 마운트 여부를 판별하도록 리팩토링해 불필요한 상태 관리를 제거하고 ESLint 경고도 해결함.",
      },
      {
        problem:
          "GitHub Actions CI 환경에서 .next/ 폴더가 없어 tsc --noEmit 실행 시 PNG 모듈 타입 선언을 찾지 못해 타입 에러 발생. 로컬에서는 정상 동작하던 코드가 CI에서만 실패하는 환경 차이 문제.",
        solution:
          "CI 환경과 로컬 환경의 차이를 분석해 next-env.d.ts 의존 대신 images.d.ts에 PNG 모듈 타입을 전역 선언함으로써 환경에 관계없이 일관된 타입 체크가 가능하도록 해결함.",
      },
    ],
    images: [
      {
        src: "/images/trace-1.png",
        alt: "메인 화면(다크)",
        caption: "Trace 블로그 메인",
      },
      {
        src: "/images/trace-2.png",
        alt: "메인 화면(라이트)",
        caption: "Trace 블로그 메인",
      },
      {
        src: "/images/trace-3.png",
        alt: "글 작성(라이트)",
        caption: "Markdown 에디터",
      },
    ],
  },

  {
    id: 2,
    slug: "soksom",
    type: "공모전 · 진행 중",
    year: "2026",
    title: "속솜",
    desc: "제주도 오버투어리즘 해소를 위한 혼잡 회피형 스마트 관광 루트 추천 서비스",
    bullets: [
      "Kakao Maps SDK 연동 및 커스텀 SVG 마커·동적 색상 인코딩 구현",
      "Zustand 기반 전역 상태 관리 (관심 스팟, 경유지, UI 상태)",
      "TanStack Query + useMutation으로 API 호출 및 서버 상태 관리",
      "Kakao Mobility API 다중 경유지 길찾기 및 도로 오류 fallback 훅 구현",
      "폴리라인 기반 지도 경로 시각화 구현",
      "react-dnd 드래그앤드롭 경유지 순서 변경 기능 개발",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Kakao Maps SDK",
      "Tailwind CSS",
    ],
    links: [{ label: "GitHub", href: "https://github.com/colaage23/soksom" }],

    overview:
      "제주도의 오버투어리즘 문제를 해결하기 위해 혼잡도 데이터를 기반으로 덜 붐비는 관광 루트를 추천하는 서비스입니다. 카카오 지도 위에서 루트를 시각화하고, 경유지를 자유롭게 편집할 수 있습니다.",
    background:
      "제주도 유명 관광지의 극심한 혼잡 문제를 공모전 주제로 접하면서 시작됐습니다. 공공 관광 API와 혼잡도 데이터를 결합해 사용자에게 대안 루트를 제시하는 서비스를 기획했습니다.",
    period: "2026.05 — 진행 중",
    team: [
      { role: "프론트엔드", count: 2 },
      { role: "백엔드", count: 2 },
    ],
    myRole: [
      "전체 화면 UI 설계",
      "Kakao Maps SDK 연동 및 커스텀 SVG 마커 + 동적 색상 인코딩 구현",
      "Zustand 스토어 설계 (useSpotStore, useLikedSpotStore, useWayPointStore)",
      "TanStack Query useMutation 기반 API 호출 패턴 구축",
      "Kakao Mobility API 다중 경유지 길찾기 + 도로 오류 fallback 훅 (useDirectionWithFallback) 구현",
      "react-dnd 드래그앤드롭 경유지 순서 변경 기능 개발",
      "폴리라인 기반 지도 경로 시각화 구현",
    ],
    techDetail: [
      { category: "Frontend", items: ["React", "TypeScript", "Vite"] },
      { category: "State", items: ["Zustand", "TanStack Query"] },
      {
        category: "API",
        items: [
          "Kakao Maps SDK",
          "Kakao Mobility API",
          "한국관광공사 API",
          "Axios",
        ],
      },
      { category: "Style", items: ["Tailwind CSS"] },
      { category: "UX", items: ["react-dnd (드래그앤드롭)"] },
    ],
    challenges: [
      {
        problem:
          "Kakao Mobility API에서 도로 오류(e.g. 통행 불가 경로) 발생 시 길찾기 전체 실패",
        solution:
          "useDirectionWithFallback 훅을 만들어 오류 감지 시 가장 가까운 주차장 좌표로 자동 대체 재요청하는 fallback 로직을 구현.",
      },
      {
        problem:
          "지도 사이드바 토글 시 Kakao Maps가 resize를 감지하지 못해 지도가 깨지는 문제",
        solution:
          "사이드바 애니메이션 종료 후 kakao.maps.Map.relayout()을 호출해 지도 크기를 강제 재계산하도록 처리.",
      },
    ],
    images: [
      {
        src: "/images/soksom-1.png",
        alt: "홈",
        caption: "홈 페이지",
      },
      {
        src: "/images/soksom-2.png",
        alt: "탐색 페이지",
        caption: "관광지 목록(검색, 카테고리) & 카카오 지도",
      },
    ],
  },

  {
    id: 3,
    slug: "tidymind",
    type: "팀 프로젝트",
    year: "2025",
    title: "TidyMind",
    desc: "AI 기반 메모 자동 분류 및 할 일 관리 애플리케이션",
    bullets: [
      "OpenAI GPT-4o-mini 기반 메모 자동 분류 및 우선순위·마감일 할당",
      "JWT + Google OAuth 기반 인증 시스템 구축",
      "음성 메모 입력 및 Cloudinary 이미지 업로드",
      "Heatmap 표시를 위한 완료 항목 일별 집계 API 구현",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: [
      {
        label: "라이브 데모",
        href: "https://tidymind-ai.vercel.app/",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/JiHy0ung/tidy-mind-fe" },
    ],

    overview:
      "빠르게 메모하고 AI가 자동으로 분류해주는 생산성 애플리케이션입니다. 입력한 메모는 OpenAI GPT-4o-mini가 Task, Reminder, Idea, Work, Goal, Personal 등으로 자동 분류하고, 우선순위에 따라 마감일까지 자동으로 설정합니다. 음성 입력, 이미지 첨부, 월별 완료 항목 Heatmap까지 지원합니다.",
    background:
      "메모는 빠르게 쌓이지만 정리에 드는 노력 때문에 방치되기 쉽다는 문제에서 출발했습니다. 입력 즉시 AI가 카테고리와 우선순위를 판단해 분류·정리하도록 해 '기록 후 방치'를 줄이는 것을 목표로 했습니다.",
    period: "2025.08.17 — 2025.08.31 (2주)",
    team: [{ role: "풀스택", count: 4 }],
    myRole: [
      "FE — react-speech-recognition을 활용한 음성 메모 입력 기능 구현 및 배포 환경 호환성 이슈 해결",
      "FE — Cloudinary 이미지 업로드 구현",
      "FE — FullCalendar 연동 및 Task Board(미완료 우선 정렬) 구현",
      "BE — GET /api/notes/status 엔드포인트 설계 및 구현 (Heatmap용 일별 완료 집계 API)",
      "BE — 요청 연도·월 유효성 검사 및 에러 처리 구현",
    ],
    techDetail: [
      { category: "Frontend", items: ["React 19", "TypeScript", "Vite 7"] },
      { category: "State", items: ["Redux Toolkit"] },
      { category: "Routing", items: ["React Router DOM 7"] },
      { category: "UI / Style", items: ["MUI 7", "Emotion"] },
      {
        category: "기능",
        items: ["react-speech-recognition", "Cloudinary", "react-oauth/google"],
      },
      { category: "Calendar", items: ["FullCalendar", "daygrid"] },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      },
      {
        category: "Auth (Backend)",
        items: ["jsonwebtoken", "bcryptjs", "google-auth-library"],
      },
      {
        category: "AI (Backend)",
        items: ["OpenAI GPT-4o-mini", "@ai-sdk/openai"],
      },
      { category: "Utils", items: ["date-fns", "axios", "lucide-react"] },
      {
        category: "Code Quality",
        items: ["ESLint 9", "Prettier 3", "Husky", "lint-staged"],
      },
    ],
    challenges: [
      {
        problem:
          "로컬 환경에서는 정상 동작하던 음성 인식 기능이 Vercel 배포 후에는 동작하지 않는 문제가 발생. HTTPS 환경 여부, Safari의 제한적인 Web Speech API 지원, 마이크 권한 처리 등 배포 환경에서만 드러나는 변수들이 얽혀 있어 원인 파악이 까다로웠음.",
        solution:
          "HTTPS/localhost 여부를 사전에 체크하고, Safari 브라우저를 감지해 별도 안내를 제공. getUserMedia로 마이크 권한을 명시적으로 요청해 권한 거부·장치 없음 등의 케이스를 구분 처리하고, 각 상황에 맞는 토스트 메시지로 사용자에게 안내해 배포 환경에서도 안정적으로 동작하도록 수정함.",
      },
      {
        problem:
          "캘린더의 월별 완료 항목 Heatmap을 구현하면서 직접 만든 백엔드 API(GET /notes/status)를 프론트에 연동하는 과정에서, API 경로 누락(선행 슬래시 오류)으로 요청이 실패하고 completion 필드가 없는 노트가 있을 경우 캘린더 렌더링이 깨지는 문제를 발견.",
        solution:
          "API 경로를 점검해 일관된 엔드포인트 형식으로 수정하고, completion 필드가 없는 경우 기본값을 채워 넣는 방어 로직을 추가. 추가로 테마(다크/라이트) 전환 시 캘린더 이벤트 색상이 갱신되지 않는 문제도 함께 발견해 해결.",
      },
    ],
    images: [
      {
        src: "/images/tidymind-1.png",
        alt: "대시보드",
        caption: "메모 대시보드",
      },
      {
        src: "/images/tidymind-2.png",
        alt: "컬렉션",
        caption: "컬렉션 뷰",
      },
      {
        src: "/images/tidymind-3.png",
        alt: "캘린더",
        caption: "일정 캘린더 뷰",
      },
    ],
  },
];

// {
//   id: 3,
//   slug: "bangbang",
//   type: "팀 프로젝트",
//   year: "2026",
//   title: "방방곡곡",
//   desc: "한국관광공사 Tour API와 Gemini AI를 활용한 국내 여행 정보 조회 및 사용자의 취향 맞춤 여행 일정 자동 생성 서비스",
//   bullets: [
//     "한국관광공사 Tour API 연동으로 여행지 조회 및 AI 기반 일정 생성 구현",
//     "Supabase Auth를 활용한 소셜 로그인 및 사용자 데이터 관리",
//     "TanStack Query 도입으로 서버 상태 관리 및 API 캐싱 최적화",
//     "Vercel CI/CD 자동 배포 파이프라인 구성",
//   ],
//   tech: ["React", "TypeScript", "Vite", "MUI", "TanStack Query", "Supabase"],
//   links: [
//     {
//       label: "라이브 데모",
//       href: "https://bangbang-trip.vercel.app/",
//       primary: true,
//     },
//     { label: "GitHub", href: "https://github.com/JiHy0ung/bangbang-trip" },
//   ],

//   overview:
//     "한국관광공사 Tour API와 AI를 연동해 국내 여행지 정보를 조회하고, 사용자 맞춤형 여행 일정을 자동으로 생성하는 웹 서비스입니다.",
//   background:
//     "여행 계획을 세울 때 정보 탐색과 일정 정리에 오랜 시간이 걸린다는 불편함에서 출발했습니다. AI를 활용해 이 과정을 자동화하고, 공공 API를 통해 신뢰할 수 있는 여행지 데이터를 제공하는 것을 목표로 했습니다.",
//   period: "2026.01.12 — 2026.01.23 (11일)",
//   team: [{ role: "프론트엔드", count: 4 }],
//   myRole: [
//     "PO(Product Owner) 역할 수행 및 서비스 기획 주도",
//     "사용자 스토리 작성 및 기능 우선순위 정의",
//     "AI 플래너 기능 기획 및 사용자 플로우 설계",
//     "공통 레이아웃 및 라우팅 구조 설계",
//     "관광지 상세 페이지 UI 및 API 연동 구현",
//     "한국관광공사 Tour API 연동 및 데이터 파싱 처리",
//     "TanStack Query를 활용한 서버 상태 관리 및 캐싱 최적화",
//   ],
//   techDetail: [
//     {
//       category: "Frontend",
//       items: [
//         "React",
//         "TypeScript",
//         "Vite",
//         "Zustand",
//         "Tanstack Query",
//         "React Router DOM",
//       ],
//     },
//     { category: "UI / Style", items: ["MUI (Material UI)"] },
//     {
//       category: "Backend (BaaS)",
//       items: ["Supabase (Auth / Database)", "PostgreSQL"],
//     },
//     { category: "API", items: ["한국관광공사 Tour API", "Gemini AI API"] },
//   ],
//   challenges: [
//     {
//       problem:
//         "Tour API 응답 구조가 관광지 유형마다 달라 데이터 파싱 과정에서 오류 발생",
//       solution:
//         "TypeScript 타입 정의와 Optional Chaining을 활용해 방어적인 파싱 로직을 구현함.",
//     },
//     {
//       problem:
//         "HTTPS 환경에서 외부 API 이미지가 Mixed Content 정책에 의해 차단되는 문제가 발생",
//       solution:
//         "이미지 URL을 HTTPS로 변환하는 유틸 함수를 작성해 모든 이미지 렌더링 과정에 적용했고, 배포 환경에서 발생하던 이미지 로드 실패 문제를 해결함.",
//     },
//   ],
//   images: [
//     {
//       src: "/images/bangbang-1.png",
//       alt: "메인 화면",
//       caption: "여행지 탐색 메인 화면",
//     },
//     {
//       src: "/images/bangbang-2.png",
//       alt: "탐색 페이지",
//       caption: "검색/필터링 기반 관광지 목록 조회",
//     },
//     {
//       src: "/images/bangbang-3.png",
//       alt: "일정 생성",
//       caption: "AI 기반 일정 자동 생성",
//     },
//   ],
// },
