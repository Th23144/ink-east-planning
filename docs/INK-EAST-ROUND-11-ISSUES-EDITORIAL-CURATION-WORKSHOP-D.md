# Round 11 — Issues / Editorial Curation System（议题 / 编辑策展系统） — Workshop D（工作坊 D）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Issue Composition, Sections, Editorial Framing & Presentation Semantics（议题编排、栏目、编辑语境与展示语义）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Carried decisions:** Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照） and Latest-valid-first（默认最新有效版本） remain current PROVISIONAL PRODUCT DIRECTIONS（暂定产品方向）.

---

## 0. Decision at a glance / 本步结论一览

Workshop D defines how an Issue（议题） becomes a coherent publication experience **without turning layout, section names or visual prominence into content ontology, authority or Recognition（作品认可）**.

Canonical model:

```text
Issue Version / Snapshot（议题版本 / 快照）
        ↓
ordered Curation Placements（有序策展位置）
        ↓
Section / Role / Editorial Framing（栏目 / 角色 / 编辑语境）
        ↓
underlying Works / Passages / Questions / other eligible objects（底层作品 / 段落 / 问题 / 其他对象）
        ↓
reader-facing Issue experience（面向读者的议题阅读体验）
```

Core boundaries:

- Issue composition is versioned editorial structure, not a copy of underlying content;
- section/placement roles are usually Issue-local editorial semantics, not permanent global taxonomy;
- a published Issue has a stable editorial sequence; personalization may supplement discovery but must not silently rewrite the canonical Issue order;
- cover / lead / hero / first placement does not create Work Recognition, authority or factual truth;
- editor introductions, captions, bridges and summaries remain attributable editorial framing rather than source text;
- mixed content classes may coexist while preserving authorship, provenance, authority and interaction differences;
- inaccessible/withdrawn material may be restricted without pretending it was never curated;
- exact visual layout, typography, cover design, module count, responsive behavior and component implementation remain later design/implementation work.

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop D inherits:

- Workshop A R11-A1…A44: Issue as first-class curation container; typed inclusion relations; mixed-content composition; flexible sections;
- Workshop B R11-B1…B59: acquisition, editorial workflow, version-bound decisions, rights/privacy invalidation;
- Workshop C R11-C1…C56: publication snapshots, version lineage, correction/archive semantics, version-aware derived states;
- user-confirmed Option B from Workshop A: Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）;
- user-confirmed Option B from Workshop C: Latest-valid-first（默认最新有效版本）;
- Round 7 Knowledge Graph & Provenance（知识图谱与来源溯源）;
- Round 8 Community & Discussion（社区与讨论）;
- Round 10 Discovery & Recommendation（发现与推荐）;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

No exact page layout, CSS grid, card system, mobile behavior, typography, cover art direction, image-generation workflow, print/PDF/EPUB renderer or design-system implementation is authorized here.

---

# 2. Composition model / 编排模型

## R11-D1 — Canonical Issue composition is version-scoped / 议题正式编排属于具体版本

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The canonical contents, ordering, section structure and material editorial framing of a published Issue must be attributable to the relevant Issue Version / Snapshot（议题版本 / 快照）.

A later amendment may change composition, but it must not silently rewrite what an earlier published snapshot contained.

---

## R11-D2 — Placement is a relation, not a cloned Work / 版位是关系，不是复制作品

**HARD INVARIANT（硬边界）.**

A Curation Placement（策展版位） refers to an underlying object/version and carries Issue-local metadata. It must not create a second independent authored copy merely to display the object inside the Issue.

---

## R11-D3 — Issue composition may mix supported object classes / 议题编排可以混合不同对象类别

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Canonical passages, editorial works, contributor works, selected community works, reader questions/letters, places/topics and future supported objects may participate in one Issue where editorially justified.

Their original content class remains intact.

---

## R11-D4 — Placement role is contextual / 版位角色属于具体策展情境

**HARD PRODUCT BOUNDARY（产品边界）.**

Roles such as lead, opening, bridge, source reading, response, field note, closing or appendix describe what an object is doing **inside a particular Issue**. They do not automatically become the object's global type.

---

## R11-D5 — Issue-local labels must not silently become global taxonomy / 议题内标签不能静默变成全局分类

**HARDENING（架构加固）.**

A section label such as `Origins`, `Field Notes`, `Reader Voices` or another editorial heading may be purely Issue-local. If a concept deserves a durable Topic / Knowledge Entity（主题 / 知识实体） identity, that must be modeled explicitly rather than inferred from a temporary section heading.

---

## R11-D6 — Editorial order may carry meaning / 编辑顺序可能具有叙事含义

**HARD PRODUCT DIRECTION（产品级硬方向）.**

The order of placements may express narrative progression, source-before-interpretation, question-before-response, geographic movement, chronology or another editorial rationale. The architecture must not assume order is cosmetic.

---

## R11-D7 — The same object may be curated into multiple Issues / 同一对象可以进入多个议题

**HARD inherited boundary（继承硬边界）.**

Reuse across Issues creates multiple curation contexts, not multiple authorships or cloned object identities.

---

## R11-D8 — Duplicate placement inside one Issue must be intentional / 同一期内重复版位必须是有意的

**HARDENING（架构加固）.**

The same underlying object/version should not appear twice in one canonical Issue merely because of data duplication or component reuse. Repeated use may be allowed when editorially meaningful and distinguishable, for example an opening excerpt plus a later full reading link.

---

# 3. Sections, sequence & navigation / 栏目、顺序与导航

## R11-D9 — Section structure is configurable editorial policy / 栏目结构属于可配置编辑策略

**ADAPTIVE RULE（弹性规则）.**

Issues may use sections, no sections, or different section sets. The architecture must not require one permanent schema across all Issues or future publication brands.

---

## R11-D10 — The inherited fixed eight-item magazine structure is not an invariant / 旧版固定八篇结构不是平台硬规则

**HARD CLARIFICATION（硬性澄清）.**

Older Ink & East patterns remain useful editorial references, but the long-term platform may publish Issues with different counts, formats and section mixes.

---

## R11-D11 — One core Chinese character per Issue is not an identity rule / 每期一个核心汉字不是身份规则

**HARD CLARIFICATION（硬性澄清）.**

A core character or visual motif may remain an Ink & East brand convention, but it is editorial/presentation metadata rather than the Issue's stable identity or universal requirement.

---

## R11-D12 — Table of Contents is derived from the applicable canonical snapshot / 目录从对应正式快照派生

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A published Table of Contents（目录） must correspond to the Issue version the reader is viewing. It must not become a manually maintained parallel truth that can drift from actual canonical placements.

---

## R11-D13 — Canonical editorial order must remain stable for a published snapshot / 已发布快照的正式编辑顺序保持稳定

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Recommendation or personalization must not silently reorder the canonical Issue contents per user while still presenting the result as the same published editorial sequence.

---

## R11-D14 — Reader navigation preferences do not rewrite canonical order / 读者导航偏好不会改写正式顺序

**HARD BOUNDARY（硬边界）.**

A reader may jump, filter, save, resume, use accessibility navigation or another reading mode. Those interactions may change personal traversal order without changing the Issue's canonical editorial order.

---

## R11-D15 — Material reorder after publication is an amendment concern / 发布后的实质性重排属于修订

**HARD HISTORY SAFEGUARD（历史硬保护）.**

If changing placement order materially alters editorial meaning, the change must pass through the applicable amendment/version semantics rather than being treated as harmless layout churn.

---

## R11-D16 — Section hierarchy depth is not fixed / 栏目层级深度不写死

**ADAPTIVE RULE（弹性规则）.**

The platform may support flat sections or limited nested editorial groupings where justified. No arbitrary permanent depth is locked here, and implementation should avoid unnecessary hierarchy for its own sake.

---

# 4. Editorial framing & attribution / 编辑语境与署名

## R11-D17 — Editor's Note is editorial content, not Issue metadata only / 编者按是编辑内容，不只是元数据

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An Editor's Note（编者按） may be a first-class attributable editorial object or equivalent versioned framing artifact. It must not be treated as invisible system text if it makes substantive claims or interpretation.

---

## R11-D18 — Bridges, captions and section intros remain attributable / 过渡文字、图注与栏目导语需要可归因

**HARDENING（架构加固）.**

Issue-specific narrative framing must remain distinguishable from the included author's text and from canonical source text.

---

## R11-D19 — Editorial framing may interpret but must not impersonate the source / 编辑语境可以解释，但不能冒充原文

**HARD PROVENANCE SAFEGUARD（溯源硬保护）.**

A summary, contextual caption or interpretation authored by Ink & East must not be rendered as though it were a quotation, translation, historical source statement or the underlying author's own wording.

---

## R11-D20 — Editorial selection does not manufacture truth / 编辑选入不会制造事实真理

**HARD INVARIANT（硬边界）.**

Placement in a curated Issue may signal editorial relevance or quality judgment, but it does not itself establish canonical authority, factual truth, Reviewer Trust（评审信任） or Work Recognition（作品认可）.

---

## R11-D21 — Lead / hero / opening position is not Recognition / 头条、主视觉或首篇位置不等于作品认可

**HARD INVARIANT（硬边界）.**

Visual/editorial prominence is an Issue-local presentation decision. It must not automatically become a durable Recognition state or governance signal.

---

## R11-D22 — Authorship roles remain explicit inside Issue presentation / 议题展示中继续保留明确创作角色

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Author, translator, editor, illustrator, photographer, researcher or other materially distinct roles should remain distinguishable where relevant rather than being flattened into one generic contributor label.

---

## R11-D23 — Theme fit does not permanently classify the underlying work / 符合某期主题不等于永久给作品分类

**HARD BOUNDARY（硬边界）.**

A work curated into an Issue about `Water`, `Ritual`, `Mountains` or another theme is not automatically assigned a permanent Topic relation solely from that editorial placement. Durable knowledge relations require their own basis.

---

## R11-D24 — Selection provenance can be retained without overloading reader UI / 选稿溯源可保留，但不要求全部堆给读者

**ADAPTIVE RULE（弹性规则）.**

The system should preserve applicable Selection Origin / Acting Context（选稿来源 / 行动身份上下文） for audit/history while allowing reader-facing presentation to show only the level of detail useful for the product context.

---

# 5. Cover, media & visual prominence semantics / 封面、媒体与视觉重点语义

## R11-D25 — Cover / hero media is Issue-level editorial media / 封面与主视觉属于议题级编辑媒体

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Issue cover imagery, hero art or visual motifs may be Issue-specific assets/relations. They must not require changing the identity or media ownership of underlying included Works.

---

## R11-D26 — Cover/media rights are first-class / 封面与媒体权利必须独立受控

**HARD RIGHTS SAFEGUARD（权利硬保护）.**

A cover, scan, illustration, photograph or derived visual must have applicable rights/provenance treatment. Rights to an included article do not automatically grant rights to unrelated cover media, and vice versa.

---

## R11-D27 — Depiction does not equal endorsement or authority / 被封面展示不等于认可或权威

**HARD BOUNDARY（硬边界）.**

A person, place, institution, artifact or work featured visually on an Issue cover is not automatically endorsed, Recognized or represented as authoritative by that fact alone.

---

## R11-D28 — Visual prominence must not become hidden governance weight / 视觉重点不能变成隐藏治理权重

**HARD SEPARATION SAFEGUARD（系统分离硬保护）.**

Hero position, card size, top placement or cover feature may affect exposure, but those presentation choices must not silently become votes, trust evidence or Recognition evidence.

---

## R11-D29 — Accessibility metadata belongs with the rendered experience / 无障碍元数据属于展示体验的一部分

**HARDENING（架构加固）.**

Where visual/editorial media is presented, the architecture should support appropriate accessibility metadata such as alt text or equivalent descriptive treatment without forcing that descriptive text to become the underlying Work's canonical title/content.

---

## R11-D30 — Issue interface localization is separate from translating included works / 议题界面本地化与翻译收录作品分离

**HARD BOUNDARY（硬边界）.**

Translating navigation labels, section headings or Issue framing does not automatically create or authorize a translation of an included copyrighted/attributed Work. Translation provenance/rights remain separately governed.

---

# 6. Access, supplemental content & derived presentation / 访问、补充内容与派生展示

## R11-D31 — Access differences do not silently change historical membership / 访问权限差异不能静默改变历史收录关系

**HARD HISTORY / ACCESS SAFEGUARD（历史 / 访问硬保护）.**

If a reader cannot access an included object because of rights, privacy, membership or lifecycle state, the system may restrict the visible representation but must not falsely rewrite the canonical Issue history as if the object had never been included.

---

## R11-D32 — Restricted placements may degrade to bounded placeholders / 受限版位可以退化为受控占位

**ADAPTIVE RULE（弹性规则）.**

Where lawful and product-appropriate, an unavailable inclusion may show a title-only, tombstone, access prompt or other bounded representation. The placeholder must not leak protected content or sensitive removal reasons.

---

## R11-D33 — Personalized recommendations are supplemental, not canonical Issue contents / 个性化推荐属于补充层，不是正式目录

**HARD PRODUCT BOUNDARY（产品边界）.**

`Related`, `For You`, `Continue exploring` or similar modules may appear around an Issue, but their contents must remain semantically distinguishable from the canonical Issue placements chosen by editors.

---

## R11-D34 — Sponsored / paid / commerce modules cannot masquerade as canonical editorial contents / 赞助、付费或商业模块不能伪装成正式编辑内容

**HARD inherited safeguard（继承硬保护）.**

If such modules are ever authorized later, their commercial origin and relationship to the canonical Issue must remain distinguishable. Workshop D does not authorize them.

---

## R11-D35 — Issue discussion remains separate from canonical contents / 议题讨论继续与正式内容分离

**HARD inherited boundary（继承硬边界）.**

Discussion threads, Reader Notes（读者札记） or community responses may be linked from an Issue but do not automatically become part of the published canonical Issue composition.

---

## R11-D36 — Previews and summaries remain access-bounded / 预览与摘要继续受访问边界约束

**HARD ACCESS / RIGHTS SAFEGUARD（访问 / 权利硬保护）.**

SEO text, social previews, Issue summaries, cover copy and excerpts must not expose enough restricted content to defeat underlying rights or membership controls.

---

## R11-D37 — Alternate renderings are projections of the same Issue / 不同渲染形式是同一议题的投影

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Web, mobile, future print/PDF/EPUB or accessibility renderings may present the same Issue version differently. Rendering format alone does not create a new Issue identity or new editorial version unless substantive content/composition differs materially.

---

# 7. Change, amendment & derived-state semantics / 变更、修订与派生状态

## R11-D38 — Latest-valid-first controls the canonical Issue page / 主页面遵循默认最新有效版本

**USER-CONFIRMED PROVISIONAL PRODUCT DIRECTION（用户确认的暂定产品方向）.**

The canonical Issue page should normally render the latest valid Issue composition available to the reader while preserving discoverable historical version context as already decided in Workshop C.

---

## R11-D39 — Material composition change requires amendment semantics / 实质性编排变化需要修订语义

**HARD HISTORY SAFEGUARD（历史硬保护）.**

Adding/removing an important work, materially reordering the narrative, changing substantive editorial framing, or changing a prominent media asset in a way that alters interpretation may require a new amendment/version under policy.

---

## R11-D40 — Pure rendering changes need not create editorial versions / 纯渲染变化不必产生编辑版本

**ADAPTIVE RULE（弹性规则）.**

Responsive layout fixes, typography, spacing, component refactors and similar presentation-only changes may remain outside editorial version history when they do not materially alter content, order, meaning, attribution, rights or reader state.

---

## R11-D41 — Placement/history identity must be referenceable where consequential / 重要版位与历史关系需要可定位

**HARDENING（架构加固）.**

Where citations, analytics, discussion context or amendments depend on a specific Issue placement, the system must be able to identify the relevant version-scoped placement/relation rather than relying only on array position such as `item #4`.

---

## R11-D42 — TOC, navigation and rendered composition must be version-aware derived state / 目录、导航和渲染编排必须感知版本

**HARD DERIVED-STATE SAFEGUARD（派生状态硬保护）.**

Caches, navigation anchors, generated Table of Contents, static renderings and previews must be regenerable/invalidatable when the controlling Issue version or access state changes.

---

## R11-D43 — Historical removal preserves permissible curation history / 历史移除保留允许保留的策展历史

**HARD HISTORY SAFEGUARD（历史硬保护）.**

Removing an item from the latest Issue version does not require erasing the fact that it appeared in an older published snapshot, subject to privacy/rights/legal restrictions on what may remain visible.

---

## R11-D44 — Correcting Issue framing must not mutate the underlying Work / 修正议题语境不能直接修改底层作品

**HARD INVARIANT（硬边界）.**

If an Issue caption, editor introduction or summary is inaccurate, the platform may correct the Issue-local framing through the appropriate amendment path. It must not silently alter the underlying author's Work merely to make the Issue framing consistent.

---

# 8. Rule-evolvability classification / 规则可演进分类

Workshop D currently treats:

- Issue identity, underlying-object identity preservation, canonical-vs-supplemental separation, authorship/provenance separation and access/history boundaries as Core Invariants（核心不变量）;
- section names, section availability, issue length, core-character convention, placement-role vocabulary and minor/material thresholds as Policy / Configuration（策略 / 配置）;
- draft composition, placement, publish/amend/remove workflows as Workflow（工作流）;
- future editorial-assistance, candidate suggestions or automated layout assistance as Algorithm（算法） where applicable, without authority to make hidden editorial truth;
- Issue Version, Curation Placement, editorial framing, cover/media relation and derived renderings as distinct Data（数据） concepts where material.

No universal section count, fixed sequence template, visual hierarchy formula, layout system, cover ratio, personalized Issue reordering or commercial placement model is authorized.

---

## 9. Deferred to later Round 11 work / 延后到第十一轮后续步骤

Workshop D intentionally does not freeze:

- exact visual design / layout / art direction;
- exact cover template or responsive presentation;
- editorial calendar and production planning UI;
- analytics / editorial success metrics;
- final archive navigation UX;
- print/PDF/EPUB product scope;
- issue-level membership/paywall entitlements;
- paid/sponsored placement product;
- notification/delivery behavior;
- exact export/citation rendering;
- implementation schema or CMS component model.

No new product-direction fork remains open in Workshop D at this stage.