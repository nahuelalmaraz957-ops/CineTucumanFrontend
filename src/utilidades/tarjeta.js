export const filtrarNumeroTarjeta = (valor) => valor.replace(/[^\d\s]/g, '')

export const filtrarCvv = (valor) => valor.replace(/\D/g, '')

export const filtrarVencimiento = (valor, evento) => {
  const limpio = valor.replace(/[^\d/]/g, '').replace(/\/+/g, '/')
  const estaBorrando = evento.nativeEvent.inputType?.startsWith('delete')

  return /^\d{2}$/.test(limpio) && !estaBorrando ? `${limpio}/` : limpio
}
