import { motion } from 'framer-motion';

const projetos = [
  {
    titulo: 'Residencial Moderne',
    localizacao: 'Lisboa',
    descricao: 'Projeto residencial de 24 apartamentos com arquitetura contemporânea',
  },
  {
    titulo: 'Vila Sustentável',
    localizacao: 'Porto',
    descricao: 'Desenvolvimento com certificação energética A+ e painéis solares',
  },
  {
    titulo: 'Centro Comercial Aurora',
    localizacao: 'Cascais',
    descricao: 'Projeto misto com habitação e comércio, área total 15.000m²',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" style={{ padding: '80px 20px', backgroundColor: '#F4F2EC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 2.25rem)',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          Portfolio
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#EAE8E0',
                border: '1px solid rgba(154, 142, 114, 0.15)',
                transition: 'border-color 300ms',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#C8A96A';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(154, 142, 114, 0.15)';
              }}
            >
              <div
                style={{
                  height: '192px',
                  background: 'linear-gradient(135deg, #C8A96A 0%, #6B6456 100%)',
                  transition: 'transform 300ms',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                }}
              />
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', marginBottom: '8px' }}>
                  {projeto.titulo}
                </h3>
                <p style={{ color: '#C8A96A', fontSize: '14px', marginBottom: '12px' }}>
                  {projeto.localizacao}
                </p>
                <p style={{ color: '#6B6456', fontSize: '14px', margin: 0 }}>
                  {projeto.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
