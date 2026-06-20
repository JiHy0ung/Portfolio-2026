import { SKILL_GROUPS, type SkillGroupType } from "../../constants/skills";

function SkillGroup({ icon, title, tags }: SkillGroupType) {
  return (
    <div
      id="skills"
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
            key={tag.label}
            className="
            px-3 py-1 rounded-md text-[0.8rem]
            bg-white/5 border border-white/10
            text-white/70 backdrop-blur-md
            flex items-center gap-1
            hover:bg-[#ff3b5c]/10
            hover:border-[#ff3b5c]/30
            hover:text-[#ff6b81]
            transition-all duration-200
            "
          >
            <span className="text-[0.9rem]">{tag.icon}</span>
            {tag.label}
          </span>
        ))}
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

        <div className="grid grid-cols-1 gap-8">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
