import type { ReactNode } from "react";

type LevelKey = "상" | "중" | "하";

type SkillGroupType = {
  icon: ReactNode;
  title: string;
  tags: string[];
  levels: Record<LevelKey, string[]>;
};

const SKILL_GROUPS: SkillGroupType[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        className="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    title: "Frontend",
    tags: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Next.js"],
    levels: {
      상: ["React", "JavaScript ES6+", "TypeScript"],
      중: ["HTML / CSS"],
      하: ["Next.js"],
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Backend",
    tags: ["Node.js", "Express"],
    levels: {
      상: [],
      중: ["Node.js / Express"],
      하: [],
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    title: "Database",
    tags: ["MySQL", "Supabase", "PostgreSQL"],
    levels: {
      상: [],
      중: ["MySQL", "Supabase / PostgreSQL"],
      하: [],
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Tools",
    tags: ["Git", "GitHub", "Figma", "Notion", "Vercel", "VS Code", "Postman"],
    levels: {
      상: ["Git / GitHub (브랜치 기반 협업, PR workflow)"],
      중: ["Figma", "Notion ", "VS Code / Postman"],
      하: ["Vercel"],
    },
  },
];

function SkillGroup({ icon, title, tags, levels }: SkillGroupType) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl p-7
        bg-white/1 backdrop-blur-[2px]
        border border-white/10
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#ff3b5c]/10
        group 
        "
    >
      <div
        className="
        absolute top-0 left-0 right-0 h-[1px]
        bg-gradient-to-r from-transparent via-[#ff3b5c]/60 to-transparent 
        scale-x-0
        origin-center
        transition-transform duration-500 ease-out  
        group-hover:scale-x-100
        "
      />
      <div className="font-syne font-semibold text-white/90 mb-5 flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              px-3 py-1 rounded-md text-[0.8rem]

              bg-white/5
              border border-white/10
              text-white/70

              backdrop-blur-md

              hover:bg-[#ff3b5c]/10
              hover:border-[#ff3b5c]/30
              hover:text-[#ff6b81]

              transition-all duration-200
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {(Object.entries(levels) as [LevelKey, string[]][]).map(
          ([level, list]) =>
            list.length > 0 && (
              <div key={level}>
                <p className="text-[0.7rem] text-[#ff6b81] mb-1">{level}</p>

                <div className="space-y-1">
                  <p className="text-[0.7rem] text-white/40 leading-snug">
                    {list.join(", ")}
                  </p>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section className="w-full py-28 bg-[#100b0b]/75">
      <div className="max-w-[50.55rem] mx-auto px-8">
        <div className="flex items-center gap-3 mb-3 text-[0.75rem] text-red-500 tracking-[.2em]">
          TECH_STACK
          <div className="flex-1 h-px bg-red-900/50" />
        </div>

        <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,2.575rem)] tracking-tight mb-14 text-white">
          기술 스택
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
