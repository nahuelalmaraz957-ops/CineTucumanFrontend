import { Link } from 'react-router-dom'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import Seo from '../components/seo/Seo.jsx'
import pochoclin404 from '../assets/imagenes/marca/pochoclin-404.png'
import { RUTA_INICIO, RUTA_PELICULAS } from '../datos/rutas.js'
import '../estilos/Marquesina.css'

const NoEncontrada = () => {
  return (
    <section className="py-5" aria-labelledby="titulo-no-encontrada">
      <Seo
        titulo="Página no encontrada | Cine Tucumán"
        descripcion="La página que buscás no existe. Volvé al inicio o mirá la cartelera de Cine Tucumán."
      />
      <meta name="robots" content="noindex" />
      <Container>
        <div className="marco-marquesina p-4 p-lg-5">
          <Row className="align-items-center g-4 g-lg-5">
            <Col xs={12} lg={7}>
              <Badge bg="primary" className="mb-2">
                Error 404
              </Badge>
              <h1 id="titulo-no-encontrada">¡Ups! Esta función no existe</h1>
              <p className="lead">No encontramos la página que buscás. Pochoclín ya la está buscando.</p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <Button as={Link} to={RUTA_INICIO} variant="marca" size="lg">
                  Volver al inicio
                </Button>
                <Button as={Link} to={RUTA_PELICULAS} variant="outline-light" size="lg">
                  Ver cartelera
                </Button>
              </div>
            </Col>
            <Col xs={12} lg={5} className="text-center">
              <img
                className="img-fluid"
                src={pochoclin404}
                alt="Pochoclín con una lupa sigue un rastro de pochoclos para encontrar la página"
                width="330"
                height="382"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default NoEncontrada
