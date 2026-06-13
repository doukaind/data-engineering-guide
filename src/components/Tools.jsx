import { motion } from 'framer-motion';
import { tools } from '../data/topics';

const categories = [...new Set(tools.map((t) => t.category))];

export default function Tools() {
  return (
    <section id="narzedzia" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={styles.tag}>Ekosystem</span>
          <h2 style={styles.title}>Narzędzia Data Engineera</h2>
          <p style={styles.subtitle}>Najważniejsze technologie, które warto opanować</p>
        </motion.div>

        <div style={styles.grid}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              style={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.05,
                borderColor: tool.color,
                boxShadow: `0 8px 32px ${tool.color}25`,
              }}
            >
              <span style={styles.emoji}>{tool.emoji}</span>
              <span style={{ ...styles.toolName, color: tool.color }}>{tool.name}</span>
              <span style={styles.category}>{tool.category}</span>
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
    background: 'var(--bg-primary)',
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 56,
  },
  tag: {
    display: 'inline-block',
    background: 'rgba(245,158,11,0.12)',
    color: '#fbbf24',
    border: '1px solid rgba(245,158,11,0.3)',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: 16,
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 14,
    padding: '22px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
  },
  emoji: {
    fontSize: '2rem',
  },
  toolName: {
    fontSize: 14,
    fontWeight: 700,
  },
  category: {
    fontSize: 11,
    color: '#475569',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
};
