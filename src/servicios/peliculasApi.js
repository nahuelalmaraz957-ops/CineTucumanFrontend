import clienteApi, { obtenerUrlImagen } from './api.js'

const MAXIMO_DE_PAGINAS = 500

const adaptarPelicula = (pelicula) => ({
  id: pelicula.id,
  titulo: pelicula.title,
  sinopsis: pelicula.overview,
  fecha: pelicula.release_date,
  puntaje: pelicula.vote_average,
  poster: pelicula.poster_path ? obtenerUrlImagen(pelicula.poster_path) : null,
})

export const buscarPeliculas = async ({ termino, pagina, signal }) => {
  const respuesta = termino
    ? await clienteApi.get('/search/movie', { params: { query: termino, page: pagina }, signal })
    : await clienteApi.get('/movie/now_playing', { params: { region: 'AR', page: pagina }, signal })

  return {
    peliculas: respuesta.data.results.map(adaptarPelicula),
    totalPaginas: Math.min(respuesta.data.total_pages, MAXIMO_DE_PAGINAS),
  }
}
