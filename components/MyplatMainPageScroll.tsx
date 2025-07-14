"use client";
import { useRef, useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 타입 선언
type MyplatMainPageScrollProps = {
  fadeinRefs: RefObject<(HTMLDivElement | null)[]>;
  index: number;
};

export default function MyplatMainPageScroll({
  fadeinRefs,
  index,
}: MyplatMainPageScrollProps) {
  useEffect(() => {
    const el = fadeinRefs.current?.[index];
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "top 25%",
          scrub: 0.8,
        },
      }
    );
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fadeinRefs, index]);

  return (
    <section className="relative bg-blue md:-mt-[200px] xs:-mt-20 md:pb-[200px] xs:pb-20 bg-top bg-cover bg-no-repeat">
      <div
        ref={(el) => {
          if (fadeinRefs.current) fadeinRefs.current[index] = el;
        }}
        className="relative mx-auto max-w-[1440px] xs:px-5"
      >
        <div
          className="w-full md:h-[820px] xs:h-[240px] overflow-y-auto md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary pointer-events-auto hide-scrollbar shadow-lg"
          onWheel={(e) => e.stopPropagation()}
        >
          <img src="/myplat_main.png" alt="Myplat Main" className="w-full" />
        </div>
        <img
          src="/myplat_text.png"
          alt="circle text"
          className="md:w-[240px] xs:w-32 md:h-[240px] xs:h-32 circle-rotate absolute md:-top-28 xs:-top-14 md:-right-28 xs:right-0"
        />
      </div>
    </section>
  );
}
