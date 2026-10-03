import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import { RUTA_BUTACAS, RUTA_CARRITO, RUTA_PELICULAS } from './datos/rutas.js'
import Butacas from './pages/Butacas.jsx'
import Carrito from './pages/Carrito.jsx'
import Inicio from './pages/Inicio.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import Peliculas from './pages/Peliculas.jsx'
import { obtenerFuncion } from './servicios/funciones.js'
import {
  TIPO_ENTRADA,
  contarEntradas,
  guardarCarrito,
  leerCarrito,
  quitarItem,
  reemplazarEntrada,
} from './utilidades/carrito.js'

const leerCarritoVigente = () =>
  leerCarrito().filter((item) => item.tipo !== TIPO_ENTRADA || obtenerFuncion(item.idFuncion) !== undefined)

const App = () => {
  const [carrito, setCarrito] = useState(leerCarritoVigente)

  useEffect(() => {
    guardarCarrito(carrito)
  }, [carrito])

  const agregarEntrada = (entrada) => setCarrito((actual) => reemplazarEntrada(actual, entrada))
  const quitarDelCarrito = (id) => setCarrito((actual) => quitarItem(actual, id))
  const vaciarCarrito = () => setCarrito([])

  return (
    <Routes>
      <Route element={<Layout cantidadEnCarrito={contarEntradas(carrito)} />}>
        <Route index element={<Inicio />} />
        <Route path={RUTA_PELICULAS} element={<Peliculas />} />
        <Route path={`${RUTA_BUTACAS}/:idFuncion`} element={<Butacas alAgregarEntrada={agregarEntrada} />} />
        <Route
          path={RUTA_CARRITO}
          element={<Carrito items={carrito} alQuitar={quitarDelCarrito} alVaciar={vaciarCarrito} />}
        />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
