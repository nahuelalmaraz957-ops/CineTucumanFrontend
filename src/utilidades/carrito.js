import { CANTIDAD_MAXIMA } from '../datos/candybar.js'

export const CLAVE_CARRITO = 'cine-tucuman:carrito'
export const TIPO_ENTRADA = 'entrada'
export const TIPO_CANDYBAR = 'candybar'

const esItemValido = (item) =>
  item !== null &&
  typeof item === 'object' &&
  typeof item.id === 'string' &&
  item.id !== '' &&
  Number.isFinite(item.precioUnitario) &&
  Number.isInteger(item.cantidad) &&
  item.cantidad >= 1 &&
  (item.tipo !== TIPO_ENTRADA || (typeof item.idFuncion === 'string' && Array.isArray(item.butacas))) &&
  (item.tipo !== TIPO_CANDYBAR || (typeof item.idProducto === 'string' && typeof item.nombre === 'string'))

export const leerCarrito = () => {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_CARRITO))

    return Array.isArray(guardado) ? guardado.filter(esItemValido) : []
  } catch {
    return []
  }
}

export const guardarCarrito = (items) => {
  try {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items))
  } catch {
    return
  }
}

export const reemplazarEntrada = (items, entrada) => [...items.filter((item) => item.tipo !== TIPO_ENTRADA), entrada]

export const quitarItem = (items, id) => items.filter((item) => item.id !== id)

export const calcularTotal = (items) => items.reduce((total, item) => total + item.precioUnitario * item.cantidad, 0)

export const contarArticulos = (items) => items.reduce((suma, item) => suma + item.cantidad, 0)

export const crearIdProducto = (idProducto) => `${TIPO_CANDYBAR}:${idProducto}`

export const obtenerCantidad = (items, id) => items.find((item) => item.id === id)?.cantidad ?? 0

export const agregarProducto = (items, producto) => {
  const existente = items.find((item) => item.id === producto.id)

  if (!existente) return [...items, producto]

  return items.map((item) =>
    item.id === producto.id
      ? { ...item, cantidad: Math.min(CANTIDAD_MAXIMA, item.cantidad + producto.cantidad) }
      : item,
  )
}
