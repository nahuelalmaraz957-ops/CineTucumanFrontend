import { useState } from 'react'
import { Container } from 'react-bootstrap'
import FiltrosPeliculas from '../components/peliculas/FiltrosPeliculas.jsx'
import SeccionPeliculas from '../components/peliculas/SeccionPeliculas.jsx'
import { peliculas } from '../datos/peliculas.js'
import { normalizarTexto } from '../utilidades/busqueda.js'

const Peliculas = () => {
  const [termino, setTermino] = useState('')
  const [estado, setEstado] = useState('')

  const terminoNormalizado = normalizarTexto(termino)
  const resultados = peliculas.filter(
    (pelicula) =>
      (estado === '' || pelicula.estado === estado) && normalizarTexto(pelicula.titulo).includes(terminoNormalizado),
  )
  const enCartelera = resultados.filter((pelicula) => pelicula.estado === 'en-cartelera')
  const proximamente = resultados.filter((pelicula) => pelicula.estado === 'proximamente')

  return (
    <Container className="py-4">
      <h1 className="mb-4">Cartelera</h1>
      <FiltrosPeliculas termino={termino} estado={estado} alCambiarTermino={setTermino} alCambiarEstado={setEstado} />
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
