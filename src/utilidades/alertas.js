import Swal from 'sweetalert2'

const OPCIONES_BASE = {
  background: '#241619',
  color: '#F8F3E6',
  confirmButtonColor: '#C43E2A',
  cancelButtonColor: '#6c757d',
}

export const avisarErrorDeApi = async (mensaje) => {
  const resultado = await Swal.fire({
    ...OPCIONES_BASE,
    icon: 'error',
    title: 'No pudimos cargar las películas',
    text: mensaje,
    showCancelButton: true,
    confirmButtonText: 'Reintentar',
    cancelButtonText: 'Cerrar',
  })

  return resultado.isConfirmed
}

export const avisarFaltaConfiguracion = () =>
  Swal.fire({
    ...OPCIONES_BASE,
    icon: 'warning',
    title: 'Falta configurar la API',
    text: 'Creá un archivo .env a partir de .env.example y completá VITE_API_KEY.',
  })
