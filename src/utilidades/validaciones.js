import { LARGO_MINIMO_CONTRASENA, MENSAJES_FORMULARIO } from '../datos/formularios.js'

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

export const validarCampos = (reglas, valores) =>
  Object.fromEntries(Object.entries(reglas).map(([campo, validar]) => [campo, validar(valores)]))

export const hayErrores = (errores) => Object.values(errores).some((mensaje) => mensaje !== '')

export const revalidarCamposConError = (reglas, errores, valores) =>
  Object.fromEntries(
    Object.entries(errores).map(([campo, mensaje]) => [campo, mensaje === '' ? '' : reglas[campo](valores)]),
  )
