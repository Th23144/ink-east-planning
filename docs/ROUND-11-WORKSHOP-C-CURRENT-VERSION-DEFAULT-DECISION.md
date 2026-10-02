# Round 11 Workshop C — Current Version Default Decision（第十一轮工作坊 C——当前版本默认展示决定）

> **Status:** USER-CONFIRMED PROVISIONAL PRODUCT DIRECTION（用户确认的暂定产品方向）  
> **Scope:** Canonical Issue page（议题主页面）默认展示哪个已发布版本  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## Decision / 决定

The user selected **Option B（方案 B） — Latest-valid-first（默认最新有效版本）**.

This resolves the pending R11-C15 product choice in `docs/INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-C.md`.

The direction remains **PROVISIONAL（暂定）**, not an immutable invariant.

---

## Meaning / 产品含义

The canonical Issue（议题） page should normally present the latest valid amended representation available to the current reader, subject to applicable rights, privacy, membership/access and lifecycle policy.

This does **not** erase publication history.

Where permitted and appropriate:

- material revision/amendment context remains visible and discoverable;
- historical published snapshots remain addressable for citation/archive purposes;
- a citation may distinguish the Issue generally from a specific historical version;
- rights/privacy/legal restrictions may suppress historical content while preserving permissible provenance/tombstone context;
- the latest-valid view must not silently pretend that prior versions never existed.

---

## Controlling relationship / 与既有决定的关系

This decision works together with the already user-confirmed Round 11 Workshop A direction:

> **Versioned publication with stable historical snapshot（版本化出版 + 稳定历史快照）**.

Combined product behavior:

```text
Canonical Issue URL（议题主网址）
        ↓
latest valid representation（默认最新有效表示）
        ↓
visible amendment/history context where material（重大修订可见）
        ↓
addressable historical snapshots where policy allows（历史快照可定位）
```

Exact URL scheme, version selector UI, archive UX, version-number labels and citation formatting remain DEFERRED CALIBRATION（延后校准） / implementation work.

---

## Effect / 影响

Workshop C now has **no unresolved product-direction blocker** from R11-C15.

No implementation authorization is created by this decision.