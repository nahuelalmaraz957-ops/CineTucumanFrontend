import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import AvisoElegirPelicula from './AvisoElegirPelicula.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Layout = ({ cantidadEnCarrito }) => {
  const ubicacion = useLocation()
  const tipoNavegacion = useNavigationType()
  const [rutaDelAviso, setRutaDelAviso] = useState(null)
  const mostrarAviso = rutaDelAviso === ubicacion.pathname

  const abrirAviso = () => setRutaDelAviso(ubicacion.pathname)
  const cerrarAviso = () => setRutaDelAviso(null)

  useEffect(() => {
    if (tipoNavegacion !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [ubicacion.key, tipoNavegacion])

  return (
    <>
      <Navbar cantidadEnCarrito={cantidadEnCarrito} alComprar={abrirAviso} />
      <main key={ubicacion.pathname} className="pagina">
        <Outlet context={{ abrirAviso }} />
      </main>
      <Footer />
      <AvisoElegirPelicula visible={mostrarAviso} alCerrar={cerrarAviso} />
    </>
  )
}

export default Layout
