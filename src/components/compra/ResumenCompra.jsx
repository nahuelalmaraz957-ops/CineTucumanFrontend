import { formatearFechaConDia, formatearMoneda } from '../../utilidades/formatos.js'

const ResumenCompra = ({ resumen }) => {
  return (
    <>
      {resumen.entradas.map((entrada) => (
        <div key={`${entrada.fecha}-${entrada.horario}`} className="mb-3">
          <h3 className="h5 mb-1">{entrada.pelicula}</h3>
          <p className="text-body-secondary mb-1">
            {formatearFechaConDia(entrada.fecha)} · {entrada.horario} · {entrada.sala} · {entrada.formato} ·{' '}
            {entrada.idioma}
          </p>
          <p className="mb-1">Butacas: {entrada.butacas.join(', ')}</p>
          <p className="mb-0">
            {entrada.cantidad} × {formatearMoneda(entrada.precioUnitario)} ={' '}
            {formatearMoneda(entrada.cantidad * entrada.precioUnitario)}
          </p>
        </div>
      ))}
      {resumen.productos.map((producto) => (
        <p key={producto.nombre} className="mb-2">
          {producto.cantidad} × {producto.nombre} = {formatearMoneda(producto.cantidad * producto.precioUnitario)}
        </p>
      ))}
      <p className="h4 mt-3 mb-0 text-end">Total: {formatearMoneda(resumen.total)}</p>
    </>
  )
}

export default ResumenCompra
