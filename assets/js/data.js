/* =========================================================================
   APOLINARI EP · DATOS DEL SITIO
   -------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar contenido.
   - Los textos van en pares { es: '...', en: '...' }.
   - Un campo vacío ('' o []) se muestra como "Por confirmar" o se oculta.
   - Fechas en formato AAAA-MM-DD. Cuenta regresiva en hora de Colombia (-05:00).
   ========================================================================= */
window.APOLINARI = {

  site: {
    name: 'APOLINARI',
    tagline: 'East Coast x Error 404',
    baseUrl: 'https://apolinari-ep.github.io/home/',
    label: 'MG Music',
    owner: 'Deiby Rodriguez',
    email: 'deiby.rodriguez.rodallega@gmail.com',
    city: 'Cali, Valle del Cauca, Colombia',
    legalUpdated: '2026-10-28',
    quote: {
      es: 'Cada capítulo es un sonido, cada sonido es memoria',
      en: 'Every chapter is a sound, every sound is memory'
    }
  },

  /* Enlaces del EP completo */
  ep: {
    spotifyPlaylist: 'https://open.spotify.com/playlist/7zXtg9Qk5hcNPNCbG1CaFB',
    spotifyPlaylistId: '7zXtg9Qk5hcNPNCbG1CaFB',
    youtubePlaylist: 'https://www.youtube.com/watch?v=ufOvZre9Xxs&list=PLOEs_yB11W8f4d0qyohlgyZodZRMvIZF4',
    youtubePlaylistId: 'PLOEs_yB11W8f4d0qyohlgyZodZRMvIZF4',
    presskit: 'assets/press/apolinari-ep-press-kit.pdf',
    presskitSize: '5,1 MB',
    photos: 'assets/press/apolinari-ep-fotos.zip',
    photosSize: '5,5 MB',
    description: {
      es: 'Proyecto musical independiente nacido en la ciudad de Cali, construido por dos artistas que buscan explorar nuevas formas de narrar lo colombiano desde lo urbano. Este EP propone una fusión entre ritmos contemporáneos como el reggaetón y sonidos folclóricos tradicionales, generando una identidad sonora que conecta el presente del barrio con las raíces culturales del país.',
      en: 'An independent music project born in Cali, built by two artists searching for new ways to tell the Colombian story through urban music. The EP fuses contemporary rhythms like reggaetón with traditional folk sounds, creating a sonic identity that connects the present of the barrio with the country’s cultural roots.'
    },
    visual: {
      es: 'El enfoque está en resaltar la riqueza cultural y la biodiversidad colombiana desde una mirada auténtica, evitando estereotipos y apostando por representaciones más reales y contemporáneas del territorio y su gente.',
      en: 'The focus is on highlighting Colombia’s cultural richness and biodiversity from an authentic point of view, avoiding stereotypes and betting on more real, contemporary portrayals of the land and its people.'
    },
    inspirationBird: {
      es: 'El cucarachero de Apolinar, ave endémica de Colombia actualmente en peligro de extinción, como símbolo de la riqueza natural que se busca visibilizar y preservar.',
      en: 'Apolinar’s wren, a bird endemic to Colombia and currently endangered, as a symbol of the natural wealth the project wants to make visible and protect.'
    },
    inspirationApollo: {
      es: 'Apolo, dios de la música y la poesía, reflejando el carácter lírico del proyecto, donde lo poético convive con la crudeza y franqueza propia de lo urbano.',
      en: 'Apollo, god of music and poetry, reflecting the lyrical side of the project, where poetry lives alongside the rawness and frankness of the streets.'
    },
    distribution: {
      es: 'El proyecto se desarrolla bajo una estrategia de lanzamiento progresivo, con una canción mensual, cada una acompañada de una pieza audiovisual. Estos videos no solo funcionan como complemento estético, sino como parte de una narrativa continua: una historia que se entrelaza entre cada lanzamiento, acercándose a un formato seriado que amplía la experiencia del EP.',
      en: 'The project follows a progressive release strategy: one song per month, each with its own music video. The videos are not just an aesthetic complement but part of a continuous narrative — a story that weaves through every release, close to a series format that expands the EP experience.'
    }
  },

  /* ---------------------------------------------------------------------
     CANCIONES
     - preview: ruta a un MP3 corto (15–30 s) para el sonido al pasar el
       cursor. Ej: 'assets/audio/previews/no-debiste-amarme.mp3'.
       Mientras esté vacío, suena una marimba sintetizada.
     - countdown: solo para capítulos sin estrenar (hora Colombia).
     - credits: qué hizo cada integrante del equipo en la canción. Ej:
       credits: [{ who: 'camilo-medina', role: { es: 'Dirección', en: 'Director' } }]
       ('who' es el id del equipo; así aparece en su página automáticamente).
     - trivia: [{ es: '...', en: '...' }, ...]  · story: textos separados por línea en blanco.
     --------------------------------------------------------------------- */
  songs: [
    {
      id: 'no-debiste-amarme', n: 1,
      title: 'No debiste amarme',
      duration: '2:42', release: '2026-02-27',
      genre: { es: 'Cumbia urbana', en: 'Urban cumbia' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: 'https://open.spotify.com/track/4FLqH8mJ7kphDMrRQzL2Gw', spotifyId: '4FLqH8mJ7kphDMrRQzL2Gw',
      apple: 'https://music.apple.com/mx/song/no-debiste-amarme/1880105556',
      youtube: 'https://youtu.be/ufOvZre9Xxs', youtubeId: 'ufOvZre9Xxs',
      preview: '',
      story: { es: '', en: '' },
      seriesSummary: { es: '', en: '' },
      trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'selva-con-wifi', n: 2,
      title: 'Selva con wifi',
      duration: '3:03', release: '2026-03-31',
      genre: { es: 'Dembow / Currulao', en: 'Dembow / Currulao' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: 'https://open.spotify.com/track/7ors6X36GhgyrCL2km4n9S', spotifyId: '7ors6X36GhgyrCL2km4n9S',
      apple: 'https://music.apple.com/mx/song/selva-con-wifi/1891154824',
      youtube: 'https://youtu.be/OvG079b6D48', youtubeId: 'OvG079b6D48',
      preview: '',
      story: { es: '', en: '' },
      seriesSummary: { es: '', en: '' },
      trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'frontera-y-humo', n: 3,
      title: 'Frontera y humo',
      duration: '3:40', release: '2026-04-30',
      genre: { es: 'Lo-fi / Reggaetón', en: 'Lo-fi / Reggaetón' },
      artists: ['east-coast', 'error-404'], featuring: ['Santi Jara'],
      spotify: 'https://open.spotify.com/track/1wVApj7DrJszp0xuEoHz9K', spotifyId: '1wVApj7DrJszp0xuEoHz9K',
      apple: 'https://music.apple.com/mx/song/frontera-y-humo/1893476093',
      youtube: 'https://youtu.be/K1n1patgxFo', youtubeId: 'K1n1patgxFo',
      preview: '',
      story: { es: '', en: '' },
      seriesSummary: { es: '', en: '' },
      trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'mariangela', n: 4,
      title: 'Mariangela',
      duration: '3:21', release: '2026-05-31',
      genre: { es: 'R&B / Reggaetón', en: 'R&B / Reggaetón' },
      artists: ['east-coast', 'error-404'], featuring: ['Yomiel'],
      spotify: 'https://open.spotify.com/track/3w5bUCNv6mHOlpTfC4nqrd', spotifyId: '3w5bUCNv6mHOlpTfC4nqrd',
      apple: 'https://music.apple.com/mx/song/mariangela/6772600576',
      youtube: 'https://youtu.be/GbkDZnzAHSA', youtubeId: 'GbkDZnzAHSA',
      preview: '',
      story: { es: '', en: '' },
      seriesSummary: { es: '', en: '' },
      trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'cache', n: 5,
      title: 'Cache',
      duration: '2:55', release: '2026-06-26',
      genre: { es: 'Cumbia urbana', en: 'Urban cumbia' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: 'https://open.spotify.com/track/1u3uzTFkPWXjlbcPbS3IMv', spotifyId: '1u3uzTFkPWXjlbcPbS3IMv',
      apple: 'https://music.apple.com/mx/song/cache/6779404161',
      youtube: 'https://youtu.be/7xfaUCgFUnM', youtubeId: '7xfaUCgFUnM',
      preview: '',
      story: { es: '', en: '' },
      seriesSummary: { es: '', en: '' },
      trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'capitulo-6', n: 6,
      title: '', /* Cuando tenga nombre, escríbelo aquí */
      countdown: '2026-11-27T00:00:00-05:00',
      duration: '', release: '',
      genre: { es: '', en: '' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: '', spotifyId: '', apple: '', youtube: '', youtubeId: '',
      preview: '', story: { es: '', en: '' }, seriesSummary: { es: '', en: '' }, trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    },
    {
      id: 'capitulo-7', n: 7,
      title: '',
      countdown: '2026-12-18T00:00:00-05:00',
      duration: '', release: '',
      genre: { es: 'Rock / Reggaetón', en: 'Rock / Reggaetón' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: '', spotifyId: '', apple: '', youtube: '', youtubeId: '',
      preview: '', story: { es: '', en: '' }, seriesSummary: { es: '', en: '' }, trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', bpm: '', key: '', isrc: '', label: 'MG Music', recorded: '' },
      video: { director: '', camera: '', production: '', locations: '' },
      credits: []
    }
  ],

  /* --------------------------------------------------------------------- */
  artists: {
    'east-coast': {
      id: 'east-coast',
      name: 'East Coast',
      aka: 'East Coast The Producer',
      realName: 'Brainer David Cruz Ávila',
      born: '1997-04-05',
      city: 'Cali, Colombia',
      role: { es: 'Artista y productor', en: 'Artist & producer' },
      instagram: 'eastcoastheproducer',
      spotify: 'https://open.spotify.com/artist/5sdNtLQovixslgECH0aGqi', spotifyId: '5sdNtLQovixslgECH0aGqi',
      photos: ['east-coast-1', 'east-coast-2', 'east-coast-3'],
      influences: ['2Pac', 'The Notorious B.I.G.', 'Dr. Dre', 'Zion & Lennox', 'Wisin & Yandel', 'Don Omar', 'Daddy Yankee'],
      bio: {
        es: [
          'Brainer David Cruz Ávila, conocido artísticamente como East Coast The Producer, es un artista y productor nacido el 5 de abril de 1997 en Cali, Colombia. Su propuesta se caracteriza por una identidad sonora auténtica, influenciada por la esencia del hip hop clásico y la energía del urbano contemporáneo.',
          'Su nombre artístico surge de un apodo otorgado por un amigo, quien identificó en su estilo la vibra característica de la costa este de Estados Unidos. Esta conexión se convirtió en un sello personal que hoy define su enfoque creativo.',
          'Inspirado por referentes como 2Pac, The Notorious B.I.G., Dr. Dre y exponentes del urbano latino como Zion & Lennox, Wisin & Yandel, Don Omar y Daddy Yankee, East Coast inició su camino en la música a los 12 años, tras descubrir un estudio de grabación, momento que marcaría el inicio de su trayectoria.'
        ],
        en: [
          'Brainer David Cruz Ávila, known as East Coast The Producer, is an artist and producer born on April 5, 1997 in Cali, Colombia. His sound has an authentic identity, shaped by the essence of classic hip hop and the energy of contemporary urban music.',
          'His artist name comes from a nickname a friend gave him after recognizing in his style the unmistakable vibe of the US East Coast. That connection became a personal signature that defines his creative approach today.',
          'Inspired by 2Pac, The Notorious B.I.G. and Dr. Dre, and by Latin urban icons like Zion & Lennox, Wisin & Yandel, Don Omar and Daddy Yankee, East Coast started making music at 12, after discovering a recording studio — the moment that marked the beginning of his journey.'
        ]
      },
      story: {
        es: [
          'A pesar de crecer en un entorno con limitaciones económicas, en un sector de alta vulnerabilidad y sin apoyo familiar directo hacia su carrera musical, encontró en la música un espacio de expresión, disciplina y propósito. Su historia representa la perseverancia de un artista que ha construido su camino desde la convicción personal.',
          'Hoy, East Coast se define como un creador apasionado que no solo produce música, sino que la vive como un medio para transformar experiencias en sonido, con el objetivo de consolidar una carrera libre y auténtica dentro de la industria.'
        ],
        en: [
          'Despite growing up with financial limitations, in a highly vulnerable neighborhood and without direct family support for his music career, he found in music a space for expression, discipline and purpose. His story is one of perseverance: an artist who has built his path out of personal conviction.',
          'Today East Coast sees himself as a passionate creator who doesn’t just produce music but lives it as a way of turning experiences into sound, aiming to build a free and authentic career in the industry.'
        ]
      },
      achievements: [] /* { es:'', en:'' } — se llenarán luego */
    },
    'error-404': {
      id: 'error-404',
      name: 'Error 404',
      aka: 'Error 404',
      realName: 'Deiby Alexander Rodríguez Rodallega',
      born: '', /* No aparece en el PDF: AAAA-MM-DD */
      city: 'Cali, Colombia',
      role: { es: 'Artista y productor', en: 'Artist & producer' },
      instagram: 'personnofound',
      spotify: 'https://open.spotify.com/artist/6q8d7FNue50ImYlKZSA8cN', spotifyId: '6q8d7FNue50ImYlKZSA8cN',
      photos: ['error-404-1', 'error-404-2', 'error-404-3'],
      influences: ['Cumbia', 'Currulao', 'Vals', 'Pasillo', 'Reggaetón', 'Afrobeat latino'],
      bio: {
        es: [
          'Desde Cali, Colombia, Deiby Alexander Rodríguez Rodallega, conocido por su nombre artístico Error 404, desarrolla una propuesta musical que conecta las raíces del folclor colombiano con las dinámicas de la música urbana actual. Su sonido fusiona géneros tradicionales como la cumbia y el currulao con ritmos contemporáneos como el reggaetón y el afrobeat latino.',
          'Apolinari representa su primer lanzamiento formal como productor, un proyecto en el que plasma su identidad musical, integrando lo tradicional con lo urbano, y proponiendo una narrativa que resalta la diversidad cultural colombiana desde una perspectiva contemporánea.'
        ],
        en: [
          'From Cali, Colombia, Deiby Alexander Rodríguez Rodallega — known as Error 404 — builds a sound that connects the roots of Colombian folk music with today’s urban dynamics, fusing traditional genres like cumbia and currulao with contemporary rhythms like reggaetón and Latin afrobeat.',
          'Apolinari is his first formal release as a producer: a project where he captures his musical identity, blending the traditional and the urban, with a narrative that celebrates Colombia’s cultural diversity from a contemporary perspective.'
        ]
      },
      story: {
        es: [
          'Nacido en el barrio El Vallado y criado entre Chiminangos y Floralia, su identidad artística está profundamente ligada a su contexto social y cultural. Ingeniero de sistemas egresado de la Universidad del Valle, su nombre artístico surge como un juego conceptual: una referencia al error informático “404” y a la idea de crear un sonido que no había sido encontrado previamente dentro de la escena.',
          'Su acercamiento a la música comenzó desde temprana edad, motivado por espacios comunitarios y el apoyo familiar, participando en procesos de formación en guitarra y composición. Sus influencias están marcadas principalmente por la riqueza del folclor colombiano, destacando géneros como la cumbia, el vals y el pasillo, los cuales hacen parte de su cotidianidad sonora.'
        ],
        en: [
          'Born in the El Vallado neighborhood and raised between Chiminangos and Floralia, his artistic identity is deeply tied to his social and cultural context. A systems engineer from Universidad del Valle, his artist name is a conceptual play on words: a nod to the “404” computer error and to the idea of creating a sound nobody had found before in the scene.',
          'He came to music at an early age, encouraged by community spaces and his family, training in guitar and songwriting. His influences come mainly from the richness of Colombian folk music — cumbia, vals and pasillo are part of his everyday soundscape.'
        ]
      },
      achievements: []
    }
  },

  /* --------------------------------------------------------------------- */
  team: [
    { id: 'mg-music', name: 'MG Music', type: 'logo', group: 'label',
      role: { es: 'Sello discográfico', en: 'Record label' }, instagram: 'mgmusicoficial', img: 'team/mg-music' },
    { id: 'calipsis-music', name: 'Calipsis Music', type: 'logo', group: 'visual',
      role: { es: 'Producción visual', en: 'Visual production' }, instagram: 'calipsismusic', img: 'team/calipsis-music' },
    { id: 'ospina-records', name: 'Ospina Records', type: 'logo', group: 'visual',
      role: { es: 'Producción visual', en: 'Visual production' }, instagram: 'ospinarecords_', img: 'team/ospina-records' },
    { id: 'camilo-medina', name: 'Camilo Medina', type: 'person', group: 'direction',
      role: { es: 'Dirección', en: 'Director' }, instagram: 'iamdelta_', img: 'team/camilo-medina' },
    { id: 'juan-valens', name: 'Juan Valens', type: 'person', group: 'direction',
      role: { es: 'Asistente de dirección', en: 'Assistant director' }, instagram: 'juan_valens', img: 'team/juan-valens' },
    { id: 'sebastian-gonzalez', name: 'Sebastián González', type: 'person', group: 'direction',
      role: { es: 'Asistente de dirección', en: 'Assistant director' }, instagram: 'sb.rompiendo', img: 'team/sebastian-gonzalez' }
  ],

  /* Registro fotográfico (galería) */
  gallery: [
    'rodaje-parlantes', 'chiva-1', 'rodaje-cerca', 'rodaje-gallinero', 'error-404-1', 'rodaje-camion',
    'chiva-2', 'rodaje-ruana', 'duo-carro', 'rodaje-noche', 'error-404-3', 'rodaje-bosque', 'rodaje-platanera', 'duo-selfie'
  ],

  /* Shows y merch: deja vacío para mostrar "Próximamente".
     shows: [{ date:'2026-12-31', city:'Cali', venue:'', link:'' }]
     merch: [{ name:{es:'',en:''}, price:'', img:'', link:'' }] */
  shows: [],
  merch: []
};
