import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import { rutaFunciones } from '../../datos/rutas.js'
import '../../estilos/AvisoElegirPelicula.css'

const AvisoCambiarFuncion = ({ visible, idPelicula, alCerrar }) => {
  return (
    <Modal show={visible} onHide={alCerrar} centered aria-labelledby="titulo-aviso-funcion">
      <Modal.Body className="text-center p-4">
        <Modal.Title as="h2" id="titulo-aviso-funcion" className="aviso-titulo h2">
          ¿Cambiar de función?
        </Modal.Title>
        <p className="my-3">Si salís ahora, vas a perder las butacas que elegiste.</p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Button variant="marca" size="lg" onClick={alCerrar}>
            Seguir eligiendo
          </Button>
          <Button as={Link} to={rutaFunciones(idPelicula)} variant="outline-light" size="lg" onClick={alCerrar}>
            Ir a las funciones
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AvisoCambiarFuncion
