"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const BOImages = [
  "/myplat_bo2.png",
  "/myplat_bo3.png",
  "/myplat_bo4.png",
  "/myplat_bo5.png",
  "/myplat_bo6.png",
  "/myplat_bo7.png",
  "/myplat_bo8.png",
];

export default function MyplatAdmin() {
  // 섹션별 fadein 효과를 위한 ref 배열
  const fadeinRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;
    const fadeinIndexes = [9, 10, 11];

    function setupFadein() {
      const targets = fadeinIndexes.map((idx) => fadeinRefs.current[idx]);
      if (targets.some((el) => !el)) {
        retryTimeout = setTimeout(setupFadein, 50);
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
    setupFadein();
    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {/* Admin Page Section */}
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
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
          />
        </div>
      </section>

      {/* Admin Subpage Swiper Section */}
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
                  className="object-cover w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-lg border-primary shadow-lg"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
