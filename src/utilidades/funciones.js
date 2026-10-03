export const yaEmpezo = (funcion, hoy, hora) =>
  funcion.fecha < hoy || (funcion.fecha === hoy && funcion.horario <= hora)
