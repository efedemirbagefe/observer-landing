"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const members = [
  { initials: "ED", name: "Efe Demirbağ", role: "Product & Strategy", bio: "15 years across adtech, SaaS, fintech, mobile, and ecommerce. Previously Sojern, Tiko, Huawei, Roamless. Obsessed with the gap between insight and action." },
  { initials: "Hİ", name: "Halil İbrahim Çakıroğlu", role: "Design & Frontend", bio: "15+ years shaping product design across fintech, e-commerce, automotive, travel. Built Sketchize, Gerillass, Plainify. Ships solo products that actually get used." },
  { initials: "MP", name: "Melih Polat", role: "CTO & Engineering", bio: "Former Head of Engineering at Joi Gifts Dubai. AI consultant at Lean Scale. Founding developer at Tuval. Builds backend systems that don't break when things get serious." },
];

export default function Team() {
  const [open, setOpen] = useState(false);

  return (
    <div id="team">
      <div className="team-trigger">
        <div className="team-trigger-inner">
          <span className="team-trigger-text">The people behind Observer.</span>
          <button
            className={`team-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? "Close" : "Meet the team"} <span className="arr">→</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="team-expand"
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="team-grid-wrap">
              <div className="team-grid">
                {members.map((m) => (
                  <div className="team-card" key={m.name}>
                    <div className="team-avatar">{m.initials}</div>
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <p className="team-bio">{m.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
