import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FiltrosFunciones from '../components/funciones/FiltrosFunciones.jsx'
import TarjetaFuncion from '../components/funciones/TarjetaFuncion.jsx'
import Seo from '../components/seo/Seo.jsx'
import { cartelera } from '../datos/cartelera.js'
import { FORMATO_TODOS } from '../datos/filtros.js'
import { RUTA_PELICULAS } from '../datos/rutas.js'
import { obtenerFunciones } from '../servicios/funciones.js'
import { obtenerFechaDeHoy, obtenerHoraActual } from '../utilidades/fechas.js'
import { yaEmpezo } from '../utilidades/funciones.js'

const Funciones = () => {
  const [parametros] = useSearchParams()
  const idPelicula = parametros.get('pelicula')
  const pelicula = cartelera.find((elemento) => elemento.id === idPelicula)
  const sinPelicula = pelicula === undefined
  const funcionesDePelicula = sinPelicula ? [] : obtenerFunciones(idPelicula)
  const fechas = [...new Set(funcionesDePelicula.map((funcion) => funcion.fecha))]

  const [fechaElegida, setFechaElegida] = useState('')
  const [formato, setFormato] = useState(FORMATO_TODOS)

  const hoy = obtenerFechaDeHoy()
  const hora = obtenerHoraActual()
  const tieneFuncionesPorEmpezar = (dia) =>
    funcionesDePelicula.some((funcion) => funcion.fecha === dia && !yaEmpezo(funcion, hoy, hora))
  const fechaPorDefecto = fechas.find(tieneFuncionesPorEmpezar) ?? fechas[0]
  const fecha = fechas.includes(fechaElegida) ? fechaElegida : fechaPorDefecto
  const funcionesDelDia = funcionesDePelicula.filter(
    (funcion) => funcion.fecha === fecha && (formato === FORMATO_TODOS || funcion.formato === formato),
  )

  return (
    <Container className="py-4">
      <Seo
        titulo={sinPelicula ? 'Funciones | Cine Tucumán' : `Funciones de ${pelicula.titulo} | Cine Tucumán`}
        descripcion="Elegí la fecha, el formato y el horario de tu función en Cine Tucumán."
      />
      <h1 className="mb-4">{pelicula ? `Funciones de ${pelicula.titulo}` : 'Funciones'}</h1>
      {sinPelicula ? (
        <div className="text-center py-5">
          <p className="lead">Elegí una película para ver sus funciones.</p>
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
            Ver cartelera
          </Button>
        </div>
      ) : fechas.length === 0 ? (
        <p className="text-center text-body-secondary py-5" role="status">
          Todavía no hay funciones para esta película.
        </p>
      ) : (
        <>
          <FiltrosFunciones
            fechas={fechas}
            fecha={fecha}
            formato={formato}
            alCambiarFecha={setFechaElegida}
            alCambiarFormato={setFormato}
          />
          {funcionesDelDia.length === 0 ? (
            <p className="text-center text-body-secondary py-5" role="status">
              No hay funciones con esos filtros.
            </p>
          ) : (
            <Row xs={1} sm={2} lg={3} className="g-4">
              {funcionesDelDia.map((funcion) => (
                <Col key={funcion.id}>
                  <TarjetaFuncion funcion={funcion} haEmpezado={yaEmpezo(funcion, hoy, hora)} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </Container>
  )
}

export default Funciones
