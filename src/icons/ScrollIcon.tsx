import React from "react";

interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const ScrollIcon = ({
  size = 32,
  color = "white",
  className = "",
}: IconProps) => (
  <svg
    width={typeof size === "number" ? size : size || 32}
    height={typeof size === "number" ? size : size || 32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.5649 30.5875L16 32L14.4351 30.5875L5.57184 22.5875L4 21.1688L7.13676 18.3438L8.70167 19.7563L13.7842 24.3438V2V0H18.2158V2V24.3438L23.2983 19.7563L24.8632 18.3438L28 21.175L26.4351 22.5875L17.5718 30.5875H17.5649Z"
      fill={color}
    />
  </svg>
);

export default ScrollIcon;
