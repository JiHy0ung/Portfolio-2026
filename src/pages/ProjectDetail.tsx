import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PROJECTS } from "../constants/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const goToProjects = () => {
    navigate("/");
    // 메인 페이지 렌더링 후 스크롤
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-syne text-2xl text-white/40">
          프로젝트를 찾을 수 없어요
        </p>
        <button
          onClick={goToProjects}
          className="font-intel text-sm text-red-400 border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-colors"
        >
          ← 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080304] text-[#f9f1f2]">
      <div className="max-w-[900px] mx-auto px-8 pt-32 pb-16">
        <button
          onClick={goToProjects}
          className="
            flex items-center gap-2 mb-12
            font-intel text-[0.75rem] text-[#8b6468] tracking-[.1em]
            hover:text-red-400 transition-colors duration-200
            group
          "
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
          BACK TO PROJECTS
        </button>

        {/* 타입 + 기간 */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-intel text-[0.7rem] text-red-400 tracking-[.12em] bg-red-950/30 border border-red-500/20 px-2.5 py-1 rounded-[4px]">
            {project.type}
          </span>
          <span className="font-intel text-[0.7rem] text-[#867171] tracking-[.08em]">
            {project.period}
          </span>
        </div>

        {/* 제목 */}
        <h1 className="font-syne font-black text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.05] mb-6">
          {project.title}
        </h1>

        {/* 한 줄 설명 */}
        <p className="text-[#867171] text-lg leading-relaxed mb-10 max-w-[600px]">
          {project.desc}
        </p>

        {/* 링크 버튼 */}
        <div className="flex gap-3 flex-wrap">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.primary
                  ? "h-10 flex items-center gap-2 px-5 py-2 bg-red-800 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  : "h-10 flex items-center gap-2 px-5 py-2 border border-[#3b1e20] hover:border-red-500/40 hover:text-red-400 text-[#b89494] text-sm font-medium rounded-lg transition-all duration-200"
              }
            >
              {link.label.toLowerCase().includes("github") && (
                <svg
                  height="16"
                  viewBox="0 0 416 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <g clipPath="url(#clip0_731_27173)">
                    <path d="M41.6394 69.3848C29.0066 67.8535 20.1062 58.7617 20.1062 46.9902C20.1062 42.2051 21.8289 37.0371 24.7 33.5918C23.4558 30.4336 23.6472 23.7344 25.0828 20.959C28.9109 20.4805 34.0789 22.4902 37.1414 25.2656C40.7781 24.1172 44.6062 23.543 49.2957 23.543C53.9851 23.543 57.8132 24.1172 61.2585 25.1699C64.2253 22.4902 69.489 20.4805 73.3171 20.959C74.657 23.543 74.8484 30.2422 73.6042 33.4961C76.6667 37.1328 78.2937 42.0137 78.2937 46.9902C78.2937 58.7617 69.3933 67.6621 56.5691 69.2891C59.823 71.3945 62.0242 75.9883 62.0242 81.252L62.0242 91.2051C62.0242 94.0762 64.4167 95.7031 67.2878 94.5547C84.6101 87.9512 98.2 70.6289 98.2 49.1914C98.2 22.1074 76.1882 6.69539e-07 49.1042 4.309e-07C22.0203 1.92261e-07 0.199951 22.1074 0.199951 49.1914C0.199951 70.4375 13.6941 88.0469 31.8777 94.6504C34.4617 95.6074 36.95 93.8848 36.95 91.3008L36.95 83.6445C35.6101 84.2188 33.8875 84.6016 32.3562 84.6016C26.0398 84.6016 22.3074 81.1563 19.6277 74.7441C18.575 72.1602 17.4265 70.6289 15.2253 70.3418C14.0769 70.2461 13.6941 69.7676 13.6941 69.1934C13.6941 68.0449 15.6082 67.1836 17.5222 67.1836C20.2976 67.1836 22.6902 68.9063 25.1785 72.4473C27.0925 75.2227 29.1023 76.4668 31.4949 76.4668C33.8875 76.4668 35.4187 75.6055 37.6199 73.4043C39.2468 71.7773 40.491 70.3418 41.6394 69.3848Z" />
                    <g clipPath="url(#clip1_731_27173)">
                      <path d="M188.937 83.0045L188.937 33.2827L202.915 33.2827L202.915 83.0045L188.937 83.0045ZM230.016 83.0045C220.727 83.0045 217.099 79.0232 217.099 70.6183L217.099 44.9611L208.252 44.9611L208.252 33.2827L217.099 33.2827L217.099 23.3737L231.078 20.1002L231.078 33.2827L241.429 33.2827L241.429 44.9611L231.078 44.9611L231.078 67.5217C231.078 70.2644 232.317 71.3261 235.059 71.3261L241.429 71.3261L241.429 83.0045L230.016 83.0045ZM327.47 83.8892C316.588 83.8892 310.66 77.8731 310.66 66.9024L310.66 33.2827L324.728 33.2827L324.728 63.1866C324.728 69.2912 327.47 72.6532 332.69 72.6532C338.706 72.6532 343.307 67.0794 343.307 59.4707L343.307 33.2827L357.374 33.2827L357.374 83.0045L343.307 83.0045L343.307 74.5996C340.653 79.9964 334.283 83.8892 327.47 83.8892ZM394.613 83.8892C387.832 83.8892 381.639 79.9964 378.687 74.4226L378.687 83.0045L364.709 83.0045L364.709 13.6417L378.776 13.6417L378.776 42.3954C381.639 36.3792 388.098 32.1325 394.613 32.1325C408.181 32.1325 415.348 41.5107 414.873 58.0551C415.348 74.4226 407.916 83.8892 394.613 83.8892ZM389.658 72.1223C396.945 72.1223 400.926 66.7255 400.452 58.0551C400.926 49.2963 396.945 43.8994 389.658 43.8994C383.851 43.8994 379.251 49.5617 378.776 57.3473L378.776 58.1436C379.251 66.1946 383.851 72.1223 389.658 72.1223ZM288.734 13.6417L288.734 41.7761L262.369 41.7761L262.369 13.6417L247.329 13.6417L247.329 83.0045L262.369 83.0045L262.369 55.224L288.734 55.224L288.734 83.0045L303.775 83.0045L303.775 13.6417L288.734 13.6417ZM150.628 84.3316C130.102 84.3316 117.185 70.2644 117.185 48.2346C117.185 26.2048 130.368 12.3146 151.247 12.3146C168.234 12.3146 178.497 19.5693 181.77 31.7786L166.553 35.406C164.695 28.7705 159.387 25.1431 151.247 25.1431C139.126 25.1431 132.579 33.1057 132.579 48.2346C132.579 63.3635 138.949 71.503 150.893 71.503C161.864 71.503 168.411 64.7791 168.411 53.366L168.411 50.7119L172.304 56.1087L149.655 56.1087L149.655 43.3686L183.628 43.3686L183.628 51.4196C183.628 72.5647 171.331 84.3316 150.628 84.3316ZM195.926 28.5936C200.615 28.5936 204.243 24.9662 204.243 20.2771C204.243 15.5881 200.615 11.9607 195.926 11.9607C191.237 11.9607 187.61 15.5881 187.61 20.2771C187.61 24.9662 191.237 28.5936 195.926 28.5936Z" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_731_27173">
                      <rect width="416" height="95" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_731_27173">
                      <rect
                        width="298.068"
                        height="75.9408"
                        fill="white"
                        transform="translate(117.185 9.49258)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}

              {link.label.toLowerCase().includes("라이브 데모") && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5  m-[-5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  {link.label}
                </>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* ── 구분선 ── */}
      <div className="border-t border-[#3b1e20]" />

      <div className="max-w-[900px] mx-auto px-8 py-16 flex flex-col gap-16">
        {/* ── 01 팀 구성 ── */}
        <Section label="01" title="팀 구성">
          <div className="flex gap-4 flex-wrap">
            {project.team.map((t) => (
              <div
                key={t.role}
                className="bg-[#2a0f0f] border border-[#3b1e20] rounded-xl px-6 py-4 text-center min-w-[120px]"
              >
                <div className="font-syne font-bold text-2xl text-red-400 mb-1">
                  {t.count}
                </div>
                <div className="font-intel text-xs text-[#867171] tracking-[.08em]">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 02 프로젝트 배경 ── */}
        <Section label="02" title="프로젝트 배경">
          <p className="text-[#b89494] leading-[1.95] text-[1rem]">
            {project.background}
          </p>
          <div className="mt-6 border-l-2 border-red-500 pl-5 bg-red-950/10 py-4 rounded-r-lg">
            <p className="text-[#e1cbcb] leading-[1.85] text-[0.95rem] italic">
              {project.overview}
            </p>
          </div>
        </Section>

        {/* ── 03 내가 맡은 역할 ── */}
        <Section
          label="03"
          title={
            project.type === "팀 프로젝트" ? "내가 맡은 역할" : "개발 과정"
          }
        >
          <ul className="flex flex-col gap-3">
            {project.myRole.map((role, i) => (
              <li key={i} className="flex items-start gap-3">
                <span key={i} className="text-red-500 text-[0.875rem]">
                  ▸
                </span>
                <span className="text-[#b89494] leading-relaxed text-[0.95rem]">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── 04 기술 스택 ── */}
        <Section label="04" title="기술 스택">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.techDetail.map((cat) => (
              <div
                key={cat.category}
                className="bg-[#2a0f0f] border border-[#3b1e20] rounded-xl p-5 hover:border-red-500/30 transition-colors duration-200"
              >
                <div className="font-intel text-[0.65rem] text-red-400 tracking-[.12em] mb-3">
                  {cat.category.toUpperCase()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="bg-red-950/20 border border-red-500/15 text-red-200 text-[0.78rem] font-intel px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 05 기술적 어려움 & 해결 ── */}
        <Section label="05" title="기술적 어려움 & 해결">
          <div className="flex flex-col gap-5">
            {project.challenges.map((c, i) => (
              <div
                key={i}
                className="bg-[#2a0f0f] border border-[#3b1e20] rounded-xl p-6 hover:border-red-500/25 transition-colors duration-200"
              >
                {/* 문제 */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-900/40 border border-red-500/30 flex items-center justify-center text-[0.6rem] text-red-400 font-intel">
                    !
                  </span>
                  <div className="pt-1">
                    <div className="font-intel text-[0.65rem] text-red-400 tracking-[.1em] mb-1.5">
                      PROBLEM
                    </div>
                    <p className="text-[#b89494] text-[0.9rem] leading-relaxed">
                      {c.problem}
                    </p>
                  </div>
                </div>
                {/* 해결 */}
                <div className="flex items-start gap-3 pl-8 border-t border-[#3b1e20] pt-4">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-900/40 border border-red-500/30 flex items-center justify-center text-[0.6rem] text-red-400 font-intel">
                    ✓
                  </span>
                  <div className="pt-1">
                    <div className="font-intel text-[0.65rem] text-red-400 tracking-[.1em] mb-1.5">
                      SOLUTION
                    </div>
                    <p className="text-[#b89494] text-[0.9rem] leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 06 스크린샷 ── */}
        {project.images.length > 0 && (
          <Section label="06" title="라이브 데모">
            {/* 메인 이미지 */}
            <div className="rounded-xl overflow-hidden border border-[#3b1e20] bg-[#2a0f0f] mb-4">
              {!imageError ? (
                <img
                  src={project.images[activeImg].src}
                  alt={project.images[activeImg].alt}
                  className="w-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-[#210d0d]">
                  <div className="text-center">
                    <div className="font-intel text-[0.7rem] text-[#553333] tracking-[.1em] mb-2">
                      SCREENSHOT
                    </div>
                    <div className="text-[#3b1e20] font-syne text-sm">
                      {project.images[activeImg].alt}
                    </div>
                  </div>
                </div>
              )}
              {project.images[activeImg].caption && (
                <p className="font-intel text-[0.72rem] text-[#867171] tracking-[.05em] px-5 py-3 border-t border-[#3b1e20]">
                  {project.images[activeImg].caption}
                </p>
              )}
            </div>

            {/* 썸네일 */}
            {project.images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`
                      rounded-lg overflow-hidden border transition-all duration-200 w-20 aspect-video bg-[#2a0f0f]
                      flex items-center justify-center
                      ${
                        activeImg === i
                          ? "border-red-500 ring-1 ring-red-500/40"
                          : "border-[#3b1e20] hover:border-red-500/40 opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </Section>
        )}

        {/* ── 하단 네비 ── */}
        <div className="pt-4 border-t border-[#3b1e20] flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="font-intel text-[0.75rem] text-[#867171] hover:text-red-400 tracking-[.08em] transition-colors duration-200 flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            모든 프로젝트
          </button>

          {/* 다음 프로젝트 */}
          {(() => {
            const idx = PROJECTS.findIndex((p) => p.id === Number(id));
            const next = PROJECTS[idx + 1];
            return next ? (
              <button
                onClick={() => navigate(`/projects/${next.id}`)}
                className="font-intel text-[0.75rem] text-[#867171] hover:text-red-400 tracking-[.08em] transition-colors duration-200 flex items-center gap-2 group text-right"
              >
                <span className="text-[#553333] text-[0.65rem]">NEXT</span>
                {next.title}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            ) : null;
          })()}
        </div>
      </div>
    </div>
  );
};

// ── 섹션 래퍼 ──────────────────────────────────────────────────
function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#3b1e20]">
        <strong className="font-intel text-[0.875rem] text-red-400 tracking-[.1em]">
          {label}
        </strong>
        <h2 className="font-syne font-bold text-xl tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default ProjectDetail;
