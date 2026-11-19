import clienteBackend from './backend.js'
import { productosCandyBar } from '../datos/candybar.js'

export const obtenerProductos = () => productosCandyBar

const adaptarProducto = (producto) => ({
  id: producto.slug,
  productoId: producto.id,
  nombre: producto.nombre,
  descripcion: producto.descripcion ?? undefined,
  categoria: producto.categoria,
  precio: producto.precio,
})

export const pedirProductos = async (signal) => {
  const { data } = await clienteBackend.get('/productos', { params: { activo: true }, signal })

  return data.map(adaptarProducto)
}
