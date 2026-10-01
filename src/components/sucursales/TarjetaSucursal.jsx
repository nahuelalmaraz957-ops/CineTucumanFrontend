import { Card, Ratio } from 'react-bootstrap'

const TarjetaSucursal = ({ sucursal }) => {
  return (
    <Card className="tarjeta-interactiva h-100">
      <Card.Body className="pb-0">
        <Card.Title as="h3" className="h5">
          {sucursal.nombre}
        </Card.Title>
      </Card.Body>
      <div className="mx-3">
        <Ratio aspectRatio="16x9">
          <img src={sucursal.imagen} alt={`${sucursal.nombre} en ${sucursal.ciudad}`} className="rounded" />
        </Ratio>
      </div>
      <Card.Body>
        <address className="card-text small text-body-secondary mb-0">{sucursal.direccion}</address>
      </Card.Body>
    </Card>
  )
}

export default TarjetaSucursal
