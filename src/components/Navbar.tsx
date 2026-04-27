import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 pt-5 px-4"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '95%',
          maxWidth: '960px',
          borderRadius: '9999px',
          border: '1px solid rgba(154, 142, 114, 0.2)',
          padding: '10px 20px',
          backgroundColor: isScrolled ? 'rgba(244, 242, 236, 0.92)' : 'rgba(244, 242, 236, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          Arquiforma
          <span style={{ color: '#C8A96A' }}>.</span>
        </h1>

        {/* Links - Hidden on mobile */}
        <div
          style={{
            display: 'none',
            gap: '28px',
            alignItems: 'center',
            '@media (min-width: 768px)': {
              display: 'flex',
            },
          }}
        >
          {['Projetos', 'Empresa', 'Contacto'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#6B6456',
                textDecoration: 'none',
                transition: 'color 300ms',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1C1A14')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6456')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'relative',
            padding: '8px 18px',
            borderRadius: '9999px',
            backgroundColor: '#1C1A14',
            color: 'white',
            border: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '75%',
              height: '40%',
              top: '2px',
              left: '12%',
              background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)',
              borderRadius: '9999px',
              opacity: 0.4,
              pointerEvents: 'none',
            }}
          />
          <span style={{ position: 'relative', zIndex: 10 }}>Pedir orçamento</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};
