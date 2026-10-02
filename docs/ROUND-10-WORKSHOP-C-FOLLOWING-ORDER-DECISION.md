# Round 10 Workshop C — Following Default Order Decision（第十轮工作坊 C——关注页默认排序决定）

> **Status:** USER-CONFIRMED PROVISIONAL PRODUCT DIRECTION（用户确认的暂定产品方向）  
> **Scope:** Following（关注） default ordering  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## Decision / 决定

The user selected **Option B（方案 B）**:

> **Ranked default + visible Latest / All Updates（默认相关排序 + 明确的最新 / 全部更新模式）**.

This supersedes the `PENDING USER DECISION（等待用户决定）` state recorded in `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-C.md` for R10-C6.

The direction is **PROVISIONAL（暂定）**, not an immutable invariant. It may later be revised through explicit product-architecture change if evidence shows another mode better serves the product.

---

## Controlling safeguards / 控制性保护

This decision inherits all Workshop C and audit safeguards, especially:

1. Following（关注） remains an explicit-relationship surface and must not become a second For You（为你推荐）.
2. Low engagement does not mean implicit Unfollow（取消关注）.
3. Ranked（相关排序） affects ordering/presentation, not the existence of the Follow（关注） relationship.
4. A clear Latest / All Updates（最新 / 全部更新） route remains available so eligible followed updates are not structurally unreachable.
5. The active ordering mode must be legible to the user; a ranked view must not be mislabeled as chronological.
6. Ranked Following starvation（排序型关注页长期压制） must be observable so an explicitly followed source is not silently starved forever by self-reinforcing engagement prediction.
7. Exact ranking weights, freshness rules, unread prioritization, fatigue treatment and UI（用户界面） layout remain DEFERRED CALIBRATION（延后校准）.

---

## Effect / 影响

Workshop C now has **no unresolved product-direction blocker**. Its dedicated-surface architecture may serve as a stable input to Workshop D.

Next: **Round 10 Workshop D — Candidate Retrieval & Multi-Stage Ranking Semantics（候选召回与多阶段排序语义）**.