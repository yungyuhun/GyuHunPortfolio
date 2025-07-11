"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import InfiniteMarquee from "./InfiniteMarquee";

const projects = [
  {
    no: "01",
    title: "비로",
    desc: "Responsive Web / Imweb / UIUX",
    image: "/morework1.png",
    date: "Dec,2024",
    path: "https://bero.co.kr/",
  },
  {
    no: "02",
    title: "엠아이에이치",
    desc: "Responsive Web / Website / UIUX / CI",
    image: "/morework2.png",
    date: "Feb,2023",
    path: "https://mih.co.kr/",
  },
  {
    no: "03",
    title: "KT 알파 쇼핑",
    desc: "UIUX / E-commerce / Content Planning",
    image: "/morework3.png",
    date: "Jan,2023",
    path: "https://www.kshop.co.kr",
  },
  {
    no: "04",
    title: "트니트니",
    desc: "Website / Mobile App / Platform / Development",
    image: "/morework4.png",
    date: "Aug,2022",
    path: "https://www.tunituni.com/",
  },
  {
    no: "05",
    title: "아이모리",
    desc: "Mobile App / Platform / Development / E-commerce",
    image: "/morework5.png",
    date: "Mar,2021",
  },
  {
    no: "06",
    title: "프로텍트",
    desc: "Website / Development / Operations / Management",
    image: "/morework6.png",
    date: "Dec,2021",
  },
  {
    no: "07",
    title: "고씨네",
    desc: "Website / Mobile / Operations / Management",
    image: "/morework7.png",
    date: "Aug,2020",
    path: "http://www.gossine.com/",
  },
  {
    no: "08",
    title: "DSF2019",
    desc: "Responsive Web / Development / CI / Branding",
    image: "/morework8.png",
    date: "Sep,2019",
    path: "http://solutionfair.durianit.co.kr/",
  },
  {
    no: "09",
    title: "두리안정보기술",
    desc: "Responsive Web / UIUX / Branding",
    image: "/morework9.png",
    date: "Jun,2019",
    path: "http://durianit.co.kr/",
  },
];

export default function WorkTableGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // 초기 이미지 스타일 설정
    imageRefs.current.forEach((img) => {
      if (img) {
        gsap.set(img, { opacity: 0, scale: 0.98 });
      }
    });
  }, []);

  const handleMouseEnter = (i: number, e: React.MouseEvent<HTMLDivElement>) => {
    const row = e.currentTarget;

    gsap.to(imageRefs.current[i], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(row.querySelectorAll(".work-cell"), {
      color: "#fff",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (i: number, e: React.MouseEvent<HTMLDivElement>) => {
    const row = e.currentTarget;

    gsap.to(imageRefs.current[i], {
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto",
    });

    gsap.to(row.querySelectorAll(".work-cell"), {
      color: "#757575",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleClick = (e: React.MouseEvent, path?: string) => {
    if (!path) {
      e.preventDefault();
      alert("해당 프로젝트는 현재 비공개 처리되어 있어 열람하실 수 없습니다.");
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center w-full min-h-screen bg-black"
    >
      <InfiniteMarquee />
      <div className="flex flex-col items-center justify-center gap-8 md:mt-[200px] md:mb-[140px] xs:mt-20 xs:mb-16">
        <span className="md:h-[200px] w-[1px] bg-white xs:h-24"></span>
        <p className="font-sans font-semibold text-white md:text-pt-subsection-title xs:text-pt-subsection-title-xs">
          More Work
        </p>
      </div>

      {/* 헤더 */}
      <div className="w-full border-b border-primary-dark">
        <div className="flex md:w-full md:mx-auto py-8 md:max-w-[1440px] xs:mx-5 xs:max-w-full xs:w-auto">
          <div className="w-8/12 font-semibold md:text-pt-body xs:text-pt-body-xs text-primary-light">
            Project List
          </div>
          <div className="w-4/12 font-semibold text-right text-primary-light md:text-pt-body xs:text-pt-body-xs">
            Release date
          </div>
        </div>
      </div>

      {/* 리스트 */}
      <div className="relative w-full">
        {projects.map((p, i) => {
          const content = (
            <div
              key={i}
              data-index={i}
              className="relative flex md:mx-auto xs:mx-5 items-center md:py-8 xs:py-6 cursor-pointer group md:max-w-[1440px] xs:max-w-full xs:justify-between"
              onMouseEnter={(e) => handleMouseEnter(i, e)}
              onMouseLeave={(e) => handleMouseLeave(i, e)}
              onClick={(e) => !p.path && handleClick(e)}
            >
              <div className="w-1/12 font-sans font-normal md:block text-pt-body text-primary-light work-cell xs:hidden">
                {p.no}
              </div>
              <div className="flex w-7/12 md:gap-5 md:flex-row md:items-center xs:flex-col xs:gap-1 xs:items-start">
                <h2 className="font-sans md:font-semibold xs:font-bold text-primary-light md:text-pt-section-title work-cell xs:text-pt-subsection-title-xs">
                  {p.title}
                </h2>
                <p className="font-sans font-normal text-primary-light md:text-pt-body work-cell xs:text-pt-body-xs">
                  {p.desc}
                </p>
              </div>
              <div className="w-4/12 font-sans font-normal text-right text-primary-light md:text-pt-body work-cell xs:text-pt-body-xs">
                {p.date}
              </div>

              {/* Hover 이미지 */}
              <div
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                style={{ willChange: "opacity, transform" }}
                className="absolute md:right-40 xs:right-0 top-1/2 -translate-y-1/2 md:w-[520px] xs:w-48 md:h-[300px] xs:h-32 rounded-lg overflow-hidden shadow z-10 pointer-events-none"
              >
                <img
                  src={p.image}
                  alt={p.desc}
                  className="object-cover w-full h-full pointer-events-none select-none"
                  draggable={false}
                  style={{ willChange: "opacity, transform" }}
                />
              </div>
            </div>
          );

          return p.path ? (
            <a
              key={p.no}
              href={p.path}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-b border-primary-dark"
            >
              {content}
            </a>
          ) : (
            <div key={p.no} className="w-full border-b border-primary-dark">
              {content}
            </div>
          );
        })}
      </div>

      {/* 하단 텍스트 */}
      <div className="w-full md:mb-[200px] xs:mb-20 xs:max-w-fit md:max-w-[1440px] mt-8 font-sans font-normal md:text-pt-body md:text-right text-primary-light xs:text-pt-body-xs xs:text-left xs:mx-5">
        대표적으로 기재한 프로젝트 외에도 더 많은 웹사이트 구축 프로젝트를
        경험했습니다.
      </div>
    </section>
  );
}
