import { cartelera } from '../datos/cartelera.js'
import { detallesPeliculas } from '../datos/detallesPeliculas.js'

export const obtenerPelicula = (idPelicula) => cartelera.find((pelicula) => pelicula.id === idPelicula)

export const obtenerDetalle = (idPelicula) => detallesPeliculas[idPelicula]
