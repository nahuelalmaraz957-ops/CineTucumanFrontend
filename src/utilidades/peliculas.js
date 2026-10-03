export const tieneFichaCompleta = (pelicula) =>
  pelicula.generos !== undefined &&
  pelicula.duracionMinutos !== undefined &&
  pelicula.clasificacion !== undefined &&
  pelicula.formato !== undefined
