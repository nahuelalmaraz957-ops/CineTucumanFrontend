import { Col, Row } from 'react-bootstrap'
import TarjetaPelicula from './TarjetaPelicula.jsx'
import TarjetaPeliculaCompacta from './TarjetaPeliculaCompacta.jsx'

const COLUMNAS_NORMALES = { xs: 1, md: 2, lg: 3 }
const COLUMNAS_COMPACTAS = { xs: 2, md: 3, lg: 6 }

const GrillaPeliculas = ({ peliculas, estaCompacta = false, columnas, tieneBoton = true }) => {
  const Tarjeta = estaCompacta ? TarjetaPeliculaCompacta : TarjetaPelicula
  const columnasDeLaGrilla = columnas ?? (estaCompacta ? COLUMNAS_COMPACTAS : COLUMNAS_NORMALES)

  return (
    <Row {...columnasDeLaGrilla} className={estaCompacta ? 'g-3 g-lg-4' : 'g-4'}>
      {peliculas.map((pelicula) => (
        <Col key={pelicula.id}>
          <Tarjeta pelicula={pelicula} tieneBoton={tieneBoton} />
        </Col>
      ))}
    </Row>
  )
}

export default GrillaPeliculas
