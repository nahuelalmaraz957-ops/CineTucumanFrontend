import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { RUTA_PELICULAS } from './datos/rutas.js'
import Inicio from './pages/Inicio.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import Peliculas from './pages/Peliculas.jsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path={RUTA_PELICULAS} element={<Peliculas />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
