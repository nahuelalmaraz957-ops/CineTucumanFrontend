import axios from 'axios'

const MENSAJE_INESPERADO = 'Ocurrió un error inesperado al consultar la API.'

const MENSAJE_SIN_SERVIDOR =
  'No pudimos conectarnos con el servidor de Cine Tucumán. Revisá que esté encendido y que VITE_BACKEND_URL apunte a su dirección.'

export const describirErrorDelBackend = (fallo) => {
  if (!axios.isAxiosError(fallo)) return MENSAJE_INESPERADO

  if (fallo.code === 'ECONNABORTED' || fallo.code === 'ETIMEDOUT') {
    return 'El servidor tardó demasiado en responder. Probá de nuevo en unos segundos.'
  }

  if (!fallo.response) return MENSAJE_SIN_SERVIDOR

  const mensaje = fallo.response.data?.message

  if (typeof mensaje === 'string' && fallo.response.status < 500) return mensaje

  if (Array.isArray(mensaje) && fallo.response.status < 500) return mensaje.join(' ')

  if (fallo.response.status >= 500) return 'El servidor tiene problemas en este momento. Probá más tarde.'

  return MENSAJE_INESPERADO
}

export const describirErrorDeApi = (fallo) => {
  if (!axios.isAxiosError(fallo)) return MENSAJE_INESPERADO

  if (fallo.code === 'ECONNABORTED' || fallo.code === 'ETIMEDOUT') {
    return 'La API tardó demasiado en responder. Probá de nuevo en unos segundos.'
  }

  if (!fallo.response) return 'No pudimos conectarnos con la API. Revisá tu conexión a internet.'

  const { status } = fallo.response

  if (status === 401) return 'La clave de la API no es válida. Revisá el archivo .env.'

  if (status === 404) return 'La API no encontró lo que pedimos.'

  if (status === 429) return 'Hicimos demasiadas consultas seguidas. Esperá un momento y probá de nuevo.'

  if (status >= 500) return 'La API tiene problemas en este momento. Probá más tarde.'

  return MENSAJE_INESPERADO
}
