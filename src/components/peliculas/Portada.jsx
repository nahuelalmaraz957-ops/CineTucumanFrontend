import { Link } from 'react-router-dom'
import { Badge, Button, Col, Container, Ratio, Row } from 'react-bootstrap'
import Icono from '../comunes/Icono.jsx'
import pochoclin from '../../assets/imagenes/marca/pochoclin.png'
import { detallesPeliculas } from '../../datos/detallesPeliculas.js'
import { cartelera } from '../../datos/cartelera.js'
import { ID_PELICULA_PORTADA } from '../../datos/peliculas.js'
import { rutaFunciones } from '../../datos/rutas.js'
import { formatearDuracion, formatearEstado, obtenerVarianteEstado } from '../../utilidades/formatos.js'
import '../../estilos/Marquesina.css'
import '../../estilos/Portada.css'

const Portada = () => {
  const pelicula = cartelera.find((item) => item.id === ID_PELICULA_PORTADA)
  const detalle = detallesPeliculas[ID_PELICULA_PORTADA]

  return (
    <section className="py-5" aria-labelledby="titulo-portada">
      <Container>
        <div className="marco-marquesina p-4 p-lg-5">
          <Row className="align-items-center g-4 g-lg-5">
            <Col xs={12} md={5} lg={4}>
              <Ratio aspectRatio="2x3">
                <img src={pelicula.poster} alt={pelicula.titulo} className="rounded" />
              </Ratio>
            </Col>
            <Col xs={12} md={7} lg={5}>
              <article>
                <header>
                  <Badge bg={obtenerVarianteEstado(pelicula.estado)} className="mb-2">
                    {formatearEstado(pelicula.estado)}
                  </Badge>
                  <h1 id="titulo-portada">{pelicula.titulo}</h1>
                </header>
                <p className="text-body-secondary">{pelicula.generos.join(' · ')}</p>
                <p className="text-body-secondary">
                  <Icono nombre="reloj" tamano={16} /> {formatearDuracion(pelicula.duracionMinutos)} ·{' '}
                  {pelicula.clasificacion}
                </p>
                <p>{detalle.sinopsisCorta}</p>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  <Button as={Link} to={rutaFunciones(pelicula.id)} variant="marca" size="lg">
                    Ver funciones
                  </Button>
                </div>
              </article>
            </Col>
            <Col lg={3} className="d-none d-lg-block align-self-end">
              <div className="portada-mascota">
                <span className="portada-burbuja">¡Hoy hay función!</span>
                <img src={pochoclin} alt="Pochoclín, la mascota de Cine Tucumán, con el pulgar arriba" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Portada
