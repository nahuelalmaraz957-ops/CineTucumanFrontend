export const obtenerFechaDeHoy = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Argentina/Tucuman' })

export const sumarDias = (fechaIso, dias) => {
  const fecha = new Date(`${fechaIso}T00:00:00Z`)
  fecha.setUTCDate(fecha.getUTCDate() + dias)

  return fecha.toISOString().slice(0, 10)
}
