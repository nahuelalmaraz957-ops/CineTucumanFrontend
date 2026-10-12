import { PREFIJO_NUMERO_DE_ORDEN } from '../datos/pago.js'
import { obtenerFuncion } from '../servicios/funciones.js'
import { obtenerPelicula } from '../servicios/peliculas.js'
import { TIPO_CANDYBAR, TIPO_ENTRADA, calcularTotal } from './carrito.js'
import { obtenerFechaDeHoy, obtenerHoraActual } from './fechas.js'
import { yaEmpezo } from './funciones.js'

const CLAVE_ULTIMA_ORDEN = 'cine-tucuman:ultima-orden'

const armarEntrada = (item) => {
  const funcion = obtenerFuncion(item.idFuncion)
  const pelicula = obtenerPelicula(funcion.peliculaId)

  return {
    pelicula: pelicula.titulo,
    fecha: funcion.fecha,
    horario: funcion.horario,
    sala: funcion.sala,
    formato: funcion.formato,
    idioma: funcion.idioma,
    butacas: item.butacas,
    cantidad: item.cantidad,
    precioUnitario: item.precioUnitario,
  }
}

const esOrdenValida = (orden) =>
  typeof orden?.numero === 'string' &&
  typeof orden.creadaEn === 'string' &&
  typeof orden.total === 'number' &&
  Array.isArray(orden.entradas) &&
  Array.isArray(orden.productos)

export const armarResumen = (items) => ({
  entradas: items.filter((item) => item.tipo === TIPO_ENTRADA).map(armarEntrada),
  productos: items
    .filter((item) => item.tipo === TIPO_CANDYBAR)
    .map(({ nombre, cantidad, precioUnitario }) => ({ nombre, cantidad, precioUnitario })),
  total: calcularTotal(items),
})

export const crearOrden = (resumen) => ({
  numero: `${PREFIJO_NUMERO_DE_ORDEN}-${Date.now().toString(36).toUpperCase()}`,
  creadaEn: new Date().toISOString(),
  ...resumen,
})

export const obtenerEntradasQueYaEmpezaron = (items) => {
  const hoy = obtenerFechaDeHoy()
  const hora = obtenerHoraActual()

  return items
    .filter((item) => item.tipo === TIPO_ENTRADA && yaEmpezo(obtenerFuncion(item.idFuncion), hoy, hora))
    .map(armarEntrada)
}

export const guardarOrden = (orden) => {
  try {
    localStorage.setItem(CLAVE_ULTIMA_ORDEN, JSON.stringify(orden))
  } catch {
    return
  }
}

export const leerUltimaOrden = () => {
  try {
    const orden = JSON.parse(localStorage.getItem(CLAVE_ULTIMA_ORDEN))

    return esOrdenValida(orden) ? orden : null
  } catch {
    return null
  }
}
