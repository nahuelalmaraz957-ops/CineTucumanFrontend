import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Card, Container } from 'react-bootstrap'
import ResumenCompra from '../components/compra/ResumenCompra.jsx'
import Seo from '../components/seo/Seo.jsx'
import { AVISO_SIN_COBRO } from '../datos/pago.js'
import { RUTA_INICIO, RUTA_PELICULAS } from '../datos/rutas.js'
import { formatearFechaHora } from '../utilidades/formatos.js'
import { leerUltimaOrden } from '../utilidades/ordenes.js'

const Confirmacion = () => {
  const [orden] = useState(leerUltimaOrden)

  return (
    <Container className="py-4">
      <Seo titulo="Compra confirmada | Cine Tucumán" descripcion="Resumen de tu compra en Cine Tucumán." />
      <meta name="robots" content="noindex" />
      {orden ? (
        <>
          <h1 className="mb-2">¡Compra confirmada!</h1>
          <p className="lead mb-1">
            Número de orden: <strong>{orden.numero}</strong>
          </p>
          <p className="text-body-secondary mb-4">{formatearFechaHora(orden.creadaEn)}</p>
          <h2 className="h4 mb-3">Resumen de la compra</h2>
          <Card className="mb-4">
            <Card.Body>
              <ResumenCompra resumen={orden} />
            </Card.Body>
          </Card>
          <Alert variant="secondary" role="status">
            {AVISO_SIN_COBRO}
          </Alert>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
              Volver a la cartelera
            </Button>
            <Button as={Link} to={RUTA_INICIO} variant="outline-light" size="lg">
              Ir al inicio
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-5">
          <h1 className="mb-3">Tu compra</h1>
          <p className="lead">No hay ninguna compra reciente. ¿Vamos al cine?</p>
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
            Ver cartelera
          </Button>
        </div>
      )}
    </Container>
  )
}

export default Confirmacion
