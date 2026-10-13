import { Card, Ratio } from 'react-bootstrap'
import { URL_PELICULA_TMDB } from '../../datos/tmdb.js'
import { TEXTO_POR_CONFIRMAR, formatearFechaLarga } from '../../utilidades/formatos.js'
import '../../estilos/TarjetaEntrada.css'

const TarjetaPeliculaExterna = ({ pelicula }) => {
  return (
    <Card className="tarjeta-entrada h-100">
      <Ratio aspectRatio="2x3">
        {pelicula.poster ? (
          <Card.Img
            variant="top"
            src={pelicula.poster}
            alt={`Póster de ${pelicula.titulo}`}
            width={342}
            height={513}
            loading="lazy"
          />
        ) : (
          <div className="d-flex align-items-center justify-content-center bg-body-secondary text-body-secondary p-3 text-center">
            Sin póster disponible
          </div>
        )}
      </Ratio>
      <div className="tarjeta-entrada-perforacion" />
      <Card.Body className="p-2 p-md-3 d-flex flex-column gap-1">
        <Card.Title as="h2" className="h6 mb-0">
          {pelicula.titulo}
        </Card.Title>
        <Card.Text className="small opacity-75 mb-0">
          Estreno: {pelicula.fecha ? formatearFechaLarga(pelicula.fecha) : TEXTO_POR_CONFIRMAR}
        </Card.Text>
        <Card.Text className="small mb-0">
          {pelicula.puntaje > 0 ? `★ ${pelicula.puntaje.toFixed(1)} / 10` : 'Sin puntaje'}
        </Card.Text>
        <a
          className="small mt-auto pt-2 text-reset"
          href={`${URL_PELICULA_TMDB}/${pelicula.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver en TMDB: ${pelicula.titulo} (se abre en una pestaña nueva)`}
        >
          Ver en TMDB
        </a>
      </Card.Body>
    </Card>
  )
}

export default TarjetaPeliculaExterna
