import { Link } from 'react-router-dom'
import { Badge, Button, Col, Container, Ratio, Row } from 'react-bootstrap'
import { detallesPeliculas } from '../../datos/detallesPeliculas.js'
import { ID_PELICULA_PORTADA, peliculas } from '../../datos/peliculas.js'
import { RUTA_PELICULAS } from '../../datos/rutas.js'
import { formatearDuracion, formatearEstado } from '../../utilidades/formatos.js'

const Portada = () => {
  const pelicula = peliculas.find((item) => item.id === ID_PELICULA_PORTADA)
  const detalle = detallesPeliculas[ID_PELICULA_PORTADA]

  return (
    <section className="py-5" aria-labelledby="titulo-portada">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col xs={12} md={5} lg={4}>
            <Ratio aspectRatio="2x3">
              <img src={pelicula.poster} alt={pelicula.titulo} className="rounded" />
            </Ratio>
          </Col>
          <Col xs={12} md={7} lg={8}>
            <article>
              <header>
                <Badge bg="secondary" className="mb-2">
                  {formatearEstado(pelicula.estado)}
                </Badge>
                <h1 id="titulo-portada">{pelicula.titulo}</h1>
              </header>
              <p className="text-body-secondary">{pelicula.generos.join(' · ')}</p>
              <p className="text-body-secondary">
                {formatearDuracion(pelicula.duracionMinutos)} · {pelicula.clasificacion}
              </p>
              <p>{detalle.sinopsisCorta}</p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
                  Ver funciones
                </Button>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Portada
