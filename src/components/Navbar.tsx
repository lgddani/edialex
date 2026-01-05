import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={cerrarMenu}>
          <img src="/images/logo.jpeg" alt="Ferretería EDIALEX" className="navbar-logo-img" />
        </Link>

        {/* Botón Hamburguesa */}
        <button
          className={`hamburguesa ${menuAbierto ? 'abierto' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuAbierto ? 'menu-abierto' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={cerrarMenu}>Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/productos" className="navbar-link" onClick={cerrarMenu}>Productos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/sobre-nosotros" className="navbar-link" onClick={cerrarMenu}>Sobre Nosotros</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link" onClick={cerrarMenu}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
