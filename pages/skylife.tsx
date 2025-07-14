"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";
import Loading from "@/components/Loading";

gsap.registerPlugin(ScrollTrigger);

export default function SkyLife() {
  const fadeinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLDivElement>(null);
  const topTitleRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const subImages = [
    ["/skylife_sub1.png", "/skylife_sub2.png"],
    ["/skylife_sub3.png", "/skylife_sub4.png"],
    ["/skylife_sub5.png", "/skylife_sub6.png"],
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {

      if (!sessionStorage.getItem("skylifeReloaded")) {
        sessionStorage.setItem("skylifeReloaded", "true");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        const timer = setTimeout(() => {
          setLoading(false);

          // 스크롤 복구
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          document.body.style.height = "";
          document.documentElement.style.height = "";
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  // 반응형 처리
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 모바일이면 2개만, 아니면 전체
  const visibleCols = isMobile ? 2 : subImages.length;

  // Section별 실제 fadein 인덱스
  // (아래는 예시, 실제 섹션 구조에 맞게 조정)
  const section6FadeinIndexes = isMobile
    ? [7, 8, 9, 10, 11] // 모바일: 타이틀(7) + 2col*2row(8~11)
    : [7, 8, 9, 10, 11, 12, 13]; // 데스크탑: 타이틀(7) + 3col*2row(8~13)

  // Section 8(Design System) 인덱스
  const section8Indexes = [14, 15, 16, 17, 18, 19];

  // 기타 섹션 fadein 인덱스 (예시)
  const otherFadeinIndexes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6, // Section 2~5 등
    ...section6FadeinIndexes,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  // GSAP 애니메이션 (Section 8 제외)
  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;
    let fadeTweens: gsap.core.Tween[] = [];
    let textTrigger: ScrollTrigger | null = null;
    let marqueeTween: gsap.core.Tween | null = null;

    function setupGsap() {
      // 모든 실제 렌더된 인덱스의 ref가 준비됐는지 체크
      if (
        otherFadeinIndexes.some((idx) => !fadeinRefs.current[idx]) ||
        !sectionRef.current ||
        textRefs.current.length < 3 ||
        textRefs.current.some((el) => !el)
      ) {
        retryTimeout = setTimeout(setupGsap, 50);
        return;
      }

      // 텍스트 그라데이션
      textRefs.current.forEach(
        (el) =>
          el &&
          gsap.set(el, {
            backgroundSize: "0% 100%",
            opacity: 1.2,
          })
      );

      textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: ({ progress }) => {
          textRefs.current.forEach(
            (el) =>
              el &&
              gsap.set(el, {
                backgroundSize: `${progress * 100}% 100%`,
                opacity: 1 + progress * 2,
              })
          );
        },
      });

      // 실제 렌더된 요소만 애니메이션
      fadeTweens = otherFadeinIndexes
        .map((idx) => {
          const el = fadeinRefs.current[idx];
          if (!el) return null;
          return gsap.fromTo(
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
        })
        .filter(Boolean) as gsap.core.Tween[];

      // 마퀴 애니메이션
      const marqueeContainer = marqueeRef.current;
      const marqueeText = marqueeTextRef.current;
      if (marqueeContainer && marqueeText) {
        while (marqueeContainer.children.length > 1) {
          marqueeContainer.removeChild(marqueeContainer.lastChild!);
        }
        const textClone = marqueeText.cloneNode(true) as HTMLElement;
        marqueeContainer.appendChild(textClone);

        const gap = isMobile ? 30 : 60;
        marqueeText.style.display = "inline-block";
        textClone.style.display = "inline-block";
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
    }

    // 상단 타이틀 Fade-in
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

    setupGsap();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      fadeTweens.forEach((t) => t && t.kill());
      textTrigger?.kill();
      marqueeTween?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (marqueeRef.current) marqueeRef.current.style.transform = "";
    };
  }, [isMobile, otherFadeinIndexes.join(",")]); // 인덱스 배열이 바뀌면 재실행

  // Section 8(Design System) 페이드인 애니메이션 전용
  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    function setupSection8Fadein() {
      const targets = section8Indexes.map((idx) => fadeinRefs.current[idx]);
      if (targets.some((el) => !el)) {
        retryTimeout = setTimeout(setupSection8Fadein, 50);
        return;
      }
      targets.forEach((el) => {
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
    }

    setupSection8Fadein();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen bg-white">
      {/* Section 1 : 메인 이미지 */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/work1.png"
          alt="SkyLife Background"
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
            스카이라이프
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
          <div className="flex flex-wrap gap-4 md:flex-row md:max-w-xl xs:max-w-full xs:flex-col">
            <h2 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
              스카이라이프 홈페이지 고도화
            </h2>
            <div className="flex flex-wrap max-w-xl gap-4">
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Client.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  KT스카이라이프
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
                  2025. 03
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Service.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  UX Strategy, Visual Design, Interactive Design, Development
                </span>
              </div>
              <a
                href="https://www.skylife.co.kr/"
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
                스카이라이프의 브랜드 이미지를 강화하고, 사용자 경험(UX) 향상을
                목표로 한 홈페이지 고도화 프로젝트를 진행했습니다. 다양한
                디바이스에서의 접근성과 시각적 완성도를 높이고, 주요 서비스에
                대한 사용자 접근 경로를 명확히 하여 고객 중심의 웹 환경을
                구현했습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Concept</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                사용자에게 보다 직관적이고 끊김 없는 탐색 흐름을 제공하는 것을
                핵심 컨셉으로 설정하였습니다. 스카이라이프의 미디어/통신 서비스
                특성을 반영하여 시각적으로는 깔끔하고 미래지향적인 느낌을 주되,
                사용자 여정 상에서는 정보 탐색의 효율성을 최우선으로
                고려했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : 스카이라이프 소개 */}
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center gap-10 md:min-h-screen xs:min-h-0 md:py-0 xs:py-20 bg-background-green"
      >
        <img
          src="/skylife_logo.png"
          alt="SkyLife Logo"
          className="w-full md:max-w-xl xs:max-w-[240px]"
        />
        <p className="font-sans font-bold text-center md:mx-auto xs:mx-5 md:text-pt-section-title xs:text-pt-subtitle-xs">
          <span
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="inline-block text-fill-effect"
          >
            스카이라이프는 전국 어디서나 고화질 방송과
          </span>
          <br />
          <span
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="inline-block text-fill-effect"
          >
            다양한 미디어 서비스를 제공하는
          </span>
          <br />
          <span
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className="inline-block text-fill-effect"
          >
            대한민국의 대표 위성방송 브랜드입니다.
          </span>
        </p>
      </section>

      {/* Section 4 : 프로젝트 미리보기 */}
      <section className="relative md:min-h-screen xs:min-h-0 md:py-[200px] xs:py-20 bg-white">
        <div className="max-w-[1440px] flex flex-col items-center justify-center md:mx-auto xs:mx-5">
          <div
            ref={(el) => {
              fadeinRefs.current[1] = el;
            }}
            className="relative z-0 w-full overflow-hidden"
          >
            <span
              className="font-bold md:text-inter-title font-inter whitespace-nowrap
        bg-gradient-to-r from-[#05C753] to-[#61FFA0]
        bg-clip-text text-transparent inline-block xs:text-[36px] w-full text-center"
            >
              Interactive Design
            </span>
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[2] = el;
            }}
            className="relative z-10 pointer-events-none select-none md:-mt-8 xs:-mt-4"
          >
            <img src="/macbook.png" alt="Macbook Mockup" className="w-full" />
            {/* 화면 안에 실제 서비스 이미지 오버레이 */}
            <div
              className="absolute left-1/2 top-[2%] w-[87.2%] h-[86.8%] rounded-t-lg -translate-x-1/2 overflow-y-auto bg-white pointer-events-auto hide-scrollbar"
              onWheel={(e) => e.stopPropagation()}
            >
              <img
                src="/skylife_work1.jpg"
                alt="Interactive Example"
                className="w-full"
                style={{ minHeight: 1200 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : 프로젝트 메인페이지 */}
      <section className="md:min-h-screen xs:min-h-0 bg-white md:py-[200px] xs:py-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 */}
          <div
            ref={(el) => {
              fadeinRefs.current[3] = el;
            }}
            className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4"
          >
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Main Page
            </h3>
            <p className="max-w-xl font-sans font-normal text-pt-body text-primary">
              스카이라이프만의 브랜드 아이덴티티와 고유한 컬러감을 대담한 화면
              전환과 색상 조합으로 시각적으로 표현하였습니다. 사용자들이 다양한
              미디어 콘텐츠에 더욱 몰입할 수 있도록, 인터랙티브한 구조와 동적인
              요소를 적극적으로 도입하여 웹사이트를 설계했습니다.
            </p>
          </div>
          {/* 리뷰 Swiper 영상 */}
          <div
            ref={(el) => {
              fadeinRefs.current[4] = el;
            }}
            className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden"
          >
            <video
              src="/skylife_review.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="object-cover w-full h-full"
            />
          </div>
          {/* 혜택 Swiper 영상 */}
          <div
            ref={(el) => {
              fadeinRefs.current[5] = el;
            }}
            className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden"
          >
            <video
              src="/skylife_benefit.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="object-cover w-full h-full"
            />
          </div>
          {/* 포인트 Swiper 영상 */}
          <div
            ref={(el) => {
              fadeinRefs.current[6] = el;
            }}
            className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden"
          >
            <video
              src="/skylife_point.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Section 6 : 프로젝트 서브페이지 */}
      <section className="md:min-h-screen xs:min-h-0 bg-white md:py-[200px] xs:py-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 */}
          <div
            ref={(el) => {
              fadeinRefs.current[7] = el;
            }}
            className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4"
          >
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Sub Page
            </h3>
            <p className="max-w-xl font-sans font-normal text-pt-body text-primary">
              각 서브페이지는 스카이라이프 서비스의 세부 정보와 이용 절차를
              명확하게 안내합니다. 직관적인 내비게이션으로 사용자가 원하는
              정보를 쉽고 빠르게 찾을 수 있도록 설계했습니다. 서비스별 특징과
              신청 방법을 한눈에 확인할 수 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 xs:grid-cols-2 md:gap-10 xs:gap-4">
            {subImages.slice(0, visibleCols).map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col md:gap-10 xs:gap-4">
                {col.map((src, rowIdx) => {
                  const flatIdx = colIdx * 2 + rowIdx; // 0~5
                  return (
                    <div
                      key={src}
                      ref={(el) => {
                        fadeinRefs.current[8 + flatIdx] = el;
                      }}
                      className="flex flex-row items-center justify-center overflow-hidden"
                    >
                      <img
                        src={src}
                        alt="Sub Page"
                        className="w-full max-w-full"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 : 프로젝트 PC 목업 */}
      <section className="flex flex-col items-center w-full bg-white">
        <img
          src="/skylife_mockup.png"
          alt="PC Sub Page Mockup"
          className="w-full max-w-full"
        />
      </section>

      {/* Section 8 : 프로젝트 UI 시스템 */}
      <section className="min-h-screen bg-white md:py-[200px] xs:py-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 - Colors */}
          <div
            ref={(el) => {
              fadeinRefs.current[14] = el;
            }}
            className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4"
          >
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Design System
            </h3>
            <p className="max-w-xl font-sans font-normal text-pt-body text-primary">
              Atomic Design 원칙에 따라 컴포넌트를 체계적으로 설계하고 색상,
              여백, 그리드, 버튼 등 UI/UX 요소를 표준화하여 일관성을
              확보했습니다. 반응형 웹 환경과 효율적인 유지보수를 위해 Figma
              기반의 디자인 시스템을 구축하였습니다.
            </p>
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[15] = el;
            }}
            className="flex w-full"
          >
            <img
              src="/skylife_color.png"
              alt="Color System"
              className="w-full max-w-full"
            />
          </div>
          {/* 상단 타이틀 - Icons */}
          <div
            ref={(el) => {
              fadeinRefs.current[16] = el;
            }}
            className="flex w-full md:mt-[100px] xs:mt-10"
          >
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Icons
            </h3>
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[17] = el;
            }}
            className="grid w-full gap-10 md:grid-cols-2 xs:grid-cols-1"
          >
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                System Icons
              </p>
              <img
                src="/skylife_icon1.png"
                alt="System Icons"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Graphic Icons
              </p>
              <img
                src="/skylife_icon2.png"
                alt="Graphic Icons"
                className="w-full max-w-full"
              />
            </div>
          </div>
          {/* 상단 타이틀 - Components */}
          <div
            ref={(el) => {
              fadeinRefs.current[18] = el;
            }}
            className="flex w-full md:mt-[100px] xs:mt-10"
          >
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Components
            </h3>
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[19] = el;
            }}
            className="grid w-full gap-10 md:grid-cols-2 xs:grid-cols-1"
          >
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Button
              </p>
              <img
                src="/skylife_button.png"
                alt="Button"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Checkbox
              </p>
              <img
                src="/skylife_checkbox.png"
                alt="Checkbox"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Dropdown
              </p>
              <img
                src="/skylife_dropdown.png"
                alt="Dropdown"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Text Field
              </p>
              <img
                src="/skylife_textfield.png"
                alt="Text Field"
                className="w-full max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 : 프로젝트 모바일*/}
      <section className="relative flex flex-col md:py-[200px] xs:py-20 items-center w-full min-h-screen overflow-hidden bg-green">
        {/* 상단 텍스트 */}
        <div className="w-full max-w-[1440px] mx-auto ">
          <h3
            ref={(el) => {
              fadeinRefs.current[20] = el;
            }}
            className="block font-sans font-bold text-white md:text-pt-section-title xs:text-pt-section-title-xs mb-14 md:mx-0 xs:mx-5"
          >
            Mobile Design
          </h3>
          <div
            ref={(el) => {
              fadeinRefs.current[21] = el;
            }}
            className="relative flex justify-center w-full mx-auto md:max-w-2xl xs:max-w-xs"
          >
            <img
              src="/skylife_mockup2.png"
              alt="모바일 목업"
              className="w-full h-full"
            />
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[22] = el;
            }}
            className="absolute left-0 w-full overflow-hidden pointer-events-none select-none"
          >
            <div ref={marqueeRef} className="flex whitespace-nowrap">
              <div
                ref={marqueeTextRef}
                className="inline-block font-bold font-inter md:text-inter-title xs:text-inter-title-xs text-white/40 whitespace-nowrap"
              >
                Connect for Happy Life, KT SkyLife
              </div>
            </div>
          </div>
          <div className="relative z-10 grid w-full md:grid-cols-4 xs:grid-cols-2 xs:mt-[100px] md:gap-10 xs:gap-4 md:mt-[240px] md:mx-auto xs:mx-5 xs:max-w-fit">
            {/* 1번째 그룹: skylife_mobile1 ~ skylife_mobile4 */}
            {[
              "/skylife_mobile1.png",
              "/skylife_mobile2.png",
              "/skylife_mobile3.png",
              "/skylife_mobile4.png",
            ].map((src, i) => {
              let marginClass = "";
              if (i % 2 === 0) marginClass += " md:mt-[60px]";
              if (i === 0) marginClass += " xs:mt-12";
              else if (i === 3 || i === 7) marginClass += " xs:-mt-12";
              return (
                <div
                  key={i}
                  ref={(el) => {
                    fadeinRefs.current[23 + i] = el;
                  }}
                  className={`flex items-center justify-center overflow-hidden xs:max-h-[460px] md:max-h-[800px] md:rounded-3xl xs:rounded-xl w-full${
                    marginClass ? " " + marginClass : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`Skylife Mobile ${i + 1}`}
                    className="w-full"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          <div className="relative z-10 grid w-full md:grid-cols-4 md:-mt-5 xs:-mt-8 xs:grid-cols-2 md:gap-10 xs:gap-4 md:mx-auto xs:mx-5 xs:max-w-fit">
            {[
              "/skylife_mobile5.png",
              "/skylife_mobile6.png",
              "/skylife_mobile7.png",
              "/skylife_mobile8.png",
            ].map((src, i) => {
              let marginClass = "";
              if (i % 2 === 0) marginClass += " md:mt-[60px]";
              if (i === 0) marginClass += " xs:mt-12";
              else if (i === 3 || i === 7) marginClass += " xs:-mt-12";
              return (
                <div
                  key={i}
                  ref={(el) => {
                    fadeinRefs.current[27 + i] = el;
                  }}
                  className={`flex items-center justify-center overflow-hidden xs:max-h-[460px] md:max-h-[800px] md:rounded-3xl xs:rounded-xl w-full${
                    marginClass ? " " + marginClass : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`Skylife Mobile ${i + 5}`}
                    className="w-full"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute left-0 z-10 w-screen pointer-events-none xs:bottom-20 md:bottom-40 h-60 bg-gradient-to-t from-background-green to-transparent" />
        </div>
      </section>

      {/* Section 10 : 하단 배경 */}
      <section className="relative flex items-center justify-center w-full mx-auto bg-white md:max-h-full xs:max-h-[400px]">
        <img
          src="/skylife_bg.png"
          alt="Skylife Background"
          className="hidden object-cover w-full md:block"
        />
        <img
          src="/skylife_bg_mobile.png"
          alt="Skylife Background Mobile"
          className="block object-cover w-full h-full md:hidden"
        />
        <div
          ref={(el) => {
            fadeinRefs.current[31] = el;
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center md:gap-8 xs:gap-4"
        >
          <img
            src="/skylife_logo.png"
            alt="SkyLife Logo"
            className="w-full md:max-w-96 xs:max-w-40"
          />
          <p className="font-sans font-semibold text-center md:text-pt-section-title xs:text-pt-subtitle">
            <span className="text-green">언제 어디서나, 일상의 파트너</span>
            <br />
            <span className="text-white">즐거움과 감동을 더 가까이</span>
          </p>
        </div>
      </section>

      <Footer />

      {loading && <Loading />}
    </div>
  );
}
