import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import Seo from '../seo/Seo.jsx'
import { RUTA_INICIO } from '../../datos/rutas.js'

const PaginaProximamente = ({ titulo, descripcion, texto }) => {
  return (
    <Container className="py-5 text-center">
      <Seo titulo={`${titulo} | Cine Tucumán`} descripcion={descripcion} />
      <meta name="robots" content="noindex" />
      <h1 className="mb-3">{titulo}</h1>
      <p className="lead mb-4">{texto}</p>
      <Button as={Link} to={RUTA_INICIO} variant="marca" size="lg">
        Volver al inicio
      </Button>
    </Container>
  )
}

export default PaginaProximamente
