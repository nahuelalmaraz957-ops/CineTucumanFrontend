export const LARGO_MINIMO_CONTRASENA = 8

export const MENSAJE_SIN_SESION =
  'Validación correcta. Todavía no existe una sesión real: va a funcionar cuando el sitio tenga servidor.'

export const MENSAJES_FORMULARIO = {
  nombreVacio: 'Ingresá tu nombre.',
  apellidoVacio: 'Ingresá tu apellido.',
  correoVacio: 'Ingresá tu correo electrónico.',
  correoInvalido: 'Ingresá un correo electrónico válido.',
  contrasenaVacia: 'Ingresá tu contraseña.',
  contrasenaNuevaVacia: 'Ingresá una contraseña.',
  contrasenaCorta: `La contraseña debe tener al menos ${LARGO_MINIMO_CONTRASENA} caracteres.`,
  confirmacionVacia: 'Confirmá tu contraseña.',
  confirmacionDistinta: 'Las contraseñas no coinciden.',
  terminosNoAceptados: 'Tenés que aceptar los términos y condiciones.',
}
