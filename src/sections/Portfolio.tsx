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
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group overflow-hidden rounded-lg bg-[var(--color-surface)] border border-[var(--color-grid)] hover:border-[var(--color-accent)] transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-muted)] group-hover:scale-105 transition-transform" />
              <div className="p-6">
                <h3 className="font-serif text-lg mb-2">{projeto.titulo}</h3>
                <p className="text-[var(--color-accent)] text-sm mb-3">{projeto.localizacao}</p>
                <p className="text-[var(--color-muted)] text-sm">{projeto.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
