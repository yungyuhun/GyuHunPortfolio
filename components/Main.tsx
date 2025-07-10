"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Scroll } from "@/src/icons/Icon";

export default function Main({ showSplash }: { showSplash?: boolean }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showSplash) return;
    if (!container.current) return;

    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    const typoEls = gsap.utils.toArray<HTMLElement>(".typo-animate");
    gsap.fromTo(
      typoEls,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, [showSplash]);

  return (
    <section
      ref={container}
      className="relative flex flex-col items-center justify-center w-auto max-w-full min-h-screen opacity-0 bg-primary md:mx-0 xs:mx-5"
    >
      <div className="flex flex-col items-center md:w-full md:gap-12 xs:gap-5 xs:w-full">
        <div className="flex items-center typo-animate">
          <h1 className="font-semibold tracking-tighter text-white font-inter md:text-inter-title xs:text-inter-title-xs">
            Publisher
          </h1>
          <span className="inline-block bg-white md:w-64 md:h-4 md:ml-12 xs:w-20 xs:h-2 xs:ml-4"></span>
        </div>
        <div className="flex items-center md:gap-12 md:flex-row typo-animate xs:gap-4 xs:flex-col">
          <img
            src="/design.png"
            alt="Design"
            className="object-cover md:w-[280px] 2xl:block rounded h-full typo-animate xs:hidden"
          />
          <h1 className="font-semibold tracking-tighter text-white font-inter md:text-inter-title xs:text-inter-title-xs">
            Where Design
          </h1>
        </div>
        <div className="flex items-center md:flex-row md:gap-12 typo-animate xs:gap-4 xs:flex-col">
          <h1 className="font-semibold tracking-tighter text-white font-inter md:text-inter-title xs:text-inter-title-xs">
            Meets Code
          </h1>
          <img
            src="/code.png"
            alt="Code"
            className="object-cover md:w-[280px] 2xl:block rounded h-full typo-animate xs:hidden"
          />
        </div>
        <div className="absolute z-10 -translate-x-1/2 left-1/2 bottom-8">
          <Scroll color="#fff" className="md:w-8 md:h-8 xs:w-6 xs:h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
