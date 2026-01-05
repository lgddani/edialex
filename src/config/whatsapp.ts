export const WHATSAPP_CONFIG = {
  phoneNumber: '593999999999', // Cambia este número por el número de WhatsApp de la ferretería
  defaultMessage: '¡Hola! Me gustaría obtener más información sobre los productos de Ferretería EDIALEX',

  getUrl: (customMessage?: string) => {
    const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
  }
};
