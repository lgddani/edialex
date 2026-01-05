import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getImagePath } from '../utils/paths';
import './Home.css';

const Home = () => {
  const [faqAbierto, setFaqAbierto] = useState<number | null>(null);
  const [contadoresIniciados, setContadoresIniciados] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Activar animaciones de scroll
  useScrollReveal();

  const toggleFaq = (index: number) => {
    setFaqAbierto(faqAbierto === index ? null : index);
  };

  // Estadísticas
  const estadisticas = [
    { id: 1, numero: 3, label: 'Años', descripcion: 'de Experiencia' },
    { id: 2, numero: 5000, label: 'Productos', descripcion: 'Disponibles' },
    { id: 3, numero: 2000, label: 'Clientes', descripcion: 'Satisfechos' },
    { id: 4, numero: 50, label: 'Marcas', descripcion: 'Certificadas' }
  ];

  // Observer para contadores
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !contadoresIniciados) {
            setContadoresIniciados(true);
            animarContadores();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [contadoresIniciados]);

  const animarContadores = () => {
    estadisticas.forEach((stat) => {
      const elemento = document.getElementById(`stat-${stat.id}`);
      if (elemento) {
        let valorActual = 0;
        const incremento = stat.numero / 60;
        const intervalo = setInterval(() => {
          valorActual += incremento;
          if (valorActual >= stat.numero) {
            elemento.textContent = '+' + stat.numero.toString();
            clearInterval(intervalo);
          } else {
            elemento.textContent = '+' + Math.floor(valorActual).toString();
          }
        }, 25);
      }
    });
  };

  const categorias = [
    { id: 1, slug: 'herramientas', nombre: 'Herramientas Eléctricas', icono: '/images/iconos/herramientas-electricas.png', color: '#ff6b35' },
    { id: 2, slug: 'herramientas-manuales', nombre: 'Herramientas Manuales', icono: './images/iconos/herramientas-manuales.png', color: '#f7b801' },
    { id: 3, slug: 'plomeria', nombre: 'Plomería', icono: getImagePath('./images/iconos/plomeria.png'), color: '#4ecdc4' },
    { id: 4, slug: 'electricidad', nombre: 'Electricidad', icono: getImagePath('/images/iconos/electricidad.png'), color: '#95e1d3' },
    { id: 5, slug: 'construccion', nombre: 'Construcción', icono: getImagePath('/images/iconos/construccion.png'), color: '#ff9a76' },
    { id: 6, slug: 'todos', nombre: 'Ferretería', icono: getImagePath('/images/iconos/ferreteria.png'), color: '#a8dadc' }
  ];

  const testimonios = [
    {
      nombre: 'Carlos Jiménez',
      rol: 'Maestro Constructor',
      texto: 'Excelente atención y variedad de productos. Siempre encuentro lo que necesito.',
      rating: 5
    },
    {
      nombre: 'María Torres',
      rol: 'Propietaria de Hogar',
      texto: 'Los mejores precios y personal muy capacitado. Me ayudaron con todo mi proyecto.',
      rating: 5
    },
    {
      nombre: 'Roberto Sánchez',
      rol: 'Electricista',
      texto: 'Llevo años comprando aquí. Calidad garantizada y entregas rápidas.',
      rating: 5
    }
  ];

  const faqs = [
    {
      pregunta: '¿Hacen entregas a domicilio?',
      respuesta: 'Sí, realizamos entregas a domicilio en la zona. Contáctanos para conocer cobertura y tarifas.'
    },
    {
      pregunta: '¿Ofrecen asesoría técnica?',
      respuesta: 'Por supuesto, nuestro personal capacitado te ayudará a seleccionar los productos adecuados.'
    },
    {
      pregunta: '¿Aceptan tarjetas de crédito?',
      respuesta: 'Sí, aceptamos todas las tarjetas de crédito/débito, efectivo y transferencias.'
    },
    {
      pregunta: '¿Tienen garantía?',
      respuesta: 'Todos nuestros productos cuentan con garantía del fabricante.'
    }
  ];

  return (
    <div className="home-ferreteria">
      {/* Hero Banner Full Width */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper slide-up">
          <div className="hero-badge">FERRETERÍA PROFESIONAL</div>
          <h1 className="hero-main-title">
            CONSTRUYE TUS <span className="highlight">PROYECTOS</span><br />
            CON LAS <span className="highlight">MEJORES HERRAMIENTAS</span>
          </h1>
          <p className="hero-description">
            Más de 5,000 productos de las marcas más confiables del mercado.<br />
            Asesoría experta y precios competitivos.
          </p>
          <div className="hero-actions">
            <Link to="/productos" className="btn-explore">
              EXPLORAR PRODUCTOS
            </Link>
            <a href={WHATSAPP_CONFIG.getUrl()} target="_blank" rel="noopener noreferrer" className="btn-contact">
              CONTACTAR
            </a>
          </div>
        </div>
        <div className="hero-image-container slide-right">
          <img src={getImagePath('/images/hero-ferreteria.jpg')} alt="Ferretería EDIALEX - Herramientas y Construcción" className="hero-image" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar" ref={statsRef}>
        <div className="stats-container">
          {estadisticas.map((stat, index) => (
            <div key={stat.id} className={`stat-item fade-in delay-${(index + 1) * 100}`}>
              <div className="stat-number" id={`stat-${stat.id}`}>0</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.descripcion}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promociones Destacadas - Horizontal Cards */}
      <section className="promos-section">
        <div className="section-header slide-up">
          <h2 className="section-title-modern">PROMOCIONES DEL MES</h2>
          <div className="title-underline"></div>
        </div>
        <div className="promos-wrapper">
          <div className="promo-card promo-featured slide-up delay-100">
            <div className="promo-tag">🔥 SUPER OFERTA</div>
            <div className="promo-content">
              <h3>Combo Constructor Profesional</h3>
              <p>Kit completo de herramientas esenciales para cualquier proyecto</p>
              <div className="promo-pricing">
                <span className="old-price">$150</span>
                <span className="new-price">$99</span>
                <span className="discount">-34%</span>
              </div>
            </div>
          </div>
          <div className="promo-card slide-up delay-200">
            <div className="promo-content">
              <h3>Pinturas Premium</h3>
              <p>20% OFF en marcas seleccionadas</p>
              <div className="promo-pricing">
                <span className="new-price">-20%</span>
              </div>
            </div>
          </div>
          <div className="promo-card slide-up delay-300">
            <div className="promo-content">
              <h3>Kit Plomería Completo</h3>
              <p>Todo lo esencial para reparaciones</p>
              <div className="promo-pricing">
                <span className="old-price">$80</span>
                <span className="new-price">$65</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías - Grid Moderno */}
      <section className="categories-section">
        <div className="section-header slide-up">
          <h2 className="section-title-modern">NUESTRAS CATEGORÍAS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="categories-grid">
          {categorias.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/productos?categoria=${cat.slug}`}
              className={`category-box zoom-in delay-${(index + 1) * 100}`}
              style={{ '--accent-color': cat.color } as React.CSSProperties}
            >
              <div className="category-icon">
                <img src={cat.icono} alt={cat.nombre} />
              </div>
              <h3 className="category-name">{cat.nombre}</h3>
              <div className="category-arrow">→</div>
            </Link>
          ))}
        </div>
        <div className="view-all-wrapper slide-up">
          <Link to="/productos" className="view-all-btn">
            VER TODOS LOS PRODUCTOS →
          </Link>
        </div>
      </section>

      {/* Testimonios - Horizontal Scroll */}
      <section className="testimonials-section">
        <div className="section-header slide-up">
          <h2 className="section-title-modern">OPINIONES DE CLIENTES</h2>
          <div className="title-underline"></div>
        </div>
        <div className="testimonials-scroll">
          {testimonios.map((test, index) => (
            <div key={index} className={`testimonial-box slide-left delay-${(index + 1) * 100}`}>
              <div className="quote-mark">"</div>
              <div className="stars">{'⭐'.repeat(test.rating)}</div>
              <p className="testimonial-text">{test.texto}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{test.nombre.charAt(0)}</div>
                <div className="author-info">
                  <div className="author-name">{test.nombre}</div>
                  <div className="author-role">{test.rol}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ - Two Column Layout */}
      <section className="faq-section">
        <div className="section-header slide-up">
          <h2 className="section-title-modern">PREGUNTAS FRECUENTES</h2>
          <div className="title-underline"></div>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-box ${faqAbierto === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.pregunta}</span>
                <span className="faq-toggle">{faqAbierto === index ? '−' : '+'}</span>
              </div>
              {faqAbierto === index && (
                <div className="faq-answer">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final - Full Width Banner */}
      <section className="cta-banner">
        <div className="cta-pattern"></div>
        <div className="cta-content-box scale-up">
          <h2>¿LISTO PARA INICIAR TU PROYECTO?</h2>
          <p>Visítanos o contáctanos para recibir asesoría personalizada</p>
          <a href={WHATSAPP_CONFIG.getUrl()} target="_blank" rel="noopener noreferrer" className="cta-button">
            CONTACTAR AHORA →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
