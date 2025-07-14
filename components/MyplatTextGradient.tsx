"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyplatTextGradient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let ctx: gsap.Context | undefined;

    function runGsap() {
      if (
        !sectionRef.current ||
        textRefs.current.length < 3 ||
        textRefs.current.some((el) => !el)
      ) {
        timeout = setTimeout(runGsap, 50);
        return;
      }

      ctx = gsap.context(() => {
        textRefs.current.forEach((el) => {
          if (!el) return;
          gsap.set(el, {
            backgroundSize: "0% 100%",
            backgroundPosition: "left center",
            opacity: 1.2,
          });
        });

        // ScrollTrigger 애니메이션
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "-100% top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: ({ progress }) => {
            textRefs.current.forEach((el) => {
              if (!el) return;
              gsap.set(el, {
                backgroundSize: `${progress * 100}% 100%`,
                opacity: 1 + progress * 2,
              });
            });
          },
        });
      }, sectionRef);
    }

    runGsap();

    return () => {
      if (timeout) clearTimeout(timeout);
      ctx && ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center md:py-[200px] xs:py-20 bg-background-light"
    >
      <p className="font-sans font-bold text-center md:text-pt-section-title xs:text-pt-subsection-title-xs">
        <span
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="inline-block text-fill-effect2"
        >
          Freelance Online Platform
        </span>
        <br />
        <span
          ref={(el) => {
            textRefs.current[1] = el;
          }}
          className="inline-block text-fill-effect2"
        >
          프리랜서를 만나는 가장 편리한 방법
        </span>
        <br />
        <span
          ref={(el) => {
            textRefs.current[2] = el;
          }}
          className="inline-block text-fill-effect2"
        >
          나만의 플랫폼 '마이플랫'
        </span>
      </p>
    </section>
  );
}
