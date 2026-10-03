export const CLAVE_CARRITO = 'cine-tucuman:carrito'
export const TIPO_ENTRADA = 'entrada'

const esItemValido = (item) =>
  item !== null &&
  typeof item === 'object' &&
  typeof item.id === 'string' &&
  item.id !== '' &&
  Number.isFinite(item.precioUnitario) &&
  Number.isInteger(item.cantidad) &&
  item.cantidad >= 1 &&
  (item.tipo !== TIPO_ENTRADA || (typeof item.idFuncion === 'string' && Array.isArray(item.butacas)))

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

export const contarEntradas = (items) =>
  items.filter((item) => item.tipo === TIPO_ENTRADA).reduce((suma, item) => suma + item.cantidad, 0)
