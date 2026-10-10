> ⚠️ **SUPERSEDED BY V2 / HISTORICAL INITIAL MATRIX（已由 V2 取代 / 历史初版矩阵）**  
> Preferred current matrix: `PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2.md`.  
> Audit: `PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2-AUDIT.md`.

# Project 3 — Product Concept Provenance Matrix V1
# 项目三——产品概念来源矩阵 V1

> **Status:** CURRENT PROVENANCE GUARD（当前来源护栏）  
> **Purpose:** prevent a legacy page/module/container name from becoming current product truth merely because it appears in an old roadmap or workshop order.  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## Status vocabulary / 状态词

- **POST-RESET CONFIRMED（重构后已确认）** — explicitly re-discussed/accepted after the Product Architecture reset.
- **CONFIRMED SUBJECT / DETAILS DEFERRED（主题已确认 / 细节延后）** — the product/domain exists, but detailed behavior remains undecided.
- **LEGACY-INHERITED / REVALIDATED LATER（旧方案继承 / 后来重新验证）** — entered from old planning but was later substantively revalidated.
- **LEGACY-INHERITED / EXISTENCE UNRESOLVED（旧方案继承 / 是否存在未决定）** — old term survived but never received a current existence decision.
- **HISTORICAL ONLY（仅历史）** — superseded old product direction.

---

| Concept / 概念 | Origin / 来源 | Post-reset evidence / 重构后证据 | Current status / 当前状态 |
|---|---|---|---|
| Multi-lane Content / Publishing（多通道内容 / 发布） | post-reset planning | Round 1 + Content/Knowledge V1 | **POST-RESET CONFIRMED** |
| Canonical Classical Text Reader（古籍原典阅读 / 研究界面） | old idea + redefined | Content/Knowledge V1 explicitly redefines it as one lane | **LEGACY-INHERITED / REVALIDATED LATER** |
| Community（社区） | old idea + re-discussed | Round 3 topology corrections; later Round 8 seal | **LEGACY-INHERITED / REVALIDATED LATER** |
| Home / For You（首页 / 为你推荐） | post-reset future-platform planning | Round 3 mixed discovery requirement; later Round 10 seal | **POST-RESET CONFIRMED** |
| Save / Bookmark（收藏 / 书签） | post-reset primitive | platform-scope correction + later Round 8 | **POST-RESET CONFIRMED** |
| Follow（关注） | post-reset primitive | platform-scope correction + later Round 8/10 | **POST-RESET CONFIRMED** |
| Reading History（阅读历史） | post-reset candidate primitive | Content/Knowledge V1 + later Round 9 | **POST-RESET CONFIRMED AS DATA/BEHAVIOR CONCEPT**, exact UX deferred |
| Private Notes / Saved Passages（私人笔记 / 保存段落） | post-reset future reading capability | Content/Knowledge V1 | **CONFIRMED SUBJECT / DETAILS DEFERRED** |
| Profile（个人资料 / 身份页） | post-reset | Round 4G “Profile explains identity” | **POST-RESET CONFIRMED** |
| Work Recognition（作品认可） | post-reset | Rounds 2–3 | **POST-RESET CONFIRMED** |
| Issue（议题） | legacy + reworked | early plan + Round 11 full revalidation | **LEGACY-INHERITED / REVALIDATED LATER** |
| Membership（会员） | legacy + repeatedly re-discussed | Rounds 1/4/5 boundaries + later Round 12 correction | **CONFIRMED SUBJECT / DETAILS DEFERRED** |
| Reading Room（阅读室） | pre-reset VIP/member planning | workshop-order carry-forward only; no R1–10 definition; R11 deferred phrase only | **LEGACY-INHERITED / EXISTENCE UNRESOLVED** |
| VIP Library（会员内容库） | pre-reset | explicitly reconsidered, later rejected under public-content baseline | **HISTORICAL ONLY** |
| Reader / Patron tiers（读者 / 赞助者档位） | pre-reset | later packaging remains undecided | **HISTORICAL AS FIXED MODEL** |
| Paywall / paid article access（付费墙 / 付费文章） | pre-reset | Round 12 public-content correction rejects as Membership baseline | **HISTORICAL ONLY** |
| Custom Reading（定制解读） | pre-reset legacy service | carried forward in later planning, but dedicated Services round has not yet revalidated its final Project 3 role | **LEGACY-INHERITED / REVALIDATION PENDING** |
| Custom Ebook Studio（定制电子书工作室） | pre-reset legacy service | carried forward in later planning, but dedicated Services round has not yet revalidated its final Project 3 role | **LEGACY-INHERITED / REVALIDATION PENDING** |
| Governance / Moderation / Corrections（治理 / 审核 / 纠错） | post-reset platform primitive | Round 3 scope correction + later dedicated rounds | **POST-RESET CONFIRMED** |
| Knowledge Graph / Provenance（知识图谱 / 来源溯源） | post-reset architecture | Content/Knowledge + Round 7 | **POST-RESET CONFIRMED** |
| Interest Graph（兴趣图谱） | post-reset later module | deferred earlier, later Round 9 | **POST-RESET CONFIRMED** |
| Discovery / Recommendation（发现 / 推荐） | post-reset future platform primitive | Round 3 + Round 10 | **POST-RESET CONFIRMED** |

---

## Mandatory rule / 强制规则

A legacy concept may appear in:

- old Brief;
- Roadmap;
- Handoff;
- static preview;
- source schema;
- workshop-order list;
- deferred-subject wording.

None of those proves current product existence.

Before defining a legacy-named module, require:

```text
legacy term found
→ post-reset existence evidence?
→ if YES: define/revalidate
→ if NO: mark existence unresolved
→ discover needs/capabilities first
→ only then decide whether a distinct product/container is needed
```

This matrix controls future concept-provenance checks.
