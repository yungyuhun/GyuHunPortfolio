"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useDeviceSize() {
  const [deviceSize, setDeviceSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceSize("mobile");
      else if (width < 1024) setDeviceSize("tablet");
      else setDeviceSize("desktop");
    };
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  return deviceSize;
}

export default function MyplatScrollTrigger() {
  const deviceSize = useDeviceSize();
  const sectionRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !topTextRef.current ||
      !bottomTextRef.current ||
      !imgRef.current
    )
      return;

    const yValue =
      deviceSize === "mobile" ? 110 : deviceSize === "tablet" ? 240 : 240;

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
        .to(bottomTextRef.current, { y: -yValue, ease: "power2.out" }, 0)
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

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [deviceSize]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center w-full max-w-full overflow-hidden bg-white"
    >
      <div className="flex flex-col justify-center w-full md:max-w-[1440px] xs:max-w-full mx-auto xs:px-5 h-screen">
        <h2
          ref={topTextRef}
          className="relative z-20 font-bold text-center md:mb-14 xs:mb-10 font-inter md:text-[72px] xs:text-inter-subtitle-xs text-blue/20"
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
              className="object-cover w-full h-full md:max-w-[1200px] md:mx-auto xs:max-w-full"
            />
          </picture>
        </div>
        <div
          ref={bottomTextRef}
          className="relative z-20 font-sans font-normal text-center md:mt-14 xs:mt-10 md:text-pt-subtitle xs:text-lg text-primary"
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
