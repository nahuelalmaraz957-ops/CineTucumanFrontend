import { Col, Container, Row } from 'react-bootstrap'
import Seo from '../components/seo/Seo.jsx'
import TarjetaSucursalDetalle from '../components/sucursales/TarjetaSucursalDetalle.jsx'
import { obtenerSucursales } from '../servicios/sucursales.js'

const Sucursales = () => {
  return (
    <Container className="py-4">
      <Seo
        titulo="Sucursales | Cine Tucumán"
        descripcion="Conocé las sucursales de cine de San Miguel de Tucumán: direcciones, cómo llegar y sitios oficiales."
      />
      <h1 className="mb-3">Sucursales</h1>
      <p className="lead mb-4">
        Elegí dónde ir al cine. Los enlaces abren el sitio de cada cine y el mapa en otra pestaña.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {obtenerSucursales().map((sucursal) => (
          <Col key={sucursal.id}>
            <TarjetaSucursalDetalle sucursal={sucursal} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Sucursales
