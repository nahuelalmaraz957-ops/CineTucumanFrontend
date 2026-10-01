import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Layout = () => {
  const ubicacion = useLocation()

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
