"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type MyplatMobileProps = {
  marqueeRef: React.RefObject<HTMLDivElement | null>;
  marqueeTextRef: React.RefObject<HTMLDivElement | null>;
};

export default function MyplatMobile({ marqueeRef, marqueeTextRef }: MyplatMobileProps) {
  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;
    let marqueeTween: gsap.core.Tween | null = null;

    function setupGsap() {
      const marqueeContainer = marqueeRef.current;
      const marqueeText = marqueeTextRef.current;

      if (!marqueeContainer || !marqueeText) {
        retryTimeout = setTimeout(setupGsap, 50);
        return;
      }

      while (marqueeContainer.children.length > 1) {
        marqueeContainer.removeChild(marqueeContainer.lastChild!);
      }

      const textClone = marqueeText.cloneNode(true) as HTMLElement;
      marqueeContainer.appendChild(textClone);

      marqueeText.style.display = "inline-block";
      textClone.style.display = "inline-block";
      const gap = 60;
      marqueeContainer.style.gap = `${gap}px`;

      requestAnimationFrame(() => {
        const textWidth = marqueeText.offsetWidth;
        const totalWidth = textWidth + gap;
        if (textWidth === 0) {
          setTimeout(setupGsap, 50);
          return;
        }
        marqueeTween = gsap.to(marqueeContainer, {
          x: `-=${totalWidth}`,
          duration: 18,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      });
    }

    setupGsap();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      marqueeTween?.kill();
      if (marqueeRef.current) marqueeRef.current.style.transform = "";
    };
  }, [marqueeRef, marqueeTextRef]);

  return (
    <section className="relative w-full h-full overflow-hidden bg-blue">
      {/* 마퀴 텍스트 */}
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div
          ref={marqueeTextRef}
          className="inline-block font-semibold md:mt-20 xs:mt-10 text-white/20 font-inter md:text-inter-title xs:text-inter-title-xs whitespace-nowrap"
        >
          Where IT Talent Meets Opportunity, Myplat
        </div>
      </div>

      {/* 텍스트 영역 1 */}
      <div
        className="flex md:flex-row xs:flex-col justify-between w-full max-w-[1440px] mx-auto md:pt-[200px] xs:pt-20 mb-[100px] xs:gap-4 xs:px-5"
        data-aos="fade-up"
      >
        <h3 className="font-sans font-bold text-white md:text-pt-section-title xs:text-pt-section-title-xs">
          Mobile Page
        </h3>
        <p className="max-w-xl font-sans font-normal text-white text-pt-body">
          모바일 페이지는 카드형 UI와 직관적 내비게이션으로 프로젝트와 지원
          현황을 빠르게 확인할 수 있습니다. 단계별 상태와 태그, 필터로 원하는
          정보를 손쉽게 찾을 수 있으며, 심플하고 세련된 인터페이스로 효율적인
          모바일 사용 경험을 제공합니다.
        </p>
      </div>

      {/* 텍스트 영역 2 + 이미지 */}
      <div
        className="flex md:max-w-[1440px] xs:max-w-full mx-auto w-full md:min-h-screen xs:min-h-0 md:gap-20 xs:gap-4 justify-between xs:px-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col flex-wrap">
          <img
            src="myplat_m1.png"
            alt="Myplat Mobile 메인페이지"
            className="w-full z-10 md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
          <img
            src="myplat_m1-1.png"
            alt="Myplat Mobile 메인페이지"
            className="w-full shadow-lg md:-mt-8 xs:-mt-2"
          />
        </div>
        <div className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4 md:mt-[100px] xs:mt-10">
          <img
            src="myplat_m2.png"
            alt="Myplat Mobile 프로젝트"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
          <img
            src="myplat_m3.png"
            alt="Myplat Mobile 내가 지원한 프로젝트"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
          <img
            src="myplat_m4.png"
            alt="Myplat Mobile 프로젝트 공고"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
        </div>
        <div className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4">
          <img
            src="myplat_m5.png"
            alt="Myplat Mobile 매칭카드"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
          <img
            src="myplat_m6.png"
            alt="Myplat Mobile 증명서 발급 내역"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
          <img
            src="myplat_m7.png"
            alt="Myplat Mobile 매칭카드 수정"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
