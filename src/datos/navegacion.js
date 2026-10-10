import {
  RUTA_BUSCADOR,
  RUTA_CANDYBAR,
  RUTA_CARRITO,
  RUTA_INICIAR_SESION,
  RUTA_INICIO,
  RUTA_PELICULAS,
  RUTA_SUCURSALES,
} from './rutas.js'

export const enlacesNavbar = [
  { etiqueta: 'Inicio', ruta: RUTA_INICIO },
  { etiqueta: 'Películas', ruta: RUTA_PELICULAS },
  { etiqueta: 'Candy Bar', ruta: RUTA_CANDYBAR },
  { etiqueta: 'Sucursales', ruta: RUTA_SUCURSALES },
]

export const accionesNavbar = [
  {
    etiqueta: 'Iniciar sesión',
    ruta: RUTA_INICIAR_SESION,
    variante: 'outline-light',
    tamano: 'sm',
    icono: 'usuario',
    marcaPaginaActual: true,
  },
  {
    etiqueta: 'Buscar',
    ruta: RUTA_BUSCADOR,
    variante: 'outline-light',
    tamano: 'sm',
    icono: 'lupa',
    etiquetaAccesible: 'Buscar película',
  },
  {
    etiqueta: 'Carrito',
    ruta: RUTA_CARRITO,
    variante: 'outline-light',
    tamano: 'sm',
    icono: 'carrito',
    esCarrito: true,
  },
  { etiqueta: 'Comprar entradas', esCompra: true, variante: 'marca', icono: 'entrada' },
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
