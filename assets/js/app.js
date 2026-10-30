/* =========================================================================
   APOLINARI EP · Núcleo del sitio
   ========================================================================= */
(function () {
  'use strict';
  const D = window.APOLINARI, UI = window.UI;
  const body = document.body, html = document.documentElement;
  const ROOT = body.dataset.root || '';
  const PAGE = body.dataset.page || 'home';
  const PAGE_ID = body.dataset.id || '';
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGSAP = !!window.gsap && !REDUCED;
  html.classList.add('js');
  if (REDUCED) html.classList.add('reduced');

  /* ---------- almacenamiento seguro ---------- */
  const store = {
    get(k) { try { return localStorage.getItem('apolinari-' + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem('apolinari-' + k, v); } catch (e) {} },
    sget(k) { try { return sessionStorage.getItem('apolinari-' + k); } catch (e) { return null; } },
    sset(k, v) { try { sessionStorage.setItem('apolinari-' + k, v); } catch (e) {} }
  };

  /* ---------- estado ---------- */
  const state = {
    lang: store.get('lang') === 'en' ? 'en' : 'es',
    theme: store.get('theme') === 'light' ? 'light' : 'dark',
    sound: store.get('sound') !== 'off',
    consent: (() => { try { return JSON.parse(store.get('consent') || 'null'); } catch (e) { return null; } })()
  };
  html.lang = state.lang;
  html.dataset.theme = state.theme;

  /* ---------- utilidades ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const url = p => (p === '' || p === 'index.html') ? (ROOT || './') : ROOT + p;
  const T = () => UI[state.lang];
  const t = path => path.split('.').reduce((o, k) => (o == null ? o : o[k]), T()) ?? path;
  const L = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[state.lang] || v.es || '') : (v || '');
  const fmt = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');
  const fmtDate = iso => {
    if (!iso) return '';
    const [y, m, d] = iso.split('-').map(Number);
    const mo = T().months[m - 1];
    return state.lang === 'es' ? `${d} de ${mo} de ${y}` : `${mo} ${d}, ${y}`;
  };
  const pad = n => String(n).padStart(2, '0');
  const songTitle = s => s.title || (state.lang === 'es' ? 'Capítulo ' : 'Chapter ') + s.n;
  const songHref = s => url('cancion/' + s.id + '.html');
  const artistHref = id => url('artista/' + id + '.html');
  const teamHref = id => url('equipo/' + id + '.html');
  const img = (name, sm) => url('assets/img/' + (name.includes('/') ? name : 'photos/' + name) + (sm ? '-sm' : '') + '.webp');
  const isReleased = s => !s.countdown || Date.now() >= new Date(s.countdown).getTime();
  const isLocked = s => !!s.countdown && !s.spotify;

  /* ---------- íconos ---------- */
  const I = {
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.8 15.15a.66.66 0 0 1-.9.22c-2.48-1.52-5.6-1.86-9.28-1.02a.66.66 0 1 1-.29-1.28c4.02-.92 7.47-.52 10.25 1.18.31.19.41.6.22.9Zm1.28-2.86a.82.82 0 0 1-1.13.27c-2.84-1.75-7.17-2.25-10.53-1.23a.82.82 0 1 1-.48-1.57c3.84-1.17 8.62-.6 11.87 1.4.39.24.51.75.27 1.13Zm.11-2.98C14.78 8.8 9.17 8.6 5.92 9.6a.98.98 0 1 1-.57-1.88c3.73-1.13 9.94-.91 13.86 1.42a.98.98 0 0 1-1.02 1.67Z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 12.7c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.8ZM14.2 5.6c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    arrowUR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="m8.3 10.8 7.4-4.4M8.3 13.2l7.4 4.4"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
    cookie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.5A9 9 0 1 1 11.5 3a3 3 0 0 0 3.5 3.5 3 3 0 0 0 3 3 3 3 0 0 0 3 3Z"/><circle cx="8.5" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="15" r="1" fill="currentColor"/><circle cx="9" cy="16" r="1" fill="currentColor"/></svg>',
    keyboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z"/><path d="M14 3v5h5"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-9 8"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
    feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.2 3.8a6 6 0 0 0-8.5 0L5 10.5V19h8.5l6.7-6.7a6 6 0 0 0 0-8.5ZM16 8 2 22M17.5 15H9"/></svg>',
    page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>'
  };

  /* ---------- navegación principal ---------- */
  const NAV = [
    { key: 'home', href: 'index.html' }, { key: 'songs', href: 'canciones.html' }, { key: 'series', href: 'la-serie.html' },
    { key: 'artists', href: 'artistas.html' }, { key: 'team', href: 'equipo.html' }, { key: 'press', href: 'prensa.html' }, { key: 'help', href: 'ayuda.html' }
  ];
  const SECTION = { song: 'songs', artist: 'artists', member: 'team' }[PAGE] || PAGE;

  /* =======================================================================
     SONIDO (Web Audio): marimba de chonta, guacharaca y canto de pájaro
     ======================================================================= */
  const Sound = {
    ctx: null, master: null, audio: null, fadeT: null, hintShown: false,
    ensure() {
      if (this.ctx) return true;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = state.sound ? 0.55 : 0;
      this.master.connect(this.ctx.destination);
      return true;
    },
    unlock() {
      if (!this.ensure()) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      if (state.sound && !store.get('sound-hint')) { store.set('sound-hint', '1'); setTimeout(() => toast(t('sound.first'), I.music), 600); }
    },
    ready() { return state.sound && this.ctx && this.ctx.state === 'running'; },
    set(on) {
      state.sound = on; store.set('sound', on ? 'on' : 'off');
      if (this.ensure()) {
        const g = this.master.gain, now = this.ctx.currentTime;
        g.cancelScheduledValues(now); g.setTargetAtTime(on ? 0.55 : 0, now, 0.08);
        if (on && this.ctx.state === 'suspended') this.ctx.resume();
      }
      if (!on) this.previewStop();
      updateSoundBtn();
      toast(on ? t('sound.on') : t('sound.off'), on ? I.music : I.close);
      if (on) setTimeout(() => this.marimba(659.25, 0, .25), 60);
    },
    env(g, t0, a, d, peak) { g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(peak, t0 + a); g.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d); },
    marimba(f, delay = 0, vol = .22) {
      if (!this.ready()) return;
      const c = this.ctx, t0 = c.currentTime + delay;
      [[1, vol, .9], [3.98, vol * .28, .25], [9.9, vol * .08, .08]].forEach(([m, v, d]) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.value = f * m; o.connect(g); g.connect(this.master);
        this.env(g, t0, .004, d, v); o.start(t0); o.stop(t0 + d + .05);
      });
    },
    tick() {
      if (!this.ready()) return;
      const c = this.ctx, t0 = c.currentTime, o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle'; o.frequency.setValueAtTime(2200, t0); o.frequency.exponentialRampToValueAtTime(1400, t0 + .03);
      o.connect(g); g.connect(this.master); this.env(g, t0, .002, .045, .035); o.start(t0); o.stop(t0 + .06);
    },
    noise(dur) {
      const c = this.ctx, b = c.createBuffer(1, c.sampleRate * dur, c.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const s = c.createBufferSource(); s.buffer = b; return s;
    },
    guacharaca() {
      if (!this.ready()) return;
      const c = this.ctx, t0 = c.currentTime, n = this.noise(.16), bp = c.createBiquadFilter(), g = c.createGain();
      bp.type = 'bandpass'; bp.frequency.value = 3800; bp.Q.value = 1.4;
      n.connect(bp); bp.connect(g); g.connect(this.master);
      g.gain.setValueAtTime(0.0001, t0);
      for (let i = 0; i < 4; i++) { const ti = t0 + i * .028; g.gain.exponentialRampToValueAtTime(.12, ti + .006); g.gain.exponentialRampToValueAtTime(.002, ti + .022); }
      n.start(t0); n.stop(t0 + .16);
    },
    chirp(times = 3) {
      if (!this.ready()) return;
      const c = this.ctx;
      for (let i = 0; i < times; i++) {
        const t0 = c.currentTime + i * .11, o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(2600 + Math.random() * 600, t0);
        o.frequency.exponentialRampToValueAtTime(5200 + Math.random() * 900, t0 + .06);
        o.frequency.exponentialRampToValueAtTime(3400, t0 + .09);
        o.connect(g); g.connect(this.master); this.env(g, t0, .008, .09, .09); o.start(t0); o.stop(t0 + .12);
      }
    },
    motif(n) {
      const scale = [392, 440, 493.88, 587.33, 659.25, 783.99, 880, 987.77];
      const base = (n - 1) % 5;
      [0, 2, 4].forEach((k, i) => this.marimba(scale[(base + k) % scale.length], i * .11, .18));
    },
    previewStart(song) {
      if (!state.sound) return;
      this.previewStop(true);
      if (song && song.preview) {
        const a = new Audio(url(song.preview)); a.volume = 0; a.loop = true;
        a.play().then(() => {
          this.audio = a; let v = 0;
          clearInterval(this.fadeT); this.fadeT = setInterval(() => { v = Math.min(.8, v + .08); a.volume = v; if (v >= .8) clearInterval(this.fadeT); }, 40);
        }).catch(() => this.motif(song.n));
      } else if (song) this.motif(song.n);
    },
    previewStop(instant) {
      const a = this.audio; if (!a) return; this.audio = null; clearInterval(this.fadeT);
      if (instant) { a.pause(); return; }
      const f = setInterval(() => { a.volume = Math.max(0, a.volume - .1); if (a.volume <= 0.01) { a.pause(); clearInterval(f); } }, 30);
    }
  };
  ['pointerdown', 'keydown', 'touchstart'].forEach(ev => window.addEventListener(ev, () => Sound.unlock(), { once: true, passive: true }));

  /* =======================================================================
     HEADER / FOOTER / CAPAS
     ======================================================================= */
  function headerHTML() {
    const navLinks = NAV.map(n => `<a href="${url(n.href)}" ${SECTION === n.key ? 'aria-current="page"' : ''}>${t('nav.' + n.key)}</a>`).join('');
    return `
    <div class="header__in">
      <a class="brand" href="${url('index.html')}" aria-label="APOLINARI — ${t('nav.home')}">
        <span class="brand__name">APOLINARI</span><span class="brand__sub">East Coast x Error 404</span>
      </a>
      <nav class="nav" aria-label="${state.lang === 'es' ? 'Navegación principal' : 'Main navigation'}">${navLinks}</nav>
      <div class="controls">
        <button class="ctrl ctrl--search" data-action="palette" aria-label="${t('search.open')}" title="${t('search.open')}">${I.search}<span class="label sr-only">${t('search.open')}</span><kbd>⌘K</kbd></button>
        <button class="ctrl lang-switch" data-action="lang" aria-label="${t('lang.switch')}" title="${t('lang.switch')} (L)"><b class="${state.lang === 'es' ? 'on' : ''}">ES</b><b class="${state.lang === 'en' ? 'on' : ''}">EN</b></button>
        <button class="ctrl" data-action="theme" aria-label="${state.theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}" title="${state.theme === 'dark' ? t('theme.toLight') : t('theme.toDark')} (T)">${state.theme === 'dark' ? I.sun : I.moon}</button>
        <button class="ctrl sound-btn ${state.sound ? 'is-sound' : ''}" data-action="sound" aria-pressed="${state.sound}" aria-label="${state.sound ? t('sound.mute') : t('sound.unmute')}" title="${state.sound ? t('sound.mute') : t('sound.unmute')}">
          <span class="sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        </button>
        <button class="ctrl burger" data-action="menu" aria-expanded="false" aria-controls="mmenu" aria-label="${t('menu')}"><span></span><span></span></button>
      </div>
    </div>`;
  }
  function mmenuHTML() {
    return `<ol>${NAV.map((n, i) => `<li><a href="${url(n.href)}" style="transition-delay:${.15 + i * .05}s" ${SECTION === n.key ? 'aria-current="page"' : ''}><small>0${i + 1}</small>${t('nav.' + n.key)}</a></li>`).join('')}</ol>
      <div class="mmenu__foot"><span class="f-italic">${esc(L(D.site.quote))}</span><button class="mmenu__theme" data-action="theme">${I.sun}${state.lang === 'es' ? 'Cambiar tema' : 'Switch theme'}</button><a href="mailto:${D.site.email}">${D.site.email}</a></div>`;
  }
  function updateSoundBtn() {
    $$('.sound-btn').forEach(b => {
      b.classList.toggle('is-sound', state.sound); b.setAttribute('aria-pressed', state.sound);
      b.setAttribute('aria-label', state.sound ? t('sound.mute') : t('sound.unmute')); b.title = b.getAttribute('aria-label');
    });
  }

  function footerHTML() {
    const year = new Date().getFullYear();
    const ec = D.artists['east-coast'], er = D.artists['error-404'];
    return `
    <div class="footer__flag" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="wrap">
      <div class="footer__big" aria-hidden="true">${'APOLINARI'.split('').map(c => `<span>${c}</span>`).join('')}</div>
      <div class="footer__cols">
        <div class="footer__brand">
          <span class="f-italic">APOLINARI EP</span>
          <p>${esc(L({ es: 'Un EP de East Coast x Error 404 que cuenta Colombia en sonido e imagen.', en: 'An EP by East Coast x Error 404 telling Colombia through sound and image.' }))}</p>
          <span class="footer__sig" aria-hidden="true">EastCoast x Error 404</span>
        </div>
        <div><h2>${t('footer.explore')}</h2><ul>${NAV.slice(1).map(n => `<li><a href="${url(n.href)}">${t('nav.' + n.key)}</a></li>`).join('')}</ul></div>
        <div><h2>${t('footer.music')}</h2><ul>
          <li><a href="${D.ep.spotifyPlaylist}" target="_blank" rel="noopener">Spotify · Playlist</a></li>
          <li><a href="${D.ep.youtubePlaylist}" target="_blank" rel="noopener">YouTube · Playlist</a></li>
          ${D.songs.filter(s => s.spotify).map(s => `<li><a href="${songHref(s)}">${s.n}. ${esc(songTitle(s))}</a></li>`).join('')}
        </ul></div>
        <div><h2>${t('footer.social')}</h2><ul>
          <li><a href="https://instagram.com/${ec.instagram}" target="_blank" rel="noopener">@${ec.instagram}</a></li>
          <li><a href="https://instagram.com/${er.instagram}" target="_blank" rel="noopener">@${er.instagram}</a></li>
          <li><a href="${ec.spotify}" target="_blank" rel="noopener">East Coast · Spotify</a></li>
          <li><a href="${er.spotify}" target="_blank" rel="noopener">Error 404 · Spotify</a></li>
          <li><a href="https://instagram.com/mgmusicoficial" target="_blank" rel="noopener">@mgmusicoficial</a></li>
        </ul></div>
        <div><h2>${t('footer.legal')}</h2><ul>
          <li><a href="${url('aviso-legal.html')}">${t('legal.notice')}</a></li>
          <li><a href="${url('privacidad.html')}">${t('legal.privacy')}</a></li>
          <li><a href="${url('terminos.html')}">${t('legal.terms')}</a></li>
          <li><a href="${url('cookies.html')}">${t('legal.cookies')}</a></li>
          <li><button type="button" class="link-u" data-action="cookies">${t('legal.cookieSettings')}</button></li>
        </ul></div>
      </div>
      <div class="footer__owner">
        <address>${t('footer.owner')} <strong>${esc(D.site.owner)}</strong> · ${esc(D.site.city)} · <a href="mailto:${D.site.email}">${D.site.email}</a></address>
        <span>© ${year} APOLINARI EP · ℗ 2026 ${esc(D.site.label)}. ${t('footer.rights')} ${t('footer.made')}.</span>
      </div>
    </div>`;
  }

  function layersHTML() {
    return `
    <div class="grain" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"></div>
    <div class="nav-progress" aria-hidden="true"></div>
    <div class="toasts" role="status" aria-live="polite"></div>
    <button class="to-top" data-action="top" aria-label="${t('footer.top')}">
      <svg viewBox="0 0 52 52" style="position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)" aria-hidden="true"><circle cx="26" cy="26" r="24" fill="none" stroke="var(--yellow)" stroke-width="2" stroke-dasharray="150.8" stroke-dashoffset="150.8"/></svg>${I.arrowUp}</button>
    <section class="cookie" aria-labelledby="ck-t" role="region"></section>
    <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal__bg" data-action="modal-close"></div><div class="modal__box"></div></div>
    <div class="palette" id="palette" role="dialog" aria-modal="true" aria-label="${t('search.open')}"><div class="palette__bg" data-action="palette-close"></div>
      <div class="palette__box"><div class="palette__in">${I.search}<input type="text" role="combobox" aria-expanded="true" aria-controls="pal-list" aria-autocomplete="list" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>
      <div class="palette__list" id="pal-list" role="listbox"></div><div class="palette__foot"></div></div></div>
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Galería">
      <img alt="">
      <button class="lightbox__btn lightbox__x" data-lb="close">${I.close}</button>
      <button class="lightbox__btn lightbox__prev" data-lb="prev">${I.arrowL}</button>
      <button class="lightbox__btn lightbox__next" data-lb="next">${I.arrow}</button>
      <div class="lightbox__count"></div>
    </div>`;
  }

  function renderChrome() {
    $('#site-header').className = 'header';
    $('#site-header').innerHTML = headerHTML();
    let mm = $('#mmenu');
    if (!mm) { mm = document.createElement('div'); mm.id = 'mmenu'; mm.className = 'mmenu'; mm.setAttribute('aria-hidden', 'true'); $('#site-header').after(mm); }
    mm.innerHTML = mmenuHTML();
    $('#site-footer').className = 'footer';
    $('#site-footer').innerHTML = footerHTML();
    if (!$('.grain')) body.insertAdjacentHTML('beforeend', layersHTML());
    else {
      $('.to-top').setAttribute('aria-label', t('footer.top'));
      $('#palette').setAttribute('aria-label', t('search.open'));
      $('[data-lb="close"]').setAttribute('aria-label', t('lightbox.close'));
    }
    $('[data-lb="close"]').setAttribute('aria-label', t('lightbox.close'));
    $('[data-lb="prev"]').setAttribute('aria-label', t('lightbox.prev'));
    $('[data-lb="next"]').setAttribute('aria-label', t('lightbox.next'));
    $('.skip').textContent = t('skip');
    renderCookie();
  }

  /* ---------- toasts ---------- */
  function toast(msg, icon = I.check) {
    const box = $('.toasts'); if (!box) return;
    const el = document.createElement('div'); el.className = 'toast'; el.innerHTML = icon + '<span>' + esc(msg) + '</span>';
    box.appendChild(el);
    while (box.children.length > 3) box.firstChild.remove();
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 400); }, 3200);
  }

  /* ---------- tema / idioma ---------- */
  function setTheme(th) {
    state.theme = th; html.dataset.theme = th; store.set('theme', th);
    $('meta[name="theme-color"]') && $('meta[name="theme-color"]').setAttribute('content', th === 'dark' ? '#1d1d1d' : '#f3efe8');
    const b = $('[data-action="theme"]'); if (b) { b.innerHTML = th === 'dark' ? I.sun : I.moon; b.setAttribute('aria-label', th === 'dark' ? t('theme.toLight') : t('theme.toDark')); b.title = b.getAttribute('aria-label') + ' (T)'; }
    toast(th === 'dark' ? t('theme.dark') : t('theme.light'), th === 'dark' ? I.moon : I.sun);
    Sound.marimba(th === 'dark' ? 392 : 783.99);
  }
  function setLang(l) {
    state.lang = l; html.lang = l; store.set('lang', l);
    rerender();
    toast(t('lang.changed'), I.globe);
    Sound.marimba(l === 'es' ? 523.25 : 659.25);
  }

  /* =======================================================================
     COOKIES Y REPRODUCTORES
     ======================================================================= */
  const mediaAllowed = () => !!(state.consent && state.consent.media);
  function saveConsent(media) {
    state.consent = { v: 1, media: !!media, date: new Date().toISOString() };
    store.set('consent', JSON.stringify(state.consent));
    $('.cookie').classList.remove('is-on');
    if (media) {
      $$('.embed[data-src]:not([data-provider="youtube"])').forEach(loadEmbed);
      $$('.embed[data-provider="youtube"]:not([data-loaded])').forEach(el => { const g = $('.embed__gate', el); if (g) { const p = $('p', g), al = $('[data-action="embed-allow"]', g); p && p.remove(); al && al.remove(); } });
    }
    toast(t('cookie.saved'), I.cookie);
  }
  function renderCookie() {
    const c = $('.cookie'); if (!c) return;
    c.innerHTML = `<h2 id="ck-t">${I.cookie.replace('<svg', '<svg width="22" height="22"')}${t('cookie.title')}</h2>
      <p>${t('cookie.text')}</p>
      <div class="btn-row">
        <button class="btn btn--primary" data-action="ck-accept">${t('cookie.accept')}</button>
        <button class="btn btn--ghost" data-action="ck-reject">${t('cookie.reject')}</button>
        <button class="btn btn--ghost" data-action="cookies">${t('cookie.config')}</button>
      </div>
      <a href="${url('cookies.html')}">${t('cookie.more')}</a>`;
    if (!state.consent) setTimeout(() => c.classList.add('is-on'), PAGE === 'home' && !store.sget('loaded') ? 3600 : 1200);
  }
  function openCookieSettings() {
    openModal(`<h2 id="modal-title">${t('cookie.title')}</h2>
      <p style="color:var(--ink-2);font-size:.9rem">${t('cookie.text')}</p>
      <div class="opt"><div><h3>${t('cookie.necessary')}</h3><p>${t('cookie.necessaryText')}</p></div><label class="switch"><input type="checkbox" checked disabled aria-label="${t('cookie.necessary')} — ${t('cookie.always')}"><span></span></label></div>
      <div class="opt"><div><h3>${t('cookie.media')}</h3><p>${t('cookie.mediaText')}</p></div><label class="switch"><input type="checkbox" id="ck-media" ${mediaAllowed() ? 'checked' : ''} aria-label="${t('cookie.media')}"><span></span></label></div>
      <div class="btn-row" style="margin-top:20px"><button class="btn btn--primary" data-action="ck-save">${t('cookie.save')}</button><button class="btn btn--ghost" data-action="ck-accept">${t('cookie.accept')}</button></div>
      <p style="margin-top:14px"><a class="link-u" href="${url('cookies.html')}">${t('cookie.more')}</a></p>`);
  }
  const PNAME = { spotify: 'Spotify', apple: 'Apple Music', youtube: 'YouTube' };
  function embedSrc(provider, kind, id, link) {
    if (provider === 'spotify') return `https://open.spotify.com/embed/${kind}/${id}?utm_source=generator&theme=0`;
    if (provider === 'apple') return link.replace('https://music.apple.com', 'https://embed.music.apple.com');
    if (provider === 'youtube') return kind === 'playlist' ? `https://www.youtube-nocookie.com/embed/videoseries?list=${id}&rel=0` : `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1&playsinline=1`;
  }
  /* o = { provider, kind, id, link, height, poster, title } */
  function embed(o) {
    const src = embedSrc(o.provider, o.kind, o.id, o.link || '');
    const h = o.height || (o.provider === 'spotify' ? (o.kind === 'track' ? 152 : 380) : o.provider === 'apple' ? 175 : 0);
    const video = o.provider === 'youtube';
    const name = PNAME[o.provider];
    return `<div class="embed ${video ? 'embed--video' : ''}" data-src="${esc(src)}" data-provider="${o.provider}" data-h="${h}" data-title="${esc(o.title || name)}" ${h ? `style="min-height:${h}px"` : ''}>
      <div class="embed__gate ${o.poster ? 'has-img' : ''}">
        ${o.poster ? `<img src="${o.poster}" alt="" loading="lazy">` : ''}
        <span class="platform-badge">${I[o.provider]}${name}</span>
        ${mediaAllowed() ? '' : `<p>${fmt(t('embed.blocked'), { p: name })}</p>`}
        <div class="btn-row" style="justify-content:center">
          <button class="btn btn--sm btn--primary" data-action="embed-once">${video ? I.play : ''}${mediaAllowed() && video ? t('watch') : t('embed.loadOnce')}</button>
          ${mediaAllowed() ? '' : `<button class="btn btn--sm btn--ghost" data-action="embed-allow">${t('embed.allow')}</button>`}
        </div>
        ${o.link ? `<a class="small-link" href="${esc(o.link)}" target="_blank" rel="noopener">${fmt(t('embed.open'), { p: name })} ↗</a>` : ''}
      </div></div>`;
  }
  function loadEmbed(el) {
    if (!el || !el.dataset.src || el.dataset.loaded) return;
    el.dataset.loaded = '1';
    const h = +el.dataset.h;
    el.innerHTML = `<div class="embed__loading"><div><i></i>${t('embed.loading')}</div></div>`;
    const f = document.createElement('iframe');
    f.src = el.dataset.src; f.title = el.dataset.title; f.loading = 'lazy';
    f.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    f.setAttribute('allowfullscreen', '');
    if (h) f.height = h;
    f.addEventListener('load', () => { const l = $('.embed__loading', el); if (l) { l.style.opacity = 0; setTimeout(() => l.remove(), 400); } });
    el.appendChild(f);
    Sound.previewStop(true);
  }
  function initEmbeds(scope = document) {
    if (!mediaAllowed()) return;
    $$('.embed[data-src]', scope).forEach(el => { if (el.dataset.provider !== 'youtube' || el.dataset.auto === '1') loadEmbed(el); });
  }

  /* =======================================================================
     MODAL, PALETA, LIGHTBOX
     ======================================================================= */
  let lastFocus = null;
  function trap(container, e) {
    const f = $$('a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])', container).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function openModal(inner) {
    const m = $('#modal'); lastFocus = document.activeElement;
    $('.modal__box', m).innerHTML = `<button class="modal__x" data-action="modal-close" aria-label="${t('close')}">${I.close}</button>` + inner;
    m.classList.add('is-on'); lenis && lenis.stop();
    setTimeout(() => { const f = $('.modal__box button:not(.modal__x), .modal__box input:not([disabled])', m); (f || $('.modal__x', m)).focus(); }, 60);
  }
  function closeModal() { const m = $('#modal'); if (!m.classList.contains('is-on')) return; m.classList.remove('is-on'); lenis && lenis.start(); lastFocus && lastFocus.focus && lastFocus.focus(); }
  function openShortcuts() {
    openModal(`<h2 id="modal-title">${t('shortcuts.title')}</h2><div class="kbd-list">${T().shortcuts.items.map(([k, v]) => `<div><span>${esc(v)}</span><kbd>${esc(k)}</kbd></div>`).join('')}</div>`);
  }

  /* Paleta de comandos (Ctrl/⌘+K) */
  let palItems = [], palSel = 0;
  function palData() {
    const items = [];
    NAV.forEach(n => items.push({ g: t('search.groupPages'), label: t('nav.' + n.key), href: url(n.href), ic: I.page }));
    [['legal.notice', 'aviso-legal.html'], ['legal.privacy', 'privacidad.html'], ['legal.terms', 'terminos.html'], ['legal.cookies', 'cookies.html']].forEach(([k, h]) => items.push({ g: t('search.groupPages'), label: t(k), href: url(h), ic: I.file }));
    D.songs.forEach(s => items.push({ g: t('search.groupSongs'), label: songTitle(s), sub: s.countdown && isLocked(s) ? t('upcoming') : s.duration, href: songHref(s), ic: String(s.n), kw: L(s.genre) }));
    Object.values(D.artists).forEach(a => items.push({ g: t('search.groupPeople'), label: a.name, sub: a.realName, href: artistHref(a.id), ic: I.user }));
    D.team.forEach(m => items.push({ g: t('search.groupPeople'), label: m.name, sub: L(m.role), href: teamHref(m.id), ic: I.user }));
    items.push({ g: t('search.groupActions'), label: t('actions.theme'), act: () => setTheme(state.theme === 'dark' ? 'light' : 'dark'), ic: state.theme === 'dark' ? I.sun : I.moon, sub: 'T' });
    items.push({ g: t('search.groupActions'), label: t('actions.lang'), act: () => setLang(state.lang === 'es' ? 'en' : 'es'), ic: I.globe, sub: 'L' });
    items.push({ g: t('search.groupActions'), label: t('actions.sound'), act: () => Sound.set(!state.sound), ic: I.music, sub: 'M' });
    items.push({ g: t('search.groupActions'), label: t('actions.cookies'), act: openCookieSettings, ic: I.cookie });
    items.push({ g: t('search.groupActions'), label: t('actions.shortcuts'), act: openShortcuts, ic: I.keyboard, sub: '?' });
    items.push({ g: t('search.groupActions'), label: t('listenEP') + ' · Spotify', href: D.ep.spotifyPlaylist, ext: true, ic: I.spotify });
    return items;
  }
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function palRender(q = '') {
    const all = palData(), nq = norm(q.trim());
    palItems = nq ? all.filter(i => norm(i.label + ' ' + (i.sub || '') + ' ' + (i.kw || '') + ' ' + i.g).includes(nq)) : all;
    palSel = 0;
    const list = $('#pal-list');
    if (!palItems.length) { list.innerHTML = `<div class="palette__empty">${esc(fmt(t('search.empty'), { q }))}</div>`; return; }
    let g = '', out = '';
    palItems.forEach((it, i) => {
      if (it.g !== g) { g = it.g; out += `<div class="palette__group" role="presentation">${esc(g)}</div>`; }
      out += `<button type="button" class="palette__item" role="option" id="pal-${i}" data-i="${i}" aria-selected="${i === 0}"><span class="ic">${it.ic}</span><span>${esc(it.label)}</span>${it.sub ? `<small>${esc(it.sub)}</small>` : ''}</button>`;
    });
    list.innerHTML = out;
    $('#palette input').setAttribute('aria-activedescendant', 'pal-0');
  }
  function palMove(d) {
    if (!palItems.length) return;
    palSel = (palSel + d + palItems.length) % palItems.length;
    $$('.palette__item').forEach(b => b.setAttribute('aria-selected', +b.dataset.i === palSel));
    const el = $('#pal-' + palSel); el && el.scrollIntoView({ block: 'nearest' });
    $('#palette input').setAttribute('aria-activedescendant', 'pal-' + palSel);
    Sound.tick();
  }
  function palGo(i) {
    const it = palItems[i]; if (!it) return;
    closePalette();
    if (it.act) setTimeout(it.act, 120);
    else if (it.ext) window.open(it.href, '_blank', 'noopener');
    else navigate(it.href);
  }
  function openPalette() {
    const p = $('#palette'); lastFocus = document.activeElement;
    p.classList.add('is-on'); lenis && lenis.stop();
    const inp = $('input', p); inp.value = ''; inp.placeholder = t('search.placeholder');
    $('.palette__foot', p).textContent = t('search.hint');
    palRender(''); setTimeout(() => inp.focus(), 50);
    Sound.marimba(587.33);
  }
  function closePalette() { const p = $('#palette'); if (!p.classList.contains('is-on')) return; p.classList.remove('is-on'); lenis && lenis.start(); lastFocus && lastFocus.focus && lastFocus.focus(); }

  /* Lightbox */
  const LB = { list: [], i: 0 };
  function lbOpen(list, i) {
    LB.list = list; LB.i = i; lastFocus = document.activeElement;
    const lb = $('.lightbox'); lb.classList.add('is-on'); lenis && lenis.stop(); lbShow();
    setTimeout(() => $('[data-lb="close"]').focus(), 50);
  }
  function lbShow() {
    const lb = $('.lightbox'), im = $('img', lb), it = LB.list[LB.i];
    im.style.opacity = 0;
    const n = new Image(); n.onload = () => { im.src = n.src; im.alt = it.alt || ''; im.style.opacity = 1; }; n.src = it.src;
    $('.lightbox__count', lb).textContent = `${pad(LB.i + 1)} / ${pad(LB.list.length)}`;
  }
  function lbNav(d) { LB.i = (LB.i + d + LB.list.length) % LB.list.length; lbShow(); Sound.tick(); }
  function lbClose() { const lb = $('.lightbox'); if (!lb.classList.contains('is-on')) return; lb.classList.remove('is-on'); lenis && lenis.start(); lastFocus && lastFocus.focus && lastFocus.focus(); }

  /* =======================================================================
     CUENTA REGRESIVA
     ======================================================================= */
  function countdownHTML(iso, lg) {
    return `<div class="countdown ${lg ? 'countdown--lg' : ''}" data-countdown="${iso}" role="timer" aria-live="off">
      ${['d', 'h', 'm', 's'].map(u => `<div class="countdown__unit"><span class="countdown__num" data-u="${u}">--</span><span class="countdown__lbl">${t('countdown.' + u)}</span></div>`).join('')}</div>`;
  }
  let cdTimer = null;
  function tickCountdowns() {
    const now = Date.now();
    $$('[data-countdown]').forEach(el => {
      const diff = new Date(el.dataset.countdown).getTime() - now;
      if (diff <= 0) { if (!el.classList.contains('countdown--done')) { el.className = 'countdown countdown--done'; el.textContent = t('countdown.done'); } return; }
      const v = { d: Math.floor(diff / 864e5), h: Math.floor(diff / 36e5) % 24, m: Math.floor(diff / 6e4) % 60, s: Math.floor(diff / 1e3) % 60 };
      $$('[data-u]', el).forEach(n => { const nv = pad(v[n.dataset.u]); if (n.textContent !== nv) { n.textContent = nv; n.classList.remove('tick'); void n.offsetWidth; n.classList.add('tick'); } });
      el.setAttribute('aria-label', `${v.d} ${t('countdown.d')}, ${v.h} ${t('countdown.h')}, ${v.m} ${t('countdown.m')}`);
    });
  }
  function startCountdowns() { clearInterval(cdTimer); tickCountdowns(); if ($('[data-countdown]')) cdTimer = setInterval(tickCountdowns, 1000); }

  /* =======================================================================
     ANIMACIÓN: Lenis + GSAP + utilidades
     ======================================================================= */
  let lenis = null;
  function initScroll() {
    if (!hasGSAP) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.Lenis && FINE) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }
  function splitText(el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    const walk = node => {
      Array.from(node.childNodes).forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(w => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
            const o = document.createElement('span'); o.className = 'split-line'; o.style.display = 'inline-block';
            const i = document.createElement('span'); i.className = 'split-word'; i.textContent = w;
            o.appendChild(i); frag.appendChild(o);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('split-line')) {
          if (getComputedStyle(n).display === 'inline-block' || n.classList.contains('flick')) {
            const o = document.createElement('span'); o.className = 'split-line'; o.style.display = 'inline-block';
            n.replaceWith(o); o.appendChild(n); n.classList.add('split-word');
          } else walk(n);
        }
      });
    };
    walk(el);
  }
  function animateIn(scope = document) {
    if (!hasGSAP) { $$('[data-reveal]', scope).forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; e.style.clipPath = 'none'; }); return; }
    $$('[data-split]', scope).forEach(el => {
      splitText(el);
      const words = $$('.split-word', el);
      gsap.set(words, { yPercent: 115 });
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => gsap.to(words, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: .045 }) });
    });
    ScrollTrigger.batch($$('[data-reveal]:not([data-reveal="clip"])', scope), {
      start: 'top 90%', once: true,
      onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .08, overwrite: true })
    });
    $$('[data-reveal="clip"]', scope).forEach(el => {
      const im = $('img', el);
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      tl.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'expo.inOut' });
      if (im) tl.from(im, { scale: 1.35, duration: 1.6, ease: 'expo.out' }, 0);
    });
    $$('[data-parallax]', scope).forEach(el => {
      const v = parseFloat(el.dataset.parallax) || .15;
      gsap.fromTo(el, { yPercent: -v * 50 }, { yPercent: v * 50, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    $$('.marquee', scope).forEach(initMarquee);
    // Footer letters
    const big = $$('.footer__big span');
    if (big.length) gsap.fromTo(big, { yPercent: 100 }, { yPercent: 0, ease: 'expo.out', duration: 1.2, stagger: .05, scrollTrigger: { trigger: '.footer', start: 'top 85%', once: true } });
  }
  function marquee(items, cls = '') {
    const row = items.map(x => `<span class="marquee__item">${esc(x)} <i>✦</i></span>`).join('');
    return `<div class="marquee ${cls}" aria-hidden="true"><div class="marquee__track">${row}${row}${row}${row}</div></div>`;
  }
  function initMarquee(m) {
    const tr = $('.marquee__track', m); if (!tr || tr.dataset.on) return; tr.dataset.on = '1';
    const rev = m.classList.contains('marquee--rev');
    const tw = gsap.fromTo(tr, { xPercent: rev ? -25 : 0 }, { xPercent: rev ? 0 : -25, duration: 22, ease: 'none', repeat: -1 });
    ScrollTrigger.create({ trigger: m, start: 'top bottom', end: 'bottom top', onUpdate: s => {
      const v = s.getVelocity();
      gsap.to(tw, { timeScale: (v < 0 ? -1 : 1) * (1 + Math.min(Math.abs(v) / 250, 5)), duration: .2, overwrite: true, onComplete: () => gsap.to(tw, { timeScale: v < 0 ? -1 : 1, duration: 1.2 }) });
    } });
  }
  function initMagnetic(scope = document) {
    if (!FINE || REDUCED) return;
    $$('[data-magnetic]', scope).forEach(el => {
      el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* Header que se oculta, barra de progreso, volver arriba */
  function initScrollUI() {
    const hd = $('#site-header'), sp = $('.scroll-progress'), top = $('.to-top'), ring = $('.to-top circle');
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? y / h : 0;
      hd.classList.toggle('is-scrolled', y > 40);
      if (!body.classList.contains('menu-open')) hd.classList.toggle('is-hidden', y > last && y > 300);
      last = y;
      sp.style.transform = `scaleX(${p})`;
      top.classList.toggle('is-on', y > innerHeight * .8);
      ring.style.strokeDashoffset = 150.8 * (1 - p);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* =======================================================================
     TRANSICIONES ENTRE PÁGINAS
     ======================================================================= */
  const curtain = $('.curtain');
  function curtainLabel(txt) { const l = $('.curtain__label', curtain); if (l) l.textContent = txt; }
  function navigate(href) {
    if (!href) return;
    Sound.previewStop(true);
    const np = $('.nav-progress'); np.style.width = '70%';
    if (!hasGSAP) { location.href = href; return; }
    curtainLabel(t('loading') + '…');
    gsap.fromTo(curtain, { yPercent: 101 }, { yPercent: 0, duration: .6, ease: 'expo.inOut', onComplete: () => { np.style.width = '100%'; location.href = href; } });
  }
  function revealPage() {
    curtain.classList.remove('is-on');
    if (!hasGSAP) { curtain.style.transform = 'translateY(-101%)'; return; }
    gsap.set(curtain, { yPercent: 0 });
    gsap.to(curtain, { yPercent: -101, duration: .9, ease: 'expo.inOut', delay: .1 });
  }
  window.addEventListener('pageshow', e => { if (e.persisted) { if (hasGSAP) gsap.set(curtain, { yPercent: -101 }); $('.nav-progress').style.width = 0; } });

  /* =======================================================================
     EVENTOS GLOBALES
     ======================================================================= */
  function toggleMenu(force) {
    const open = force ?? !body.classList.contains('menu-open');
    body.classList.toggle('menu-open', open);
    const b = $('[data-action="menu"]'); b && b.setAttribute('aria-expanded', open);
    b && b.setAttribute('aria-label', open ? t('close') : t('menu'));
    $('#mmenu').setAttribute('aria-hidden', !open);
    open ? (lenis && lenis.stop()) : (lenis && lenis.start());
    if (open) $('#site-header').classList.remove('is-hidden');
    Sound.guacharaca();
  }
  async function copy(text, okMsg) {
    try { await navigator.clipboard.writeText(text); toast(okMsg || t('copied')); Sound.marimba(783.99); }
    catch (e) { toast(t('copyFail'), I.info); }
  }
  async function share(title) {
    const u = location.href.split('#')[0];
    if (navigator.share) { try { await navigator.share({ title, url: u }); } catch (e) {} }
    else copy(u, t('copied'));
  }

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-action]');
    if (a) {
      const act = a.dataset.action;
      const map = {
        palette: openPalette, 'palette-close': closePalette,
        lang: () => setLang(state.lang === 'es' ? 'en' : 'es'),
        theme: () => setTheme(state.theme === 'dark' ? 'light' : 'dark'),
        sound: () => { Sound.ensure(); Sound.set(!state.sound); },
        menu: () => toggleMenu(),
        top: () => { lenis ? lenis.scrollTo(0, { duration: 1.6 }) : scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }); Sound.chirp(2); },
        cookies: openCookieSettings, 'modal-close': closeModal,
        'ck-accept': () => { saveConsent(true); closeModal(); },
        'ck-reject': () => { saveConsent(false); },
        'ck-save': () => { saveConsent($('#ck-media').checked); closeModal(); },
        'embed-once': () => loadEmbed(a.closest('.embed')),
        'embed-allow': () => { saveConsent(true); },
        shortcuts: openShortcuts,
        share: () => share(a.dataset.title || document.title),
        copy: () => copy(a.dataset.copy, a.dataset.msg)
      };
      if (map[act]) { e.preventDefault(); map[act](); if (!['sound'].includes(act)) Sound.guacharaca(); return; }
    }
    const pi = e.target.closest('.palette__item'); if (pi) { palGo(+pi.dataset.i); return; }
    const lbb = e.target.closest('[data-lb]'); if (lbb) { const k = lbb.dataset.lb; k === 'close' ? lbClose() : lbNav(k === 'next' ? 1 : -1); return; }
    if (e.target.classList.contains('lightbox')) { lbClose(); return; }
    const g = e.target.closest('[data-gallery]');
    if (g) {
      e.preventDefault();
      const items = $$(`[data-gallery="${g.dataset.gallery}"]`);
      lbOpen(items.map(x => ({ src: x.getAttribute('href'), alt: ($('img', x) || {}).alt })), items.indexOf(g));
      Sound.marimba(659.25); return;
    }
    // Transición de página
    const link = e.target.closest('a[href]');
    if (link && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      const href = link.getAttribute('href');
      if (link.target === '_blank' || link.hasAttribute('download') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) { if (link.target === '_blank') Sound.chirp(1); return; }
      const u = new URL(link.href, location.href);
      if (u.origin !== location.origin) return;
      if (u.pathname === location.pathname && u.hash) return;
      e.preventDefault();
      if (body.classList.contains('menu-open')) toggleMenu(false);
      Sound.marimba(523.25);
      navigate(link.href);
    }
  });

  // Sonido al pasar sobre enlaces/botones (muy suave)
  let lastTick = 0;
  document.addEventListener('mouseover', e => {
    const a = e.target.closest('.nav a, .btn, .ctrl, .icon-btn, .tm, .mmenu a, .footer a, .tab, .chip');
    if (a && a !== e.relatedTarget?.closest?.('.nav a, .btn, .ctrl, .icon-btn, .tm, .mmenu a, .footer a, .tab, .chip') && performance.now() - lastTick > 70) { lastTick = performance.now(); Sound.tick(); }
  });

  // Teclado
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let kIdx = 0;
  document.addEventListener('keydown', e => {
    const k = e.key;
    kIdx = (k === konami[kIdx] || k.toLowerCase() === konami[kIdx]) ? kIdx + 1 : (k === konami[0] ? 1 : 0);
    if (kIdx === konami.length) { kIdx = 0; confetti(); }
    const pal = $('#palette').classList.contains('is-on');
    const lb = $('.lightbox').classList.contains('is-on');
    const modal = $('#modal').classList.contains('is-on');
    if ((e.ctrlKey || e.metaKey) && k.toLowerCase() === 'k') { e.preventDefault(); pal ? closePalette() : openPalette(); return; }
    if (k === 'Escape') { if (pal) closePalette(); else if (lb) lbClose(); else if (modal) closeModal(); else if (body.classList.contains('menu-open')) toggleMenu(false); return; }
    if (pal) {
      if (k === 'ArrowDown') { e.preventDefault(); palMove(1); }
      else if (k === 'ArrowUp') { e.preventDefault(); palMove(-1); }
      else if (k === 'Enter') { e.preventDefault(); palGo(palSel); }
      else if (k === 'Tab') trap($('#palette'), e);
      return;
    }
    if (lb) { if (k === 'ArrowRight') lbNav(1); if (k === 'ArrowLeft') lbNav(-1); if (k === 'Tab') trap($('.lightbox'), e); return; }
    if (modal) { if (k === 'Tab') trap($('#modal'), e); return; }
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable || e.ctrlKey || e.metaKey || e.altKey) return;
    if (k === '/') { e.preventDefault(); openPalette(); }
    else if (k === '?') { e.preventDefault(); openShortcuts(); }
    else if (k.toLowerCase() === 'm') { Sound.ensure(); Sound.set(!state.sound); }
    else if (k.toLowerCase() === 't') setTheme(state.theme === 'dark' ? 'light' : 'dark');
    else if (k.toLowerCase() === 'l') setLang(state.lang === 'es' ? 'en' : 'es');
    else if (PAGE === 'song' && (k === 'ArrowLeft' || k === 'ArrowRight')) {
      const a = $(k === 'ArrowLeft' ? '[data-pager="prev"]' : '[data-pager="next"]'); if (a) navigate(a.href);
    }
  });
  document.addEventListener('input', e => { if (e.target.matches('#palette input')) palRender(e.target.value); });
  document.addEventListener('mousemove', e => { const it = e.target.closest('.palette__item'); if (it && +it.dataset.i !== palSel) { palSel = +it.dataset.i; $$('.palette__item').forEach(b => b.setAttribute('aria-selected', +b.dataset.i === palSel)); } });

  // Swipe en lightbox
  let tx = 0;
  document.addEventListener('touchstart', e => { if (e.target.closest('.lightbox')) tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => { if (!e.target.closest('.lightbox') || !tx) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1); tx = 0; }, { passive: true });

  /* Confeti de plumas (código Konami o easter eggs) */
  function confetti(n = 60) {
    Sound.ensure(); Sound.chirp(4); toast(t('egg'), I.feather);
    const cols = ['#FCD116', '#FCD116', '#2f4ff0', '#e3192b', '#8a5a2b', '#f1ece3'];
    for (let i = 0; i < n; i++) {
      const f = document.createElement('i'); f.className = 'confetti';
      f.style.left = Math.random() * 100 + 'vw'; f.style.background = cols[i % cols.length];
      body.appendChild(f);
      const dur = 2200 + Math.random() * 2200;
      f.animate([{ transform: `translateY(0) rotate(0)` }, { transform: `translate(${(Math.random() - .5) * 200}px, ${innerHeight + 60}px) rotate(${Math.random() * 720}deg)` }], { duration: dur, easing: 'cubic-bezier(.3,.6,.5,1)', delay: Math.random() * 600 }).onfinish = () => f.remove();
    }
  }

  /* =======================================================================
     RENDER Y ARRANQUE
     ======================================================================= */
  function renderMain() {
    const P = window.Pages && window.Pages[PAGE];
    const main = $('#main');
    if (!P) { main.innerHTML = ''; return; }
    main.innerHTML = P.render(PAGE_ID);
    if (P.title) document.title = P.title(PAGE_ID);
  }
  function afterMain() {
    const P = window.Pages && window.Pages[PAGE];
    animateIn($('#main'));
    animateIn($('#site-footer'));
    initMagnetic();
    initEmbeds();
    startCountdowns();
    if (P && P.after) P.after(PAGE_ID);
    if (hasGSAP) ScrollTrigger.refresh();
  }
  function rerender() {
    if (hasGSAP) { ScrollTrigger.getAll().forEach(s => s.kill()); gsap.globalTimeline.getChildren(true, true, false).forEach(tw => { if (tw.targets && tw.targets()[0] !== curtain) tw.kill(); }); }
    const y = scrollY;
    renderChrome(); renderMain(); afterMain();
    updateSoundBtn();
    scrollTo(0, y);
  }

  // API pública para pages.js
  window.App = {
    D, I, state, store, $, $$, esc, url, t, L, fmt, fmtDate, pad, T, songTitle, songHref, artistHref, teamHref, img, isReleased, isLocked,
    embed, loadEmbed, countdownHTML, marquee, Sound, toast, navigate, copy, share, confetti, splitText, openPalette, lbOpen,
    get lenis() { return lenis; }, hasGSAP, REDUCED, FINE, PAGE, PAGE_ID, ROOT, NAV
  };

  function boot() {
    renderChrome();
    renderMain();
    initScroll();
    initScrollUI();
    const firstHome = PAGE === 'home' && !store.sget('loaded');
    if (firstHome && hasGSAP && window.Pages.home.loader) {
      gsap.set(curtain, { yPercent: -101 }); curtain.classList.remove('is-on');
      window.Pages.home.loader(() => { store.sset('loaded', '1'); afterMain(); });
    } else {
      store.sset('loaded', '1');
      revealPage();
      afterMain();
    }
  }
  // Se arranca cuando todos los scripts diferidos (incluido pages.js) ya cargaron
  if (document.readyState === 'complete') boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
