"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        Observer<span>.</span>
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
