import { RUTA_BUSCADOR, RUTA_CANDYBAR, RUTA_INICIAR_SESION, RUTA_INICIO, RUTA_PELICULAS } from './rutas.js'

export const enlacesNavbar = [
  { etiqueta: 'Inicio', ruta: RUTA_INICIO },
  { etiqueta: 'Películas', ruta: RUTA_PELICULAS },
  { etiqueta: 'Candy Bar', ruta: RUTA_CANDYBAR },
  { etiqueta: 'Iniciar sesión', ruta: RUTA_INICIAR_SESION },
]

export const accionesNavbar = [
  { etiqueta: 'Comprar entradas', esCompra: true, variante: 'marca', icono: 'entrada' },
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
