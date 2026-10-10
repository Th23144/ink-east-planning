# Round 10 Workshop C — Hardening Addendum（第十轮工作坊 C 架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-C.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

This addendum records safeguards identified by the dedicated Workshop C Adversarial Audit（工作坊 C 对抗性审计）. It does not resolve the still-open Following（关注） default-order product choice on the user's behalf.

---

## R10-C39 — Ranked Following starvation must be observable / 排序型关注页的长期压制必须可观察

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

If Following（关注） uses a Ranked（相关排序） mode, the platform should be able to detect when an explicitly followed creator, Topic（主题）, Place（地点）, Work（作品） or other supported target contributes eligible updates but is almost never surfaced because the ranking system persistently predicts low engagement.

This does not require equal exposure among followed targets. It requires the system to distinguish legitimate low priority from accidental or self-reinforcing starvation and preserve a transparent Latest / All Updates（最新 / 全部更新） route when that mode exists.

---

## R10-C40 — Explore candidate-source composition must remain observable / 探索页候选来源组成必须可观察

**NEW SAFEGUARD（新增保护） / HARDENING（架构加固）.**

Explore（探索） can nominally support many candidate sources while operationally being dominated by one retriever, popularity source, editorial source or Interest Graph（兴趣图谱） path.

The platform should be able to observe candidate-source contribution, downstream survival and final exposure at an appropriate level so Explore does not silently become a disguised single-source feed.

This is observability, not a fixed quota requirement.

---

## R10-C41 — Recommendation suppression is distinct from direct user intent / 推荐抑制与用户主动意图必须区分

**CLARIFICATION（澄清） / HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Actions such as Show Less / Not Interested（少看 / 不感兴趣） usually express a recommendation-distribution preference within a defined scope. They do not automatically mean the object/topic must disappear when the user later issues an explicit Search（搜索） query or navigates directly to it.

Likewise:
- Unfollow（取消关注） != Block（屏蔽）;
- Hide recommendation（隐藏推荐） != legal/privacy removal（法律 / 隐私移除）;
- surface-level suppression != universal invisibility（页面级抑制 != 全局不可见）.

Where the user explicitly chose a true Block / global suppression / safety control（屏蔽 / 全局抑制 / 安全控制）, that stronger scope may legitimately continue to apply.

The control's original scope must remain authoritative.

---

## R10-C42 — Relatedness is not endorsement, truth or authority / “相关”不等于认可、真理或权威

**NEW SAFEGUARD（新增保护） / HARD INVARIANT（硬边界）.**

An object can be Related（相关） because it cites, disputes, responds to, shares a Topic（主题）, shares a Place（地点）, belongs to a series or is linked through a Knowledge Graph（知识图谱） relation.

That relation must not be interpreted as:
- factual agreement;
- editorial endorsement;
- Work Recognition（作品认可）;
- canonical/source authority;
- evidence that one item validates the other.

Where material, typed relation reason and existing provenance/authority state should remain visible to downstream ranking and presentation.

---

## R10-C43 — Search popularity and publisher-controlled metadata do not create authority / 搜索热度与发布方可控元数据不能制造权威

**HARDENING（架构加固）.**

Search（搜索） may use lexical match, semantic features, structured metadata, popularity, freshness and other signals where appropriate, but:

- high click volume does not create source authority or factual reliability;
- keyword/tag stuffing does not create legitimate relevance;
- publisher-controlled labels/metadata are evidence to evaluate, not self-authenticating truth;
- popularity may assist ranking but must not automatically override stronger exact/entity/query relevance.

Detailed anti-spam, search-abuse and manipulation controls remain for Governance / Moderation（治理 / 审核） and later implementation design.

---

## R10-C44 — Dedicated-surface derived candidates must support invalidation / 专门页面的派生候选必须支持失效与重算

**HARDENING（架构加固） inherited from Rule Evolvability（继承规则可演进架构）.**

When an underlying object changes in ways that affect recommendation eligibility or meaning — including lifecycle state, visibility, access/membership, moderation/legal state, rights status, material freshness/staleness or relationship validity — derived candidate sets, indexes, caches and ranking features for Following / Explore / Search / Related（关注 / 探索 / 搜索 / 相关推荐） must be able to invalidate or recompute as appropriate.

A stale recommendation cache must not become an independent source of truth.

Exact invalidation technology and latency targets remain implementation decisions.

---

## Effect on Workshop C / 对工作坊 C 的影响

- R10-C1…R10-C38 remain valid.
- R10-C39…R10-C44 are controlling hardening rules for future Round 10 consolidation.
- The only open product choice remains Following（关注） default ordering: A / B / C.
- Current recommendation remains **B — Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）**.
- No exact ranking weight, UI（用户界面） layout, search technology or model family is introduced.
- No implementation is authorized.
