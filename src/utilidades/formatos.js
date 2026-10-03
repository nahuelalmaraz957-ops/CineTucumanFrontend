import {
  ESTADO_EN_CARTELERA,
  ESTADO_FUNCION_AGOTADA,
  ESTADO_FUNCION_POCOS_LUGARES,
  ESTADO_PROXIMAMENTE,
} from '../datos/estados.js'

const FORMATO_FECHA_LARGA = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const ETIQUETAS_ESTADO = {
  [ESTADO_EN_CARTELERA]: 'En cartelera',
  [ESTADO_PROXIMAMENTE]: 'Próximamente',
}

const VARIANTES_ESTADO = {
  [ESTADO_EN_CARTELERA]: 'primary',
  [ESTADO_PROXIMAMENTE]: 'secondary',
}

const FORMATO_FECHA_CON_DIA = new Intl.DateTimeFormat('es-AR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
})

const FORMATO_FECHA_CORTA = new Intl.DateTimeFormat('es-AR', {
  weekday: 'short',
  day: 'numeric',
  month: 'numeric',
  timeZone: 'UTC',
})

const ETIQUETAS_ESTADO_FUNCION = {
  [ESTADO_FUNCION_POCOS_LUGARES]: 'Pocos lugares',
  [ESTADO_FUNCION_AGOTADA]: 'Agotada',
}

const FORMATO_MONEDA = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export const TEXTO_POR_CONFIRMAR = 'Por confirmar'

export const formatearDuracion = (minutos) => `${Math.floor(minutos / 60)} h ${minutos % 60} min`

export const formatearFechaLarga = (fechaIso) => FORMATO_FECHA_LARGA.format(new Date(`${fechaIso}T00:00:00Z`))

export const formatearEstado = (estado) => ETIQUETAS_ESTADO[estado]

export const obtenerVarianteEstado = (estado) => VARIANTES_ESTADO[estado]

export const formatearFechaConDia = (fechaIso) => FORMATO_FECHA_CON_DIA.format(new Date(`${fechaIso}T00:00:00Z`))

export const formatearMoneda = (monto) => FORMATO_MONEDA.format(monto)

export const formatearFechaCorta = (fechaIso) => FORMATO_FECHA_CORTA.format(new Date(`${fechaIso}T00:00:00Z`))

export const formatearEstadoFuncion = (estado) => ETIQUETAS_ESTADO_FUNCION[estado]
