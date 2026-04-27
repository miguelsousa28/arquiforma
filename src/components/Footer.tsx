export const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-grid)] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Arquiforma</h3>
            <p className="text-[var(--color-muted)]">Construção residencial de qualidade</p>
          </div>
          <div>
            <h4 className="font-serif mb-4">Links</h4>
            <ul className="space-y-2 text-[var(--color-muted)]">
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif mb-4">Contacto</h4>
            <p className="text-[var(--color-muted)]">info@arquiforma.pt</p>
            <p className="text-[var(--color-muted)]">+351 XXX XXX XXX</p>
          </div>
        </div>
        <div className="border-t border-[var(--color-grid)] pt-8 text-center text-[var(--color-muted)]">
          <p>&copy; 2024 Arquiforma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
