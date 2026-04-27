export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#EAE8E0', borderTop: '1px solid rgba(154, 142, 114, 0.15)', padding: '64px 20px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '32px',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', marginBottom: '16px' }}>
              Arquiforma
            </h3>
            <p style={{ color: '#6B6456', margin: 0 }}>Construção residencial de qualidade</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#servicos" style={{ color: '#6B6456', textDecoration: 'none' }}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" style={{ color: '#6B6456', textDecoration: 'none' }}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contacto" style={{ color: '#6B6456', textDecoration: 'none' }}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>Contacto</h4>
            <p style={{ color: '#6B6456', margin: '0 0 8px 0' }}>info@arquiforma.pt</p>
            <p style={{ color: '#6B6456', margin: 0 }}>+351 XXX XXX XXX</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(154, 142, 114, 0.15)', paddingTop: '32px', textAlign: 'center', color: '#6B6456' }}>
          <p style={{ margin: 0 }}>&copy; 2024 Arquiforma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
