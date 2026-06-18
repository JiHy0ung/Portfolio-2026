import type { ReactNode } from "react";

export type SkillTag = {
  label: string;
  icon?: ReactNode;
};

export type SkillGroupType = {
  icon: ReactNode;
  title: string;
  tags: SkillTag[];
};

export const SKILL_GROUPS: SkillGroupType[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    title: "Frontend",
    tags: [
      {
        label: "React",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "JavaScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Next.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            className="w-4 h-4 bg-white rounded-full"
          />
        ),
      },
      {
        label: "HTML",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "CSS",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Material UI",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Tailwind CSS",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "styled component",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Tanstack Query",
        icon: (
          <img
            src="https://img.jsdelivr.com/github.com/TanStack.png"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "React Router",
        icon: (
          <img
            src="https://reactrouter.com/_brand/react-router-brand-assets/logo/Dark.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Zustand",
        icon: (
          <img
            src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Redux",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            className="w-4 h-4"
          />
        ),
      },
    ],
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Backend",
    tags: [
      {
        label: "Node.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Express",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            className="w-4 h-4 bg-white rounded-full"
          />
        ),
      },
      {
        label: "MongoDB",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "Supabase",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
            className="w-4 h-4"
          />
        ),
      },
      {
        label: "PostgreSQL",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            className="w-4 h-4"
          />
        ),
      },
    ],
  },

  // {
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth="1.5"
  //       stroke="currentColor"
  //       className="size-4.5"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
  //       />
  //     </svg>
  //   ),
  //   title: "Tools",
  //   tags: [
  //     {
  //       label: "GitHub",
  //       icon: (
  //         <img
  //           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  //           className="w-4 h-4 bg-white rounded-full"
  //         />
  //       ),
  //     },
  //     {
  //       label: "Notion",
  //       icon: (
  //         <img
  //           src="https://img.jsdelivr.com/github.com/makenotion.png"
  //           className="w-4 h-4 bg-white rounded-full"
  //         />
  //       ),
  //     },
  //     {
  //       label: "Figma",
  //       icon: (
  //         <img
  //           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  //           className="w-4 h-4"
  //         />
  //       ),
  //     },
  //     {
  //       label: "Vercel",
  //       icon: (
  //         <img
  //           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
  //           className="w-4 h-4"
  //         />
  //       ),
  //     },
  //     {
  //       label: "VS Code",
  //       icon: (
  //         <img
  //           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  //           className="w-4 h-4"
  //         />
  //       ),
  //     },
  //     {
  //       label: "Postman",
  //       icon: (
  //         <img
  //           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
  //           className="w-4 h-4"
  //         />
  //       ),
  //     },
  //   ],
  // },
];
