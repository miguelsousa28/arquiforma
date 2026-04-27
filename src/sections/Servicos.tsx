import { motion } from 'framer-motion';

const servicos = [
  {
    titulo: 'Construção Residencial',
    descricao: 'Projetos de habitação com qualidade superior e acabamentos premiados',
  },
  {
    titulo: 'Reabilitação de Imóveis',
    descricao: 'Modernização e restauro de propriedades com respeito pela história',
  },
  {
    titulo: 'Consultoria Imobiliária',
    descricao: 'Assessoria técnica para investimento e desenvolvimento imobiliário',
  },
];

export const Servicos = () => {
  return (
    <section id="servicos" style={{ padding: '80px 20px', backgroundColor: '#EAE8E0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 2.25rem)',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          Serviços
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                padding: '24px',
                backgroundColor: '#F4F2EC',
                border: '1px solid rgba(154, 142, 114, 0.15)',
                borderRadius: '8px',
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
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '16px' }}>
                {servico.titulo}
              </h3>
              <p style={{ color: '#6B6456', margin: 0 }}>{servico.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
