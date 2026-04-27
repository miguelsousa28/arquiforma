import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeroScene } from '../hooks/useHeroScene';

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { canvasRef, isReady } = useHeroScene(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen pt-16 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(244,242,236,0.3) 100%)' }} />

      {isReady && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg"
          >
            Arquiforma Construções
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl mb-8 drop-shadow"
          >
            Construção residencial de qualidade, inovação e sustentabilidade
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-muted)] transition-colors font-medium cursor-pointer"
          >
            Saiba Mais
          </motion.button>
        </div>
      )}
    </section>
  );
};
