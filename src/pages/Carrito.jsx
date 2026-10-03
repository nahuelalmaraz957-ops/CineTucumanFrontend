import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import ItemCarrito from '../components/carrito/ItemCarrito.jsx'
import Seo from '../components/seo/Seo.jsx'
import { RUTA_FUNCIONES } from '../datos/rutas.js'
import { calcularTotal } from '../utilidades/carrito.js'
import { formatearMoneda } from '../utilidades/formatos.js'

const Carrito = ({ items, alQuitar, alVaciar }) => {
  const estaVacio = items.length === 0

  return (
    <Container className="py-4">
      <Seo titulo="Carrito | Cine Tucumán" descripcion="Revisá las entradas que elegiste antes de comprar." />
      <h1 className="mb-4">Carrito</h1>
      {estaVacio ? (
        <div className="text-center py-5">
          <p className="lead">Tu carrito está vacío. ¿Vamos al cine?</p>
          <Button as={Link} to={RUTA_FUNCIONES} variant="marca" size="lg">
            Ver funciones
          </Button>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <ItemCarrito key={item.id} item={item} alQuitar={alQuitar} />
          ))}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mt-4">
            <Button variant="outline-light" onClick={alVaciar}>
              Vaciar carrito
            </Button>
            <p className="h4 mb-0">Total: {formatearMoneda(calcularTotal(items))}</p>
          </div>
        </>
      )}
    </Container>
  )
}

export default Carrito
