import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeroScene } from '../hooks/useHeroScene';

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { canvasRef, isReady } = useHeroScene(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        paddingTop: '80px',
        overflow: 'hidden',
        backgroundColor: '#F4F2EC',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(244,242,236,0.3) 100%)',
          pointerEvents: 'none',
        }}
      />

      {isReady && (
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              margin: '0 0 24px 0',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            Arquiforma Construções
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: '#6B6456',
              maxWidth: '600px',
              marginBottom: '32px',
              textShadow: '0 1px 5px rgba(0,0,0,0.05)',
            }}
          >
            Construção residencial de qualidade, inovação e sustentabilidade
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              padding: '12px 32px',
              backgroundColor: '#C8A96A',
              color: '#F4F2EC',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 300ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6B6456')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8A96A')}
          >
            Saiba Mais
          </motion.button>
        </div>
      )}
    </section>
  );
};
