// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Splash from "@/components/Splash";
import { inter, pretendard, nanumMyeongjo } from "../fonts";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const isIndex = router.pathname === "/";
  const lenisRef = useRef<Lenis | null>(null);
  const scrollPositions = useRef<Map<string, number>>(new Map());

  // Splash 제어
  useEffect(() => {
    if (!isIndex && showSplash) setShowSplash(false);
  }, [isIndex, showSplash]);

  // Lenis 초기화 및 애니메이션 루프
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Lenis + GSAP 연동
    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    if (showSplash) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  useEffect(() => {
    if (!isIndex) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [router.pathname, isIndex]);

  // 페이지 이동 시 scroll 저장
  useEffect(() => {
    const handleRouteChangeStart = () => {
      scrollPositions.current.set(router.asPath, window.scrollY);
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => router.events.off("routeChangeStart", handleRouteChangeStart);
  }, [router]);

  // popstate (뒤로가기 등) 스크롤 복원
  useEffect(() => {
    const handlePopState = () => {
      requestAnimationFrame(() => {
        const y = scrollPositions.current.get(window.location.pathname) || 0;
        lenisRef.current?.scrollTo(y);
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // scrollRestoration manual
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

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
          content="웹퍼블리셔, 퍼블리싱, 프론트엔드, UI, UX, 인터랙션, GSAP, Next.js, React, 반응형 웹, 웹사이트 제작, GyuHun, 포트폴리오"
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
        <main
          className={`${inter.variable} ${pretendard.variable} ${nanumMyeongjo.variable}`}
        >
          <Component {...pageProps} showSplash={showSplash} />
        </main>
      )}
    </>
  );
}
