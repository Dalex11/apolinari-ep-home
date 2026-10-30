# APOLINARI EP · Sitio web

Sitio estático (HTML + CSS + JS, sin compilación) para GitHub Pages.
URL: https://apolinari.com/

## Publicar
1. Sube **todo el contenido de esta carpeta** (no la carpeta en sí) a la raíz del repositorio `apolinari-ep/home`, incluido el archivo oculto `.nojekyll`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. En **Settings → Pages → Custom domain** escribe `apolinari.com`, guarda y, cuando el DNS valide, activa **Enforce HTTPS**. El archivo `CNAME` de esta carpeta ya trae el dominio.
4. En el proveedor del dominio crea estos registros DNS:
   - 4 registros `A` para `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro `CNAME` para `www` → `apolinari-ep.github.io`

> El sitio vive en la raíz del dominio. Si algún día cambia el dominio, actualiza `CNAME`, la URL en `assets/js/data.js`, `sitemap.xml`, `robots.txt` y las etiquetas `canonical`/`og:` de cada `.html`.

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
