export const obtenerUrlMapa = (direccion) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`
