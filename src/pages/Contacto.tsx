import { useState, FormEvent } from 'react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contacto.css';

// Declarar iziToast para TypeScript
declare const iziToast: any;

const Contacto = () => {
  // Activar animaciones de scroll
  useScrollReveal();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validación en tiempo real para el nombre (solo letras y espacios)
    if (name === 'nombre') {
      const soloLetras = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData({
        ...formData,
        [name]: soloLetras
      });
      return;
    }

    // Validación en tiempo real para el teléfono (solo números, máximo 10 dígitos)
    if (name === 'telefono') {
      const soloNumeros = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [name]: soloNumeros
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarNombre = (nombre: string): boolean => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre) && nombre.trim().length >= 3;
  };

  const validarTelefono = (telefono: string): boolean => {
    const regex = /^[0-9]{10}$/;
    return regex.test(telefono);
  };

  const validarMensaje = (mensaje: string): boolean => {
    return mensaje.trim().length >= 10;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre.trim()) {
      iziToast.warning({
        title: 'Campo requerido',
        message: 'Por favor ingresa tu nombre',
        position: 'topRight'
      });
      return;
    }

    if (!validarNombre(formData.nombre)) {
      iziToast.error({
        title: 'Nombre inválido',
        message: 'El nombre solo puede contener letras y espacios (mínimo 3 caracteres)',
        position: 'topRight'
      });
      return;
    }

    if (!formData.email.trim()) {
      iziToast.warning({
        title: 'Campo requerido',
        message: 'Por favor ingresa tu email',
        position: 'topRight'
      });
      return;
    }

    if (!validarEmail(formData.email)) {
      iziToast.error({
        title: 'Email inválido',
        message: 'Por favor ingresa un email válido',
        position: 'topRight'
      });
      return;
    }

    if (!formData.telefono.trim()) {
      iziToast.warning({
        title: 'Campo requerido',
        message: 'Por favor ingresa tu teléfono',
        position: 'topRight'
      });
      return;
    }

    if (!validarTelefono(formData.telefono)) {
      iziToast.error({
        title: 'Teléfono inválido',
        message: 'El teléfono debe tener exactamente 10 dígitos numéricos',
        position: 'topRight'
      });
      return;
    }

    if (!formData.asunto) {
      iziToast.warning({
        title: 'Campo requerido',
        message: 'Por favor selecciona un asunto',
        position: 'topRight'
      });
      return;
    }

    if (!formData.mensaje.trim()) {
      iziToast.warning({
        title: 'Campo requerido',
        message: 'Por favor escribe tu mensaje',
        position: 'topRight'
      });
      return;
    }

    if (!validarMensaje(formData.mensaje)) {
      iziToast.error({
        title: 'Mensaje muy corto',
        message: 'El mensaje debe tener al menos 10 caracteres',
        position: 'topRight'
      });
      return;
    }

    // Simular envío
    setEnviando(true);

    setTimeout(() => {
      iziToast.success({
        title: '¡Mensaje enviado!',
        message: 'Nos pondremos en contacto contigo pronto',
        position: 'topRight'
      });

      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });

      setEnviando(false);
    }, 1500);
  };

  return (
    <div className="contacto-page">
      {/* Hero */}
      <section className="contacto-hero">
        <div className="contacto-hero-content slide-up">
          <h1>CONTÁCTANOS</h1>
          <p>Estamos aquí para ayudarte con tu proyecto</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="contacto-main">
        <div className="contacto-container">

          {/* Información de Contacto */}
          <div className="contacto-info slide-right">
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <p className="contacto-subtitle">Puedes contactarnos a través de los siguientes medios</p>

            <div className="info-cards">
              <div className="info-card slide-up delay-100">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Dirección</h3>
                  <p>Av. Principal #123<br />Quito, Ecuador</p>
                </div>
              </div>

              <div className="info-card slide-up delay-200">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>Teléfonos</h3>
                  <p>+593 99 999 9999<br />+593 2 234 5678</p>
                </div>
              </div>

              <div className="info-card slide-up delay-300">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@edialex.com<br />ventas@edialex.com</p>
                </div>
              </div>

              <div className="info-card slide-up delay-400">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Horario</h3>
                  <p>Lun - Vie: 8:00 AM - 6:00 PM<br />Sáb: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="redes-sociales fade-in delay-500">
              <h3>SÍGUENOS</h3>
              <div className="redes-buttons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="red-social facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="red-social instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={WHATSAPP_CONFIG.getUrl()} target="_blank" rel="noopener noreferrer" className="red-social whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="red-social tiktok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="contacto-form-container slide-left">
            <h2>ENVÍANOS UN MENSAJE</h2>
            <p className="form-subtitle">Completa el formulario y te responderemos a la brevedad</p>

            <form onSubmit={handleSubmit} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">
                  <i className="fas fa-user"></i> Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  disabled={enviando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: juan@ejemplo.com"
                  disabled={enviando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">
                  <i className="fas fa-phone"></i> Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 0999999999"
                  disabled={enviando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">
                  <i className="fas fa-tag"></i> Asunto *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  disabled={enviando}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="cotizacion">Solicitar Cotización</option>
                  <option value="informacion">Información de Productos</option>
                  <option value="reclamo">Reclamo o Queja</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="mensaje">
                  <i className="fas fa-comment"></i> Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  disabled={enviando}
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar" disabled={enviando}>
                {enviando ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Mapa */}
      <section className="contacto-mapa">
        <iframe
          src="https://maps.google.com/maps?q=El%20Coca,%20Orellana,%20Ecuador&output=embed"
          title="Ubicación Ferretería EDIALEX - El Coca, Orellana"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacto;
