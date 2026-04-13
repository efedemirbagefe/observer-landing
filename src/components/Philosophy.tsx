"use client";

import { useScroll, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { useRef } from "react";

const TEXT =
  "We believe the best products come from small teams who move faster than the world expects.";
const ACCENT_WORDS = new Set(["who", "move", "faster"]);

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="philosophy">
      <div className="philosophy-sticky">
      <p className="philosophy-text">
        {words.map((word, i) => {
          const overlap = 3;
          const denom = words.length + overlap - 1;
          const start = i / denom;
          const end = (i + overlap) / denom;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              accent={ACCENT_WORDS.has(word.replace(/[^a-zA-Z]/g, ""))}
            >
              {word}
            </Word>
          );
        })}
      </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const blur = useTransform(progress, range, [16, 0]);
  const opacity = useTransform(progress, range, [0.15, 1]);

  useMotionValueEvent(blur, "change", (v) => {
    if (spanRef.current) spanRef.current.style.filter = `blur(${v}px)`;
  });
  useMotionValueEvent(opacity, "change", (v) => {
    if (spanRef.current) spanRef.current.style.opacity = String(v);
  });

  return (
    <span
      ref={spanRef}
      className={`philosophy-word${accent ? " philosophy-word-accent" : ""}`}
      style={{ filter: `blur(${blur.get()}px)`, opacity: opacity.get() }}
    >
      {children}
    </span>
  );
}
