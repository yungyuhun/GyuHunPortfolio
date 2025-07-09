"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Scroll } from "@/src/icons/Icon";

gsap.registerPlugin(ScrollTrigger);

export default function Petpeace() {
  const fadeinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topTitleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLDivElement>(null);

  const topImages = [
    "/petpeace_sub5.png",
    "/petpeace_sub6.png",
    "/petpeace_sub9.png",
    "/petpeace_sub10.png",
    "/petpeace_sub11.png",
    "/petpeace_sub16.png",
  ];

  const bottomImages = [
    "/petpeace_sub8.png",
    "/petpeace_sub7.png",
    "/petpeace_sub12.png",
    "/petpeace_sub13.png",
    "/petpeace_sub14.png",
    "/petpeace_sub15.png",
  ];

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
      // 기존 클론 제거 (항상 1개만 클론)
      while (marqueeContainer.children.length > 1) {
        marqueeContainer.removeChild(marqueeContainer.lastChild!);
      }

      // 텍스트 클론 생성
      const textClone = marqueeText.cloneNode(true) as HTMLElement;
      marqueeContainer.appendChild(textClone);

      // 스타일 설정
      marqueeText.style.display = "inline-block";
      textClone.style.display = "inline-block";
      const gap = 60;
      marqueeContainer.style.gap = `${gap}px`;

      // 레이아웃 계산 후 실행
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
    <div className="relative w-full min-h-screen bg-white">
      {/* Section 1 : 메인 이미지/타이틀 */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/work4.png"
          alt="Petpeace Background"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div
          ref={topTitleRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        >
          <p className="font-sans font-light text-white text-pt-subsection-title">
            Web/Mobile Platform
          </p>
          <h2 className="mt-2 font-sans font-semibold text-white text-pt-title">
            좋은나라펫피스
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
              좋은나라펫피스 홈페이지 제작
            </h2>
            <div className="flex flex-wrap max-w-xl gap-4">
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Client.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  좋은나라펫피스
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Category.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  Web/Mobile Platform
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Date.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  2022. 04
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-pt-body text-primary-deepLight">
                  Service.
                </span>
                <span className="font-sans font-normal text-pt-body text-primary">
                  UX Strategy, Visual Design, e-Commerce, Development
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
                반려동물 장례 전문 서비스 플랫폼을 구축하여, 보호자와 반려동물의
                마지막 순간을 따뜻하게 동행할 수 있도록 설계하였습니다. 또한,
                1:1 맞춤 상담, 24시간 응대, 투명한 정보 구조와 감성적 UI/UX로
                신뢰와 편의성을 모두 갖춘 서비스를 완성했습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-semibold text-pt-body">Concept</h3>
              <span className="flex w-full border-b border-primary-deepLight"></span>
              <p className="font-sans font-normal text-pt-body">
                메인 이미지, 컬러, 문구 등에서 가족의 마지막을 함께하는 동행의
                의미를 전달하며, 방문자가 브랜드 메시지를 직관적으로 느낄 수
                있도록 디자인하였습니다. 절차, 상품, 후기, 파트너 등 핵심 정보를
                직관적으로 배치해 이용자 편의성을 극대화하였고, 처음 방문하는
                사용자도 쉽게 이해할 수 있도록 구성하였습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : 좋은나라펫피스 메인 이미지 */}
      <section className="flex flex-col items-center justify-center min-h-screen gap-10 bg-background-gray">
        <img
          src="/petpeace_main.png"
          alt="SkyLife Logo"
          className="w-full max-w-[1560px]"
        />
      </section>

      {/* Section 4 : 좋은나라펫피스 소개 */}
      <section className="relative flex flex-col items-center w-full max-w-[1440px] py-[200px] mx-auto bg-white gap-10">
        <div
          ref={(el) => {
            fadeinRefs.current[1] = el;
          }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-serif font-bold text-yellow-dark text-pt-subtitle">
            좋은나라펫피스 홈페이지 제작
          </span>
          <h1 className="font-serif font-normal leading-tight text-center text-yellow-dark text-inter-subtitle">
            Platform of Petcare
            <br />
            Good Country Petpeace
          </h1>
        </div>

        <div
          ref={(el) => {
            fadeinRefs.current[2] = el;
          }}
          className="flex justify-center w-full"
        >
          <div className="w-full aspect-[3/1] overflow-hidden rounded-[500px] mx-10 flex items-center justify-center">
            <img
              src="/petpeace_main2.png"
              alt="좋은나라펫피스 이미지"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div
          ref={(el) => {
            fadeinRefs.current[3] = el;
          }}
          className="max-w-5xl mx-auto mt-6 font-sans leading-relaxed text-center text-pt-subtitle"
        >
          <p>
            좋은나라펫피스는 반려동물케어 전문기업으로 전체적으로 깔끔하면서
            간결한 레이아웃으로 상품 및 콘텐츠에 대한 주목도를 높이고 상품에
            대한 정보를 쉽게 전달하며 흥미를 일으켜 구매를 유도하고자 했다.
            <br />
            또한, 사용자들이 사이트를 쉽게 이용할 수 있도록 디자인하여 편리하게
            이용할 수 있도록 설계 하였습니다.
          </p>
        </div>
      </section>

      {/* Section 5 : 좋은나라펫피스 브랜드 스토리 동영상 */}
      <section className="relative bg-[url('/petpeace_bg.png')] bg-top bg-cover bg-no-repeat min-h-screen">
        <div className="relative mx-auto max-w-[1440px] pt-[360px] pb-[200px] pointer-events-none select-none">
          <div
            ref={(el) => {
              fadeinRefs.current[4] = el;
            }}
            className="w-full h-[820px] overflow-hidden border-[6px] rounded-3xl border-yellow shadow-lg"
          >
            <video
              src="/petpeace_brand.mp4"
              muted
              autoPlay
              loop
              className="object-cover w-full h-full"
            />
          </div>
          <img
            src="/petpeace_text.png"
            alt="circle text"
            className="w-[240px] h-[240px] circle-rotate absolute top-60 -right-28"
          />
        </div>
      </section>

      {/* Section 5 : 좋은나라펫피스 주요 페이지 */}
      <section className="relative flex flex-col items-center w-full mx-auto bg-yellow">
        <div className="max-w-[1440px] w-full pb-[200px] grid grid-cols-2 gap-x-24 pointer-events-none select-none">
          <img
            ref={(el) => {
              fadeinRefs.current[5] = el;
            }}
            src="/petpeace_sub1.png"
            alt="펫피스 40 상품안내 페이지"
            className="object-cover w-full mt-36 border-[6px] rounded-3xl border-yellow shadow-lg"
          />
          <img
            ref={(el) => {
              fadeinRefs.current[6] = el;
            }}
            src="/petpeace_sub2.png"
            alt="이용절차 페이지"
            className="object-cover w-full border-[6px] rounded-3xl border-yellow shadow-lg"
          />
          <img
            ref={(el) => {
              fadeinRefs.current[7] = el;
            }}
            src="/petpeace_sub3.png"
            alt="운구서비스 페이지"
            className="object-cover w-full mt-20 border-[6px] rounded-3xl border-yellow shadow-lg"
          />
          <img
            ref={(el) => {
              fadeinRefs.current[8] = el;
            }}
            src="/petpeace_sub4.png"
            alt="장례시설 페이지"
            className="object-cover w-full mt-20 border-[6px] rounded-3xl border-yellow shadow-lg"
          />
        </div>
      </section>

      {/* Section 6 : 좋은나라펫피스 서브 페이지 */}
      <section className="relative w-full py-[200px] overflow-hidden">
        <div
          ref={(el) => {
            fadeinRefs.current[9] = el;
          }}
          className="flex justify-between w-full max-w-[1440px] mx-auto mb-[100px]"
        >
          <h3 className="font-sans font-bold text-pt-section-title">
            Sub Page
          </h3>
          <p className="max-w-xl font-sans font-normal text-pt-body text-primary">
            서브페이지는 서비스 안내, 상품/가격, 후기, 예약/상담, FAQ, 추모공간
            등으로 구성되며, 각각의 페이지가 핵심 정보를 한눈에 볼 수 있도록
            구조를 최적화하여 설계하였고 단순한 장례 예약을 넘어 정서적
            치유와 사용자 편의성을 모두 갖춘 차별화된 플랫폼을 구축하였습니다.
          </p>
        </div>
        <div
          ref={(el) => {
            fadeinRefs.current[10] = el;
          }}
          className="flex items-center w-full h-full pointer-events-none select-none whitespace-nowrap animate-marquee-left"
        >
          {[...topImages, ...topImages].map((src, i) => (
            <img
              key={`top-${i}`}
              src={src}
              alt={`top-${i}`}
              className="inline-block object-cover w-[640px] h-full mx-6 border-[6px] rounded-2xl border-yellow shadow-lg"
              draggable={false}
            />
          ))}
        </div>
        <div
          ref={(el) => {
            fadeinRefs.current[11] = el;
          }}
          className="flex items-center w-full h-full mt-12 pointer-events-none select-none whitespace-nowrap animate-marquee-right"
        >
          {[...bottomImages, ...bottomImages].map((src, i) => (
            <img
              key={`bottom-${i}`}
              src={src}
              alt={`bottom-${i}`}
              className="inline-block object-cover mx-6 w-[640px] border-[6px] rounded-2xl border-yellow shadow-lg"
              draggable={false}
            />
          ))}
        </div>
      </section>

      {/* Section 7 : 좋은나라펫피스 배너 */}
      <section className="relative w-full h-full">
        <img
          src="/petpeace_banner.png"
          alt="좋은나라펫피스 배너"
          className="object-cover w-full h-full"
        />
        <div
          ref={(el) => {
            fadeinRefs.current[12] = el;
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 right-20 text-yellow-dark top-1/2"
        >
          <h2 className="mb-4 font-serif font-normal text-pt-section-title">
            감동을 넘어 가치를 실현하다.
          </h2>
          <p className="font-serif font-bold leading-loose text-pt-body">
            함께하는 시간동안 동물이 아닌 가족으로서,
            <br />
            책임감으로 처음부터 끝까지 함께하는 좋은나라펫피스!
            <br />그 시작을 반려동물 장례문화 만들기로 출발하겠습니다.
          </p>
        </div>
      </section>

      {/* Section 8 : 좋은나라펫피스 모바일 */}
      <section className="w-full h-full overflow-hidden rlative">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div
            ref={marqueeTextRef}
            className="inline-block mt-20 font-serif font-semibold text-inter-title text-yellow whitespace-nowrap"
          >
            A Platform of Petcare Revolution. Good Country Petpeace
          </div>
        </div>
        {/* 모바일 이미지 */}
        <div className="flex max-w-[1440px] mx-auto w-full min-h-screen pt-[200px] justify-between">
          <div
            ref={(el) => {
              fadeinRefs.current[14] = el;
            }}
            className="flex flex-col flex-wrap"
          >
            <img
              src="petpeace_m1.png"
              alt="병원 모바일 랜딩페이지 UI"
              className="w-[320px] z-10 border-[6px] rounded-3xl border-yellow shadow-lg"
            />
            <img
              src="petpeace_m1-1.png"
              alt="상세정보"
              className="w-[320px] -mt-8 shadow-lg"
            />
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[15] = el;
            }}
            className="flex flex-col flex-wrap gap-[100px] mt-[100px]"
          >
            <img
              src="petpeace_m2.png"
              alt="베이지 20 상품안내 페이지"
              className="w-[360px] border-[6px] rounded-3xl border-yellow shadow-lg"
            />
            <img
              src="petpeace_m3.png"
              alt="베이지 20 전자청약가입 페이지"
              className="w-[360px] border-[6px] rounded-3xl border-yellow shadow-lg"
            />
          </div>
          <div
            ref={(el) => {
              fadeinRefs.current[16] = el;
            }}
            className="flex flex-col flex-wrap gap-[100px]"
          >
            <img
              src="petpeace_m4.png"
              alt="브랜드 스토리 페이지"
              className="w-[360px] border-[6px] rounded-3xl border-yellow shadow-lg"
            />
            <img
              src="petpeace_m5.png"
              alt="장례시설 페이지"
              className="w-[360px] border-[6px] rounded-3xl border-yellow shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 9 : 좋은나라펫피스 배너 */}
      <section className="relative w-full h-full">
        <img
          src="/petpeace_banner2.png"
          alt="좋은나라펫피스 배너"
          className="object-cover w-full h-full"
        />
        <div
          ref={(el) => {
            fadeinRefs.current[17] = el;
          }}
          className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <h2 className="mb-20 font-serif font-normal text-pt-section-title">
            아름다운 동행, 아름다운 이별
            <br />
            반려동물 바른 장례문화 만들기로 출발합니다.
          </h2>
          <h2 className="font-serif font-normal text-pt-section-title">
            좋은나라펫피스
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}
