import { useContext } from 'react'
import { CatalogoContexto } from '../contextos/CatalogoContexto.js'

export const useCatalogo = () => {
  const catalogo = useContext(CatalogoContexto)

  if (catalogo === null) {
    throw new Error('useCatalogo se usa dentro de CatalogoProvider')
  }

  return catalogo
}
