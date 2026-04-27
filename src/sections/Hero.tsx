import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createHeroScene } from '../scenes/HeroScene';

export const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    createHeroScene(sceneRef.current);
  }, []);

  return (
    <section className="relative w-full h-screen pt-16">
      <div className="absolute inset-0 grid-bg" ref={sceneRef} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif mb-6"
        >
          Arquiforma Construções
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl mb-8"
        >
          Construção residencial de qualidade, inovação e sustentabilidade
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
        >
          Saiba Mais
        </motion.button>
      </div>
    </section>
  );
};
