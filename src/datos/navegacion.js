import { RUTA_BUSCADOR, RUTA_INICIO, RUTA_PELICULAS } from './rutas.js'

export const enlacesNavbar = [
  { etiqueta: 'Inicio', ruta: RUTA_INICIO },
  { etiqueta: 'Películas', ruta: RUTA_PELICULAS },
]

export const accionesNavbar = [
  { etiqueta: 'Comprar entradas', ruta: RUTA_PELICULAS, variante: 'marca', icono: 'entrada' },
  {
    etiqueta: 'Buscar',
    ruta: RUTA_BUSCADOR,
    variante: 'outline-light',
    tamano: 'sm',
    icono: 'lupa',
    etiquetaAccesible: 'Buscar película',
  },
]

export const columnasFooter = [
  {
    titulo: 'Películas',
    enlaces: [
      { etiqueta: 'Cartelera', ruta: RUTA_PELICULAS },
      { etiqueta: 'Próximos estrenos', ruta: RUTA_PELICULAS },
    ],
  },
]
