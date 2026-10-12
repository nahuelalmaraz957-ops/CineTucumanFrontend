import { useState } from 'react'
import { Ratio } from 'react-bootstrap'
import Icono from '../comunes/Icono.jsx'
import { URL_EMBED_YOUTUBE, URL_MINIATURA_YOUTUBE } from '../../datos/youtube.js'
import '../../estilos/TrailerYoutube.css'

const TrailerYoutube = ({ idVideo, titulo }) => {
  const [reproduciendo, setReproduciendo] = useState(false)

  return (
    <Ratio aspectRatio="16x9">
      {reproduciendo ? (
        <iframe
          src={`${URL_EMBED_YOUTUBE}/${idVideo}?autoplay=1`}
          title={`Tráiler oficial de ${titulo}`}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="trailer-fachada" onClick={() => setReproduciendo(true)}>
          <img src={`${URL_MINIATURA_YOUTUBE}/${idVideo}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="trailer-fachada-boton">
            <Icono nombre="reproducir" tamano={22} /> Reproducir tráiler
          </span>
        </button>
      )}
    </Ratio>
  )
}

export default TrailerYoutube
