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
    image: null,
    title: "My Work",
    subtitle: "",
    background: "bg-black",
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
      const allPanels = gsap.utils.toArray<HTMLElement>(".panel");

      allPanels.forEach((panel, i) => {
        const isLast = i === allPanels.length - 1;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: !isLast,
          pinSpacing: false,
          scrub: true,
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

  return (
    <div ref={sectionRef} className="relative w-full">
      <CustomCursor visible={cursorVisible} />

      {panels.map((panel, index) => {
        const isInteractive = !!panel.path;

        const content = (
          <section
            key={index}
            className={`relative z-[${
              20 + index
            }] panel flex items-center justify-center w-full h-screen ${
              panel.background || ""
            }`}
            onMouseEnter={() => isInteractive && setCursorVisible(true)}
            onMouseLeave={() => isInteractive && setCursorVisible(false)}
          >
            {panel.image && (
              <img
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 z-0 object-cover w-full h-full transition-transform duration-700 will-change-transform"
                style={{ pointerEvents: "none", transform: "scale(1.04)" }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white panel-text">
              {panel.subtitle && (
                <p className="font-sans font-light md:text-pt-subsection-title xs:text-pt-subtitle-xs">
                  {panel.subtitle}
                </p>
              )}
              <h2
                className={`font-sans font-semibold md:text-pt-title xs:text-pt-title-xs ${
                  index === 0 ? "font-inter font-bold md:!text-inter-title xs:!text-inter-title=xs" : ""
                }`}
              >
                {panel.title}
              </h2>
            </div>
          </section>
        );

        return isInteractive ? (
          <Link key={index} href={panel.path}>
            {content}
          </Link>
        ) : (
          content
        );
      })}

      <div className="relative z-[99]">
        <WorkList />
      </div>
    </div>
  );
}
