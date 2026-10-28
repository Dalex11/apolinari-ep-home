# APOLINARI EP · Sitio web

Sitio estático (HTML + CSS + JS, sin compilación) para GitHub Pages.
URL: https://apolinari-ep.github.io/home/

## Publicar
1. Sube **todo el contenido de esta carpeta** (no la carpeta en sí) a la raíz del repositorio `apolinari-ep/home`, incluido el archivo oculto `.nojekyll`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. En 1–2 minutos estará en https://apolinari-ep.github.io/home/

> Si algún día cambias el nombre del repositorio, actualiza `/home/` en `404.html` (atributo `data-root` y rutas) y la URL en `assets/js/data.js`, `sitemap.xml` y `robots.txt`.

## Editar contenido
Casi todo se edita en **`assets/js/data.js`**: canciones, enlaces, historias, curiosidades, ficha técnica, créditos, artistas, equipo, shows y merch.
Los textos de la interfaz y las preguntas frecuentes están en `assets/js/i18n.js`.

- **Capítulos 6 y 7:** cuando salgan, completa `title`, `duration`, `release`, `genre` y los enlaces (`spotify`, `spotifyId`, `apple`, `youtube`, `youtubeId`). Al tener enlace de Spotify dejan de mostrarse como bloqueados.
- **Nueva página de canción:** copia `cancion/cache.html`, cámbiale el nombre y el `data-id` del `<body>`.
- **Adelantos de audio:** ver `assets/audio/previews/LEEME.txt`.

## Estructura
- `index.html`, `canciones.html`, `la-serie.html`, `artistas.html`, `equipo.html`, `prensa.html`, `ayuda.html`
- `cancion/`, `artista/`, `equipo/`: páginas individuales
- `aviso-legal.html`, `privacidad.html`, `terminos.html`, `cookies.html`, `404.html`
- `assets/`: estilos, scripts, fuentes (alojadas localmente), imágenes y kit de prensa

Librerías incluidas: GSAP + ScrollTrigger (licencia estándar gratuita de GSAP) y Lenis (MIT). Fuentes de Google Fonts con licencia OFL, alojadas en el sitio.
