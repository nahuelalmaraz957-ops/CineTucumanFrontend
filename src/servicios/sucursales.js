import clienteBackend from './backend.js'
import { sucursales } from '../datos/sucursales.js'

export const obtenerSucursales = () => sucursales

export const obtenerSucursalesDestacadas = () => sucursales.filter((sucursal) => sucursal.destacada)

const ETIQUETAS_ENLACE = {
  sitio: 'Sitio oficial',
  instagram: 'Instagram',
  facebook: 'Facebook',
}

const ORDEN_ENLACES = ['sitio', 'instagram', 'facebook']

const adaptarSucursal = (sucursal) => ({
  id: sucursal.slug,
  sucursalId: sucursal.id,
  nombre: sucursal.nombre,
  ciudad: sucursal.ciudad,
  direccion: `${sucursal.direccion}, ${sucursal.ciudad}, ${sucursal.provincia}`,
  descripcion: sucursal.descripcion ?? undefined,
  imagen: sucursal.imagenUrl,
  destacada: sucursal.destacada,
  enlaces: [...sucursal.enlaces]
    .sort((primero, segundo) => ORDEN_ENLACES.indexOf(primero.tipo) - ORDEN_ENLACES.indexOf(segundo.tipo))
    .map((enlace) => ({ etiqueta: ETIQUETAS_ENLACE[enlace.tipo] ?? enlace.tipo, url: enlace.url })),
})

export const pedirSucursales = async (signal) => {
  const { data } = await clienteBackend.get('/sucursales', { signal })

  return data.map(adaptarSucursal)
}
