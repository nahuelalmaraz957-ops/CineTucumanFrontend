import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge, Button, Col, Container, Ratio, Row } from 'react-bootstrap'
import TrailerYoutube from '../components/peliculas/TrailerYoutube.jsx'
import Seo from '../components/seo/Seo.jsx'
import { ESTADO_EN_CARTELERA } from '../datos/estados.js'
import { repartoPorPelicula } from '../datos/reparto.js'
import { rutaFunciones } from '../datos/rutas.js'
import { obtenerFunciones } from '../servicios/funciones.js'
import { useCatalogo } from '../hooks/useCatalogo.js'
import {
  TEXTO_POR_CONFIRMAR,
  formatearDuracion,
  formatearEstado,
  formatearFechaLarga,
  obtenerVarianteEstado,
} from '../utilidades/formatos.js'
import { tieneFichaCompleta } from '../utilidades/peliculas.js'
import NoEncontrada from './NoEncontrada.jsx'

const obtenerLineaResumen = (pelicula) => {
  if (pelicula.estado !== ESTADO_EN_CARTELERA) {
    return `Estreno: ${pelicula.fechaEstreno ? formatearFechaLarga(pelicula.fechaEstreno) : TEXTO_POR_CONFIRMAR}`
  }

  if (!tieneFichaCompleta(pelicula)) return TEXTO_POR_CONFIRMAR

  return [pelicula.generos.join(' · '), formatearDuracion(pelicula.duracionMinutos), pelicula.clasificacion].join(' · ')
}

const DetallePelicula = () => {
  const { idPelicula } = useParams()
  const { obtenerPelicula } = useCatalogo()
  const pelicula = obtenerPelicula(idPelicula)

  if (pelicula === undefined) return <NoEncontrada />

  const reparto = repartoPorPelicula[idPelicula]
  const estaEnCartelera = pelicula.estado === ESTADO_EN_CARTELERA
  const tieneFunciones = obtenerFunciones(idPelicula).length > 0
  const fichaTecnica = [
    { etiqueta: 'Director', valor: pelicula.director ?? TEXTO_POR_CONFIRMAR },
    { etiqueta: 'Año', valor: pelicula.anio ?? TEXTO_POR_CONFIRMAR },
    {
      etiqueta: 'Estreno en Argentina',
      valor: pelicula.fechaEstreno ? formatearFechaLarga(pelicula.fechaEstreno) : TEXTO_POR_CONFIRMAR,
    },
    { etiqueta: 'Origen', valor: pelicula.paisOrigen ?? TEXTO_POR_CONFIRMAR },
  ]

  return (
    <Container className="py-4">
      <Seo
        titulo={`${pelicula.titulo} | Cine Tucumán`}
        descripcion={pelicula.sinopsisCorta ?? `Conocé la ficha de ${pelicula.titulo} en Cine Tucumán.`}
      />
      <Row className="g-4 mb-5">
        <Col xs={8} sm={6} lg={4} className="mx-auto mx-lg-0">
          <Ratio aspectRatio="2x3">
            <img className="rounded object-fit-cover" src={pelicula.poster} alt={`Póster de ${pelicula.titulo}`} />
          </Ratio>
        </Col>
        <Col xs={12} lg={8}>
          <Badge bg={obtenerVarianteEstado(pelicula.estado)} className="mb-2">
            {formatearEstado(pelicula.estado)}
          </Badge>
          <h1>{pelicula.titulo}</h1>
          {pelicula.tituloOriginal && <p className="text-body-secondary">{pelicula.tituloOriginal}</p>}
          <p className="lead">{obtenerLineaResumen(pelicula)}</p>
          {estaEnCartelera && tieneFunciones && (
            <Button as={Link} to={rutaFunciones(pelicula.id)} variant="marca" size="lg">
              Ver funciones
            </Button>
          )}
          {estaEnCartelera && !tieneFunciones && (
            <p className="text-body-secondary" role="status">
              Todavía no hay funciones para esta película.
            </p>
          )}
        </Col>
      </Row>
      <section className="mb-5" aria-labelledby="titulo-sinopsis">
        <h2 id="titulo-sinopsis" className="mb-3">
          Sinopsis
        </h2>
        <p>{pelicula.sinopsis ?? TEXTO_POR_CONFIRMAR}</p>
      </section>
      <section className="mb-5" aria-labelledby="titulo-ficha-tecnica">
        <h2 id="titulo-ficha-tecnica" className="mb-3">
          Ficha técnica
        </h2>
        <dl className="row mb-0">
          {fichaTecnica.map((dato) => (
            <Fragment key={dato.etiqueta}>
              <dt className="col-sm-3">{dato.etiqueta}</dt>
              <dd className="col-sm-9">{dato.valor}</dd>
            </Fragment>
          ))}
        </dl>
      </section>
      {reparto && (
        <section className="mb-5" aria-labelledby="titulo-reparto">
          <h2 id="titulo-reparto" className="mb-3">
            Reparto principal
          </h2>
          <Row xs={2} sm={3} lg={6} className="g-3">
            {reparto.map((actor) => (
              <Col key={actor.nombre} className="text-center">
                <Ratio aspectRatio="1x1">
                  <img className="rounded-circle object-fit-cover" src={actor.foto} alt="" />
                </Ratio>
                <p className="mt-2 mb-0 small">{actor.nombre}</p>
              </Col>
            ))}
          </Row>
        </section>
      )}
      {pelicula.idTrailerYoutube && (
        <section aria-labelledby="titulo-trailer">
          <h2 id="titulo-trailer" className="mb-3">
            Tráiler oficial
          </h2>
          <TrailerYoutube idVideo={pelicula.idTrailerYoutube} titulo={pelicula.titulo} />
        </section>
      )}
    </Container>
  )
}

export default DetallePelicula
