# Round 11 — Issues / Editorial Curation System（议题 / 编辑策展系统） — Workshop A（工作坊 A）

> **Status:** PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）  
> **Scope:** Issue Object, Curation Container & Inclusion Semantics（议题对象、策展容器与收录语义）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Open product decision:** Published Issue（已发布议题）的后续可变性模型仍待用户确认；本文件给出推荐方向但不擅自锁死。

---

## 0. Decision at a glance / 本步结论一览

Round 11 的第一步不是重新发明“电子杂志”，而是把旧 Ink & East（墨与东方）期刊逻辑放回已经扩展后的 Project 3（项目三）内容 / 知识 / 社区 / 推荐架构中。

当前继承的核心事实是：

> **Issue（议题 / 期刊期次）是 Editorial Curation Container（编辑策展容器），不是整个内容数据库，也不是一种会吞掉原作品身份的超级文章。**

因此：

```text
Platform Content / Knowledge Graph（平台内容 / 知识图谱）
        ↓
existing canonical / editorial / contributor / community objects
        ↓
Issue Curation Relation（议题策展关系）
        ↓
Issue-specific framing / order / section / editorial context
        ↓
Issue reading experience（议题阅读体验）
```

Issue（议题）可以把不同类型的已有对象组织成一个具有主题、顺序、编辑语境和出版感的策展单元，但：

- 不复制或改写原对象身份；
- 不把 Editorial Selection（编辑选择）偷换成 Work Recognition（作品认可）；
- 不把 Issue Inclusion（议题收录）偷换成作者身份升级；
- 不要求平台所有内容都必须属于某一期 Issue（议题）；
- 不把旧版“固定 8 篇 / 每期固定结构 / 固定核心汉字”误写成永久平台本体。

---

## 1. Inherited source truth / 继承来源事实

Workshop A inherits the following already-recorded product truth:

1. `INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md` explicitly states that Issues（议题） remain valuable but are an **editorial publishing / curation layer inside a larger content + knowledge system**, not the entire content database.
2. The older `INK-EAST-BRIEF.md` defines the original Ink & East issue experience as theme-led, publication-like, with cover / contents / editor's note / issue identity. These remain useful brand/product inputs, not automatically permanent ontology.
3. Earlier Product Architecture decisions define `Issue / Editorial Curation（议题 / 编辑策展）` as a curated package that references/includes works from other lanes without changing authorship/provenance.
4. Contributor architecture allows Issue submissions / editorial commissioning, but Contributor status does not guarantee acceptance.
5. Cross-round audit already requires `Editorial Selection / Featured / Issue Curation（编辑选择 / 精选 / 议题策展）` to remain separate from `Work Recognition（作品认可）`.
6. Round 7 preserves object identity, edition/version/provenance and source distinctions.
7. Round 8 preserves separate Community / Discussion（社区 / 讨论） objects and companion discussion semantics.
8. Round 10 preserves Editorial（编辑策展） as an attributable recommendation source rather than inferred user preference.

Where the old brief conflicts with later sealed architecture, the later sealed architecture controls.

---

# 2. Issue object identity / 议题对象身份

## R11-A1 — Issue is a first-class curation object / 议题是一等策展对象

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Issue（议题） must have its own stable platform identity, lifecycle and editorial metadata. It is not merely a filtered search page or a tag query.

---

## R11-A2 — Issue is not a content superclass / 议题不是内容超级类型

**HARD INVARIANT（硬边界）.**

A Work（作品）, canonical passage（典籍段落）, Editorial Publication（编辑出版物）, Contributor Publication（贡献者出版物）, Community Publication（社区出版物） or selected reader submission does not become an `IssueContent` object merely because it is included in an Issue.

Issue inclusion is a relation, not destructive reclassification.

---

## R11-A3 — Content identity survives Issue inclusion / 内容身份在议题收录后继续存在

**HARD INVARIANT（硬边界）.**

The underlying object's stable identity, author, provenance, content class, Recognition（作品认可） state, rights state and lifecycle remain independently addressable after Issue inclusion.

---

## R11-A4 — Issue identity survives title, URL and theme-label changes / 议题身份不依赖标题、网址或主题文字

**HARDENING（架构加固）.**

Issue number, title, theme phrase, core character / visual motif and public URL may change or be corrected without creating a new Issue identity by default.

---

## R11-A5 — Human publication numbering is separate from stable identity / 人类可读刊号与稳定身份分离

**HARDENING（架构加固）.**

`Issue 001`, Volume / Issue notation, seasonal naming or future editorial numbering are presentation/editorial sequence fields, not the durable database identity.

Renumbering policy remains controlled and auditable where material.

---

# 3. Curation relation / 策展关系

## R11-A6 — Issue inclusion is a first-class typed relation / 议题收录是一等有类型关系

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

The system should be able to represent an Issue ↔ Object relationship with issue-specific metadata rather than only storing a generic array of article IDs.

Potential relation metadata includes section/role, order, editorial framing, inclusion state, issue-specific label/excerpt and provenance of the selection decision.

Exact schema is implementation work.

---

## R11-A7 — Curation order belongs to the Issue context / 策展顺序属于议题情境

**HARD INVARIANT（硬边界）.**

An object's position inside one Issue does not become the object's global rank or canonical order elsewhere.

---

## R11-A8 — One object may appear in more than one Issue / 同一对象可以被多个议题收录

**HARD PRODUCT DIRECTION（产品级硬方向）.**

Where editorially justified, the same underlying object may be curated into multiple Issues without cloning its identity.

This is a many-to-many curation relation unless later editorial policy restricts a specific subtype.

---

## R11-A9 — Multiple inclusion contexts do not create multiple authorships / 多次收录不能制造多个作者身份

**HARD INVARIANT（硬边界）.**

Issue-specific framing, cover text or section labels must not overwrite or fabricate original authorship/provenance.

---

## R11-A10 — Issue-specific editorial framing is allowed / 允许议题专属编辑语境

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An Issue may add introductions, section headings, editorial notes, bridges, contextual captions or reading-order explanations around included objects.

Those framing objects remain attributable editorial material and do not rewrite the included work itself.

---

## R11-A11 — Issue-specific excerpts and display titles cannot falsify source identity / 议题摘要与展示标题不能歪曲原对象身份

**HARD SAFEGUARD（硬保护）.**

A curated display title/excerpt may be adapted for the Issue experience, but material differences from the underlying object's title/identity must remain semantically honest and must not make a quotation, translation or community work appear to be a different authored work.

---

# 4. Multi-class composition / 多内容类型策展

## R11-A12 — Issue may curate across content lanes / 议题可以跨内容通道策展

**HARD PRODUCT DIRECTION（产品级硬方向）.**

An Issue may include or reference, where editorially appropriate:

- Canonical / Classical source material（典籍 / 原典材料）;
- Editorial / Teaching publications（编辑 / 教学出版物）;
- Contributor works（贡献者作品）;
- selected Community works（精选社区作品）;
- reader questions / letters（读者问题 / 来信）;
- Place / Topic / Knowledge Entity-linked material（地点 / 主题 / 知识实体关联材料）;
- other future supported objects.

This list is illustrative, not a permanent closed enum.

---

## R11-A13 — Mixed curation must preserve object class / 混合策展不能抹掉对象类别

**HARD INVARIANT（硬边界）.**

A canonical passage, editorial essay and community publication may appear in the same Issue while remaining visibly and structurally distinguishable in authority, provenance and interaction semantics.

---

## R11-A14 — Issue is not the only editorial collection form / 议题不是唯一策展形式

**HARDENING（架构加固）.**

Future Collections（合集）, reading paths, exhibitions, thematic dossiers or other curation products may exist without being forced into Issue identity.

Issue is one high-value publication packaging mechanism, not the universal curation ontology.

---

## R11-A15 — Not all durable content must belong to an Issue / 不是所有长期内容都必须归入某一期议题

**HARD INVARIANT（硬边界）.**

Canonical texts, evergreen guides, contributor works, community works and other platform objects may be complete and discoverable outside any Issue.

---

# 5. Theme, sections & editorial structure / 主题、栏目与编辑结构

## R11-A16 — Theme is editorial meaning, not ontology identity / 主题是编辑语义，不是本体身份

**HARD PRODUCT BOUNDARY（产品边界）.**

An Issue theme may guide selection and narrative coherence but must not replace shared Topic / Place / Knowledge Entity（主题 / 地点 / 知识实体） objects.

---

## R11-A17 — Theme may relate to shared knowledge objects / 议题主题可以关联共享知识对象

**HARDENING（架构加固）.**

Where useful, an Issue may explicitly relate to Topics, Places, Works, Persons, Concepts or other Knowledge Entities instead of encoding all meaning only in free text.

---

## R11-A18 — Section structure is editorial configuration / 栏目结构属于编辑配置

**ADAPTIVE RULE（弹性规则）.**

Editor's Note（编者按）, Classical Reading（原典阅读）, Original Story（原创故事）, Modern Essay（现代随笔）, Reader Question（读者问题）, Long Read（长文）, Field Note（田野札记） and Archive Note（档案札记） remain useful inherited editorial patterns, but Round 11 does not freeze an eight-slot permanent schema.

---

## R11-A19 — Empty sections need not exist / 空栏目不应成为永久占位

**ADAPTIVE RULE（弹性规则）.**

An Issue should be able to omit, add or reorder editorial sections where the theme and actual material require it.

---

## R11-A20 — Core character / cover motif is presentation/editorial metadata / 核心汉字与封面母题属于展示与编辑元数据

**ADAPTIVE RULE（弹性规则）.**

The old Ink & East convention of one core Chinese character per Issue remains a valuable brand direction, but it is not the stable identity of the Issue object and must not constrain future umbrella-brand curation.

---

## R11-A21 — Publication cadence is not a hard platform invariant / 发刊周期不是平台硬边界

**ADAPTIVE RULE（弹性规则）.**

The inherited "published when ready / no fixed schedule" posture may remain an Ink & East editorial policy, but the architecture must not prevent future publications or brands from using different cadences.

---

# 6. Editorial selection vs authority / 编辑选择与权威分离

## R11-A22 — Issue inclusion is not Work Recognition / 议题收录不等于作品认可

**HARD INVARIANT（硬边界）.**

Editorial Selection / Issue Inclusion（编辑选择 / 议题收录） and Work Recognition（作品认可） are distinct states and decision systems.

---

## R11-A23 — Work Recognition may inform selection without guaranteeing it / 作品认可可以影响编辑选择，但不能保证入选

**HARD PRODUCT BOUNDARY（产品边界）.**

Recognized works may be strong curation candidates, but editorial narrative, theme fit, duplication, rights/access, timing or format may justify not including them.

---

## R11-A24 — Unrecognized works may still be editorially selected / 未获作品认可的内容仍可被编辑收录

**HARD PRODUCT BOUNDARY（产品边界）.**

A strong commissioned piece, reader question, archival source, community work or new publication may be included in an Issue without first passing through Work Recognition.

The Issue must not falsely label such inclusion as Recognition.

---

## R11-A25 — Issue inclusion does not upgrade the author's identity / 议题收录不会升级作者身份

**HARD INVARIANT（硬边界）.**

Being included in an Issue does not automatically create Contributor Qualification（贡献者资格）, Reviewer Trust（评审信任）, Account Trust（账户信任） or governance authority.

Issue inclusion may be shown as portfolio history where appropriate, but its meaning remains editorial inclusion.

---

## R11-A26 — Contributor status does not guarantee Issue inclusion / 贡献者身份不保证议题收录

**HARD INVARIANT（硬边界）.**

Contributor Qualification（贡献者资格） may unlock submission/collaboration channels, but acceptance into an Issue remains an independent editorial decision.

---

## R11-A27 — Official / Institution / Partner status does not guarantee inclusion / 官方、机构或合作关系不保证议题收录

**HARD INVARIANT（硬边界）.**

Platform ownership, Institution Verification（机构认证） or Partner（合作方） relationship cannot automatically create Issue placement or Recognition evidence.

---

# 7. Editorial acquisition routes / 编辑内容来源路径

## R11-A28 — Selection origin remains attributable / 收录来源路径必须可归因

**HARDENING（架构加固）.**

Where material, the editorial system should distinguish whether a selected object originated from:

- existing platform discovery;
- contributor submission;
- open call / themed submission;
- editorial commission;
- reader question / letter selection;
- archive / canonical source selection;
- partner/institutional collaboration;
- another legitimate future route.

Selection origin does not change object authorship.

---

## R11-A29 — Submission, commission and selection are different workflows / 投稿、约稿与编辑选入是不同工作流

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

A submission is a request for consideration; a commission is an editorial assignment/agreement; selection is the editorial decision to include an eligible object. These states must not be collapsed.

---

## R11-A30 — Rejection or non-selection is not a quality verdict by default / 未选中默认不是质量裁决

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

An object may not fit the current Issue theme, timing, available space, rights/access needs or editorial composition. Non-selection must not automatically reduce Work Recognition, Account Trust or recommendation standing.

---

# 8. Access, rights & discussion boundaries / 访问、权利与讨论边界

## R11-A31 — Issue inclusion cannot bypass object-level rights or access constraints / 议题收录不能绕过对象级权利与访问限制

**HARD INVARIANT（硬边界）.**

An Issue may curate an object only within applicable Rights（权利）, privacy, lifecycle, membership/access and legal constraints.

Issue-level presentation is not a new license.

---

## R11-A32 — Issue-level access policy and object-level access policy remain distinguishable / 议题访问策略与对象访问策略保持可区分

**HARD ARCHITECTURAL DIRECTION（硬性架构方向）.**

Membership / Reading Room（会员 / 阅读室） decisions are deferred to Round 12, but Round 11 must not assume that inclusion automatically makes every object public, premium, or identically gated.

---

## R11-A33 — Issue Discussion remains a linked social object / 本期讨论仍是关联的社交对象

**HARD inherited from Round 8（继承第八轮硬边界）.**

An Issue may have companion Discussion Thread(s)（讨论线程）, but ordinary discussion remains separate from the Issue's editorial/canonical content identity.

---

## R11-A34 — Editorial curation does not make community discussion canonical / 编辑策展不会把社区讨论变成典籍或官方事实

**HARD INVARIANT（硬边界）.**

A community response may be selected, quoted or linked editorially while preserving its original object class, authorship and social provenance.

---

# 9. Historical durability & change / 历史稳定性与变更

## R11-A35 — Published Issue needs durable historical identity / 已发布议题需要稳定的历史身份

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

Readers, citations, archives, analytics and future scholarship must be able to refer to the same published Issue over time even if corrections or later editorial actions occur.

---

## R11-A36 — Removing an object from an Issue does not delete the underlying object / 从议题移除对象不等于删除原对象

**HARD INVARIANT（硬边界）.**

Issue membership lifecycle and underlying content lifecycle are separate. Editorial removal from one Issue must not silently erase the original publication or its appearances elsewhere.

---

## R11-A37 — Published Issue mutability is a genuine product decision / 已发布议题的可变性属于真实产品选择

**PENDING USER DECISION（等待用户决定）.**

Three coherent models are possible:

### Option A — Frozen publication snapshot（发布后冻结快照）
- publication is maximally stable;
- later errors require separate errata/correction objects;
- weak for legitimate rights changes, broken links, factual corrections and improved source context.

### Option B — Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）
- **current recommendation（当前推荐）**;
- the published Issue has a stable edition/snapshot identity;
- later corrections, rights-driven substitutions, editorial notes or additions are possible through explicit version/amendment history;
- original publication context remains recoverable / interpretable;
- substantial changes are not silently rewritten as if they were always present.

### Option C — Living evergreen Issue（持续变化的常青议题）
- easiest for continuous editorial updating;
- strongest risk of rewriting publication history, citations and old reader context;
- may fit future Collections（合集） better than journal-like Issues（议题）.

This choice does not decide exact UI, version number format or storage strategy.

---

# 10. Rule evolvability classification / 规则可演进分类

Workshop A currently treats:

- stable object identity, authorship/provenance separation, Issue inclusion != Recognition, and rights/access boundaries as Core Invariants（核心不变量）;
- section templates, theme structures, issue numbering conventions, editorial cadence and selection policies as Policy / Configuration（策略 / 配置）;
- submission / commission / selection / publication / amendment as Workflow（工作流） concerns;
- future curation assistance, recommendation of candidate works or editorial tooling as Algorithm（算法） where applicable;
- Issue, Curation Relation（策展关系）, included object, editorial framing and history as distinct Data（数据） concepts.

No universal fixed section count, issue length, publication interval, contributor quota or curation score is authorized.

---

## 11. Deferred to later Round 11 workshops / 延后到第十一轮后续工作坊

Workshop A intentionally does not yet freeze:

- exact editorial roles / desks / approval chain;
- commissioning and submission workflow details;
- editorial calendar / pipeline board;
- public pitch / open-call mechanics;
- Issue-level membership/paywall behavior;
- archive / back-issue entitlement;
- editorial analytics or success metrics;
- conflict-of-interest operational process;
- corrections / errata UI;
- contributor compensation / commercial contracts;
- issue cover/layout/visual design;
- investor-demo scope.

Next planned subject after resolving R11-A37: **Workshop B — Editorial Workflow, Selection & Commissioning（工作坊 B——编辑工作流、选稿与约稿）**.
