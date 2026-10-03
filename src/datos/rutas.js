export const RUTA_INICIO = '/'
export const RUTA_PELICULAS = '/peliculas'
export const RUTA_CARRITO = '/carrito'
export const RUTA_BUTACAS = '/butacas'

export const rutaButacas = (idFuncion) => `${RUTA_BUTACAS}/${idFuncion}`
export const HASH_BUSCADOR = '#buscador'
export const RUTA_BUSCADOR = `${RUTA_PELICULAS}${HASH_BUSCADOR}`
