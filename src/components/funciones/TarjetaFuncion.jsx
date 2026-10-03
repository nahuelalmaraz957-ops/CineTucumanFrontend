import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import { ESTADO_FUNCION_AGOTADA, ESTADO_FUNCION_DISPONIBLE } from '../../datos/estados.js'
import { rutaButacas } from '../../datos/rutas.js'
import { formatearEstadoFuncion, formatearMoneda } from '../../utilidades/formatos.js'

const TarjetaFuncion = ({ funcion }) => {
  const estaAgotada = funcion.estado === ESTADO_FUNCION_AGOTADA

  return (
    <Card className="tarjeta-interactiva h-100">
      <Card.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title as="h3" className="mb-0">
            {funcion.horario}
          </Card.Title>
          {funcion.estado !== ESTADO_FUNCION_DISPONIBLE && (
            <Badge bg={estaAgotada ? 'primary' : 'secondary'}>{formatearEstadoFuncion(funcion.estado)}</Badge>
          )}
        </div>
        <Card.Text className="text-body-secondary mb-1">
          {funcion.formato} · {funcion.idioma} · {funcion.sala}
        </Card.Text>
        <Card.Text className="h5 mb-3">{formatearMoneda(funcion.precio)}</Card.Text>
        {estaAgotada ? (
          <Button variant="outline-secondary" className="mt-auto" disabled>
            Agotada
          </Button>
        ) : (
          <Button as={Link} to={rutaButacas(funcion.id)} variant="marca" className="mt-auto">
            Elegir butacas
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default TarjetaFuncion
