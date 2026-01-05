import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="error-code">404</div>
          <h1 className="error-title">PÁGINA NO ENCONTRADA</h1>
          <p className="error-description">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          <div className="notfound-icon">
            <i className="fas fa-tools"></i>
          </div>

          <div className="notfound-actions">
            <Link to="/" className="btn-home">
              <i className="fas fa-home"></i> Volver al Inicio
            </Link>
            <Link to="/productos" className="btn-productos">
              <i className="fas fa-box"></i> Ver Productos
            </Link>
          </div>

          <div className="quick-links">
            <p>O visita una de estas páginas:</p>
            <div className="links-grid">
              <Link to="/" className="quick-link">
                <i className="fas fa-home"></i>
                <span>Inicio</span>
              </Link>
              <Link to="/productos" className="quick-link">
                <i className="fas fa-box"></i>
                <span>Productos</span>
              </Link>
              <Link to="/sobre-nosotros" className="quick-link">
                <i className="fas fa-info-circle"></i>
                <span>Sobre Nosotros</span>
              </Link>
              <Link to="/contacto" className="quick-link">
                <i className="fas fa-envelope"></i>
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
