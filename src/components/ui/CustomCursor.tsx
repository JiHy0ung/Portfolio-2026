import { useEffect, useRef, useState } from "react";

const LENS_SIZE = 180;
const SCALE = 2.5;

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const cloneWrap = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringXY = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const [isMagnify, setIsMagnify] = useState(false);

  // 커서 움직임
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX: cx, clientY: cy } = e;
      mouse.current = { x: cx, y: cy };

      // 중앙 점
      if (dotRef.current) {
        dotRef.current.style.left = `${cx}px`;
        dotRef.current.style.top = `${cy}px`;
      }

      // 테두리
      if (lensRef.current) {
        lensRef.current.style.left = `${cx}px`;
        lensRef.current.style.top = `${cy}px`;
      }

      // 확대 레이어
      if (cloneWrap.current) {
        const tx = -cx * SCALE + LENS_SIZE / 2;
        const ty = -cy * SCALE + LENS_SIZE / 2;

        cloneWrap.current.style.transform = `
          translate(${tx}px, ${ty}px)
          scale(${SCALE})
        `;
      }
    };

    const animateRing = () => {
      ringXY.current.x += (mouse.current.x - ringXY.current.x) * 0.12;
      ringXY.current.y += (mouse.current.y - ringXY.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringXY.current.x}px`;
        ringRef.current.style.top = `${ringXY.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // 호버
  useEffect(() => {
    const magnifyEls = document.querySelectorAll("[data-cursor='magnify']");

    magnifyEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setIsMagnify(true);
      });

      el.addEventListener("mouseleave", () => {
        setIsMagnify(false);
      });
    });

    const clickEls = document.querySelectorAll("a, button");

    clickEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (dotRef.current) {
          dotRef.current.classList.add("scale-[1.8]");
        }

        if (ringRef.current) {
          ringRef.current.classList.add("w-[50px]", "h-[50px]", "opacity-40");
        }
      });

      el.addEventListener("mouseleave", () => {
        if (dotRef.current) {
          dotRef.current.classList.remove("scale-[1.8]");
        }

        if (ringRef.current) {
          ringRef.current.classList.remove(
            "w-[50px]",
            "h-[50px]",
            "opacity-40",
          );
        }
      });
    });
  }, []);

  return (
    <>
      {/* 중앙 점 */}
      <div
        ref={dotRef}
        className={`
          fixed
          pointer-events-none
          z-[9999]
          w-2
          h-2
          rounded-full
          bg-white
          mix-blend-screen
          transition-all
          duration-0
          -translate-x-1/2
          -translate-y-1/2
          ${isMagnify ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* 테두리 */}
      <div
        ref={ringRef}
        className={`
          fixed
          pointer-events-none
          z-[9998]
          w-9
          h-9
          rounded-full
          border
          border-white/25
          transition-all
          duration-0
          -translate-x-1/2
          -translate-y-1/2
          ${isMagnify ? "opacity-0 scale-0" : "opacity-100 scale-100"}
        `}
      />

      {/* 렌즈 테두리 */}
      <div
        ref={lensRef}
        className={`
          fixed
          pointer-events-none
          z-[9990]
          overflow-hidden
          rounded-full
          border
          border-white/20
          shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_40px_rgba(0,0,0,0.5)]
          transition-all
          duration-0
          -translate-x-1/2
          -translate-y-1/2
          bg-[#050505]
          ${isMagnify ? "opacity-100" : "opacity-0"}
        `}
        style={{
          width: isMagnify ? LENS_SIZE : 0,
          height: isMagnify ? LENS_SIZE : 0,
          backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
          backgroundSize: "100px 100px",
        }}
      >
        {/* 돋보기 렌즈 */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            backdrop-brightness-110
          "
        />

        {/* 확대 레이어 */}
        <div
          ref={cloneWrap}
          className="
            absolute
            top-0
            left-0
            w-screen
            h-screen
            origin-top-left
          "
          style={{
            transform: `translate(0px,0px) scale(${SCALE})`,
          }}
        >
          <MagnifyContent />
        </div>
      </div>
    </>
  );
};

function MagnifyContent() {
  const [items, setItems] = useState<
    {
      text: string;
      top: number;
      left: number;
      font: string;
      color: string;
      weight: string;
      size: number;
      spacing: string;
    }[]
  >([]);

  useEffect(() => {
    const update = () => {
      const els = document.querySelectorAll<HTMLElement>(
        "[data-cursor='magnify']",
      );

      const result = Array.from(els).map((el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);

        return {
          text: el.textContent ?? "",
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          font: style.fontFamily,
          color: style.color,
          weight: style.fontWeight,
          size: parseFloat(style.fontSize),
          spacing: style.letterSpacing,
        };
      });

      setItems(result);
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute whitespace-nowrap leading-none select-none"
          style={{
            top: item.top,
            left: item.left,
            fontFamily: item.font,
            fontWeight: item.weight,
            fontSize: item.size,
            color: item.color,
            letterSpacing: item.spacing,
          }}
        >
          {item.text}
        </span>
      ))}
    </>
  );
}

export default CustomCursor;
