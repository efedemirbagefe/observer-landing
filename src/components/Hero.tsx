"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-headline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We build things that shouldn&apos;t exist yet.
      </motion.h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Three people. Minimum hierarchy. Maximum output. Observer builds AI-native products for a world that hasn&apos;t caught up yet.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <a href="mailto:efe@observerai.co" className="btn-accent">Get in touch</a>
        <a href="https://plainify.app" target="_blank" rel="noopener" className="btn-ghost">Try Plainify →</a>
      </motion.div>
    </section>
  );
}
