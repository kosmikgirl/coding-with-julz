import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./AnimatedTitle.scss";

export const AnimatedTitle = ({ letter }) => {
  const [isHovered, setHovered] = useState(false);

  const handleSpanHover = () => {
    setHovered((isHovered) => !isHovered);
  };

  useEffect(() => {
    gsap.to(".hover-enter", {
      scaleY: 0.7,
      duration: 0.7,
      ease: "bounce.out",
    });
    gsap.to(".hover-enter", {
      delay: 0.4,
      duration: 1,
      scaleY: 1,
      ease: "elastic.out(2.5,0.2)",
    });
  }, [isHovered]);
  return (
    <span
      className={`myspan ${isHovered ? "hover-enter" : ""}`}
      onMouseEnter={handleSpanHover}
      onMouseLeave={handleSpanHover}
    >
      {letter === "+" ? <>&nbsp;</> : letter}
    </span>
  );
};
