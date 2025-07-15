import { useEffect } from "react";

function useFadeInOnScroll(className = "fade-in-section", threshold = 0.3) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    if (!elements.length) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [className, threshold]);
}

export default useFadeInOnScroll;
