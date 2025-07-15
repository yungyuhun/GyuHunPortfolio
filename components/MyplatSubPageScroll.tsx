"use client";

import { useEffect } from "react";
import AOS from "aos";

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

export default function MyplatSubPageScroll() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative flex flex-col items-center mx-auto overflow-visible md:py-24 xs:py-12 bg-blue">
      <div
        className="flex md:flex-row xs:flex-col md:max-w-[1440px] xs:max-w-full w-full mx-auto xs:px-5"
        data-aos="fade-up"
      >
        {/* 왼쪽 고정 텍스트 */}
        <div className="md:sticky xs:relative md:top-[200px] xs:top-0 z-10 flex flex-col items-start justify-start md:w-1/3 xs:w-full h-fit text-white md:pr-20 xs:pr-0 xs:mb-10">
          <h3 className="font-sans font-bold md:mb-6 xs:mb-4 md:text-pt-section-title xs:text-pt-subsection-title">
            Sub Page
          </h3>
          <p className="font-sans md:max-w-md xs:max-w-full text-pt-body">
            프로젝트 목록, 알림, 상세 정보 등 주요 기능을 한눈에 확인하고 관리할
            수 있도록 카드형 정보 구조와 명확한 네비게이션으로
            설계·구현하였습니다.
          </p>
        </div>

        {/* 가운데 이미지 컬럼 */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:gap-8 xs:gap-4 md:pl-8 xs:pl-0 md:w-1/3 xs:w-full xs:mb-4"
        >
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

        {/* 오른쪽 이미지 컬럼 */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:pt-20 xs:pt-0 md:gap-8 xs:gap-4 md:pl-8 xs:pl-0 md:w-1/3 xs:w-full"
        >
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
  );
}
