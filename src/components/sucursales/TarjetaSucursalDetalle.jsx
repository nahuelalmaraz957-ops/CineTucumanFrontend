import { Button, Card, Ratio } from 'react-bootstrap'
import { obtenerUrlMapa } from '../../utilidades/sucursales.js'

const TarjetaSucursalDetalle = ({ sucursal }) => {
  return (
    <Card className="h-100">
      <Ratio aspectRatio="16x9">
        <Card.Img variant="top" src={sucursal.imagen} alt={`${sucursal.nombre} en ${sucursal.ciudad}`} />
      </Ratio>
      <Card.Body className="d-flex flex-column gap-2">
        <Card.Title as="h2" className="h4">
          {sucursal.nombre}
        </Card.Title>
        <address className="mb-0">
          {sucursal.direccion}
          {sucursal.referencia && (
            <>
              <br />
              <span className="text-body-secondary">{sucursal.referencia}</span>
            </>
          )}
        </address>
        <Card.Text className="text-body-secondary">{sucursal.descripcion}</Card.Text>
        <div className="d-flex flex-wrap gap-2 mt-auto">
          <Button
            href={obtenerUrlMapa(sucursal.direccion)}
            target="_blank"
            rel="noopener noreferrer"
            variant="marca"
            size="sm"
            aria-label={`Cómo llegar a ${sucursal.nombre} (se abre en una pestaña nueva)`}
          >
            Cómo llegar
          </Button>
          {sucursal.enlaces.map((enlace) => (
            <Button
              key={enlace.url}
              href={enlace.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              size="sm"
              aria-label={`${enlace.etiqueta} de ${sucursal.nombre} (se abre en una pestaña nueva)`}
            >
              {enlace.etiqueta}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default TarjetaSucursalDetalle
