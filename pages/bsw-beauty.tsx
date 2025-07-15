"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";
import AOS from "aos";
import "aos/dist/aos.css";
import useFadeInOnScroll from "@/src/hooks/useFadeInOnScroll";

gsap.registerPlugin(ScrollTrigger);

const POSImages = [
  [
    { src: "/bsw_pos1.png", alt: "REVIEW ITEM" },
    { src: "/bsw_pos2.png", alt: "POS Main" },
    { src: "/bsw_pos3.png", alt: "SEARCH PRODUCT" },
    { src: "/bsw_pos4.png", alt: "SEARCH TRANSACTION" },
  ],
  [
    { src: "/bsw_pos5.png", alt: "CHECKOUT" },
    { src: "/bsw_pos6.png", alt: "POS SIGN IN" },
    { src: "/bsw_pos7.png", alt: "RETURN/REFUND" },
    { src: "/bsw_pos8.png", alt: "PAYMENT INFORMATION" },
  ],
];

const HQMainImages = [
  "/bsw_hq-main1.png",
  "/bsw_hq-main2.png",
  "/bsw_hq-main3.png",
];

const HQSubImages = [
  ["/bsw_hq-sub1.png", "/bsw_hq-sub2.png"],
  ["/bsw_hq-sub3.png", "/bsw_hq-sub4.png"],
  ["/bsw_hq-sub5.png", "/bsw_hq-sub6.png"],
];

export default function BSW() {
  useFadeInOnScroll();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Section 1 : 메인 이미지/타이틀 */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/work2.png"
          alt="SkyLife Background"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center fade-in-section">
          <p className="font-sans font-light text-white md:text-pt-subsection-title xs:text-pt-subtitle-xs">
            Retail Management
          </p>
          <h2 className="mt-2 font-sans font-semibold text-white md:text-pt-title xs:text-pt-title-xs">
            BSW Beauty
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
          <div className="flex flex-col gap-8">
            <h2 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
              BSW Beauty 솔루션 구축
            </h2>
            <div className="flex flex-wrap gap-4 md:flex-row md:max-w-xl xs:max-w-full xs:flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Client.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  BSW Beauty
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Category.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Retail Management
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Date.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  2024. 09
                </span>
              </div>
              <div className="flex gap-2 md:items-center xs:items-start">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Service.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Shopify, e-Commerce, Management, Development
                </span>
              </div>
              <button
                onClick={(e) => {
                  alert(
                    "해당 프로젝트는 현재 비공개 처리되어 있어 열람하실 수 없습니다."
                  );
                }}
                className="px-8 py-3 font-sans font-normal transition-all duration-300 ease-out bg-white border rounded-full text-primary md:mt-12 xs:mt-6 text-pt-body border-primary-extraLight hover:bg-primary hover:text-white hover:border-transparent"
              >
                사이트 바로가기
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-xl md:Fgap-16 xs:gap-8 md:mt-0 xs:mt-14">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Brief</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                BSW Beauty Retail Management는 제품 및 재고 관리 시스템 통합,
                배송시스템 구축, 주문(Order) 시스템 개발, Shopify 연동 등 기업의
                물류·유통·이커머스 전반을 아우르는 통합 솔루션을 구축하고 실무
                효율성과 데이터 신뢰성을 높였습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Concept</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                BSW Beauty Retail Management는 카드형 상품 리스트, 컬러 블록
                버튼, 실시간 합계 등 현장 실무에 최적화된 직관적인 디자인 요소를
                갖추며 주요 정보와 액션이 한눈에 들어오도록 배치되어 사용자가
                빠르고 정확하게 주문·결제·재고 관리를 할 수 있도록
                설계하였습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : POS System 목업 이미지 */}
      <section className="relative flex flex-col items-center justify-center md:py-[200px] xs:py-20 bg-primary">
        <h1 className="font-bold text-white md:mx-auto xs:mx-5 md:text-inter-title font-inter xs:text-inter-title-xs fade-in-section">
          BSW Beauty
          <br />
          Retail POS System
        </h1>
        <div className="relative z-10 pointer-events-none select-none md:-mt-5 xs:mt-0 md:mx-auto xs:mx-5 fade-in-section">
          <img
            src="/bsw-macbook.png"
            alt="Macbook Mockup"
            className="md:w-[1440px] max-w-full xs:w-full"
          />
        </div>
      </section>

      {/* Section 4 : POS System 주요 페이지 */}
      <section className="flex flex-col md:gap-10 xs:gap-2 items-center justify-center w-full overflow-hidden md:min-h-screen xs:min-h-0 md:pb-[200px] xs:pb-20 bg-primary">
        {POSImages.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`grid md:w-[130%] xs:w-[150%] md:grid-cols-4 xs:grid-cols-3 md:gap-10 xs:gap-2 pointer-events-none select-none fade-in-section ${
              rowIdx === 0 ? "ml-[10%]" : "mr-[10%]"
            }`}
          >
            {row.map((img, colIdx) => {
              if (isMobile && colIdx === row.length - 1) return null;
              return (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full bg-white border rounded-lg md:rounded-2xl border-primary-light fade-in-section"
                />
              );
            })}
          </div>
        ))}
      </section>

      {/* Section 5 : POS System Font */}
      <section className="flex flex-col items-center w-full mx-auto overflow-hidden bg-primary">
        <div className="w-full md:max-w-[1440px] xs:max-w-full flex md:flex-row xs:flex-col md:pb-[200px] xs:pb-20 md:gap-0 xs:gap-10 fade-in-section">
          <div className="flex flex-col flex-1 md:gap-6 xs:gap-4 md:mx-auto xs:mx-5">
            <h2 className="font-bold text-white font-inter md:text-inter-subtitle xs:text-inter-subtitle-xs">
              Inter
            </h2>
            <div className="font-normal text-white md:text-xl font-inter xs:text-inter-desc-xs">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
            </div>
          </div>
          <div className="flex md:gap-20 xs:gap-4 xs:justify-between md:mx-auto xs:mx-5">
            <div className="flex flex-col items-center">
              <span className="font-normal text-white md:text-6xl font-inter xs:text-inter-subtitle-xs">
                Aa
              </span>
              <span className="mt-3 font-normal text-white md:text-lg font-inter xs:text-inter-desc-xs">
                Regular
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium text-white md:text-6xl font-inter xs:text-inter-subtitle-xs">
                Aa
              </span>
              <span className="mt-3 font-medium text-white md:text-lg font-inter xs:text-inter-desc-xs">
                Medium
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-white md:text-6xl font-inter xs:text-inter-subtitle-xs">
                Aa
              </span>
              <span className="mt-3 font-semibold text-white md:text-lg font-inter xs:text-inter-desc-xs">
                SemiBold
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-white md:text-6xl font-inter xs:text-inter-subtitle-xs">
                Aa
              </span>
              <span className="mt-3 font-bold text-white md:text-lg font-inter xs:text-inter-desc-xs">
                Bold
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : POS System Color System */}
      <section className="flex flex-col items-center md:pb-[200px] xs:pb-20 mx-auto bg-primary">
        {/* 상단 타이틀 */}
        <div className="flex w-full md:max-w-[1440px] xs:max-w-full md:mb-[100px] xs:mb-10 fade-in-section">
          <h3 className="font-sans font-bold text-white md:mx-0 xs:mx-5 md:text-pt-section-title xs:text-pt-section-title-xs">
            Color System
          </h3>
        </div>
        <div className="flex flex-col md:gap-8 xs:gap-4 md:max-w-[1440px] xs:max-w-full pointer-events-none select-none md:mx-auto xs:mx-5 fade-in-section">
          <img
            src="/bsw_pos-blue.png"
            alt="blue color"
            className="hidden object-cover w-full rounded-2xl md:block"
          />
          <img
            src="/bsw_pos-blue_mobile.png"
            alt="blue color"
            className="block object-cover w-full rounded-mds md:hidden"
          />
          <img
            src="/bsw_pos-beige.png"
            alt="beige color"
            className="hidden object-cover w-full rounded-2xl md:block"
          />
          <img
            src="/bsw_pos-beige_mobile.png"
            alt="beige color"
            className="block object-cover w-full rounded-mds md:hidden"
          />
          <img
            src="/bsw_pos-green.png"
            alt="green color"
            className="hidden object-cover w-full rounded-2xl md:block"
          />
          <img
            src="/bsw_pos-green_mobile.png"
            alt="green color"
            className="block object-cover w-full rounded-mds md:hidden"
          />
          <img
            src="/bsw_pos-pink.png"
            alt="pink color"
            className="hidden object-cover w-full rounded-2xl md:block"
          />
          <img
            src="/bsw_pos-pink_mobile.png"
            alt="pink color"
            className="block object-cover w-full rounded-mds md:hidden"
          />
          <img
            src="/bsw_pos-purple.png"
            alt="purple color"
            className="hidden object-cover w-full rounded-2xl md:block"
          />
          <img
            src="/bsw_pos-purple_mobile.png"
            alt="purple color"
            className="block object-cover w-full rounded-mds md:hidden"
          />
        </div>
      </section>

      {/* Section 7 : POS System Icons */}
      <section className="flex flex-col items-center md:pb-[200px] xs:pb-20 mx-auto bg-primary">
        {/* 상단 타이틀 */}
        <div className="flex w-full md:max-w-[1440px] xs:max-w-full md:mb-[100px] xs:mb-10 fade-in-section">
          <h3 className="font-sans font-bold text-white md:mx-0 xs:mx-5 md:text-pt-section-title xs:text-pt-section-title-xs">
            Icons
          </h3>
        </div>
        <div className="flex md:max-w-[1440px] xs:max-w-full pointer-events-none select-none md:mx-auto xs:mx-5 fade-in-section">
          <img
            src="/bsw_pos-icon.png"
            alt="POS Icon"
            className="object-cover w-full"
          />
        </div>
      </section>

      {/* Section 8 : BSW HQ 목업 이미지 */}
      <section className="flex flex-col items-center w-full">
        <img
          src="/bsw_hq-mockup.png"
          alt="PC Sub Page Mockup"
          className="w-full max-w-full"
        />
      </section>

      {/* Section 9 : BSW HQ Dashboard 비디오 */}
      <section className="flex flex-col items-center md:py-[200px] xs:py-20 md:px-0 xs:px-5 bg-primary">
        <div className="md:h-[750px] xs:h-full w-full md:max-w-[1440px] xs:max-w-full mx-auto md:rounded-2xl xs:rounded-xl overflow-hidden pointer-events-auto select-auto md:border-4 xs:border-2 border-primary-deepLight fade-in-section">
          <video
            src="/bsw_hq.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Section 10 : BSW HQ 로그인,회원가입 페이지 */}
      <section className="mx-auto bg-primary">
        <div className="flex md:flex-row xs:flex-col md:max-w-[1440px] xs:max-w-full w-full mx-auto md:px-0 xs:px-5 md:gap-0 xs:gap-10 fade-in-section">
          {/* 왼쪽 고정 텍스트 */}
          <div className="md:sticky xs:relative md:top-[200px] xs:top-0 z-10 flex flex-col items-start justify-start md:w-1/2 xs:w-full h-fit text-white">
            <h3 className="font-sans font-bold md:mb-6 xs:mb-4 md:text-pt-section-title xs:text-pt-subsection-title">
              BSW HQ Design
            </h3>
            <p className="max-w-md font-sans text-pt-body">
              Material UI의 표준 컴포넌트(Table, TableHead, TableBody 등)를
              활용하여, 현대적이고 일관된 UI/UX와 빠른 개발, 유지보수가 가능한
              구조로 설계하였습니다. 또한, 제품 목록, 상태, 가격, 재고 등 핵심
              정보를 한눈에 볼 수 있도록 구현했습니다.
            </p>
          </div>

          {/* 오른쪽 이미지 스크롤 영역 */}
          <div className="flex flex-col md:gap-20 xs:gap-4 md:pl-12 xs:pl-0 md:w-1/2 xs:w-full">
            {HQMainImages.map((src, i) => (
              <div key={i} className="w-full md:h-[420px] xs:h-[200px]">
                <div className="flex items-center justify-center w-full h-full overflow-hidden shadow-lg pointer-events-none select-none md:rounded-2xl xs:rounded-xl">
                  <img
                    src={src}
                    alt={`section-${i + 1}`}
                    className="w-full"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11 : BSW HQ 주요 페이지 */}
      <section className="flex flex-col items-center md:min-h-screen xs:min-h-0 overflow-hidden mx-auto md:py-[200px] xs:py-20 bg-primary">
        <div className="relative grid grid-cols-3 md:gap-14 xs:gap-4 md:w-[110%] xs:w-[150%] h-full fade-in-section">
          {HQSubImages.map((col, colIdx) => (
            <div
              key={colIdx}
              className={
                "relative flex flex-col md:gap-14 xs:gap-4 pointer-events-none select-none" +
                (colIdx === 0 || colIdx === 2 ? " md:mt-40 xs:mt-14" : "")
              }
            >
              {col.map((src, rowIdx) => (
                <div
                  key={src}
                  className="flex items-center justify-center overflow-hidden md:rounded-2xl xs:rounded-lg"
                >
                  <img
                    src={src}
                    alt="Sub Page"
                    className="object-cover w-full"
                  />
                </div>
              ))}
              <div className="absolute bottom-0 left-0 z-10 w-full pointer-events-none md:h-96 xs:h-60 bg-gradient-to-t from-background to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 12 : BSW Beauty 슬로건 */}
      <section className="flex flex-col md:pb-[200px] xs:pb-20 bg-primary">
        <div className="md:max-w-[1440px] xs:max-w-full md:mx-auto xs:mx-5 fade-in-section">
          <h2 className="font-bold text-white/20 md:text-inter-subtitle font-inter xs:text-inter-subtitle-xs">
            BSW BEAUTY,
            <br />
            GLOW UP YOUR STYLE
            <br />
            YOUR BEAUTY, YOUR WAY!
          </h2>
        </div>
      </section>

      {/* Section 13 : BSW App 목업 이미지 */}
      <section className="flex items-center w-full">
        <img
          src="/bsw_logo.png"
          alt="BSW Logo"
          className="hidden object-cover w-1/2 md:block"
        />
        <img
          src="/bsw_logo_mobile.png"
          alt="BSW Logo"
          className="block object-cover w-1/2 h-full md:hidden"
        />
        <img
          src="/bsw_app-mockup.png"
          alt="BSW App Mockup"
          className="hidden object-cover w-1/2 md:block"
        />
        <img
          src="/bsw_app-mockup_mobile.png"
          alt="BSW App Mockup"
          className="block object-cover w-1/2 h-full md:hidden"
        />
      </section>

      {/* Section 14 : BSW Mobile Design */}
      <section className="relative flex flex-col md:py-[200px] xs:py-20 items-center w-full min-h-screen overflow-hidden bg-primary">
        {/* 상단 텍스트 */}
        <div className="w-full md:max-w-[1440px] xs:max-w-full mx-auto">
          <h3 className="block font-sans font-bold text-white md:text-pt-section-title xs:text-pt-section-title-xs mb-14 md:mx-auto xs:mx-5 fade-in-section">
            Mobile Design
          </h3>
          <div className="relative flex justify-center w-full mx-auto pointer-events-none select-none md:px-0 xs:px-5 md:max-w-3xl xs:max-w-full fade-in-section">
            <img
              src="/bsw_app-mockup2.png"
              alt="BSW App Mockup"
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold font-inter md:text-inter-title xs:text-inter-title-xs md:text-[#FF2F93]/5 xs:text-[#FF2F93]/10 md:mx-auto xs:mx-5 md:pt-[100px] xs:pt-10 fade-in-section">
            HQ APP & <br />
            BSW Mobile
          </h2>
          <div className="flex flex-col md:gap-[200px] xs:gap-20">
            <div className="flex items-center w-full md:flex-row xs:flex-col md:px-0 xs:px-5 md:-mt-20 xs:mt-0 md:gap-14 xs:gap-4 fade-in-section">
              <p className="font-sans text-white md:w-2/3 xs:w-full text-pt-body">
                React 기반 컴포넌트 구조로 설계하여, 각 구매 건을 카드
                <br className="hidden md:inline" />
                형태의 리스트로 나열하고, 현재 상태를 컬러 태그로 표현했습니다.
                <br className="hidden md:inline" />
                또한, 선택한 구매 건의 정보와 품목별 데이터를 실시간으로
                <br className="hidden md:inline" />
                입력·수정이 가능하도록 구현했습니다.
              </p>
              <div className="grid w-full grid-cols-2 pointer-events-none select-none md:gap-14 xs:gap-4">
                <img
                  src="/bsw_app-main1.png"
                  alt="BSW App"
                  className="object-cover w-full md:rounded-2xl xs:rounded-xl"
                />
                <img
                  src="/bsw_app-main2.png"
                  alt="BSW App"
                  className="object-cover w-full md:rounded-2xl xs:rounded-xl"
                />
              </div>
            </div>
            <div className="flex items-center w-full md:flex-row xs:flex-col-reverse md:px-0 xs:px-5 md:-mt-20 xs:mt-0 md:gap-14 xs:gap-4 fade-in-section">
              <div className="grid w-full grid-cols-2 pointer-events-none select-none md:gap-14 xs:gap-4">
                <img
                  src="/bsw_app-main3.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
                <img
                  src="/bsw_app-main4.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
              </div>
              <p className="font-sans text-white md:w-2/3 xs:w-full text-pt-body">
                재고 현황과 이력을 실시간으로 관리할 수 있는 직관적이고
                <br className="hidden md:inline" />
                효율적이게 구현하였습니다. 선택한 품목의 재고 이동 이력,
                <br className="hidden md:inline" />
                상세 내역 확인 등 실무자가 모바일환경에서 빠르고 정확하게
                <br className="hidden md:inline" />
                재고를 관리할 수 있도록 설계하였습니다.
              </p>
            </div>
            <div className="flex items-center w-full md:flex-row xs:flex-col md:px-0 xs:px-5 md:-mt-20 xs:mt-0 md:gap-14 xs:gap-4 fade-in-section">
              <p className="font-sans text-white md:w-2/3 xs:w-full text-pt-body">
                각 화면에서는 검색, 필터, 상세 내역 확인 등 실무자가 모바일
                <br className="hidden md:inline" />
                환경에서 빠르고 직관적으로 관리할 수 있도록 설계되어 있습니다.
                <br className="hidden md:inline" />
                제품을 신속하게 조회·선택할 수 있도록 설계된 직관적이고
                <br className="hidden md:inline" />
                실무 중심의 물류시스템 UI를 구현했습니다.
              </p>
              <div className="grid w-full grid-cols-2 pointer-events-none select-none md:gap-14 xs:gap-4">
                <img
                  src="/bsw_app-main5.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
                <img
                  src="/bsw_app-main6.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15 : BSW Logo Banner */}
      <section className="relative flex items-center justify-center w-full max-w-full mx-auto bg-white">
        <img
          src="/bsw_bg.png"
          alt="BSW Background"
          className="hidden object-cover w-full md:block"
        />
        <img
          src="/bsw_bg_mobile.png"
          alt="BSW Background Mobile"
          className="block object-cover w-full h-full md:hidden"
        />
      </section>

      <Footer />
    </div>
  );
}
