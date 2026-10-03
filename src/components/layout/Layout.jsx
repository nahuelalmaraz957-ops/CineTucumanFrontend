import { useEffect } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Layout = () => {
  const ubicacion = useLocation()
  const tipoNavegacion = useNavigationType()

  useEffect(() => {
    if (tipoNavegacion !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [ubicacion.key, tipoNavegacion])

  return (
    <>
      <Navbar />
      <main key={ubicacion.pathname} className="pagina">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
