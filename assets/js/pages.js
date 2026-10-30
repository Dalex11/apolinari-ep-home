/* =========================================================================
   APOLINARI EP · Páginas
   ========================================================================= */
(function () {
  'use strict';
  const A = window.App;
  const { D, I, $, $$, esc, url, t, L, fmt, fmtDate, pad, songTitle, songHref, artistHref, teamHref, img, isLocked } = A;
  const lang = () => A.state.lang;
  const gs = () => A.hasGSAP ? window.gsap : null;

  /* ---------- piezas reutilizables ---------- */
  const crumbs = items => `<nav class="crumbs" aria-label="${lang() === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}">${items.map((it, i) => i < items.length - 1 ? `<a href="${it.href}">${esc(it.label)}</a><span aria-hidden="true">/</span>` : `<span aria-current="page">${esc(it.label)}</span>`).join('')}</nav>`;
  const home = () => ({ label: t('nav.home'), href: url('index.html') });
  const vinyl = (cls = '') => `<div class="vinyl ${cls}" aria-hidden="true"><div class="vinyl__label"><img src="${url('assets/img/brand/portada-512.jpg')}" alt="" loading="lazy"></div><div class="vinyl__hole"></div></div>`;
  const ig = h => `https://instagram.com/${h}`;
  const artistsLine = (s, linked = true) => {
    const main = s.artists.map(id => { const a = D.artists[id]; return linked ? `<a href="${artistHref(id)}">${esc(a.name)}</a>` : esc(a.name); });
    const feat = s.featuring.map(id => { const m = D.team.find(x => x.id === id); return !m ? esc(id) : linked ? `<a href="${teamHref(id)}">${esc(m.name)}</a>` : esc(m.name); });
    return main.concat(feat).join(' x ');
  };
  // Foto o logo; si no hay imagen, monograma con el color del artista
  const avatar = (m, alt = '') => m.img ? `<img src="${img(m.img)}" alt="${esc(alt)}" loading="lazy">` :
    `<span class="mono" style="--mono:${m.color || 'var(--yellow)'}" ${alt ? `role="img" aria-label="${esc(alt)}"` : 'aria-hidden="true"'}>${esc(m.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2))}</span>`;
  // Enlaza un nombre a la página del artista o del equipo, si existe
  const linkName = name => {
    const a = Object.values(D.artists).find(x => x.name === name), m = D.team.find(x => x.name === name);
    return a ? `<a class="link-u" href="${artistHref(a.id)}">${esc(name)}</a>` : m ? `<a class="link-u" href="${teamHref(m.id)}">${esc(name)}</a>` : esc(name);
  };
  const listen = (s, cls = 'btn--ghost') => s.spotify ? `
      <a class="btn ${cls} platform platform--spotify" href="${s.spotify}" target="_blank" rel="noopener" data-magnetic>${I.spotify}Spotify</a>
      <a class="btn ${cls} platform platform--apple" href="${s.apple}" target="_blank" rel="noopener" data-magnetic>${I.apple}Apple Music</a>
      <a class="btn ${cls} platform platform--youtube" href="${s.youtube}" target="_blank" rel="noopener" data-magnetic>${I.youtube}YouTube</a>` :
    `<span class="btn btn--ghost" aria-disabled="true">${I.lock}${t('upcoming')}</span>`;
  const iconLinks = s => s.spotify ? `
      <a class="icon-btn platform platform--spotify" href="${s.spotify}" target="_blank" rel="noopener" aria-label="${t('listenOn')} Spotify: ${esc(songTitle(s))}" title="Spotify">${I.spotify}</a>
      <a class="icon-btn platform platform--apple" href="${s.apple}" target="_blank" rel="noopener" aria-label="${t('listenOn')} Apple Music: ${esc(songTitle(s))}" title="Apple Music">${I.apple}</a>
      <a class="icon-btn platform platform--youtube" href="${s.youtube}" target="_blank" rel="noopener" aria-label="${t('watch')}: ${esc(songTitle(s))}" title="YouTube">${I.youtube}</a>` : '';
  const empty = msg => `<div class="empty">${I.feather}<p>${esc(msg)}</p></div>`;
  const nextUp = () => D.songs.find(s => s.countdown && new Date(s.countdown) > new Date());
  const released = () => D.songs.filter(s => s.spotify);
  const bigTitle = (txt, cls = 'page-title') => `<h1 class="${cls}" data-split>${esc(txt)}</h1>`;
  const flick = (word, colors) => '<span class="nowrap">' + word.split('').map((ch, i) => `<span class="flick ${colors[i] || ''}" data-c="${colors[i] || ''}">${ch}</span>`).join('') + '</span>';

  const Pages = {};

  /* =======================================================================
     INICIO
     ======================================================================= */
  Pages.home = {
    render() {
      const nx = nextUp();
      const ec = D.artists['east-coast'], er = D.artists['error-404'];
      const caleno = flick('CALEÑO', ['c-b', 'c-r', '', '', 'c-r', 'c-g']);
      const colombia = flick('COLOMBIA', ['c-y', 'c-y', 'c-y', 'c-y', 'c-b', 'c-b', 'c-r', 'c-r']);
      const hl = lang() === 'es'
        ? `Este proyecto ${caleno} busca contar ${colombia} en sonido e imagen`
        : `A project from ${flick('CALI', ['c-b', 'c-r', '', 'c-g'])} telling ${colombia} through sound and image`;
      return `
      <section class="hero" aria-label="APOLINARI EP">
        <div class="hero__window" data-hero>
          <div class="hero__bar" aria-hidden="true"><i></i><i></i><i></i><span>apolinari.ep · ${t('chapter')} 01 — 07</span></div>
          <div class="hero__flag"><img src="${img('bandera')}" alt="${lang() === 'es' ? 'Bandera de Colombia ondeando sobre las montañas' : 'Colombian flag waving over the mountains'}" data-hero-flag><div class="hero__vertical" aria-hidden="true">Apolinari EP</div></div>
          <div class="hero__mid">
            <div class="meta" data-hero-in><div class="f-italic">APOLINARI<br>East Coast x Error 404</div><span class="hero__pm">℗MG MUSIC</span></div>
            <div class="hero__desc" data-hero-in><h2>${t('home.descTitle')}</h2><p>${esc(L(D.ep.description))}</p></div>
            <h1 class="hero__headline" data-hero-hl>${hl}</h1>
            <div class="hero__cta" data-hero-in>
              <a class="btn btn--primary btn--lg" href="${D.ep.spotifyPlaylist}" target="_blank" rel="noopener" data-magnetic>${I.spotify}${t('listenEP')}</a>
              <a class="btn btn--ghost btn--lg" href="${url('la-serie.html')}" data-magnetic>${I.youtube}${t('watchSeries')}</a>
            </div>
            ${nx ? `<div class="hero__next" data-hero-in><span class="eyebrow">${t('hero.next')}</span>${A.countdownHTML(nx.countdown)}<a class="link-u" href="${songHref(nx)}">${t('chapter')} ${nx.n} ${I.arrow}</a></div>` : ''}
          </div>
          <div class="hero__photo">
            <div class="hero__stage">
              <div class="bird" data-bird role="button" tabindex="0" aria-label="${lang() === 'es' ? 'Portada de Apolinari: cucarachero con sombrero vueltiao. Tócalo.' : 'Apolinari cover: wren wearing a sombrero vueltiao. Tap it.'}">
                <img src="${url('assets/img/brand/pajaro.webp')}" alt="" width="806" height="1000" fetchpriority="high">
                <span class="bird__eye bird__eye--l"><i></i></span><span class="bird__eye bird__eye--r"><i></i></span>
                <span class="bird__shadow"></span>
              </div>
              <span class="bird__hint" aria-hidden="true">${t('hero.birdHint')}</span>
            </div>
            <div class="hero__caption"><span class="f-italic">${lang() === 'es' ? 'Cucarachero de Apolinar' : 'Apolinar’s wren'}</span><small>Cistothorus apolinari</small></div>
          </div>
          <a class="hero__scroll" href="#intro" aria-label="${t('hero.scroll')}" data-scroll-to="#intro">
            <svg class="ring" viewBox="0 0 92 92" aria-hidden="true"><defs><path id="circ" d="M46,46 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs><text><textPath href="#circ">${t('hero.scroll')} · ${t('hero.scroll')} · ${t('hero.scroll')} · </textPath></text></svg>
            ${I.arrowDown}
          </a>
        </div>
      </section>

      ${A.marquee(['Cumbia urbana', 'Dembow', 'Currulao', 'Lo-fi', 'R&B', 'Reggaetón', 'Rock', 'Cali', 'Colombia'])}

      <section class="section" id="intro">
        <div class="wrap">
          <div class="split-2">
            <div>
              <p class="eyebrow" data-reveal>${t('home.visualTitle')}</p>
              <h2 class="section-title--elegant" style="margin-top:14px" data-split>${lang() === 'es' ? 'Sonido del barrio, raíces del país' : 'Sound of the barrio, roots of the land'}</h2>
            </div>
            <div class="prose" data-reveal>
              <p class="lead">${esc(L(D.ep.visual))}</p>
              <p>${esc(L(D.ep.distribution))}</p>
              <div class="btn-row" style="margin-top:26px"><a class="link-u" href="${url('la-serie.html')}">${t('home.seriesTitle')} ${I.arrow}</a> &nbsp; <a class="link-u" href="${url('canciones.html')}">${t('nav.songs')} ${I.arrow}</a></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--tight" aria-labelledby="insp-t">
        <div class="wrap">
          <div class="section-head"><h2 class="section-title" id="insp-t" data-split>${t('home.inspTitle')}</h2><p class="lead" data-reveal style="max-width:36ch">${t('home.inspIntro')}.</p></div>
          <div class="insp">
            <article class="insp__card"><img src="${img('cucarachero')}" alt="${lang() === 'es' ? 'Cucarachero de Apolinar posado en un junco' : 'Apolinar’s wren perched on a reed'}" data-parallax=".12" loading="lazy">
              <span class="eyebrow">01 · ${t('home.bird')}</span><h3>Apolinar</h3><p>${esc(L(D.ep.inspirationBird))}</p></article>
            <article class="insp__card insp__card--god">
              <svg class="lyre" viewBox="0 0 200 220" aria-hidden="true"><path d="M60 200 C 20 150, 20 70, 50 30 C 60 18, 75 20, 72 40 M140 200 C 180 150, 180 70, 150 30 C 140 18, 125 20, 128 40"/><path d="M45 190 H155"/><line x1="58" y1="70" x2="142" y2="70"/>${[78, 92, 106, 120].map(x => `<line class="str" x1="${x}" y1="70" x2="${x}" y2="190"/>`).join('')}<circle cx="100" cy="205" r="6"/></svg>
              <span class="eyebrow">02 · ${t('home.god')}</span><h3>${lang() === 'es' ? 'Apolo' : 'Apollo'}</h3><p>${esc(L(D.ep.inspirationApollo))}</p></article>
          </div>
        </div>
      </section>

      <section class="tl" aria-labelledby="tl-t">
        <div class="tl__pin">
          <div class="tl__head"><div><h2 class="section-title" id="tl-t" data-split>${t('home.tracklist')}</h2><p class="lead" style="margin-top:10px">${t('home.tracklistSub')}</p></div>
            <a class="btn btn--ghost" href="${url('canciones.html')}" data-magnetic>${t('seeAll')} ${I.arrow}</a></div>
          <div class="tl__track">
            ${D.songs.map(s => {
              const locked = isLocked(s);
              return `<a class="tcard ${locked ? 'tcard--locked' : ''}" href="${songHref(s)}" data-song="${s.id}" data-cursor="${locked ? t('upcoming') : t('listen')}">
                ${locked ? '' : vinyl('tcard__vinyl')}
                <span class="tcard__n">${pad(s.n)}</span>
                <div><h3 class="tcard__title">${locked ? 'X X X' : esc(songTitle(s))}</h3>
                  <p class="tcard__meta">${artistsLine(s, false)}<br>${locked ? (L(s.genre) ? esc(L(s.genre)) : t('upcoming')) : esc(fmtDate(s.release)) + ' · ' + esc(L(s.genre))}</p></div>
                <div class="tcard__foot">${locked ? A.countdownHTML(s.countdown) : `<span class="tcard__dur">${s.duration}</span><span class="chip">${t('seeStory')} →</span>`}</div>
              </a>`;
            }).join('')}
            <div class="tcard tcard--end"><div><p class="f-sign" style="font-size:2.6rem;line-height:1">Apolinari</p><p class="f-italic" style="margin:14px 0 20px">${esc(L(D.site.quote))}</p><a class="btn btn--primary" style="background:var(--block-ink);color:var(--block)" href="${D.ep.spotifyPlaylist}" target="_blank" rel="noopener">${I.spotify}Playlist</a></div></div>
          </div>
          <div class="tl__bar" aria-hidden="true"><i></i></div>
        </div>
      </section>

      <section class="section" aria-labelledby="ar-t">
        <div class="wrap">
          <div class="section-head"><h2 class="section-title" id="ar-t" data-split>${t('home.artistsTitle')}</h2><p class="lead" data-reveal style="max-width:34ch">${t('home.artistsSub')}</p></div>
          <div class="duo" data-reveal>
            ${[ec, er].map(a => `<a class="duo__panel" href="${artistHref(a.id)}" data-cursor="${t('seeArtist')}">
              <img src="${img(a.photos[0])}" alt="${esc(a.name)}" loading="lazy">
              <div><div class="duo__name ${a.id === 'error-404' ? 'glitch' : ''}" data-text="${esc(a.name)}">${esc(a.name)}</div><div class="duo__real">${esc(a.realName)}</div></div>
              <span class="duo__go" aria-hidden="true">${I.arrowUR}</span></a>`).join('')}
          </div>
        </div>
      </section>

      ${A.marquee([L(D.site.quote)], 'marquee--sm marquee--rev')}

      <section class="section" aria-labelledby="ga-t">
        <div class="wrap">
          <div class="section-head"><h2 class="section-title--elegant" id="ga-t" data-split>${t('home.galleryTitle')}</h2><p class="lead" data-reveal style="max-width:34ch">${t('home.gallerySub')}</p></div>
          <div class="gallery">${D.gallery.map((g, i) => `<a class="gallery__item" href="${img(g)}" data-gallery="home" data-reveal data-cursor="${lang() === 'es' ? 'Ver' : 'View'}"><img src="${img(g, true)}" alt="${lang() === 'es' ? 'Registro fotográfico del rodaje' : 'Behind the scenes photo'} ${i + 1}" loading="lazy"></a>`).join('')}</div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="wrap">
          <div class="cta-panel" data-reveal>
            <div><p class="eyebrow" style="color:rgba(241,236,227,.6)">${released().length}/${D.songs.length} ${t('series.progress')}</p>
              <h2 class="section-title" style="margin:12px 0 18px">${t('home.seriesTitle')}</h2>
              <p class="lead">${t('home.seriesText')}</p>
              <div class="btn-row" style="margin-top:28px"><a class="btn btn--primary btn--lg" href="${url('la-serie.html')}" data-magnetic>${t('watchSeries')} ${I.arrow}</a><a class="btn btn--ghost btn--lg" href="${D.ep.youtubePlaylist}" target="_blank" rel="noopener">${I.youtube}YouTube</a></div>
            </div>
            <div style="position:relative;max-width:420px;justify-self:center;width:100%">${vinyl('spin')}</div>
          </div>
        </div>
      </section>

      <section class="section section--tight" aria-labelledby="tm-t">
        <div class="wrap">
          <div class="section-head"><h2 class="section-title--elegant" id="tm-t" data-split>${t('home.teamTitle')}</h2><a class="link-u" href="${url('equipo.html')}">${t('seeAll')} ${I.arrow}</a></div>
          <div class="team-grid">${D.team.filter(m => m.group !== 'guests').map(m => `<a class="tm" href="${teamHref(m.id)}" data-reveal><span class="tm__img">${avatar(m)}</span><span><span class="tm__name">${esc(m.name)}</span><span class="tm__role" style="display:block">${esc(L(m.role))}</span></span><span class="tm__arrow">${I.arrowUR}</span></a>`).join('')}</div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="wrap"><div class="soon" data-reveal><div><p class="eyebrow">${t('upcoming')}</p><h3>${t('home.showsTitle')}</h3><p class="lead" style="margin-top:8px">${t('home.showsText')}</p></div>
          <div class="btn-row"><a class="btn btn--ghost" href="${ig(ec.instagram)}" target="_blank" rel="noopener">${I.instagram}@${ec.instagram}</a><a class="btn btn--ghost" href="${ig(er.instagram)}" target="_blank" rel="noopener">${I.instagram}@${er.instagram}</a></div></div></div>
      </section>

      <section class="quote" aria-label="${lang() === 'es' ? 'Lema' : 'Motto'}">
        ${[[8, 20], [86, 14], [14, 78], [90, 70], [50, 8], [70, 88]].map(([x, y], i) => `<span class="twinkle" style="left:${x}%;top:${y}%;animation-delay:${i * .4}s" aria-hidden="true">✦</span>`).join('')}
        <span class="quote__sig" aria-hidden="true">EastCoast x Error 404</span>
        <p class="quote__text" data-split>${esc(L(D.site.quote))}</p>
      </section>`;
    },

    loader(done) {
      const G = window.gsap;
      const el = document.createElement('div');
      el.className = 'loader'; el.setAttribute('role', 'progressbar'); el.setAttribute('aria-valuemin', 0); el.setAttribute('aria-valuemax', 100); el.setAttribute('aria-label', t('loading'));
      el.innerHTML = `<div class="loader__top"><span>℗ MG Music</span><span>Cali · Colombia</span></div>
        <div class="loader__mid"><div class="loader__word" aria-hidden="true">${'APOLINARI'.split('').map(c => `<span>${c}</span>`).join('')}</div></div>
        <div class="loader__bottom"><span class="loader__count">00</span><div class="loader__bar"><i></i></div><span class="loader__quote">${esc(L(D.site.quote))}</span></div>`;
      document.body.appendChild(el);
      const srcs = [url('assets/img/brand/pajaro.webp'), img('bandera'), img('cucarachero'), img('east-coast-1'), img('error-404-1')];
      let loaded = 0; const prog = { v: 0 };
      srcs.forEach(s => { const i = new Image(); i.onload = i.onerror = () => loaded++; i.src = s; });
      const cnt = $('.loader__count', el), bar = $('.loader__bar i', el);
      G.fromTo($$('.loader__word span', el), { yPercent: 110 }, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: .05, delay: .1 });
      const tick = () => {
        const target = Math.max(loaded / srcs.length * 100, prog.v);
        prog.v = Math.min(100, prog.v + Math.max(.6, (target - prog.v) * .08) + (loaded === srcs.length ? 2.5 : 0));
        const v = Math.floor(prog.v); cnt.textContent = pad(v); bar.style.transform = `scaleX(${v / 100})`; el.setAttribute('aria-valuenow', v);
        if (v >= 100) { G.ticker.remove(tick); finish(); }
      };
      G.ticker.add(tick);
      const finish = () => {
        A.Sound.chirp(2);
        const tl = G.timeline({ onComplete: () => { el.remove(); } });
        tl.to($$('.loader__word span', el), { yPercent: -110, duration: .6, ease: 'expo.in', stagger: .03 })
          .to(el, { yPercent: -100, duration: 1, ease: 'expo.inOut' }, '-=.15')
          .add(() => { Pages.home.intro(); done(); }, '-=.55');
      };
    },

    intro() {
      const G = gs(); if (!G || this._introDone) return; this._introDone = true;
      const hl = $('[data-hero-hl]');
      A.splitText(hl);
      G.timeline({ defaults: { ease: 'expo.out' } })
        .from('[data-hero]', { scale: .94, borderRadius: 60, opacity: 0, duration: 1.4 })
        .from('[data-hero-flag]', { scale: 1.6, duration: 2 }, 0)
        .from('.hero__vertical', { yPercent: 40, opacity: 0, duration: 1.4 }, .2)
        .from($$('.split-word', hl), { yPercent: 115, duration: 1.1, stagger: .035 }, .3)
        .from('[data-hero-in]', { y: 30, opacity: 0, duration: 1, stagger: .1 }, .4)
        .from('[data-bird]', { y: -260, rotate: -12, opacity: 0, duration: 1.4, ease: 'bounce.out' }, .35)
        .from('.bird__hint', { opacity: 0, scale: .6, duration: .8 }, 1.4)
        .from('.hero__scroll', { scale: 0, duration: .8 }, 1.2);
    },

    after() {
      const G = gs();
      // Sin loader → intro directa
      if (!this._introDone && A.store.sget('loaded')) this.intro();

      // Pájaro interactivo
      const bird = $('[data-bird]'), stage = $('.hero__photo'), eyes = $$('.bird__eye');
      let clicks = 0;
      if (bird) {
        const hero = $('[data-hero]');
        if (A.FINE && !A.REDUCED) hero.addEventListener('mousemove', e => {
          const r = bird.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
          const dx = (e.clientX - cx) / innerWidth, dy = (e.clientY - cy) / innerHeight;
          bird.style.transform = `rotateY(${dx * 22}deg) rotateX(${-dy * 14}deg) translateZ(0)`;
          eyes.forEach(ey => ey.style.translate = `${dx * 14}px ${dy * 10}px`);
        });
        hero.addEventListener('mouseleave', () => { bird.style.transform = ''; eyes.forEach(ey => ey.style.translate = ''); });
        const poke = () => {
          clicks++; A.Sound.ensure(); A.Sound.unlock(); A.Sound.chirp(2 + (clicks % 3));
          $('.bird__hint') && ($('.bird__hint').style.opacity = 0);
          if (G) G.fromTo(bird, { y: 0 }, { y: -40, duration: .22, yoyo: true, repeat: 1, ease: 'power2.out' });
          feathers(stage, bird);
          if (clicks === 5) { bird.classList.add('is-angry'); A.toast(lang() === 'es' ? '¡Ya, ya! El Apolinari se puso bravo 👀' : 'Okay, okay! The Apolinari is getting angry 👀', I.feather); }
          if (clicks >= 9) { clicks = 0; bird.classList.remove('is-angry'); A.confetti(40); }
        };
        bird.addEventListener('click', poke);
        bird.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poke(); } });
      }
      // Titular: parpadeo de colores
      const flicks = $$('.hero__headline .flick');
      if (flicks.length && !A.REDUCED) {
        const cls = ['c-y', 'c-b', 'c-r', 'c-g'];
        this._flick && clearInterval(this._flick);
        this._flick = setInterval(() => {
          const f = flicks[Math.floor(Math.random() * flicks.length)];
          f.className = 'flick split-word ' + cls[Math.floor(Math.random() * cls.length)];
          setTimeout(() => { f.className = 'flick split-word ' + (f.dataset.c || ''); }, 260);
        }, 900);
      }
      // Botón desliza
      const sc = $('[data-scroll-to]');
      sc && sc.addEventListener('click', e => { e.preventDefault(); const tg = $(sc.dataset.scrollTo); A.lenis ? A.lenis.scrollTo(tg, { offset: -40, duration: 1.4 }) : tg.scrollIntoView({ behavior: 'smooth' }); });

      // Previews en tarjetas del tracklist
      $$('.tcard[data-song]').forEach(c => {
        const s = D.songs.find(x => x.id === c.dataset.song);
        c.addEventListener('mouseenter', () => !isLocked(s) && A.Sound.previewStart(s));
        c.addEventListener('mouseleave', () => A.Sound.previewStop());
      });

      if (!G) return;
      const ST = window.ScrollTrigger;
      // Hero se encoge al hacer scroll. Se anima la sección (no la ventana) con valores
      // explícitos: así no choca con la intro, que también anima la opacidad de [data-hero].
      const mm = G.matchMedia();
      mm.add('(min-width: 1081px)', () => { G.fromTo('.hero', { scale: 1, opacity: 1 }, { scale: .9, opacity: .4, ease: 'none', immediateRender: false, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } }); });
      // Tracklist horizontal (escritorio)
      mm.add('(min-width: 861px)', () => {
        const track = $('.tl__track'), pin = $('.tl__pin');
        const dist = () => Math.max(0, track.scrollWidth - innerWidth);
        const tw = G.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.tl', pin, start: 'top top', end: () => '+=' + dist(), scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
        G.to('.tl__bar i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.tl', start: 'top top', end: () => '+=' + dist(), scrub: true } });
        $$('.tcard__vinyl').forEach(v => G.to(v, { rotate: 720, ease: 'none', scrollTrigger: { trigger: '.tl', start: 'top top', end: () => '+=' + dist(), scrub: true } }));
        $$('.tcard').forEach((c, i) => G.from(c, { y: 80 + (i % 2) * 60, rotate: i % 2 ? 2 : -2, opacity: 0, ease: 'power3.out', scrollTrigger: { trigger: c, containerAnimation: tw, start: 'left 105%', end: 'left 70%', scrub: true } }));
        return () => {};
      });
      // Cita: firma dibujándose
      G.from('.quote__sig', { clipPath: 'inset(0 100% 0 0)', duration: 2.2, ease: 'power2.inOut', scrollTrigger: { trigger: '.quote', start: 'top 70%', once: true } });
      ST.refresh();
    }
  };
  function feathers(stage, bird) {
    const r = bird.getBoundingClientRect(), sr = stage.getBoundingClientRect();
    const cols = ['#8a5a2b', '#b07a45', '#e8dcc6', '#5a3a1c'];
    for (let i = 0; i < 8; i++) {
      const f = document.createElement('i'); f.className = 'feather';
      f.style.left = (r.left - sr.left + r.width * (.3 + Math.random() * .4)) + 'px';
      f.style.top = (r.top - sr.top + r.height * (.3 + Math.random() * .3)) + 'px';
      f.style.background = cols[i % cols.length];
      stage.appendChild(f);
      f.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${(Math.random() - .5) * 260}px,${120 + Math.random() * 160}px) rotate(${(Math.random() - .5) * 540}deg)`, opacity: 0 }], { duration: 1400 + Math.random() * 800, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => f.remove();
    }
  }

  /* =======================================================================
     CANCIONES
     ======================================================================= */
  Pages.songs = {
    title: () => `${t('songs.title')} · APOLINARI EP`,
    render() {
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('songs.title') }])}${bigTitle(t('songs.title'))}<p class="lead" data-reveal>${t('songs.intro')}</p></header>
        <div class="ep-block" data-reveal>
          <div class="ep-block__cover"><img src="${url('assets/img/brand/portada-512.jpg')}" alt="${lang() === 'es' ? 'Portada del EP Apolinari' : 'Apolinari EP cover'}"></div>
          <div><p class="eyebrow">APOLINARI · ${D.songs.length} ${t('chapters')}</p><h2>${t('songs.epTitle')}</h2><p style="color:var(--ink-2);margin-top:6px">${t('songs.epText')}</p></div>
          <div class="btn-row"><a class="btn btn--primary platform" href="${D.ep.spotifyPlaylist}" target="_blank" rel="noopener" data-magnetic>${I.spotify}${t('songs.playlistSpotify')}</a><a class="btn btn--ghost platform platform--youtube" href="${D.ep.youtubePlaylist}" target="_blank" rel="noopener" data-magnetic>${I.youtube}${t('songs.playlistYoutube')}</a></div>
        </div>
        <ol class="songlist">
          ${D.songs.map(s => {
            const locked = isLocked(s);
            return `<li class="srow ${locked ? 'srow--locked' : ''}" data-song="${s.id}" data-reveal>
              <span class="srow__n" aria-hidden="true">${pad(s.n)}</span>
              <div><h2 class="srow__title"><a href="${songHref(s)}">${locked ? `${t('chapter')} ${s.n}` : esc(songTitle(s))}</a></h2>
                <div class="srow__meta"><span>${artistsLine(s)}</span>${L(s.genre) ? `<span>${esc(L(s.genre))}</span>` : ''}${s.release ? `<span>${esc(fmtDate(s.release))}</span>` : ''}</div></div>
              <span class="srow__dur">${locked ? '' : s.duration}</span>
              <div class="srow__links">${locked ? A.countdownHTML(s.countdown) : `${iconLinks(s)}<button class="icon-btn" data-preview="${s.id}" aria-label="${t('songs.preview')}: ${esc(songTitle(s))}" title="${t('songs.preview')}">${I.play}</button><a class="btn btn--sm btn--ghost" href="${songHref(s)}">${t('seeStory')}</a>`}</div>
            </li>`;
          }).join('')}
        </ol>
        <div class="srow__float" aria-hidden="true">${vinyl('spin')}</div>
      </div>`;
    },
    after() {
      const fl = $('.srow__float');
      let playing = null;
      $$('.srow[data-song]').forEach(r => {
        const s = D.songs.find(x => x.id === r.dataset.song);
        if (A.FINE) {
          r.addEventListener('mouseenter', () => { if (!isLocked(s)) { fl.style.opacity = 1; fl.style.scale = 1; A.Sound.previewStart(s); } });
          r.addEventListener('mouseleave', () => { fl.style.opacity = 0; fl.style.scale = .6; A.Sound.previewStop(); });
          r.addEventListener('mousemove', e => { fl.style.left = e.clientX + 120 + 'px'; fl.style.top = e.clientY + 'px'; });
        }
      });
      $$('[data-preview]').forEach(b => b.addEventListener('click', () => {
        const s = D.songs.find(x => x.id === b.dataset.preview);
        if (playing === b) { A.Sound.previewStop(); b.innerHTML = I.play; playing = null; return; }
        if (playing) playing.innerHTML = I.play;
        A.Sound.ensure(); A.Sound.unlock();
        if (!A.state.sound) { A.toast(A.t('sound.unmute'), I.music); return; }
        A.Sound.previewStart(s); b.innerHTML = I.pause; b.setAttribute('aria-label', t('songs.stopPreview')); playing = b;
        if (!s.preview) setTimeout(() => { if (playing === b) { b.innerHTML = I.play; playing = null; } }, 600);
      }));
    }
  };

  /* =======================================================================
     CANCIÓN
     ======================================================================= */
  const FIELD_ORDER = ['composers', 'producers', 'mixing', 'mastering', 'label', 'recorded'];
  const VIDEO_ORDER = ['director', 'visual', 'music', 'lights', 'locations'];
  // Devuelve HTML: los nombres conocidos quedan enlazados a su página
  const val = v => Array.isArray(v) ? v.map(linkName).join(', ') : (v && typeof v === 'object' ? esc(L(v)) : v ? linkName(v) : '');
  const row = (k, v, raw) => `<div><dt>${t('song.fields.' + k)}</dt><dd class="${v ? '' : 'tbd'}">${v ? (raw ? v : esc(v)) : t('tbd')}</dd></div>`;
  Pages.song = {
    title: id => { const s = D.songs.find(x => x.id === id); return s ? `${songTitle(s)} · APOLINARI EP` : 'APOLINARI EP'; },
    render(id) {
      const s = D.songs.find(x => x.id === id);
      if (!s) return Pages.notfound.render();
      const i = D.songs.indexOf(s), prev = D.songs[i - 1], next = D.songs[i + 1];
      const locked = isLocked(s);
      const title = locked ? `${t('chapter')} ${s.n}` : songTitle(s);
      const story = L(s.story);
      const trivia = (s.trivia || []).map(L).filter(Boolean);
      const summary = L(s.seriesSummary);
      return `<div class="wrap page-pad">
        ${crumbs([home(), { label: t('songs.title'), href: url('canciones.html') }, { label: title }])}
        <section class="song-hero">
          <div>
            <div class="song-hero__n" aria-hidden="true">${pad(s.n)}</div>
            <p class="eyebrow">${t('chapter')} ${s.n} / ${D.songs.length}</p>
            <h1 class="song-hero__title" data-split>${esc(title)}</h1>
            <p class="song-hero__by">${artistsLine(s)}</p>
            <div class="song-hero__chips">${L(s.genre) ? `<span class="chip chip--y">${esc(L(s.genre))}</span>` : ''}${s.duration ? `<span class="chip">${s.duration}</span>` : ''}${s.release ? `<span class="chip">${esc(fmtDate(s.release))}</span>` : ''}${locked ? `<span class="chip chip--y">${I.lock.replace('<svg', '<svg width="14" height="14"')} ${t('upcoming')}</span>` : ''}</div>
            ${locked ? `<div style="margin:6px 0 22px">${A.countdownHTML(s.countdown, true)}</div><p class="lead">${t('song.lockedText')}</p>` :
              `<div class="listen">${listen(s)}</div>`}
            <div class="btn-row" style="margin-top:16px"><button class="btn btn--sm btn--ghost" data-action="share" data-title="${esc(title)} — APOLINARI EP">${I.share}${t('share')}</button></div>
          </div>
          <div class="song-hero__art" data-art>
            <div class="song-hero__sleeve"><img src="${url('assets/img/brand/portada.webp')}" alt="${lang() === 'es' ? 'Portada de Apolinari' : 'Apolinari cover art'}"><b>${pad(s.n)}</b></div>
            ${vinyl()}
          </div>
        </section>

        ${locked ? '' : `<section class="section--tight" aria-labelledby="pl-t" style="border-top:1px solid var(--line);padding-top:clamp(32px,5vw,64px)">
          <h2 class="block-title" id="pl-t">${t('song.player')}</h2>
          <div class="tabs" role="tablist" aria-label="${t('song.player')}">
            ${['spotify', 'apple', 'youtube'].map((p, k) => `<button class="tab" role="tab" id="tab-${p}" aria-controls="panel-${p}" aria-selected="${k === 0}" tabindex="${k === 0 ? 0 : -1}">${I[p]}${{ spotify: 'Spotify', apple: 'Apple Music', youtube: 'YouTube' }[p]}</button>`).join('')}
          </div>
          <div role="tabpanel" id="panel-spotify" aria-labelledby="tab-spotify">${A.embed({ provider: 'spotify', kind: 'track', id: s.spotifyId, link: s.spotify, title: title + ' — Spotify' })}</div>
          <div role="tabpanel" id="panel-apple" aria-labelledby="tab-apple" hidden>${A.embed({ provider: 'apple', link: s.apple, title: title + ' — Apple Music' })}</div>
          <div role="tabpanel" id="panel-youtube" aria-labelledby="tab-youtube" hidden>${A.embed({ provider: 'youtube', id: s.youtubeId, link: s.youtube, title: title + ' — YouTube', poster: url('assets/img/brand/portada.webp') })}</div>
        </section>`}

        <section class="section">
          <div class="content-grid">
            <div>
              <h2 class="block-title" data-reveal>${t('song.story')}</h2>
              ${story ? `<div class="prose" data-reveal>${story.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div>` : empty(t('song.storyEmpty'))}
              <h2 class="block-title" style="margin-top:clamp(40px,6vw,72px)" data-reveal>${t('song.trivia')}</h2>
              ${trivia.length ? `<ol class="facts">${trivia.map(x => `<li class="fact" data-reveal>${esc(x)}</li>`).join('')}</ol>` : empty(t('song.triviaEmpty'))}
              <h2 class="block-title" style="margin-top:clamp(40px,6vw,72px)" data-reveal>${t('song.inSeries')}</h2>
              <div data-reveal><p class="lead">${summary ? esc(summary) : t('song.inSeriesText')}</p><p style="margin-top:16px"><a class="link-u" href="${url('la-serie.html')}#cap-${s.n}">${t('series.title')} · ${t('chapter')} ${s.n} ${I.arrow}</a></p></div>
            </div>
            <aside>
              <div class="sheet" data-reveal><div class="sheet__head">${t('song.sheet')}</div><dl>
                ${row('artists', artistsLine(s), true)}
                ${row('duration', s.duration)}${row('release', locked ? '' : fmtDate(s.release))}${row('genre', L(s.genre))}
                ${FIELD_ORDER.map(k => row(k, val(s.meta[k]), true)).join('')}
              </dl></div>
              <div class="sheet" style="margin-top:16px" data-reveal><div class="sheet__head">${t('song.videoCredits')}</div><dl>
                ${VIDEO_ORDER.map(k => row(k, val(s.video[k]), true)).join('')}
              </dl></div>
            </aside>
          </div>
        </section>

        <nav class="pager" aria-label="${t('prev')} / ${t('next')}">
          ${prev ? `<a href="${songHref(prev)}" data-pager="prev"><span class="eyebrow">${I.arrowL} ${t('prev')} · ←</span><strong>${esc(isLocked(prev) ? t('chapter') + ' ' + prev.n : songTitle(prev))}</strong></a>` : `<a href="${url('canciones.html')}"><span class="eyebrow">${I.arrowL} ${t('back')}</span><strong>${t('song.allSongs')}</strong></a>`}
          ${next ? `<a href="${songHref(next)}" data-pager="next"><span class="eyebrow">→ · ${t('next')} ${I.arrow}</span><strong>${esc(isLocked(next) ? t('chapter') + ' ' + next.n : songTitle(next))}</strong></a>` : `<a href="${url('canciones.html')}"><span class="eyebrow">${t('back')} ${I.arrow}</span><strong>${t('song.allSongs')}</strong></a>`}
        </nav>
      </div>`;
    },
    after(id) {
      const s = D.songs.find(x => x.id === id); if (!s) return;
      // Pestañas accesibles
      const tabs = $$('.tab');
      const select = tb => {
        tabs.forEach(x => { const on = x === tb; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
        A.Sound.marimba(587.33);
        const panel = $('#' + tb.getAttribute('aria-controls')); if (A.state.consent && A.state.consent.media) { const e = $('.embed', panel); if (e && e.dataset.provider !== 'youtube') A.loadEmbed(e); }
      };
      tabs.forEach((tb, i) => {
        tb.addEventListener('click', () => select(tb));
        tb.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]; n.focus(); select(n); } });
      });
      // Vinilo
      const art = $('[data-art]'), v = art && $('.vinyl', art);
      if (v) {
        const G = gs();
        if (G) {
          G.from('.song-hero__sleeve', { x: -60, rotate: -6, opacity: 0, duration: 1.2, ease: 'expo.out', delay: .3 });
          G.from(v, { x: -120, opacity: 0, duration: 1.4, ease: 'expo.out', delay: .5 });
          G.to(v, { rotate: 360, repeat: -1, duration: 8, ease: 'none' });
          G.to(v, { xPercent: 12, ease: 'none', scrollTrigger: { trigger: art, start: 'top 60%', end: 'bottom top', scrub: true } });
        } else v.classList.add('spin');
        art.addEventListener('mouseenter', () => { if (!isLocked(s)) A.Sound.previewStart(s); });
        art.addEventListener('mouseleave', () => A.Sound.previewStop());
      }
    }
  };

  /* =======================================================================
     LA SERIE
     ======================================================================= */
  Pages.series = {
    title: () => `${t('series.title')} · APOLINARI EP`,
    render() {
      const rel = released().length;
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('series.title') }])}${bigTitle(t('series.title'))}<p class="lead" data-reveal>${t('series.intro')}</p>
          <div class="btn-row" style="margin-top:26px" data-reveal><a class="btn btn--primary platform" href="${D.ep.youtubePlaylist}" target="_blank" rel="noopener" data-magnetic>${I.youtube}${t('series.watchAll')}</a><span class="chip">${rel}/${D.songs.length} ${t('series.progress')}</span></div></header>
        <div class="timeline">
          <div class="timeline__line" aria-hidden="true"><i></i></div>
          ${D.songs.map(s => {
            const locked = isLocked(s), sum = L(s.seriesSummary);
            return `<article class="ep ${locked ? 'ep--locked' : ''}" id="cap-${s.n}">
              <div data-reveal>
                <div class="ep__n" aria-hidden="true">${pad(s.n)}</div>
                <p class="eyebrow">${t('chapter')} ${s.n}${s.release ? ' · ' + esc(fmtDate(s.release)) : ''}</p>
                <h2 class="ep__title">${locked ? `${t('chapter')} ${s.n}` : esc(songTitle(s))}</h2>
                <p class="srow__meta" style="margin:0">${artistsLine(s)}</p>
                <p class="ep__summary">${locked ? t('song.lockedText') : (sum ? esc(sum) : `<em class="f-italic" style="color:var(--muted)">${t('series.summaryEmpty')}</em>`)}</p>
                ${locked ? A.countdownHTML(s.countdown) : `<div class="btn-row"><a class="btn btn--sm btn--ghost" href="${songHref(s)}">${t('seeStory')} ${I.arrow}</a><a class="btn btn--sm btn--ghost platform platform--youtube" href="${s.youtube}" target="_blank" rel="noopener">${I.youtube}YouTube</a></div>`}
              </div>
              <div data-reveal>${locked ? `<div class="embed embed--video" style="display:grid;place-items:center;background:repeating-linear-gradient(135deg,var(--bg-2) 0 14px,var(--bg-3) 14px 15px)"><div style="text-align:center;color:var(--muted)">${I.lock.replace('<svg', '<svg width="34" height="34"')}<p class="f-display" style="font-size:2.4rem;margin-top:10px;color:var(--ink)">${t('upcoming')}</p></div></div>` :
                A.embed({ provider: 'youtube', id: s.youtubeId, link: s.youtube, title: songTitle(s) + ' — video oficial', poster: url('assets/img/brand/portada.webp') })}</div>
            </article>`;
          }).join('')}
        </div>
      </div>`;
    },
    after() {
      const G = gs(); if (!G) return;
      G.to('.timeline__line i', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 60%', end: 'bottom 60%', scrub: true } });
      $$('.ep').forEach(ep => window.ScrollTrigger.create({ trigger: ep, start: 'top 60%', end: 'bottom 60%', toggleClass: 'is-active' }));
      if (location.hash) setTimeout(() => { const tg = $(location.hash); tg && (A.lenis ? A.lenis.scrollTo(tg, { offset: -100 }) : tg.scrollIntoView()); }, 900);
    }
  };

  /* =======================================================================
     ARTISTAS
     ======================================================================= */
  Pages.artists = {
    title: () => `${t('artists.title')} · APOLINARI EP`,
    render() {
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('artists.title') }])}${bigTitle(t('artists.title'))}<p class="lead" data-reveal>${t('artists.intro')}</p></header>
        <div class="duo" style="margin-top:clamp(32px,5vw,60px)" data-reveal>
          ${Object.values(D.artists).map(a => `<a class="duo__panel" href="${artistHref(a.id)}" data-cursor="${t('seeArtist')}">
            <img src="${img(a.photos[0])}" alt="${esc(a.name)}">
            <div><div class="duo__name ${a.id === 'error-404' ? 'glitch' : ''}" data-text="${esc(a.name)}">${esc(a.name)}</div><div class="duo__real">${esc(a.realName)} · ${esc(L(a.role))}</div></div>
            <span class="duo__go" aria-hidden="true">${I.arrowUR}</span></a>`).join('')}
        </div>
      </div>`;
    }
  };

  Pages.artist = {
    title: id => `${(D.artists[id] || {}).name || ''} · APOLINARI EP`,
    render(id) {
      const a = D.artists[id]; if (!a) return Pages.notfound.render();
      const other = Object.values(D.artists).find(x => x.id !== id);
      const songs = D.songs.filter(s => s.artists.includes(id));
      const ach = (a.achievements || []).map(L).filter(Boolean);
      return `<div class="wrap page-pad">
        ${crumbs([home(), { label: t('artists.title'), href: url('artistas.html') }, { label: a.name }])}
        <header class="artist-hero">
          <p class="eyebrow" data-reveal>${esc(L(a.role))} · ${esc(a.city)}</p>
          <h1 class="artist-hero__name ${id === 'error-404' ? 'glitch' : ''}" data-text="${esc(a.name)}" data-split>${esc(a.name)}</h1>
          <p class="artist-hero__aka" data-reveal>${esc(a.realName)}${a.aka !== a.name ? ` — “${esc(a.aka)}”` : ''}</p>
          <div class="btn-row" style="margin-top:24px" data-reveal>
            <a class="btn btn--primary" href="${ig(a.instagram)}" target="_blank" rel="noopener" data-magnetic>${I.instagram}@${a.instagram}</a>
            <a class="btn btn--ghost platform platform--spotify" href="${a.spotify}" target="_blank" rel="noopener" data-magnetic>${I.spotify}Spotify</a>
          </div>
          <div class="collage">${a.photos.map((p, i) => `<figure data-reveal="clip"><a href="${img(p)}" data-gallery="${id}" data-cursor="${lang() === 'es' ? 'Ver' : 'View'}" aria-label="${esc(a.name)} — ${lang() === 'es' ? 'foto' : 'photo'} ${i + 1}"><img src="${img(p, i > 0)}" alt="${esc(a.name)} ${i + 1}" ${i ? 'loading="lazy"' : ''}></a></figure>`).join('')}</div>
        </header>

        <section class="section--tight" style="padding-top:clamp(40px,6vw,80px)">
          <div class="content-grid">
            <div>
              <h2 class="block-title" data-reveal>${t('artists.bio')}</h2>
              <div class="prose" data-reveal>${L(a.bio).map(p => `<p>${esc(p)}</p>`).join('')}</div>
              <h2 class="block-title" style="margin-top:clamp(40px,6vw,72px)" data-reveal>${t('artists.story')}</h2>
              <div class="prose" data-reveal>${L(a.story).map(p => `<p>${esc(p)}</p>`).join('')}</div>
              <h2 class="block-title" style="margin-top:clamp(40px,6vw,72px)" data-reveal>${t('artists.achievements')}</h2>
              ${ach.length ? `<ol class="facts">${ach.map(x => `<li class="fact" data-reveal>${esc(x)}</li>`).join('')}</ol>` : empty(t('artists.achievementsEmpty'))}
            </div>
            <aside style="display:grid;gap:20px">
              <dl class="datacard" data-reveal>
                <div><dt>${t('artists.realName')}</dt><dd>${esc(a.realName)}</dd></div>
                ${a.born ? `<div><dt>${t('artists.born')}</dt><dd>${esc(fmtDate(a.born))}</dd></div>` : ''}
                <div><dt>${t('artists.city')}</dt><dd>${esc(a.city)}</dd></div>
                <div><dt>${t('artists.role')}</dt><dd>${esc(L(a.role))}</dd></div>
                <div><dt>${t('artists.instagram')}</dt><dd><a class="link-u" href="${ig(a.instagram)}" target="_blank" rel="noopener">@${a.instagram}</a></dd></div>
              </dl>
              <div data-reveal><p class="eyebrow" style="margin-bottom:10px">${t('artists.influences')}</p><div class="tags">${a.influences.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div></div>
              <div data-reveal><p class="eyebrow" style="margin-bottom:10px">${t('artists.music')}</p>${A.embed({ provider: 'spotify', kind: 'artist', id: a.spotifyId, link: a.spotify, title: a.name + ' — Spotify', height: 380 })}</div>
              <div data-reveal><p class="eyebrow" style="margin-bottom:10px">${t('artists.inApolinari')}</p><div class="mini-songs">${songs.map(s => `<a href="${songHref(s)}"><b>${s.n}</b><span>${esc(isLocked(s) ? t('chapter') + ' ' + s.n : songTitle(s))}</span><small>${isLocked(s) ? t('upcoming') : s.duration}</small></a>`).join('')}</div></div>
            </aside>
          </div>
        </section>
        ${other ? `<a class="cta-panel" href="${artistHref(other.id)}" style="margin-top:clamp(40px,6vw,80px);grid-template-columns:auto 1fr auto" data-reveal data-cursor="${t('seeArtist')}">
          <span class="tm__img" style="width:96px;height:96px;border-color:var(--block-ink)"><img src="${img(other.photos[0], true)}" alt=""></span>
          <span><span class="eyebrow" style="color:rgba(241,236,227,.6)">${t('artists.other')}</span><span class="section-title--elegant" style="display:block;font-size:clamp(2rem,5vw,4rem)">${esc(other.name)}</span></span>
          <span class="duo__go" style="position:static;transform:none">${I.arrowUR}</span></a>` : ''}
      </div>`;
    },
    after(id) {
      const n = $('.artist-hero__name');
      if (id === 'error-404' && n && !A.REDUCED) { setInterval(() => { n.classList.add('is-on'); setTimeout(() => n.classList.remove('is-on'), 380); }, 3800); }
      const G = gs(); if (!G) return;
      $$('.collage img').forEach((im, i) => G.to(im, { yPercent: i ? -8 : -10, ease: 'none', scrollTrigger: { trigger: im.closest('figure'), start: 'top bottom', end: 'bottom top', scrub: true } }));
    }
  };

  /* =======================================================================
     EQUIPO
     ======================================================================= */
  const creditsFor = id => {
    const out = [];
    D.songs.forEach(s => (s.credits || []).forEach(c => { if (c.who === id) out.push({ s, role: L(c.role) }); }));
    return out;
  };
  Pages.team = {
    title: () => `${t('team.title')} · APOLINARI EP`,
    render() {
      const groups = ['label', 'visual', 'direction', 'crew', 'guests'];
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('team.title') }])}${bigTitle(t('team.title'))}<p class="lead" data-reveal>${t('team.intro')}</p></header>
        <div class="team-groups section--tight" style="padding-top:clamp(40px,6vw,72px)">
          ${groups.map(g => `<section class="team-group"><h2 data-reveal>${t('team.groups.' + g)}</h2><div class="tbig">
            ${D.team.filter(m => m.group === g).map(m => `<a class="tcardp" href="${teamHref(m.id)}" data-reveal data-cursor="${t('seeProfile')}">
              <span class="tcardp__img">${avatar(m, m.name)}</span>
              <div><h3>${esc(m.name)}</h3><p class="tm__role">${esc(L(m.role))}</p></div>
              <div class="row"><span class="link-u" style="font-size:.85rem">@${m.instagram}</span><span class="tm__arrow">${I.arrowUR}</span></div></a>`).join('')}
          </div></section>`).join('')}
        </div>
      </div>`;
    }
  };
  Pages.member = {
    title: id => `${(D.team.find(m => m.id === id) || {}).name || ''} · APOLINARI EP`,
    render(id) {
      const m = D.team.find(x => x.id === id); if (!m) return Pages.notfound.render();
      const cr = creditsFor(id);
      const ring = `${m.name} · ${L(m.role)} · APOLINARI EP · `.toUpperCase();
      return `<div class="wrap page-pad">
        ${crumbs([home(), { label: t('team.title'), href: url('equipo.html') }, { label: m.name }])}
        <section class="person" style="padding-bottom:clamp(40px,6vw,80px);border-bottom:1px solid var(--line)">
          <div class="person__img" data-reveal="fade">${avatar(m, m.name)}
          </div>
          <div>
            <p class="eyebrow" data-reveal>${esc(t('team.groups.' + m.group))}</p>
            <h1 class="page-title--elegant" style="text-transform:uppercase;margin:12px 0" data-split>${esc(m.name)}</h1>
            ${m.bio ? `<p class="lead" data-reveal>${esc(L(m.bio))}</p>` : `<p class="lead" data-reveal>${esc(L(m.role))} — ${lang() === 'es' ? 'parte del equipo de producción de' : 'part of the production crew of'} <em class="f-italic">Apolinari</em>.</p>`}
            <div class="btn-row" style="margin-top:24px" data-reveal><a class="btn btn--primary" href="${ig(m.instagram)}" target="_blank" rel="noopener" data-magnetic>${I.instagram}@${m.instagram}</a></div>
          </div>
        </section>
        <section class="section--tight" style="padding-top:clamp(40px,6vw,72px)">
          <div class="content-grid">
            <div><h2 class="block-title" data-reveal>${t('team.credits')}</h2>
              ${cr.length ? `<div class="mini-songs">${cr.map(c => `<a href="${songHref(c.s)}"><b>${c.s.n}</b><span>${esc(songTitle(c.s))}</span><small>${esc(c.role)}</small></a>`).join('')}</div>` : empty(t('team.creditsEmpty'))}
            </div>
            <aside><h2 class="block-title" data-reveal>${t('team.others')}</h2>
              <div style="display:grid;gap:10px">${D.team.filter(x => x.id !== id).map(x => `<a class="tm" href="${teamHref(x.id)}" data-reveal><span class="tm__img" style="width:48px;height:48px">${avatar(x)}</span><span><span class="tm__name" style="font-size:1rem">${esc(x.name)}</span><span class="tm__role" style="display:block">${esc(L(x.role))}</span></span><span class="tm__arrow">${I.arrowUR}</span></a>`).join('')}</div>
            </aside>
          </div>
        </section>
      </div>`;
    },
    after() {
      const box = $('.person__img'); if (!box) return;
      const m = D.team.find(x => x.id === A.PAGE_ID);
      const ring = `${m.name} · ${L(m.role)} · APOLINARI EP · `.toUpperCase();
      box.insertAdjacentHTML('beforeend', `<svg class="person__ring" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="pr" d="M50,50 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs><text><textPath href="#pr">${esc(ring + ring)}</textPath></text></svg>`);
      box.style.overflow = 'visible';
      const pic = $('img', box); if (pic) pic.style.borderRadius = '50%';
    }
  };

  /* =======================================================================
     PRENSA
     ======================================================================= */
  Pages.press = {
    title: () => `${t('press.title')} · APOLINARI EP`,
    render() {
      const subj = encodeURIComponent(t('press.subject'));
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('nav.press') }])}${bigTitle(t('press.title'))}<p class="lead" data-reveal>${t('press.intro')}</p></header>
        <div class="press-grid section--tight" style="padding-top:clamp(40px,6vw,72px)">
          <article class="pcard" data-reveal><span class="pcard__icon">${I.file}</span><h2>${t('press.kit')}</h2><p>${t('press.kitText')}</p><p class="eyebrow">PDF · ${D.ep.presskitSize}</p>
            <a class="btn btn--primary" href="${url(D.ep.presskit)}" download="APOLINARI-EP-press-kit.pdf" data-magnetic>${I.download}${t('press.download')}</a></article>
          <article class="pcard" data-reveal><span class="pcard__icon">${I.image}</span><h2>${t('press.photos')}</h2><p>${t('press.photosText')}</p><p class="eyebrow">ZIP · ${D.ep.photosSize}</p>
            <a class="btn btn--primary" href="${url(D.ep.photos)}" download="APOLINARI-EP-fotos.zip" data-magnetic>${I.download}${t('press.download')}</a></article>
          <article class="pcard" data-reveal style="background:var(--block);color:var(--block-ink)"><span class="pcard__icon" style="background:var(--yellow);color:#111">${I.mail}</span><h2>${t('press.booking')}</h2><p style="color:rgba(241,236,227,.75)">${t('press.bookingText')}</p>
            <p style="font-weight:700;word-break:break-all">${D.site.email}</p>
            <div class="btn-row" style="margin-top:auto"><a class="btn btn--primary" style="background:var(--block-ink);color:var(--block)" href="mailto:${D.site.email}?subject=${subj}" data-magnetic>${I.mail}${t('press.writeUs')}</a>
            <button class="btn btn--ghost" style="border-color:rgba(241,236,227,.3);color:var(--block-ink)" data-action="copy" data-copy="${D.site.email}" data-msg="${t('emailCopied')}">${I.copy}${t('copyEmail')}</button></div></article>
        </div>
        <section class="section--tight">
          <div class="content-grid">
            <div><h2 class="block-title" data-reveal>${t('press.shortBio')}</h2>
              <div class="bio-box" data-reveal><p>${esc(t('press.bioText'))}</p></div>
              <button class="btn btn--sm btn--ghost" style="margin-top:14px" data-action="copy" data-copy="${esc(t('press.bioText'))}" data-msg="${t('press.bioCopied')}">${I.copy}${t('press.copyBio')}</button>
            </div>
            <aside><h2 class="block-title" data-reveal>${t('footer.social')}</h2>
              <div style="display:grid;gap:10px" data-reveal>
                ${Object.values(D.artists).map(a => `<a class="tm" href="${ig(a.instagram)}" target="_blank" rel="noopener"><span class="tm__img" style="width:48px;height:48px"><img src="${img(a.photos[0], true)}" alt=""></span><span><span class="tm__name" style="font-size:1rem">${esc(a.name)}</span><span class="tm__role" style="display:block">@${a.instagram}</span></span><span class="tm__arrow">${I.instagram}</span></a>`).join('')}
              </div></aside>
          </div>
        </section>
        <section class="section--tight"><div class="soon" data-reveal><div><p class="eyebrow">${t('upcoming')}</p><h3>${t('home.showsTitle')}</h3><p class="lead" style="margin-top:8px">${t('home.showsText')}</p></div></div></section>
      </div>`;
    }
  };

  /* =======================================================================
     AYUDA (FAQ con buscador)
     ======================================================================= */
  Pages.help = {
    title: () => `${t('help.title')} · APOLINARI EP`,
    render() {
      return `<div class="wrap page-pad">
        <header class="page-hero">${crumbs([home(), { label: t('help.title') }])}${bigTitle(t('help.title'))}<p class="lead" data-reveal>${t('help.intro')}</p>
          <div class="search-field" style="margin-top:28px" data-reveal>${I.search}<input id="faq-q" type="search" placeholder="${t('help.search')}" aria-label="${t('help.search')}" aria-controls="faq-list" autocomplete="off"><button class="clear" type="button" aria-label="${t('close')}" hidden>${I.close}</button></div>
          <p class="sr-only" id="faq-status" role="status" aria-live="polite"></p>
        </header>
        <div class="faq section--tight" id="faq-list" style="padding-top:0;margin-top:clamp(32px,5vw,56px)">
          ${window.FAQ.map((f, i) => `<details data-reveal data-i="${i}"><summary><span class="q">${esc(L(f.q))}</span><i>${I.plus}</i></summary><div class="ans"><p>${esc(L(f.a))}</p>${f.link ? `<a class="link-u" href="${url(f.link.href)}">${esc(f.link[lang()])} ${I.arrow}</a>` : ''}</div></details>`).join('')}
        </div>
        <div id="faq-empty" class="status-msg" hidden>${I.info}<p></p></div>
        <div class="soon" style="margin-top:clamp(40px,6vw,72px)" data-reveal><div><h3 style="font-size:clamp(1.6rem,3vw,2.4rem)">${t('help.still')}</h3></div>
          <div class="btn-row"><a class="btn btn--primary" href="mailto:${D.site.email}">${I.mail}${t('help.contact')}</a><button class="btn btn--ghost" data-action="shortcuts">${I.keyboard}${t('shortcuts.title')}</button></div></div>
      </div>`;
    },
    after() {
      const q = $('#faq-q'), clear = $('.search-field .clear'), items = $$('#faq-list details'), emptyBox = $('#faq-empty'), status = $('#faq-status');
      const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const run = () => {
        const v = norm(q.value.trim()); let n = 0;
        clear.hidden = !q.value;
        items.forEach(d => {
          const f = window.FAQ[+d.dataset.i], hay = norm(L(f.q) + ' ' + L(f.a));
          const hit = !v || hay.includes(v);
          d.hidden = !hit; if (hit) n++;
          const qs = $('.q', d), raw = L(f.q);
          if (v && hit) {
            const idx = norm(raw).indexOf(v);
            qs.innerHTML = idx >= 0 ? esc(raw.slice(0, idx)) + '<mark>' + esc(raw.slice(idx, idx + v.length)) + '</mark>' + esc(raw.slice(idx + v.length)) : esc(raw);
            if (v.length > 2) d.open = true;
          } else { qs.textContent = raw; if (!v) d.open = false; }
          d.style.opacity = 1; d.style.transform = 'none';
        });
        emptyBox.hidden = n > 0; $('p', emptyBox).textContent = fmt(t('help.empty'), { q: q.value });
        status.textContent = v ? `${n} ${lang() === 'es' ? 'resultados' : 'results'}` : '';
      };
      q.addEventListener('input', run);
      clear.addEventListener('click', () => { q.value = ''; run(); q.focus(); });
      items.forEach(d => d.addEventListener('toggle', () => { if (d.open) A.Sound.marimba(523.25); }));
    }
  };

  /* =======================================================================
     LEGALES
     ======================================================================= */
  const S = D.site;
  const legalShell = (key, es, enSummary) => `<div class="wrap page-pad">
      <header class="page-hero">${crumbs([home(), { label: t('legal.' + key) }])}<h1 class="page-title--elegant" style="text-transform:uppercase" data-split>${t('legal.' + key)}</h1>
        <p class="eyebrow" style="margin-top:18px">${t('legal.updated')}: ${esc(fmtDate(S.legalUpdated))}</p>
        <div class="legal-toc">${[['notice', 'aviso-legal.html'], ['privacy', 'privacidad.html'], ['terms', 'terminos.html'], ['cookies', 'cookies.html']].map(([k, h]) => `<a class="chip ${k === key ? 'chip--y' : ''}" href="${url(h)}" ${k === key ? 'aria-current="page"' : ''}>${t('legal.' + k)}</a>`).join('')}</div>
      </header>
      <article class="legal section--tight">
        ${lang() === 'en' ? `<div class="note">${t('legal.esOnly')}</div><div class="prose">${enSummary}</div><hr class="rule" style="margin:40px 0">` : ''}
        <div lang="es">${es}</div>
      </article></div>`;
  const ownerBlock = `<ul>
      <li><strong>Titular:</strong> ${esc(S.owner)} (persona natural).</li>
      <li><strong>Domicilio:</strong> ${esc(S.city)}.</li>
      <li><strong>Correo electrónico de contacto y notificaciones:</strong> <a href="mailto:${S.email}">${S.email}</a>.</li>
      <li><strong>Teléfono:</strong> el titular no publica línea telefónica; el canal oficial de atención es el correo electrónico.</li>
      <li><strong>Documento de identificación:</strong> por seguridad no se publica. Se suministrará a las autoridades competentes o a los titulares de datos que lo requieran para ejercer sus derechos, previa solicitud al correo indicado.</li></ul>`;

  Pages.notice = {
    title: () => `${t('legal.notice')} · APOLINARI EP`,
    render: () => legalShell('notice', `
      <h2>1. Identificación del propietario</h2>
      <p>En cumplimiento del deber de información previsto en la Ley 1480 de 2011 (Estatuto del Consumidor), el Código de Comercio y la Ley 527 de 1999, se informa que el sitio web <strong>APOLINARI EP</strong>, disponible en <a href="${S.baseUrl}">${S.baseUrl}</a>, es propiedad de:</p>
      ${ownerBlock}
      <h2>2. Objeto del sitio</h2>
      <p>Este sitio tiene como finalidad divulgar el proyecto musical <em>Apolinari</em> de los artistas East Coast y Error 404: sus canciones, videos, historias, créditos y material de prensa. El sitio no vende productos ni servicios, no tiene formularios ni registro de usuarios, y no realiza pagos.</p>
      <h2>3. Sello y titularidad de las obras</h2>
      <p>Los fonogramas del EP se publican bajo el sello <strong>${esc(S.label)}</strong> (℗ 2026). Las obras musicales, videos, fotografías, ilustraciones y marcas pertenecen a sus respectivos titulares. Consulta los <a href="${url('terminos.html')}">Términos y condiciones</a> para conocer las reglas de uso.</p>
      <h2>4. Alojamiento</h2>
      <p>El sitio se aloja en GitHub Pages, servicio prestado por GitHub, Inc. Los reproductores de Spotify, Apple Music y YouTube son servicios de terceros que solo se cargan con tu consentimiento (ver <a href="${url('cookies.html')}">Política de cookies</a>).</p>
      <h2>5. Documentos relacionados</h2>
      <ul><li><a href="${url('privacidad.html')}">Política de Tratamiento de Datos Personales</a></li><li><a href="${url('terminos.html')}">Términos y condiciones de uso</a></li><li><a href="${url('cookies.html')}">Política de cookies</a></li></ul>`,
      `<p><strong>Site owner:</strong> ${esc(S.owner)} (individual), ${esc(S.city)}. <strong>Contact:</strong> <a href="mailto:${S.email}">${S.email}</a>. No phone line is published; email is the official channel. The owner’s ID number is withheld for security and will be provided to competent authorities or data subjects upon request.</p>
       <p>The site promotes the music project <em>Apolinari</em> by East Coast and Error 404. It sells nothing, has no forms or user accounts, and is hosted on GitHub Pages. Recordings ℗ 2026 ${esc(S.label)}.</p>`)
  };

  Pages.privacy = {
    title: () => `${t('legal.privacy')} · APOLINARI EP`,
    render: () => legalShell('privacy', `
      <p>Esta Política de Tratamiento de Datos Personales se expide en cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto Único Reglamentario 1074 de 2015) y demás normas que los modifiquen o complementen.</p>
      <h2>1. Responsable del tratamiento</h2>
      ${ownerBlock}
      <h2>2. ¿Qué datos tratamos?</h2>
      <ul>
        <li><strong>Este sitio no tiene formularios ni registro.</strong> No recolectamos tu nombre, correo, teléfono ni ningún otro dato a través de la página.</li>
        <li><strong>Preferencias de navegación:</strong> tu idioma, tema (claro u oscuro), estado del sonido y tu decisión sobre cookies se guardan únicamente en el almacenamiento local de tu navegador. No se envían a ningún servidor del titular y puedes borrarlos cuando quieras.</li>
        <li><strong>Correos que nos envíes:</strong> si nos escribes (por ejemplo, para booking o prensa), trataremos tu nombre, dirección de correo y la información que decidas incluir.</li>
        <li><strong>Servicios de terceros:</strong> si activas los reproductores de Spotify, Apple Music o YouTube, esos proveedores pueden recolectar datos (como tu dirección IP o cookies) bajo sus propias políticas. El proveedor de alojamiento (GitHub) puede registrar datos técnicos de conexión con fines de seguridad del servicio.</li>
      </ul>
      <p>No solicitamos datos sensibles ni datos de niñas, niños o adolescentes.</p>
      <h2>3. Finalidades</h2>
      <ul><li>Responder tus mensajes, solicitudes de booking, prensa o colaboración.</li><li>Enviarte la información que nos pidas sobre el proyecto.</li><li>Recordar tus preferencias de navegación en tu propio dispositivo.</li><li>Atender consultas y reclamos sobre datos personales.</li></ul>
      <h2>4. Autorización</h2>
      <p>Cuando nos escribes voluntariamente, tu envío constituye una conducta inequívoca que nos permite tratar los datos incluidos únicamente para responderte (artículo 7 del Decreto 1377 de 2013). Puedes revocar esta autorización en cualquier momento escribiendo al correo del responsable.</p>
      <h2>5. Derechos del titular</h2>
      <p>De acuerdo con el artículo 8 de la Ley 1581 de 2012, tienes derecho a:</p>
      <ol><li>Conocer, actualizar y rectificar tus datos personales.</li><li>Solicitar prueba de la autorización otorgada.</li><li>Ser informado sobre el uso que se ha dado a tus datos.</li><li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.</li><li>Revocar la autorización y/o solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías legales.</li><li>Acceder en forma gratuita a tus datos personales.</li></ol>
      <h2>6. Procedimiento para consultas y reclamos</h2>
      <p>Escribe a <a href="mailto:${S.email}">${S.email}</a> indicando tu nombre, la descripción de tu solicitud y el correo donde quieres recibir la respuesta.</p>
      <ul><li><strong>Consultas:</strong> se responderán en un término máximo de diez (10) días hábiles desde su recibo, prorrogable por cinco (5) días hábiles más, informándote los motivos (artículo 14, Ley 1581 de 2012).</li>
        <li><strong>Reclamos</strong> (corrección, actualización, supresión o incumplimiento): se atenderán en un término máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles más (artículo 15, Ley 1581 de 2012). Si el reclamo está incompleto, te pediremos completarlo dentro de los cinco (5) días siguientes.</li></ul>
      <h2>7. Transferencia y transmisión internacional</h2>
      <p>Los correos se gestionan mediante un proveedor de correo electrónico y el sitio se aloja en GitHub Pages; ambos servicios pueden almacenar información en servidores fuera de Colombia, con estándares de seguridad adecuados.</p>
      <h2>8. Seguridad y conservación</h2>
      <p>Adoptamos medidas razonables para proteger la información. Los datos de tus correos se conservan solo durante el tiempo necesario para atender tu solicitud y las obligaciones legales aplicables.</p>
      <h2>9. Vigencia y cambios</h2>
      <p>Esta política rige desde el ${esc(fmtDate(S.legalUpdated))}. Cualquier cambio sustancial se publicará en esta misma página con su nueva fecha.</p>`,
      `<p>We follow Colombian Law 1581 of 2012 and Decree 1377 of 2013. <strong>This site has no forms or sign-ups and collects no personal data.</strong> Your language, theme, sound and cookie choices stay in your browser’s local storage. If you email us, we only use your name, email and message to reply. Third-party players (Spotify, Apple Music, YouTube) only load with your consent and follow their own policies.</p>
       <p>You can access, update, correct or delete your data, revoke consent, and file complaints with Colombia’s Superintendence of Industry and Commerce (SIC). Write to <a href="mailto:${S.email}">${S.email}</a>: inquiries are answered within 10 business days and claims within 15 business days.</p>`)
  };

  Pages.terms = {
    title: () => `${t('legal.terms')} · APOLINARI EP`,
    render: () => legalShell('terms', `
      <h2>1. Aceptación</h2>
      <p>Al navegar en <a href="${S.baseUrl}">${S.baseUrl}</a> aceptas estos Términos y condiciones. Si no estás de acuerdo, te pedimos no usar el sitio. Los términos se rigen por el Código Civil colombiano y la Ley 527 de 1999 sobre mensajes de datos y comercio electrónico.</p>
      <h2>2. Objeto</h2>
      <p>El sitio es una plataforma informativa y gratuita que presenta el EP <em>Apolinari</em> de East Coast x Error 404, sus canciones, videos, historias, créditos y material de prensa.</p>
      <h2>3. Uso permitido</h2>
      <p>Puedes navegar, escuchar a través de los reproductores autorizados, compartir enlaces y descargar el material de prensa. No está permitido:</p>
      <ul><li>Usar el sitio con fines ilícitos o que afecten derechos de terceros.</li><li>Intentar vulnerar la seguridad del sitio o de los servicios que lo alojan.</li><li>Reproducir, distribuir, modificar o explotar comercialmente los contenidos sin autorización de sus titulares.</li></ul>
      <h2>4. Propiedad intelectual</h2>
      <p>Las obras musicales, fonogramas (℗ 2026 ${esc(S.label)}), videos, fotografías, la ilustración del cucarachero con sombrero vueltiao, los textos, el diseño y la marca <em>Apolinari</em> están protegidos por la Ley 23 de 1982, la Decisión Andina 351 de 1993 y demás normas de derecho de autor y propiedad industrial, y pertenecen a sus respectivos titulares.</p>
      <p>El material de la sección <a href="${url('prensa.html')}">Prensa</a> puede usarse para notas periodísticas y difusión del proyecto, citando “Apolinari EP”. Para cualquier otro uso, solicita autorización al correo de contacto.</p>
      <h2>5. Enlaces y servicios de terceros</h2>
      <p>El sitio contiene enlaces y reproductores de Spotify, Apple Music, YouTube e Instagram. Esos servicios se rigen por sus propios términos y políticas; el titular no controla ni responde por su contenido o funcionamiento.</p>
      <h2>6. Responsabilidad</h2>
      <p>Procuramos que la información sea correcta y esté actualizada, pero el sitio se ofrece “tal como está”. El titular no garantiza su disponibilidad ininterrumpida y no responde por daños derivados de fallas técnicas, del uso indebido del sitio o de servicios de terceros.</p>
      <h2>7. Comunicaciones</h2>
      <p>Conforme a la Ley 527 de 1999, los mensajes de datos enviados al correo <a href="mailto:${S.email}">${S.email}</a> tienen plena validez como medio de comunicación con el titular.</p>
      <h2>8. Modificaciones</h2>
      <p>Estos términos pueden actualizarse. La versión vigente siempre estará publicada en esta página con su fecha de actualización.</p>
      <h2>9. Ley aplicable</h2>
      <p>Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los jueces competentes de la ciudad de Cali.</p>`,
      `<p>By using this site you accept these terms, governed by Colombian law (Civil Code and Law 527 of 1999). The site is free and informational. You may browse, listen through authorized players, share links and download press material.</p>
       <p>All music, recordings (℗ 2026 ${esc(S.label)}), videos, photos, the bird illustration, texts and the <em>Apolinari</em> brand belong to their respective owners. Press material may be used for articles and promotion crediting “Apolinari EP”. Third-party services follow their own terms. The site is provided “as is”. Disputes go to the competent courts of Cali, Colombia.</p>`)
  };

  Pages.cookies = {
    title: () => `${t('legal.cookies')} · APOLINARI EP`,
    render: () => legalShell('cookies', `
      <h2>1. ¿Qué son las cookies?</h2>
      <p>Son pequeños archivos o registros que un sitio web guarda en tu navegador. Además de cookies, este sitio usa el <em>almacenamiento local</em> del navegador, que funciona de forma parecida.</p>
      <h2>2. Lo que usamos</h2>
      <h3>Necesarias (siempre activas)</h3>
      <table><thead><tr><th>Nombre</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr></thead><tbody>
        <tr><td>apolinari-lang</td><td>Almacenamiento local</td><td>Recordar el idioma elegido</td><td>Hasta que lo borres</td></tr>
        <tr><td>apolinari-theme</td><td>Almacenamiento local</td><td>Recordar el tema claro u oscuro</td><td>Hasta que lo borres</td></tr>
        <tr><td>apolinari-sound / apolinari-sound-hint</td><td>Almacenamiento local</td><td>Recordar si el sonido está activo y no repetir el aviso</td><td>Hasta que lo borres</td></tr>
        <tr><td>apolinari-consent</td><td>Almacenamiento local</td><td>Guardar tu decisión sobre cookies de terceros</td><td>Hasta que lo borres</td></tr>
        <tr><td>apolinari-loaded</td><td>Almacenamiento de sesión</td><td>Mostrar la animación de carga solo una vez por visita</td><td>Al cerrar la pestaña</td></tr>
      </tbody></table>
      <h3>Reproductores de terceros (solo con tu consentimiento)</h3>
      <table><thead><tr><th>Proveedor</th><th>Dominio</th><th>Finalidad</th></tr></thead><tbody>
        <tr><td>Spotify</td><td>open.spotify.com</td><td>Escuchar canciones y perfiles de artista dentro del sitio</td></tr>
        <tr><td>Apple Music</td><td>embed.music.apple.com</td><td>Escuchar canciones dentro del sitio</td></tr>
        <tr><td>YouTube (Google)</td><td>www.youtube-nocookie.com</td><td>Ver los videos de La Serie dentro del sitio</td></tr>
      </tbody></table>
      <p>Mientras no los permitas, en su lugar verás un recuadro con un botón para cargarlos y un enlace para abrir la canción directamente en la plataforma.</p>
      <h2>3. Lo que no usamos</h2>
      <p>No usamos cookies de analítica (como Google Analytics), publicidad ni seguimiento propias.</p>
      <h2>4. ¿Cómo cambiar tu decisión?</h2>
      <p>En cualquier momento puedes pulsar <button type="button" class="link-u" data-action="cookies">Configurar cookies</button> (también al final de cada página) o borrar los datos del sitio desde la configuración de tu navegador.</p>
      <h2>5. Marco legal</h2>
      <p>Este aviso se emite conforme a la Ley 1581 de 2012 y su reglamentación. Más información en la <a href="${url('privacidad.html')}">Política de Tratamiento de Datos Personales</a>.</p>`,
      `<p><strong>Necessary (always on):</strong> local storage entries that remember your language, theme, sound and cookie choice, plus a session flag to show the intro animation once per visit. They never leave your browser.</p>
       <p><strong>Third-party players (only with your consent):</strong> Spotify, Apple Music and YouTube (youtube-nocookie.com). Until you allow them, you’ll see a box with a button to load them. We don’t use analytics, advertising or tracking cookies. Change your choice anytime with <button type="button" class="link-u" data-action="cookies">Cookie settings</button>.</p>`)
  };

  /* =======================================================================
     404
     ======================================================================= */
  Pages.notfound = {
    title: () => `Error 404 · APOLINARI EP`,
    render() {
      return `<section class="nf">
        <img class="nf__bird" src="${url('assets/img/brand/pajaro.webp')}" alt="" aria-hidden="true">
        <div>
          <div class="nf__code glitch" data-text="404" aria-hidden="true">404</div>
          <h1>${t('notFound.sub')}</h1>
          <p>${t('notFound.text')}</p>
          <div class="btn-row"><a class="btn btn--primary btn--lg" href="${url('index.html')}" data-magnetic>${I.arrowL}${t('notFound.home')}</a><a class="btn btn--ghost btn--lg" href="${url('canciones.html')}">${t('notFound.songs')}</a><button class="btn btn--ghost btn--lg" data-action="palette">${I.search}${t('notFound.search')}</button></div>
        </div></section>`;
    },
    after() {
      const b = $('.nf__bird'); if (!b) return;
      const code = $('.nf__code');
      if (!A.REDUCED) setInterval(() => { code.classList.add('is-on'); setTimeout(() => code.classList.remove('is-on'), 420); }, 2600);
      if (A.REDUCED || !window.gsap) { b.style.display = 'none'; return; }
      gsap.to(b, { x: innerWidth + 320, duration: 7, ease: 'none', repeat: -1, repeatDelay: 1.5 });
      gsap.to(b, { y: -40, rotate: 8, duration: .45, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    }
  };

  window.Pages = Pages;
})();
