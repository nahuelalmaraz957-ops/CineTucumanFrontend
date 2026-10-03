import { Card, Ratio } from 'react-bootstrap'
import '../../estilos/TarjetaEntrada.css'

const TarjetaPeliculaCompacta = ({ pelicula }) => {
  return (
    <Card className="tarjeta-interactiva tarjeta-entrada h-100">
      <Ratio aspectRatio="2x3">
        <Card.Img variant="top" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
      </Ratio>
      <div className="tarjeta-entrada-perforacion" />
      <Card.Body className="p-2 p-md-3">
        <Card.Title as="h3" className="h6 mb-0">
          {pelicula.titulo}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPeliculaCompacta
