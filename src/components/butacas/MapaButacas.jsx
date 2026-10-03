import { Button } from 'react-bootstrap'
import { BUTACAS, BUTACAS_ACCESIBLES, FILAS } from '../../datos/butacas.js'
import '../../estilos/MapaButacas.css'

const obtenerEstadoButaca = (estaOcupada, estaElegida) => {
  if (estaOcupada) return 'Ocupada'

  return estaElegida ? 'Seleccionada' : 'Libre'
}

const MapaButacas = ({ ocupadas, seleccionadas, alcanzoMaximo, estaBloqueado, alAlternar }) => {
  return (
    <div role="group" aria-label="Mapa de butacas">
      <p className="text-center text-uppercase small text-body-secondary border-bottom border-secondary pb-2 mb-4">
        Pantalla
      </p>
      {FILAS.map((fila) => (
        <div key={fila} className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <span className="fw-bold text-body-secondary" aria-hidden="true">
            {fila}
          </span>
          {BUTACAS.filter((codigo) => codigo.startsWith(fila)).map((codigo) => {
            const estaOcupada = ocupadas.includes(codigo)
            const estaElegida = seleccionadas.includes(codigo)
            const estado = obtenerEstadoButaca(estaOcupada, estaElegida)
            const etiquetaAccesible = BUTACAS_ACCESIBLES.includes(codigo) ? ' - Accesible' : ''

            return (
              <Button
                key={codigo}
                variant={estaElegida ? 'marca' : 'outline-light'}
                size="sm"
                className="butaca"
                disabled={estaBloqueado || estaOcupada || (alcanzoMaximo && !estaElegida)}
                aria-pressed={estaElegida}
                aria-label={`Butaca ${codigo} - ${estado}${etiquetaAccesible}`}
                onClick={() => alAlternar(codigo)}
              >
                {estaOcupada ? '×' : codigo.slice(1)}
              </Button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default MapaButacas
