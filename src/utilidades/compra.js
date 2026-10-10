import { matchPath } from 'react-router-dom'
import { RUTA_BUTACAS, RUTA_FUNCIONES, RUTA_PELICULAS } from '../datos/rutas.js'
import { obtenerFuncion } from '../servicios/funciones.js'
import { obtenerPelicula } from '../servicios/peliculas.js'
import { TIPO_ENTRADA } from './carrito.js'

const obtenerIdPeliculaDeLaPagina = (ubicacion) => {
  const detalle = matchPath(`${RUTA_PELICULAS}/:idPelicula`, ubicacion.pathname)

  if (detalle) return detalle.params.idPelicula

  const butacas = matchPath(`${RUTA_BUTACAS}/:idFuncion`, ubicacion.pathname)

  if (butacas) return obtenerFuncion(butacas.params.idFuncion)?.peliculaId

  if (ubicacion.pathname === RUTA_FUNCIONES) return new URLSearchParams(ubicacion.search).get('pelicula')

  return null
}

export const obtenerPeliculaDelCarrito = (items) => {
  const entrada = items.find((item) => item.tipo === TIPO_ENTRADA)

  return entrada ? obtenerFuncion(entrada.idFuncion)?.peliculaId : null
}

export const obtenerPeliculaEnJuego = (ubicacion, idPeliculaDelCarrito) => {
  const idDeLaPagina = obtenerIdPeliculaDeLaPagina(ubicacion)

  return (obtenerPelicula(idDeLaPagina) ? idDeLaPagina : idPeliculaDelCarrito) ?? null
}
