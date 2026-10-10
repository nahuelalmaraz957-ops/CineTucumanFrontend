import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TarjetaProducto from '../components/candybar/TarjetaProducto.jsx'
import Seo from '../components/seo/Seo.jsx'
import { RUTA_CARRITO } from '../datos/rutas.js'
import { obtenerProductos } from '../servicios/candybar.js'
import { TIPO_CANDYBAR, crearIdProducto, obtenerCantidad } from '../utilidades/carrito.js'

const CandyBar = ({ items, alAgregarProducto }) => {
  const hayProductos = items.some((item) => item.tipo === TIPO_CANDYBAR)

  return (
    <Container className="py-4">
      <Seo
        titulo="Candy Bar | Cine Tucumán"
        descripcion="Sumá pochoclos y bebidas para acompañar tu función en Cine Tucumán."
      />
      <h1 className="mb-3">Candy Bar</h1>
      <p className="lead mb-4">Sumá productos para acompañar tu función.</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {obtenerProductos().map((producto) => (
          <Col key={producto.id}>
            <TarjetaProducto
              producto={producto}
              cantidadEnCarrito={obtenerCantidad(items, crearIdProducto(producto.id))}
              alAgregar={alAgregarProducto}
            />
          </Col>
        ))}
      </Row>
      <div className="mt-5">
        <Button as={Link} to={RUTA_CARRITO} variant={hayProductos ? 'marca' : 'outline-light'} size="lg">
          {hayProductos ? 'Continuar al carrito' : 'Seguir sin Candy Bar'}
        </Button>
      </div>
    </Container>
  )
}

export default CandyBar
