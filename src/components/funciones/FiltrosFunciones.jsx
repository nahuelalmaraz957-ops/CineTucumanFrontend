import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { OPCIONES_FORMATO } from '../../datos/filtros.js'
import { formatearFechaCorta } from '../../utilidades/formatos.js'

const FiltrosFunciones = ({ fechas, fecha, formato, alCambiarFecha, alCambiarFormato }) => {
  return (
    <div className="mb-4">
      <h2 className="h6 text-uppercase">Fecha</h2>
      <ToggleButtonGroup type="radio" name="fecha" value={fecha} onChange={alCambiarFecha} className="flex-wrap mb-4">
        {fechas.map((item) => (
          <ToggleButton key={item} id={`fecha-${item}`} value={item} variant="outline-light">
            {formatearFechaCorta(item)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <h2 className="h6 text-uppercase">Formato</h2>
      <ToggleButtonGroup type="radio" name="formato" value={formato} onChange={alCambiarFormato}>
        {OPCIONES_FORMATO.map((opcion) => (
          <ToggleButton key={opcion.valor} id={`formato-${opcion.valor}`} value={opcion.valor} variant="outline-light">
            {opcion.etiqueta}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}

export default FiltrosFunciones
