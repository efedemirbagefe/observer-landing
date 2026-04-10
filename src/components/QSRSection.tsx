"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function QSRSection() {
  return (
    <div className="qsr-strip">
      <div className="qsr-inner">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="qsr-label">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            Built with Signal
          </div>
          <h3 className="qsr-title">QSR Intelligence — Decision orchestration for quick-service restaurants.</h3>
          <p className="qsr-body">A Signal-powered product built for a global QSR operator. Aggregates signals from store operations, customer reviews, and market data into a single decision layer — surfacing what to act on before it becomes a problem.</p>
        </motion.div>

        <motion.div
          className="qsr-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="qsr-card-head">
            <span className="qsr-card-title">QSR Intelligence Dashboard</span>
            <span className="qsr-card-badge">SIGNAL-POWERED</span>
          </div>
          <div className="qsr-metrics">
            <div className="qm">
              <div className="qm-val">94<span className="unit">%</span></div>
              <div className="qm-label">Signal coverage across locations</div>
            </div>
            <div className="qm">
              <div className="qm-val">&lt;2<span className="unit">m</span></div>
              <div className="qm-label">Time to first actionable insight</div>
            </div>
            <div className="qm">
              <div className="qm-val">12<span className="unit">x</span></div>
              <div className="qm-label">Faster than manual reporting</div>
            </div>
          </div>
          <div className="qsr-signals">
            <div className="qs-item">
              <div className="qs-sev c" />
              <span className="qs-title">Drive-through wait times up 38% — 3 locations</span>
              <span className="qs-source">OPS · REVIEWS</span>
            </div>
            <div className="qs-item">
              <div className="qs-sev h" />
              <span className="qs-title">Seasonal menu item underperforming vs. forecast</span>
              <span className="qs-source">POS · SOCIAL</span>
            </div>
            <div className="qs-item">
              <div className="qs-sev m" />
              <span className="qs-title">Staff scheduling gap detected — weekend peak</span>
              <span className="qs-source">OPS · TICKETS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
