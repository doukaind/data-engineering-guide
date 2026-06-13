import { motion } from 'framer-motion';
import { concepts } from '../data/topics';

export default function Concepts() {
  return (
    <section id="koncepty" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={styles.tag}>Koncepty</span>
          <h2 style={styles.title}>Kluczowe pojęcia</h2>
          <p style={styles.subtitle}>Fundamenty, które musisz rozumieć przed rozmową rekrutacyjną</p>
        </motion.div>

        <div style={styles.grid}>
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              style={styles.card}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px ${c.color}18` }}
            >
              <div style={styles.cardIcon(c.color)}>
                <span style={{ fontSize: '1.6rem' }}>{c.icon}</span>
              </div>
              <h3 style={{ ...styles.cardTitle, color: c.color }}>{c.title}</h3>
              <ul style={styles.pointList}>
                {c.points.map((p) => (
                  <li key={p} style={styles.point}>
                    <span style={{ ...styles.dot, background: c.color }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
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
    maxWidth: 1100,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 56,
  },
  tag: {
    display: 'inline-block',
    background: 'rgba(16,185,129,0.12)',
    color: '#34d399',
    border: '1px solid rgba(16,185,129,0.3)',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 24,
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '28px 24px',
    transition: 'box-shadow 0.3s, transform 0.2s',
    cursor: 'default',
  },
  cardIcon: (color) => ({
    width: 56,
    height: 56,
    borderRadius: 14,
    background: `${color}18`,
    border: `1px solid ${color}30`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  }),
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: 16,
  },
  pointList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  point: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    fontSize: 13.5,
    color: '#94a3b8',
    lineHeight: 1.5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    flexShrink: 0,
    marginTop: 6,
  },
};
