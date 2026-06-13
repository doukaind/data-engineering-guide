import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { codeExamples } from '../data/topics';

export default function CodeExamples() {
  const [active, setActive] = useState(codeExamples[0].id);
  const [copied, setCopied] = useState(false);

  const current = codeExamples.find((e) => e.id === active);

  const copy = async () => {
    await navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kod" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={styles.tag}>Przykłady kodu</span>
          <h2 style={styles.title}>Kod, który musisz znać</h2>
          <p style={styles.subtitle}>
            Gotowe wzorce dla najpopularniejszych narzędzi Data Engineering
          </p>
        </motion.div>

        <div style={styles.tabs}>
          {codeExamples.map((ex) => (
            <button
              key={ex.id}
              style={active === ex.id ? { ...styles.tab, ...styles.tabActive } : styles.tab}
              onClick={() => setActive(ex.id)}
            >
              {ex.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            style={styles.card}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <div style={styles.cardTop}>
              <div>
                <h3 style={styles.codeTitle}>{current.title}</h3>
                <p style={styles.codeDesc}>{current.description}</p>
              </div>
              <button
                style={copied ? { ...styles.copyBtn, ...styles.copyBtnSuccess } : styles.copyBtn}
                onClick={copy}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Skopiowano!' : 'Kopiuj'}
              </button>
            </div>

            <div style={styles.codeBlock}>
              <SyntaxHighlighter
                language={current.language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  borderRadius: '0 0 12px 12px',
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  background: '#0d1117',
                  padding: '24px',
                }}
                showLineNumbers
                lineNumberStyle={{ color: '#3b4261', fontSize: '0.75rem' }}
              >
                {current.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '96px 24px',
    background: 'var(--bg-primary)',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 48,
  },
  tag: {
    display: 'inline-block',
    background: 'rgba(6,182,212,0.12)',
    color: '#22d3ee',
    border: '1px solid rgba(6,182,212,0.3)',
    borderRadius: 100,
    padding: '4px 14px',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  title: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    fontWeight: 700,
    color: '#f1f5f9',
    marginBottom: 12,
  },
  subtitle: {
    color: '#64748b',
    fontSize: 16,
  },
  tabs: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  tab: {
    background: 'transparent',
    border: '1px solid var(--border)',
    color: '#64748b',
    borderRadius: 8,
    padding: '8px 18px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
  },
  tabActive: {
    background: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.5)',
    color: '#93c5fd',
  },
  card: {
    border: '1px solid var(--border)',
    borderRadius: 12,
    overflow: 'hidden',
    background: 'var(--bg-card)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px 24px',
    gap: 16,
    flexWrap: 'wrap',
    borderBottom: '1px solid var(--border)',
  },
  codeTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#f1f5f9',
    marginBottom: 4,
    fontFamily: "'JetBrains Mono', monospace",
  },
  codeDesc: {
    fontSize: 13,
    color: '#64748b',
    maxWidth: 500,
  },
  copyBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: 'rgba(59,130,246,0.1)',
    border: '1px solid rgba(59,130,246,0.3)',
    color: '#93c5fd',
    borderRadius: 8,
    padding: '7px 14px',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  copyBtnSuccess: {
    background: 'rgba(16,185,129,0.1)',
    borderColor: 'rgba(16,185,129,0.4)',
    color: '#34d399',
  },
  codeBlock: {
    overflow: 'auto',
  },
};
