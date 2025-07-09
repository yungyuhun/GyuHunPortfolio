"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";

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
  const fadeinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topTitleRef = useRef<HTMLDivElement>(null);

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
        <div
          ref={topTitleRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        >
          <p className="font-sans font-light text-white text-pt-subsection-title">
            Retail Management
          </p>
          <h2 className="mt-2 font-sans font-semibold text-white text-pt-title">
            BSW Beauty
          </h2>
        </div>
        <div className="absolute z-10 -translate-x-1/2 left-1/2 bottom-8">
          <Scroll size={32} color="#fff" className="animate-bounce" />
        </div>
      </section>

      {/* Section 2 : 프로젝트 설명 */}
      <section className="relative max-w-[1440px] py-[200px] mx-auto bg-white">
        <div
          ref={(el) => {
            fadeinRefs.current[0] = el;
          }}
          className="flex justify-between"
        >
          <div className="flex flex-col gap-8">
            <h2 className="font-sans font-bold text-primary text-pt-section-title">
              BSW Beauty 솔루션 구축
            </h2>
            <div className="flex flex-wrap max-w-xl gap-4">
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Client.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  BSW Beauty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Category.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Retail Management
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Date.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  2024. 09
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Service.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Shopify, e-Commerce, Management, Development
                </span>
              </div>
              <button
                rel="noopener noreferrer"
                onClick={(e) => {
                  alert(
                    "해당 프로젝트는 현재 비공개 처리되어 있어 열람하실 수 없습니다."
                  );
                }}
                className="px-8 py-3 mt-12 font-sans font-normal text-black transition-all duration-300 ease-out bg-white border rounded-full text-pt-body border-primary-extraLight hover:bg-black hover:text-white hover:border-transparent"
              >
                사이트 바로가기
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-xl gap-16">
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
      <section className="relative flex flex-col items-center justify-center py-[200px] bg-primary">
        <h1
          ref={(el) => {
            fadeinRefs.current[1] = el;
          }}
          className="font-bold text-white text-inter-title font-inter"
        >
          BSW Beauty
          <br />
          Retail POS System
        </h1>
        <div
          ref={(el) => {
            fadeinRefs.current[2] = el;
          }}
          className="relative z-10 -mt-5 pointer-events-none select-none"
        >
          <img
            src="/bsw-macbook.png"
            alt="Macbook Mockup"
            className="w-[1440px] max-w-full i"
          />
        </div>
      </section>

      {/* Section 4 : POS System 주요 페이지 */}
      <section className="flex flex-col gap-14 items-center justify-center w-full overflow-hidden min-h-screen pb-[200px] bg-primary">
        {POSImages.map((row, rowIdx) => (
          <div
            key={rowIdx}
            ref={(el) => {
              fadeinRefs.current[3 + rowIdx] = el;
            }}
            className={`grid w-[130%] grid-cols-4 gap-14 pointer-events-none select-none ${
              rowIdx === 0 ? "ml-[10%]" : "mr-[10%]"
            }`}
          >
            {row.map((img, colIdx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="object-cover w-full bg-white border rounded-2xl border-primary-light"
              />
            ))}
          </div>
        ))}
      </section>

      {/* Section 5 : POS System Font */}
      <section className="flex flex-col items-center mx-auto bg-primary">
        <div
          ref={(el) => {
            fadeinRefs.current[5] = el;
          }}
          className="w-full max-w-[1440px] flex pb-[200px]"
        >
          <div className="flex flex-col flex-1 gap-6">
            <h2 className="font-bold text-white font-inter text-inter-subtitle">
              Inter
            </h2>
            <div className="text-xl font-normal text-white font-inter">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col items-center">
              <span className="text-6xl font-normal text-white font-inter">
                Aa
              </span>
              <span className="mt-3 text-lg font-normal text-white font-inter">
                Regular
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-medium text-white font-inter">
                Aa
              </span>
              <span className="mt-3 text-lg text-white font-inter">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-semibold text-white font-inter">
                Aa
              </span>
              <span className="mt-3 text-lg font-semibold text-white font-inter">
                SemiBold
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-white font-inter">
                Aa
              </span>
              <span className="mt-3 text-lg font-bold text-white font-inter">
                Bold
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : POS System Color System */}
      <section className="flex flex-col items-center pb-[200px] mx-auto bg-primary">
        {/* 상단 타이틀 */}
        <div
          ref={(el) => {
            fadeinRefs.current[6] = el;
          }}
          className="flex w-full max-w-[1440px] mb-[100px]"
        >
          <h3 className="font-sans font-bold text-white text-pt-section-title">
            Color System
          </h3>
        </div>
        <div
          ref={(el) => {
            fadeinRefs.current[7] = el;
          }}
          className="flex flex-col gap-8 max-w-[1440px] pointer-events-none select-none"
        >
          <img
            src="/bsw_pos-blue.png"
            alt="blue color"
            className="object-cover w-full rounded-2xl"
          />
          <img
            src="/bsw_pos-beige.png"
            alt="beige color"
            className="object-cover w-full rounded-2xl"
          />
          <img
            src="/bsw_pos-green.png"
            alt="green color"
            className="object-cover w-full rounded-2xl"
          />
          <img
            src="/bsw_pos-pink.png"
            alt="pink color"
            className="object-cover w-full rounded-2xl"
          />
          <img
            src="/bsw_pos-purple.png"
            alt="purple color"
            className="object-cover w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Section 7 : POS System Icons */}
      <section className="flex flex-col items-center pb-[200px] mx-auto bg-primary">
        {/* 상단 타이틀 */}
        <div
          ref={(el) => {
            fadeinRefs.current[8] = el;
          }}
          className="flex w-full max-w-[1440px] mb-[100px]"
        >
          <h3 className="font-sans font-bold text-white text-pt-section-title">
            Icons
          </h3>
        </div>
        <div
          ref={(el) => {
            fadeinRefs.current[9] = el;
          }}
          className="flex  max-w-[1440px] pointer-events-none select-none"
        >
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
      <section className="flex flex-col items-center py-[200px] bg-primary">
        <div
          ref={(el) => {
            fadeinRefs.current[10] = el;
          }}
          className="h-[750px] w-full max-w-[1440px] mx-auto rounded-2xl overflow-hidden pointer-events-auto select-auto border-4 border-primary-deepLight"
        >
          <video
            src="/bsw_hq.mp4"
            muted
            autoPlay
            loop
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Section 10 : BSW HQ 로그인,회원가입 페이지 */}
      <section className="flex flex-col items-center mx-auto bg-primary">
        <div
          ref={(el) => {
            fadeinRefs.current[11] = el;
          }}
          className="flex max-w-[1440px] w-full mx-auto"
        >
          {/* 왼쪽 고정 텍스트 */}
          <div className="sticky top-[200px] z-10 flex flex-col items-start justify-start w-1/2 h-fit text-white">
            <h3 className="mb-6 font-sans font-bold text-pt-section-title">
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
          <div className="flex flex-col w-1/2 gap-20 pl-12">
            {HQMainImages.map((src, i) => (
              <div key={i} className="w-full h-[420px]">
                <div className="flex items-center justify-center w-full h-full overflow-hidden shadow-lg pointer-events-none select-none rounded-2xl">
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
      <section className="flex flex-col items-center min-h-screen overflow-hidden mx-auto py-[200px] bg-primary">
        <div
          ref={(el) => {
            fadeinRefs.current[13] = el;
          }}
          className="relative grid grid-cols-3 gap-14 w-[110%] h-full"
        >
          {HQSubImages.map((col, colIdx) => (
            <div
              key={colIdx}
              className={
                "relative flex flex-col gap-14 pointer-events-none select-none" +
                (colIdx === 0 || colIdx === 2 ? " mt-40" : "")
              }
            >
              {col.map((src, rowIdx) => (
                <div
                  key={src}
                  className="flex items-center justify-center overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt="Sub Page"
                    className="object-cover w-full"
                  />
                </div>
              ))}
              <div className="absolute bottom-0 left-0 z-10 w-full pointer-events-none h-96 bg-gradient-to-t from-background to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 12 : BSW Beauty 슬로건 */}
      <section className="flex flex-col  pb-[200px] bg-primary">
        <div
          ref={(el) => {
            fadeinRefs.current[14] = el;
          }}
          className="max-w-[1440px] mx-auto"
        >
          <h2 className="font-bold text-white/20 text-inter-subtitle font-inter">
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
          className="object-cover w-1/2"
        />
        <img
          src="/bsw_app-mockup.png"
          alt="BSW App Mockup"
          className="object-cover w-1/2"
        />
      </section>

      {/* Section 14 : BSW Mobile Design */}
      <section className="relative flex flex-col py-[200px] items-center w-full min-h-screen overflow-hidden bg-primary">
        {/* 상단 텍스트 */}
        <div className="w-full max-w-[1440px] mx-auto">
          <h3
            ref={(el) => {
              fadeinRefs.current[15] = el;
            }}
            className="block font-sans font-bold text-white text-pt-section-title mb-14"
          >
            Mobile Design
          </h3>
          <div
            ref={(el) => {
              fadeinRefs.current[16] = el;
            }}
            className="relative flex justify-center w-full max-w-3xl mx-auto pointer-events-none select-none"
          >
            <img
              src="/bsw_app-mockup2.png"
              alt="BSW App Mockup"
              className="w-full h-full"
            />
          </div>
          <h2
            ref={(el) => {
              fadeinRefs.current[17] = el;
            }}
            className="font-bold font-inter text-inter-title text-[#FF2F93]/5 pt-[100px]"
          >
            HQ APP & <br />
            BSW Mobile
          </h2>
          <div className="flex flex-col gap-[200px]">
            <div
              ref={(el) => {
                fadeinRefs.current[18] = el;
              }}
              className="flex items-center w-full -mt-20 gap-14"
            >
              <p className="w-2/3 font-sans text-white text-pt-body">
                React 기반 컴포넌트 구조로 설계하여, 각 구매 건을 카드
                <br />
                형태의 리스트로 나열하고, 현재 상태를 컬러 태그로 표현했습니다.
                <br />
                또한, 선택한 구매 건의 정보와 품목별 데이터를 실시간으로
                <br />
                입력·수정이 가능하도록 구현했습니다.
              </p>
              <div className="grid w-full grid-cols-2 pointer-events-none select-none gap-14">
                <img
                  src="/bsw_app-main1.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
                <img
                  src="/bsw_app-main2.png"
                  alt="BSW App"
                  className="object-cover w-full rounded-2xl"
                />
              </div>
            </div>
            <div
              ref={(el) => {
                fadeinRefs.current[19] = el;
              }}
              className="flex items-center w-full gap-14"
            >
              <div className="grid w-full grid-cols-2 pointer-events-none select-none gap-14">
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
              <p className="w-2/3 font-sans text-right text-white text-pt-body">
                재고 현황과 이력을 실시간으로 관리할 수 있는 직관적이고
                <br />
                효율적이게 구현하였습니다. 선택한 품목의 재고 이동 이력,
                <br />
                상세 내역 확인 등 실무자가 모바일환경에서 빠르고 정확하게
                <br />
                재고를 관리할 수 있도록 설계하였습니다.
              </p>
            </div>
            <div
              ref={(el) => {
                fadeinRefs.current[20] = el;
              }}
              className="flex items-center w-full gap-14"
            >
              <p className="w-2/3 font-sans text-white text-pt-body">
                각 화면에서는 검색, 필터, 상세 내역 확인 등 실무자가 모바일
                <br />
                환경에서 빠르고 직관적으로 관리할 수 있도록 설계되어 있습니다.
                <br />
                제품을 신속하게 조회·선택할 수 있도록 설계된 직관적이고
                <br />
                실무 중심의 물류시스템 UI를 구현했습니다.
              </p>
              <div className="grid w-full grid-cols-2 pointer-events-none select-none gap-14">
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
      <section className="relative flex items-center justify-center w-full mx-auto bg-white min-h-[400px]">
        <img src="/bsw_bg.png" alt="Skylife Background" className="w-full" />
      </section>

      <Footer />
    </div>
  );
}
