import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Badge, Button, Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap'
import Icono from '../comunes/Icono.jsx'
import pochoclinMini from '../../assets/imagenes/marca/pochoclin-mini.png'
import { accionesNavbar, enlacesNavbar } from '../../datos/navegacion.js'
import { RUTA_CARRITO, RUTA_INICIO } from '../../datos/rutas.js'
import '../../estilos/Navbar.css'

const Navbar = ({ cantidadEnCarrito }) => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="encabezado-sitio sticky-top">
      <NavbarBootstrap
        expand="lg"
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
            <Nav className="me-lg-auto mb-2 mb-lg-0">
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
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3">
              {accionesNavbar.map((accion) => (
                <Button
                  key={accion.etiqueta}
                  as={Link}
                  to={accion.ruta}
                  variant={accion.variante}
                  size={accion.tamano}
                  aria-label={accion.etiquetaAccesible}
                  onClick={cerrarMenu}
                >
                  <Icono nombre={accion.icono} tamano={18} /> {accion.etiqueta}
                </Button>
              ))}
              <Button
                as={Link}
                to={RUTA_CARRITO}
                variant="outline-light"
                size="sm"
                aria-label={`Carrito, ${cantidadEnCarrito} entradas`}
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
