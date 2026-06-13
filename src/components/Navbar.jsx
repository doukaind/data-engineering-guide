import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Menu, X } from 'lucide-react';

const links = [
  { href: '#roadmap', label: 'Roadmapa' },
  { href: '#kod', label: 'Kod' },
  { href: '#koncepty', label: 'Koncepty' },
  { href: '#narzedzia', label: 'Narzędzia' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      style={scrolled ? { ...styles.nav, ...styles.navScrolled } : styles.nav}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.inner}>
        <a href="#" style={styles.logo}>
          <Database size={20} style={{ color: '#3b82f6' }} />
          <span style={styles.logoText}>DE Guide</span>
        </a>

        <div style={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={styles.link}>
              {l.label}
            </a>
          ))}
          <a href="#kod" style={styles.cta}>Zacznij</a>
        </div>

        <button style={styles.burger} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          style={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} style={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
    borderBottom: '1px solid transparent',
  },
  navScrolled: {
    background: 'rgba(10,14,26,0.85)',
    backdropFilter: 'blur(16px)',
    borderBottomColor: 'var(--border)',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 24px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  },
  logoText: {
    fontWeight: 700,
    fontSize: 17,
    color: '#f1f5f9',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    '@media (max-width: 640px)': { display: 'none' },
  },
  link: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  cta: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: '#fff',
    borderRadius: 8,
    padding: '7px 18px',
    fontSize: 13,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  burger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: 4,
    '@media (max-width: 640px)': { display: 'block' },
  },
  mobileMenu: {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border)',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  mobileLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: 15,
    fontWeight: 500,
    padding: '8px 0',
  },
};
