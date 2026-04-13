"use client";

import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Product = {
  label: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const PRODUCTS: Product[] = [
  {
    label: "Product 01",
    title: "Signal",
    description:
      "A real-time intelligence layer that turns noisy data streams into decisions your team can actually act on.",
    href: "#",
    image: "https://picsum.photos/seed/signal/1200/1400",
    imageAlt: "Signal product preview",
  },
  {
    label: "Product 02",
    title: "Plainify",
    description:
      "Legal and financial documents, rewritten in language a human can read — without losing the meaning that matters.",
    href: "https://plainify.app",
    image: "https://picsum.photos/seed/plainify/1200/1400",
    imageAlt: "Plainify product preview",
  },
];

export default function Products() {
  return (
    <section className="products">
      {PRODUCTS.map((p, i) => (
        <ProductRow key={p.title} product={p} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}

function ProductRow({ product, reverse }: { product: Product; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imageFromPct = reverse ? -50 : 50;
  const imageXRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4],
    [imageFromPct, imageFromPct * 0.15, 0],
    { ease: (t) => 1 - Math.pow(1 - t, 3) }
  );
  const imageX = useSpring(imageXRaw, { stiffness: 120, damping: 24, mass: 0.6 });

  useMotionValueEvent(imageX, "change", (v) => {
    if (mediaRef.current) mediaRef.current.style.transform = `translateX(${v}%)`;
  });

  // After image settles (0.4), reveal label → title → desc → cta in sequence.
  const revealStart = 0.4;
  const revealEnd = 1;
  const stages = 4;
  const slot = (revealEnd - revealStart) / stages;
  const stageRange = (i: number): [number, number] => [
    revealStart + slot * i,
    revealStart + slot * (i + 1),
  ];

  return (
    <div ref={ref} className="product-row">
      <div className={`product-sticky${reverse ? " product-sticky-reverse" : ""}`}>
        <div
          ref={mediaRef}
          className="product-media"
          style={{ transform: `translateX(${imageFromPct}%)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.imageAlt} />
        </div>
        <div className="product-body">
          <Reveal progress={scrollYProgress} range={stageRange(0)}>
            <div className="product-label">{product.label}</div>
          </Reveal>
          <Reveal progress={scrollYProgress} range={stageRange(1)}>
            <h2 className="product-title">{product.title}</h2>
          </Reveal>
          <Reveal progress={scrollYProgress} range={stageRange(2)}>
            <p className="product-desc">{product.description}</p>
          </Reveal>
          <Reveal progress={scrollYProgress} range={stageRange(3)}>
            <a href={product.href} className="btn-accent product-cta">
              Project Link →
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Reveal({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const blur = useTransform(progress, range, [14, 0]);
  const opacity = useTransform(progress, range, [0, 1]);

  useMotionValueEvent(blur, "change", (v) => {
    if (ref.current) ref.current.style.filter = `blur(${v}px)`;
  });
  useMotionValueEvent(opacity, "change", (v) => {
    if (ref.current) ref.current.style.opacity = String(v);
  });

  return (
    <div
      ref={ref}
      className="product-reveal"
      style={{ filter: `blur(${blur.get()}px)`, opacity: opacity.get() }}
    >
      {children}
    </div>
  );
}
