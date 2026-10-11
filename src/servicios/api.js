import axios from 'axios'

const URL_API = import.meta.env.VITE_API_URL
const CLAVE_API = import.meta.env.VITE_API_KEY
const URL_IMAGENES = import.meta.env.VITE_IMAGES_URL

export const apiConfigurada = Boolean(URL_API && CLAVE_API && URL_IMAGENES)

export const obtenerUrlImagen = (ruta) => `${URL_IMAGENES}${ruta}`

const clienteApi = axios.create({
  baseURL: URL_API,
  timeout: 10000,
  params: { api_key: CLAVE_API, language: 'es-AR' },
})

export default clienteApi
