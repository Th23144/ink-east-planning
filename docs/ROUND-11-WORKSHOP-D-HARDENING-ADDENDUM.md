# Round 11 Workshop D — Hardening Addendum（第十一轮工作坊 D 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-D.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop D Adversarial Audit（工作坊 D 对抗性审计）.

---

## R11-D45 — Consequential placements need stable relation identity / 重要版位关系需要稳定身份

**NEW SAFEGUARD（新增保护） / HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

A consequential Curation Placement（策展版位） or Issue ↔ Object relation must not be identifiable only by mutable array position such as `item 4`.

Where history, deep links, citation context, discussion, analytics or amendments depend on a placement, the architecture must permit a durable relation/placement identity within the relevant Issue/version lineage.

Changing order does not automatically create a new underlying Work identity, and reusing a numerical position does not mean it is the same placement.

---

## R11-D46 — Canonical Issue content and supplemental/personalized modules must be structurally distinguishable / 正式议题内容与补充、个性化模块必须结构上可区分

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Recommendation（推荐）, personalization（个性化）, experiments（实验）, related-reading modules（相关阅读模块） or other supplemental surfaces may coexist around an Issue, but the system must be able to tell them apart from canonical editor-selected placements.

Therefore:

- an A/B Test（A/B 测试） must not silently change the published canonical editorial order while claiming the same snapshot;
- supplemental click performance must not automatically rewrite canonical composition;
- canonical Table of Contents（目录） must not accidentally absorb personalized modules;
- reader-facing presentation should avoid making supplemental content indistinguishable from official Issue inclusion where that distinction matters.

Exact visual treatment remains later design work.

---

## R11-D47 — Access filtering must not retarget numbering, links or historical context / 访问过滤不能让编号、链接或历史上下文改指向别的对象

**HARD HISTORY / ACCESS SAFEGUARD（历史 / 访问硬保护）.**

If an included placement is unavailable to a particular reader, the product may hide protected content or render a bounded placeholder, but it must not cause existing references such as:

- `the fourth piece in Issue 003`;
- a placement deep link;
- a Reader Note（读者札记）;
- a Discussion（讨论） reference;
- an archival/citation reference;

to silently resolve to a different underlying object merely because the inaccessible placement was omitted from the current rendering.

Presentation may compress space; semantic identity must remain stable.

---

## R11-D48 — Issue media and generated representations must participate in invalidation / 议题媒体与生成表示必须参与失效传播

**HARD DERIVED-STATE / RIGHTS SAFEGUARD（派生状态 / 权利硬保护）.**

A material rights, privacy, legal, lifecycle or version change affecting Issue media or composition must be capable of invalidating/regenerating applicable representations, including:

- cover / hero media derivatives（封面 / 主视觉衍生物）;
- CDN/cache/static render（内容分发网络 / 缓存 / 静态渲染）;
- social/share cards（社交 / 分享卡）;
- search previews（搜索预览）;
- archive thumbnails/previews（归档缩略图 / 预览）;
- exports or pre-generated renderings（导出 / 预生成渲染）.

A removed or expired asset must not remain effectively public only because a stale derivative escaped invalidation.

---

## R11-D49 — Material renderings retain Issue-version provenance / 重要渲染结果保留议题版本溯源

**HARDENING（架构加固）.**

Where an exported or generated representation can materially differ across Issue versions, it should remain attributable to the Issue Version / Snapshot（议题版本 / 快照） from which it was produced.

This may apply to future PDF/EPUB/print exports, static archives, social previews or other durable representations.

The rule does not require every transient browser render to be stored permanently.

---

## R11-D50 — Machine-generated editorial framing is derived content, not source truth / 机器生成编辑语境属于派生内容，不是来源真相

**HARD PROVENANCE / AI SAFEGUARD（溯源 / AI 硬保护）.**

If future editorial tooling uses AI or other algorithms to propose or generate:

- summaries;
- section labels;
- captions;
- translations of interface/framing text;
- ordering suggestions;
- issue introductions;
- related-entity suggestions;

those outputs must remain distinguishable from source text, original authorship, canonical translations, provenance facts and confirmed Knowledge Graph（知识图谱） claims unless a separate review/publishing process explicitly adopts them.

A generated summary must also be capable of reevaluation when the underlying source/version materially changes.

No specific AI system is authorized here.

---

## R11-D51 — Commercial and supplemental placement provenance must remain separate from editorial inclusion / 商业与补充版位溯源必须与正式编辑收录分离

**HARD SEMANTIC FIREWALL（语义防火墙）.**

If a future round authorizes sponsored, partner-funded, commerce-linked or other non-canonical modules around an Issue, the architecture must preserve their placement origin separately from ordinary Issue Inclusion（议题收录）.

Such placement must not, merely by appearing inside the Issue experience, create:

- Editorial Selection（编辑选择） history;
- Work Recognition（作品认可）;
- authority/provenance status;
- Contributor Qualification（贡献者资格）;
- recommendation/trust evidence as though it were organic editorial choice.

This safeguard still does **not** authorize commercial Issue placement.

---

## R11-D52 — Publishing composition changes requires current-state preconditions / 发布编排变更需要校验当前状态

**HARD WORKFLOW / CONCURRENCY SAFEGUARD（工作流 / 并发硬保护）.**

A composition publication or amendment must not blindly publish a stale editorial draft when relevant state changed after the draft was prepared.

Applicable preconditions may include checking for:

- newer Issue revision/amendment;
- underlying Work revision replacement;
- author withdrawal;
- rights/privacy/legal hold;
- revoked media license;
- concurrent editorial change;
- another state that invalidates the prepared composition.

Exact locking/version-control technology remains implementation work. The architectural requirement is that stale state cannot silently win merely because it was saved last.

---

## Effect on Workshop D / 对工作坊 D 的影响

- R11-D1…R11-D44 remain valid as proposed.
- R11-D45…R11-D52 are controlling hardening rules for future Round 11 consolidation.
- Workshop D is **PASS AFTER HARDENING（加固后通过）** with **zero unresolved material blockers（0 个未解决重大阻塞）**.
- No new user product decision is required at this step.
- The canonical Issue remains a stable editorial publication sequence; personalization/recommendation may supplement but cannot silently rewrite that canonical sequence.
- No exact layout, visual design, AI tooling, paid placement model, export product or implementation stack is authorized.