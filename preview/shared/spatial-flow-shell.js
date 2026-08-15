(() => {
  const FONT_ID = 'spatial-flow-shell-fonts';
  if (!document.getElementById(FONT_ID)) {
    const link = document.createElement('link');
    link.id = FONT_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500&display=swap';
    document.head.appendChild(link);
  }

  const headerTemplate = document.createElement('template');
  headerTemplate.innerHTML = `
    <style>
      :host {
        all: initial;
        --paper: #f6f1eb;
        --ink: #1f1916;
        --ink-soft: rgba(31,25,22,.62);
        --terracotta: #a8745c;
        --serif: "Cormorant Garamond", "Noto Serif SC", Georgia, serif;
        --sans: "Inter", "PingFang SC", system-ui, sans-serif;
        --mono: "JetBrains Mono", ui-monospace, monospace;
        display: block;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        color: var(--ink);
        font-family: var(--sans);
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
        font-feature-settings: normal;
        font-kerning: normal;
        font-variant: normal;
        font-synthesis: none;
        text-rendering: geometricPrecision;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }
      *, *::before, *::after { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }
      .masthead {
        width: 100%;
        padding: 12px 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        background: var(--paper);
        border-bottom: 1px solid rgba(31,25,22,.08);
        font-family: var(--mono);
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: var(--ink-soft);
        white-space: nowrap;
      }
      .masthead .vol b { color: var(--terracotta); font-weight: 500; }
      .masthead .center { letter-spacing: .2em; color: var(--ink); }
      .masthead .right span {
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 8px;
        border-radius: 50%;
        background: var(--terracotta);
        vertical-align: middle;
      }
      .site-header {
        width: 100%;
        padding: 32px 56px 28px;
        border-bottom: 1px solid var(--ink);
        background: var(--paper);
        position: sticky;
        top: 0;
        z-index: 50;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: baseline;
        gap: 32px;
      }
      .primary { justify-self: start; }
      .primary ul {
        list-style: none;
        display: flex;
        gap: 36px;
        padding: 0;
        margin: 0;
      }
      .primary a {
        display: inline-block;
        padding: 0 0 4px;
        font-family: var(--sans);
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: .08em;
        text-transform: uppercase;
        color: var(--ink);
        transition: color .25s;
      }
      .primary a:hover { color: var(--terracotta); }
      .primary a.current { border-bottom: 1px solid var(--ink); }
      .wordmark {
        justify-self: center;
        font-family: var(--serif);
        font-size: clamp(28px, 3vw, 38px);
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        letter-spacing: .08em;
        text-align: center;
        color: var(--ink);
      }
      .wordmark em { font-style: italic; }
      .wordmark .sub {
        display: block;
        margin-top: 10px;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: .35em;
        text-transform: uppercase;
        color: var(--ink-soft);
      }
      .utilities {
        justify-self: end;
        display: flex;
        gap: 24px;
        align-items: baseline;
        font-family: var(--sans);
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }
      .utilities a {
        letter-spacing: .05em;
        color: var(--ink);
        transition: color .25s;
      }
      .utilities a:hover { color: var(--terracotta); }
      .utilities .bag {
        position: relative;
        display: inline-flex;
        align-items: baseline;
        gap: 4px;
        font-weight: 500;
      }
      .utilities .bag-count {
        color: var(--terracotta);
        font-weight: 600;
        transition: transform .4s cubic-bezier(.22,.61,.36,1);
      }
      .utilities .bag.bump .bag-count { transform: scale(1.4); }
      @media (max-width: 1100px) {
        .masthead { padding: 10px 40px; }
        .site-header { padding: 24px 40px 20px; }
      }
      @media (max-width: 720px) {
        .masthead { padding: 10px 24px; flex-wrap: wrap; gap: 8px; font-size: 10px; }
        .masthead .center { display: none; }
        .site-header { padding: 20px 24px; grid-template-columns: 1fr auto; gap: 20px; align-items: center; }
        .primary { display: none; }
        .wordmark { justify-self: start; font-size: 28px; }
        .wordmark .sub { display: none; }
        .utilities { gap: 14px; font-size: 12px; }
      }
      @media (max-width: 430px) {
        .masthead .right { display: none; }
        .site-header { padding-left: 20px; padding-right: 20px; }
        .wordmark { font-size: 24px; }
        .utilities { gap: 10px; font-size: 11px; }
        .utilities > a:not(.bag):first-child { display: none; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
      }
    </style>
    <div class="masthead" aria-label="Spatial Flow issue strip">
      <div class="vol">Volume <b>I</b> · Issue <b>03</b> · Spring 2026</div>
      <div class="center">A Journal of Rooms, Rituals &amp; Quiet Objects</div>
      <div class="right"><span></span>Free shipping over $80 worldwide</div>
    </div>
    <header class="site-header">
      <nav class="primary" aria-label="Spatial Flow primary navigation">
        <ul>
          <li><a data-nav="index" href="./spatial-flow-shop-v1.html">The Index</a></li>
          <li><a data-nav="journal" href="./ink-east-v1.html">The Journal</a></li>
          <li><a href="#">Consult</a></li>
          <li><a href="#">Our Pages</a></li>
        </ul>
      </nav>
      <a href="./spatial-flow-v1.html" class="wordmark" aria-label="Spatial Flow home">
        SPATIAL <em>FLOW</em>
        <span class="sub">Est. 2026 · Est. in quiet rooms</span>
      </a>
      <div class="utilities">
        <a href="#">Search</a>
        <a href="#">Account</a>
        <a href="./spatial-flow-cart-v1.html" class="bag">Bag <sup class="bag-count"></sup></a>
      </div>
    </header>
  `;

  class SpatialFlowHeader extends HTMLElement {
    static get observedAttributes() { return ['active', 'bag-count']; }

    connectedCallback() {
      if (!this.shadowRoot) {
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(headerTemplate.content.cloneNode(true));
      }
      this._sync();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this._sync();
    }

    _sync() {
      const active = this.getAttribute('active') || 'index';
      this.shadowRoot.querySelectorAll('[data-nav]').forEach(link => {
        link.classList.toggle('current', link.dataset.nav === active);
      });
      const count = this.getAttribute('bag-count') || '3';
      this.bagCountElement.textContent = `(${count})`;
      const bag = this.bagLink;
      if (this.hasAttribute('product-hooks')) {
        bag.id = 'headerBag';
        bag.setAttribute('aria-haspopup', 'true');
        bag.setAttribute('aria-controls', 'cartPop');
        this.bagCountElement.id = 'bagCount';
      } else {
        bag.removeAttribute('id');
        bag.removeAttribute('aria-haspopup');
        bag.removeAttribute('aria-controls');
        this.bagCountElement.removeAttribute('id');
      }
    }

    get bagLink() { return this.shadowRoot && this.shadowRoot.querySelector('.bag'); }
    get bagCountElement() { return this.shadowRoot && this.shadowRoot.querySelector('.bag-count'); }
  }

  const footerTemplate = document.createElement('template');
  footerTemplate.innerHTML = `
    <style>
      :host {
        all: initial;
        --paper: #f6f1eb;
        --ink: #1f1916;
        --terracotta: #a8745c;
        --serif: "Cormorant Garamond", "Noto Serif SC", Georgia, serif;
        --sans: "Inter", "PingFang SC", system-ui, sans-serif;
        --mono: "JetBrains Mono", ui-monospace, monospace;
        display: block;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        background: var(--ink);
        color: var(--paper);
        font-family: var(--sans);
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        font-feature-settings: normal;
        font-kerning: normal;
        font-variant: normal;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        transform: translateY(var(--footer-snap-y, 0px));
      }
      *, *::before, *::after { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }
      footer {
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 80px 56px 40px;
        background: var(--ink);
        color: var(--paper);
        font-family: var(--sans);
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
      }
      .brand-mark {
        margin: 0 0 56px;
        font-family: var(--serif);
        font-size: clamp(28px, 3vw, 38px);
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        letter-spacing: .08em;
        text-align: center;
        color: var(--paper);
      }
      .brand-mark em { font-style: italic; }
      .brand-mark .sub {
        display: block;
        margin-top: 10px;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: .35em;
        text-transform: uppercase;
        color: rgba(246,241,235,.55);
      }
      .cols {
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        align-items: start;
        gap: 48px;
        padding-bottom: 56px;
        border-bottom: 1px solid rgba(246,241,235,.12);
      }
      h5 {
        margin: 0 0 18px;
        padding: 0;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: var(--terracotta);
      }
      .mission {
        max-width: 36ch;
        margin: 0;
        padding: 0;
        font-family: var(--serif);
        font-size: 17px;
        font-style: italic;
        font-weight: 400;
        line-height: 25.5px;
        color: rgba(246,241,235,.7);
      }
      ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin: 0; padding: 0; }
      li { margin: 0; padding: 0; min-height: 20px; line-height: 20px; }
      li a {
        display: inline-flex;
        align-items: center;
        min-height: 20px;
        font-family: var(--sans);
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: rgba(246,241,235,.7);
        transition: color .2s;
      }
      li a:hover { color: var(--terracotta); }
      .colophon {
        max-width: 1440px;
        margin: 0 auto;
        padding-top: 28px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: rgba(246,241,235,.4);
      }
      @media (max-width: 1100px) {
        footer { padding: 60px 40px 32px; }
        .cols { grid-template-columns: 1fr 1fr 1fr; }
      }
      @media (max-width: 720px) {
        footer { padding: 48px 24px 32px; }
        .cols { grid-template-columns: 1fr 1fr; gap: 32px; }
        .colophon { flex-direction: column; gap: 8px; align-items: flex-start; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
      }
    </style>
    <footer aria-label="Spatial Flow site footer">
      <div class="brand-mark">
        SPATIAL <em>FLOW</em>
        <span class="sub">A Journal of Rooms, Rituals &amp; Quiet Objects · Est. 2026</span>
      </div>
      <div class="cols">
        <div>
          <h5>— The Publisher</h5>
          <p class="mission">An independent journal and shop about the rooms we live in, the objects that hold them together, and the quiet rituals that make them ours.</p>
        </div>
        <nav aria-label="The Index">
          <h5>— The Index</h5>
          <ul>
            <li><a href="./spatial-flow-shop-v1.html">Bracelets</a></li>
            <li><a href="./spatial-flow-shop-v1.html">Necklaces</a></li>
            <li><a href="./spatial-flow-shop-v1.html">Decorative pieces</a></li>
            <li><a href="./spatial-flow-shop-v1.html">All pieces</a></li>
            <li><a href="#">Consult &amp; Customize</a></li>
          </ul>
        </nav>
        <nav aria-label="The Journal">
          <h5>— The Journal</h5>
          <ul>
            <li><a href="./ink-east-v1.html">Space &amp; Energy</a></li>
            <li><a href="./ink-east-v1.html">Mind &amp; Emotion</a></li>
            <li><a href="./ink-east-v1.html">Philosophy &amp; Insights</a></li>
            <li><a href="./ink-east-v1.html">Lifestyle Guide</a></li>
            <li><a href="./ink-east-v1.html">Crystals &amp; Botanicals</a></li>
          </ul>
        </nav>
        <nav aria-label="Care">
          <h5>— Care</h5>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns &amp; Refunds</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <nav aria-label="Our Pages">
          <h5>— Our Pages</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Consult</a></li>
            <li><a href="./spatial-flow-cart-v1.html">Your Bag</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </nav>
      </div>
      <div class="colophon">
        <span>© 2026 Spatial Flow · Published slowly, from a small wooden table.</span>
        <span>Set in Cormorant Garamond &amp; Inter · ISSN — 2026.03</span>
      </div>
    </footer>
  `;

  class SpatialFlowFooter extends HTMLElement {
    constructor() {
      super();
      this._snapFrame = 0;
      this._scheduleSnap = this._scheduleSnap.bind(this);
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(footerTemplate.content.cloneNode(true));
      }
      this._scheduleSnap();
      window.addEventListener('load', this._scheduleSnap, { once: true });
      window.addEventListener('resize', this._scheduleSnap);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(this._scheduleSnap);
    }

    disconnectedCallback() {
      window.removeEventListener('resize', this._scheduleSnap);
      if (this._snapFrame) cancelAnimationFrame(this._snapFrame);
    }

    _scheduleSnap() {
      if (this._snapFrame) cancelAnimationFrame(this._snapFrame);
      this._snapFrame = requestAnimationFrame(() => {
        this._snapFrame = 0;
        this.style.setProperty('--footer-snap-y', '0px');
        const rect = this.getBoundingClientRect();
        const absoluteBottom = rect.bottom + window.scrollY;
        const documentBottom = document.documentElement.scrollHeight;
        const delta = documentBottom - absoluteBottom;
        this.style.setProperty('--footer-snap-y', `${delta.toFixed(3)}px`);
      });
    }
  }

  if (!customElements.get('spatial-flow-header')) customElements.define('spatial-flow-header', SpatialFlowHeader);
  if (!customElements.get('spatial-flow-footer')) customElements.define('spatial-flow-footer', SpatialFlowFooter);
})();
