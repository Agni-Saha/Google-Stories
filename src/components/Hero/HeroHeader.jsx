import React, { useEffect } from "react";
import { gsap } from "gsap";
export default function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  }, []);
  return (
    <div className="hero-text-section">
      <h1 id="hero-text">
        <span style={{fontWeight: "700"}}>Stories</span> meet their widest audience ever
      </h1>
    </div>
  );
}
