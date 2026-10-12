import { Form } from 'react-bootstrap'

const CampoFormulario = ({ id, nombre, etiqueta, tipo = 'text', valor, error, autoComplete, alCambiar, ...resto }) => {
  const idError = `${id}-error`

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{etiqueta}</Form.Label>
      <Form.Control
        type={tipo}
        name={nombre}
        value={valor}
        autoComplete={autoComplete}
        isInvalid={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? idError : undefined}
        onChange={alCambiar}
        {...resto}
      />
      <Form.Control.Feedback type="invalid" id={idError} role="alert">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default CampoFormulario
