import { motion } from 'framer-motion';

export const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12 text-center">Contacte-nos</h2>

        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[var(--color-grid)] rounded-lg bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-accent)]"
              placeholder="Seu nome"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[var(--color-grid)] rounded-lg bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-accent)]"
              placeholder="seu@email.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              className="w-full px-4 py-2 border border-[var(--color-grid)] rounded-lg bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-accent)] min-h-32 resize-none"
              placeholder="Sua mensagem..."
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="submit"
            className="w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-muted)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
          >
            Enviar Mensagem
          </motion.button>
        </form>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-[var(--color-muted)] text-sm mb-2">Telefone</p>
            <p className="font-serif text-lg">+351 XXX XXX XXX</p>
          </div>
          <div>
            <p className="text-[var(--color-muted)] text-sm mb-2">Email</p>
            <p className="font-serif text-lg">info@arquiforma.pt</p>
          </div>
        </div>
      </div>
    </section>
  );
};
