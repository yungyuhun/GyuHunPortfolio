"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 300,
      easing: "ease-out-cubic",
    });

    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    <>
      {/* Admin 메인 페이지 */}
      <section className="relative md:py-[200px] xs:py-20 bg-background-blue">
        <div className="relative mx-auto md:max-w-[1440px] xs:max-w-full xs:px-5">
          <div
            className="flex md:flex-row xs:flex-col justify-between w-full md:max-w-[1440px] xs:max-w-full mx-auto md:mb-[100px] xs:mb-10 xs:gap-4"
            data-aos="fade-up"
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
            src="/myplat_bo1.png"
            alt="Myplat Main Image"
            className="w-full md:border-[6px] xs:border-[3px] md:rounded-3xl xs:rounded-xl border-primary shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </section>

      {/* Admin 서브 페이지 Swiper */}
      <section className="md:pb-[200px] xs:pb-20 w-full overflow-hidden bg-background-blue">
        <div className="flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
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
