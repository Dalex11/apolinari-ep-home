/* Textos de la interfaz (ES / EN) */
window.UI = {
  es: {
    skip: 'Saltar al contenido',
    nav: { home: 'Inicio', songs: 'Canciones', series: 'La Serie', artists: 'Artistas', team: 'Equipo', press: 'Prensa', help: 'Ayuda' },
    menu: 'Menú', close: 'Cerrar', open: 'Abrir',
    theme: { toDark: 'Cambiar a tema oscuro', toLight: 'Cambiar a tema claro', dark: 'Tema oscuro activado', light: 'Tema claro activado' },
    lang: { switch: 'Switch to English', changed: 'Idioma: Español' },
    sound: { on: 'Sonido activado', off: 'Sonido silenciado', mute: 'Silenciar sonido (M)', unmute: 'Activar sonido (M)', first: 'El sitio tiene sonido. Pulsa M o el botón del parlante para silenciarlo.' },
    search: { open: 'Buscar o ir a… (Ctrl + K)', placeholder: 'Busca una canción, artista o página…', empty: 'No encontramos “{q}”. Prueba con el nombre de una canción, un artista o “ayuda”.', hint: '↑↓ para moverte · Enter para abrir · Esc para cerrar', groupPages: 'Páginas', groupSongs: 'Canciones', groupPeople: 'Artistas y equipo', groupActions: 'Acciones' },
    actions: { theme: 'Cambiar tema claro / oscuro', lang: 'Cambiar idioma a inglés', sound: 'Activar / silenciar sonido', cookies: 'Configurar cookies', shortcuts: 'Ver atajos de teclado' },
    shortcuts: { title: 'Atajos de teclado', items: [['Ctrl / ⌘ + K', 'Buscar o ir a cualquier página'], ['/', 'Buscar'], ['M', 'Silenciar / activar sonido'], ['T', 'Cambiar tema'], ['L', 'Cambiar idioma'], ['← →', 'Capítulo anterior / siguiente (en una canción)'], ['Esc', 'Cerrar ventanas'], ['?', 'Ver esta ayuda']] },
    loading: 'Cargando capítulo',
    listen: 'Escuchar', listenOn: 'Escuchar en', watch: 'Ver video', listenEP: 'Escuchar el EP', watchSeries: 'Ver la serie',
    chapter: 'Capítulo', chapters: 'capítulos', upcoming: 'Próximamente', soon: 'Muy pronto', locked: 'Capítulo bloqueado',
    countdown: { d: 'días', h: 'horas', m: 'min', s: 'seg', done: '¡Ya está aquí!', doneText: 'El capítulo ya se estrenó. Muy pronto actualizamos los enlaces.' },
    tbd: 'Por confirmar',
    seeStory: 'Ver historia', seeChapter: 'Ver capítulo', seeArtist: 'Ver artista', seeProfile: 'Ver perfil', seeAll: 'Ver todo',
    back: 'Volver', prev: 'Anterior', next: 'Siguiente', share: 'Compartir', copied: 'Enlace copiado al portapapeles', copyFail: 'No se pudo copiar. Copia el enlace desde la barra del navegador.',
    copyEmail: 'Copiar correo', emailCopied: 'Correo copiado',
    feat: 'con',
    hero: {
      kicker: 'EP · 7 capítulos · ℗ MG Music',
      line1: 'Este proyecto caleño', line2: 'busca contar Colombia en', line3: 'sonido e imagen',
      next: 'Próximo capítulo en', scroll: 'Desliza', birdHint: 'Tócame'
    },
    home: {
      descTitle: 'Descripción', visualTitle: 'Componente visual', inspTitle: 'Inspiración',
      inspIntro: 'El nombre Apolinari surge de una doble inspiración',
      bird: 'El ave', god: 'El dios',
      tracklist: 'Tracklist', tracklistSub: 'Siete capítulos, una historia. Pasa el cursor para escuchar.',
      artistsTitle: 'Los artistas', artistsSub: 'Dos productores de Cali, un mismo territorio sonoro.',
      galleryTitle: 'Registro fotográfico', gallerySub: 'Detrás de cámaras del rodaje de la serie.',
      seriesTitle: 'La Serie', seriesText: 'Cada lanzamiento llega con un video. Juntos forman una historia continua, capítulo a capítulo.',
      teamTitle: 'Equipo de producción',
      showsTitle: 'Shows y merch', showsText: 'Estamos preparando fechas en vivo y mercancía oficial. Lo anunciaremos aquí y en redes.',
      followIg: 'Seguir en Instagram'
    },
    songs: {
      title: 'Canciones', intro: 'Escucha los capítulos de Apolinari en tu plataforma favorita. Cada canción tiene su propia historia.',
      epTitle: 'El EP completo', epText: 'Toda la serie en una sola lista de reproducción.',
      playlistSpotify: 'Playlist en Spotify', playlistYoutube: 'Playlist en YouTube',
      preview: 'Escuchar adelanto', stopPreview: 'Detener adelanto'
    },
    song: {
      story: 'Historia', storyEmpty: 'Muy pronto contaremos la historia detrás de este capítulo.',
      trivia: 'Curiosidades', triviaEmpty: 'Las curiosidades de este capítulo llegan pronto.',
      sheet: 'Ficha técnica', videoCredits: 'Créditos del video', inSeries: 'En La Serie', inSeriesText: 'Este capítulo hace parte de una historia continua.',
      player: 'Reproductor', fields: {
        artists: 'Artistas', duration: 'Duración', release: 'Estreno', genre: 'Género', composers: 'Compositores', producers: 'Productores', mixing: 'Mezcla', mastering: 'Master', bpm: 'BPM', key: 'Tonalidad', isrc: 'ISRC', label: 'Sello', recorded: 'Lugar de grabación',
        director: 'Dirección', camera: 'Cámara', production: 'Producción', locations: 'Locaciones'
      },
      allSongs: 'Todas las canciones', lockedText: 'Este capítulo aún no se ha estrenado. Vuelve cuando termine la cuenta regresiva.'
    },
    series: {
      title: 'La Serie', intro: 'Apolinari no es solo un EP: es una historia que se cuenta por capítulos. Cada video continúa donde terminó el anterior.',
      summaryEmpty: 'Resumen del capítulo próximamente.', watchAll: 'Ver todos en YouTube', progress: 'capítulos estrenados'
    },
    artists: { title: 'Artistas', intro: 'East Coast y Error 404: dos formas de narrar Cali, un mismo proyecto.', realName: 'Nombre', born: 'Nacimiento', city: 'Ciudad', role: 'Rol', bio: 'Biografía', story: 'Historia', influences: 'Influencias', music: 'Su música en Spotify', inApolinari: 'En Apolinari', achievements: 'Logros y prensa', achievementsEmpty: 'Próximamente compartiremos shows, premios y prensa.', other: 'Conoce también a', instagram: 'Instagram' },
    team: { title: 'Equipo', intro: 'Las personas y casas creativas que hicieron posible Apolinari.', groups: { label: 'Sello', visual: 'Producción visual', direction: 'Dirección' }, credits: 'Créditos en Apolinari', creditsEmpty: 'Los créditos por canción se publicarán muy pronto.', others: 'Resto del equipo' },
    press: {
      title: 'Prensa y booking', intro: 'Todo lo que necesitas para escribir sobre Apolinari o llevarlo a tu escenario.',
      kit: 'Kit de prensa', kitText: 'Dossier oficial del EP en PDF: concepto, tracklist, artistas y equipo.', photos: 'Fotos oficiales', photosText: 'Portada, pájaro sin fondo, retratos y registro fotográfico en alta.',
      download: 'Descargar', booking: 'Booking y contacto', bookingText: 'Para shows, entrevistas, colaboraciones o prensa, escríbenos. Respondemos por correo.', writeUs: 'Escribir correo', subject: 'Booking · Apolinari EP',
      shortBio: 'Bio corta', copyBio: 'Copiar bio', bioCopied: 'Bio copiada',
      bioText: 'Apolinari es el EP de East Coast x Error 404, dos artistas y productores de Cali, Colombia. Siete capítulos que fusionan reggaetón, cumbia, currulao, R&B y rock con sonidos del folclor colombiano, lanzados uno por mes con una serie audiovisual continua. ℗ MG Music.'
    },
    help: { title: 'Ayuda', intro: 'Respuestas rápidas a lo que más nos preguntan.', search: 'Buscar en la ayuda…', empty: 'No hay resultados para “{q}”. Prueba con otra palabra o escríbenos.', still: '¿No encontraste tu respuesta?', contact: 'Escríbenos al correo' },
    legal: { owner: 'Propietario del sitio', notice: 'Aviso legal', privacy: 'Tratamiento de datos', terms: 'Términos y condiciones', cookies: 'Política de cookies', cookieSettings: 'Configurar cookies', updated: 'Última actualización', esOnly: '' },
    footer: { explore: 'Explorar', music: 'Música', social: 'Redes', legal: 'Legal', made: 'Hecho en Cali, Colombia', rights: 'Todos los derechos reservados.', top: 'Volver arriba', owner: 'Sitio administrado por' },
    cookie: {
      title: 'Cookies y reproductores',
      text: 'Usamos almacenamiento local para recordar tu idioma, tema y sonido. Los reproductores de Spotify, Apple Music y YouTube instalan cookies de terceros: solo se cargan si los permites.',
      accept: 'Aceptar todo', reject: 'Solo necesarias', config: 'Configurar', save: 'Guardar preferencias',
      necessary: 'Necesarias', necessaryText: 'Recuerdan tu idioma, tema, sonido y esta decisión. Siempre activas.',
      media: 'Reproductores de terceros', mediaText: 'Spotify, Apple Music y YouTube. Permiten escuchar y ver dentro del sitio.',
      more: 'Leer la política de cookies', saved: 'Preferencias guardadas', always: 'Siempre activas'
    },
    embed: { blocked: 'Este reproductor de {p} usa cookies de terceros.', loadOnce: 'Cargar reproductor', allow: 'Permitir siempre', loading: 'Cargando reproductor…', open: 'Abrir en {p}' },
    notFound: { title: 'Error 404', sub: 'Este capítulo no existe… todavía.', text: 'Puede que el enlace esté mal escrito o que la página se haya movido. El pájaro tampoco la encuentra.', home: 'Volver al inicio', songs: 'Ver canciones', search: 'Buscar' },
    lightbox: { close: 'Cerrar (Esc)', prev: 'Foto anterior', next: 'Foto siguiente' },
    months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    egg: '¡Encontraste al Apolinari!'
  },

  en: {
    skip: 'Skip to content',
    nav: { home: 'Home', songs: 'Songs', series: 'The Series', artists: 'Artists', team: 'Crew', press: 'Press', help: 'Help' },
    menu: 'Menu', close: 'Close', open: 'Open',
    theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme', dark: 'Dark theme on', light: 'Light theme on' },
    lang: { switch: 'Cambiar a español', changed: 'Language: English' },
    sound: { on: 'Sound on', off: 'Sound muted', mute: 'Mute sound (M)', unmute: 'Turn sound on (M)', first: 'This site has sound. Press M or the speaker button to mute it.' },
    search: { open: 'Search or jump to… (Ctrl + K)', placeholder: 'Search a song, artist or page…', empty: 'No results for “{q}”. Try a song title, an artist or “help”.', hint: '↑↓ to move · Enter to open · Esc to close', groupPages: 'Pages', groupSongs: 'Songs', groupPeople: 'Artists & crew', groupActions: 'Actions' },
    actions: { theme: 'Toggle light / dark theme', lang: 'Switch language to Spanish', sound: 'Toggle sound', cookies: 'Cookie settings', shortcuts: 'Keyboard shortcuts' },
    shortcuts: { title: 'Keyboard shortcuts', items: [['Ctrl / ⌘ + K', 'Search or jump to any page'], ['/', 'Search'], ['M', 'Mute / unmute'], ['T', 'Toggle theme'], ['L', 'Switch language'], ['← →', 'Previous / next chapter (on a song)'], ['Esc', 'Close dialogs'], ['?', 'Show this help']] },
    loading: 'Loading chapter',
    listen: 'Listen', listenOn: 'Listen on', watch: 'Watch video', listenEP: 'Listen to the EP', watchSeries: 'Watch the series',
    chapter: 'Chapter', chapters: 'chapters', upcoming: 'Coming soon', soon: 'Very soon', locked: 'Locked chapter',
    countdown: { d: 'days', h: 'hours', m: 'min', s: 'sec', done: 'It’s here!', doneText: 'This chapter is out. Links will be updated very soon.' },
    tbd: 'To be confirmed',
    seeStory: 'Read the story', seeChapter: 'See chapter', seeArtist: 'See artist', seeProfile: 'See profile', seeAll: 'See all',
    back: 'Back', prev: 'Previous', next: 'Next', share: 'Share', copied: 'Link copied to clipboard', copyFail: 'Couldn’t copy. Copy the link from the address bar.',
    copyEmail: 'Copy email', emailCopied: 'Email copied',
    feat: 'feat.',
    hero: {
      kicker: 'EP · 7 chapters · ℗ MG Music',
      line1: 'A project from Cali', line2: 'telling Colombia through', line3: 'sound and image',
      next: 'Next chapter in', scroll: 'Scroll', birdHint: 'Tap me'
    },
    home: {
      descTitle: 'About', visualTitle: 'Visual concept', inspTitle: 'Inspiration',
      inspIntro: 'The name Apolinari has a double inspiration',
      bird: 'The bird', god: 'The god',
      tracklist: 'Tracklist', tracklistSub: 'Seven chapters, one story. Hover to listen.',
      artistsTitle: 'The artists', artistsSub: 'Two producers from Cali, one sonic territory.',
      galleryTitle: 'Behind the scenes', gallerySub: 'Photos from the series shoot.',
      seriesTitle: 'The Series', seriesText: 'Every release comes with a music video. Together they tell one continuous story, chapter by chapter.',
      teamTitle: 'Production crew',
      showsTitle: 'Shows & merch', showsText: 'Live dates and official merch are on the way. We’ll announce them here and on social media.',
      followIg: 'Follow on Instagram'
    },
    songs: {
      title: 'Songs', intro: 'Listen to every chapter of Apolinari on your favorite platform. Each song has its own story.',
      epTitle: 'The full EP', epText: 'The whole series in a single playlist.',
      playlistSpotify: 'Spotify playlist', playlistYoutube: 'YouTube playlist',
      preview: 'Play preview', stopPreview: 'Stop preview'
    },
    song: {
      story: 'Story', storyEmpty: 'The story behind this chapter is coming soon.',
      trivia: 'Fun facts', triviaEmpty: 'Fun facts about this chapter are coming soon.',
      sheet: 'Song details', videoCredits: 'Video credits', inSeries: 'In The Series', inSeriesText: 'This chapter is part of a continuous story.',
      player: 'Player', fields: {
        artists: 'Artists', duration: 'Length', release: 'Release', genre: 'Genre', composers: 'Songwriters', producers: 'Producers', mixing: 'Mixing', mastering: 'Mastering', bpm: 'BPM', key: 'Key', isrc: 'ISRC', label: 'Label', recorded: 'Recorded at',
        director: 'Director', camera: 'Camera', production: 'Production', locations: 'Locations'
      },
      allSongs: 'All songs', lockedText: 'This chapter hasn’t been released yet. Come back when the countdown ends.'
    },
    series: {
      title: 'The Series', intro: 'Apolinari isn’t just an EP: it’s a story told in chapters. Each video picks up where the last one ended.',
      summaryEmpty: 'Chapter summary coming soon.', watchAll: 'Watch all on YouTube', progress: 'chapters released'
    },
    artists: { title: 'Artists', intro: 'East Coast and Error 404: two ways of telling Cali, one project.', realName: 'Name', born: 'Born', city: 'City', role: 'Role', bio: 'Biography', story: 'Story', influences: 'Influences', music: 'Their music on Spotify', inApolinari: 'On Apolinari', achievements: 'Achievements & press', achievementsEmpty: 'Shows, awards and press coming soon.', other: 'Also meet', instagram: 'Instagram' },
    team: { title: 'Crew', intro: 'The people and creative houses that made Apolinari possible.', groups: { label: 'Label', visual: 'Visual production', direction: 'Direction' }, credits: 'Credits on Apolinari', creditsEmpty: 'Per-song credits will be published very soon.', others: 'Rest of the crew' },
    press: {
      title: 'Press & booking', intro: 'Everything you need to write about Apolinari or bring it to your stage.',
      kit: 'Press kit', kitText: 'Official EP dossier (PDF, in Spanish): concept, tracklist, artists and crew.', photos: 'Official photos', photosText: 'Cover art, transparent bird, portraits and behind-the-scenes in high resolution.',
      download: 'Download', booking: 'Booking & contact', bookingText: 'For shows, interviews, collaborations or press, write to us. We reply by email.', writeUs: 'Send an email', subject: 'Booking · Apolinari EP',
      shortBio: 'Short bio', copyBio: 'Copy bio', bioCopied: 'Bio copied',
      bioText: 'Apolinari is the EP by East Coast x Error 404, two artists and producers from Cali, Colombia. Seven chapters fusing reggaetón, cumbia, currulao, R&B and rock with Colombian folk sounds, released one per month alongside a continuous music video series. ℗ MG Music.'
    },
    help: { title: 'Help', intro: 'Quick answers to what people ask us the most.', search: 'Search help…', empty: 'No results for “{q}”. Try another word or write to us.', still: 'Didn’t find your answer?', contact: 'Email us' },
    legal: { owner: 'Site owner', notice: 'Legal notice', privacy: 'Data protection', terms: 'Terms & conditions', cookies: 'Cookie policy', cookieSettings: 'Cookie settings', updated: 'Last updated', esOnly: 'This legal text is published in Spanish, which is the legally binding version under Colombian law. Below is a short English summary.' },
    footer: { explore: 'Explore', music: 'Music', social: 'Social', legal: 'Legal', made: 'Made in Cali, Colombia', rights: 'All rights reserved.', top: 'Back to top', owner: 'Site run by' },
    cookie: {
      title: 'Cookies & players',
      text: 'We use local storage to remember your language, theme and sound. Spotify, Apple Music and YouTube players set third-party cookies: they only load if you allow them.',
      accept: 'Accept all', reject: 'Necessary only', config: 'Settings', save: 'Save preferences',
      necessary: 'Necessary', necessaryText: 'Remember your language, theme, sound and this choice. Always on.',
      media: 'Third-party players', mediaText: 'Spotify, Apple Music and YouTube. Let you listen and watch inside the site.',
      more: 'Read the cookie policy', saved: 'Preferences saved', always: 'Always on'
    },
    embed: { blocked: 'This {p} player uses third-party cookies.', loadOnce: 'Load player', allow: 'Always allow', loading: 'Loading player…', open: 'Open in {p}' },
    notFound: { title: 'Error 404', sub: 'This chapter doesn’t exist… yet.', text: 'The link may be mistyped or the page may have moved. The bird can’t find it either.', home: 'Back home', songs: 'See songs', search: 'Search' },
    lightbox: { close: 'Close (Esc)', prev: 'Previous photo', next: 'Next photo' },
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    egg: 'You found the Apolinari!'
  }
};

/* Preguntas frecuentes */
window.FAQ = [
  { q: { es: '¿Dónde puedo escuchar Apolinari?', en: 'Where can I listen to Apolinari?' },
    a: { es: 'En todas las plataformas digitales. Aquí encuentras los enlaces directos a Spotify, Apple Music y YouTube de cada canción, y la playlist completa del EP.', en: 'On every streaming platform. Here you’ll find direct links to Spotify, Apple Music and YouTube for each song, plus the full EP playlist.' },
    link: { href: 'canciones.html', es: 'Ir a Canciones', en: 'Go to Songs' } },
  { q: { es: '¿Cómo puedo contratar a East Coast x Error 404?', en: 'How can I book East Coast x Error 404?' },
    a: { es: 'Las contrataciones se gestionan por booking. Escríbenos al correo de la sección Prensa y booking y te respondemos.', en: 'Bookings are handled by email. Write to us through the Press & booking page and we’ll get back to you.' },
    link: { href: 'prensa.html', es: 'Ir a Booking', en: 'Go to Booking' } },
  { q: { es: '¿Cuándo sale el próximo capítulo?', en: 'When is the next chapter out?' },
    a: { es: 'Los lanzamientos se avisan aquí en la página (mira la cuenta regresiva en Inicio y Canciones) y en las redes de los artistas.', en: 'Releases are announced here on the site (check the countdown on Home and Songs) and on the artists’ social media.' },
    link: { href: 'la-serie.html', es: 'Ver La Serie', en: 'See The Series' } },
  { q: { es: '¿Qué significa “Apolinari”?', en: 'What does “Apolinari” mean?' },
    a: { es: 'Tiene doble inspiración: el cucarachero de Apolinar, ave endémica de Colombia en peligro de extinción, y Apolo, dios de la música y la poesía.', en: 'It has a double inspiration: Apolinar’s wren, an endangered bird endemic to Colombia, and Apollo, god of music and poetry.' } },
  { q: { es: '¿Por qué no veo el reproductor de Spotify o YouTube?', en: 'Why can’t I see the Spotify or YouTube player?' },
    a: { es: 'Los reproductores instalan cookies de terceros, así que solo se cargan si los permites. Pulsa “Cargar reproductor” sobre el recuadro o cambia tu decisión en “Configurar cookies” al final de la página. También puedes abrir la canción directamente en la plataforma.', en: 'Players set third-party cookies, so they only load if you allow them. Press “Load player” on the box or change your choice in “Cookie settings” at the bottom of the page. You can also open the song directly on the platform.' } },
  { q: { es: '¿Cómo silencio el sonido del sitio?', en: 'How do I mute the site’s sound?' },
    a: { es: 'Con el botón del parlante arriba a la derecha o pulsando la tecla M. Recordamos tu elección para la próxima visita.', en: 'Use the speaker button at the top right or press M. We remember your choice for next time.' } },
  { q: { es: '¿Puedo cambiar el idioma o usar tema claro?', en: 'Can I change the language or use a light theme?' },
    a: { es: 'Sí. Arriba a la derecha están los botones ES/EN y sol/luna. También puedes usar las teclas L y T.', en: 'Yes. The ES/EN and sun/moon buttons are at the top right. You can also press L and T.' } },
  { q: { es: '¿Hay atajos de teclado?', en: 'Are there keyboard shortcuts?' },
    a: { es: 'Sí: Ctrl/⌘ + K abre el buscador para ir a cualquier página, M silencia, T cambia el tema, L el idioma y ? muestra la lista completa.', en: 'Yes: Ctrl/⌘ + K opens search to jump anywhere, M mutes, T toggles theme, L switches language and ? shows the full list.' } },
  { q: { es: '¿Habrá shows o merch?', en: 'Will there be shows or merch?' },
    a: { es: 'Estamos en eso. Cuando haya fechas o mercancía oficial lo anunciaremos en esta página y en redes.', en: 'We’re working on it. When there are dates or official merch we’ll announce them here and on social media.' } },
  { q: { es: '¿Puedo usar las fotos para una publicación?', en: 'Can I use the photos for an article?' },
    a: { es: 'Sí, para prensa y difusión del proyecto, dando crédito a Apolinari EP. Descárgalas en la sección Prensa. Para otros usos, escríbenos.', en: 'Yes, for press and promotion of the project, crediting Apolinari EP. Download them from the Press page. For other uses, write to us.' },
    link: { href: 'prensa.html', es: 'Ir a Prensa', en: 'Go to Press' } }
];
