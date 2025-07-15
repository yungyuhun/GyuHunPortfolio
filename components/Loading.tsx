"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white bg-opacity-60">
      <DotLottieReact
        src="https://lottie.host/ccb63565-827f-434e-bbdd-818173124c36/QLa8iNrLRs.lottie"
        loop
        autoplay
        style={{ width: 240, height: 240 }}
      />
      <p className="-mt-20 font-sans font-normal text-white text-pt-subtitle">
        Loading...
      </p>
    </div>
  );
}
