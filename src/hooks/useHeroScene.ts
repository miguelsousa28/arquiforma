import { useEffect, useRef, useState } from 'react';
import { HeroScene } from '../scenes/HeroScene';

export const useHeroScene = (sectionRef: React.RefObject<HTMLDivElement>) => {
  const sceneRef = useRef<HeroScene | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    sceneRef.current = new HeroScene({
      canvas: canvasRef.current,
      width,
      height,
    });

    setIsReady(true);

    const handleScroll = () => {
      if (!sectionRef.current || !sceneRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = sectionHeight;
      const scrolled = Math.max(0, start - rect.top);
      const progress = Math.min(1, scrolled / end);

      sceneRef.current.updateProgress(progress);
    };

    const handleResize = () => {
      if (!canvasRef.current || !sceneRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      sceneRef.current.resize(width, height);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      sceneRef.current?.destroy();
    };
  }, [sectionRef]);

  return { canvasRef, isReady };
};
