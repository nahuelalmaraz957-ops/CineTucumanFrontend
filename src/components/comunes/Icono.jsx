import { ICONOS } from '../../datos/iconos.js'

const Icono = ({ nombre, tamano = 20 }) => {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="align-text-bottom"
    >
      {ICONOS[nombre].map((trazo) => (
        <path key={trazo} d={trazo} />
      ))}
    </svg>
  )
}

export default Icono
