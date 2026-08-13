(() => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        --paper: #f4ede0;
        --paper-light: #faf5e9;
        --ink: #1a1611;
        --ink-soft: #4a4036;
        --ink-faint: #8a7f70;
        --seal: #a02d23;
        --rule: rgba(26, 22, 17, 0.28);
        --serif-en: "EB Garamond", "Noto Serif SC", Georgia, serif;
        --serif-cn: "Noto Serif SC", "EB Garamond", serif;
        --mono: "JetBrains Mono", ui-monospace, monospace;
        display: block;
        background: var(--paper);
        color: var(--ink);
      }

      * { box-sizing: border-box; }
      a { color: inherit; text-decoration: none; }

      footer {
        background: var(--paper);
        color: var(--ink);
        padding: 90px 40px 28px;
        margin: 0;
        text-align: left;
      }

      .foot-mark {
        text-align: center;
        padding-bottom: 48px;
        border-bottom: 1px solid var(--ink);
        margin-bottom: 56px;
      }

      .foot-mark .ampers {
        font-family: var(--serif-en);
        font-size: clamp(80px, 12vw, 200px);
        font-weight: 400;
        line-height: 0.85;
        letter-spacing: -0.01em;
      }
      .foot-mark .ampers em { font-style: italic; color: var(--seal); }

      .foot-mark .cn {
        display: block;
        font-family: var(--serif-cn);
        font-size: 18px;
        letter-spacing: 0.5em;
        color: var(--ink-soft);
        margin-top: 18px;
      }

      .foot-mark .sub {
        display: block;
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin-top: 16px;
      }

      .foot-cols {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        gap: 56px;
        padding-bottom: 40px;
        border-bottom: 1px solid var(--rule);
      }

      h5 {
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--seal);
        margin: 0 0 22px;
        font-weight: 500;
      }
      h5 .cn {
        font-family: var(--serif-cn);
        color: var(--ink-faint);
        margin-left: 10px;
        letter-spacing: 0.3em;
      }

      p.mission {
        font-family: var(--serif-en);
        font-style: italic;
        font-size: 17px;
        line-height: 1.7;
        color: var(--ink-soft);
        max-width: 380px;
        margin: 0 0 22px;
      }

      .also-by {
        font-family: var(--serif-en);
        font-size: 13px;
        color: var(--ink-faint);
        line-height: 1.7;
        margin: 0;
      }
      .also-by a {
        font-style: italic;
        color: var(--ink);
        border-bottom: 1px solid var(--rule);
        padding-bottom: 1px;
        transition: color 0.2s, border-color 0.2s;
      }
      .also-by a:hover { color: var(--seal); border-color: var(--seal); }

      ul { list-style: none; margin: 0; padding: 0; }
      li { margin-bottom: 11px; }
      li a {
        font-family: var(--serif-en);
        font-size: 15px;
        color: var(--ink-soft);
        transition: color 0.2s;
      }
      li a:hover { color: var(--seal); }

      .colophon-final {
        padding-top: 24px;
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--ink-faint);
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
      }

      @media (max-width: 1100px) {
        .foot-cols { grid-template-columns: 1fr 1fr; gap: 40px; }
      }

      @media (max-width: 720px) {
        footer { padding: 60px 20px 20px; }
        .foot-mark .ampers { font-size: 56px; }
        .foot-cols { grid-template-columns: 1fr; gap: 36px; }
        .colophon-final { flex-direction: column; gap: 6px; text-align: center; }
      }
    </style>

    <footer aria-label="Ink & East colophon">
      <div class="foot-mark">
        <div class="ampers">Ink <em>&amp;</em> East</div>
        <span class="cn">墨 與 東</span>
        <span class="sub">An independent digital journal · Published when ready · Est. 2026</span>
      </div>

      <div class="foot-cols">
        <div>
          <h5>The Journal <span class="cn">關 於</span></h5>
          <p class="mission">Ink &amp; East publishes a single issue when a single issue is ready. Each one answers, in plain English, a modern question — through Chinese classical thought, original stories, and reader letters.</p>
          <p class="also-by">Also kept by the editors —<br>a small shop of objects, <a href="./spatial-flow-v1.html">Spatial Flow →</a></p>
        </div>

        <nav aria-label="Read">
          <h5>Read <span class="cn">讀</span></h5>
          <ul>
            <li><a href="./ink-east-issue-001-v1.html">This Issue · 001</a></li>
            <li><a href="./ink-east-articles-archive-v1.html">Public Archive</a></li>
            <li><a href="./ink-east-reading-room-v1.html">Reading Room</a></li>
            <li><a href="#">Field Notes</a></li>
            <li><a href="#">Editor's Letters</a></li>
            <li><a href="./ink-east-membership-v1.html">Become a member</a></li>
          </ul>
        </nav>

        <nav aria-label="Speak">
          <h5>Speak <span class="cn">問</span></h5>
          <ul>
            <li><a href="./ink-east-letters-form-v1.html">Ask the Ancient Text</a></li>
            <li><a href="#">Suggest an Issue Theme</a></li>
            <li><a href="#">Vote · Patrons only</a></li>
            <li><a href="./ink-east-reader-notes-component-v1.html">Reader Notes</a></li>
            <li><a href="./ink-east-community-v1.html">Community</a></li>
          </ul>
        </nav>

        <nav aria-label="Studio">
          <h5>Studio <span class="cn">寫</span></h5>
          <ul>
            <li><a href="./ink-east-custom-reading-v1.html">Custom Reading</a></li>
            <li><a href="./ink-east-custom-ebook-v1.html">Custom Ebook Studio</a></li>
            <li><a href="./ink-east-custom-ebook-v1.html#process">Process &amp; Pricing</a></li>
            <li><a href="#">Past Manuscripts</a></li>
            <li><a href="./ink-east-custom-ebook-v1.html#submit-brief">Submit a brief</a></li>
            <li><a href="#">Editorial standards</a></li>
          </ul>
        </nav>
      </div>

      <div class="colophon-final">
        <span>© 2026 Ink &amp; East · Published quietly</span>
        <span>Set in EB Garamond, Inter &amp; Noto Serif SC</span>
        <span>ISSN — 2026.001</span>
      </div>
    </footer>
  `;

  class InkEastFooter extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.appendChild(template.content.cloneNode(true));
    }
  }

  if (!customElements.get('ink-east-footer')) {
    customElements.define('ink-east-footer', InkEastFooter);
  }
})();
