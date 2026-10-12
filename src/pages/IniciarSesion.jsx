import { Link } from 'react-router-dom'
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import CampoFormulario from '../components/formularios/CampoFormulario.jsx'
import Seo from '../components/seo/Seo.jsx'
import { MENSAJE_SIN_SESION } from '../datos/formularios.js'
import { RUTA_RECUPERAR_CONTRASENA, RUTA_REGISTRO } from '../datos/rutas.js'
import useFormulario from '../hooks/useFormulario.js'
import { validarContrasenaDeIngreso, validarCorreo } from '../utilidades/validaciones.js'

const VALORES_INICIALES = { correo: '', contrasena: '' }

const REGLAS = {
  correo: (valores) => validarCorreo(valores.correo),
  contrasena: (valores) => validarContrasenaDeIngreso(valores.contrasena),
}

const IniciarSesion = () => {
  const { valores, errores, exito, cambiarValor, enviar } = useFormulario(VALORES_INICIALES, REGLAS)

  return (
    <Container className="py-5">
      <Seo
        titulo="Iniciar sesión | Cine Tucumán"
        descripcion="Iniciá sesión en Cine Tucumán para continuar con tu compra."
      />
      <meta name="robots" content="noindex" />
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={5}>
          <Card>
            <Card.Body className="p-4">
              <h1 className="mb-2">Iniciar sesión</h1>
              <p className="text-body-secondary mb-4">Accedé a tu cuenta para continuar con tu compra.</p>
              <Form noValidate onSubmit={enviar}>
                <CampoFormulario
                  id="inicio-correo"
                  nombre="correo"
                  etiqueta="Correo electrónico"
                  tipo="email"
                  valor={valores.correo}
                  error={errores.correo}
                  autoComplete="email"
                  alCambiar={cambiarValor}
                />
                <CampoFormulario
                  id="inicio-contrasena"
                  nombre="contrasena"
                  etiqueta="Contraseña"
                  tipo="password"
                  valor={valores.contrasena}
                  error={errores.contrasena}
                  autoComplete="current-password"
                  alCambiar={cambiarValor}
                />
                <p className="small mb-4">
                  <Link to={RUTA_RECUPERAR_CONTRASENA}>¿Olvidaste tu contraseña?</Link>
                </p>
                {exito && (
                  <Alert variant="secondary" role="status">
                    {MENSAJE_SIN_SESION}
                  </Alert>
                )}
                <Button type="submit" variant="marca" size="lg" className="w-100">
                  Iniciar sesión
                </Button>
              </Form>
              <p className="text-center mt-4 mb-0">
                ¿No tenés cuenta? <Link to={RUTA_REGISTRO}>Registrate</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default IniciarSesion
