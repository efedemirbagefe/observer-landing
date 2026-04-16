"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

function AnimatedEye() {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let angle = 0;
    let raf: number;
    const animate = () => {
      angle += 0.025;
      // small elliptical orbit — right-down bias so it looks "observing"
      const x = Math.cos(angle) * 1.8;
      const y = Math.sin(angle * 0.7) * 1.2;
      setPupil({ x, y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      width="18"
      height="12"
      viewBox="-9 -6 18 12"
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle", marginLeft: 6, marginBottom: 2 }}
    >
      {/* eyelid shape */}
      <path
        d="M-8 0 Q0 -7 8 0 Q0 7 -8 0 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* iris */}
      <circle cx={pupil.x} cy={pupil.y} r="2.6" fill="none" stroke="#c8ff3e" strokeWidth="1" />
      {/* pupil */}
      <circle cx={pupil.x} cy={pupil.y} r="1.1" fill="#c8ff3e" opacity="0.9" />
      {/* glint */}
      <circle cx={pupil.x + 0.7} cy={pupil.y - 0.7} r="0.35" fill="white" opacity="0.8" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo" style={{ display: "inline-flex", alignItems: "center" }}>
        Observer<span>.</span>
        <AnimatedEye />
      </a>
      <ul className="nav-links">
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
      <Button href="mailto:efe@observerai.co">Contact Us</Button>
    </nav>
  );
}
