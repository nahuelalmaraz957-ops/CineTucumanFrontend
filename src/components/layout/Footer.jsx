import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { columnasFooter } from '../../datos/navegacion.js'
import { sucursales } from '../../datos/sucursales.js'
import '../../estilos/Footer.css'

const Footer = () => {
  return (
    <footer className="pie-sitio border-top border-3 border-secondary" data-bs-theme="dark">
      <Container className="py-5">
        <Row className="gy-4 gy-lg-0">
          <Col xs={12} lg={4}>
            <h2 className="h4 mb-0">Cine Tucumán</h2>
          </Col>
          {columnasFooter.map((columna) => (
            <Col key={columna.titulo} xs={6} md={3} lg={2}>
              <h3 className="h6 text-uppercase text-body-secondary mb-3">{columna.titulo}</h3>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.etiqueta}>
                    <Link className="text-decoration-none" to={enlace.ruta}>
                      {enlace.etiqueta}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col xs={6} md={3} lg={2}>
            <h3 className="h6 text-uppercase text-body-secondary mb-3">Nuestras sucursales</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {sucursales.map((sucursal) => (
                <li key={sucursal.id}>{sucursal.nombre}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr className="my-4 border-secondary-subtle" />
        <p className="text-center text-body-secondary small mb-0">© 2026 Cine Tucumán</p>
      </Container>
    </footer>
  )
}

export default Footer
