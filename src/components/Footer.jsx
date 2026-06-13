import { Database, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <Database size={18} style={{ color: '#3b82f6' }} />
          <span style={styles.name}>Data Engineering Guide</span>
        </div>
        <p style={styles.copy}>
          Zbudowane z <Heart size={12} style={{ color: '#ec4899', display: 'inline', verticalAlign: 'middle' }} /> dla
          przyszłych Data Engineerów · 2025
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    padding: '32px 24px',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontWeight: 600,
    fontSize: 14,
    color: '#f1f5f9',
  },
  copy: {
    fontSize: 13,
    color: '#475569',
  },
};
