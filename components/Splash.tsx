"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const textRef = useRef<SVGTextElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 텍스트 초기화
      gsap.set(textRef.current, {
        strokeDasharray: "0 100%",
        strokeDashoffset: "25%",
        fill: "transparent",
      });

      const tl = gsap.timeline();

      // 텍스트 선으로 그리기
      tl.to(textRef.current, {
        strokeDasharray: "100% 0",
        strokeDashoffset: "0%",
        duration: 2.5,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(textRef.current, {
            fill: "#fff",
            stroke: "none",
          });
        },
      })
        // 각 글자 개별 분해 애니메이션
        .to(
          ".letter",
          {
            y: () => gsap.utils.random(-50, 50),
            x: () => gsap.utils.random(-100, 100),
            rotation: () => gsap.utils.random(-90, 90),
            opacity: 0,
            scale: 0.6,
            duration: 1.2,
            ease: "power3.inOut",
            stagger: 0.05,
          },
          "+=0.5"
        )
        // 배경 페이드아웃
        .to(
          bgRef.current,
          {
            opacity: 0,
            duration: 1.2,
            ease: "power3.inOut",
          },
          "<"
        )
        // 전체 제거
        .to(containerRef.current, {
          opacity: 0,
          duration: 0,
          onComplete: onComplete,
        });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ pointerEvents: "none" }}
    >
      {/* 배경 */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-primary"
        style={{ transition: "opacity 1.2s" }}
      />
      {/* 텍스트 */}
      <svg viewBox="0 0 1320 300" className="relative w-full max-w-[1440px] h-auto">
        <text
          ref={textRef}
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="font-bold font-inter text-inter-title"
          style={{
            fill: "transparent",
            stroke: "#fff",
            strokeWidth: 1,
            textTransform: "uppercase",
          }}
        >
          {["G", "Y", "U", "H", "U", "N"].map((letter, i) => (
            <tspan
              key={i}
              className="letter"
              dx={i === 0 ? undefined : 10}
            >
              {letter}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
}
