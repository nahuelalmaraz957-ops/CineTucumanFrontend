import axios from 'axios'

const URL_BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

const clienteBackend = axios.create({
  baseURL: URL_BACKEND,
  timeout: 10000,
})

export default clienteBackend
