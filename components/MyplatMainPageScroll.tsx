"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function MyplatMainPageScroll() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative bg-blue md:-mt-[200px] xs:-mt-20 md:pb-[200px] xs:pb-20 bg-top bg-cover bg-no-repeat">
      <div
        className="relative mx-auto max-w-[1440px] xs:px-5"
        data-aos="fade-up"
      >
        <div
          className="w-full md:h-[820px] xs:h-[240px] overflow-y-auto md:border-[6px] xs:border-4 md:rounded-3xl xs:rounded-xl border-primary pointer-events-auto hide-scrollbar shadow-lg"
          onWheel={(e) => e.stopPropagation()}
        >
          <img src="/myplat_main.png" alt="Myplat Main" className="w-full" />
        </div>
        <img
          src="/myplat_text.png"
          alt="circle text"
          className="md:w-[240px] xs:w-32 md:h-[240px] xs:h-32 circle-rotate absolute md:-top-28 xs:-top-14 md:-right-28 xs:right-0"
        />
      </div>
    </section>
  );
}
