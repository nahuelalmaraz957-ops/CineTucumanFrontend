import { Button, Card } from 'react-bootstrap'
import { formatearMoneda } from '../../utilidades/formatos.js'

const ItemProducto = ({ item, alQuitar }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <Card.Title as="h3" className="h4">
            {item.nombre}
          </Card.Title>
          <Card.Text className="text-body-secondary mb-0">
            {item.cantidad} × {formatearMoneda(item.precioUnitario)}
          </Card.Text>
        </div>
        <div className="text-md-end">
          <p className="h5">{formatearMoneda(item.precioUnitario * item.cantidad)}</p>
          <Button
            variant="outline-light"
            size="sm"
            aria-label={`Quitar ${item.nombre} del carrito`}
            onClick={() => alQuitar(item.id)}
          >
            Quitar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemProducto
