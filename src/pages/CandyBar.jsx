import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TarjetaProducto from '../components/candybar/TarjetaProducto.jsx'
import Seo from '../components/seo/Seo.jsx'
import { RUTA_CARRITO } from '../datos/rutas.js'
import { obtenerProductos } from '../servicios/candybar.js'
import { obtenerPelicula } from '../servicios/peliculas.js'
import { TIPO_CANDYBAR, TIPO_ENTRADA, crearIdProducto, obtenerCantidad } from '../utilidades/carrito.js'
import { obtenerPeliculaDelCarrito } from '../utilidades/compra.js'

const CandyBar = ({ items, alAgregarProducto }) => {
  const hayProductos = items.some((item) => item.tipo === TIPO_CANDYBAR)
  const entrada = items.find((item) => item.tipo === TIPO_ENTRADA)
  const pelicula = obtenerPelicula(obtenerPeliculaDelCarrito(items))
  const mensaje =
    entrada && pelicula
      ? `Ya agregamos ${entrada.cantidad} ${entrada.cantidad === 1 ? 'entrada' : 'entradas'} para ${pelicula.titulo}. ¿Querés sumar algo para acompañar la función?`
      : 'Sumá productos para acompañar tu función.'

  return (
    <Container className="py-4">
      <Seo
        titulo="Candy Bar | Cine Tucumán"
        descripcion="Sumá pochoclos y bebidas para acompañar tu función en Cine Tucumán."
      />
      <h1 className="mb-3">Candy Bar</h1>
      <p className="lead mb-4">{mensaje}</p>
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
