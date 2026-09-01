"use client";

import Footer from "@/components/Footer";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectInfoSection from "@/components/project/ProjectInfoSection";
import useFadeInOnScroll from "@/src/hooks/useFadeInOnScroll";
import useIsMobile from "@/src/hooks/useIsMobile";

export default function Petpeace() {
  const isMobile = useIsMobile();
  useFadeInOnScroll();

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

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Section 1 : 메인 이미지/타이틀 */}
      <ProjectHero
        image="/work4.png"
        alt="Petpeace Background"
        category="Web/Mobile Platform"
        title="좋은나라펫피스"
      />

      {/* Section 2 : 프로젝트 설명 */}
      <ProjectInfoSection
        title="좋은나라펫피스 홈페이지 제작"
        client="좋은나라펫피스"
        category="Web/Mobile Platform"
        date="2022. 04"
        service="UX Strategy, Visual Design, e-Commerce, Development"
        brief="반려동물 장례 전문 서비스 플랫폼을 구축하여, 보호자와 반려동물의 마지막 순간을 따뜻하게 동행할 수 있도록 설계하였습니다. 또한, 1:1 맞춤 상담, 24시간 응대, 투명한 정보 구조와 감성적 UI/UX로 신뢰와 편의성을 모두 갖춘 서비스를 완성했습니다."
        concept="메인 이미지, 컬러, 문구 등에서 가족의 마지막을 함께하는 동행의 의미를 전달하며, 방문자가 브랜드 메시지를 직관적으로 느낄 수 있도록 디자인하였습니다. 절차, 상품, 후기, 파트너 등 핵심 정보를 직관적으로 배치해 이용자 편의성을 극대화하였고, 처음 방문하는 사용자도 쉽게 이해할 수 있도록 구성하였습니다."
        cta={{ type: "private" }}
      />

      {/* Section 3 : 좋은나라펫피스 메인 이미지 */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-background-gray">
        <img
          src="/petpeace_main.png"
          alt="SkyLife Logo"
          className="w-full md:max-w-[1560px] xs:max-w-full fade-in-section"
        />
      </section>

      {/* Section 4 : 좋은나라펫피스 소개 */}
      <section className="relative flex flex-col items-center w-full md:max-w-[1440px] xs:max-w-full md:py-[200px] xs:py-20 mx-auto xs:px-5 bg-white md:gap-10 xs:gap-4">
        <div className="flex flex-col items-center gap-4 fade-in-section">
          <span className="font-serif font-bold text-yellow-dark md:text-pt-subtitle xs:text-pt-body">
            좋은나라펫피스 홈페이지 제작
          </span>
          <h1 className="font-serif font-normal leading-tight text-center text-yellow-dark md:text-inter-subtitle xs:text-pt-subsection-title">
            Platform of Petcare
            <br />
            Good Country Petpeace
          </h1>
        </div>

        <div className="flex justify-center w-full fade-in-section">
          <div className="w-full aspect-[3/1] overflow-hidden rounded-[500px] md:mx-10 xs:mx-0 flex items-center justify-center">
            <img
              src="/petpeace_main2.png"
              alt="좋은나라펫피스 이미지"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mx-auto font-sans leading-relaxed text-center md:mt-6 xs:mt-2 md:max-w-5xl xs:max-w-full md:text-pt-subtitle xs:text-pt-body fade-in-section">
          {isMobile ? (
            <p>
              좋은나라펫피스는 반려동물케어 전문기업으로 전체적으로 깔끔하면서
              간결한 레이아웃으로 사용자들이 사이트를 쉽게 이용할 수 있도록 설계
              하였습니다.
            </p>
          ) : (
            <p>
              좋은나라펫피스는 반려동물케어 전문기업으로 전체적으로 깔끔하면서
              간결한 레이아웃으로 상품 및 콘텐츠에 대한 주목도를 높이고 상품에
              대한 정보를 쉽게 전달하며 흥미를 일으켜 구매를 유도하고자 했다.
              <br />
              또한, 사용자들이 사이트를 쉽게 이용할 수 있도록 디자인하여
              편리하게 이용할 수 있도록 설계 하였습니다.
            </p>
          )}
        </div>
      </section>

      {/* Section 5 : 좋은나라펫피스 브랜드 스토리 동영상 */}
      <section className="relative md:bg-[url('/petpeace_bg.png')] xs:bg-[url('/petpeace_bg_mobile.png')] bg-top bg-cover bg-no-repeat md:min-h-screen xs:min-h-0">
        <div className="relative md:mx-auto xs:mx-5 md:max-w-[1440px] xs:max-w-full md:pt-[360px] xs:pt-20 md:pb-[200px] xs:pb-36 pointer-events-none select-none">
          <div className="w-full md:h-[820px] xs:h-[240px] overflow-hidden md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg fade-in-section">
            <video
              src="/petpeace_brand.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="object-cover w-full h-full"
            />
          </div>
          <img
            src="/petpeace_text.png"
            alt="circle text"
            className="md:w-[240px] xs:w-32 md:h-[240px] xs:h-32 circle-rotate absolute md:top-60 xs:top-6 md:-right-28 xs:right-0"
          />
        </div>
      </section>

      {/* Section 5 : 좋은나라펫피스 주요 페이지 */}
      <section className="relative flex flex-col items-center w-full mx-auto md:px-0 xs:px-5 bg-yellow">
        <div className="md:max-w-[1440px] xs:max-w-full w-full md:pb-[200px] xs:pb-20 grid grid-cols-2 md:gap-x-24 xs:gap-x-4 pointer-events-none select-none">
          <img
            loading="lazy"
            src="/petpeace_sub1.png"
            alt="펫피스 40 상품안내 페이지"
            style={{ willChange: "transform" }}
            className="object-cover w-full md:mt-36 xs:mt-10 md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg fade-in-section"
          />
          <img
            loading="lazy"
            src="/petpeace_sub2.png"
            alt="이용절차 페이지"
            style={{ willChange: "transform" }}
            className="object-cover w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg fade-in-section"
          />
          <img
            loading="lazy"
            src="/petpeace_sub3.png"
            alt="운구서비스 페이지"
            style={{ willChange: "transform" }}
            className="object-cover w-full md:mt-20 xs:mt-4 md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg fade-in-section"
          />
          <img
            loading="lazy"
            src="/petpeace_sub4.png"
            alt="장례시설 페이지"
            style={{ willChange: "transform" }}
            className="object-cover w-full md:mt-20 xs:mt-2 md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg fade-in-section"
          />
        </div>
      </section>

      {/* Section 6 : 좋은나라펫피스 서브 페이지 */}
      <section className="relative md:py-[200px] xs:py-20 md:px-0 xs:px-5 bg-background-light">
        <div className="flex md:flex-row xs:flex-col justify-between w-full md:max-w-[1440px] xs:max-w-full mx-auto md:mb-[100px] xs:mb-10 xs:gap-4 fade-in-section">
          <h3 className="font-sans font-bold text-primary md:text-pt-section-title xs:text-pt-section-title-xs">
            Sub Page
          </h3>
          <p className="font-sans font-normal md:max-w-xl xs:max-w-full text-primary text-pt-body">
            서브페이지는 서비스 안내, 상품/가격, 후기, 예약/상담, FAQ, 추모공간
            등으로 구성되며, 각각의 페이지가 핵심 정보를 한눈에 볼 수 있도록
            구조를 최적화하여 설계하였고 단순한 장례 예약을 넘어 정서적 치유와
            사용자 편의성을 모두 갖춘 차별화된 플랫폼을 구축하였습니다.
          </p>
        </div>
        <div className="flex items-center w-full h-full pointer-events-none select-none whitespace-nowrap animate-marquee-left fade-in-section">
          {[...topImages, ...topImages].map((src, i) => (
            <img
              key={`top-${i}`}
              src={src}
              alt={`top-${i}`}
              className="inline-block object-cover md:w-[640px] xs:w-full h-full md:mx-6 xs:mx-2
               md:border-[6px] xs:border-4 md:rounded-2xl xs:rounded-xl border-yellow shadow-lg"
              draggable={false}
            />
          ))}
        </div>
        <div className="flex items-center w-full h-full pointer-events-none select-none md:mt-12 xs:mt-6 whitespace-nowrap animate-marquee-right fade-in-section">
          {[...bottomImages, ...bottomImages].map((src, i) => (
            <img
              key={`bottom-${i}`}
              src={src}
              alt={`bottom-${i}`}
              className="inline-block object-cover md:w-[640px] xs:w-full h-full md:mx-6 xs:mx-2
               md:border-[6px] xs:border-4 md:rounded-2xl xs:rounded-xl border-yellow shadow-lg"
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
          className="hidden object-cover w-full md:block"
        />
        <img
          data-aos="fade-up"
          src="/petpeace_banner_mobile.png"
          alt="좋은나라펫피스 배너"
          className="block object-cover w-full h-full md:hidden"
        />
        <div className="absolute top-[38%] right-[15%] text-yellow-dark md:block xs:hidden fade-in-section">
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
        <div className="marquee-container">
          <div className="marquee fade-in-section">
            <span className="font-serif font-semibold md:mt-20 xs:mt-10 md:text-inter-title xs:text-inter-title-xs text-yellow">
              A Platform of Petcare Revolution. Good Country Petpeace
            </span>
            <span className="font-serif font-semibold md:mt-20 xs:mt-10 md:text-inter-title xs:text-inter-title-xs text-yellow">
              A Platform of Petcare Revolution. Good Country Petpeace
            </span>
          </div>
        </div>
        {/* 모바일 이미지 */}
        <div className="flex md:max-w-[1440px] xs:max-w-full mx-auto xs:px-5 w-full md:min-h-screen xs:min-h-0 md:pt-[200px] xs:pt-20 justify-between xs:gap-4">
          <div
            className="flex flex-col flex-wrap fade-in-section"
            style={{ willChange: "opacity, transform" }}
          >
            <img
              loading="lazy"
              src="petpeace_m1.png"
              alt="병원 모바일 랜딩페이지 UI"
              className="md:w-[360px] xs:w-full z-10 md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg"
            />
            <img
              loading="lazy"
              src="petpeace_m1-1.png"
              alt="상세정보"
              className="md:w-[360px] xs:w-full md:-mt-8 xs:-mt-4 shadow-lg"
            />
          </div>
          <div
            className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4 md:mt-[100px] xs:mt-10 fade-in-section"
            style={{ willChange: "opacity, transform" }}
          >
            <img
              loading="lazy"
              src="petpeace_m2.png"
              alt="베이지 20 상품안내 페이지"
              className="md:w-[360px] xs:w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg"
            />
            <img
              loading="lazy"
              src="petpeace_m3.png"
              alt="베이지 20 전자청약가입 페이지"
              className="md:w-[360px] xs:w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg"
            />
          </div>
          <div
            className="flex flex-col flex-wrap md:gap-[100px] xs:gap-4 fade-in-section"
            style={{ willChange: "opacity, transform" }}
          >
            <img
              loading="lazy"
              src="petpeace_m4.png"
              alt="브랜드 스토리 페이지"
              className="md:w-[360px] xs:w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg"
            />
            <img
              loading="lazy"
              src="petpeace_m5.png"
              alt="장례시설 페이지"
              className="md:w-[360px] xs:w-full md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-yellow shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 9 : 좋은나라펫피스 배너 */}
      <section className="relative w-full h-full">
        <img
          src="/petpeace_banner2.png"
          alt="좋은나라펫피스 배너"
          className="hidden object-cover w-full md:block"
        />
        <img
          src="/petpeace_banner2_mobile.png"
          alt="좋은나라펫피스 배너"
          className="block object-cover w-full h-full md:hidden"
        />
        <div className="absolute w-full text-center text-white xs:px-5 left-0 md:top-[38%] xs:top-1/3 fade-in-section">
          <h2 className="font-serif font-normal md:mb-20 xs:mb-10 md:text-pt-section-title xs:text-pt-subtitle-xs">
            아름다운 동행, 아름다운 이별
            <br />
            반려동물 바른 장례문화 만들기로 출발합니다.
          </h2>
          <h2 className="font-serif font-normal md:text-pt-section-title xs:text-pt-subtitle-xs">
            좋은나라펫피스
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}
