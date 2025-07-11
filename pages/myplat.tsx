"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const MyplatSubImages = [
  "/myplat_sub1.png",
  "/myplat_sub2.png",
  "/myplat_sub3.png",
  "/myplat_sub4.png",
  "/myplat_sub5.png",
];

const MyplatSub2Images = [
  "/myplat_sub6.png",
  "/myplat_sub7.png",
  "/myplat_sub8.png",
  "/myplat_sub9.png",
  "/myplat_sub10.png",
];

const BOImages = [
  "/myplat_bo2.png",
  "/myplat_bo3.png",
  "/myplat_bo4.png",
  "/myplat_bo5.png",
  "/myplat_bo6.png",
  "/myplat_bo7.png",
  "/myplat_bo8.png",
];

export default function Myplat() {
  const fadeinRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const topTitleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionRef2 = useRef<HTMLDivElement | null>(null);
  const topTextRef = useRef<HTMLHeadingElement | null>(null);
  const bottomTextRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      !sectionRef2.current ||
      textRefs.current.length < 3 ||
      textRefs.current.some((el) => !el)
    )
      return;

    // 초기 배경 그라데이션 세팅
    textRefs.current.forEach(
      (el) =>
        el &&
        gsap.set(el, {
          backgroundSize: "0% 100%",
          backgroundPosition: "left center",
          opacity: 1.2,
        })
    );

    const textTrigger = ScrollTrigger.create({
      trigger: sectionRef2.current,
      start: "-100% top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: ({ progress }) => {
        textRefs.current.forEach(
          (el) =>
            el &&
            gsap.set(el, {
              backgroundSize: `${progress * 100}% 100%`,
              backgroundPosition: "left center",
              opacity: 1 + progress * 2,
            })
        );
      },
    });

    return () => textTrigger.kill();
  }, [
    sectionRef2.current,
    textRefs.current[0],
    textRefs.current[1],
    textRefs.current[2],
  ]);

  // 스크롤 연동 애니메이션
  useEffect(() => {
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

      // 텍스트 이동
      tl.to(topTextRef.current, { y: yValue, ease: "power2.out" }, 0).to(
        bottomTextRef.current,
        { y: `-${yValue}`, ease: "power2.out" },
        0
      );

      // 텍스트 색상 전환
      tl.to(
        [topTextRef.current, bottomTextRef.current],
        { color: "#fff", ease: "none" },
        ">-0.5"
      );

      // 이미지 확대 및 페이드아웃 + borderRadius 애니메이션
      tl.fromTo(
        imgRef.current,
        { borderRadius: "9999px" },
        {
          scale: 2,
          opacity: 0,
          borderRadius: "0px",
          ease: "power2.inOut",
        },
        0
      );

      // 배경색 변경
      tl.to(
        sectionRef.current,
        { backgroundColor: "#4A4AD3", ease: "none" },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // fade-in 효과 및 마퀴 애니메이션
  useEffect(() => {
    // 상단 타이틀 Fade-in (페이지 진입 시)
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

    // Fade-in 애니메이션 (스크롤 트리거)
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

    // 마퀴 텍스트 애니메이션
    const marqueeContainer = marqueeRef.current;
    const marqueeText = marqueeTextRef.current;
    let marqueeAnimation: gsap.core.Tween | null = null;

    if (marqueeContainer && marqueeText) {
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

        marqueeAnimation = gsap.to(marqueeContainer, {
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

    return () => {
      if (marqueeAnimation) marqueeAnimation.kill();
    };
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
      <section
        ref={sectionRef}
        className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-white"
      >
        <div
          ref={(el) => {
            fadeinRefs.current[1] = el;
          }}
          className="flex flex-col justify-center w-full md:max-w-[1440px] xs:max-w-full mx-auto xs:px-5 h-screen"
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
            인재 아웃소싱의 풍부한 경험을 지닌 매칭 컨설턴트가 서비스를
            제공하며,
            <br className="hidden md:inline" />
            이해하고 소통해 나가는 플랫폼을 만들어 나가도록 하겠습니다.
            <br className="hidden md:inline" />
            마이플랫은 다양한 IT 전문가와 클라이언트의 연결을 보다 편리하게
            제공해드리겠습니다.
          </div>
        </div>
      </section>

      {/* Section 5 : 마이플랫 메인 페이지 스크롤 이미지 */}
      <section className="relative bg-blue md:-mt-[200px] xs:-mt-20 md:pb-[200px] xs:pb-20 bg-top bg-cover bg-no-repeat">
        <div
          ref={(el) => {
            fadeinRefs.current[2] = el;
          }}
          className="relative mx-auto max-w-[1440px] xs:px-5"
        >
          <div
            className="w-full md:h-[820px] xs:h-[240px] overflow-y-auto md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary pointer-events-auto hide-scrollbar shadow-lg"
            onWheel={(e) => e.stopPropagation()}
          >
            <img src="/myplat_main.png" alt="Myplat Main" className="w-full" />
          </div>
          <img
            src="/myplat_text.png"
            alt="circle text"
            className="md:w-[240px] xs:w-32 md:h-[240px] xs:h-32 circle-rotate absolute md:-top-28 xs:-top-14 md:-right-28 xs:right-0"
          />
        </div>
      </section>

      {/* Section 6 : PC Sub Page */}
      <section className="relative flex flex-col items-center mx-auto overflow-visible md:py-24 xs:py-12 bg-blue">
        <div
          ref={(el) => {
            fadeinRefs.current[3] = el;
          }}
          className="flex md:flex-row xs:flex-col md:max-w-[1440px] xs:max-w-full w-full mx-auto xs:px-5"
        >
          {/* 왼쪽 고정 텍스트 */}
          <div className="md:sticky xs:relative md:top-[200px] xs:top-0 z-10 flex flex-col items-start justify-start md:w-1/3 xs:w-full h-fit text-white md:pr-20 xs:pr-0 xs:mb-10">
            <h3 className="font-sans font-bold md:mb-6 xs:mb-4 md:text-pt-section-title xs:text-pt-subsection-title">
              Sub Page
            </h3>
            <p className="font-sans md:max-w-md xs:max-w-full text-pt-body">
              프로젝트 목록, 알림, 상세 정보 등 주요 기능을 한눈에 확인하고
              관리할 수 있도록 카드형 정보 구조와 명확한 네비게이션으로
              설계·구현하였습니다.
            </p>
          </div>
          {/* 가운데 이미지 컬럼 */}
          <div className="flex flex-col md:gap-8 xs:gap-4 md:pl-8 xs:pl-0 md:w-1/3 xs:w-full xs:mb-4">
            {MyplatSubImages.map((src, i) => (
              <div key={i} className="w-full md:h-[290px] xs:h-full">
                <div className="flex items-center justify-center w-full h-full overflow-hidden border-4 shadow-lg pointer-events-none select-none border-primary rounded-2xl">
                  <img
                    src={src}
                    alt={`Myplat-${i + 1}`}
                    className="w-full"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* 오른쪽 이미지 컬럼 (아래로 살짝 내림) */}
          <div className="flex flex-col md:pt-20 xs:pt-0 md:gap-8 xs:gap-4 md:pl-8 xs:pl-0 md:w-1/3 xs:w-full">
            {MyplatSub2Images.map((src, i) => (
              <div key={i} className="w-full md:h-[290px] xs:h-full">
                <div className="flex items-center justify-center w-full h-full overflow-hidden border-4 shadow-lg pointer-events-none select-none border-primary rounded-2xl">
                  <img
                    src={src}
                    alt={`section-right-${i + 1}`}
                    className="w-full"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 : 마퀴 텍스트 및 모바일 이미지 */}
      <section className="relative w-full h-full overflow-hidden bg-blue">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div
            ref={marqueeTextRef}
            className="inline-block font-semibold md:mt-20 xs:mt-10 text-white/20 font-inter md:text-inter-title xs:text-inter-title-xs whitespace-nowrap"
          >
            Where IT Talent Meets Opportunity, Myplat
          </div>
        </div>
        <div
          ref={(el) => {
            fadeinRefs.current[4] = el;
          }}
          className="flex md:flex-row xs:flex-col justify-between w-full max-w-[1440px] mx-auto md:pt-[200px] xs:pt-20 mb-[100px] xs:gap-4 xs:px-5"
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
        {/* 모바일 이미지 */}
        <div
          ref={(el) => {
            fadeinRefs.current[5] = el;
          }}
          className="flex md:max-w-[1440px] xs:max-w-full mx-auto w-full md:min-h-screen xs:min-h-0 md:gap-20 xs:gap-4 justify-between xs:px-5"
        >
          <div className="flex flex-col flex-wrap">
            <img
              src="myplat_m1.png"
              alt="Myplat Moblie 메인페이지"
              className="w-full z-10 md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
            <img
              src="myplat_m1-1.png"
              alt="Myplat Moblie 메인페이지"
              className="w-full shadow-lg md:-mt-8 xs:-mt-2"
            />
          </div>
          <div className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4 md:mt-[100px] xs:mt-10">
            <img
              src="myplat_m2.png"
              alt="Myplat Moblie 프로젝트"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
            <img
              src="myplat_m3.png"
              alt="Myplat Moblie 내가 지원한 프로젝트"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
            <img
              src="myplat_m4.png"
              alt="Myplat Moblie 프로젝트 공고"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
          </div>
          <div className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4">
            <img
              src="myplat_m5.png"
              alt="Myplat Moblie 매칭카드"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
            <img
              src="myplat_m6.png"
              alt="Myplat Moblie 증명서 발급 내역"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
            <img
              src="myplat_m7.png"
              alt="Myplat Moblie 매칭카드 수정"
              className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            />
          </div>
        </div>
      </section>

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
      <section
        ref={sectionRef2}
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
      <section className="relative md:py-[200px] xs:py-20 bg-background-blue">
        <div className="relative mx-auto md:max-w-[1440px] xs:max-w-full xs:px-5">
          <div
            ref={(el) => {
              fadeinRefs.current[9] = el;
            }}
            className="flex md:flex-row xs:flex-col justify-between w-full md:max-w-[1440px] xs:max-w-full mx-auto md:mb-[100px] xs:mb-10 xs:gap-4"
          >
            <h3 className="font-sans font-bold text-blue md:text-pt-section-title xs:text-pt-section-title-xs">
              Admin Page
            </h3>
            <p className="font-sans font-normal md:max-w-xl xs:max-w-full text-primary text-pt-body">
              운영자(Admin) 페이지를 직접 구현하여, 회원·프로젝트 통계, 일정,
              알림 등 핵심 데이터를 한눈에 관리할 수 있도록 만들었습니다.
              kendo.js로 데이터 그리드·캘린더 등 복잡한 UI와 관리 기능을
              효율적으로 구현했고, chart.js로 주요 지표를 시각화해 트렌드 파악을
              쉽게 했습니다.
            </p>
          </div>
          <img
            ref={(el) => {
              fadeinRefs.current[10] = el;
            }}
            src="/myplat_bo1.png"
            alt="Myplat Main Image"
            className="w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
        </div>
      </section>

      {/* Section 11 : 마이플랫 어드민 서브페이지 Swiper */}
      <section className="md:pb-[200px] xs:pb-20 w-full overflow-hidden bg-background-blue">
        <div
          ref={(el) => {
            fadeinRefs.current[11] = el;
          }}
          className="flex items-center justify-center"
        >
          <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full"
            style={{ paddingLeft: "0", paddingRight: "0" }}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              768: { slidesPerView: 2.5, spaceBetween: 40 },
            }}
          >
            {BOImages.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`slide-${i + 1}`}
                  className="object-cover w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-lg border-primary shadow-lg"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

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
