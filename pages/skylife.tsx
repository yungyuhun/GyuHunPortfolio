"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";
import useFadeInOnScroll from "@/src/hooks/useFadeInOnScroll";

gsap.registerPlugin(ScrollTrigger);

export default function SkyLife() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll();

  const subImages = [
    ["/skylife_sub1.png", "/skylife_sub2.png"],
    ["/skylife_sub3.png", "/skylife_sub4.png"],
    ["/skylife_sub5.png", "/skylife_sub6.png"],
  ];

  const [isMobile, setIsMobile] = useState(false);
  // 모바일이면 2개만, 아니면 전체
  const visibleCols = isMobile ? 2 : subImages.length;

  // 반응형 처리
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 텍스트 애니메이션
  useEffect(() => {
    const targets =
      sectionRef.current?.querySelectorAll<HTMLSpanElement>(
        ".text-fill-effect"
      );
    if (!targets || targets.length === 0) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scrolled");
          } else {
            entry.target.classList.remove("scrolled");
          }
        });
      },
      { threshold: 0.8 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Section 1 : 메인 이미지 */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/work1.png"
          alt="SkyLife Background"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center fade-in-section">
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
        <div className="flex justify-between max-w-[1440px] md:mx-auto md:flex-row xs:flex-col xs:mx-5 fade-in-section">
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
          className="w-full md:max-w-xl xs:max-w-[240px] fade-in-section"
        />
        <p className="font-sans font-bold text-center md:mx-auto xs:mx-5 md:text-pt-section-title xs:text-pt-subtitle-xs fade-in-section">
          <span className="inline-block text-fill-effect">
            스카이라이프는 전국 어디서나 고화질 방송과
          </span>
          <br />
          <span className="inline-block text-fill-effect">
            다양한 미디어 서비스를 제공하는
          </span>
          <br />
          <span className="inline-block text-fill-effect">
            대한민국의 대표 위성방송 브랜드입니다.
          </span>
        </p>
      </section>

      {/* Section 4 : 프로젝트 미리보기 */}
      <section className="relative md:min-h-screen xs:min-h-0 md:py-[200px] xs:py-20 bg-white">
        <div className="max-w-[1440px] flex flex-col items-center justify-center md:mx-auto xs:mx-5 fade-in-section">
          <div className="relative z-0 w-full overflow-hidden">
            <span
              className="font-bold md:text-inter-title font-inter whitespace-nowrap
        bg-gradient-to-r from-[#05C753] to-[#61FFA0]
        bg-clip-text text-transparent inline-block xs:text-[36px] w-full text-center "
            >
              Interactive Design
            </span>
          </div>
          <div className="relative z-10 pointer-events-none select-none md:-mt-8 xs:-mt-4">
            <img src="/macbook.png" alt="Macbook Mockup" className="w-full" />
            {/* 화면 안에 실제 서비스 이미지 오버레이 */}
            <div
              className="absolute left-1/2 top-[2%] w-[87.2%] h-[86.8%] rounded-t-lg -translate-x-1/2 overflow-y-auto bg-white pointer-events-auto"
              onWheel={(e) => e.stopPropagation()}
            >
              <video
                src="/skylife_main.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : 프로젝트 메인페이지 */}
      <section className="md:min-h-screen xs:min-h-0 bg-white md:py-[200px] xs:py-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 */}
          <div className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4 fade-in-section">
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
          <div className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden fade-in-section">
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
          <div className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden fade-in-section">
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
          <div className="w-full max-w-[1440px] bg-white border-2 border-deepLight md:rounded-xl xs:rounded-lg overflow-hidden fade-in-section">
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
      <section className="md:min-h-screen xs:min-h-0 bg-white md:pb-[200px] xs:pb-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 */}
          <div className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4 fade-in-section">
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
                {col.map((src) => {
                  return (
                    <div
                      key={src}
                      className="flex flex-row items-center justify-center overflow-hidden fade-in-section"
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
          className="w-full max-w-full fade-in-section"
        />
      </section>

      {/* Section 8 : 프로젝트 UI 시스템 */}
      <section className="min-h-screen bg-white md:py-[200px] xs:py-20">
        <div className="max-w-[1440px] md:mx-auto xs:mx-5 flex flex-col items-center md:gap-[100px] xs:gap-10">
          {/* 상단 타이틀 - Colors */}
          <div className="flex justify-between w-full md:flex-row xs:flex-col md:gap-0 xs:gap-4 fade-in-section">
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
          <div className="flex w-full fade-in-section">
            <img
              src="/skylife_color.png"
              alt="Color System"
              className="w-full max-w-full"
            />
          </div>
          {/* 상단 타이틀 - Icons */}
          <div className="flex w-full md:mt-[100px] xs:mt-10 fade-in-section">
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs">
              Icons
            </h3>
          </div>
          <div className="grid w-full gap-10 md:grid-cols-2 xs:grid-cols-1">
            <div className="flex flex-col gap-6 fade-in-section">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                System Icons
              </p>
              <img
                src="/skylife_icon1.png"
                alt="System Icons"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6 fade-in-section">
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
          <div className="flex w-full md:mt-[100px] xs:mt-10">
            <h3 className="font-sans font-bold md:text-pt-section-title xs:text-pt-section-title-xs fade-in-section">
              Components
            </h3>
          </div>
          <div className="grid w-full gap-10 md:grid-cols-2 xs:grid-cols-1">
            <div className="flex flex-col gap-6 fade-in-section">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Button
              </p>
              <img
                src="/skylife_button.png"
                alt="Button"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6 fade-in-section">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Checkbox
              </p>
              <img
                src="/skylife_checkbox.png"
                alt="Checkbox"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6 fade-in-section">
              <p className="font-bold font-font-sans md:text-pt-subtitle xs:text-pt-subtitle-xs">
                Dropdown
              </p>
              <img
                src="/skylife_dropdown.png"
                alt="Dropdown"
                className="w-full max-w-full"
              />
            </div>
            <div className="flex flex-col gap-6 fade-in-section">
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
          <h3 className="block font-sans font-bold text-white md:text-pt-section-title xs:text-pt-section-title-xs mb-14 md:mx-0 xs:mx-5 fade-in-section">
            Mobile Design
          </h3>
          <div className="relative flex justify-center w-full mx-auto md:max-w-2xl xs:max-w-xs fade-in-section">
            <img
              src="/skylife_mockup2.png"
              alt="모바일 목업"
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-0 w-full overflow-hidden pointer-events-none select-none fade-in-section">
            <div className="marquee-container">
              <div className="marquee fade-in-section">
                <span className="inline-block font-bold font-inter md:text-inter-title xs:text-inter-title-xs text-white/40 whitespace-nowrap">
                  Connect for Happy Life, KT SkyLife
                </span>
                <span className="inline-block font-bold font-inter md:text-inter-title xs:text-inter-title-xs text-white/40 whitespace-nowrap">
                  Connect for Happy Life, KT SkyLife
                </span>
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
                  className={`flex items-center justify-center overflow-hidden xs:max-h-[460px] md:max-h-[800px] md:rounded-3xl xs:rounded-xl w-full fade-in-section${
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
                  className={`flex items-center justify-center overflow-hidden xs:max-h-[460px] md:max-h-[800px] md:rounded-3xl xs:rounded-xl w-full fade-in-section${
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:gap-8 xs:gap-4 fade-in-section">
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
    </div>
  );
}
