"use client";

import { useEffect, useRef } from "react";

interface CustomCursorProps {
  visible: boolean;
}

export default function CustomCursor({ visible }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  // 커서 위치 이동
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // 실제 커서 모양 변경
  useEffect(() => {
    if (visible) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[9999] w-40 h-40 rounded-full 
        transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2 
        ${visible ? "opacity-100" : "opacity-0"} 
        bg-white/10 backdrop-blur-md shadow-md 
        flex items-center justify-center text-white text-pt-body font-sans font-semibold`}
      style={{ left: 0, top: 0 }}
    >
      View More
    </div>
  );
}