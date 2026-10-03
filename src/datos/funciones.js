import { obtenerFechaDeHoy, sumarDias } from '../utilidades/fechas.js'
import { ESTADO_FUNCION_AGOTADA, ESTADO_FUNCION_DISPONIBLE, ESTADO_FUNCION_POCOS_LUGARES } from './estados.js'

const ID_PELICULA = 'spider-man-un-nuevo-dia'
const ID_SUCURSAL = 'sunstar-cinemas'
const DIAS_CON_FUNCIONES = 7

const HOY = obtenerFechaDeHoy()
const FECHAS = Array.from({ length: DIAS_CON_FUNCIONES }, (_, indice) => sumarDias(HOY, indice))

const HORARIOS = [
  { horario: '19:20', formato: '2D', estado: ESTADO_FUNCION_DISPONIBLE },
  { horario: '22:10', formato: '2D', estado: ESTADO_FUNCION_POCOS_LUGARES },
  { horario: '16:00', formato: '3D', estado: ESTADO_FUNCION_DISPONIBLE },
  { horario: '19:00', formato: '3D', estado: ESTADO_FUNCION_AGOTADA },
  { horario: '22:00', formato: '3D', estado: ESTADO_FUNCION_DISPONIBLE },
]

export const funciones = FECHAS.flatMap((fecha) =>
  HORARIOS.map((horario) => ({
    id: `${ID_PELICULA}-${fecha}-${horario.horario.replace(':', '')}`,
    peliculaId: ID_PELICULA,
    sucursalId: ID_SUCURSAL,
    fecha,
    ...horario,
    idioma: 'Castellano',
    sala: 'Sala 1',
    precio: 8500,
  })),
)
