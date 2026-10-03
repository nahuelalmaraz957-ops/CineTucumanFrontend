import { Badge, Button, Card } from 'react-bootstrap'
import { cartelera } from '../../datos/cartelera.js'
import { obtenerFuncion } from '../../servicios/funciones.js'
import { formatearFechaConDia, formatearMoneda } from '../../utilidades/formatos.js'

const ItemCarrito = ({ item, alQuitar }) => {
  const funcion = obtenerFuncion(item.idFuncion)
  const pelicula = cartelera.find((elemento) => elemento.id === funcion.peliculaId)

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <Card.Title as="h2" className="h4">
            {pelicula.titulo}
          </Card.Title>
          <Card.Text className="text-body-secondary mb-2">
            {formatearFechaConDia(funcion.fecha)} · {funcion.horario} · {funcion.sala} · {funcion.formato} ·{' '}
            {funcion.idioma}
          </Card.Text>
          <div className="d-flex flex-wrap gap-2">
            {item.butacas.map((butaca) => (
              <Badge key={butaca} bg="secondary" pill>
                {butaca}
              </Badge>
            ))}
          </div>
        </div>
        <div className="text-md-end">
          <p className="mb-1">
            {item.cantidad} × {formatearMoneda(item.precioUnitario)}
          </p>
          <p className="h5">{formatearMoneda(item.precioUnitario * item.cantidad)}</p>
          <Button
            variant="outline-light"
            size="sm"
            aria-label={`Quitar las entradas de ${pelicula.titulo}`}
            onClick={() => alQuitar(item.id)}
          >
            Quitar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemCarrito
