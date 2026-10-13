# Cine Tucumán

## Integrantes

- Molina Lazaro
- Lezana Juan Ignacio
- Almaraz Sintora Nahuel
- Decima Juan Cruz

**Materia:** Programación IV

**Año:** 2026

**Sitio publicado:** https://cine-tucuman-frontend.vercel.app

## Descripción del proyecto

Cine Tucumán es una plataforma web para la gestión y compra de entradas de cine, desarrollada como proyecto académico. La visión completa del proyecto es reproducir la experiencia de una persona que quiere ir al cine: consultar la cartelera y elegir una película, seleccionar una función y las butacas, sumar productos de Candy Bar y finalizar la compra.

El proyecto está ambientado en Tucumán, Argentina, con sucursales y películas de referencia para que la experiencia se sienta cercana y realista, tomando como inspiración las plataformas actuales de venta de entradas.

Este repositorio es el frontend hecho con React. Retoma el primer trabajo de la materia, desarrollado con HTML, CSS y JavaScript, y lo reorganiza en componentes.

## Estado actual

Hoy el sitio permite:

- **Inicio:** portada con la película principal, películas destacadas, próximos estrenos y cines de Tucumán.
- **Cartelera** (`/peliculas`): 20 películas, con buscador por título (sin importar acentos ni mayúsculas) y filtro por estado (en cartelera o próximamente).
- **Ficha de cada película** (`/peliculas/:idPelicula`): sinopsis, ficha técnica, reparto y tráiler, que se carga recién al tocar «Reproducir tráiler». Donde falta un dato se muestra «Por confirmar».
- **Funciones** (`/funciones?pelicula=…`): los próximos 7 días, con filtros por fecha y formato. Las funciones que ya empezaron se marcan y no se pueden comprar.
- **Butacas** (`/butacas/:idFuncion`): mapa de la sala, hasta 6 butacas por compra, butacas accesibles y confirmación antes de salir si ya se eligieron.
- **Candy Bar** (`/candybar`): paso opcional entre las butacas y el carrito, con hasta 10 unidades por producto.
- **Carrito** (`/carrito`): entradas y productos, que se conservan al recargar porque se guardan en el navegador.
- **Checkout** (`/checkout`) y **confirmación** (`/confirmacion`): resumen de la compra y pago con una tarjeta simulada, con validaciones. Al confirmar se vacía el carrito y se muestra el número de orden. No se cobra nada ni se generan entradas reales.
- **Sucursales** (`/sucursales`): dirección, cómo llegar con el mapa y enlaces oficiales de cada cine.
- **Más películas del mundo** (`/descubrir`): películas en cartelera en Argentina y búsqueda por título, con datos de la API pública de TMDB.
- **Inicio de sesión y registro:** formularios con validaciones. Todavía no inician una sesión real: avisan que eso llegará con el servidor.
- **«Comprar entradas»** lleva a las funciones de la película elegida o, si no hay ninguna, muestra un aviso que lo explica.

## Próximas etapas

Estas partes necesitan un servidor y una base de datos, y llegan con la API propia del proyecto:

- Pago real y orden guardada en el servidor (hoy el checkout es una simulación).
- Sesión real de usuario.
- Historial de compras y «mis entradas».
- Perfil del usuario.

## Cómo ejecutarlo

Se necesita **Node.js 22** y npm.

```
git clone https://github.com/nahuelalmaraz957-ops/CineTucumanFrontend.git
cd CineTucumanFrontend
npm install
npm run dev
```

La página «Más películas del mundo» necesita una clave gratuita de TMDB, que se carga en un archivo `.env` (ver «Variables de entorno»). Sin ella el sitio funciona igual, y esa página avisa que falta configurar la API.

| Comando | Para qué |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación para producción |
| `npm run preview` | Probar la compilación |
| `npm run lint` | Revisión del código con ESLint |

Después de cada `git pull` que cambie `package.json`, hay que volver a correr `npm install`.

## Variables de entorno

Se guardan en un archivo `.env` en la raíz del proyecto, que hay que crear a mano con este contenido (reemplazá `tu_clave_de_tmdb` por tu clave, que se obtiene gratis en la sección API de la configuración de la cuenta de themoviedb.org):

```
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=tu_clave_de_tmdb
VITE_IMAGES_URL=https://image.tmdb.org/t/p/w342
```

| Variable | Qué guarda |
|---|---|
| `VITE_API_URL` | La dirección de la API de TMDB |
| `VITE_API_KEY` | La clave de la API |
| `VITE_IMAGES_URL` | La dirección de las imágenes de TMDB |

- El archivo `.env` **no se sube a GitHub**: figura en `.gitignore`. El repositorio no incluye ningún archivo con claves, ni siquiera de ejemplo.
- En Vercel se cargan en **Settings → Environment Variables** y hay que volver a desplegar, porque Vite las incorpora al compilar.
- Como la API se consulta desde el navegador, la clave queda visible en el código publicado. Con el servidor propio, la clave pasará a vivir en el servidor.

## Tecnologías utilizadas

- React 19 y Vite.
- React Bootstrap y Bootstrap 5.3 para los componentes y los estilos.
- React Router para la navegación entre páginas.
- Axios para las peticiones a la API y SweetAlert2 para los avisos de error.
- La API pública de TMDB (The Movie Database).
- JavaScript con módulos ES, y CSS propio solo para lo que Bootstrap no cubre.
- ESLint para el análisis del código.
- Git y GitHub para el control de versiones, y Vercel para el despliegue.

## Estructura del proyecto

```
src/
  assets/       Imágenes: pósters, sucursales y la mascota
  components/   Piezas reutilizables, agrupadas por tema
  datos/        Información fija: películas, funciones, sucursales, rutas y textos
  estilos/      CSS propio
  hooks/        Hooks propios (useFormulario)
  pages/        Una página por ruta
  servicios/    Acceso a los datos y a la API
  utilidades/   Funciones puras: fechas, formatos, carrito y validaciones
```

Las páginas piden los datos a la capa de servicios. Hoy los servicios leen archivos locales o la API de TMDB; cuando exista la API propia, solo cambian esas funciones.

## Estrategias de SEO

- **Título y descripción únicos por página.** El componente `Seo` escribe `<title>` y `<meta name="description">`, y cambian al navegar. Por eso `index.html` no tiene una descripción fija: quedaría duplicada.
- **Páginas que no se indexan.** El carrito, el checkout, la confirmación, las butacas, el inicio de sesión, el registro, las páginas «Próximamente» y la 404 llevan `noindex`.
- **`robots.txt` y `sitemap.xml`.** El sitemap lista las páginas públicas y las 20 fichas de películas, con la dirección del sitio publicado.
- **Vista previa al compartir.** `index.html` tiene etiquetas Open Graph con título, descripción e imagen, y el color del sitio (`theme-color`).
- **HTML semántico.** Se usan `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` y `<article>`, con una jerarquía de títulos sin saltos.
- **Texto alternativo en las imágenes**, **diseño adaptable** e **idioma declarado** (`<html lang="es">`).
- **Direcciones limpias.** Las páginas se abren sin `.html`, y `vercel.json` hace que recargar una página interna no dé error.

## Accesibilidad

- Etiquetas en todos los campos, errores asociados con `aria-describedby` y anunciados a los lectores de pantalla.
- Navegación completa con teclado y foco en el primer error de los formularios.
- Nombres accesibles que incluyen el texto visible, y avisos que indican cuándo un enlace abre una pestaña nueva.
- Revisado con axe-core: ninguna falla en las pantallas del sitio.

## Decisiones y límites conocidos

- **Sin servidor todavía:** el inicio de sesión y el registro solo validan, y el pago del checkout es una simulación: no se cobra nada ni se guardan datos de tarjeta.
- **Datos de ejemplo:** solo Spider-Man tiene funciones, el Candy Bar tiene un producto y las butacas ocupadas se simulan según el estado de cada función.
- **La clave de TMDB** queda visible en el navegador mientras la API se consulte desde el frontend.
- **El reproductor de YouTube** escribe sus propios avisos en la consola al reproducir el tráiler; no son del sitio.

## Objetivo del proyecto

El objetivo principal de Cine Tucumán es desarrollar una experiencia digital completa relacionada con la compra de entradas de cine, poniendo en práctica los conocimientos adquiridos durante la materia Programación IV. Además de cumplir con los objetivos académicos, buscamos que el proyecto tenga una experiencia de usuario clara, ordenada y cercana a la de una plataforma real, e incluya buenas prácticas de SEO y accesibilidad desde el desarrollo.
