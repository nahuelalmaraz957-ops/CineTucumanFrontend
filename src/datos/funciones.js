const ID_PELICULA = 'spider-man-un-nuevo-dia'
const ID_SUCURSAL = 'sunstar-cinemas'

const FECHAS = [
  '2026-10-02',
  '2026-10-03',
  '2026-10-04',
  '2026-10-05',
  '2026-10-06',
  '2026-10-07',
  '2026-10-08',
]

const HORARIOS = [
  { horario: '19:20', formato: '2D', estado: 'disponible' },
  { horario: '22:10', formato: '2D', estado: 'pocos-lugares' },
  { horario: '16:00', formato: '3D', estado: 'disponible' },
  { horario: '19:00', formato: '3D', estado: 'agotada' },
  { horario: '22:00', formato: '3D', estado: 'disponible' },
]

export const funciones = FECHAS.flatMap((fecha) =>
  HORARIOS.map((horario) => ({
    peliculaId: ID_PELICULA,
    sucursalId: ID_SUCURSAL,
    fecha,
    ...horario,
    idioma: 'Castellano',
    sala: 'Sala 1',
    precio: 8500,
  })),
)
