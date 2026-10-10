# Round 9 — Pre-existing Interest Direction Provenance Note / 第九轮既有兴趣方向溯源说明

Status: **DOCUMENTATION REPAIR / PROVENANCE CLARIFICATION（文档修复 / 溯源澄清）**  
Scope: Round 9 — Reader Behavior & Interest Graph（第九轮——读者行为与兴趣图谱）  
Implementation authorization: **NO（否）**.

## Why this note exists / 为什么需要这份说明

Round 9 formalizes a principle that was already present in earlier PR #53 decisions: **interest, reading history and familiarity may guide distribution, but must not become a rigid specialization identity or a permanent user label.**

This is not a new Round 9 invention. Earlier records captured the direction in fragmented contexts, especially nomination allocation and cross-domain discovery, but did not yet consolidate it as a first-class Interest Graph（兴趣图谱） architecture invariant.

Round 9 therefore should be read as **formalization and completion of an earlier accepted direction**, not as a request to re-decide the principle from scratch.

## Earlier accepted evidence / 更早已接受的依据

### 1. Round 3 checkpoint — users may range across many subjects / 用户可跨多个领域

PR #53 recorded the user decision that hard `domain expertise / domain relevance` routing should be rejected as a prerequisite or strong gate for nomination assignment because users may legitimately range across many subjects.

The same checkpoint stated that Interest / reading history / familiarity（兴趣 / 阅读历史 / 熟悉度） may be used only as soft distribution signals and **never as a rigid specialization identity**.

### 2. Round 3 consolidation — familiarity may influence allocation but cannot become a hard gate / 熟悉度可影响分配但不能成为硬门槛

The Round 3 consolidation preserved this as architecture: interest/topic familiarity may weakly influence work allocation, but it must not become a hard domain gate, and cross-topic exploration must remain possible.

### 3. Platform discovery direction — cross-domain Home / For You and anti-filter-bubble / 跨领域首页与反信息茧房

PR #53 later recorded a global mixed Home / For You（首页 / 为你推荐） surface that may contain content from any eligible part of the platform.

The feed should be ranked/recommended rather than literally random, but must deliberately preserve Exploration / Serendipity（探索 / 偶然发现） so it does not collapse into a single-topic Filter Bubble（信息茧房）.

Users should be able to open the product without first choosing one category and still encounter varied content.

## Documentation gap / 原有文档缺口

The earlier architecture had the correct direction, but it was incomplete in one important way:

- it said what recommendation/distribution **must not do** — do not create rigid specialization identity, do not hard-gate by domain, do not collapse into a single-topic filter bubble;
- it had not yet defined the dedicated product object model for **what interest actually is** — multiple concurrent Interest Clusters（兴趣簇）, Explicit Preference（明确偏好） vs Inferred Interest（推断兴趣）, Session / Recent / Durable（会话 / 近期 / 长期） layers, lifecycle/decay/reactivation, correction/reset and privacy boundaries.

Round 9 Workshops A–F fill that missing model.

## Controlling interpretation for Round 9 / 第九轮的控制性解释

The following Round 9 principles must therefore be treated as continuations of the earlier accepted direction:

1. Interest Graph（兴趣图谱） is not a permanent User Profile Label（用户画像标签）.
2. Inferred Interest（推断兴趣） is a revisable system hypothesis, not identity truth.
3. One user may hold multiple unrelated or weakly related interests concurrently.
4. Interest, familiarity and reading history may guide discovery/recommendation but do not define expertise, identity, trust or governance standing.
5. Cross-domain exploration remains a platform-level requirement, not an optional later optimization.
6. The architecture must preserve user correction, interest decay/reactivation and future policy/model evolution.

## Precedence / 优先级

This note does not supersede the earlier Round 3 or Round 8 decisions. It records their continuity into Round 9 and repairs the provenance gap so later Current Truth（当前有效真相） consolidation does not present the multi-interest/non-label principle as newly invented in Round 9.
