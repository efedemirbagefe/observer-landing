"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = Array.from({ length: 12 }, (_, i) => ({
  src: `https://picsum.photos/seed/carousel${i}/900/1100`,
  alt: `Slide ${i + 1}`,
}));

const SLIDE_WIDTH = 340;
const SLIDE_GAP = 72;
const STEP = SLIDE_WIDTH + SLIDE_GAP;
const MAX_ROT = 50;
const WHEEL_THROTTLE_MS = 650;

// Render 5 copies for infinite loop illusion; start in the middle copy.
const REPEATS = 5;
const N = SLIDES.length;
const TOTAL = N * REPEATS;
const START_INDEX = N * Math.floor(REPEATS / 2); // middle copy

const EXTENDED = Array.from({ length: TOTAL }, (_, i) => SLIDES[i % N]);

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(START_INDEX);
  const dragStateRef = useRef<{ startX: number; startIndex: number; dragging: boolean }>({
    startX: 0,
    startIndex: 0,
    dragging: false,
  });
  const dragOffsetRef = useRef(0);
  const lastWheelRef = useRef(0);

  useEffect(() => {
    applyTransforms();
    // After transition, if we're near an edge copy, silently jump back by N.
    const track = trackRef.current;
    if (!track) return;
    const handle = () => {
      if (index < N) {
        setWithoutTransition(() => setIndex((i) => i + N));
      } else if (index >= TOTAL - N) {
        setWithoutTransition(() => setIndex((i) => i - N));
      }
    };
    track.addEventListener("transitionend", handle);
    return () => track.removeEventListener("transitionend", handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const onResize = () => applyTransforms();
    window.addEventListener("resize", onResize);
    applyTransforms();
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setWithoutTransition = (fn: () => void) => {
    const track = trackRef.current;
    if (!track) {
      fn();
      return;
    }
    const prev = track.style.transition;
    track.style.transition = "none";
    fn();
    // force reflow so the transition-none takes effect before restoring
    void track.offsetWidth;
    track.style.transition = prev;
  };

  const applyTransforms = () => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const vpWidth = viewport.clientWidth;
    const centerOffset = vpWidth / 2 - SLIDE_WIDTH / 2;
    const baseX = centerOffset - index * STEP + dragOffsetRef.current;
    track.style.transform = `translateX(${baseX}px)`;

    const slides = track.querySelectorAll<HTMLDivElement>(".hc-slide");
    slides.forEach((slide, i) => {
      const slideCenter = i * STEP + SLIDE_WIDTH / 2 - dragOffsetRef.current;
      const focus = index * STEP + SLIDE_WIDTH / 2;
      const delta = (slideCenter - focus) / STEP;
      const clamped = Math.max(-3, Math.min(3, delta));
      const rot = (clamped / 3) * MAX_ROT;
      const scale = 1.18 - Math.min(0.4, Math.abs(clamped) * 0.14);
      const z = -Math.abs(clamped) * 60;
      slide.style.transform = `perspective(1200px) translateZ(${z}px) rotateY(${-rot}deg) scale(${scale})`;
      slide.style.opacity = String(1 - Math.min(0.4, Math.abs(clamped) * 0.15));
      slide.style.zIndex = String(100 - Math.abs(Math.round(clamped * 10)));
    });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStateRef.current = { startX: e.clientX, startIndex: index, dragging: true };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStateRef.current.dragging) return;
    dragOffsetRef.current = e.clientX - dragStateRef.current.startX;
    applyTransforms();
  };

  const onPointerUp = () => {
    if (!dragStateRef.current.dragging) return;
    const delta = -Math.round(dragOffsetRef.current / STEP);
    const target = dragStateRef.current.startIndex + delta;
    dragStateRef.current.dragging = false;
    dragOffsetRef.current = 0;
    setIndex(target);
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 8) return;
    const now = Date.now();
    if (now - lastWheelRef.current < WHEEL_THROTTLE_MS) return;
    lastWheelRef.current = now;
    setIndex((prev) => prev + (e.deltaX > 0 ? 1 : -1));
  };

  return (
    <div className="hero-carousel">
      <div
        ref={viewportRef}
        className="hc-viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
      >
        <div ref={trackRef} className="hc-track">
          {EXTENDED.map((s, i) => (
            <div key={i} className="hc-slide" style={{ width: SLIDE_WIDTH }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
