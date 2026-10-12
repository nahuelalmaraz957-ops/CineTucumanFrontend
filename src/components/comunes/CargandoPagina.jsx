import { Container, Spinner } from 'react-bootstrap'

const CargandoPagina = () => {
  return (
    <Container className="py-5 text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando la página…</span>
      </Spinner>
    </Container>
  )
}

export default CargandoPagina
