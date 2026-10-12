import { useState } from 'react'
import { hayErrores, revalidarCamposConError, validarCampos } from '../utilidades/validaciones.js'

const useFormulario = (valoresIniciales, reglas) => {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  const cambiarValor = (evento) => {
    const { name, type, value, checked } = evento.target
    const nuevosValores = { ...valores, [name]: type === 'checkbox' ? checked : value }

    setValores(nuevosValores)
    setErrores(revalidarCamposConError(reglas, errores, nuevosValores))
    setExito(false)
  }

  const enviar = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validarCampos(reglas, valores)

    setErrores(nuevosErrores)
    setExito(false)

    if (hayErrores(nuevosErrores)) {
      const primerCampo = Object.keys(nuevosErrores).find((campo) => nuevosErrores[campo] !== '')

      evento.currentTarget.elements[primerCampo].focus()
      return
    }

    setValores(valoresIniciales)
    setErrores({})
    setExito(true)
  }

  return { valores, errores, exito, cambiarValor, enviar }
}

export default useFormulario
