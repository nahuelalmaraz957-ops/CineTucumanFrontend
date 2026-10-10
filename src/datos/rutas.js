export const RUTA_INICIO = '/'
export const RUTA_PELICULAS = '/peliculas'
export const RUTA_FUNCIONES = '/funciones'
export const RUTA_CARRITO = '/carrito'
export const RUTA_BUTACAS = '/butacas'
export const RUTA_CANDYBAR = '/candybar'
export const RUTA_INICIAR_SESION = '/iniciar-sesion'
export const RUTA_RECUPERAR_CONTRASENA = '/recuperar-contrasena'
export const RUTA_REGISTRO = '/registro'
export const RUTA_TERMINOS = '/terminos'
export const RUTA_SUCURSALES = '/sucursales'

export const rutaFunciones = (idPelicula) => `${RUTA_FUNCIONES}?pelicula=${idPelicula}`

export const rutaDetalle = (idPelicula) => `${RUTA_PELICULAS}/${idPelicula}`

export const rutaButacas = (idFuncion) => `${RUTA_BUTACAS}/${idFuncion}`
export const HASH_BUSCADOR = '#buscador'
export const RUTA_BUSCADOR = `${RUTA_PELICULAS}${HASH_BUSCADOR}`
