import localFont from "next/font/local";
import { Inter } from "next/font/google";

// Inter 폰트 추가
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Pretendard 폰트 추가
export const pretendard = localFont({
  src: [
    {
      path: "./fonts/PretendardVariable.woff2",
      weight: "45 920",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

// NanumMyeongjo 폰트 추가
export const myeongjo = localFont({
  src: [
    {
      path: "./fonts/NanumMyeongjo.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NanumMyeongjoBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NanumMyeongjoExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-myeongjo",
  display: "swap",
});
