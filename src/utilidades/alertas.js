import Swal from 'sweetalert2'

const OPCIONES_BASE = {
  background: 'var(--bs-secondary-bg)',
  color: 'var(--bs-body-color)',
  confirmButtonColor: 'var(--bs-primary)',
  cancelButtonColor: 'var(--bs-gray-600)',
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
    text: 'Creá un archivo .env con VITE_API_URL, VITE_API_KEY y VITE_IMAGES_URL. El README explica cómo.',
  })
