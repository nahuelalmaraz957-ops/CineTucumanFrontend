import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import FiltrosFunciones from '../components/funciones/FiltrosFunciones.jsx'
import TarjetaFuncion from '../components/funciones/TarjetaFuncion.jsx'
import Seo from '../components/seo/Seo.jsx'
import { cartelera } from '../datos/cartelera.js'
import { FORMATO_TODOS } from '../datos/filtros.js'
import { obtenerFunciones } from '../servicios/funciones.js'

const Funciones = () => {
  const [parametros] = useSearchParams()
  const idPelicula = parametros.get('pelicula')
  const pelicula = cartelera.find((elemento) => elemento.id === idPelicula)
  const funcionesDePelicula = obtenerFunciones(idPelicula)
  const fechas = [...new Set(funcionesDePelicula.map((funcion) => funcion.fecha))]

  const [fechaElegida, setFechaElegida] = useState('')
  const [formato, setFormato] = useState(FORMATO_TODOS)

  const fecha = fechas.includes(fechaElegida) ? fechaElegida : fechas[0]
  const funcionesDelDia = funcionesDePelicula.filter(
    (funcion) => funcion.fecha === fecha && (formato === FORMATO_TODOS || funcion.formato === formato),
  )

  return (
    <Container className="py-4">
      <Seo
        titulo="Funciones de cine en Tucumán | Cine Tucumán"
        descripcion="Elegí la fecha, el formato y el horario de tu función en Cine Tucumán."
      />
      <h1 className="mb-4">{pelicula ? `Funciones de ${pelicula.titulo}` : 'Funciones'}</h1>
      {fechas.length === 0 ? (
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
                  <TarjetaFuncion funcion={funcion} />
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
