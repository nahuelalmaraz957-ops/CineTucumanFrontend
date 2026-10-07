import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import pochoclinConfundido from '../../assets/imagenes/marca/pochoclin-confundido.png'
import { RUTA_PELICULAS } from '../../datos/rutas.js'
import '../../estilos/AvisoElegirPelicula.css'

const AvisoElegirPelicula = ({ visible, alCerrar }) => {
  return (
    <Modal show={visible} onHide={alCerrar} centered aria-labelledby="titulo-aviso-pelicula">
      <Modal.Body className="text-center p-4">
        <img className="aviso-imagen mb-3" src={pochoclinConfundido} alt="" />
        <Modal.Title as="h2" id="titulo-aviso-pelicula" className="aviso-titulo h2">
          ¿Y la película?
        </Modal.Title>
        <p className="my-3">Todavía no elegiste ninguna. Mirá nuestra cartelera y elegí la que quieras ver.</p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg" onClick={alCerrar}>
            Ver cartelera
          </Button>
          <Button variant="outline-light" size="lg" onClick={alCerrar}>
            Cerrar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AvisoElegirPelicula
