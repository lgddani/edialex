import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './SobreNosotros.css';

const SobreNosotros = () => {
  // Activar animaciones de scroll
  useScrollReveal();
  const valores = [
    {
      id: 1,
      titulo: 'Calidad Garantizada',
      descripcion: 'Solo ofrecemos productos de marcas reconocidas y certificadas',
      icono: '/images/iconos/calidad.png'
    },
    {
      id: 2,
      titulo: 'Asesoría Experta',
      descripcion: 'Nuestro equipo está capacitado para guiarte en tu proyecto',
      icono: '/images/iconos/asesoria.png'
    },
    {
      id: 3,
      titulo: 'Precios Justos',
      descripcion: 'Los mejores precios del mercado sin comprometer la calidad',
      icono: '/images/iconos/precios.png'
    },
    {
      id: 4,
      titulo: 'Compromiso',
      descripcion: 'Comprometidos con la satisfacción total de nuestros clientes',
      icono: '/images/iconos/compromiso.png'
    }
  ];

  const ventajas = [
    {
      id: 1,
      titulo: 'Amplio Stock',
      descripcion: 'Más de 5,000 productos siempre disponibles',
      color: '#00d000'
    },
    {
      id: 2,
      titulo: 'Entregas Rápidas',
      descripcion: 'Servicio de entrega a domicilio en toda la zona',
      color: '#ff6b35'
    },
    {
      id: 3,
      titulo: 'Garantía Total',
      descripcion: 'Todos nuestros productos cuentan con garantía',
      color: '#4ecdc4'
    },
    {
      id: 4,
      titulo: 'Atención Personalizada',
      descripcion: 'Te ayudamos a encontrar exactamente lo que necesitas',
      color: '#f7b801'
    }
  ];

  // Marcas - Puedes agregar los logos reales después
  const marcas = [
    { id: 1, nombre: 'Bosch', logo: '/images/marcas/bosch.png' },
    { id: 2, nombre: 'DeWalt', logo: '/images/marcas/dewalt.png' },
    { id: 3, nombre: 'Makita', logo: '/images/marcas/makita.png' },
    { id: 4, nombre: 'Stanley', logo: '/images/marcas/stanley.png' },
    { id: 5, nombre: 'Black & Decker', logo: '/images/marcas/blackdecker.png' },
    { id: 6, nombre: 'Truper', logo: '/images/marcas/truper.png' },
    { id: 7, nombre: 'Sika', logo: '/images/marcas/sika.png' },
    { id: 8, nombre: 'Conduit', logo: '/images/marcas/conduit.png' }
  ];

  return (
    <div className="sobre-nosotros-page">
      {/* Hero / Historia */}
      <section className="sobre-hero">
        <div className="sobre-hero-overlay"></div>
        <div className="sobre-hero-content">
          <div className="sobre-hero-text slide-right">
            <span className="sobre-badge">NUESTRA HISTORIA</span>
            <h1 className="sobre-title">25 AÑOS CONSTRUYENDO CONFIANZA</h1>
            <div className="sobre-historia">
              <p>
                Desde 1999, <strong>Ferretería EDIALEX</strong> ha sido el socio confiable de constructores,
                profesionales y hogares en toda la región. Comenzamos como un pequeño local familiar
                con la visión de ofrecer productos de calidad a precios justos.
              </p>
              <p>
                Hoy, somos una empresa consolidada que cuenta con más de 5,000 productos en stock,
                representando a las marcas más prestigiosas del mercado. Nuestro compromiso sigue
                siendo el mismo: brindarte la mejor experiencia de compra y el soporte que necesitas
                para que tus proyectos sean un éxito.
              </p>
            </div>
          </div>
          <div className="sobre-hero-image slide-left">
            <img src="/images/ferreteria-local.jpg" alt="Ferretería EDIALEX - Local" className="hero-local-img" />
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mision-vision">
        <div className="mv-container">
          <div className="mv-card mision-card slide-right">
            <div className="mv-icon">
              <img src="/images/iconos/mision.png" alt="Misión" />
            </div>
            <h2>NUESTRA MISIÓN</h2>
            <p>
              Proveer soluciones integrales en materiales de construcción y ferretería,
              ofreciendo productos de la más alta calidad con un servicio personalizado
              que supere las expectativas de nuestros clientes, contribuyendo al éxito
              de cada proyecto.
            </p>
          </div>
          <div className="mv-card vision-card slide-left">
            <div className="mv-icon">
              <img src="/images/iconos/vision.png" alt="Visión" />
            </div>
            <h2>NUESTRA VISIÓN</h2>
            <p>
              Ser la ferretería líder en la región, reconocida por nuestra excelencia
              en servicio, variedad de productos y compromiso con la comunidad, siendo
              el aliado preferido de constructores, profesionales y hogares.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <div className="valores-header slide-up">
          <h2 className="section-title-sobre">NUESTROS VALORES</h2>
          <div className="title-line"></div>
        </div>
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div key={valor.id} className={`valor-card zoom-in delay-${(index + 1) * 100}`}>
              <div className="valor-icon">
                <img src={valor.icono} alt={valor.titulo} />
              </div>
              <h3>{valor.titulo}</h3>
              <p>{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="ventajas-section">
        <div className="ventajas-header slide-up">
          <h2 className="section-title-sobre">¿POR QUÉ ELEGIRNOS?</h2>
          <div className="title-line"></div>
        </div>
        <div className="ventajas-grid">
          {ventajas.map((ventaja, index) => (
            <div key={ventaja.id} className={`ventaja-card slide-up delay-${(index + 1) * 100}`}>
              <div className="ventaja-number" style={{ backgroundColor: ventaja.color }}>
                {ventaja.id}
              </div>
              <div className="ventaja-content">
                <h3>{ventaja.titulo}</h3>
                <p>{ventaja.descripcion}</p>
              </div>
              <div className="ventaja-line" style={{ backgroundColor: ventaja.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Marcas */}
      <section className="marcas-section">
        <div className="marcas-header slide-up">
          <h2 className="section-title-sobre">MARCAS QUE CONFIAMOS</h2>
          <div className="title-line"></div>
          <p className="marcas-subtitle">Trabajamos con las mejores marcas del mercado</p>
        </div>
        <div className="marcas-grid">
          {marcas.map((marca, index) => (
            <div key={marca.id} className={`marca-card fade-in delay-${(index + 1) * 100}`}>
              <img src={marca.logo} alt={marca.nombre} className="marca-logo" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="sobre-cta">
        <div className="sobre-cta-content scale-up">
          <h2>¿LISTO PARA FORMAR PARTE DE NUESTRA FAMILIA?</h2>
          <p>Visítanos y descubre por qué miles de clientes confían en nosotros</p>
          <div className="sobre-cta-buttons">
            <a
              href={WHATSAPP_CONFIG.getUrl('Hola, me gustaría conocer más sobre Ferretería EDIALEX')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sobre-primary"
            >
              CONTÁCTANOS
            </a>
            <a href="/productos" className="btn-sobre-secondary">
              VER PRODUCTOS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
