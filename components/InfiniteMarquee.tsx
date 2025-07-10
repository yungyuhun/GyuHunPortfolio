"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    gsap.set(container, { x: 0 });

    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;

    const minCopies = Math.ceil(containerWidth / textWidth) + 2;
    const clones: HTMLElement[] = [];

    for (let i = 0; i < minCopies; i++) {
      const clone = text.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
      clones.push(clone);
    }

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(container, {
      x: -textWidth,
      duration: 20,
      ease: "none",
    }).set(container, { x: 0 });

    return () => {
      clones.forEach((clone) => {
        if (clone.parentNode === container) {
          container.removeChild(clone);
        }
      });
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
