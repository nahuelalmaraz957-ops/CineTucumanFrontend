import { useCallback, useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import TarjetaPeliculaExterna from '../components/descubrir/TarjetaPeliculaExterna.jsx'
import Seo from '../components/seo/Seo.jsx'
import { apiConfigurada } from '../servicios/api.js'
import { buscarPeliculas } from '../servicios/peliculasApi.js'
import { avisarErrorDeApi, avisarFaltaConfiguracion } from '../utilidades/alertas.js'
import { describirErrorDeApi } from '../utilidades/errores.js'

const BUSQUEDA_INICIAL = { termino: '', pagina: 1 }

const Descubrir = () => {
  const [termino, setTermino] = useState('')
  const [busqueda, setBusqueda] = useState(BUSQUEDA_INICIAL)
  const [resultado, setResultado] = useState({ peliculas: [], totalPaginas: 0 })
  const [cargando, setCargando] = useState(apiConfigurada)
  const [error, setError] = useState('')

  const reintentar = useCallback(() => {
    setCargando(true)
    setError('')
    setBusqueda((actual) => ({ ...actual }))
  }, [])

  useEffect(() => {
    if (!apiConfigurada) avisarFaltaConfiguracion()
  }, [])

  useEffect(() => {
    if (!apiConfigurada) return undefined

    const controlador = new AbortController()

    const cargar = async () => {
      try {
        const datos = await buscarPeliculas({ ...busqueda, signal: controlador.signal })

        setResultado(datos)
      } catch (fallo) {
        if (!controlador.signal.aborted) setError(describirErrorDeApi(fallo))
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }

    cargar()

    return () => controlador.abort()
  }, [busqueda])

  useEffect(() => {
    if (!error) return

    avisarErrorDeApi(error).then((quiereReintentar) => {
      if (quiereReintentar) reintentar()
    })
  }, [error, reintentar])

  const buscar = (evento) => {
    evento.preventDefault()
    setCargando(true)
    setError('')
    setBusqueda({ termino: termino.trim(), pagina: 1 })
  }

  const irAPagina = (pagina) => {
    setCargando(true)
    setError('')
    setBusqueda({ ...busqueda, pagina })
  }

  const hayResultados = resultado.peliculas.length > 0

  return (
    <Container className="py-4">
      <Seo
        titulo="Más películas del mundo | Cine Tucumán"
        descripcion="Explorá las películas en cartelera en Argentina y buscá cualquier título con datos de TMDB."
      />
      <h1 className="mb-3">Más películas del mundo</h1>
      <p className="lead mb-4">
        {busqueda.termino ? `Resultados para «${busqueda.termino}»` : 'En cartelera en Argentina, con datos de TMDB.'}
      </p>
      <Form role="search" onSubmit={buscar} className="d-flex gap-2 mb-4">
        <Form.Control
          type="search"
          aria-label="Buscar una película por título"
          placeholder="Buscar por título"
          value={termino}
          onChange={(evento) => setTermino(evento.target.value)}
          disabled={!apiConfigurada}
        />
        <Button type="submit" variant="marca" disabled={!apiConfigurada || cargando}>
          Buscar
        </Button>
      </Form>
      {!apiConfigurada && (
        <Alert variant="warning">
          Falta configurar la API. Creá un archivo <code>.env</code> a partir de <code>.env.example</code> y completá{' '}
          <code>VITE_API_KEY</code>.
        </Alert>
      )}
      {cargando && (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando películas…</span>
          </Spinner>
        </div>
      )}
      {!cargando && error && (
        <Alert variant="danger" className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
          <span className="flex-grow-1">{error}</span>
          <Button variant="outline-light" size="sm" onClick={reintentar}>
            Reintentar
          </Button>
        </Alert>
      )}
      {!cargando && !error && apiConfigurada && !hayResultados && (
        <p>No encontramos películas para «{busqueda.termino}».</p>
      )}
      {!cargando && !error && hayResultados && (
        <>
          <Row xs={2} md={3} lg={4} className="g-3 g-md-4">
            {resultado.peliculas.map((pelicula) => (
              <Col key={pelicula.id}>
                <TarjetaPeliculaExterna pelicula={pelicula} />
              </Col>
            ))}
          </Row>
          <nav
            aria-label="Paginación de resultados"
            className="d-flex justify-content-center align-items-center gap-3 mt-4"
          >
            <Button
              variant="outline-light"
              size="sm"
              disabled={busqueda.pagina <= 1}
              onClick={() => irAPagina(busqueda.pagina - 1)}
            >
              Anterior
            </Button>
            <span>
              Página {busqueda.pagina} de {resultado.totalPaginas}
            </span>
            <Button
              variant="outline-light"
              size="sm"
              disabled={busqueda.pagina >= resultado.totalPaginas}
              onClick={() => irAPagina(busqueda.pagina + 1)}
            >
              Siguiente
            </Button>
          </nav>
        </>
      )}
      <p className="small text-body-secondary mt-5 mb-0">
        Datos e imágenes provistos por TMDB. Este producto usa la API de TMDB, pero no está avalado ni certificado por
        TMDB.
      </p>
    </Container>
  )
}

export default Descubrir
