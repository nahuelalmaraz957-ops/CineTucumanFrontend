import { BUTACAS } from '../datos/butacas.js'
import { ESTADO_FUNCION_AGOTADA, ESTADO_FUNCION_DISPONIBLE, ESTADO_FUNCION_POCOS_LUGARES } from '../datos/estados.js'
import { funciones } from '../datos/funciones.js'

const OCUPADAS_POR_ESTADO = {
  [ESTADO_FUNCION_DISPONIBLE]: 8,
  [ESTADO_FUNCION_POCOS_LUGARES]: 42,
  [ESTADO_FUNCION_AGOTADA]: BUTACAS.length,
}
const SALTO_DE_REPARTO = 7

const calcularSemilla = (texto) => [...texto].reduce((suma, caracter) => suma + caracter.charCodeAt(0), 0)

const compararPorFechaYHorario = (primera, segunda) =>
  `${primera.fecha} ${primera.horario}`.localeCompare(`${segunda.fecha} ${segunda.horario}`)

export const obtenerFunciones = (idPelicula) =>
  funciones.filter((funcion) => funcion.peliculaId === idPelicula).sort(compararPorFechaYHorario)

export const obtenerFuncion = (idFuncion) => funciones.find((funcion) => funcion.id === idFuncion)

export const obtenerButacasOcupadas = (idFuncion) => {
  const funcion = obtenerFuncion(idFuncion)
  const cantidad = OCUPADAS_POR_ESTADO[funcion.estado]
  const semilla = calcularSemilla(idFuncion)

  return BUTACAS.filter((_, indice) => (indice * SALTO_DE_REPARTO + semilla) % BUTACAS.length < cantidad)
}
