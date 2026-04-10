"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SignalSection() {
  return (
    <div className="section-wrap" id="signal">
      <div className="section-inner">
        <div className="feature-row">
          {/* text */}
          <motion.div
            className="feature-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="feature-tag">
              <div className="ftag-dot live" />
              <span className="ftag-label">Signal — Launched</span>
            </div>
            <h2 className="feature-headline">Stop guessing what to build next.</h2>
            <p className="feature-body">
              Signal reads every signal your users send — support tickets, app reviews, GitHub issues, community posts — and tells your team exactly where to focus.
            </p>
            <div className="feature-bullets">
              {[
                "Connects to Zendesk, Slack, App Store, Reddit, GitHub, Jira, Intercom and more",
                "Claude-powered clustering — groups signals into prioritised Intent Gaps",
                "Under 2 minutes from connect to first actionable insight",
                "Delivers to Slack, email, or WhatsApp — wherever your team actually works",
              ].map((text) => (
                <div className="fb" key={text}>
                  <div className="fb-check"><Check size={10} /></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <a href="mailto:efe@observerai.co" className="feature-link">Get early access →</a>
          </motion.div>

          {/* Signal UI mockup */}
          <motion.div
            className="mockup-shell"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mockup-topbar">
              <div className="tbar-dots">
                <div className="tbar-dot r" />
                <div className="tbar-dot y" />
                <div className="tbar-dot g" />
              </div>
              <span className="tbar-title">Signal — Observer AI</span>
              <span className="tbar-badge">LIVE</span>
            </div>

            <div className="signal-body">
              <div className="signal-sidebar">
                <div className="sb-section">
                  <div className="sb-label">Overview</div>
                  <div className="sb-item active">
                    <div className="sb-dot on" /> Intent Gaps
                    <span className="sb-count">3</span>
                  </div>
                  <div className="sb-item">
                    <div className="sb-dot on" /> All Signals
                    <span className="sb-count">79</span>
                  </div>
                </div>
                <div className="sb-section">
                  <div className="sb-label">Sources</div>
                  <div className="sb-item"><div className="sb-dot on" /> Zendesk</div>
                  <div className="sb-item"><div className="sb-dot on" /> App Store</div>
                  <div className="sb-item"><div className="sb-dot on" /> Reddit</div>
                  <div className="sb-item"><div className="sb-dot on" /> GitHub</div>
                  <div className="sb-item"><div className="sb-dot" /> Jira</div>
                </div>
                <div className="sb-section">
                  <div className="sb-label">Distribute</div>
                  <div className="sb-item"><div className="sb-dot on" /> Slack digest</div>
                  <div className="sb-item"><div className="sb-dot" /> Email</div>
                </div>
              </div>

              <div className="signal-main">
                <div className="sm-header">
                  <div>
                    <div className="sm-title">Intent Gaps</div>
                    <div className="sm-meta">79 signals · 3 gaps identified · last run 2 min ago</div>
                  </div>
                  <div className="sm-run">▶ Run analysis</div>
                </div>

                {[
                  { score: 88, title: "Mobile onboarding drops at step 3", badge: "critical", label: "CRITICAL", source: "34 tickets · ZENDESK, APPSTORE", count: 34, color: "#ef4444", offset: 20 },
                  { score: 63, title: "Search latency killing trial conversions", badge: "high", label: "HIGH", source: "27 signals · REDDIT, GITHUB", count: 27, color: "#f97316", offset: 35 },
                  { score: 45, title: "API rate limits blocking enterprise deals", badge: "medium", label: "MEDIUM", source: "18 signals · SLACK, JIRA", count: 18, color: "#f59e0b", offset: 52 },
                ].map((c) => (
                  <div className="signal-cluster" key={c.title}>
                    <div className="sc-ring">
                      <svg viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="3" />
                        <circle cx="20" cy="20" r="15" fill="none" stroke={c.color} strokeWidth="3"
                          strokeDasharray="94.2" strokeDashoffset={c.offset} strokeLinecap="round"
                          transform="rotate(-90 20 20)" />
                      </svg>
                      <span className="sc-score">{c.score}</span>
                    </div>
                    <div className="sc-body">
                      <div className="sc-title">{c.title}</div>
                      <div className="sc-meta">
                        <span className={`sc-badge ${c.badge}`}>{c.label}</span>
                        <span className="sc-source">{c.source}</span>
                      </div>
                    </div>
                    <div className="sc-right">
                      <div className="sc-count">{c.count}</div>
                      <div className="sc-clabel">signals</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="signal-terminal">
              <div><span className="t-prompt">$ </span><span className="t-cmd">signal analyze --workspace acme</span></div>
              <div><span className="t-dim">Pulling signals from 5 sources...</span></div>
              <div><span className="t-ok">✓</span> zendesk &nbsp;&nbsp;<span className="t-dim">34 tickets</span></div>
              <div><span className="t-ok">✓</span> appstore &nbsp;<span className="t-dim">19 reviews</span></div>
              <div><span className="t-ok">✓</span> reddit &nbsp;&nbsp;&nbsp;<span className="t-dim">12 posts</span></div>
              <div><span className="t-ok">✓</span> github &nbsp;&nbsp;&nbsp;<span className="t-dim">8 issues</span></div>
              <div><span className="t-ok">✓</span> slack &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-dim">6 threads</span></div>
              <div><span className="t-dim">─────────────────────────────────</span></div>
              <div>
                <span className="t-dim">3 gaps identified &nbsp;·&nbsp; </span>
                <span className="t-red">1 critical</span>
                <span className="t-dim"> &nbsp;·&nbsp; </span>
                <span className="t-orange">1 high</span>
                <span className="t-dim"> &nbsp;·&nbsp; </span>
                <span className="t-amber">1 medium</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
