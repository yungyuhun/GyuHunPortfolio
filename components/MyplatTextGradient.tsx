import { useEffect, useRef } from "react";

export default function MyplatTextGradient() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets =
      sectionRef.current?.querySelectorAll<HTMLSpanElement>(
        ".text-fill-effect2"
      );
    if (!targets) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scrolled");
          } else {
            entry.target.classList.remove("scrolled");
          }
        });
      },
      { threshold: 1.0 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center md:py-[200px] xs:py-20 bg-background-light"
    >
      <p className="font-sans font-bold text-center md:text-pt-section-title xs:text-pt-subsection-title-xs">
        <span className="inline-block text-fill-effect2">
          Freelance Online Platform
        </span>
        <br />
        <span className="inline-block text-fill-effect2">
          프리랜서를 만나는 가장 편리한 방법
        </span>
        <br />
        <span className="inline-block text-fill-effect2">
          나만의 플랫폼 '마이플랫'
        </span>
      </p>
    </section>
  );
}
