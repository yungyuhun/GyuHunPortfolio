"use client";

import { Scroll } from "@/src/icons/Icon";

export default function Footer() {
  // 스크롤 맨 위로 이동
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex flex-col items-center w-full bg-white md:mx-auto xs:w-auto md:py-28 xs:py-12 xs:px-5">
      <div className="md:max-w-[1440px]  w-full">
        <div className="relative flex justify-between w-full md:flex-row xs:flex-col">
          <div className="flex items-start justify-between w-full md:max-w-3xl xs:max-w-full md:flex-row xs:flex-col xs:gap-4">
            <div className="flex flex-col">
              <p className="font-sans font-normal text-primary md:text-pt-body xs:text-pt-body-xs">
                서울시 금천구 금하로 601
              </p>
              <p className="font-sans font-normal text-primary md:text-pt-body xs:text-pt-body-xs">
                601, Geumha-ro, Geumcheon-gu, Seoul
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-semibold text-primary md:text-pt-body xs:text-pt-body-xs">
                Tel.
              </p>
              <p className="font-sans font-normal text-primary md:text-pt-body xs:text-pt-body-xs">
                +82 10 3087 9992
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-semibold text-primary md:text-pt-body xs:text-pt-body-xs">
                E-mail.
              </p>
              <p className="font-sans font-normal text-primary md:text-pt-body xs:text-pt-body-xs">
                okk7381@naver.com
              </p>
            </div>
          </div>

          <button
            onClick={handleScrollTop}
            aria-label="맨 위로"
            className="flex items-center justify-center transition-colors rounded-full bg-primary w-14 h-14 group md:relative xs:absolute md:bottom-0 xs:-bottom-44 xs:right-0"
          >
            <Scroll
              color="#fff"
              className="w-6 h-6 rotate-180"
            />
          </button>
        </div>

        <div className="relative flex flex-col items-center w-full md:mt-10 xs:mt-8">
          <h2 className="font-bold tracking-tighter pointer-events-none select-none md:text-center xs:text-left text-primary font-inter md:text-inter-title xs:text-inter-title-xs">
            Let's get connected
          </h2>
        </div>

        {/* 하단 저작권 */}
        <div className="flex w-full md:mt-5 md:justify-end xs:justify-start xs:mt-3">
          <span className="font-sans font-normal text-primary md:text-pt-body xs:text-pt-body-xs">
            © 2025 Yun-GyuHun. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
