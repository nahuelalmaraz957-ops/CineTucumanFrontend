import { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { CatalogoContexto } from '../../contextos/CatalogoContexto.js'
import { pedirProductos } from '../../servicios/candybar.js'
import { pedirPeliculas } from '../../servicios/peliculas.js'
import { pedirSucursales } from '../../servicios/sucursales.js'
import { describirErrorDelBackend } from '../../utilidades/errores.js'
import CargandoPagina from '../comunes/CargandoPagina.jsx'

const CatalogoProvider = ({ children }) => {
  const [catalogo, setCatalogo] = useState(null)
  const [error, setError] = useState('')
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const controlador = new AbortController()

    const cargar = async () => {
      try {
        const [peliculas, sucursales, productos] = await Promise.all([
          pedirPeliculas(controlador.signal),
          pedirSucursales(controlador.signal),
          pedirProductos(controlador.signal),
        ])

        setCatalogo({ peliculas, sucursales, productos })
      } catch (fallo) {
        if (!controlador.signal.aborted) setError(describirErrorDelBackend(fallo))
      }
    }

    cargar()

    return () => controlador.abort()
  }, [intento])

  const reintentar = useCallback(() => {
    setError('')
    setIntento((actual) => actual + 1)
  }, [])

  const valor = useMemo(() => {
    if (catalogo === null) return null

    return {
      ...catalogo,
      obtenerPelicula: (id) => catalogo.peliculas.find((pelicula) => pelicula.id === id),
      recargar: reintentar,
    }
  }, [catalogo, reintentar])

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger" role="alert">
          <Alert.Heading as="h1" className="h4">
            No pudimos cargar Cine Tucumán
          </Alert.Heading>
          <p>{error}</p>
          <Button variant="marca" onClick={reintentar}>
            Reintentar
          </Button>
        </Alert>
      </Container>
    )
  }

  if (valor === null) return <CargandoPagina />

  return <CatalogoContexto.Provider value={valor}>{children}</CatalogoContexto.Provider>
}

export default CatalogoProvider
