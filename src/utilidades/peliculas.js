import { ESTADO_EN_CARTELERA, ESTADO_PROXIMAMENTE } from '../datos/estados.js'

export const tieneFichaCompleta = (pelicula) =>
  pelicula.generos.length > 0 && pelicula.duracionMinutos !== undefined && pelicula.clasificacion !== undefined

export const calcularEstado = (pelicula, hoy) => {
  if (!pelicula.fechaEstreno) return pelicula.estado

  return pelicula.fechaEstreno <= hoy ? ESTADO_EN_CARTELERA : ESTADO_PROXIMAMENTE
}
