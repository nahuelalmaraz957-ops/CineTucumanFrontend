import posterSpiderManUnNuevoDia from '../assets/imagenes/peliculas/spider-man-un-nuevo-dia.jpg'
import posterToyStory5 from '../assets/imagenes/peliculas/toy-story-5.jpg'
import posterLaGuerraDeLosUltimos from '../assets/imagenes/peliculas/la-guerra-de-los-ultimos.jpg'
import posterYoNarciso from '../assets/imagenes/peliculas/yo-narciso.jpg'
import posterMinionsMonsters from '../assets/imagenes/peliculas/minions-monsters.jpg'
import posterLaOdisea from '../assets/imagenes/peliculas/la-odisea.jpg'
import posterPawPatrolLaDinoPelicula from '../assets/imagenes/peliculas/paw-patrol-la-dino-pelicula.jpg'
import posterLaNocheDelDemonioEstanEntreNosotros from '../assets/imagenes/peliculas/la-noche-del-demonio-estan-entre-nosotros.jpg'
import posterCoyoteVsAcme from '../assets/imagenes/peliculas/coyote-vs-acme.jpg'
import posterSoloPorUnaNoche from '../assets/imagenes/peliculas/solo-por-una-noche.jpg'
import posterHarryPotterYLaPiedraFilosofal from '../assets/imagenes/peliculas/harry-potter-y-la-piedra-filosofal.jpg'
import posterPepitaLaPistolera from '../assets/imagenes/peliculas/pepita-la-pistolera.jpg'
import posterHechizoDeAmor from '../assets/imagenes/peliculas/hechizo-de-amor.jpg'
import posterCodigoVenganza from '../assets/imagenes/peliculas/codigo-venganza.jpg'
import posterEsaCosaConAlas from '../assets/imagenes/peliculas/esa-cosa-con-alas.jpg'
import posterOasisDontLookBackInAnger from '../assets/imagenes/peliculas/oasis-dont-look-back-in-anger.jpg'
import posterTadeoElExplorador from '../assets/imagenes/peliculas/tadeo-el-explorador.jpg'
import posterBajoTusPies from '../assets/imagenes/peliculas/bajo-tus-pies.jpg'
import posterRomeoYOfelia from '../assets/imagenes/peliculas/romeo-y-ofelia.jpg'
import posterElHeladero from '../assets/imagenes/peliculas/el-heladero.jpg'

export const ID_PELICULA_PORTADA = 'spider-man-un-nuevo-dia'

export const peliculas = [
  {
    id: 'spider-man-un-nuevo-dia',
    titulo: 'Spider-Man: Un nuevo día',
    poster: posterSpiderManUnNuevoDia,
    estado: 'en-cartelera',
    destacada: true,
    generos: ['Acción', 'Aventuras', 'Ciencia ficción'],
    duracionMinutos: 150,
    clasificacion: 'Supervisión parental sugerida',
    formato: '2D',
    fechaEstreno: '2026-07-30',
  },
  {
    id: 'toy-story-5',
    titulo: 'Toy Story 5',
    poster: posterToyStory5,
    estado: 'en-cartelera',
    destacada: true,
    generos: ['Animación'],
    duracionMinutos: 107,
    clasificacion: 'ATP',
    formato: '2D',
  },
  {
    id: 'la-guerra-de-los-ultimos',
    titulo: 'La guerra de los últimos',
    poster: posterLaGuerraDeLosUltimos,
    estado: 'en-cartelera',
    destacada: true,
    generos: ['Ciencia ficción', 'Thriller'],
    duracionMinutos: 118,
    clasificacion: 'Mayores de 13 años',
    formato: '2D',
  },
  {
    id: 'yo-narciso',
    titulo: 'Yo, Narciso',
    poster: posterYoNarciso,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'minions-monsters',
    titulo: 'Minions & Monsters',
    poster: posterMinionsMonsters,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'la-odisea',
    titulo: 'La Odisea',
    poster: posterLaOdisea,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'paw-patrol-la-dino-pelicula',
    titulo: 'Paw Patrol: La Dino Película',
    poster: posterPawPatrolLaDinoPelicula,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'la-noche-del-demonio-estan-entre-nosotros',
    titulo: 'La noche del demonio: Están entre nosotros',
    poster: posterLaNocheDelDemonioEstanEntreNosotros,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'coyote-vs-acme',
    titulo: 'Coyote vs. ACME',
    poster: posterCoyoteVsAcme,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'solo-por-una-noche',
    titulo: 'Solo por una noche',
    poster: posterSoloPorUnaNoche,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'harry-potter-y-la-piedra-filosofal',
    titulo: 'Harry Potter y la piedra filosofal',
    poster: posterHarryPotterYLaPiedraFilosofal,
    estado: 'en-cartelera',
    destacada: false,
  },
  {
    id: 'pepita-la-pistolera',
    titulo: 'Pepita, la pistolera',
    poster: posterPepitaLaPistolera,
    estado: 'proximamente',
    destacada: false,
    fechaEstreno: '2026-09-03',
  },
  {
    id: 'hechizo-de-amor',
    titulo: 'Hechizo de Amor: La magia continúa',
    poster: posterHechizoDeAmor,
    estado: 'proximamente',
    destacada: false,
    fechaEstreno: '2026-09-10',
  },
  {
    id: 'codigo-venganza',
    titulo: 'Código: Venganza',
    poster: posterCodigoVenganza,
    estado: 'proximamente',
    destacada: false,
    fechaEstreno: '2026-09-10',
  },
  {
    id: 'esa-cosa-con-alas',
    titulo: 'Esa cosa con alas',
    poster: posterEsaCosaConAlas,
    estado: 'proximamente',
    destacada: false,
  },
  {
    id: 'oasis-dont-look-back-in-anger',
    titulo: "Oasis: Don't Look Back in Anger",
    poster: posterOasisDontLookBackInAnger,
    estado: 'proximamente',
    destacada: false,
  },
  {
    id: 'tadeo-el-explorador',
    titulo: 'Tadeo El Explorador y la Lámpara Maravillosa',
    poster: posterTadeoElExplorador,
    estado: 'proximamente',
    destacada: false,
  },
  {
    id: 'bajo-tus-pies',
    titulo: 'Bajo tus pies',
    poster: posterBajoTusPies,
    estado: 'proximamente',
    destacada: false,
  },
  {
    id: 'romeo-y-ofelia',
    titulo: 'Romeo y Ofelia',
    poster: posterRomeoYOfelia,
    estado: 'proximamente',
    destacada: false,
  },
  {
    id: 'el-heladero',
    titulo: 'El heladero',
    poster: posterElHeladero,
    estado: 'proximamente',
    destacada: false,
  },
]
