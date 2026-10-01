import { Link, NavLink } from 'react-router-dom'
import { Button, Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap'
import { accionesNavbar, enlacesNavbar } from '../../datos/navegacion.js'
import { RUTA_INICIO } from '../../datos/rutas.js'
import '../../estilos/Navbar.css'

const Navbar = () => {
  return (
    <header className="encabezado-sitio sticky-top">
      <NavbarBootstrap expand="lg" variant="dark" aria-label="Navegación principal">
        <Container>
          <NavbarBootstrap.Brand as={Link} to={RUTA_INICIO} aria-label="Cine Tucumán - Inicio">
            Cine Tucumán
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="navbarMain" aria-label="Abrir menú de navegación" />
          <NavbarBootstrap.Collapse id="navbarMain">
            <Nav className="me-lg-auto mb-2 mb-lg-0">
              {enlacesNavbar.map((enlace) => (
                <Nav.Link key={enlace.ruta} as={NavLink} to={enlace.ruta} end={enlace.ruta === RUTA_INICIO}>
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
                >
                  {accion.etiqueta}
                </Button>
              ))}
            </div>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </header>
  )
}

export default Navbar
