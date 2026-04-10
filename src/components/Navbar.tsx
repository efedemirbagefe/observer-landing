"use client";

import { useEffect, useState } from "react";

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
        <li><a href="#signal">Signal</a></li>
        <li><a href="#plainify">Plainify</a></li>
        <li><a href="#how">How we build</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:efe@observerai.co" className="nav-cta">Get in touch</a>
    </nav>
  );
}
