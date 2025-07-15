import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Splash from "@/components/Splash";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";
import Lenis from "lenis";

export default function App({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [indexScrollY, setIndexScrollY] = useState(0);
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  const isIndex = router.pathname === "/";

  // 스크롤 위치 저장용 Map
  const scrollPositions = useRef<Map<string, number>>(new Map());

  // Splash 비활성화 (index 아닐 때)
  useEffect(() => {
    if (!isIndex && showSplash) setShowSplash(false);
  }, [isIndex, showSplash]);

  // 페이지 이동 시 현재 스크롤 위치 저장
  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      scrollPositions.current.set(router.asPath, window.scrollY);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  // 뒤로 가기(popstate) 시 스크롤 복원
  useEffect(() => {
    const handlePopState = () => {
      const savedY = scrollPositions.current.get(window.location.pathname) || 0;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(savedY, { immediate: true });
      } else {
        window.scrollTo(0, savedY);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // scrollRestoration 수동 설정
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // index에서 다른 페이지로 이동 시 스크롤 맨 위로
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
      let rafId: number;
      const restoreScroll = () => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(indexScrollY, { immediate: true });
        } else {
          window.scrollTo(0, indexScrollY);
        }
      };
      rafId = requestAnimationFrame(restoreScroll);
      return () => cancelAnimationFrame(rafId);
    }
  }, [isIndex, indexScrollY]);

  // Lenis 인스턴스 및 스크롤 관리
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.05,
      duration: 3,
      smoothWheel: true,
      infinite: false,
    });
    lenisRef.current = lenis;

    let running = true;
    let requestId: number;

    function raf(time: number) {
      if (!running) return;
      lenis.raf(time);
      requestId = requestAnimationFrame(raf);
    }
    requestId = requestAnimationFrame(raf);

    // Splash 상태에 따라 스크롤 제어
    if (showSplash) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      running = false;
      cancelAnimationFrame(requestId);
      lenis.destroy();
      document.body.style.overflow = "auto";
      lenisRef.current = null;
    };
  }, [showSplash]);

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
