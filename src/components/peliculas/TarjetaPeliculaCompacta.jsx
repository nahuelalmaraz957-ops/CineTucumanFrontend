import { Link } from 'react-router-dom'
import { Card, Ratio } from 'react-bootstrap'
import { rutaDetalle } from '../../datos/rutas.js'
import '../../estilos/TarjetaEntrada.css'

const TarjetaPeliculaCompacta = ({ pelicula }) => {
  return (
    <Card className="tarjeta-interactiva tarjeta-entrada h-100">
      <Link to={rutaDetalle(pelicula.id)} tabIndex={-1} aria-hidden="true">
        <Ratio aspectRatio="2x3">
          <Card.Img variant="top" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
        </Ratio>
      </Link>
      <div className="tarjeta-entrada-perforacion" />
      <Card.Body className="p-2 p-md-3">
        <Card.Title as="h3" className="h6 mb-0">
          <Link to={rutaDetalle(pelicula.id)} className="text-reset text-decoration-none">
            {pelicula.titulo}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPeliculaCompacta
