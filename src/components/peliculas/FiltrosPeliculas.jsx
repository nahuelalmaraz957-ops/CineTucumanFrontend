import { Col, Form, Row } from 'react-bootstrap'
import { ESTADO_EN_CARTELERA, ESTADO_PROXIMAMENTE } from '../../datos/estados.js'

const FiltrosPeliculas = ({ termino, estado, referenciaBuscador, alCambiarTermino, alCambiarEstado }) => {
  return (
    <Form className="mb-5" role="search" onSubmit={(evento) => evento.preventDefault()}>
      <Row className="g-3 align-items-end">
        <Col xs={12} md={6}>
          <Form.Group controlId="buscador-peliculas">
            <Form.Label>Buscar película</Form.Label>
            <Form.Control
              ref={referenciaBuscador}
              type="search"
              value={termino}
              onChange={(evento) => alCambiarTermino(evento.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group controlId="filtro-estado">
            <Form.Label>Estado</Form.Label>
            <Form.Select value={estado} onChange={(evento) => alCambiarEstado(evento.target.value)}>
              <option value="">Todas</option>
              <option value={ESTADO_EN_CARTELERA}>En cartelera</option>
              <option value={ESTADO_PROXIMAMENTE}>Próximamente</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default FiltrosPeliculas
