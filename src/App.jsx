import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  )
}

export default App
