"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function PlainifySection() {
  return (
    <div className="section-wrap" id="plainify">
      <div className="section-inner">
        <div className="feature-row reverse">
          {/* Plainify UI mockup */}
          <motion.div
            className="plainify-shell"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="plainify-topbar">
              <span className="plainify-logo">Plainify<span>.</span></span>
              <div className="p-tabs">
                <span className="p-tab active">Spec</span>
                <span className="p-tab">History</span>
                <span className="p-tab">Docs</span>
              </div>
            </div>

            <div className="plainify-split">
              {/* Input */}
              <div className="p-left">
                <div className="p-input-label">Your idea</div>
                <textarea className="p-textarea" readOnly defaultValue="I want to build a task manager that converts Slack messages into trackable tasks, with a dashboard showing priority, owner, and deadline. Should work for teams of 5-50 people." />
                <button className="p-generate">⚡ Generate spec  ⌘↵</button>
              </div>

              {/* Output */}
              <div className="p-right">
                <div className="p-output-section">
                  <div className="p-out-h">Problem <span className="num">clear</span></div>
                  <div className="p-out-item"><span className="p-check">✓</span>Teams lose action items inside Slack threads — no single source of truth.</div>
                </div>
                <div className="p-output-section">
                  <div className="p-out-h">User Stories <span className="num">4</span></div>
                  <div className="p-out-item"><span className="p-check">✓</span>PM can flag any message as a task with /task command</div>
                  <div className="p-out-item"><span className="p-check">✓</span>Bot auto-creates ticket on ✅ reaction with context</div>
                  <div className="p-out-item"><span className="p-check">✓</span>Dashboard shows priority, owner, deadline at a glance</div>
                  <div className="p-out-item"><span className="p-check">✓</span>Weekly digest sent to each team member</div>
                </div>
                <div className="p-output-section">
                  <div className="p-out-h">Edge Cases <span className="num">3</span></div>
                  <div className="p-out-item"><span className="p-x">○</span>Message deleted before bot processes — handle gracefully</div>
                  <div className="p-out-item"><span className="p-x">○</span>Multiple reactions on same message — deduplicate</div>
                  <div className="p-out-item"><span className="p-x">○</span>Task assigned to someone not in workspace</div>
                </div>
                <div className="p-output-section">
                  <div className="p-out-h">Ready for <span className="num">Claude Code · Cursor · Bolt</span></div>
                </div>
              </div>
            </div>
          </motion.div>

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
              <span className="ftag-label">Plainify — Live at plainify.app</span>
            </div>
            <h2 className="feature-headline">From rough idea to ready spec in seconds.</h2>
            <p className="feature-body">
              Plainify turns three lines of thinking into a full product spec. User stories, edge cases, constraints — structured and ready for Claude Code, Cursor, Bolt, or v0.
            </p>
            <div className="feature-bullets">
              {[
                "Describe your idea in plain English — no template to fill",
                "Outputs a structured PRD with problem, stories, and edge cases",
                "Works with every major AI code assistant out of the box",
                "Free to start — Pro at $19/mo for unlimited specs",
              ].map((text) => (
                <div className="fb" key={text}>
                  <div className="fb-check"><Check size={10} /></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <a href="https://plainify.app" target="_blank" rel="noopener" className="feature-link">Open Plainify →</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
