import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { AVISO_CAMBIAR_FUNCION, AVISO_ELEGIR_PELICULA } from '../../datos/avisos.js'
import { obtenerPeliculaEnJuego } from '../../utilidades/compra.js'
import AvisoCambiarFuncion from './AvisoCambiarFuncion.jsx'
import AvisoElegirPelicula from './AvisoElegirPelicula.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Layout = ({ cantidadEnCarrito, idPeliculaDelCarrito }) => {
  const ubicacion = useLocation()
  const tipoNavegacion = useNavigationType()
  const [aviso, setAviso] = useState({ ruta: null, tipo: null })
  const [seleccion, setSeleccion] = useState({ ruta: null, cantidad: 0 })
  const tipoDeAviso = aviso.ruta === ubicacion.pathname ? aviso.tipo : null
  const butacasElegidas = seleccion.ruta === ubicacion.pathname ? seleccion.cantidad : 0
  const idPeliculaEnJuego = obtenerPeliculaEnJuego(ubicacion, idPeliculaDelCarrito)

  const abrirAviso = (tipo) => setAviso({ ruta: ubicacion.pathname, tipo })
  const cerrarAviso = () => setAviso({ ruta: null, tipo: null })
  const registrarButacas = useCallback(
    (cantidad) => setSeleccion({ ruta: ubicacion.pathname, cantidad }),
    [ubicacion.pathname],
  )

  useEffect(() => {
    if (tipoNavegacion !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [ubicacion.key, tipoNavegacion])

  return (
    <>
      <Navbar
        cantidadEnCarrito={cantidadEnCarrito}
        idPeliculaEnJuego={idPeliculaEnJuego}
        butacasElegidas={butacasElegidas}
        alComprar={abrirAviso}
      />
      <main key={ubicacion.pathname} className="pagina">
        <Outlet context={{ abrirAviso, idPeliculaEnJuego, registrarButacas }} />
      </main>
      <Footer />
      <AvisoElegirPelicula visible={tipoDeAviso === AVISO_ELEGIR_PELICULA} alCerrar={cerrarAviso} />
      <AvisoCambiarFuncion
        visible={tipoDeAviso === AVISO_CAMBIAR_FUNCION}
        idPelicula={idPeliculaEnJuego}
        alCerrar={cerrarAviso}
      />
    </>
  )
}

export default Layout
