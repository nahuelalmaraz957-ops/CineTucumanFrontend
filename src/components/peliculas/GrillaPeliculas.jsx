import { Col, Row } from 'react-bootstrap'
import TarjetaPelicula from './TarjetaPelicula.jsx'
import TarjetaPeliculaCompacta from './TarjetaPeliculaCompacta.jsx'

const GrillaPeliculas = ({ peliculas, estaCompacta = false }) => {
  const Tarjeta = estaCompacta ? TarjetaPeliculaCompacta : TarjetaPelicula

  return (
    <Row
      xs={estaCompacta ? 2 : 1}
      md={estaCompacta ? 3 : 2}
      lg={estaCompacta ? 6 : 3}
      className={estaCompacta ? 'g-3 g-lg-4' : 'g-4'}
    >
      {peliculas.map((pelicula) => (
        <Col key={pelicula.id}>
          <Tarjeta pelicula={pelicula} />
        </Col>
      ))}
    </Row>
  )
}

export default GrillaPeliculas
