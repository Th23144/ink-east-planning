(() => {
  const items = [
    ['home', './ink-east-v1.html', 'Home', true],
    ['issues', './ink-east-issue-001-v1.html', 'Issues', true],
    ['articles', './ink-east-articles-archive-v1.html', 'Articles', true],
    ['topics', '', 'Topics', false],
    ['collections', '', 'Collections', false],
    ['search', '', 'Search', false],
    ['about', '', 'About', false],
  ];

  class InkEastPublicNav extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const mode = this.getAttribute('mode') === 'full' ? 'full' : 'cover';
      const active = this.getAttribute('active') || '';
      const root = this.attachShadow({ mode: 'open' });
      const links = items.map(([key, href, label, live]) => {
        const current = active === key;
        if (!live) return `<span class="nav-item placeholder" data-placeholder="true">${label}</span>`;
        return `<a class="nav-item${current ? ' active' : ''}" href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a>`;
      }).join('');

      root.innerHTML = `
        <style>
          :host {
            all: initial;
            --paper: #f4ede0;
            --ink: #1a1611;
            --ink-soft: #4a4036;
            --ink-faint: #8a7f70;
            --seal: #a02d23;
            --rule: rgba(26,22,17,.28);
            --rule-soft: rgba(26,22,17,.12);
            --serif-en: "EB Garamond","Noto Serif SC",Georgia,serif;
            --serif-cn: "Noto Serif SC","EB Garamond",serif;
            --mono: "JetBrains Mono",ui-monospace,monospace;
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            color: var(--ink-soft);
            font-family: var(--mono);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
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
          .nav-item { white-space: nowrap; }
          a.nav-item { transition: color .2s, border-color .2s; }
          a.nav-item:hover { color: var(--seal); }
          .placeholder { color: var(--ink-faint); cursor: default; }

          .cover-nav {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
            align-items: center;
            padding: 0 0 24px;
            border-bottom: 1px solid var(--rule);
            position: relative;
            z-index: 2;
            font-family: var(--mono);
            font-size: 10px;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
            color: var(--ink-soft);
          }
          .cover-nav .left { min-width: 0; display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
          .cover-nav .center {
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--serif-cn);
            font-size: 13px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: .5em;
            color: var(--ink);
            white-space: nowrap;
          }
          .cover-nav .right { min-width: 0; display: flex; align-items: center; justify-content: flex-end; gap: 28px; }
          .cover-nav .action { white-space: nowrap; }
          .cover-nav .action.placeholder { color: var(--ink-faint); }

          .full-nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            padding: 26px clamp(28px,5.5vw,100px);
            border-bottom: 1px solid var(--rule-soft);
            position: relative;
            z-index: 5;
            flex-wrap: wrap;
          }
          .brand { display: flex; align-items: baseline; gap: 12px; white-space: nowrap; }
          .brand .mark { font-family: var(--serif-en); font-size: 22px; font-weight: 500; line-height: 28px; letter-spacing: .01em; text-transform: none; color: var(--ink); }
          .brand .mark em { font-style: italic; color: var(--seal); }
          .brand .cn { font-family: var(--serif-cn); font-size: 13px; line-height: 24px; letter-spacing: .3em; text-transform: none; color: var(--ink-faint); }
          .full-nav .links { display: flex; align-items: center; gap: 26px; flex-wrap: wrap; font-family: var(--mono); font-size: 11px; line-height: 24px; letter-spacing: .16em; text-transform: uppercase; }
          .full-nav .nav-item { height: 28px; display: inline-flex; align-items: center; padding: 0 0 4px; border-bottom: 1px solid transparent; color: var(--ink-soft); }
          .full-nav .nav-item.active { color: var(--ink); border-bottom-color: var(--seal); }
          .full-nav .placeholder { color: var(--ink-faint); }

          @media (max-width: 720px) {
            .cover-nav { grid-template-columns: 1fr; text-align: center; gap: 6px; padding-bottom: 14px; }
            .cover-nav .left, .cover-nav .right { justify-content: center; }
            .cover-nav .left { gap: 6px 18px; }
            .cover-nav .right { display: none; }
          }
          @media (max-width: 600px) {
            .full-nav { padding: 16px 18px; gap: 14px; align-items: flex-start; flex-direction: column; }
            .full-nav .links { gap: 6px 18px; font-size: 10px; }
          }
        </style>
        ${mode === 'full' ? `
          <nav class="full-nav" aria-label="Ink & East public navigation">
            <div class="brand"><span class="mark">Ink <em>&amp;</em> East</span><span class="cn">墨與東</span></div>
            <div class="links">${links}</div>
          </nav>` : `
          <nav class="cover-nav" aria-label="Ink & East public navigation">
            <div class="left">${links}</div>
            <div class="center">墨 與 東</div>
            <div class="right"><a class="action" href="#dispatch">Subscribe</a><span class="action placeholder" data-placeholder="true">Sign in</span></div>
          </nav>`}
      `;
    }
  }
  if (!customElements.get('ink-east-public-nav')) customElements.define('ink-east-public-nav', InkEastPublicNav);
})();
