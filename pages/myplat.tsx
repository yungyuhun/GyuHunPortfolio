"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyplatScrollTrigger from "@/components/MyplatScrollTrigger";
import MyplatMainPageScroll from "@/components/MyplatMainPageScroll";
import MyplatSubPageScroll from "@/components/MyplatSubPageScroll";
import MyplatTextGradient from "@/components/MyplatTextGradient";
import MyplatAdmin from "@/components/MyplatAdmin";
import MyplatMobile from "@/components/MyplatMobile";

gsap.registerPlugin(ScrollTrigger);

export default function Myplat() {
  const topTitleRef = useRef<HTMLDivElement>(null);
  const fadeinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  // 반응형
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 페이드인
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 타이틀 fade-in
      if (topTitleRef.current) {
        gsap.fromTo(
          topTitleRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        );
      }

      // 페이드인
      fadeinRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              end: "top 25%",
              scrub: 0.8,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMobile]);

  useEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "DOMContentLoaded,load,resize",
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white md:overflow-visible xs:overflow-hidden">
      {/* Section 1 : 메인 이미지/타이틀 */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/work3.png"
          alt="Myplat Background"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div
          ref={topTitleRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        >
          <p className="font-sans font-light text-white md:text-pt-subsection-title xs:text-pt-subtitle-xs">
            Web/Mobile Platform
          </p>
          <h2 className="mt-2 font-sans font-semibold text-white md:text-pt-title xs:text-pt-title-xs">
            마이플랫
          </h2>
        </div>
        <div className="absolute z-10 -translate-x-1/2 left-1/2 bottom-8">
          <Scroll
            color="#fff"
            className="md:w-8 md:h-8 xs:w-6 xs:h-6 animate-bounce"
          />
        </div>
      </section>

      {/* Section 2 : 프로젝트 설명 */}
      <section className="relative md:py-[200px] bg-white xs:py-20">
        <div
          ref={(el) => {
            fadeinRefs.current[0] = el;
          }}
          className="flex justify-between max-w-[1440px] md:mx-auto md:flex-row xs:flex-col xs:mx-5"
        >
          <div className="flex flex-col gap-8">
            <h2 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
              마이플랫 홈페이지 제작
            </h2>
            <div className="flex flex-wrap gap-4 md:flex-row md:max-w-xl xs:max-w-full xs:flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Client.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  마이플랫
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Category.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Web/Mobile Platform
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Date.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  2023. 12
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Service.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  UX Strategy, Visual Design, Project Management, Development
                </span>
              </div>
              <a
                href="https://www.myplat.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-sans font-normal text-center transition-all duration-300 ease-out bg-white border rounded-full h-fit text-primary md:w-auto xs:w-full md:mt-12 xs:mt-6 text-pt-body border-primary-extraLight hover:bg-primary hover:text-white hover:border-transparent"
              >
                사이트 바로가기
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-xl md:Fgap-16 xs:gap-8 md:mt-0 xs:mt-14">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Brief</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                마이플랫은 IT 프리랜서와 프로젝트를 연결해주는 아웃소싱
                플랫폼입니다. 기업이나 개인이 IT 프로젝트를 등록하면, 다양한 IT
                프리랜서(개발자, 퍼블리셔, 디자이너 등)가 자신의 역량과 경험에
                맞는 프로젝트를 찾아 지원할 수 있도록 돕는 서비스입니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Concept</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                깔끔한 레이아웃과 명확한 정보 구조로, 처음 방문하는 사용자도
                서비스를 쉽게 이해할 수 있도록 설계했습니다. 신뢰와 전문성,
                그리고 간결함을 바탕으로 IT 프리랜서와 클라이언트 모두가
                편리하게 이용할 수 있는 사용자 중심의 플랫폼 서비스를
                구현했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : 마이플랫 메인 이미지 */}
      <section className="flex justify-center min-h-screen md:py-[200px] xs:py-20 bg-background-gray">
        <img
          src="/myplat_main.png"
          alt="Myplat Main"
          className="w-full md:max-w-[1440px] xs:max-w-full xs:px-5"
        />
      </section>

      {/* Section 4 : 스크롤 트리거 애니메이션 */}
      <MyplatScrollTrigger
        fadeinRefs={fadeinRefs}
        isMobile={isMobile}
        fadeinIndex={3}
      />
      {/* Section 5 : 마이플랫 메인 페이지 스크롤 이미지 */}
      <MyplatMainPageScroll fadeinRefs={fadeinRefs} index={1} />

      {/* Section 6 : PC Sub Page */}
      <MyplatSubPageScroll fadeinRefs={fadeinRefs} index={2} />

      {/* Section 7 : 마퀴 텍스트 및 모바일 이미지 */}
      <MyplatMobile
        fadeinRefs={fadeinRefs}
        marqueeRef={marqueeRef}
        marqueeTextRef={marqueeTextRef}
      />
      {/* Section 8 : 디자인 시스템 */}
      <section className="relative md:py-[200px] xs:py-20 bg-background-light">
        <div className="relative mx-auto md:max-w-[1440px] xs:max-w-full xs:px-5">
          <div
            ref={(el) => {
              fadeinRefs.current[6] = el;
            }}
            className="flex md:flex-row xs:flex-col justify-between w-full md:max-w-[1440px] xs:max-w-full mx-auto md:mb-[100px] xs:mb-10 xs:gap-4"
          >
            <h3 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
              Design System
            </h3>
            <p className="font-sans font-normal md:max-w-xl xs:max-w-full text-primary text-pt-body">
              컬러 시스템, 타이포그래피, 그리드, 카드·버튼·네비게이션 등 UI
              컴포넌트를 직접 설계하고 구현했습니다. 반응형 레이아웃과 상태별
              컬러 배지, 마이크로인터랙션, 접근성까지 세부 가이드라인을 적용해,
              모든 환경에서 일관되고 직관적인 사용자 경험을 완성했습니다.
            </p>
          </div>
          <img
            ref={(el) => {
              fadeinRefs.current[7] = el;
            }}
            src="/myplat_color.png"
            alt="Myplat Main Image"
            className="w-full md:rounded-3xl xs:rounded-xl"
          />
        </div>
      </section>

      {/* Section 9 : 텍스트 애니메이션 */}
      <MyplatTextGradient />

      {/* Section 10 : 마이플랫 목업 */}
      <section className="relative bg-background-light">
        <img
          ref={(el) => {
            fadeinRefs.current[8] = el;
          }}
          src="myplat_mockup.png"
          alt="Myplat Main Image"
          className="object-cover w-full"
        />
      </section>

      {/* Section 11 : 마이플랫 어드민 페이지 */}
      <MyplatAdmin />

      {/* Section 12 : 마이플랫 배너 */}
      <section className="relative bg-background-light">
        <img
          src="myplat_banner2.png"
          alt="Myplat Logo Banner"
          className="hidden object-cover w-full md:block"
        />
        <img
          src="/myplat_banner2_mobile.png"
          alt="Myplat Logo Banner"
          className="block object-cover w-full h-full md:hidden"
        />
      </section>

      <Footer />
    </div>
  );
}
