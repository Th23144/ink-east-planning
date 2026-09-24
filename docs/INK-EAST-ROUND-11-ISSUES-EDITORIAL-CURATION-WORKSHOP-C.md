# Round 11 — Issues / Editorial Curation System（议题 / 编辑策展系统） — Workshop C（工作坊 C）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Publication Lifecycle, Versioning, Archive & Corrections（发布生命周期、版本、归档与勘误）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Carried decision:** Option B（方案 B） — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照） remains the current PROVISIONAL PRODUCT DIRECTION（暂定产品方向）.

---

## 0. Decision at a glance / 本步结论一览

Workshop C defines what happens **after editorial selection becomes publishable** and how an Issue（议题） remains historically trustworthy without pretending a digital publication can never be corrected.

The controlling model is:

```text
Draft Issue（草稿议题）
    ↓
Publication-ready（可发布）
    ↓
Scheduled / Publish Decision（计划发布 / 发布决定）
    ↓
Published Snapshot V1（已发布快照 V1）
    ↓
Correction / Amendment / Rights Change（勘误 / 修订 / 权利变化）
    ↓
Published Snapshot V2 / amended representation（已发布快照 V2 / 修订后的当前表示）
    ↓
Archive / Historical Access（归档 / 历史访问）
```

Core boundaries:

- Issue lifecycle（议题生命周期） != underlying content lifecycle（底层内容生命周期）;
- publish, amend, suspend, withdraw, archive and delete are different actions;
- a later edit to an underlying Work（作品） must not silently rewrite an old Issue snapshot（议题快照）;
- Correction（勘误） != Retraction / Withdrawal（撤回） != Rights/Legal Takedown（权利 / 法律下架）;
- Archive（归档） is not deletion or loss of identity;
- Current URL（当前网址）, historical version（历史版本） and citation target（引用目标） must be able to coexist;
- rights/privacy/legal constraints always override the desire to keep disallowed content publicly visible;
- no fixed version-number format, archive entitlement or correction UI is authorized here.

---

## 1. Inputs & inherited boundaries / 输入与继承边界

Workshop C inherits:

- Workshop A R11-A1…A44;
- the user-confirmed Option B decision: Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）;
- Workshop B R11-B1…B59 and its editorial workflow safeguards;
- Round 7 object/version/provenance boundaries;
- Round 8 discussion-object separation;
- Round 10 recommendation/cache invalidation and provenance requirements;
- project-wide Rule Evolvability & Change Architecture（规则可演进与变更架构）.

Membership / Reading Room（会员 / 阅读室） entitlement rules remain deferred to Round 12. Governance / moderation / legal-correction policy details remain partly deferred to the later Governance round.

---

# 2. Publication lifecycle semantics / 发布生命周期语义

## R11-C1 — Issue lifecycle and content lifecycle are distinct / 议题生命周期与内容生命周期分离

**HARD INVARIANT（硬边界）.**

Publishing, amending, archiving or withdrawing an Issue must not automatically publish, amend, archive or delete every underlying object referenced by that Issue.

---

## R11-C2 — Draft, scheduled, published, amended, suspended, withdrawn and archived are distinct meanings / 草稿、计划发布、已发布、已修订、暂停、撤回与归档含义不同

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

These lifecycle meanings must remain distinguishable where they affect access, history, citation, recommendation or editorial workflow. Exact state vocabulary is evolvable Workflow（工作流） configuration.

---

## R11-C3 — Publishing creates a durable publication event / 发布产生稳定的出版事件

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

A consequential Publish（发布） action creates an attributable publication event with effective time and enough version context to explain what became publicly/currently available.

---

## R11-C4 — Scheduled is not published / 计划发布不等于已经发布

**HARD INVARIANT（硬边界）.**

A scheduled Issue may be prepared, previewed or queued without being publicly published. Search, recommendation, feeds and archive must not treat schedule state as successful publication unless explicitly intended for a preview context.

---

## R11-C5 — Pre-publication cancellation differs from post-publication withdrawal / 发布前取消与发布后撤回分离

**HARD INVARIANT（硬边界）.**

Cancelling a draft/scheduled publication is not historical withdrawal of an already published Issue. The platform must not manufacture a public publication history for something that never actually published.

---

## R11-C6 — Suspension differs from withdrawal and deletion / 暂停不同于撤回和删除

**HARD PRODUCT BOUNDARY（产品边界）.**

Temporary suspension/restriction may remove or limit current availability while preserving the possibility of restoration. Withdrawal indicates a stronger lifecycle decision. Deletion/privacy erasure remains a separate process governed by applicable policy/law.

---

## R11-C7 — Archive is not deletion / 归档不是删除

**HARD INVARIANT（硬边界）.**

Archiving a published Issue changes its active/current editorial placement, not its identity or historical existence.

---

## R11-C8 — Issue status must not become a universal content status / 议题状态不能变成底层内容的全局状态

**HARDENING（架构加固）.**

An object can remain active/searchable/recommendable outside an Issue even if that Issue is archived, suspended or withdrawn, subject to the object's own lifecycle and access rules.

---

# 3. Version lineage & publication snapshots / 版本谱系与出版快照

## R11-C9 — Published versions form an explicit lineage / 已发布版本形成明确谱系

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Materially distinct published Issue states must be able to form an ordered lineage so the system can explain what superseded what without creating unrelated duplicate Issues.

---

## R11-C10 — Same Issue identity may have multiple published versions / 同一议题身份可以拥有多个已发布版本

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Under Option B, an amended Issue generally remains the same Issue identity with a new publication/amendment state unless the editorial act is actually a new Issue/product object.

---

## R11-C11 — Version label format is not architecture truth / 版本编号格式不是架构真相

**DEFERRED CALIBRATION（延后校准）.**

`v1.1`, `Second Edition（第二版）`, `Revised 2028（2028 修订版）` or other labels are presentation/editorial policy. Stable internal lineage must not depend on a human label format.

---

## R11-C12 — Material change must cross a version/amendment boundary / 实质性变化必须跨越版本或修订边界

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

A change that materially changes Issue membership, interpretation, rights-visible content, source/provenance, factual meaning or reader-facing publication state must not be silently written into an old published snapshot as if it had always been there.

---

## R11-C13 — Minor correction policy may be lighter but explicit / 轻微修正可以采用较轻流程，但必须明确

**ADAPTIVE RULE（弹性规则）.**

Typographic, formatting or other non-material corrections may use a lighter change path when policy permits. The boundary between minor and material change is Policy（策略）, not an excuse to hide consequential rewriting.

---

## R11-C14 — Historical snapshot integrity does not require continued public display of disallowed material / 历史快照完整性不要求继续公开不允许展示的内容

**HARD RIGHTS / PRIVACY INVARIANT（权利 / 隐私硬边界）.**

A historical snapshot may preserve metadata/provenance sufficient for interpretation while suppressing/redacting content that can no longer lawfully or appropriately be displayed.

---

## R11-C15 — Default current Issue representation is a product decision / 当前议题网址默认展示哪个版本属于产品选择

**PENDING USER DECISION（等待用户决定）.**

Three coherent models are possible:

### Option A — Original-first（默认原始版本）
The canonical Issue page primarily shows the original publication snapshot, with later corrections/amendments linked separately.

### Option B — Latest-valid-first（默认最新有效版本） — **current recommendation（当前推荐）**
The canonical Issue page shows the latest valid amended representation, while clearly exposing revision/history context and preserving addressable historical snapshots where policy/access allows.

### Option C — Version-selector-first（先选择版本）
The canonical page opens a version chooser/history view before the reader enters a specific edition.

This choice affects default reader experience and citation ergonomics, not the existence of preserved historical lineage.

---

## R11-C16 — Historical versions may be separately addressable where appropriate / 历史版本在适当情况下应可单独定位

**HARDENING（架构加固）.**

Citations, archive tools or editorial history should be able to refer to a particular published Issue version/snapshot where rights, privacy and product policy permit.

---

## R11-C17 — Citation target can include Issue identity plus version context / 引用目标可以包含议题身份与版本上下文

**HARD PRODUCT DIRECTION（产品级硬方向）.**

The platform should support the distinction between “this Issue generally” and “this particular published state/version” without requiring every casual reader-facing link to expose technical identifiers.

---

## R11-C18 — Human Issue numbering remains separate from version lineage / 人类可读刊号与版本谱系继续分离

**HARDENING（架构加固）.**

`Issue 003` and `Issue 003 revised` must not rely on a single overloaded numbering field as both identity and amendment history.

---

# 4. Included-object revision semantics / 被收录对象的修订语义

## R11-C19 — Historical inclusion binds to the editorially relevant object revision / 历史收录绑定编辑上实际采用的对象版本

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

Where an included object is mutable, the Issue must retain enough revision/snapshot context to explain what version was actually selected at publication/amendment time.

---

## R11-C20 — Later edits to an underlying work do not silently rewrite the historical Issue / 底层作品后续编辑不能静默改写历史议题

**HARD INVARIANT（硬边界）.**

A mutable Work（作品） can evolve after Issue publication without automatically changing what the historical Issue snapshot represented.

---

## R11-C21 — An Issue may intentionally adopt a newer work revision through amendment / 议题可以通过显式修订采用作品的新版本

**ADAPTIVE RULE（弹性规则）.**

When editorial policy justifies updating an included object's revision, the Issue may move to the newer revision through a recorded amendment rather than silent pointer drift.

---

## R11-C22 — Author correction of a work does not automatically constitute Issue correction / 作者修订原作不自动等于议题修订

**HARD BOUNDARY（硬边界）.**

Underlying-work revision and Issue amendment are related but distinct workflows. The Issue may later adopt the correction, but the systems must not collapse them.

---

## R11-C23 — Underlying withdrawal/restriction affects visible inclusion without erasing curation history / 底层作品撤回或受限可以影响展示，但不能抹掉策展历史

**HARD RIGHTS / HISTORY SAFEGUARD（权利 / 历史硬保护）.**

If the underlying object becomes unavailable, the Issue must stop bypassing that restriction while retaining permissible historical metadata/tombstone context.

---

## R11-C24 — Issue framing may not become an uncontrolled copy of mutable source content / 议题编辑语境不能变成底层内容的失控复制

**HARDENING（架构加固）.**

Issue-specific excerpts, captions and summaries must remain bounded so later source corrections/rights changes can be reconciled without maintaining a hidden duplicate publication.

---

# 5. Correction taxonomy / 勘误分类

## R11-C25 — Corrections require typed meaning / 勘误需要有类型语义

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The platform should be able to distinguish materially different correction classes such as:

- typographic / formatting correction（排版 / 文字错误修正）;
- metadata correction（元数据修正）;
- factual/editorial correction（事实 / 编辑修正）;
- source/provenance correction（来源 / 溯源修正）;
- rights/legal/privacy change（权利 / 法律 / 隐私变化）;
- structural curation amendment（策展结构修订）;
- author-requested correction/withdrawal context（作者请求修正 / 撤回情境）;
- other future governed classes.

The list is extensible, not a closed universal enum.

---

## R11-C26 — Consequential correction retains actor, reason and effective-time provenance / 重要勘误保留行动者、原因与生效时间溯源

**HARDENING（架构加固）.**

A consequential correction/amendment must be attributable enough to explain who/what process authorized it, why it occurred and when the new state became effective.

---

## R11-C27 — User-facing correction transparency is proportionate / 面向用户的勘误透明度按重要程度处理

**ADAPTIVE RULE（弹性规则）.**

Material changes should be visibly explainable; trivial punctuation or layout fixes do not require the same reader-facing ceremony as a factual correction, retraction or rights-driven substitution.

---

## R11-C28 — Not every correction needs a permanent warning banner / 并非每个修正都需要永久警告条

**HARDENING（架构加固）.**

Transparency must not be implemented as indiscriminate alarm UI that makes ordinary maintenance look like misconduct.

---

## R11-C29 — Material correction needs discoverable history / 实质性勘误需要可发现的历史

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Where a correction changes reader interpretation, factual meaning, cited source, rights-visible content or Issue composition materially, the revision/amendment history must be discoverable at an appropriate level.

---

## R11-C30 — Correction does not itself imply wrongdoing / 勘误本身不等于存在不当行为

**HARD INVARIANT（硬边界）.**

Correction metadata is not Account Trust（账户信任）, author misconduct or Work Recognition（作品认可） punishment by default.

---

## R11-C31 — Rights/legal/privacy takedown is not automatically editorial retraction / 权利、法律或隐私下架不自动等于编辑撤回

**HARD INVARIANT（硬边界）.**

Removing visible material due to rights, privacy or legal obligations has different semantics from stating that the editorial work itself is substantively invalid.

---

## R11-C32 — Retraction/withdrawal is stronger than correction / 撤回比普通勘误更强

**HARD PRODUCT BOUNDARY（产品边界）.**

A withdrawn/retracted Issue or component should retain an explicit lifecycle meaning rather than masquerading as an ordinary edit.

---

## R11-C33 — Retraction/withdrawal is not equivalent to deletion / 撤回不等于删除

**HARD HISTORY BOUNDARY（历史硬边界）.**

Where law/privacy does not require erasure, the platform may preserve a tombstone/history record explaining that a published state existed and was later withdrawn.

---

## R11-C34 — Public correction reason may be less detailed than internal provenance / 公开勘误理由可以少于内部溯源细节

**HARD PRIVACY / SAFETY SAFEGUARD（隐私 / 安全硬保护）.**

Legal, privacy, abuse or third-party-sensitive details need not be publicly exposed merely because an internal audit/history record exists.

---

# 6. Archive & back-issue semantics / 归档与往期语义

## R11-C35 — Archived Issues remain first-class publication objects / 归档议题仍是一等出版对象

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Back Issues（往期） must remain addressable/discoverable as publication objects rather than being flattened into an undifferentiated list of articles.

---

## R11-C36 — Archive state does not decide membership entitlement / 归档状态不决定会员权益

**HARD SCOPE BOUNDARY（范围边界）.**

Whether free/paid users may access full back Issues is a Membership / Reading Room（会员 / 阅读室） decision for Round 12. Archive status must not hard-code that answer.

---

## R11-C37 — Archive discoverability and content access are distinct / 归档可发现性与内容访问权限分离

**HARD INVARIANT（硬边界）.**

An Issue may be discoverable in archive/search while some included objects remain access-restricted; conversely, an object may be accessible outside the Issue even if the Issue itself is no longer prominently distributed.

---

## R11-C38 — Old Issues may remain recommendation/discovery candidates with context / 往期议题可以继续被推荐，但要保留语境

**ADAPTIVE RULE（弹性规则）.**

Evergreen historical Issues may retain discovery value. Recommendation must not assume “older Issue = obsolete,” while time-sensitive information must preserve applicable freshness/staleness context under Round 10.

---

## R11-C39 — Publication chronology is not database identity / 出版时间顺序不是数据库身份

**HARDENING（架构加固）.**

Archive sorting by publication date/issue number is a reader/editorial view; stable identity and version lineage must survive chronology changes or corrected metadata.

---

## R11-C40 — Archived does not mean semantically irrelevant / 已归档不等于语义失效

**HARDENING（架构加固）.**

Archive state must not be reused as a universal “low relevance” signal for Search（搜索）, Knowledge Graph（知识图谱） or related-reading contexts.

---

# 7. Discussion, correction events & downstream systems / 讨论、勘误事件与下游系统

## R11-C41 — Discussion identity survives Issue amendment / 议题修订后讨论身份继续存在

**HARD inherited boundary（继承硬边界）.**

Issue Discussion（本期讨论） remains a separate social object. Amending an Issue does not require deleting/recreating its discussion history.

---

## R11-C42 — Historical comments should not be silently recontextualized / 历史评论不能被静默重新解释

**HARDENING（架构加固）.**

Where a discussion/comment materially depends on a prior Issue version, the architecture should permit version-context preservation instead of making the comment appear to have responded to text/content that did not exist then.

---

## R11-C43 — Editorial correction does not automatically trigger moderation punishment / 编辑勘误不自动触发审核惩罚

**HARD INVARIANT（硬边界）.**

Moderation, abuse, author misconduct, Work Recognition（作品认可） and correction workflows may exchange relevant events but remain distinct decision systems.

---

## R11-C44 — Correction/amendment can emit a durable downstream event without defining notification UX / 勘误或修订可以产生稳定下游事件，但不在本轮定义通知体验

**HARDENING（架构加固）.**

Recommendation, Search, caches, analytics and future Notifications / Delivery（通知 / 投递） may need to know that a material amendment occurred. Round 11 should preserve the event semantics without prematurely designing the notification product.

---

# 8. Evolvability, cache & implementation boundaries / 可演进性、缓存与实现边界

## R11-C45 — Version/correction policy is evolvable / 版本与勘误策略可演进

**HARD ARCHITECTURAL REQUIREMENT（硬性架构要求）.**

What counts as material, who may authorize an amendment, when a public notice is required and how long histories are retained must be governed as Policy / Workflow（策略 / 工作流） where appropriate rather than scattered hard-coded UI conditions.

---

## R11-C46 — Consequential amendments require Decision Provenance / 重要修订需要决策溯源

**HARD INVARIANT（硬边界）.**

The system must retain enough Decision Provenance（决策溯源） to explain consequential publication-state changes without requiring every low-level editing action to become permanent audit history.

---

## R11-C47 — Derived representations must invalidate/recompute when material publication state changes / 重要发布状态变化后派生表示必须可失效与重算

**HARD IMPLEMENTATION-SEMANTIC REQUIREMENT（实现语义硬要求）.**

Material amendment, rights restriction, withdrawal or version change must be able to invalidate/recompute relevant Search snippets（搜索摘要）, recommendation candidates, archive cards, feeds, cached previews and other derived representations.

---

## R11-C48 — Architecture does not mandate a particular CMS, immutable ledger or storage scheme / 架构不强制指定内容管理系统、不可变账本或存储方案

**SCOPE GUARD（范围护栏）.**

Version/history semantics may be implemented with ordinary database/versioning patterns. Round 11 does not mandate blockchain, append-only event sourcing, a specific CMS（内容管理系统） or a specific diff engine.

---

## 9. Current product picture / 当前产品形态

If Workshop C is adopted, an Issue（议题） behaves like a durable digital publication object with amendable current representation and preserved publication history:

```text
Stable Issue Identity（稳定议题身份）
        ├── Publication Snapshot V1（出版快照 V1）
        │       └── Curation relations pinned to relevant revisions
        ├── Amendment / Correction（修订 / 勘误）
        ├── Publication Snapshot V2（出版快照 V2）
        │       └── latest valid representation
        └── Archive / historical citation routes（归档 / 历史引用路径）
```

It is neither a paper magazine that can never change nor an evergreen webpage that silently rewrites its own past.

---

## 10. One open product choice / 一个待确认产品选择

R11-C15 remains open:

- **A — Original-first（默认原始版本）**;
- **B — Latest-valid-first（默认最新有效版本） — recommended（推荐）**;
- **C — Version-selector-first（先选择版本）**.

The recommendation is **B（方案 B）**, because the ordinary reader should receive the best currently valid publication while historical snapshots remain explicitly recoverable/citable when allowed. This best matches the already chosen Option B publication model without making history invisible.

---

## 11. Deferred / 延后项

Workshop C does not decide:

- exact version numbering / edition labels;
- exact correction banner / diff UI;
- correction-notification delivery rules;
- legal record-retention periods;
- archive membership/paywall entitlement;
- final archive visual design;
- DOI / external scholarly identifier program;
- CMS / storage / event-infrastructure implementation.
