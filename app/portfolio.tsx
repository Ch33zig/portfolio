"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SECTIONS, allItems, type WorkItem, type Section } from "./data";

const ROMAN = ["I", "II", "III"];

let _c = 0;
const numberedSections = SECTIONS.map((s) => ({
  ...s,
  items: s.items.map((it) => ({ ...it, n: ++_c })),
}));
const totalItems = allItems.length;

/* ─── Geometric mark ──────────────────────────────────────────────── */

function Mark() {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 96 96"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <rect x="0" y="0" width="60" height="18" fill="var(--fg)" />
      <rect x="24" y="22" width="72" height="18" fill="var(--fg)" />
      <rect x="6" y="44" width="48" height="18" fill="var(--fg)" />
      <rect x="36" y="66" width="54" height="18" fill="var(--fg)" />
    </motion.svg>
  );
}

/* ─── Definition row (jenga offset) ─────────────────────────────── */

function DefRow({
  label,
  value,
  offset = 0,
}: {
  label: string;
  value: React.ReactNode;
  offset?: number;
}) {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        marginLeft: offset,
        border: "1.5px solid var(--fg)",
        marginTop: -1.5,
      }}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className="smcp"
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
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
          fontWeight: 400,
          fontSize: 13,
          borderLeft: "1.5px solid var(--fg)",
          background: "var(--bg)",
          color: "var(--fg)",
        }}
      >
        {value}
      </div>
    </motion.div>
  );
}

/* ─── Footer cell (jenga offset) ────────────────────────────────── */

function FooterCell({
  label,
  value,
  offset = 0,
  dark,
  noTopDivider,
}: {
  label: string;
  value: React.ReactNode;
  offset?: number;
  dark?: boolean;
  noTopDivider?: boolean;
}) {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        marginLeft: offset,
        border: "1.5px solid var(--fg)",
        marginTop: -1.5,
        background: dark ? "var(--fg)" : "var(--bg)",
        color: dark ? "var(--bg)" : "var(--fg)",
      }}
      whileHover={{ x: dark ? -4 : 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className="smcp"
        style={{ padding: "5px 11px", fontSize: 10, opacity: 0.85 }}
      >
        {label}
      </div>
      <div
        style={{
          padding: "5px 12px",
          fontSize: 12,
          borderLeft: dark ? "1.5px solid var(--bg)" : "1.5px solid var(--fg)",
          borderTop: dark && !noTopDivider ? "1.5px solid var(--bg)" : "none",
        }}
      >
        {value}
      </div>
    </motion.div>
  );
}

/* ─── Big stacked name ──────────────────────────────────────────── */

function NameMark() {
  return (
    <motion.h1
      style={{
        fontWeight: 400,
        fontSize: "clamp(52px, 7.8vw, 128px)",
        lineHeight: 0.9,
        letterSpacing: "-0.04em",
        margin: 0,
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <span>Alex</span>
      <span style={{ marginLeft: "0.6em" }}>Wu</span>
    </motion.h1>
  );
}

/* ─── Left column ───────────────────────────────────────────────── */

function LeftColumn() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/New_York",
      })
    : "--:--";

  return (
    <aside
      style={{
        flex: "0 0 46%",
        borderRight: "2px solid var(--fg)",
        padding: "clamp(24px, 3.2vw, 52px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Masthead */}
      <motion.header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          borderTop: "4px solid var(--fg)",
          paddingTop: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="smcp" style={{ fontSize: 10, fontStyle: "italic" }}>
          Index of Works
        </div>
        <Mark />
      </motion.header>

      {/* Name + definition list */}
      <div
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          position: "relative",
        }}
      >
        <NameMark />

        <motion.div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            maxWidth: 520,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <DefRow
            label="Discipline"
            value="Product Engineer, Pianist"
            offset={0}
          />
          <DefRow label="Focus" value="Systems & AI" offset={28} />
          <DefRow
            label="Bio"
            value="17, building what becomes the standard later."
            offset={14}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        style={{
          fontSize: 13,
          lineHeight: 1.55,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <FooterCell
          noTopDivider
          label="LinkedIn"
          value={
            <a
              href="https://www.linkedin.com/in/alex-h-wu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--bg)" }}
            >
              alex-h-wu
            </a>
          }
          offset={0}
          dark
        />
        <FooterCell
          label="Résumé"
          value={
            <span style={{ opacity: 0.55, fontStyle: "italic" }}>
              available on request
            </span>
          }
          offset={24}
          dark
        />
        <FooterCell
          label="Email"
          value={
            <a
              href="mailto:alexhaolinwu@gmail.com"
              style={{ color: "var(--bg)" }}
            >
              alexhaolinwu@gmail.com
            </a>
          }
          offset={0}
          dark
        />
        <FooterCell
          label="Locale"
          value={
            <span>
              Toronto, ON&nbsp;·&nbsp;
              <span className="nums">{time}</span>&nbsp;ET
            </span>
          }
          offset={36}
          dark
        />
      </motion.footer>
    </aside>
  );
}



/* ─── Index row ─────────────────────────────────────────────────── */

function IndexRow({
  item,
  rowPad,
  rowIdx,
}: {
  item: WorkItem & { n: number };
  rowPad: number;
  rowIdx: number;
}) {
  const numStr = String(item.n).padStart(2, "0");
  const shift = rowIdx % 2 === 0 ? 0 : 14;

  return (
    <motion.li
      style={{
        border: "1.5px solid var(--fg)",
        marginLeft: shift,
        marginTop: -1.5,
        position: "relative",
        overflow: "hidden",
        listStyle: "none",
      }}
      initial="rest"
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
        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      />

      <Link
        href={`/entry/${item.id}`}
        style={{
          display: "grid",
          gridTemplateColumns: "48px 1fr auto auto",
          alignItems: "stretch",
          color: "inherit",
          textDecoration: "none",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Number stamp */}
        <span
          className="nums"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: `${rowPad}px 0`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          {numStr}
        </span>

        {/* Title + subtitle */}
        <span
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            flexWrap: "wrap",
            padding: `${rowPad}px 14px`,
          }}
        >
          <span
            style={{
              fontSize: "clamp(14px, 1.3vw, 18px)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            {item.title}
          </span>
          <span
            style={{
              fontStyle: "italic",
              fontSize: 11,
              opacity: 0.7,
              fontWeight: 400,
            }}
          >
            {item.subtitle}
          </span>
        </span>

        {/* Kind */}
        <span
          className="smcp"
          style={{
            fontSize: 9,
            opacity: 0.8,
            whiteSpace: "nowrap",
            padding: `${rowPad}px 10px`,
            alignSelf: "center",
            borderLeft: "1.5px solid currentColor",
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.kind}
        </span>

        {/* Year */}
        <span
          className="nums"
          style={{
            fontSize: 13,
            fontStyle: "italic",
            minWidth: 60,
            textAlign: "right",
            padding: `${rowPad}px 12px`,
            alignSelf: "center",
            borderLeft: "1.5px solid currentColor",
            fontWeight: 400,
          }}
        >
          {item.year}
        </span>
      </Link>
    </motion.li>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

function SectionBlock({
  section,
  romanNum,
  rowPad,
  sectionIdx,
}: {
  section: Section & { items: Array<WorkItem & { n: number }> };
  romanNum: string;
  rowPad: number;
  sectionIdx: number;
}) {
  const titleOffset = [10, 32, 4][sectionIdx % 3] ?? 0;
  const countOffset = [48, 14, 64][sectionIdx % 3] ?? 0;

  return (
    <motion.section
      style={{ marginBottom: 16, marginTop: sectionIdx === 0 ? 0 : 8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.15 + sectionIdx * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <header
        style={{ display: "flex", flexDirection: "column", marginBottom: 0 }}
      >
        <span
          style={{
            background: "var(--bg)",
            color: "var(--fg)",
            border: "1.5px solid var(--fg)",
            padding: "4px 10px",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 11,
            display: "inline-block",
            alignSelf: "flex-start",
          }}
        >
          Part&nbsp;{romanNum}
        </span>
        <h2
          style={{
            margin: "-1px 0 0 0",
            marginLeft: titleOffset,
            padding: "8px 14px",
            fontSize: "clamp(20px, 2.2vw, 30px)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            background: "var(--fg)",
            color: "var(--bg)",
            display: "inline-block",
            alignSelf: "flex-start",
          }}
        >
          {section.title}
        </h2>
        <span
          className="smcp nums"
          style={{
            fontSize: 9,
            background: "var(--bg)",
            color: "var(--fg)",
            border: "1.5px solid var(--fg)",
            padding: "4px 10px",
            alignSelf: "flex-start",
            marginLeft: countOffset,
            marginTop: -1,
          }}
        >
          {section.items.length}&nbsp;entries
        </span>
      </header>

      <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0 }}>
        {section.items.map((item, idx) => (
          <IndexRow
            key={item.id}
            item={item}
            rowPad={rowPad}
            rowIdx={idx}
          />
        ))}
      </ul>
    </motion.section>
  );
}

/* ─── Right column ──────────────────────────────────────────────── */

function RightColumn() {
  const rowPad = 14;

  return (
    <main
      style={{
        flex: "1 1 54%",
        padding: "clamp(24px, 3.2vw, 52px)",
        minHeight: "100vh",
      }}
    >
      {/* Masthead */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--fg)",
          color: "var(--bg)",
          padding: "9px 14px",
          marginBottom: 0,
          marginLeft: 18,
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="smcp" style={{ fontSize: 10, fontStyle: "italic" }}>
          The Index
        </div>
        <div className="smcp nums" style={{ fontSize: 9 }}>
          {totalItems} entries&nbsp;·&nbsp;{numberedSections.length} parts
        </div>
      </motion.div>

      {numberedSections.map((section, sIdx) => (
        <SectionBlock
          key={section.id}
          section={section}
          romanNum={ROMAN[sIdx]}
          rowPad={rowPad}
          sectionIdx={sIdx}
        />
      ))}

      {/* End stamp */}
      <motion.div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div
          className="smcp"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "7px 12px",
            fontSize: 9,
            fontStyle: "italic",
            alignSelf: "flex-start",
            width: "38%",
          }}
        >
          End of Index
        </div>
        <div
          className="smcp"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "7px 12px",
            fontSize: 9,
            alignSelf: "flex-end",
            width: "52%",
            textAlign: "right",
            marginTop: -1.5,
          }}
        >
          Alex Wu
        </div>
      </motion.div>
    </main>
  );
}

/* ─── Theme toggle ──────────────────────────────────────────────── */

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: string;
  onToggle: () => void;
}) {
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

/* ─── Root ──────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [theme, setTheme] = useState<"paper" | "ink">("paper");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          minHeight: "100vh",
        }}
        className="portfolio-layout"
      >
        <LeftColumn />
        <RightColumn />
      </div>
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme((t) => (t === "paper" ? "ink" : "paper"))}
      />

      <style>{`
        @media (max-width: 768px) {
          .portfolio-layout {
            flex-direction: column !important;
          }
          .portfolio-layout > aside {
            flex: none !important;
            width: 100% !important;
            border-right: none !important;
            border-bottom: 2px solid var(--fg) !important;
            min-height: unset !important;
            position: static !important;
            max-height: unset !important;
          }
          .portfolio-layout > main {
            flex: none !important;
            width: 100% !important;
            min-height: unset !important;
          }
        }
      `}</style>
    </>
  );
}
