import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import MapaButacas from '../components/butacas/MapaButacas.jsx'
import ResumenButacas from '../components/butacas/ResumenButacas.jsx'
import Seo from '../components/seo/Seo.jsx'
import { MAXIMO_BUTACAS } from '../datos/butacas.js'
import { cartelera } from '../datos/cartelera.js'
import { ESTADO_FUNCION_AGOTADA } from '../datos/estados.js'
import { RUTA_CARRITO, RUTA_PELICULAS } from '../datos/rutas.js'
import { obtenerButacasOcupadas, obtenerFuncion } from '../servicios/funciones.js'
import { TIPO_ENTRADA } from '../utilidades/carrito.js'
import NoEncontrada from './NoEncontrada.jsx'

const Butacas = ({ alAgregarEntrada }) => {
  const { idFuncion } = useParams()
  const navigate = useNavigate()
  const [seleccionadas, setSeleccionadas] = useState([])
  const funcion = obtenerFuncion(idFuncion)

  if (funcion === undefined) return <NoEncontrada />

  const pelicula = cartelera.find((elemento) => elemento.id === funcion.peliculaId)
  const ocupadas = obtenerButacasOcupadas(funcion.id)
  const alcanzoMaximo = seleccionadas.length === MAXIMO_BUTACAS

  const alternarButaca = (codigo) =>
    setSeleccionadas((actuales) =>
      actuales.includes(codigo) ? actuales.filter((elegida) => elegida !== codigo) : [...actuales, codigo],
    )

  const agregarAlCarrito = () => {
    alAgregarEntrada({
      id: `${TIPO_ENTRADA}:${funcion.id}`,
      tipo: TIPO_ENTRADA,
      idFuncion: funcion.id,
      butacas: [...seleccionadas].sort(),
      precioUnitario: funcion.precio,
      cantidad: seleccionadas.length,
    })
    navigate(RUTA_CARRITO)
  }

  return (
    <Container className="py-4">
      <Seo
        titulo="Elegí tus butacas | Cine Tucumán"
        descripcion="Elegí hasta 6 butacas para tu función de Cine Tucumán."
      />
      <h1 className="mb-4">Elegí tus butacas</h1>
      {funcion.estado === ESTADO_FUNCION_AGOTADA && (
        <p role="status">
          Esta función está agotada. <Link to={RUTA_PELICULAS}>Ver la cartelera</Link>
        </p>
      )}
      <Row className="g-4">
        <Col xs={12} lg={8}>
          <MapaButacas
            ocupadas={ocupadas}
            seleccionadas={seleccionadas}
            alcanzoMaximo={alcanzoMaximo}
            alAlternar={alternarButaca}
          />
          <p className="small text-body-secondary text-center mt-4">
            Libre: con borde. Seleccionada: dorada. Ocupada: con ×.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <ResumenButacas
            funcion={funcion}
            pelicula={pelicula}
            seleccionadas={seleccionadas}
            alcanzoMaximo={alcanzoMaximo}
            alAgregar={agregarAlCarrito}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Butacas
