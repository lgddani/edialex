import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Productos from './pages/Productos';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router basename="/edialex">
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
