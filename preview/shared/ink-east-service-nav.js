(() => {
  const navItems = [
    ['home', './ink-east-v1.html', 'Home'],
    ['issues', './ink-east-issue-001-v1.html', 'Issues'],
    ['reading-room', './ink-east-reading-room-v1.html', 'Reading Room'],
    ['vip-library', './ink-east-vip-library-v1.html', 'VIP Library'],
    ['ask-ancient', './ink-east-letters-form-v1.html', 'Ask the Ancient'],
    ['studio', './ink-east-custom-ebook-v1.html', 'Studio'],
    ['membership', './ink-east-membership-v1.html', 'Membership'],
    ['community', './ink-east-community-v1.html', 'Community'],
  ];

  const escapeHTML = value => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

  class InkEastServiceNav extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;

      const active = this.getAttribute('active') || '';
      const auth = this.getAttribute('auth') === 'member' ? 'member' : 'guest';
      const context = escapeHTML(this.getAttribute('context') || 'INK & EAST');
      const note = escapeHTML(this.getAttribute('note') || '');
      const noteHref = this.getAttribute('note-href');

      const left = navItems.map(([key, href, label]) => {
        const isActive = active === key;
        return `<a class="nav-link${isActive ? ' active' : ''}" href="${href}"${isActive ? ' aria-current="page"' : ''}>${label}</a>`;
      }).join('');

      const account = auth === 'member'
        ? '<a class="nav-link" href="#account">Account</a><a class="nav-link" href="/wp-login.php?action=logout">Sign out</a>'
        : '<a class="nav-link" href="/wp-login.php">Sign in</a>';

      const backbarRight = noteHref
        ? `<a class="right" href="${escapeHTML(noteHref)}">${note}</a>`
        : `<span class="right">${note}</span>`;

      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
        <style>
          :host {
            all: initial;
            --paper: #f4ede0;
            --paper-light: #faf5e9;
            --ink: #1a1611;
            --ink-soft: #4a4036;
            --ink-faint: #8a7f70;
            --seal: #a02d23;
            --rule: rgba(26,22,17,.28);
            --serif-cn: "Noto Serif SC","EB Garamond",serif;
            --mono: "JetBrains Mono",ui-monospace,monospace;
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            border: 0;
            color: var(--ink);
            font-family: var(--mono);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
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

          .shell { width: 100%; min-width: 0; }

          .backbar {
            width: 100%;
            height: 32px;
            padding: 0 28px;
            background: var(--ink);
            color: var(--paper-light);
            display: grid;
            grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
            align-items: center;
            gap: 14px;
            font-family: var(--mono);
            font-size: 10px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: .1em;
            text-transform: uppercase;
          }
          .backbar .back,
          .backbar .context,
          .backbar .right {
            min-width: 0;
            height: 16px;
            line-height: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .backbar .back { justify-self: start; color: var(--seal); border-bottom: 1px dashed var(--seal); }
          .backbar .context { justify-self: center; text-align: center; }
          .backbar .right { justify-self: end; text-align: right; color: var(--ink-faint); }
          .backbar a.right { color: var(--seal); border-bottom: 1px dashed var(--seal); }

          .nav-strip { width: 100%; padding: 20px 56px 0; }
          .site-nav {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            gap: 0;
            padding: 0 0 18px;
            border-bottom: 1px solid var(--rule);
            font-family: var(--mono);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
            color: var(--ink-soft);
          }
          .left, .right-nav {
            min-width: 0;
            min-height: 24px;
            display: flex;
            align-items: center;
            gap: 28px;
          }
          .left { flex-wrap: wrap; justify-content: flex-start; }
          .right-nav { justify-content: flex-end; }
          .center {
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--serif-cn);
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: .5em;
            color: var(--ink);
            white-space: nowrap;
          }
          .nav-link {
            display: inline-flex;
            align-items: center;
            height: 24px;
            padding: 0;
            border: 0;
            font-family: var(--mono);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
            color: var(--ink-soft);
            white-space: nowrap;
            transition: color .2s;
          }
          .nav-link:hover { color: var(--seal); }
          .nav-link.active {
            color: var(--seal);
            box-shadow: inset 0 -1px 0 var(--seal);
          }

          @media (max-width: 900px) {
            .backbar {
              height: 56px;
              padding: 6px 14px;
              grid-template-columns: minmax(0,1fr) minmax(0,1fr);
              grid-template-rows: 18px 18px;
              grid-template-areas: "back right" "context context";
              gap: 2px 12px;
            }
            .backbar .back { grid-area: back; }
            .backbar .context { grid-area: context; width: 100%; justify-self: stretch; }
            .backbar .right { grid-area: right; }
            .nav-strip { padding: 14px 22px 0; }
            .site-nav { grid-template-columns: 1fr; gap: 14px; text-align: center; }
            .left, .right-nav { justify-content: center; }
          }
        </style>
        <div class="shell">
          <div class="backbar">
            <a class="back" href="./ink-east-v1.html">← Back to Ink &amp; East</a>
            <span class="context">${context}</span>
            ${backbarRight}
          </div>
          <div class="nav-strip">
            <nav class="site-nav" aria-label="Ink & East section navigation">
              <div class="left">${left}</div>
              <div class="center">墨 與 東</div>
              <div class="right-nav">${account}</div>
            </nav>
          </div>
        </div>
      `;
    }
  }

  if (!customElements.get('ink-east-service-nav')) {
    customElements.define('ink-east-service-nav', InkEastServiceNav);
  }
})();
