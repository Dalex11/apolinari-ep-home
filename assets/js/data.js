/* =========================================================================
   APOLINARI EP · DATOS DEL SITIO
   -------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar contenido.
   - Los textos van en pares { es: '...', en: '...' }.
   - Un campo vacío ('' o []) se muestra como "Por confirmar" o se oculta.
   - Fechas en formato AAAA-MM-DD. Cuenta regresiva en hora de Colombia (-05:00).
   ========================================================================= */
/* Créditos que se repiten en todas las canciones estrenadas */
const PRODUCERS = ['Error 404', 'East Coast', 'Calipsis Music', 'Ospina Records'];
const videoCredits = locations => ({
  director: 'Camilo Medina',
  visual: ['Calipsis Music', 'Ospina Records'],
  studio: 'Brooklyn Records',
  lights: ['Juan Valens', 'Sebastián González'],
  locations
});
const CREW = [
  { who: 'mg-music', role: { es: 'Sello', en: 'Label' } },
  { who: 'calipsis-music', role: { es: 'Producción y producción visual', en: 'Production & visual production' } },
  { who: 'ospina-records', role: { es: 'Producción y producción visual', en: 'Production & visual production' } },
  { who: 'camilo-medina', role: { es: 'Dirección del video', en: 'Video director' } },
  { who: 'juan-valens', role: { es: 'Luces y asistencia de producción', en: 'Lights & production assistant' } },
  { who: 'sebastian-gonzalez', role: { es: 'Luces y asistencia de producción', en: 'Lights & production assistant' } },
  { who: 'macroviajes', role: { es: 'Patrocinador', en: 'Sponsor' } }
];

window.APOLINARI = {

  site: {
    name: 'APOLINARI',
    tagline: 'East Coast x Error 404',
    baseUrl: 'https://apolinari.com/',
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
    presskitSize: '5 MB',
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
     - countdown: solo para capítulos sin estrenar (hora Colombia).
     - featuring: ids de artistas invitados (están en "team", grupo 'guests').
     - meta / video: un texto o una lista de nombres. Si el nombre coincide
       con un artista o alguien del equipo, se enlaza a su página.
     - credits: qué hizo cada integrante del equipo en la canción
       ('who' es el id del equipo; así aparece en su página automáticamente).
     - trivia: [{ es: '...', en: '...' }, ...]  · story: párrafos separados por \n\n.
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
      story: {
        es: 'No debiste amarme abre la historia de Apolinari justo donde más duele: al otro lado de una ruptura. El protagonista todavía tiene la herida abierta, y cada verso es un reclamo, una mezcla de rabia y tristeza dirigida a alguien que ya no está.\n\nPero debajo del reproche hay algo más incómodo: las ganas de volver. Sabe que esa relación no le hace bien y, aun así, busca excusas, promesas y atajos para recuperarla. Es el duelo en su fase de negociación, ese momento en el que uno está dispuesto a ceder lo que sea con tal de que nada haya cambiado.\n\nSobre una base de cumbia urbana, la canción convierte el despecho en algo que se baila, porque en Cali hasta la tusa se sufre al ritmo de la música.',
        en: 'No debiste amarme (“You shouldn’t have loved me”) opens the story of Apolinari right where it hurts most: on the other side of a breakup. The protagonist’s wound is still open, and every line is a reproach, a mix of anger and sadness aimed at someone who is no longer there.\n\nBut beneath the blame lies something more uncomfortable: he still wants to go back. He knows that relationship isn’t good for him, yet he keeps looking for excuses, promises and shortcuts to win it back. It’s grief in its bargaining stage, the moment when you’d give up anything as long as nothing had changed.\n\nOver an urban cumbia beat, the song turns heartbreak into something you can dance to, because in Cali even heartache moves to the rhythm of the music.'
      },
      seriesSummary: {
        es: 'El dolor. La ruptura acaba de pasar y el protagonista está en carne viva: reclama, sufre y, aunque sabe que no le conviene, negocia consigo mismo para volver.',
        en: 'The pain. The breakup has just happened and the protagonist is raw: he blames, he suffers and, even knowing it’s not good for him, he bargains with himself to go back.'
      },
      trivia: [
        { es: 'La letra nace de poemas que Error 404 escribió cuando empezó a estudiar poesía, en plena tusa.', en: 'The lyrics come from poems Error 404 wrote when he started studying poetry, right in the middle of a heartbreak.' },
        { es: 'En pleno rodaje llegó la policía. La grabación se pausó mientras el equipo explicaba que no estaban haciendo nada malo, y eso retrasó la jornada.', en: 'The police showed up in the middle of the shoot. Filming stopped while the crew explained they weren’t doing anything wrong, which set the day back a bit.' },
        { es: 'Se grabó en Dapa, en las montañas del Valle del Cauca.', en: 'It was recorded in Dapa, in the mountains of Valle del Cauca.' }
      ],
      meta: { composers: ['Error 404', 'East Coast'], producers: PRODUCERS, mixing: 'East Coast', mastering: 'East Coast', label: 'MG Music', recorded: 'Dapa, Valle del Cauca' },
      video: videoCredits('Dapa, Valle del Cauca'),
      credits: CREW
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
      story: {
        es: 'En el segundo capítulo la historia se escapa de la realidad. Selva con wifi construye un mundo inventado donde la naturaleza y la tecnología dejaron de ser opuestas: los árboles transmiten señal, los ríos corren como datos y la vida silvestre convive con pantallas y cables. Una selva digital.\n\nToda la letra es un juego de alusiones entre esos dos universos. El amor, el deseo y la memoria se cuentan con palabras de ambos lados: lo que florece y lo que se descarga, lo que echa raíz y lo que se conecta.\n\nEs el capítulo más experimental del EP: el currulao del Pacífico se cruza con el dembow para sonar como ese mismo mundo, orgánico y eléctrico a la vez.',
        en: 'In the second chapter, the story escapes reality. Selva con wifi (“Jungle with wifi”) builds an invented world where nature and technology are no longer opposites: trees broadcast signal, rivers flow like data and wildlife lives alongside screens and cables. A digital jungle.\n\nThe whole song is a game of allusions between those two universes. Love, desire and memory are told with words from both sides: what blooms and what downloads, what takes root and what connects.\n\nIt’s the most experimental chapter of the EP: Pacific currulao meets dembow to sound like that very world, organic and electric at the same time.'
      },
      seriesSummary: {
        es: 'La evasión. Para no sentir, el protagonista se refugia en un mundo inventado, una selva digital donde la naturaleza y la tecnología se mezclan. Una forma de escapar de lo que le duele.',
        en: 'The escape. To avoid feeling, the protagonist takes refuge in an invented world, a digital jungle where nature and technology blend. A way to run from what hurts.'
      },
      trivia: [
        { es: 'Error 404 la escribió pensando en las muchas similitudes que hay entre la naturaleza y la tecnología.', en: 'Error 404 wrote it thinking about the many similarities between nature and technology.' },
        { es: 'Es la canción más experimental del EP: el dúo quería mostrar su lado más arriesgado.', en: 'It’s the most experimental song on the EP: the duo wanted to show their boldest side.' },
        { es: 'Todo se grabó en La Cumbre, Valle del Cauca, el municipio donde vive Error 404.', en: 'Everything was recorded in La Cumbre, Valle del Cauca, the town where Error 404 lives.' }
      ],
      meta: { composers: ['Error 404', 'East Coast'], producers: PRODUCERS, mixing: 'East Coast', mastering: 'East Coast', label: 'MG Music', recorded: 'La Cumbre, Valle del Cauca' },
      video: videoCredits('La Cumbre, Valle del Cauca'),
      credits: CREW
    },
    {
      id: 'frontera-y-humo', n: 3,
      title: 'Frontera y humo',
      duration: '3:40', release: '2026-04-30',
      genre: { es: 'Lo-fi / Reggaetón', en: 'Lo-fi / Reggaetón' },
      artists: ['east-coast', 'error-404'], featuring: ['santi-jara'],
      spotify: 'https://open.spotify.com/track/1wVApj7DrJszp0xuEoHz9K', spotifyId: '1wVApj7DrJszp0xuEoHz9K',
      apple: 'https://music.apple.com/mx/song/frontera-y-humo/1893476093',
      youtube: 'https://youtu.be/K1n1patgxFo', youtubeId: 'K1n1patgxFo',
      story: {
        es: 'Frontera y humo muestra otra cara del protagonista: encantador, coqueto hasta el extremo, con conversación para muchas y compromiso con ninguna. Por fuera parece que la está pasando bien; por dentro, sigue sin superar lo que vivió.\n\nNo busca enamorarse porque todavía carga con sus relaciones pasadas, así que prefiere moverse en esa frontera entre el juego y el afecto, donde nada se queda el tiempo suficiente como para doler. Todo se vuelve humo: llega, envuelve y desaparece.\n\nCon la voz invitada de Santi Jara, la canción se apoya en una base lo-fi y reggaetón, relajada y nocturna, perfecta para ese estado en el que uno coquetea con todo el mundo para no tener que mirarse a sí mismo.',
        en: 'Frontera y humo (“Border and smoke”) shows another side of the protagonist: charming, flirtatious to the extreme, with a line for everyone and commitment to no one. On the outside he seems to be having a great time; inside, he still hasn’t gotten over what he went through.\n\nHe isn’t looking to fall in love because he still carries his past relationships, so he lives on that border between play and affection, where nothing stays long enough to hurt. Everything turns to smoke: it arrives, wraps around you and disappears.\n\nFeaturing Santi Jara, the song rides a laid-back, late-night lo-fi and reggaetón beat, perfect for that state where you flirt with everyone so you don’t have to look at yourself.'
      },
      seriesSummary: {
        es: 'Llenar el vacío. Intenta tapar el hueco con muchas personas a la vez. Coquetea con todas, no se compromete con ninguna y, sin darse cuenta, termina lastimando a varias.',
        en: 'Filling the void. He tries to fill the hole with many people at once. He flirts with all of them, commits to none and, without realizing it, ends up hurting several.'
      },
      trivia: [
        { es: 'El video se grabó en Macroviajes, patrocinador de todo el proyecto Apolinari.', en: 'The video was shot at Macroviajes, sponsor of the whole Apolinari project.' },
        { es: 'Santi Jara cambió el coro original para darle más fuerza y hacerlo más pegajoso.', en: 'Santi Jara rewrote the original chorus to give it more punch and make it catchier.' }
      ],
      meta: { composers: ['Error 404', 'East Coast'], producers: PRODUCERS, mixing: 'East Coast', mastering: 'East Coast', label: 'MG Music', recorded: 'Cali, Valle del Cauca' },
      video: videoCredits(['Macroviajes', 'Cali, Valle del Cauca']),
      credits: CREW.concat({ who: 'santi-jara', role: { es: 'Artista invitado', en: 'Featured artist' } })
    },
    {
      id: 'mariangela', n: 4,
      title: 'Mariangela',
      duration: '3:21', release: '2026-05-31',
      genre: { es: 'R&B / Reggaetón', en: 'R&B / Reggaetón' },
      artists: ['east-coast', 'error-404'], featuring: ['yomiel'],
      spotify: 'https://open.spotify.com/track/3w5bUCNv6mHOlpTfC4nqrd', spotifyId: '3w5bUCNv6mHOlpTfC4nqrd',
      apple: 'https://music.apple.com/mx/song/mariangela/6772600576',
      youtube: 'https://youtu.be/GbkDZnzAHSA', youtubeId: 'GbkDZnzAHSA',
      story: {
        es: 'En Mariangela algo cambia. El protagonista conoce a una mujer rumbera, de esas que se adueñan de la pista, y por primera vez en mucho tiempo alguien le mueve el piso de verdad.\n\nLa letra está llena de referencias a la música: canciones, géneros y ritmos aparecen como piezas de un mismo coqueteo, porque es la música la que los conecta y la que marca el compás de cómo se conocen.\n\nEs la primera colaboración internacional del EP: el puertorriqueño Yomiel se suma desde el R&B y el reggaetón, y la canción junta en una misma noche al Caribe con la rumba caleña.',
        en: 'In Mariangela, something changes. The protagonist meets a party girl, the kind who owns the dance floor, and for the first time in a long while someone truly sweeps him off his feet.\n\nThe lyrics are full of music references: songs, genres and rhythms show up as pieces of the same flirtation, because music is what connects them and sets the beat of how they get to know each other.\n\nIt’s the EP’s first international collaboration: Puerto Rico’s Yomiel joins in from R&B and reggaetón, bringing the Caribbean and Cali’s nightlife together in a single night.'
      },
      seriesSummary: {
        es: 'Volver a sentir. Aparece alguien que le mueve el piso. Una mujer rumbera le recuerda que todavía puede ilusionarse, y por primera vez está dispuesto a intentarlo otra vez, siendo mejor.',
        en: 'Feeling again. Someone sweeps him off his feet. A party girl reminds him he can still get his hopes up, and for the first time he’s willing to try again, and to be better.'
      },
      trivia: [
        { es: 'Es la primera colaboración internacional del EP, junto al puertorriqueño Yomiel.', en: 'It’s the EP’s first international collaboration, with Puerto Rico’s Yomiel.' },
        { es: 'El video se grabó en La Esquina Caliente Salsoteca, en Cali.', en: 'The video was shot at La Esquina Caliente Salsoteca, in Cali.' },
        { es: 'Para el rodaje invitaron a escucharla, bailar y parchar a los artistas amigos de East Coast: son los que aparecen al fondo del video.', en: 'East Coast’s artist friends were invited to the shoot to listen, dance and hang out: they’re the ones in the background of the video.' },
        { es: 'Es la única canción del EP compuesta solo por East Coast.', en: 'It’s the only song on the EP written by East Coast alone.' }
      ],
      meta: { composers: ['East Coast'], producers: PRODUCERS, mixing: 'East Coast', mastering: 'East Coast', label: 'MG Music', recorded: 'La Esquina Caliente Salsoteca, Cali' },
      video: videoCredits('La Esquina Caliente Salsoteca, Cali'),
      credits: CREW.concat({ who: 'yomiel', role: { es: 'Artista invitado', en: 'Featured artist' } })
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
      story: {
        es: 'Cache encuentra al protagonista en su mejor momento. Ya no persigue a nadie ni huye de nada: está tranquilo, rodeado de sus amigos y disfrutando de todo lo que ha construido.\n\nEs una canción de celebración. Los lujos, el éxito, el parche y la buena vida aparecen como la recompensa de haber atravesado el duelo. El protagonista por fin se siente completo, con el caché de alguien que sabe lo que vale.\n\nSobre una cumbia urbana luminosa, Cache suena a final feliz. Pero a Apolinari todavía le quedan dos capítulos por contar.',
        en: 'Cache finds the protagonist at his best. He’s no longer chasing anyone or running from anything: he’s at peace, surrounded by his friends and enjoying everything he has built.\n\nIt’s a celebration song. Luxury, success, good friends and the good life come as the reward for getting through the grief. The protagonist finally feels whole, with the swagger of someone who knows his worth.\n\nOver a bright urban cumbia, Cache sounds like a happy ending. But Apolinari still has two chapters left to tell.'
      },
      seriesSummary: {
        es: 'La plenitud. Recuperado, rodeado de amigos y con la vida que soñó, el protagonista se siente completo. Parece el final feliz… ¿o no?',
        en: 'Fulfillment. Healed, surrounded by friends and living the life he dreamed of, the protagonist feels whole. It looks like a happy ending… or does it?'
      },
      trivia: [
        { es: 'Es el video más sencillo del EP hasta la fecha.', en: 'It’s the simplest video on the EP so far.' },
        { es: 'La idea era grabar un parche con los amigos tal y como es normalmente, sin adornos.', en: 'The idea was to film a hangout with friends exactly as it usually goes, nothing staged.' }
      ],
      meta: { composers: ['Error 404', 'East Coast'], producers: PRODUCERS, mixing: 'East Coast', mastering: 'East Coast', label: 'MG Music', recorded: 'Cali, Valle del Cauca' },
      video: videoCredits('Cali, Valle del Cauca'),
      credits: CREW
    },
    /* Capítulos 6 y 7: toda la información es anónima hasta el estreno */
    {
      id: 'capitulo-6', n: 6,
      title: '', /* Cuando tenga nombre, escríbelo aquí */
      countdown: '2026-11-27T00:00:00-05:00',
      duration: '', release: '',
      genre: { es: '', en: '' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: '', spotifyId: '', apple: '', youtube: '', youtubeId: '',
      story: { es: '', en: '' }, seriesSummary: { es: '', en: '' }, trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', label: 'MG Music', recorded: '' },
      video: { director: '', visual: '', studio: '', lights: '', locations: '' },
      credits: []
    },
    {
      id: 'capitulo-7', n: 7,
      title: '',
      countdown: '2026-12-18T00:00:00-05:00',
      duration: '', release: '',
      genre: { es: '', en: '' },
      artists: ['east-coast', 'error-404'], featuring: [],
      spotify: '', spotifyId: '', apple: '', youtube: '', youtubeId: '',
      story: { es: '', en: '' }, seriesSummary: { es: '', en: '' }, trivia: [],
      meta: { composers: '', producers: '', mixing: '', mastering: '', label: 'MG Music', recorded: '' },
      video: { director: '', visual: '', studio: '', lights: '', locations: '' },
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
      }
    },
    'error-404': {
      id: 'error-404',
      name: 'Error 404',
      aka: 'Error 404',
      realName: 'Deiby Alexander Rodríguez Rodallega',
      born: '2001-11-11',
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
      }
    }
  },

  /* Prensa: aplica a East Coast y Error 404 (siempre van juntos).
     Se muestra en las dos páginas de artista y en Prensa. Más reciente primero.
     url y date son opcionales. */
  press: [
    { outlet: 'The Rous Show · Canal CaliTV', handle: 'therousshowtv', date: '2026-04-09',
      kind: { es: 'Entrevista en TV', en: 'TV interview' },
      url: 'https://www.instagram.com/p/DW6yZ2HgcqT/',
      text: { es: 'Entrevista sobre el camino que venimos construyendo con pasión, disciplina y flow: los sueños se trabajan todos los días.', en: 'An interview about the path we’ve been building with passion, discipline and flow: dreams are worked on every day.' },
      note: { es: 'Dato curioso: en la publicación nos presentan como “el dúo East Coast”. Fue una confusión que nos dio mucha risa y hoy la guardamos como anécdota.', en: 'Fun fact: the post introduces us as “the duo East Coast”. It was a mix-up that made us laugh a lot, and now it’s one of our favorite anecdotes.' } },
    { outlet: 'Oriente Estéreo 96.0 FM · Cali', date: '2026-03-05',
      kind: { es: 'Entrevista en radio', en: 'Radio interview' },
      text: { es: 'Entrevista en vivo en la emisora caleña.', en: 'Live interview on the Cali radio station.' } },
    { outlet: 'Entérate Cali', handle: 'enteratecali', date: '2026-03-02',
      kind: { es: 'Nota de prensa', en: 'Press feature' },
      url: 'https://www.instagram.com/p/DVY98fZEc74/',
      text: { es: 'Nota sobre el estreno de “No debiste amarme”, el capítulo 1: una cumbia con reggaetón que habla de las etapas del duelo tras una ruptura, con un ritmo para bailar. Ya sumaba unas 13.000 reproducciones.', en: 'A feature on the release of “No debiste amarme”, chapter 1: cumbia meets reggaetón in a song about the stages of grief after a breakup, set to a danceable beat. It had already reached about 13,000 streams.' } }
  ],

  /* --------------------------------------------------------------------- */
  team: [
    { id: 'mg-music', name: 'MG Music', type: 'logo', group: 'label',
      role: { es: 'Sello discográfico', en: 'Record label' }, instagram: 'mgmusicoficial', img: 'team/mg-music' },
    { id: 'calipsis-music', name: 'Calipsis Music', type: 'logo', group: 'visual',
      role: { es: 'Producción visual', en: 'Visual production' }, instagram: 'calipsismusic', img: 'team/calipsis-music' },
    { id: 'ospina-records', name: 'Ospina Records', type: 'logo', group: 'visual',
      role: { es: 'Producción visual', en: 'Visual production' }, instagram: 'ospinarecords_', img: 'team/ospina-records' },
    { id: 'camilo-medina', name: 'Camilo Medina', type: 'person', group: 'direction',
      role: { es: 'Dirección', en: 'Director' }, instagram: 'medinavisuals__', img: 'team/camilo-medina' },
    { id: 'juan-valens', name: 'Juan Valens', type: 'person', group: 'crew',
      role: { es: 'Luces y asistencia de producción', en: 'Lights & production assistant' }, instagram: 'juan_valens', img: 'team/juan-valens' },
    { id: 'sebastian-gonzalez', name: 'Sebastián González', type: 'person', group: 'crew',
      role: { es: 'Luces y asistencia de producción', en: 'Lights & production assistant' }, instagram: 'sb.rompiendo', img: 'team/sebastian-gonzalez' },
    /* Artistas invitados. Sin 'img' se mostraría un monograma con su 'color'. */
    { id: 'santi-jara', name: 'Santi Jara', type: 'person', group: 'guests', color: '#7b2fd0',
      role: { es: 'Artista invitado', en: 'Featured artist' }, instagram: 'santi__jara', img: 'team/santi-jara',
      bio: {
        es: 'Artista caleño de música urbana que hace canciones con mucho amor y calidad. Sus letras giran principalmente alrededor del despecho, y su identidad visual es muy clara: el morado es su color.',
        en: 'An urban music artist from Cali who makes songs with a lot of love and care. His lyrics revolve mostly around heartbreak, and his visual identity is unmistakable: purple is his color.'
      } },
    { id: 'yomiel', name: 'Yomiel', type: 'person', group: 'guests', color: '#2f4ff0',
      role: { es: 'Artista invitado', en: 'Featured artist' }, instagram: 'yohoneypr', img: 'team/yomiel',
      bio: {
        es: 'Artista puertorriqueño de música urbana. Su participación en Mariangela convirtió la canción en la primera colaboración internacional de Apolinari.',
        en: 'A Puerto Rican urban music artist. His feature on Mariangela made it Apolinari’s first international collaboration.'
      } },
    /* Patrocinadores ('instagram' es opcional) */
    { id: 'macroviajes', name: 'Macroviajes', type: 'logo', group: 'sponsors',
      role: { es: 'Patrocinador oficial', en: 'Official sponsor' }, instagram: 'macroviajes.turismo', img: 'team/macroviajes',
      bio: {
        es: 'Agencia de viajes de Cali y patrocinador de todo el proyecto Apolinari. Además, el video de Frontera y humo se grabó en sus instalaciones.',
        en: 'A travel agency from Cali and sponsor of the whole Apolinari project. The Frontera y humo music video was also shot at its offices.'
      } }
  ],

  /* Fotos de shows en vivo */
  liveEvent: { name: 'Borondo', place: 'Vallegrande, Cali', date: '2026-10-08' },
  live: ['en-vivo-1', 'en-vivo-6', 'en-vivo-4', 'en-vivo-2', 'en-vivo-7', 'en-vivo-5', 'en-vivo-3', 'en-vivo-8'],

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
