export const FILAS = ['A', 'B', 'C', 'D', 'E', 'F']
export const COLUMNAS = 8
export const MAXIMO_BUTACAS = 6
export const BUTACAS_ACCESIBLES = ['A1', 'A8', 'B1', 'B8']

export const BUTACAS = FILAS.flatMap((fila) => Array.from({ length: COLUMNAS }, (_, indice) => `${fila}${indice + 1}`))
