import imagenCineAtlasMonteagudo from '../assets/imagenes/sucursales/cine-atlas-monteagudo.jpg'
import imagenCineAtlasVia24 from '../assets/imagenes/sucursales/cine-atlas-via-24.jpg'
import imagenCinemacenterTucuman from '../assets/imagenes/sucursales/cinemacenter-tucuman.jpg'
import imagenSunstarCinemas from '../assets/imagenes/sucursales/sunstar-cinemas.jpg'
import imagenCinesDelSolar from '../assets/imagenes/sucursales/cines-del-solar.jpg'

export const sucursales = [
  {
    id: 'cine-atlas-monteagudo',
    nombre: 'Cine Atlas Monteagudo',
    ciudad: 'San Miguel de Tucumán',
    direccion: 'Monteagudo 250, San Miguel de Tucumán, Tucumán',
    descripcion: 'Complejo Cine Atlas ubicado en San Miguel de Tucumán.',
    imagen: imagenCineAtlasMonteagudo,
    enlaces: [
      { etiqueta: 'Sitio oficial', url: 'https://www.cineatlas.com.ar/' },
      { etiqueta: 'Instagram', url: 'https://www.instagram.com/cine.atlas/' },
    ],
    destacada: true,
  },
  {
    id: 'cine-atlas-via-24',
    nombre: 'Cine Atlas Vía 24',
    ciudad: 'San Miguel de Tucumán',
    direccion: '24 de Septiembre 757, San Miguel de Tucumán, Tucumán',
    descripcion: 'Complejo Cine Atlas ubicado en una zona céntrica de San Miguel de Tucumán.',
    imagen: imagenCineAtlasVia24,
    enlaces: [
      { etiqueta: 'Sitio oficial', url: 'https://www.cineatlas.com.ar/' },
      { etiqueta: 'Instagram', url: 'https://www.instagram.com/cine.atlas/' },
    ],
    destacada: false,
  },
  {
    id: 'cinemacenter-tucuman',
    nombre: 'Cinemacenter Tucumán',
    ciudad: 'San Miguel de Tucumán',
    direccion: 'Avenida Roca 3450, San Miguel de Tucumán, Tucumán',
    referencia: 'Hipermercado Libertad.',
    descripcion: 'Complejo Cinemacenter ubicado en la zona de Avenida Roca de San Miguel de Tucumán.',
    imagen: imagenCinemacenterTucuman,
    enlaces: [
      { etiqueta: 'Sitio oficial', url: 'https://www.cinemacenter.com.ar/' },
    ],
    destacada: true,
  },
  {
    id: 'sunstar-cinemas',
    nombre: 'Sunstar Cinemas',
    ciudad: 'Yerba Buena',
    direccion: 'Avenida Fermín Cariola 42, Yerba Buena, Tucumán',
    referencia: 'Portal de Tucumán Shopping.',
    descripcion: 'Complejo Sunstar Cinemas ubicado en Yerba Buena.',
    imagen: imagenSunstarCinemas,
    enlaces: [
      { etiqueta: 'Sitio oficial', url: 'https://www.cinesunstar.com/' },
    ],
    destacada: true,
  },
  {
    id: 'cines-del-solar',
    nombre: 'Cines del Solar',
    ciudad: 'Yerba Buena',
    direccion: 'Avenida Aconquija 1300, Yerba Buena, Tucumán',
    referencia: 'Shopping Solar del Cerro.',
    descripcion: 'Complejo Cines del Solar ubicado en Yerba Buena.',
    imagen: imagenCinesDelSolar,
    enlaces: [
      { etiqueta: 'Sitio oficial', url: 'https://yerbabuena.tur.ar/producto/cines-del-solar/' },
      { etiqueta: 'Instagram', url: 'https://www.instagram.com/cinesdelsolar/' },
      { etiqueta: 'Facebook', url: 'https://www.facebook.com/cinesdelsolar/' },
    ],
    destacada: false,
  },
]
