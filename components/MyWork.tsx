"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkList from "./MoreWork";
import CustomCursor from "./CustomCursor";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const panels = [
  {
    background: "bg-black",
    title: "My Work",
    titleClass: "2xl:text-inter-title xs:text-inter-title-xs",
    content: null,
  },
  {
    image: "/work1.png",
    title: "스카이라이프",
    subtitle: "Web/Mobile Platform",
    path: "/skylife",
  },
  {
    image: "/work2.png",
    title: "BSW Beauty",
    subtitle: "Retail Management",
    path: "/bsw-beauty",
  },
  {
    image: "/work3.png",
    title: "마이플랫",
    subtitle: "Web/Mobile Platform",
    path: "/myplat",
  },
  {
    image: "/work4.png",
    title: "좋은나라펫피스",
    subtitle: "Web/Mobile Platform",
    path: "/petpeace",
  },
];

export default function MyWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      panels.forEach((panel, i) => {
        const isLast = i === panels.length - 1;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: isLast ? "+=10%" : "+=100%",
          pin: true,
          pinSpacing: isLast,
          scrub: 0.5,
          pinType: "transform",
        });

        const text = panel.querySelector(".panel-text");
        if (text) {
          gsap.fromTo(
            text,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstPanel = panels[0];
  const restPanels = panels.slice(1);

  return (
    <div ref={sectionRef} className="relative w-full">
      <section
        className={`flex items-center justify-center w-full h-screen panel ${
          firstPanel.background || ""
        }`}
      >
        <h2
          className={`font-semibold text-white ${firstPanel.titleClass} panel-text`}
        >
          {firstPanel.title}
        </h2>
      </section>

      <CustomCursor visible={cursorVisible} />

      {restPanels.map((panel, index) => (
        <Link key={index} href={panel.path || "#"}>
          <section
            className="relative flex items-center justify-center w-full h-screen overflow-hidden panel"
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
          >
            {panel.image && (
              <img
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 z-0 object-cover w-full h-full transition-transform duration-700 will-change-transform"
                style={{ pointerEvents: "none", transform: "scale(1.04)" }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center panel-text">
              <p className="font-sans font-light text-white 2xl:text-pt-subsection-title xs:text-pt-subtitle-xs">
                {panel.subtitle}
              </p>
              <h2 className="font-sans font-semibold text-white 2xl:text-pt-title xs:text-pt-title-xs">
                {panel.title}
              </h2>
            </div>
          </section>
        </Link>
      ))}
      <div className="relative z-10">
        <WorkList />
      </div>
    </div>
  );
}
