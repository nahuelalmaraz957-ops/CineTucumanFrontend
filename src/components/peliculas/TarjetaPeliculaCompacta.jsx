import { Card, Ratio } from 'react-bootstrap'

const TarjetaPeliculaCompacta = ({ pelicula }) => {
  return (
    <Card className="tarjeta-interactiva h-100">
      <Ratio aspectRatio="2x3">
        <Card.Img variant="top" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
      </Ratio>
      <Card.Body className="p-2 p-md-3">
        <Card.Title as="h3" className="h6 mb-0">
          {pelicula.titulo}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPeliculaCompacta
