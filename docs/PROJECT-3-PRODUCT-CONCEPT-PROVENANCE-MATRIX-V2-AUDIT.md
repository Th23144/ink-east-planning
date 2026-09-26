# Project 3 Product Concept Provenance Matrix V2 — Adversarial Audit
# 项目三产品概念来源矩阵 V2——对抗性审计

> **Target:** `PROJECT-3-PRODUCT-CONCEPT-PROVENANCE-MATRIX-V2.md`  
> **Status:** PASS AFTER HARDENING / NO UNRESOLVED MATERIAL PROVENANCE BLOCKER IN MATRIX（加固后通过 / 矩阵本身无未解决重大来源阻塞）  
> **Purpose:** attack the provenance matrix for false inheritance, over-correction and hidden container assumptions.  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

# 0. Audit question / 审计问题

The matrix must correctly answer two different questions:

1. **Does the underlying user/product need exist?**
2. **Has this exact named page/module/container been confirmed to exist?**

A PASS requires these not to be collapsed.

---

# 1. Legacy-name survival attacks / 旧名字残留攻击

| # | Attack | Result |
|---:|---|---|
| 1 | Reading Room is treated as current merely because it appears in workshop order | PASS — blocked |
| 2 | VIP Library survives because old static preview exists | PASS — historical only |
| 3 | Reader/Patron survives because old source schema has values | PASS — historical fixed model |
| 4 | old Membership sales page is treated as required because Membership subject exists | PASS — container unresolved |
| 5 | old `/community` aggregate layout is treated as the Community architecture | PASS — system confirmed, old container shape unresolved |
| 6 | old Reader Notes component is treated as canonical Community object type | PASS — semantically absorbed |
| 7 | old Letters page is treated as current because reader letters remain valid editorial input | PASS — route/container separated |
| 8 | Ask the Ancient Text old form is treated as identical to current Question Mode | PASS — explicitly separated |
| 9 | old Custom Reading page survives because service name appears in older architecture | PASS — revalidation pending |
| 10 | old Custom Ebook page survives for same reason | PASS — revalidation pending |
| 11 | Patron Vote survives as paid governance | PASS — historical/rejected as governance product |
| 12 | annual physical journal becomes current Membership benefit because old plan mentioned it | PASS — candidate only |

---

# 2. Over-correction attacks / 过度纠正攻击

| # | Attack | Result |
|---:|---|---|
| 13 | finding Reading Room invalid causes all reading UX to be deleted | PASS — reading capabilities preserved |
| 14 | Reader Notes old component invalidation erases private notes | PASS — private notes separately preserved |
| 15 | old Letters page invalidation erases reader letters as editorial input | PASS — editorial route preserved |
| 16 | old Ask form invalidation erases Question / Answer | PASS — Round 8 Question Mode preserved |
| 17 | old Community page invalidation erases Community system | PASS |
| 18 | old Membership page uncertainty erases Membership as future subject | PASS |
| 19 | services revalidation pending is misread as services permanently rejected | PASS |
| 20 | `/articles` prototype uncertainty erases public publication reading | PASS |
| 21 | `/collections` prototype uncertainty erases curation/collection need | PASS |
| 22 | Recognition Board shape correction erases high-quality Recognized Works destination/function | PASS |

---

# 3. Prototype-code leakage attacks / 原型源码污染攻击

| # | Attack | Result |
|---:|---|---|
| 23 | a route exists in Next.js, therefore product IA is final | PASS — explicitly prohibited |
| 24 | Level 1/2 validation route becomes architectural requirement | PASS |
| 25 | `/articles` is frozen because it already works | PASS |
| 26 | `/collections` is frozen because it already works | PASS |
| 27 | `reader/patron/is_vip` fields imply Membership product truth | PASS |
| 28 | old preview HTML implies current product existence | PASS |
| 29 | old static navigation implies current IA | PASS |
| 30 | implementation object name becomes ontology automatically | PASS |

---

# 4. Confirmed-current concept attacks / 当前已确认概念攻击

| # | Attack | Result |
|---:|---|---|
| 31 | Home / For You incorrectly downgraded to legacy | PASS — post-reset confirmed |
| 32 | Explore incorrectly treated as generic Home clone | PASS — distinct Round 10 task |
| 33 | Search incorrectly treated as Recommendation | PASS — distinct Round 10 task |
| 34 | Following incorrectly treated as inferred-interest feed | PASS — explicit relationship surface |
| 35 | Topic / Place pages incorrectly downgraded because routes may evolve | PASS — product surface remains current |
| 36 | Candidate Review Surface lost during provenance cleanup | PASS |
| 37 | Profile lost during identity-rule consolidation | PASS |
| 38 | Contributor Application lost because ordinary publishing does not require it | PASS |
| 39 | Material Capability Status Surface lost as “only backend trust rule” | PASS |
| 40 | Issue product lost because old Issue existed before reset | PASS — later Round 11 revalidated |

---

# 5. Reading/personal-utility boundary attacks / 阅读与个人工具边界攻击

| # | Attack | Result |
|---:|---|---|
| 41 | Save automatically assigned to Reading Room | PASS — no container assignment |
| 42 | private notes automatically assigned to Membership | PASS |
| 43 | Reading History automatically becomes a public UI/page | PASS — state concept, UX deferred |
| 44 | personal collections/shelves treated as already confirmed | PASS — candidate only |
| 45 | personal reading map treated as already confirmed | PASS — candidate only |
| 46 | saved passages treated as public annotations | PASS |
| 47 | private notes treated as Recommendation fuel by existence | PASS — later privacy rules still control |
| 48 | reading capability existence used to infer paid status | PASS |

---

# 6. Community/participation boundary attacks / 社区与参与边界攻击

| # | Attack | Result |
|---:|---|---|
| 49 | Question Mode conflated with legacy editorial Letters | PASS |
| 50 | reader letter editorial intake conflated with public Q&A | PASS |
| 51 | public replies conflated with private Reader Notes | PASS |
| 52 | Community aggregate page treated as one required homepage-like container | PASS |
| 53 | future groups/private messaging/repost graph silently promoted to current features | PASS — deferred |
| 54 | exact old single-level Reader Notes UI silently promoted | PASS — no |
| 55 | old Editor's Choice community aggregation silently promoted | PASS — not claimed |
| 56 | social-object presence used to transfer authority to linked canonical content | PASS — later Round 8 still controls |

---

# 7. Membership/services boundary attacks / 会员与服务边界攻击

| # | Attack | Result |
|---:|---|---|
| 57 | Membership subject implies current tier/page/price | PASS |
| 58 | Supporter Relationship candidate becomes locked value thesis | PASS — design domain only |
| 59 | Custom Reading is silently rejected before Services round | PASS — pending revalidation, not rejected |
| 60 | Custom Reading old page/form silently preserved | PASS — existence unresolved until revalidation |
| 61 | Custom Ebook old page/form silently preserved | PASS |
| 62 | Spatial Flow bridge detail is overclaimed as final Round 13 relationship | PASS — relationship confirmed, details deferred |
| 63 | paid/sponsored recommendation becomes current commercial feature | PASS — not authorized |
| 64 | physical journal/gift becomes promised entitlement | PASS — not current truth |

---

# 8. Curation/archive boundary attacks / 策展与归档边界攻击

| # | Attack | Result |
|---:|---|---|
| 65 | lifecycle `Archived` state is confused with a public Archive page | PASS |
| 66 | public browse need forces one `/articles` archive page | PASS — container deferred |
| 67 | Issue is treated as the only curation form | PASS — Round 11 allows Collections/paths/exhibitions/dossiers |
| 68 | existing `/collections` prototype freezes final curation ontology | PASS |
| 69 | Search/Topic/Place cannot replace or supplement generic archive because old route exists | PASS — no such lock |
| 70 | historical Issue snapshot and current browse surface are conflated | PASS |

---

# 9. Delivery/notification attacks / 通知与投递边界攻击

| # | Attack | Result |
|---:|---|---|
| 71 | notification artifact is treated as fully designed product | PASS |
| 72 | email digest candidate becomes current benefit | PASS — candidate only |
| 73 | notification ranking/fatigue/channels silently decided | PASS — deferred |
| 74 | Membership assumed to own delivery architecture | PASS — no |

---

# 10. Findings requiring hardening / 需要加固的发现

The audit found no material misclassification that required changing V2's core statuses, but it identified four process hardenings:

## H1 — Route existence and product existence must be recorded separately
A current source route can remain while final IA is undecided. Future migration must not delete a useful working route merely because it is not architecturally frozen, nor freeze it merely because it exists.

## H2 — Legacy label and surviving need must be separately addressable
Examples:
- old public Reader Notes component vs public discussion/reply need;
- old Letters page vs reader-letter editorial route;
- old Reading Room vs private reading capability need.

## H3 — Revalidation pending is not rejection
Custom Reading / Custom Ebook / future services remain open questions for the dedicated Services round.

## H4 — A deferred subject is not a confirmed container
“Membership / Reading Room”, “Notifications / Delivery”, “Services / monetization” and similar workshop-order labels must be decomposed before design.

---

# 11. Audit verdict / 审计结论

**PASS AFTER HARDENING.**

The V2 matrix is safe to use as the current product-concept provenance guard.

It does **not** mean all open products are decided. It means their decision state is now explicit enough that future work should not silently inherit legacy containers.

Next correct action is not Round 12 Membership design.

Next is:

> **reconcile the reconstructed Rounds 1–5 product picture with the V2 provenance matrix, then create a Current Product Surface / Capability Baseline（当前产品面 / 能力基线） containing only confirmed or explicitly deferred concepts.**

That baseline can then be used to restart later product discovery without legacy nouns steering the architecture.


---

# 12. Cross-source reconciliation follow-up / 跨来源复核后续

The later Current Product Baseline reconciliation found one provenance-matrix omission:

- Domain Surface / Scoped Domain View（领域页面 / 领域范围视图） was already supported by the post-reset topology and Round 8 unified projection model but was not given its own row in Matrix V2.

This was added as **POST-RESET CONFIRMED / TAXONOMY & UX EVOLVABLE**.

This is a DOCUMENTATION REPAIR（文档修复）, not a new product decision. The original 74 attack results remain valid; no legacy container was promoted.

Follow-up result: **PASS AFTER DOCUMENTATION REPAIR**.
