import GrillaPeliculas from './GrillaPeliculas.jsx'

const COLUMNAS_LISTADO = { xs: 1, sm: 2, md: 3, lg: 4 }

const SeccionPeliculas = ({ idTitulo, titulo, peliculas }) => {
  if (peliculas.length === 0) return null

  return (
    <section className="mb-5" aria-labelledby={idTitulo}>
      <h2 id={idTitulo} className="mb-3">
        {titulo}
      </h2>
      <GrillaPeliculas peliculas={peliculas} columnas={COLUMNAS_LISTADO} tieneBoton={false} />
    </section>
  )
}

export default SeccionPeliculas
