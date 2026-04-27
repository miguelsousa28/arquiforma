import { motion } from 'framer-motion';

export const Contacto = () => {
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid rgba(154, 142, 114, 0.15)',
    borderRadius: '8px',
    backgroundColor: '#F4F2EC',
    fontFamily: 'var(--font-sans)',
    fontSize: '16px',
    transition: 'border-color 300ms',
  };

  return (
    <section id="contacto" style={{ padding: '80px 20px', backgroundColor: '#EAE8E0' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 2.25rem)',
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          Contacte-nos
        </h2>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Nome
            </label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Seu nome"
              onFocus={(e) => (e.target.style.borderColor = '#C8A96A')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(154, 142, 114, 0.15)')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Email
            </label>
            <input
              type="email"
              style={inputStyle}
              placeholder="seu@email.com"
              onFocus={(e) => (e.target.style.borderColor = '#C8A96A')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(154, 142, 114, 0.15)')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Mensagem
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: '128px', resize: 'none' }}
              placeholder="Sua mensagem..."
              onFocus={(e) => (e.target.style.borderColor = '#C8A96A')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(154, 142, 114, 0.15)')}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="submit"
            style={{
              padding: '12px 24px',
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
            Enviar Mensagem
          </motion.button>
        </form>

        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ color: '#6B6456', fontSize: '14px', marginBottom: '8px' }}>Telefone</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: 0 }}>+351 XXX XXX XXX</p>
          </div>
          <div>
            <p style={{ color: '#6B6456', fontSize: '14px', marginBottom: '8px' }}>Email</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: 0 }}>info@arquiforma.pt</p>
          </div>
        </div>
      </div>
    </section>
  );
};
