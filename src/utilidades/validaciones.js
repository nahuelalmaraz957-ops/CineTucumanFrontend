import { LARGO_MINIMO_CONTRASENA, MENSAJES_FORMULARIO } from '../datos/formularios.js'

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EXPRESION_TARJETA = /^\d{16}$/
const EXPRESION_VENCIMIENTO = /^(\d{2})\/(\d{2})$/
const EXPRESION_CVV = /^\d{3}$/

export const validarNombre = (valor) => (valor.trim() === '' ? MENSAJES_FORMULARIO.nombreVacio : '')

export const validarApellido = (valor) => (valor.trim() === '' ? MENSAJES_FORMULARIO.apellidoVacio : '')

export const validarCorreo = (valor) => {
  const texto = valor.trim()

  if (texto === '') return MENSAJES_FORMULARIO.correoVacio

  return EXPRESION_CORREO.test(texto) ? '' : MENSAJES_FORMULARIO.correoInvalido
}

export const validarContrasenaDeIngreso = (valor) => (valor === '' ? MENSAJES_FORMULARIO.contrasenaVacia : '')

export const validarContrasenaNueva = (valor) => {
  if (valor === '') return MENSAJES_FORMULARIO.contrasenaNuevaVacia

  return valor.length >= LARGO_MINIMO_CONTRASENA ? '' : MENSAJES_FORMULARIO.contrasenaCorta
}

export const validarConfirmacion = (valor, contrasena) => {
  if (valor === '') return MENSAJES_FORMULARIO.confirmacionVacia

  return valor === contrasena ? '' : MENSAJES_FORMULARIO.confirmacionDistinta
}

export const validarTerminos = (aceptados) => (aceptados ? '' : MENSAJES_FORMULARIO.terminosNoAceptados)

export const validarTitular = (valor) => (valor.trim() === '' ? MENSAJES_FORMULARIO.titularVacio : '')

export const validarNumeroTarjeta = (valor) => {
  const digitos = valor.replace(/\s/g, '')

  if (digitos === '') return MENSAJES_FORMULARIO.tarjetaVacia

  return EXPRESION_TARJETA.test(digitos) ? '' : MENSAJES_FORMULARIO.tarjetaInvalida
}

export const validarVencimiento = (valor, hoy = new Date()) => {
  const texto = valor.trim()

  if (texto === '') return MENSAJES_FORMULARIO.vencimientoVacio

  const partes = EXPRESION_VENCIMIENTO.exec(texto)

  if (!partes) return MENSAJES_FORMULARIO.vencimientoFormato

  const mes = Number(partes[1])
  const anio = 2000 + Number(partes[2])

  if (mes < 1 || mes > 12) return MENSAJES_FORMULARIO.vencimientoMes

  const estaVencida = anio < hoy.getFullYear() || (anio === hoy.getFullYear() && mes < hoy.getMonth() + 1)

  return estaVencida ? MENSAJES_FORMULARIO.tarjetaVencida : ''
}

export const validarCvv = (valor) => {
  const texto = valor.trim()

  if (texto === '') return MENSAJES_FORMULARIO.cvvVacio

  return EXPRESION_CVV.test(texto) ? '' : MENSAJES_FORMULARIO.cvvInvalido
}

export const validarCampos = (reglas, valores) =>
  Object.fromEntries(Object.entries(reglas).map(([campo, validar]) => [campo, validar(valores)]))

export const hayErrores = (errores) => Object.values(errores).some((mensaje) => mensaje !== '')

export const revalidarCamposConError = (reglas, errores, valores) =>
  Object.fromEntries(
    Object.entries(errores).map(([campo, mensaje]) => [campo, mensaje === '' ? '' : reglas[campo](valores)]),
  )
