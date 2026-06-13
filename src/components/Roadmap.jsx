import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { roadmapSteps } from '../data/topics';

export default function Roadmap() {
  return (
    <section id="roadmap" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={styles.tag}>Roadmapa</span>
          <h2 style={styles.title}>Ścieżka nauki Data Engineering</h2>
          <p style={styles.subtitle}>
            6 faz prowadzących od podstaw do poziomu seniora
          </p>
        </motion.div>

        <div style={styles.steps}>
          {roadmapSteps.map((step, i) => (
            <motion.div
              key={step.id}
              style={styles.stepWrapper}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={styles.stepNumber(step.color)}>
                <span style={styles.stepEmoji}>{step.icon}</span>
                <span style={styles.phaseNum}>#{step.id}</span>
              </div>

              <motion.div
                style={styles.card}
                whileHover={{ scale: 1.02, borderColor: step.color }}
                transition={{ duration: 0.2 }}
              >
                <div style={styles.cardHeader}>
                  <h3 style={{ ...styles.phaseName, color: step.color }}>{step.phase}</h3>
                  <div style={styles.pill(step.color)}>Faza {step.id}</div>
                </div>
                <ul style={styles.topicList}>
                  {step.topics.map((t) => (
                    <li key={t} style={styles.topicItem}>
                      <CheckCircle size={14} style={{ color: step.color, flexShrink: 0 }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '96px 24px',
    background: 'var(--bg-secondary)',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 64,
  },
  tag: {
    display: 'inline-block',
    background: 'rgba(139,92,246,0.15)',
    color: '#a78bfa',
    border: '1px solid rgba(139,92,246,0.3)',
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
  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  stepWrapper: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start',
  },
  stepNumber: (color) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    minWidth: 56,
    padding: '10px 0',
  }),
  stepEmoji: {
    fontSize: '1.75rem',
  },
  phaseNum: {
    fontSize: 11,
    color: '#475569',
    fontFamily: "'JetBrains Mono', monospace",
  },
  card: {
    flex: 1,
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '20px 24px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    cursor: 'default',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    flexWrap: 'wrap',
    gap: 8,
  },
  phaseName: {
    fontSize: '1.1rem',
    fontWeight: 700,
  },
  pill: (color) => ({
    fontSize: 11,
    fontWeight: 600,
    color: color,
    background: `${color}18`,
    border: `1px solid ${color}40`,
    borderRadius: 100,
    padding: '3px 10px',
  }),
  topicList: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '8px 16px',
  },
  topicItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 14,
    color: '#94a3b8',
  },
};
