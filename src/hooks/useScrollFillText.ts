import { useEffect, useRef } from "react";

export default function useScrollFillText<T extends HTMLElement = HTMLElement>(
  selector: string,
  threshold = 1.0
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const targets =
      containerRef.current?.querySelectorAll<HTMLElement>(selector);
    if (!targets || targets.length === 0) return;

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
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);

  return containerRef;
}
