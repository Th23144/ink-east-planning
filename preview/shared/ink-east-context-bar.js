(() => {
  const esc = value => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

  class InkEastContextBar extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const mode = this.getAttribute('mode') === 'article' ? 'article' : 'compact';
      const backHref = esc(this.getAttribute('back-href') || './ink-east-v1.html');
      const backLabel = esc(this.getAttribute('back-label') || '← Back to Ink & East');
      const center = esc(this.getAttribute('center') || 'INK & EAST');
      const right = esc(this.getAttribute('right') || '');
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
        <style>
          :host {
            all: initial;
            --paper-light: #faf5e9;
            --ink: #1a1611;
            --ink-faint: #8a7f70;
            --seal: #a02d23;
            --mono: "JetBrains Mono",ui-monospace,monospace;
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            font-family: var(--mono);
            font-style: normal;
            font-weight: 400;
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
          .bar { width: 100%; background: var(--ink); color: var(--paper-light); text-transform: uppercase; }
          .back { color: var(--seal); border-bottom: 1px dashed var(--seal); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .center, .right { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

          .compact {
            height: 32px;
            padding: 0 28px;
            display: grid;
            grid-template-columns: minmax(0,1fr) auto;
            align-items: center;
            gap: 16px;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: .1em;
          }
          .compact .back { justify-self: start; max-width: 100%; }
          .compact .center { justify-self: end; text-align: right; }

          .article {
            height: 36px;
            padding: 0 28px;
            display: grid;
            grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
            align-items: center;
            gap: 24px;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: .18em;
          }
          .article .back { justify-self: start; max-width: 100%; }
          .article .center { justify-self: center; color: var(--paper-light); letter-spacing: .3em; text-align: center; }
          .article .right { justify-self: end; color: var(--ink-faint); text-align: right; }

          @media (max-width: 720px) {
            .compact { height: 30px; padding: 0 16px; font-size: 9px; gap: 10px; }
            .article { height: 32px; padding: 0 16px; font-size: 9px; gap: 10px; grid-template-columns: minmax(0,1fr) auto; }
            .article .right { display: none; }
            .article .center { justify-self: end; max-width: 100%; }
          }
        </style>
        <div class="bar ${mode}">
          <a class="back" href="${backHref}">${backLabel}</a>
          <span class="center">${center}</span>
          ${mode === 'article' ? `<span class="right">${right}</span>` : ''}
        </div>
      `;
    }
  }
  if (!customElements.get('ink-east-context-bar')) customElements.define('ink-east-context-bar', InkEastContextBar);
})();
