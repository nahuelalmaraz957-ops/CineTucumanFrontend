import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CANTIDAD_MAXIMA, CANTIDAD_MINIMA, DURACION_AVISO_AGREGADO } from '../../datos/candybar.js'
import { TIPO_CANDYBAR, crearIdProducto } from '../../utilidades/carrito.js'
import { formatearMoneda } from '../../utilidades/formatos.js'

const TarjetaProducto = ({ producto, cantidadEnCarrito, alAgregar }) => {
  const [cantidad, setCantidad] = useState(CANTIDAD_MINIMA)
  const [agregado, setAgregado] = useState(false)
  const disponibles = CANTIDAD_MAXIMA - cantidadEnCarrito

  useEffect(() => {
    if (agregado) {
      const temporizador = setTimeout(() => setAgregado(false), DURACION_AVISO_AGREGADO)

      return () => clearTimeout(temporizador)
    }
  }, [agregado])

  const agregar = () => {
    alAgregar({
      id: crearIdProducto(producto.id),
      tipo: TIPO_CANDYBAR,
      idProducto: producto.id,
      nombre: producto.nombre,
      precioUnitario: producto.precio,
      cantidad,
    })
    setCantidad(CANTIDAD_MINIMA)
    setAgregado(true)
  }

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column gap-3">
        <div>
          <Card.Title as="h2" className="h4">
            {producto.nombre}
          </Card.Title>
          <Card.Text className="text-body-secondary mb-1">{producto.descripcion}</Card.Text>
          <Card.Text className="h5 mb-0">{formatearMoneda(producto.precio)}</Card.Text>
        </div>
        {disponibles > 0 ? (
          <>
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-light"
                size="lg"
                aria-label={`Restar una unidad de ${producto.nombre}`}
                disabled={cantidad <= CANTIDAD_MINIMA}
                onClick={() => setCantidad(cantidad - 1)}
              >
                −
              </Button>
              <span className="fs-4" aria-live="polite">
                {cantidad}
              </span>
              <Button
                variant="outline-light"
                size="lg"
                aria-label={`Sumar una unidad de ${producto.nombre}`}
                disabled={cantidad >= disponibles}
                onClick={() => setCantidad(cantidad + 1)}
              >
                +
              </Button>
            </div>
            <p className="mb-0" role="status">
              Subtotal: {formatearMoneda(cantidad * producto.precio)}
            </p>
            <Button variant="marca" className="mt-auto" onClick={agregar}>
              Agregar al carrito
            </Button>
          </>
        ) : (
          <p className="mb-0 text-body-secondary" role="status">
            Ya tenés el máximo ({CANTIDAD_MAXIMA}) en el carrito.
          </p>
        )}
        <p className="small text-body-secondary mb-0" role="status">
          {agregado ? 'Agregado ✓' : ''}
        </p>
      </Card.Body>
    </Card>
  )
}

export default TarjetaProducto
