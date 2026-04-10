"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-wrap" id="contact">
      <div className="contact-inner">
        <motion.h2
          className="contact-hl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Work with <em>us.</em>
        </motion.h2>

        <motion.div
          className="contact-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="contact-text">We take on selective partnerships — companies and investors who want to move fast and build something that matters. If that sounds like you, let&apos;s talk.</p>
          <div className="contact-btns">
            <a href="mailto:efe@observerai.co" className="btn-accent">Get in touch</a>
            <a href="https://plainify.app" target="_blank" rel="noopener" className="btn-ghost">Try Plainify →</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
