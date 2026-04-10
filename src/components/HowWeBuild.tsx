"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", tag: "Problem first", title: "Find the idea", desc: "One sentence. What's the problem? Who has it? Why now? A clear problem statement is the only thing that separates a product from a project that never ships.", arrow: true },
  { num: "02", tag: "Plainify", title: "Spec it out", desc: "Three lines of thinking become a full PRD. User stories, edge cases, constraints — structured and ready for an AI code assistant. No lost-in-translation.", arrow: true },
  { num: "03", tag: "Claude Code", title: "Build without drag", desc: "PRD in, working prototype out. Claude Code compresses the gap between spec and software. We ship at a pace larger teams can't match — not by cutting corners, but by removing drag.", arrow: true },
  { num: "04", tag: "Signal", title: "Track what matters", desc: "Signals in, decisions out. Signal reads every signal your users send and tells you exactly where to focus next. No dashboards. Just clarity on what to build next.", arrow: false },
];

export default function HowWeBuild() {
  return (
    <div className="section-wrap" id="how">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">How we build</div>
          <div className="section-title">Four steps. Real tools.<br />End-to-end.</div>
          <p className="section-sub">From problem statement to shipped product and live monitoring. No unnecessary stops in between.</p>
        </motion.div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              className="step-card"
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="step-num">{step.num}</span>
              <div className="step-index">{step.num} / 04</div>
              <div className="step-tag">{step.tag}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
              {step.arrow && <div className="step-arrow">→</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
