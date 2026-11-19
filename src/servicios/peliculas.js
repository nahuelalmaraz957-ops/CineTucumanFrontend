import { obtenerFechaDeHoy } from '../utilidades/fechas.js'
import { calcularEstado } from '../utilidades/peliculas.js'
import clienteBackend from './backend.js'
import { cartelera } from '../datos/cartelera.js'
import { detallesPeliculas } from '../datos/detallesPeliculas.js'

export const obtenerPelicula = (idPelicula) => cartelera.find((pelicula) => pelicula.id === idPelicula)

export const obtenerDetalle = (idPelicula) => detallesPeliculas[idPelicula]

const LARGO_SINOPSIS_CORTA = 160

const resumirSinopsis = (sinopsis) => {
  if (!sinopsis) return undefined

  if (sinopsis.length <= LARGO_SINOPSIS_CORTA) return sinopsis

  const corte = sinopsis.lastIndexOf(' ', LARGO_SINOPSIS_CORTA - 1)

  return `${sinopsis.slice(0, corte > 0 ? corte : LARGO_SINOPSIS_CORTA - 1)}…`
}

const adaptarPelicula = (pelicula, hoy) => ({
  id: pelicula.slug,
  peliculaId: pelicula.id,
  titulo: pelicula.titulo,
  tituloOriginal: pelicula.tituloOriginal ?? undefined,
  sinopsis: pelicula.sinopsis ?? undefined,
  sinopsisCorta: resumirSinopsis(pelicula.sinopsis),
  poster: pelicula.posterUrl,
  estado: calcularEstado({ estado: pelicula.estado, fechaEstreno: pelicula.fechaEstreno ?? undefined }, hoy),
  destacada: pelicula.destacada,
  generos: pelicula.generos,
  duracionMinutos: pelicula.duracionMinutos ?? undefined,
  clasificacion: pelicula.clasificacion ?? undefined,
  fechaEstreno: pelicula.fechaEstreno ?? undefined,
  anio: pelicula.fechaEstreno ? Number(pelicula.fechaEstreno.slice(0, 4)) : undefined,
  director: pelicula.director ?? undefined,
  paisOrigen: pelicula.paisOrigen ?? undefined,
  idTrailerYoutube: pelicula.trailerYoutube ?? undefined,
})

export const pedirPeliculas = async (signal) => {
  const { data } = await clienteBackend.get('/peliculas', { signal })
  const hoy = obtenerFechaDeHoy()

  return data.map((pelicula) => adaptarPelicula(pelicula, hoy))
}
