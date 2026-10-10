import { Link, useOutletContext } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import GrillaPeliculas from '../components/peliculas/GrillaPeliculas.jsx'
import Portada from '../components/peliculas/Portada.jsx'
import Seo from '../components/seo/Seo.jsx'
import TarjetaSucursal from '../components/sucursales/TarjetaSucursal.jsx'
import { AVISO_ELEGIR_PELICULA } from '../datos/avisos.js'
import { cartelera } from '../datos/cartelera.js'
import { ESTADO_EN_CARTELERA, ESTADO_PROXIMAMENTE } from '../datos/estados.js'
import { rutaFunciones } from '../datos/rutas.js'
import { obtenerSucursalesDestacadas } from '../servicios/sucursales.js'

const destacadas = cartelera.filter((pelicula) => pelicula.destacada && pelicula.estado === ESTADO_EN_CARTELERA)
const proximamente = cartelera.filter((pelicula) => pelicula.estado === ESTADO_PROXIMAMENTE && pelicula.fechaEstreno)
const proximosEstrenos = cartelera.filter(
  (pelicula) => pelicula.estado === ESTADO_PROXIMAMENTE && !pelicula.fechaEstreno,
)
const sucursalesDestacadas = obtenerSucursalesDestacadas()

const Inicio = () => {
  const { abrirAviso, idPeliculaEnJuego } = useOutletContext()
  return (
    <>
      <Seo
        titulo="Cine Tucumán | Cartelera y próximos estrenos"
        descripcion="Descubrí las películas en cartelera, los próximos estrenos y los cines de Tucumán."
      />
      <Portada />
      <section className="py-5" aria-labelledby="titulo-destacadas">
        <Container>
          <h2 id="titulo-destacadas" className="mb-4">
            Películas destacadas
          </h2>
          <section className="mb-5" aria-labelledby="titulo-en-cartelera">
            <h3 id="titulo-en-cartelera" className="mb-3">
              En cartelera
            </h3>
            <GrillaPeliculas peliculas={destacadas} />
          </section>
          {proximamente.length > 0 && (
            <section aria-labelledby="titulo-proximamente">
              <h3 id="titulo-proximamente" className="mb-3">
                Próximamente
              </h3>
              <GrillaPeliculas peliculas={proximamente} />
            </section>
          )}
        </Container>
      </section>
      {proximosEstrenos.length > 0 && (
        <section className="py-5" aria-labelledby="titulo-proximos-estrenos">
          <Container>
            <h2 id="titulo-proximos-estrenos" className="mb-4">
              Próximos estrenos
            </h2>
            <GrillaPeliculas peliculas={proximosEstrenos} estaCompacta />
          </Container>
        </section>
      )}
      <section className="py-5" aria-labelledby="titulo-cines">
        <Container>
          <h2 id="titulo-cines" className="mb-4">
            Cines en Tucumán
          </h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {sucursalesDestacadas.map((sucursal) => (
              <Col key={sucursal.id}>
                <TarjetaSucursal sucursal={sucursal} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="py-5 text-center" aria-labelledby="titulo-llamado-final">
        <Container>
          <h2 id="titulo-llamado-final">¿Listo para ir al cine?</h2>
          <p className="lead mb-4">Descubrí las películas disponibles y elegí tu próxima función.</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            {idPeliculaEnJuego ? (
              <Button as={Link} to={rutaFunciones(idPeliculaEnJuego)} variant="marca" size="lg">
                Comprar entradas
              </Button>
            ) : (
              <Button variant="marca" size="lg" onClick={() => abrirAviso(AVISO_ELEGIR_PELICULA)}>
                Comprar entradas
              </Button>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Inicio
