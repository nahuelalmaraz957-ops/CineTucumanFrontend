import { Link } from 'react-router-dom'
import { Badge, Button, Card, Ratio } from 'react-bootstrap'
import Icono from '../comunes/Icono.jsx'
import { ESTADO_EN_CARTELERA } from '../../datos/estados.js'
import { RUTA_PELICULAS } from '../../datos/rutas.js'
import {
  TEXTO_POR_CONFIRMAR,
  formatearDuracion,
  formatearEstado,
  formatearFechaLarga,
  obtenerVarianteEstado,
} from '../../utilidades/formatos.js'
import { tieneFichaCompleta } from '../../utilidades/peliculas.js'
import '../../estilos/TarjetaEntrada.css'

const TarjetaPelicula = ({ pelicula, tieneBoton = true }) => {
  const estaEnCartelera = pelicula.estado === ESTADO_EN_CARTELERA
  const tieneFicha = tieneFichaCompleta(pelicula)

  return (
    <Card className="tarjeta-interactiva tarjeta-entrada h-100">
      <Ratio aspectRatio="2x3">
        <Card.Img variant="top" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
      </Ratio>
      <div className="tarjeta-entrada-perforacion" />
      <Card.Body className="d-flex flex-column">
        <Badge bg={obtenerVarianteEstado(pelicula.estado)} className="align-self-start mb-2">
          {formatearEstado(pelicula.estado)}
        </Badge>
        <Card.Title as="h3" className="h5">
          {pelicula.titulo}
        </Card.Title>
        {estaEnCartelera && tieneFicha && (
          <>
            <Card.Text className="small opacity-75 mb-1">{pelicula.generos.join(' · ')}</Card.Text>
            <Card.Text className="small opacity-75 mb-1">
              <Icono nombre="reloj" tamano={14} /> {formatearDuracion(pelicula.duracionMinutos)}
            </Card.Text>
            <Card.Text className="small opacity-75 mb-1">{pelicula.clasificacion}</Card.Text>
            <Card.Text className="small opacity-75 mb-3">{pelicula.formato}</Card.Text>
          </>
        )}
        {estaEnCartelera && !tieneFicha && (
          <Card.Text className="small opacity-75 mb-3">{TEXTO_POR_CONFIRMAR}</Card.Text>
        )}
        {!estaEnCartelera && (
          <Card.Text className="small opacity-75 mb-3">
            Estreno: {pelicula.fechaEstreno ? formatearFechaLarga(pelicula.fechaEstreno) : TEXTO_POR_CONFIRMAR}
          </Card.Text>
        )}
        {estaEnCartelera && tieneBoton && (
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" className="mt-auto">
            Ver funciones
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default TarjetaPelicula
