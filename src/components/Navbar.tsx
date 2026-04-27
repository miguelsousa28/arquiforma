import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-1/2 z-50 w-[95%] max-w-[960px] -translate-x-1/2"
      style={{ width: '95%', maxWidth: '960px' }}
    >
      <div
        className="relative rounded-[9999px] border border-[rgba(154,142,114,0.2)] px-5 py-2.5 flex items-center justify-between"
        style={{
          backgroundColor: isScrolled ? 'rgba(244, 242, 236, 0.92)' : 'rgba(244, 242, 236, 0.75)',
          backdropFilter: 'blur(12px)',
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="font-serif italic text-[22px] tracking-[-0.02em] flex items-center"
            style={{ letterSpacing: '-0.02em' }}
          >
            Arquiforma
            <span className="text-[var(--color-accent)]">.</span>
          </h1>
        </div>

        {/* Links de Navegação */}
        <div
          className="hidden md:flex gap-7 items-center"
          style={{ gap: '28px' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#6B6456] transition-colors duration-300 hover:text-[#1C1A14]"
              style={{ letterSpacing: '0.12em' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão CTA */}
        <motion.button
          className="group relative px-[18px] py-2 rounded-[9999px] font-mono text-[11px] uppercase tracking-[0.12em] text-white overflow-hidden"
          style={{
            backgroundColor: '#1C1A14',
            letterSpacing: '0.12em',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glint effect */}
          <div
            className="absolute rounded-[9999px] opacity-40 group-hover:opacity-60 transition-opacity duration-300"
            style={{
              width: '75%',
              height: '40%',
              top: '2px',
              left: '12%',
              background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)',
              pointerEvents: 'none',
            }}
          />

          <span className="relative z-10">Pedir orçamento</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};
