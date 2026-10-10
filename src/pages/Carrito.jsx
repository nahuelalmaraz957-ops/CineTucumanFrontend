import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import ItemCarrito from '../components/carrito/ItemCarrito.jsx'
import ItemProducto from '../components/carrito/ItemProducto.jsx'
import Seo from '../components/seo/Seo.jsx'
import { RUTA_PELICULAS } from '../datos/rutas.js'
import { TIPO_CANDYBAR, TIPO_ENTRADA, calcularTotal } from '../utilidades/carrito.js'
import { formatearMoneda } from '../utilidades/formatos.js'

const Carrito = ({ items, alQuitar, alVaciar }) => {
  const estaVacio = items.length === 0
  const entradas = items.filter((item) => item.tipo === TIPO_ENTRADA)
  const productos = items.filter((item) => item.tipo === TIPO_CANDYBAR)

  return (
    <Container className="py-4">
      <Seo titulo="Carrito | Cine Tucumán" descripcion="Revisá lo que elegiste antes de comprar." />
      <h1 className="mb-4">Carrito</h1>
      {estaVacio ? (
        <div className="text-center py-5">
          <p className="lead">Tu carrito está vacío. ¿Vamos al cine?</p>
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
            Ver cartelera
          </Button>
        </div>
      ) : (
        <>
          {entradas.length > 0 && (
            <section aria-labelledby="titulo-entradas">
              <h2 id="titulo-entradas" className="h4 mb-3">
                Entradas
              </h2>
              {entradas.map((item) => (
                <ItemCarrito key={item.id} item={item} alQuitar={alQuitar} />
              ))}
            </section>
          )}
          {productos.length > 0 && (
            <section aria-labelledby="titulo-productos">
              <h2 id="titulo-productos" className="h4 mb-3">
                Candy Bar
              </h2>
              {productos.map((item) => (
                <ItemProducto key={item.id} item={item} alQuitar={alQuitar} />
              ))}
            </section>
          )}
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
