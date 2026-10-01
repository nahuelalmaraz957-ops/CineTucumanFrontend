# Cine Tucumán

## Integrantes

- Molina Lazaro
- Lezana Juan Ignacio
- Almaraz Sintora Nahuel
- Decima Juan Cruz

**Materia:** Programación IV

**Año:** 2026

## Descripción del proyecto

Cine Tucumán es una plataforma web para la gestión y compra de entradas de cine, desarrollada como proyecto académico. La visión completa del proyecto es reproducir la experiencia de una persona que quiere ir al cine: consultar la cartelera y elegir una película, seleccionar una función y las butacas, sumar productos de Candy Bar y finalizar la compra.

El proyecto está ambientado en Tucumán, Argentina, con sucursales y películas de referencia para que la experiencia se sienta cercana y realista, tomando como inspiración las plataformas actuales de venta de entradas.

Este repositorio es el frontend hecho con React. Retoma el primer trabajo de la materia, desarrollado con HTML, CSS y JavaScript, y lo reorganiza en componentes.

## Estado actual

Hoy el sitio permite:

- Ver la página de inicio, con la portada, las películas destacadas, los próximos estrenos y los cines de Tucumán.
- Consultar la cartelera en `/peliculas`, buscar películas por título y filtrarlas por estado (en cartelera o próximamente).
- Navegar con una barra de navegación y un pie de página comunes a todas las páginas.

Las películas que todavía no tienen sus datos completos muestran "Por confirmar".

## Visión completa y próximas etapas

La compra de entradas es el objetivo final del proyecto. Las etapas que todavía no forman parte de este repositorio son:

- Página de detalle de cada película.
- Página de sucursales.
- Selección de función y de butacas.
- Candy Bar.
- Carrito de compra y finalización de la compra.
- Registro e inicio de sesión.
- Historial de compras y entradas.

## Tecnologías utilizadas

- React 19 y Vite.
- React Bootstrap y Bootstrap 5.3 para los componentes y los estilos.
- React Router para la navegación entre páginas.
- JavaScript con módulos ES, y CSS propio solo para lo que Bootstrap no cubre.
- ESLint para el análisis del código.
- Git y GitHub para el control de versiones.
- Vercel para el despliegue del sitio.

## Conceptos de la materia aplicados

- Componentes y props, por ejemplo `TarjetaPelicula`, `TarjetaSucursal` y `Seo`.
- Listas recorridas con `map()` a partir de los datos.
- Estado con `useState` en el buscador y el filtro de la cartelera.
- Enrutamiento con React Router.
- Componentes de React Bootstrap.

## Estrategias de SEO

Aunque el proyecto es académico, aplicamos criterios de posicionamiento en buscadores (SEO on-page). Esto es lo que el sitio hace hoy:

- **Título y descripción únicos por página.** El componente `Seo` recibe el título y la descripción como props y los escribe como `<title>` y `<meta name="description">`. Cambian al navegar: por ejemplo, la cartelera se titula "Cartelera de cine en Tucumán | Películas".
- **HTML semántico.** Se usan `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` y `<article>` en lugar de bloques genéricos, para que los buscadores entiendan la jerarquía del contenido.
- **Texto alternativo en las imágenes.** Los pósters y las fotos de las sucursales tienen su atributo `alt`.
- **Diseño adaptable.** La etiqueta `viewport` y la grilla de Bootstrap hacen que el sitio se vea bien en celulares, algo que los buscadores tienen en cuenta.
- **Direcciones limpias.** Las páginas se abren en `/` y `/peliculas`, sin `.html`. El archivo `vercel.json` redirige todas las direcciones a `index.html` para que recargar una página interna no dé error.
- **Idioma declarado.** El documento usa `<html lang="es">`.

## Objetivo del proyecto

El objetivo principal de Cine Tucumán es desarrollar una experiencia digital completa relacionada con la compra de entradas de cine, poniendo en práctica los conocimientos adquiridos durante la materia Programación IV. Además de cumplir con los objetivos académicos, buscamos que el proyecto tenga una experiencia de usuario clara, ordenada y cercana a la de una plataforma real, e incluya buenas prácticas de SEO desde el desarrollo.
