"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImagePosition = {
  top: string;
  left?: string;
  right?: string;
};

const pcTexts = [
  "웹을 쉽고, 보기 좋고, 움직이게 만드는 퍼블리셔입니다.",
  "기본을 지킨 마크업, 깔끔한 스타일링,",
  "그리고 눈길을 끄는 인터랙션을 중요하게 생각합니다.",
  "React, Next.js, GSAP 등 다양한 도구를 익히며,",
  "사용자에게 더 좋은 경험을 전하고자 끊임없이 고민합니다.",
];

const mobileTexts = [
  "웹을 쉽고 보기 좋게 움직이게 만드는",
  "웹 퍼블리셔 윤규훈입니다.",
  "기본을 지킨 마크업, 깔끔한 스타일링,",
  "다양한 인터랙션을 중요하게 생각합니다.",
  "React, Next.js, GSAP 등을 익히며",
  "사용자에게 더 좋은 경험을 전하고자 끊임없이 고민합니다.",
];

const images = [
  "/product1.png",
  "/product2.png",
  "/product3.png",
  "/product4.png",
  "/product5.png",
  "/product6.png",
  "/product7.png",
];

const PCImagePositions: ImagePosition[] = [
  { top: "10%", left: "20%" },
  { top: "25%", left: "60%" },
  { top: "40%", left: "20%" },
  { top: "55%", left: "60%" },
  { top: "70%", left: "20%" },
  { top: "85%", left: "60%" },
  { top: "100%", left: "20%" },
];

const mobileImagePositions: ImagePosition[] = [
  { top: "5%", left: "5%" },
  { top: "20%", right: "5%" },
  { top: "35%", left: "5%" },
  { top: "50%", right: "5%" },
  { top: "65%", left: "5%" },
  { top: "80%", right: "5%" },
  { top: "95%", left: "5%" },
];

export default function WhoAmI() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(false);
  const texts = isMobile ? mobileTexts : pcTexts;
  const positions = isMobile ? mobileImagePositions : PCImagePositions;

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const imageYOffset = isMobile ? 100 : 300;
      const scrubDuration = isMobile ? 0.5 : 1;

      // 섹션 전체 핀 고정
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: isMobile ? "+=100%" : "+=200%",
        pin: true,
        scrub: scrubDuration,
      });

      // Heading 애니메이션
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { backgroundSize: "0% 100%" },
          {
            backgroundSize: "100% 100%",
            scrollTrigger: {
              trigger: section,
              start: "top 0%",
              end: isMobile ? "+=30%" : "+=50%",
              scrub: scrubDuration,
            },
          }
        );
      }

      // Text 애니메이션
      textRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { backgroundSize: "0% 100%", opacity: 0 },
          {
            backgroundSize: "100% 100%",
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 0%",
              end: `+=${isMobile ? (i + 1) * 20 : (i + 1) * 40}%`,
              scrub: scrubDuration,
            },
          }
        );
      });

      // 이미지 애니메이션
      imgRefs.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { y: imageYOffset, opacity: 0.4 },
          {
            y: -imageYOffset,
            opacity: 0.4,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: scrubDuration,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, texts]);

  return (
    <div className="relative w-full bg-black 2xl:min-h-[300vh] xs:min-h-[200vh]">
      {/* 이미지 레이어 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {images.map((src, i) => {
          const { top, left, right } = positions[i] || {};
          return (
            <img
              key={i}
              ref={(el) => {
                if (el) imgRefs.current[i] = el;
              }}
              src={src}
              alt={`si${i + 1}`}
              className="absolute 2xl:w-[550px] opacity-50 object-cover rounded-xl shadow-xl transform-gpu xs:w-[200px]"
              style={{ top, left, right }}
            />
          );
        })}
      </div>

      {/* 섹션 컨텐츠 */}
      <section
        ref={sectionRef}
        className="relative z-10 flex items-center justify-center w-full min-h-screen overflow-hidden 2xl:max-w-full xs:max-w-full"
      >
        <div className="absolute top-0 left-0 w-full h-[16rem] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[16rem] bg-gradient-to-t from-black to-transparent z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center w-full text-center md:max-w-screen-xl xs:max-w-full mix-blend-difference xs:mx-5">
          <h2
            ref={headingRef}
            className="mb-8 font-bold leading-tight text-transparent bg-gradient-to-r from-white to-white bg-clip-text 2xl:text-inter-subtitle xs:text-inter-subtitle-xs"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "0% 100%",
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              WebkitBackgroundClip: "text",
            }}
          >
            Who Am I
          </h2>

          {texts.map((text, i) => (
            <h3
              key={i}
              ref={(el) => {
                textRefs.current[i] = el;
              }}
              className="font-sans font-semibold text-transparent opacity-0 bg-gradient-to-r from-white to-white bg-clip-text 2xl:text-pt-subsection-title xs:text-pt-subtitle-xs"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "0% 100%",
                WebkitTextFillColor: "rgba(255,255,255,0.1)",
                WebkitBackgroundClip: "text",
                wordBreak: "keep-all",
              }}
            >
              {text}
            </h3>
          ))}
        </div>
      </section>
    </div>
  );
}
