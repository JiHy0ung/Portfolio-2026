import { useState } from "react";

const EMAIL = "fbwlgud51@gmail.com";
const RESUME_URL =
  "https://docs.google.com/document/d/1W1fycA7ROJEs12c7LBV39brUTHThTOA2/edit?usp=sharing&ouid=104814082390429574261&rtpof=true&sd=true";

const Contact = () => {
  const [emailHover, setEmailHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-28">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-3 text-[0.75rem] text-red-500 tracking-[.2em]">
          CONTACT
          <div className="flex-1 h-px bg-red-900/50" />
        </div>

        <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,2.575rem)] tracking-tight mb-14 text-white">
          같이 만들어요
        </h2>
        <p className="mb-5">
          새로운 기회와 협업을 환영합니다.
          <br />
          편하게 연락주세요!
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            onClick={handleCopyEmail}
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
            className="
            relative flex justify-center items-center gap-2
            pt-[0.4rem] pb-[0.45rem] px-[1rem]
            border-[0.5px] border-white/50 hover:border-white/70 rounded-sm
            cursor-pointer transition
            group
            "
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div
                className={`
                absolute transition-all duration-300 ease-out
                ${emailHover ? "opacity-0 scale-75" : "opacity-100 scale-100"}
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="size-4.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <div
                className={`
                absolute transition-all duration-300 ease-out
                ${emailHover ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="size-4.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </div>
            </div>

            <span>E-mail</span>

            <div
              className={`
              absolute -top-8 left-1/2 -translate-x-1/2
              text-[0.7rem] px-2 py-1 rounded-md
              bg-black/60 text-white/80 backdrop-blur-md
              border border-white/10
              transition-all duration-300
              pointer-events-none
              ${
                copied
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2 scale-95"
              }
            `}
            >
              Copied!
            </div>
          </a>
          <a
            onClick={handleCopyEmail}
            onMouseEnter={() => setResumeHover(true)}
            onMouseLeave={() => setResumeHover(false)}
            href="https://github.com/JiHy0ung"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center
            border-[0.5px] border-white/50 hover:border-white/70 rounded-sm
            pt-[0.7rem] pb-[0.75rem] px-[1rem]
            transition-colors duration-500
            hover:text-white
            px-[0.75rem] cursor-pointer
            "
          >
            <svg
              height="14"
              viewBox="0 0 416 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <g clip-path="url(#clip0_731_27173)">
                <path d="M41.6394 69.3848C29.0066 67.8535 20.1062 58.7617 20.1062 46.9902C20.1062 42.2051 21.8289 37.0371 24.7 33.5918C23.4558 30.4336 23.6472 23.7344 25.0828 20.959C28.9109 20.4805 34.0789 22.4902 37.1414 25.2656C40.7781 24.1172 44.6062 23.543 49.2957 23.543C53.9851 23.543 57.8132 24.1172 61.2585 25.1699C64.2253 22.4902 69.489 20.4805 73.3171 20.959C74.657 23.543 74.8484 30.2422 73.6042 33.4961C76.6667 37.1328 78.2937 42.0137 78.2937 46.9902C78.2937 58.7617 69.3933 67.6621 56.5691 69.2891C59.823 71.3945 62.0242 75.9883 62.0242 81.252L62.0242 91.2051C62.0242 94.0762 64.4167 95.7031 67.2878 94.5547C84.6101 87.9512 98.2 70.6289 98.2 49.1914C98.2 22.1074 76.1882 6.69539e-07 49.1042 4.309e-07C22.0203 1.92261e-07 0.199951 22.1074 0.199951 49.1914C0.199951 70.4375 13.6941 88.0469 31.8777 94.6504C34.4617 95.6074 36.95 93.8848 36.95 91.3008L36.95 83.6445C35.6101 84.2188 33.8875 84.6016 32.3562 84.6016C26.0398 84.6016 22.3074 81.1563 19.6277 74.7441C18.575 72.1602 17.4265 70.6289 15.2253 70.3418C14.0769 70.2461 13.6941 69.7676 13.6941 69.1934C13.6941 68.0449 15.6082 67.1836 17.5222 67.1836C20.2976 67.1836 22.6902 68.9063 25.1785 72.4473C27.0925 75.2227 29.1023 76.4668 31.4949 76.4668C33.8875 76.4668 35.4187 75.6055 37.6199 73.4043C39.2468 71.7773 40.491 70.3418 41.6394 69.3848Z" />
                <g clip-path="url(#clip1_731_27173)">
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
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setResumeHover(true)}
            onMouseLeave={() => setResumeHover(false)}
            className="
            relative flex justify-center items-center gap-2
            border-[0.5px] border-white/50 hover:border-white/70 rounded-sm
            pt-[0.4rem] pb-[0.45rem] px-[1rem]
            transition
            cursor-pointer
            group
            "
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div
                className={`
                absolute transition-all duration-300 ease-out
                ${resumeHover ? "opacity-0 scale-75" : "opacity-100 scale-100"}
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="size-4.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>

              <div
                className={`
                absolute transition-all duration-300 ease-out
                ${resumeHover ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="size-4.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </div>

            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
