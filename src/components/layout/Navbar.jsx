import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Badge, Button, Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap'
import Icono from '../comunes/Icono.jsx'
import pochoclinMini from '../../assets/imagenes/marca/pochoclin-mini.png'
import { AVISO_CAMBIAR_FUNCION, AVISO_ELEGIR_PELICULA } from '../../datos/avisos.js'
import { accionesNavbar, enlacesNavbar } from '../../datos/navegacion.js'
import { RUTA_CARRITO, RUTA_INICIO, rutaFunciones } from '../../datos/rutas.js'
import '../../estilos/Navbar.css'

const Navbar = ({ cantidadEnCarrito, idPeliculaEnJuego, butacasElegidas, alComprar }) => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  const abrirAvisoDeCompra = (tipo) => () => {
    cerrarMenu()
    alComprar(tipo)
  }

  const obtenerPropsAccion = (accion) => {
    if (!accion.esCompra) return { as: Link, to: accion.ruta, onClick: cerrarMenu }

    if (!idPeliculaEnJuego) return { onClick: abrirAvisoDeCompra(AVISO_ELEGIR_PELICULA) }

    if (butacasElegidas > 0) return { onClick: abrirAvisoDeCompra(AVISO_CAMBIAR_FUNCION) }

    return { as: Link, to: rutaFunciones(idPeliculaEnJuego), onClick: cerrarMenu }
  }

  return (
    <header className="encabezado-sitio sticky-top">
      <NavbarBootstrap
        expand="xl"
        variant="dark"
        expanded={menuAbierto}
        onToggle={setMenuAbierto}
        aria-label="Navegación principal"
      >
        <Container>
          <NavbarBootstrap.Brand
            as={Link}
            to={RUTA_INICIO}
            aria-label="Cine Tucumán - Inicio"
            className="d-flex align-items-center gap-2"
            onClick={cerrarMenu}
          >
            <img src={pochoclinMini} alt="" width="40" height="40" />
            Cine Tucumán
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="navbarMain" aria-label="Abrir menú de navegación" />
          <NavbarBootstrap.Collapse id="navbarMain">
            <Nav className="me-xl-auto mb-2 mb-xl-0">
              {enlacesNavbar.map((enlace) => (
                <Nav.Link
                  key={enlace.ruta}
                  as={NavLink}
                  to={enlace.ruta}
                  end={enlace.ruta === RUTA_INICIO}
                  onClick={cerrarMenu}
                >
                  {enlace.etiqueta}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-2 gap-xl-3">
              {accionesNavbar.map((accion) => (
                <Button
                  key={accion.etiqueta}
                  {...obtenerPropsAccion(accion)}
                  variant={accion.variante}
                  size={accion.tamano}
                  aria-label={accion.etiquetaAccesible}
                >
                  <Icono nombre={accion.icono} tamano={18} /> {accion.etiqueta}
                </Button>
              ))}
              <Button
                as={Link}
                to={RUTA_CARRITO}
                variant="outline-light"
                size="sm"
                aria-label={`Carrito, ${cantidadEnCarrito} ${cantidadEnCarrito === 1 ? 'artículo' : 'artículos'}`}
                onClick={cerrarMenu}
              >
                <Icono nombre="carrito" tamano={18} /> Carrito
                {cantidadEnCarrito > 0 && (
                  <Badge bg="primary" pill className="ms-2">
                    {cantidadEnCarrito}
                  </Badge>
                )}
              </Button>
            </div>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </header>
  )
}

export default Navbar
