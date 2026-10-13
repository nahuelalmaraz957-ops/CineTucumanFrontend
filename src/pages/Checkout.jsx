import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import ResumenCompra from '../components/compra/ResumenCompra.jsx'
import CampoFormulario from '../components/formularios/CampoFormulario.jsx'
import Seo from '../components/seo/Seo.jsx'
import { AVISO_PAGO_SIMULADO, DURACION_PAGO_SIMULADO } from '../datos/pago.js'
import { RUTA_CARRITO, RUTA_CONFIRMACION, RUTA_PELICULAS } from '../datos/rutas.js'
import useFormulario from '../hooks/useFormulario.js'
import { filtrarCvv, filtrarNumeroTarjeta, filtrarVencimiento } from '../utilidades/tarjeta.js'
import { armarResumen, crearOrden, guardarOrden, obtenerEntradasQueYaEmpezaron } from '../utilidades/ordenes.js'
import { validarCvv, validarNumeroTarjeta, validarTitular, validarVencimiento } from '../utilidades/validaciones.js'

const VALORES_INICIALES = { titular: '', numero: '', vencimiento: '', cvv: '' }

const REGLAS = {
  titular: (valores) => validarTitular(valores.titular),
  numero: (valores) => validarNumeroTarjeta(valores.numero),
  vencimiento: (valores) => validarVencimiento(valores.vencimiento),
  cvv: (valores) => validarCvv(valores.cvv),
}

const FILTROS = { numero: filtrarNumeroTarjeta, vencimiento: filtrarVencimiento, cvv: filtrarCvv }

const Checkout = ({ items, alConfirmarCompra }) => {
  const navigate = useNavigate()
  const [ordenEnProceso, setOrdenEnProceso] = useState(null)
  const [aviso, setAviso] = useState('')
  const resumen = armarResumen(items)
  const estaProcesando = ordenEnProceso !== null

  const confirmar = () => {
    const [empezada] = obtenerEntradasQueYaEmpezaron(items)

    if (empezada) {
      setAviso(
        `La función de «${empezada.pelicula}» de las ${empezada.horario} ya empezó. Volvé al carrito y quitá esas entradas.`,
      )
      return
    }

    setAviso('')
    setOrdenEnProceso(crearOrden(resumen))
  }

  const { valores, errores, cambiarValor, enviar } = useFormulario(VALORES_INICIALES, REGLAS, {
    filtros: FILTROS,
    alEnviarValido: confirmar,
  })

  useEffect(() => {
    if (ordenEnProceso === null) return undefined

    const temporizador = setTimeout(() => {
      guardarOrden(ordenEnProceso)
      alConfirmarCompra()
      navigate(RUTA_CONFIRMACION)
    }, DURACION_PAGO_SIMULADO)

    return () => clearTimeout(temporizador)
  }, [ordenEnProceso, alConfirmarCompra, navigate])

  return (
    <Container className="py-4">
      <Seo titulo="Finalizar compra | Cine Tucumán" descripcion="Revisá tu compra y completá el pago simulado." />
      <meta name="robots" content="noindex" />
      <h1 className="mb-4">Finalizar compra</h1>
      {items.length === 0 && !estaProcesando ? (
        <div className="text-center py-5">
          <p className="lead">No hay nada para pagar. ¿Vamos al cine?</p>
          <Button as={Link} to={RUTA_PELICULAS} variant="marca" size="lg">
            Ver cartelera
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          <Col lg={6}>
            <h2 className="h4 mb-3">Resumen de la compra</h2>
            <Card>
              <Card.Body>
                <ResumenCompra resumen={resumen} />
              </Card.Body>
            </Card>
            <Button as={Link} to={RUTA_CARRITO} variant="outline-light" className="mt-3">
              Volver al carrito
            </Button>
          </Col>
          <Col lg={6}>
            <h2 className="h4 mb-3">Medio de pago</h2>
            <Alert variant="secondary">{AVISO_PAGO_SIMULADO}</Alert>
            {aviso && <Alert variant="danger">{aviso}</Alert>}
            <Form noValidate onSubmit={enviar}>
              <CampoFormulario
                id="pago-titular"
                nombre="titular"
                etiqueta="Nombre del titular"
                valor={valores.titular}
                error={errores.titular}
                autoComplete="off"
                disabled={estaProcesando}
                alCambiar={cambiarValor}
              />
              <CampoFormulario
                id="pago-numero"
                nombre="numero"
                etiqueta="Número de tarjeta"
                valor={valores.numero}
                error={errores.numero}
                autoComplete="off"
                inputMode="numeric"
                maxLength={19}
                disabled={estaProcesando}
                alCambiar={cambiarValor}
              />
              <Row>
                <Col xs={6}>
                  <CampoFormulario
                    id="pago-vencimiento"
                    nombre="vencimiento"
                    etiqueta="Vencimiento"
                    valor={valores.vencimiento}
                    error={errores.vencimiento}
                    autoComplete="off"
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="MM/AA"
                    disabled={estaProcesando}
                    alCambiar={cambiarValor}
                  />
                </Col>
                <Col xs={6}>
                  <CampoFormulario
                    id="pago-cvv"
                    nombre="cvv"
                    etiqueta="CVV"
                    valor={valores.cvv}
                    error={errores.cvv}
                    autoComplete="off"
                    inputMode="numeric"
                    maxLength={3}
                    disabled={estaProcesando}
                    alCambiar={cambiarValor}
                  />
                </Col>
              </Row>
              <Button type="submit" variant="marca" size="lg" className="w-100" disabled={estaProcesando}>
                {estaProcesando ? (
                  <>
                    <Spinner animation="border" size="sm" role="status" aria-hidden="true" /> Procesando el pago…
                  </>
                ) : (
                  'Confirmar compra (simulación)'
                )}
              </Button>
              {estaProcesando && (
                <p className="visually-hidden" role="status">
                  Procesando el pago, aguardá unos segundos.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Checkout
