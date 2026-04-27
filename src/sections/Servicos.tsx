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
    <section id="servicos" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12 text-center">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-[var(--color-bg)] border border-[var(--color-grid)] rounded-lg hover:border-[var(--color-accent)] transition-colors"
            >
              <h3 className="font-serif text-xl mb-4">{servico.titulo}</h3>
              <p className="text-[var(--color-muted)]">{servico.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
