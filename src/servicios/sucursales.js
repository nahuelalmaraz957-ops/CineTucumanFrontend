import { sucursales } from '../datos/sucursales.js'

export const obtenerSucursales = () => sucursales

export const obtenerSucursalesDestacadas = () => sucursales.filter((sucursal) => sucursal.destacada)
