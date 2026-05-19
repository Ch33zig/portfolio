"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorkItem } from "../../data";

/* ─── Shared fade-in variant ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
  }),
};

/* ─── Meta cell (jenga-style) ────────────────────────────────────── */

function MetaBlock({
  label,
  value,
  href,
  offset = 0,
  inverted = false,
}: {
  label: string;
  value: string;
  href?: string;
  offset?: number;
  inverted?: boolean;
}) {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        marginLeft: offset,
        border: inverted ? "1.5px solid var(--bg)" : "1.5px solid var(--fg)",
        marginTop: -1.5,
        background: inverted ? "var(--fg)" : "var(--bg)",
        color: inverted ? "var(--bg)" : "var(--fg)",
      }}
      whileHover={{ x: inverted ? -4 : 4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div
        className="smcp"
        style={{
          background: inverted ? "var(--bg)" : "var(--fg)",
          color: inverted ? "var(--fg)" : "var(--bg)",
          padding: "6px 11px",
          fontSize: 10,
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: "6px 12px",
          fontStyle: "italic",
          fontSize: 13,
          borderLeft: inverted ? "1.5px solid var(--bg)" : "1.5px solid var(--fg)",
        }}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
            {value}
          </a>
        ) : value}
      </div>
    </motion.div>
  );
}


/* ─── Back button ────────────────────────────────────────────────── */

function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{ position: "relative", overflow: "hidden", display: "inline-block" }}
      whileHover="hover"
    >
      {/* Diagonal fill overlay */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "#ffffff",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 10,
        }}
        variants={{
          rest: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
          hover: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, -10% 100%)" },
        }}
        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
      />
      <Link
        href="/"
        className="smcp"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--fg)",
          color: "var(--bg)",
          padding: "7px 14px",
          fontSize: 10,
          textDecoration: "none",
          position: "relative",
          zIndex: 5,
          letterSpacing: "0.14em",
        }}
      >
        ← Index
      </Link>
    </motion.div>
  );
}

/* ─── Theme toggle ───────────────────────────────────────────────── */

function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <motion.button
      onClick={onToggle}
      className="smcp"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 100,
        background: "var(--fg)",
        color: "var(--bg)",
        border: "1.5px solid var(--fg)",
        padding: "6px 12px",
        fontSize: 10,
        cursor: "pointer",
        letterSpacing: "0.14em",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {theme === "paper" ? "Ink" : "Paper"}
    </motion.button>
  );
}

/* ─── Entry page ─────────────────────────────────────────────────── */

export default function EntryPage({
  item,
  n,
  sectionTitle,
}: {
  item: WorkItem;
  n: number;
  sectionTitle: string;
}) {
  const [theme, setTheme] = useState<"paper" | "ink">("paper");
  const numStr = String(n).padStart(2, "0");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(28px, 4vw, 64px) clamp(20px, 4vw, 56px)",
          minHeight: "100vh",
        }}
      >
        {/* Top bar */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "4px solid var(--fg)",
            paddingTop: 10,
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BackButton />
          <div
            className="smcp"
            style={{ fontSize: 10, fontStyle: "italic", opacity: 0.6 }}
          >
            Alex Wu&nbsp;·&nbsp;{sectionTitle}
          </div>
        </motion.div>

        {/* Hero */}
        <div style={{ marginBottom: "clamp(36px, 5vw, 64px)" }}>
          {/* Number stamp */}
          <motion.div
            style={{ display: "inline-block", marginBottom: 16 }}
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span
              className="nums"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "5px 14px",
                fontSize: 13,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                display: "inline-block",
              }}
            >
              {numStr}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            style={{
              fontWeight: 400,
              fontSize: "clamp(42px, 7vw, 100px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              margin: "0 0 14px 0",
              textTransform: "uppercase",
            }}
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {item.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontStyle: "italic",
              fontSize: "clamp(15px, 1.6vw, 20px)",
              margin: "0 0 32px 0",
              opacity: 0.65,
              fontWeight: 400,
            }}
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {item.subtitle}
          </motion.p>

          {/* Meta strip — jenga offsets */}
          <motion.div
            style={{ maxWidth: 560 }}
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <MetaBlock label="Year" value={item.year} offset={0} />
            <MetaBlock label="Role" value={item.role} offset={24} />
            <MetaBlock
              label="Website"
              value={item.website ?? item.role}
              href={item.website ? `https://${item.website}` : undefined}
              offset={8}
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          style={{ borderTop: "2px solid var(--fg)", marginBottom: "clamp(32px, 4vw, 56px)" }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Pull quote */}
        {item.preview && (
          <motion.blockquote
            style={{
              margin: "0 0 clamp(32px, 4vw, 56px) 0",
              padding: 0,
              borderLeft: "4px solid var(--fg)",
              paddingLeft: "clamp(16px, 2.5vw, 32px)",
            }}
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <p
              style={{
                fontSize: "clamp(20px, 2.4vw, 32px)",
                lineHeight: 1.25,
                fontStyle: "italic",
                fontWeight: 400,
                margin: 0,
                maxWidth: "34ch",
              }}
            >
              <span style={{ fontStyle: "normal" }}>"</span>
              {item.preview}
              <span style={{ fontStyle: "normal" }}>"</span>
            </p>
          </motion.blockquote>
        )}

        {/* Body */}
        {item.body && (
          <motion.div
            style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {item.body.map((p, i) => (
              <p
                key={i}
                style={{
                  margin: "0 0 20px 0",
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        )}

        {/* Footer stamp */}
        <motion.div
          style={{
            borderTop: "2px solid var(--fg)",
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "clamp(40px, 6vw, 80px)",
          }}
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <div>
            <div
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "6px 14px",
                fontSize: 10,
                display: "inline-block",
                marginBottom: -1.5,
              }}
              className="smcp"
            >
              {sectionTitle}
            </div>
            <div
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "6px 14px",
                fontSize: 10,
                display: "inline-block",
                marginLeft: 20,
              }}
              className="smcp nums"
            >
              No.&nbsp;{numStr}
            </div>
          </div>
          <BackButton />
        </motion.div>
      </div>

      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme((t) => (t === "paper" ? "ink" : "paper"))}
      />
    </>
  );
}
