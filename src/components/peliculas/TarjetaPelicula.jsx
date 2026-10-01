import { Link } from 'react-router-dom'
import { Badge, Button, Card, Ratio } from 'react-bootstrap'
import { RUTA_PELICULAS } from '../../datos/rutas.js'
import { formatearDuracion, formatearEstado, formatearFechaLarga } from '../../utilidades/formatos.js'

const TarjetaPelicula = ({ pelicula }) => {
  const estaEnCartelera = pelicula.estado === 'en-cartelera'

  return (
    <Card className="tarjeta-interactiva h-100">
      <Ratio aspectRatio="2x3">
        <Card.Img variant="top" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
      </Ratio>
      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="align-self-start mb-2">
          {formatearEstado(pelicula.estado)}
        </Badge>
        <Card.Title as="h3" className="h5">
          {pelicula.titulo}
        </Card.Title>
        {estaEnCartelera ? (
          <>
            <Card.Text className="small text-body-secondary mb-1">{pelicula.generos.join(' · ')}</Card.Text>
            <Card.Text className="small text-body-secondary mb-1">{formatearDuracion(pelicula.duracionMinutos)}</Card.Text>
            <Card.Text className="small text-body-secondary mb-1">{pelicula.clasificacion}</Card.Text>
            <Card.Text className="small text-body-secondary mb-3">{pelicula.formato}</Card.Text>
            <Button as={Link} to={RUTA_PELICULAS} variant="marca" className="mt-auto">
              Ver funciones
            </Button>
          </>
        ) : (
          <Card.Text className="small text-body-secondary mb-3">
            Estreno: {formatearFechaLarga(pelicula.fechaEstreno)}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}

export default TarjetaPelicula
