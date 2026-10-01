import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Inicio from './pages/Inicio.jsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  )
}

export default App
