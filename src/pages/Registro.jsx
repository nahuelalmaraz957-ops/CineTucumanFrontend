import { Link } from 'react-router-dom'
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import CampoFormulario from '../components/formularios/CampoFormulario.jsx'
import CasillaFormulario from '../components/formularios/CasillaFormulario.jsx'
import Seo from '../components/seo/Seo.jsx'
import { MENSAJE_SIN_SESION } from '../datos/formularios.js'
import { RUTA_INICIAR_SESION, RUTA_TERMINOS } from '../datos/rutas.js'
import useFormulario from '../hooks/useFormulario.js'
import {
  validarApellido,
  validarConfirmacion,
  validarContrasenaNueva,
  validarCorreo,
  validarNombre,
  validarTerminos,
} from '../utilidades/validaciones.js'

const VALORES_INICIALES = {
  nombre: '',
  apellido: '',
  correo: '',
  contrasena: '',
  confirmacion: '',
  terminos: false,
}

const REGLAS = {
  nombre: (valores) => validarNombre(valores.nombre),
  apellido: (valores) => validarApellido(valores.apellido),
  correo: (valores) => validarCorreo(valores.correo),
  contrasena: (valores) => validarContrasenaNueva(valores.contrasena),
  confirmacion: (valores) => validarConfirmacion(valores.confirmacion, valores.contrasena),
  terminos: (valores) => validarTerminos(valores.terminos),
}

const Registro = () => {
  const { valores, errores, exito, cambiarValor, enviar } = useFormulario(VALORES_INICIALES, REGLAS)

  return (
    <Container className="py-5">
      <Seo titulo="Crear cuenta | Cine Tucumán" descripcion="Creá tu cuenta en Cine Tucumán para comprar entradas." />
      <meta name="robots" content="noindex" />
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Body className="p-4">
              <h1 className="mb-2">Creá tu cuenta</h1>
              <p className="text-body-secondary mb-4">Registrate para comprar entradas y gestionar tus reservas.</p>
              <Form noValidate onSubmit={enviar}>
                <Row>
                  <Col sm={6}>
                    <CampoFormulario
                      id="registro-nombre"
                      nombre="nombre"
                      etiqueta="Nombre"
                      valor={valores.nombre}
                      error={errores.nombre}
                      autoComplete="given-name"
                      alCambiar={cambiarValor}
                    />
                  </Col>
                  <Col sm={6}>
                    <CampoFormulario
                      id="registro-apellido"
                      nombre="apellido"
                      etiqueta="Apellido"
                      valor={valores.apellido}
                      error={errores.apellido}
                      autoComplete="family-name"
                      alCambiar={cambiarValor}
                    />
                  </Col>
                </Row>
                <CampoFormulario
                  id="registro-correo"
                  nombre="correo"
                  etiqueta="Correo electrónico"
                  tipo="email"
                  valor={valores.correo}
                  error={errores.correo}
                  autoComplete="email"
                  alCambiar={cambiarValor}
                />
                <CampoFormulario
                  id="registro-contrasena"
                  nombre="contrasena"
                  etiqueta="Contraseña"
                  tipo="password"
                  valor={valores.contrasena}
                  error={errores.contrasena}
                  autoComplete="new-password"
                  alCambiar={cambiarValor}
                />
                <CampoFormulario
                  id="registro-confirmacion"
                  nombre="confirmacion"
                  etiqueta="Confirmar contraseña"
                  tipo="password"
                  valor={valores.confirmacion}
                  error={errores.confirmacion}
                  autoComplete="new-password"
                  alCambiar={cambiarValor}
                />
                <CasillaFormulario
                  id="registro-terminos"
                  nombre="terminos"
                  marcada={valores.terminos}
                  error={errores.terminos}
                  alCambiar={cambiarValor}
                >
                  Acepto los{' '}
                  <a href={RUTA_TERMINOS} target="_blank" rel="noopener noreferrer">
                    términos y condiciones
                    <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
                  </a>
                </CasillaFormulario>
                {exito && (
                  <Alert variant="secondary" role="status">
                    {MENSAJE_SIN_SESION}
                  </Alert>
                )}
                <Button type="submit" variant="marca" size="lg" className="w-100">
                  Crear cuenta
                </Button>
              </Form>
              <p className="text-center mt-4 mb-0">
                ¿Ya tenés una cuenta? <Link to={RUTA_INICIAR_SESION}>Iniciá sesión</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Registro
