import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { RUTA_PELICULAS } from './datos/rutas.js'
import Inicio from './pages/Inicio.jsx'
import Peliculas from './pages/Peliculas.jsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path={RUTA_PELICULAS} element={<Peliculas />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
