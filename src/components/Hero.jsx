import { motion } from 'framer-motion';
import { Database, Zap, GitBranch } from 'lucide-react';

const floatingIcons = [
  { icon: '🗄️', x: '10%', y: '20%', delay: 0 },
  { icon: '⚡', x: '85%', y: '15%', delay: 0.5 },
  { icon: '☁️', x: '75%', y: '70%', delay: 1 },
  { icon: '🔄', x: '15%', y: '75%', delay: 1.5 },
  { icon: '📊', x: '50%', y: '85%', delay: 0.8 },
];

export default function Hero({ onStart }) {
  return (
    <section style={styles.hero}>
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          style={{ ...styles.floatingIcon, left: item.x, top: item.y }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div style={styles.grid} />

      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          style={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Database size={14} style={{ color: '#3b82f6' }} />
          <span>Kompletny przewodnik 2025</span>
        </motion.div>

        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Naucz się{' '}
          <span style={styles.gradient}>Data Engineering</span>
          {' '}od zera
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Roadmapa, przykłady kodu, kluczowe koncepty i narzędzia używane przez
          inżynierów danych w topowych firmach technologicznych.
        </motion.p>

        <motion.div
          style={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: <Zap size={16} />, label: '6 faz nauki' },
            { icon: <Database size={16} />, label: '12+ narzędzi' },
            { icon: <GitBranch size={16} />, label: '4 przykłady kodu' },
          ].map((s, i) => (
            <div key={i} style={styles.stat}>
              <span style={{ color: '#3b82f6' }}>{s.icon}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button style={styles.btnPrimary} onClick={onStart}>
            Rozpocznij naukę
          </button>
          <a href="#narzedzia" style={styles.btnSecondary}>
            Przeglądaj narzędzia
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '0 24px',
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  floatingIcon: {
    position: 'absolute',
    fontSize: '2rem',
    opacity: 0.15,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  content: {
    textAlign: 'center',
    maxWidth: 720,
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(59,130,246,0.1)',
    border: '1px solid rgba(59,130,246,0.3)',
    borderRadius: 100,
    padding: '6px 16px',
    fontSize: 13,
    color: '#93c5fd',
    marginBottom: 28,
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: 20,
    color: '#f1f5f9',
  },
  gradient: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#94a3b8',
    maxWidth: 560,
    margin: '0 auto 32px',
    lineHeight: 1.7,
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#64748b',
    fontSize: 14,
  },
  statLabel: {
    color: '#94a3b8',
  },
  buttons: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 32px',
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 0 30px rgba(59,130,246,0.3)',
    fontFamily: 'inherit',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#94a3b8',
    border: '1px solid #1e2d45',
    borderRadius: 12,
    padding: '14px 32px',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'border-color 0.2s, color 0.2s',
  },
};
