/**
 * Helper para construir rutas de imágenes que funcionen tanto en desarrollo como en producción (GitHub Pages)
 * Usa import.meta.env.BASE_URL que Vite configura automáticamente según vite.config.ts
 */
export const getImagePath = (path: string): string => {
  // Remover el slash inicial si existe
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Agregar la base URL de Vite
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
