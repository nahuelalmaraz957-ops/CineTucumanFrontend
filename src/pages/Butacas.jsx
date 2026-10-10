import { useEffect, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import MapaButacas from '../components/butacas/MapaButacas.jsx'
import ResumenButacas from '../components/butacas/ResumenButacas.jsx'
import Seo from '../components/seo/Seo.jsx'
import { MAXIMO_BUTACAS } from '../datos/butacas.js'
import { ESTADO_FUNCION_AGOTADA } from '../datos/estados.js'
import { RUTA_CANDYBAR, RUTA_PELICULAS } from '../datos/rutas.js'
import { obtenerButacasOcupadas, obtenerFuncion } from '../servicios/funciones.js'
import { obtenerPelicula } from '../servicios/peliculas.js'
import { TIPO_ENTRADA } from '../utilidades/carrito.js'
import { obtenerFechaDeHoy, obtenerHoraActual } from '../utilidades/fechas.js'
import { yaEmpezo } from '../utilidades/funciones.js'
import NoEncontrada from './NoEncontrada.jsx'

const Butacas = ({ alAgregarEntrada }) => {
  const { idFuncion } = useParams()
  const navigate = useNavigate()
  const { registrarButacas } = useOutletContext()

  useEffect(() => {
    return () => registrarButacas(0)
  }, [registrarButacas])
  const [seleccionadas, setSeleccionadas] = useState([])
  const funcion = obtenerFuncion(idFuncion)

  if (funcion === undefined) return <NoEncontrada />

  const pelicula = obtenerPelicula(funcion.peliculaId)
  const ocupadas = obtenerButacasOcupadas(funcion.id)
  const alcanzoMaximo = seleccionadas.length === MAXIMO_BUTACAS
  const haEmpezado = yaEmpezo(funcion, obtenerFechaDeHoy(), obtenerHoraActual())

  const alternarButaca = (codigo) => {
    const nuevas = seleccionadas.includes(codigo)
      ? seleccionadas.filter((elegida) => elegida !== codigo)
      : [...seleccionadas, codigo]

    setSeleccionadas(nuevas)
    registrarButacas(nuevas.length)
  }

  const agregarAlCarrito = () => {
    alAgregarEntrada({
      id: `${TIPO_ENTRADA}:${funcion.id}`,
      tipo: TIPO_ENTRADA,
      idFuncion: funcion.id,
      butacas: [...seleccionadas].sort(),
      precioUnitario: funcion.precio,
      cantidad: seleccionadas.length,
    })
    navigate(RUTA_CANDYBAR)
  }

  return (
    <Container className="py-4">
      <Seo
        titulo="Elegí tus butacas | Cine Tucumán"
        descripcion="Elegí hasta 6 butacas para tu función de Cine Tucumán."
      />
      <h1 className="mb-4">Elegí tus butacas</h1>
      {haEmpezado && (
        <p role="status">
          Esta función ya empezó. <Link to={RUTA_PELICULAS}>Ver la cartelera</Link>
        </p>
      )}
      {!haEmpezado && funcion.estado === ESTADO_FUNCION_AGOTADA && (
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
            estaBloqueado={haEmpezado}
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
