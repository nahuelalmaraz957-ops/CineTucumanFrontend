import { productosCandyBar } from '../datos/candybar.js'

export const obtenerProductos = () => productosCandyBar

export const obtenerProducto = (idProducto) => productosCandyBar.find((producto) => producto.id === idProducto)
