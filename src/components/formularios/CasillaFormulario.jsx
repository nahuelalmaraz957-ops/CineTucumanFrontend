import { Form } from 'react-bootstrap'

const CasillaFormulario = ({ id, nombre, marcada, error, alCambiar, children }) => {
  const idError = `${id}-error`

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Check type="checkbox">
        <Form.Check.Input
          name={nombre}
          checked={marcada}
          isInvalid={Boolean(error)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? idError : undefined}
          onChange={alCambiar}
        />
        <Form.Check.Label>{children}</Form.Check.Label>
        <Form.Control.Feedback type="invalid" id={idError} role="alert">
          {error}
        </Form.Control.Feedback>
      </Form.Check>
    </Form.Group>
  )
}

export default CasillaFormulario
