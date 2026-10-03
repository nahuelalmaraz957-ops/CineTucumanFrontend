import { calcularEstado } from '../utilidades/peliculas.js'
import { obtenerFechaDeHoy } from '../utilidades/fechas.js'
import { peliculas } from './peliculas.js'

const HOY = obtenerFechaDeHoy()

export const cartelera = peliculas.map((pelicula) => ({ ...pelicula, estado: calcularEstado(pelicula, HOY) }))
