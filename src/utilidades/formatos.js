const FORMATO_FECHA_LARGA = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const ETIQUETAS_ESTADO = {
  'en-cartelera': 'En cartelera',
  proximamente: 'Próximamente',
}

const VARIANTES_ESTADO = {
  'en-cartelera': 'primary',
  proximamente: 'secondary',
}

export const TEXTO_POR_CONFIRMAR = 'Por confirmar'

export const formatearDuracion = (minutos) => `${Math.floor(minutos / 60)} h ${minutos % 60} min`

export const formatearFechaLarga = (fechaIso) => FORMATO_FECHA_LARGA.format(new Date(`${fechaIso}T00:00:00Z`))

export const formatearEstado = (estado) => ETIQUETAS_ESTADO[estado]

export const obtenerVarianteEstado = (estado) => VARIANTES_ESTADO[estado]
