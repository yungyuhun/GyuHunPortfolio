// fonts.ts
import { Inter, Nanum_Myeongjo, Noto_Sans_KR } from "next/font/google";

// Inter 폰트
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Pretendard 대체 (Noto Sans KR)
export const pretendard = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pretendard",
  display: "swap",
});

// Nanum Myeongjo 폰트
export const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-myeongjo",
  display: "swap",
});
