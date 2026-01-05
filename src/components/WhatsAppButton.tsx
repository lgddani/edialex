import { WHATSAPP_CONFIG } from '../config/whatsapp';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_CONFIG.getUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
