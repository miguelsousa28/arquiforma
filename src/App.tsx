import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Servicos } from './sections/Servicos';
import { Portfolio } from './sections/Portfolio';
import { Contacto } from './sections/Contacto';
import './styles/index.css';

function App() {
  useLenis();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicos />
      <Portfolio />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
