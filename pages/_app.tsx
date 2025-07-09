import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";
import Splash from "@/components/Splash";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [indexScrollY, setIndexScrollY] = useState(0);
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  const isIndex = router.pathname === "/";

  // index가 아니면 Splash 바로 비활성화
  useEffect(() => {
    if (!isIndex && showSplash) setShowSplash(false);
  }, [isIndex, showSplash]);

  // index에서 다른 페이지로 이동할 때 위치 저장 + 상단 이동
  useEffect(() => {
    if (!isIndex) {
      setIndexScrollY(window.scrollY);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [router.pathname, isIndex]);

  // index로 돌아올 때 저장된 위치로 이동
  useEffect(() => {
    if (isIndex && indexScrollY > 0) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(indexScrollY, { immediate: true });
      } else {
        window.scrollTo(0, indexScrollY);
      }
    }
  }, [isIndex]);

  // Lenis 인스턴스 및 스크롤 관리
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      duration: 3,
      smoothWheel: true,
      infinite: false,
    });
    lenisRef.current = lenis;

    let requestId: number;

    function raf(time: number) {
      lenis.raf(time);
      requestId = requestAnimationFrame(raf);
    }

    requestId = requestAnimationFrame(raf);

    if (showSplash) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      cancelAnimationFrame(requestId);
      lenis.destroy();
      document.body.style.overflow = "auto";
      lenisRef.current = null;
    };
  }, [showSplash]);

  // 스플래시가 끝나기 전에는 메인 컴포넌트 렌더링하지 않음
  return (
    <>
      <Head>
        <title>GyuHun's Portfolio</title>
        <meta
          name="description"
          content="웹퍼블리셔 GyuHun의 포트폴리오. 다양한 웹사이트 제작, GSAP·Next.js 기반 인터랙션, 반응형 웹, UI/UX 퍼블리싱을 합니다."
        />
        <meta
          name="keywords"
          content="웹퍼블리셔, 퍼블리싱, 프론트엔드, UI, UX, 인터랙션, GSAP, Next.js, React, 반응형 웹, 웹사이트 제작, GyuHun, 포트폴리오, 웹 디자인, 웹 개발"
        />
        <meta property="og:title" content="GyuHun's Portfolio" />
        <meta
          property="og:description"
          content="웹퍼블리셔 GyuHun의 포트폴리오. 다양한 웹사이트 제작, GSAP·Next.js 기반 인터랙션, 반응형 웹, UI/UX 퍼블리싱을 합니다."
        />
        <meta property="og:image" content="https://gyuhun.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gyuhun.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isIndex && showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <Component {...pageProps} showSplash={showSplash} />
      )}
    </>
  );
}
