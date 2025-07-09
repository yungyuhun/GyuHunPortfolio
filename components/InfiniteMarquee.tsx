"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.set(containerRef.current, { x: 0 });

    // 텍스트 복제 (2개)
    const clone1 = textRef.current.cloneNode(true) as HTMLDivElement;
    const clone2 = textRef.current.cloneNode(true) as HTMLDivElement;
    containerRef.current.appendChild(clone1);
    containerRef.current.appendChild(clone2);

    // 텍스트 너비 (원본 기준)
    const textWidth = textRef.current.offsetWidth;

    // GSAP 애니메이션
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(containerRef.current, {
      x: -textWidth,
      duration: 20,
      ease: "none",
    }).set(containerRef.current, { x: 0 });

    return () => {
      if (containerRef.current) {
        if (clone1.parentNode === containerRef.current)
          containerRef.current.removeChild(clone1);
        if (clone2.parentNode === containerRef.current)
          containerRef.current.removeChild(clone2);
      }
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <h2
          ref={textRef}
          className="pr-8 font-bold font-inter md:-mt-8 xs:-mt-2 md:text-inter-title xs:text-inter-title-xs text-outline xs:text-outline-xs"
          style={{ willChange: "transform" }}
        >
          Modern Interactive Web Publisher
        </h2>
      </div>
    </div>
  );
}
