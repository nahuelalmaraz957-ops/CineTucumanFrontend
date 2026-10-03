import { ESTADO_EN_CARTELERA, ESTADO_PROXIMAMENTE } from '../datos/estados.js'

export const tieneFichaCompleta = (pelicula) =>
  pelicula.generos !== undefined &&
  pelicula.duracionMinutos !== undefined &&
  pelicula.clasificacion !== undefined &&
  pelicula.formato !== undefined

export const calcularEstado = (pelicula, hoy) => {
  if (!pelicula.fechaEstreno) return pelicula.estado

  return pelicula.fechaEstreno <= hoy ? ESTADO_EN_CARTELERA : ESTADO_PROXIMAMENTE
}
