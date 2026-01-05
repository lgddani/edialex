import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getImagePath } from '../utils/paths';
import './Productos.css';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: string;
}

const Productos = () => {
  const [searchParams] = useSearchParams();
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');

  // Activar animaciones de scroll
  useScrollReveal();

  // Leer el parámetro de categoría de la URL al cargar
  useEffect(() => {
    const categoriaParam = searchParams.get('categoria');
    if (categoriaParam) {
      setCategoriaActiva(categoriaParam);
    }
  }, [searchParams]);

  const categorias = [
    { id: 'todos', nombre: 'Todos los Productos', icono: getImagePath('/images/iconos/ferreteria.png') },
    { id: 'herramientas', nombre: 'Herramientas Eléctricas', icono: getImagePath('/images/iconos/herramientas-electricas.png') },
    { id: 'herramientas-manuales', nombre: 'Herramientas Manuales', icono: getImagePath('/images/iconos/herramientas-manuales.png') },
    { id: 'plomeria', nombre: 'Plomería', icono: getImagePath('/images/iconos/plomeria.png') },
    { id: 'electricidad', nombre: 'Electricidad', icono: getImagePath('/images/iconos/electricidad.png') },
    { id: 'construccion', nombre: 'Construcción', icono: getImagePath('/images/iconos/construccion.png') },
  ];

  // Productos de ejemplo - Tú los reemplazarás con los reales
  const productos: Producto[] = [
    // Herramientas Eléctricas
    {
      id: 1,
      nombre: 'Taladro Percutor 750W',
      descripcion: 'Taladro percutor profesional con control de velocidad variable y maletín incluido',
      precio: '$89.99',
      imagen: getImagePath('/images/productos/taladro.jpg'),
      categoria: 'herramientas'
    },
    {
      id: 2,
      nombre: 'Amoladora Angular 4.5"',
      descripcion: 'Amoladora de alta potencia 900W, ideal para corte y desbaste',
      precio: '$65.00',
      imagen: getImagePath('/images/productos/amoladora.jpg'),
      categoria: 'herramientas'
    },
    {
      id: 3,
      nombre: 'Sierra Circular 7.25"',
      descripcion: 'Sierra circular con guía láser y profundidad de corte ajustable',
      precio: '$125.00',
      imagen: getImagePath('/images/productos/sierra.jpg'),
      categoria: 'herramientas'
    },

    // Herramientas Manuales
    {
      id: 4,
      nombre: 'Juego de Destornilladores 6 Piezas',
      descripcion: 'Set profesional de destornilladores planos y estrella con mangos ergonómicos',
      precio: '$25.00',
      imagen: getImagePath('/images/productos/destornilladores.jpg'),
      categoria: 'herramientas-manuales'
    },
    {
      id: 5,
      nombre: 'Martillo de Uña 16oz',
      descripcion: 'Martillo de acero forjado con mango de fibra de vidrio antideslizante',
      precio: '$18.50',
      imagen: getImagePath('/images/productos/martillo.jpg'),
      categoria: 'herramientas-manuales'
    },
    {
      id: 6,
      nombre: 'Juego de Llaves Combinadas 12 Piezas',
      descripcion: 'Set de llaves combinadas métricas de 8mm a 19mm, acero cromo-vanadio',
      precio: '$45.00',
      imagen: getImagePath('/images/productos/llaves.jpg'),
      categoria: 'herramientas-manuales'
    },

    // Plomería
    {
      id: 7,
      nombre: 'Tubería PVC 1/2" x 3m',
      descripcion: 'Tubería PVC sanitaria de alta calidad',
      precio: '$4.50',
      imagen: getImagePath('/images/productos/tuberia.jpg'),
      categoria: 'plomeria'
    },
    {
      id: 8,
      nombre: 'Llave de Paso 1/2"',
      descripcion: 'Llave de paso de bronce cromado, alta durabilidad',
      precio: '$12.00',
      imagen: getImagePath('/images/productos/llave-paso.jpg'),
      categoria: 'plomeria'
    },
    {
      id: 9,
      nombre: 'Grifo Monomando Cocina',
      descripcion: 'Grifo monomando con caño alto, acabado cromado',
      precio: '$55.00',
      imagen: getImagePath('/images/productos/grifo.jpg'),
      categoria: 'plomeria'
    },

    // Electricidad
    {
      id: 10,
      nombre: 'Cable AWG #12 x 100m',
      descripcion: 'Cable eléctrico calibre 12 para instalaciones residenciales',
      precio: '$85.00',
      imagen: getImagePath('/images/productos/cable.jpg'),
      categoria: 'electricidad'
    },
    {
      id: 11,
      nombre: 'Interruptor Doble',
      descripcion: 'Interruptor doble de sobreponer, color blanco',
      precio: '$3.50',
      imagen: getImagePath('/images/productos/interruptor.jpg'),
      categoria: 'electricidad'
    },
    {
      id: 12,
      nombre: 'Tomacorriente Doble',
      descripcion: 'Tomacorriente polarizado doble con tierra',
      precio: '$4.00',
      imagen: getImagePath('/images/productos/tomacorriente.jpg'),
      categoria: 'electricidad'
    },

    // Construcción
    {
      id: 13,
      nombre: 'Cemento Gris 50kg',
      descripcion: 'Cemento Portland tipo I para construcción general',
      precio: '$8.50',
      imagen: getImagePath('/images/productos/cemento.jpg'),
      categoria: 'construccion'
    },
    {
      id: 14,
      nombre: 'Ladrillo Rojo 6 Huecos',
      descripcion: 'Ladrillo cerámico de 6 huecos para mampostería',
      precio: '$0.35',
      imagen: getImagePath('/images/productos/ladrillo.jpg'),
      categoria: 'construccion'
    },
    {
      id: 15,
      nombre: 'Adhesivo para Cerámica 25kg',
      descripcion: 'Pegamento para porcelanato y cerámica de alto agarre',
      precio: '$15.00',
      imagen: getImagePath('/images/productos/adhesivo.jpg'),
      categoria: 'construccion'
    },
  ];

  // Filtrado por categoría y búsqueda
  const productosFiltrados = productos.filter(producto => {
    const cumpleCategoria = categoriaActiva === 'todos' || producto.categoria === categoriaActiva;
    const cumpleBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                           producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return cumpleCategoria && cumpleBusqueda;
  });

  const handleContacto = (producto: Producto) => {
    const mensaje = `Hola, estoy interesado en: ${producto.nombre} - ${producto.precio}`;
    window.open(WHATSAPP_CONFIG.getUrl(mensaje), '_blank');
  };

  return (
    <div className="productos-page">
      {/* Header */}
      <section className="productos-header">
        <div className="productos-header-content slide-up">
          <h1>NUESTROS PRODUCTOS</h1>
          <p>Más de 5,000 productos de las mejores marcas del mercado</p>
        </div>
      </section>

      {/* Buscador y Filtros */}
      <section className="categorias-filter">
        {/* Buscador */}
        <div className="search-container fade-in">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar productos por nombre o descripción..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="search-input"
            />
            {busqueda && (
              <button
                className="clear-search"
                onClick={() => setBusqueda('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filtros de Categorías */}
        <div className="filter-container slide-up">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(cat.id)}
            >
              <img src={cat.icono} alt={cat.nombre} className="filter-icon" />
              <span>{cat.nombre}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Contador de productos */}
      <div className="productos-count fade-in">
        <p>Mostrando <strong>{productosFiltrados.length}</strong> productos</p>
      </div>

      {/* Grid de Productos */}
      <section className="productos-grid-section">
        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen">
                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                <div className="producto-overlay">
                  <button
                    className="btn-ver-detalle"
                    onClick={() => handleContacto(producto)}
                  >
                    CONSULTAR
                  </button>
                </div>
              </div>
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcion}</p>
                <div className="producto-footer">
                  <span className="producto-precio">{producto.precio}</span>
                  <button
                    className="btn-cotizar"
                    onClick={() => handleContacto(producto)}
                  >
                    COTIZAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="productos-cta">
        <div className="productos-cta-content">
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Contáctanos y te ayudaremos a encontrar el producto que necesitas</p>
          <a href={WHATSAPP_CONFIG.getUrl()} target="_blank" rel="noopener noreferrer" className="btn-contactar-productos">
            CONTACTAR AHORA
          </a>
        </div>
      </section>
    </div>
  );
};

export default Productos;
