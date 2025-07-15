"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

type MyplatScrollTriggerProps = {
  isMobile: boolean;
};

export default function MyplatScrollTrigger({
  isMobile,
}: MyplatScrollTriggerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: isMobile ? 200 : 400,
      easing: "ease-out-cubic",
    });

    setTimeout(() => AOS.refresh(), 100);
  }, [isMobile]);

  // ScrollTrigger timeline (텍스트/이미지/배경 애니메이션)
  useEffect(() => {
    if (!sectionRef.current) return;

    const yValue = isMobile ? "110px" : "280px";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
        },
      });

      tl.to(topTextRef.current, { y: yValue, ease: "power2.out" }, 0)
        .to(bottomTextRef.current, { y: `-${yValue}`, ease: "power2.out" }, 0)
        .to(
          [topTextRef.current, bottomTextRef.current],
          { color: "#fff", ease: "none" },
          ">-0.5"
        )
        .fromTo(
          imgRef.current,
          { borderRadius: "9999px" },
          {
            scale: 2,
            opacity: 0,
            borderRadius: "0px",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          sectionRef.current,
          { backgroundColor: "#4A4AD3", ease: "none" },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center w-full max-w-full overflow-hidden bg-white"
    >
      <div
        className="flex flex-col justify-center w-full md:max-w-[1440px] xs:max-w-full mx-auto xs:px-5 h-screen"
        data-aos="fade-up"
      >
        <h2
          ref={topTextRef}
          className="relative z-20 font-bold text-center md:mb-20 xs:mb-10 font-inter md:text-inter-subtitle xs:text-inter-subtitle-xs text-blue/20"
        >
          My Platform
          <br />
          Freelance Services
        </h2>
        <div className="relative z-10">
          <picture>
            <source srcSet="/myplat_banner.png" media="(min-width: 768px)" />
            <img
              ref={imgRef}
              src="/myplat_banner_mobile.png"
              alt="My Platform, Freelance Services"
              className="object-cover w-full h-full"
            />
          </picture>
        </div>
        <div
          ref={bottomTextRef}
          className="relative z-20 font-sans font-normal text-center md:mt-20 xs:mt-10 md:text-pt-subsection-title xs:text-lg text-primary"
        >
          인재 아웃소싱의 풍부한 경험을 지닌 매칭 컨설턴트가 서비스를 제공하며,
          <br className="hidden md:inline" />
          이해하고 소통해 나가는 플랫폼을 만들어 나가도록 하겠습니다.
          <br className="hidden md:inline" />
          마이플랫은 다양한 IT 전문가와 클라이언트의 연결을 보다 편리하게
          제공해드리겠습니다.
        </div>
      </div>
    </section>
  );
}
