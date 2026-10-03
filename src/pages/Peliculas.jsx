import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import FiltrosPeliculas from '../components/peliculas/FiltrosPeliculas.jsx'
import SeccionPeliculas from '../components/peliculas/SeccionPeliculas.jsx'
import Seo from '../components/seo/Seo.jsx'
import { peliculas } from '../datos/peliculas.js'
import { HASH_BUSCADOR } from '../datos/rutas.js'
import { normalizarTexto } from '../utilidades/busqueda.js'

const Peliculas = () => {
  const [termino, setTermino] = useState('')
  const [estado, setEstado] = useState('')
  const referenciaBuscador = useRef(null)
  const ubicacion = useLocation()

  useEffect(() => {
    if (ubicacion.hash === HASH_BUSCADOR) {
      referenciaBuscador.current.focus()
    }
  }, [ubicacion])

  const terminoNormalizado = normalizarTexto(termino)
  const resultados = peliculas.filter(
    (pelicula) =>
      (estado === '' || pelicula.estado === estado) && normalizarTexto(pelicula.titulo).includes(terminoNormalizado),
  )
  const enCartelera = resultados.filter((pelicula) => pelicula.estado === 'en-cartelera')
  const proximamente = resultados.filter((pelicula) => pelicula.estado === 'proximamente')

  return (
    <Container className="py-4">
      <Seo
        titulo="Cartelera de cine en Tucumán | Películas"
        descripcion="Consultá las películas en cartelera y los próximos estrenos en Tucumán, y buscalas por título o por estado."
      />
      <h1 className="mb-4">Cartelera</h1>
      <FiltrosPeliculas
        termino={termino}
        estado={estado}
        referenciaBuscador={referenciaBuscador}
        alCambiarTermino={setTermino}
        alCambiarEstado={setEstado}
      />
      <SeccionPeliculas idTitulo="titulo-en-cartelera" titulo="En cartelera" peliculas={enCartelera} />
      <SeccionPeliculas idTitulo="titulo-proximamente" titulo="Próximamente" peliculas={proximamente} />
      {resultados.length === 0 && (
        <p className="text-center text-body-secondary py-5" role="status">
          No se encontraron películas con esos filtros.
        </p>
      )}
    </Container>
  )
}

export default Peliculas
