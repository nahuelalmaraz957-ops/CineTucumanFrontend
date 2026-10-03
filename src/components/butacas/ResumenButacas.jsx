import { Badge, Button, Card } from 'react-bootstrap'
import { MAXIMO_BUTACAS } from '../../datos/butacas.js'
import { formatearFechaConDia, formatearMoneda } from '../../utilidades/formatos.js'

const ResumenButacas = ({ funcion, pelicula, seleccionadas, alcanzoMaximo, alAgregar }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="h4">
          {pelicula.titulo}
        </Card.Title>
        <Card.Text className="text-body-secondary">
          {formatearFechaConDia(funcion.fecha)} · {funcion.horario} · {funcion.sala} · {funcion.formato} ·{' '}
          {funcion.idioma}
        </Card.Text>
        <h3 className="h6 text-uppercase">Butacas elegidas</h3>
        {seleccionadas.length === 0 ? (
          <p className="text-body-secondary">Todavía no elegiste ninguna.</p>
        ) : (
          <div className="d-flex flex-wrap gap-2 mb-3">
            {[...seleccionadas].sort().map((codigo) => (
              <Badge key={codigo} bg="secondary" pill>
                {codigo}
              </Badge>
            ))}
          </div>
        )}
        {alcanzoMaximo && (
          <p className="small" role="status">
            Llegaste al máximo de {MAXIMO_BUTACAS} butacas.
          </p>
        )}
        <p className="d-flex justify-content-between h5">
          Total <span>{formatearMoneda(seleccionadas.length * funcion.precio)}</span>
        </p>
        <Button variant="marca" size="lg" className="w-100" disabled={seleccionadas.length === 0} onClick={alAgregar}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ResumenButacas
