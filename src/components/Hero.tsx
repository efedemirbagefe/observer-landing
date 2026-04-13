"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <>
      <section className="hero hero-centered">
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We Build Things!
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          An AI-native product studio shipping ideas the world isn&apos;t ready for.
        </motion.p>
      </section>

      <HeroCarousel />
    </>
  );
}
