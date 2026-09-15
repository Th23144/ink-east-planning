# PR #53 — Detailed Rule Review Index（详细规则人工审阅索引）

> **Purpose（用途）:** 给人工审阅者一个从 PR（拉取请求）#53 的 Conversation（对话）页直接进入完整规则正文的入口。  
> **Important（重要）:** PR description（拉取请求说明）只维护当前状态、封存结果和下一步，不复制几百条规则正文；完整规则都在本 PR 分支内的独立 Markdown（文档）文件中，或在早期轮次的 PR Conversation（对话）决策记录中。

---

## 1. Why detailed rules are not visible in the PR description / 为什么 PR 说明里看不到详细规则

PR #53 currently changes well over one hundred documentation files. GitHub（代码托管平台）的 PR Conversation（对话）页首先显示 PR description（说明）和评论，而不是自动展开所有文件内容；Files changed（文件变更）页在大型 PR 中也会折叠、按文件展示或要求手动展开较大的 diff（差异）。

Therefore:

- **Summary / checkpoint（摘要 / 检查点）** lives in the PR description and PR comments;
- **Full rule text（完整规则正文）** lives in the dedicated documents below;
- **Current Truth / Seal（当前有效真相 / 封存）** is the preferred review entry after a Round（轮次） is complete;
- **Workshop（工作坊） files + Hardening Addendum（加固补充） + Adversarial Audit（对抗性审计）** preserve detailed Decision Provenance（决策溯源）;
- Rounds 1–5（第一至第五轮） were created before the later standardized `Current Truth → Parity → Audit → Seal` document pattern, so their review locations are less uniform than Rounds 6–11（第六至第十一轮）.

Do not treat absence of hundreds of rules in the PR description as absence from the PR branch.

---

## 2. Recommended manual review route / 推荐人工审阅路径

### A. Start / 起点

1. [`PROJECT-3-START-HERE.md`](../PROJECT-3-START-HERE.md)
2. [`PROJECT-3-PLATFORM-RULE-EVOLVABILITY-CHANGE-ARCHITECTURE-V1.md`](PROJECT-3-PLATFORM-RULE-EVOLVABILITY-CHANGE-ARCHITECTURE-V1.md)
3. [`PROJECT-3-RULE-EVOLVABILITY-ADVERSARIAL-AUDIT.md`](PROJECT-3-RULE-EVOLVABILITY-ADVERSARIAL-AUDIT.md)

### B. Round 1–2 — Content / Publishing + Work Recognition（第一至第二轮——内容出版 + 作品认可）

These two rounds are primarily consolidated in the original living decision records rather than separate `ROUND-1-*` / `ROUND-2-*` files:

- [`INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md`](INK-EAST-PRODUCT-ARCHITECTURE-V1-DECISION-LOG.md) — confirmed Round 1 / Round 2 decisions and corrections;
- [`INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md`](INK-EAST-PRODUCT-ARCHITECTURE-V1-WORKSHOP.md) — original workshop context / deferred questions;
- [`INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md`](INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md) — later cross-round corrections/hardening that may supersede earlier wording on specific points.

### C. Round 3 — Recognition Pipeline & Governance（第三轮——作品认可流程与治理）

- [`INK-EAST-ROUND-3-RECOGNITION-PIPELINE-WORKSHOP.md`](INK-EAST-ROUND-3-RECOGNITION-PIPELINE-WORKSHOP.md)
- [`INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md`](INK-EAST-ROUND-3-RECOGNITION-GOVERNANCE-CONSOLIDATION.md)
- [`INK-EAST-ROUND-3-SEAL-RECORD.md`](INK-EAST-ROUND-3-SEAL-RECORD.md)
- Later Rounds 1–6 cross-round amendments/audits may supersede specific earlier wording; read the Final Cross-Audit above after the Round 3 files.

### D. Round 4 — Contributor Identity（第四轮——贡献者身份）

- [`INK-EAST-ROUND-4-CONTRIBUTOR-IDENTITY-CONSOLIDATION.md`](INK-EAST-ROUND-4-CONTRIBUTOR-IDENTITY-CONSOLIDATION.md)
- [`INK-EAST-ROUND-4-SEAL-RECORD.md`](INK-EAST-ROUND-4-SEAL-RECORD.md)
- [`INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md`](INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md) for later cross-round corrections/hardening.

### E. Round 5 — Account Trust / Capability / Integrity（第五轮——账户信任、能力与完整性）

**Important historical-format note（重要历史格式说明）:** Round 5 was largely locked through PR #53 Conversation（拉取请求对话） comments rather than one dedicated consolidated Markdown file. This is why it is much harder to find from `Files changed（文件变更）` alone.

Primary decision trail is in PR #53 Conversation, including the Round 5A–H locks/corrections such as:

- Account Trust / Account Weight architecture（账户信任 / 账户权重架构）;
- multidimensional evidence rather than one universal score（多维证据而非全局单分）;
- adaptive growth / decay / recovery（自适应增长 / 衰减 / 恢复）;
- hidden internal mechanics + bounded user-facing transparency（内部机制隐藏 + 有边界的用户透明度）;
- capability/risk separation and anti-tiering principle（能力 / 风险分离与反等级化原则）;
- Sensitive Operations Guard（敏感操作保护闸）;
- Multi-account / Sybil / Coordinated Abuse（多账户 / 女巫攻击 / 协同滥用）;
- Account Integrity（账户完整性） safeguards.

For consolidated later validation/corrections, also read:

- [`INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md`](INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md)
- [`INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md`](INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-RECORD.md)
- [`INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md`](INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-2.md)
- [`INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md`](INK-EAST-ROUNDS-1-6-CROSS-ROUND-AMENDMENT-PASS-3.md)

Round 5 should therefore be reviewed from the PR Conversation decision trail + these cross-round audit/amendment files. Do not infer that a missing `ROUND-5-CURRENT-TRUTH.md` means the decisions were absent.

### F. Round 6 — Identity / Role / Permission（第六轮——身份 / 角色 / 权限）

Use the replacement-sealed chain, not older superseded Round 6 snapshots:

- [`INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md`](INK-EAST-ROUND-6-CURRENT-TRUTH-R1-R40-V6.md) — controlling Current Truth（当前有效真相）;
- [`ROUND-6-V6-SOURCE-PARITY-PASS.md`](ROUND-6-V6-SOURCE-PARITY-PASS.md);
- [`ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md`](ROUND-6-V6-FROZEN-COMPREHENSIVE-AUDIT.md);
- [`INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md`](INK-EAST-ROUND-6-REPLACEMENT-SEAL-RECORD.md);
- [`INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md`](INK-EAST-ROUNDS-1-6-FINAL-CROSS-AUDIT.md) for cross-round corrections that remain applicable.

Older Round 6 V1–V5 / earlier seal records are Decision Provenance（决策溯源） only and should not be used as controlling truth when they conflict with V6.

### G. Round 7 — Knowledge Graph & Provenance（第七轮——知识图谱与来源溯源）

- [`INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md`](INK-EAST-ROUND-7-CURRENT-TRUTH-V1.md)
- [`INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-A.md`](INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-A.md)
- [`INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-B.md`](INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-B.md)
- [`INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-C.md`](INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-C.md)
- [`INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-D.md`](INK-EAST-ROUND-7-KNOWLEDGE-GRAPH-PROVENANCE-WORKSHOP-D.md)
- [`ROUND-7-V1-ADVERSARIAL-AUDIT.md`](ROUND-7-V1-ADVERSARIAL-AUDIT.md)
- [`INK-EAST-ROUND-7-SEAL-RECORD.md`](INK-EAST-ROUND-7-SEAL-RECORD.md)

### H. Round 8 — Community & Discussion（第八轮——社区与讨论）

- [`INK-EAST-ROUND-8-CURRENT-TRUTH-V1.md`](INK-EAST-ROUND-8-CURRENT-TRUTH-V1.md)
- Workshop A–G（工作坊 A–G）: `INK-EAST-ROUND-8-COMMUNITY-DISCUSSION-WORKSHOP-A.md` … `G.md`
- [`ROUND-8-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`](ROUND-8-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md)
- [`ROUND-8-V1-ADVERSARIAL-AUDIT.md`](ROUND-8-V1-ADVERSARIAL-AUDIT.md)
- [`INK-EAST-ROUND-8-SEAL-RECORD.md`](INK-EAST-ROUND-8-SEAL-RECORD.md)

### I. Round 9 — Reader Behavior & Interest Graph（第九轮——读者行为与兴趣图谱）

- [`INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md`](INK-EAST-ROUND-9-CURRENT-TRUTH-V1.md)
- Workshop A–F（工作坊 A–F）: `INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-A.md` … `F.md`
- [`ROUND-9-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`](ROUND-9-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md)
- [`ROUND-9-V1-ADVERSARIAL-AUDIT.md`](ROUND-9-V1-ADVERSARIAL-AUDIT.md)
- [`INK-EAST-ROUND-9-SEAL-RECORD.md`](INK-EAST-ROUND-9-SEAL-RECORD.md)

### J. Round 10 — Discovery & Recommendation（第十轮——发现与推荐）

- [`ROUND-10-CHECKPOINT-READ-ME.md`](ROUND-10-CHECKPOINT-READ-ME.md) — concise manual entry（简洁人工入口）
- [`INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md`](INK-EAST-ROUND-10-CURRENT-TRUTH-V1.md) — 318 controlling rule slots（318 条控制规则）
- Workshop A–G（工作坊 A–G）: `INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-A.md` … `G.md`
- Local Adversarial Audits / Hardening Addenda（局部对抗审计 / 加固补充）: `ROUND-10-WORKSHOP-*-ADVERSARIAL-AUDIT.md` and `ROUND-10-WORKSHOP-*-HARDENING-ADDENDUM.md`
- [`ROUND-10-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`](ROUND-10-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md)
- [`ROUND-10-V1-ADVERSARIAL-AUDIT.md`](ROUND-10-V1-ADVERSARIAL-AUDIT.md)
- [`INK-EAST-ROUND-10-SEAL-RECORD.md`](INK-EAST-ROUND-10-SEAL-RECORD.md)

### K. Round 11 — Issues / Editorial Curation（第十一轮——议题 / 编辑策展，进行中）

Current detailed rules:

- [`INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-A.md`](INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-A.md)
- [`ROUND-11-WORKSHOP-A-ADVERSARIAL-AUDIT.md`](ROUND-11-WORKSHOP-A-ADVERSARIAL-AUDIT.md)
- [`ROUND-11-WORKSHOP-A-HARDENING-ADDENDUM.md`](ROUND-11-WORKSHOP-A-HARDENING-ADDENDUM.md)
- [`ROUND-11-WORKSHOP-A-PUBLISHED-ISSUE-MUTABILITY-DECISION.md`](ROUND-11-WORKSHOP-A-PUBLISHED-ISSUE-MUTABILITY-DECISION.md)
- [`INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-B.md`](INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-B.md)
- [`ROUND-11-WORKSHOP-B-ADVERSARIAL-AUDIT.md`](ROUND-11-WORKSHOP-B-ADVERSARIAL-AUDIT.md)
- [`ROUND-11-WORKSHOP-B-HARDENING-ADDENDUM.md`](ROUND-11-WORKSHOP-B-HARDENING-ADDENDUM.md)
- [`INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-C.md`](INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-C.md)
- [`ROUND-11-WORKSHOP-C-ADVERSARIAL-AUDIT.md`](ROUND-11-WORKSHOP-C-ADVERSARIAL-AUDIT.md)
- [`ROUND-11-WORKSHOP-C-HARDENING-ADDENDUM.md`](ROUND-11-WORKSHOP-C-HARDENING-ADDENDUM.md)
- [`ROUND-11-WORKSHOP-C-CURRENT-VERSION-DEFAULT-DECISION.md`](ROUND-11-WORKSHOP-C-CURRENT-VERSION-DEFAULT-DECISION.md)
- [`INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-D.md`](INK-EAST-ROUND-11-ISSUES-EDITORIAL-CURATION-WORKSHOP-D.md)
- [`ROUND-11-WORKSHOP-D-ADVERSARIAL-AUDIT.md`](ROUND-11-WORKSHOP-D-ADVERSARIAL-AUDIT.md)
- [`ROUND-11-WORKSHOP-D-HARDENING-ADDENDUM.md`](ROUND-11-WORKSHOP-D-HARDENING-ADDENDUM.md)
- Later Round 11 files will be added here as the round progresses.

---

## 3. How to review a completed Round efficiently / 已完成轮次怎么审最省时间

For a sealed Round（已封存轮次） using the later standardized pattern, use this order:

```text
Current Truth（当前有效真相）
    ↓
Source Parity Pass（来源完整性检查）
    ↓
Full Adversarial Audit（整轮对抗性审计）
    ↓
Seal Record（封存记录）
    ↓
Only open individual Workshop / Addendum files when you want Decision Provenance（决策溯源）
```

For an active Round（进行中轮次）, read:

```text
Workshop（工作坊）
    ↓
Local Adversarial Audit（局部对抗性审计）
    ↓
Hardening Addendum（加固补充）
    ↓
User Decision Record（用户决定记录）, if any
```

For Rounds 1–5（第一至第五轮）, use the specific historical-format guidance in Sections B–E above rather than expecting the later standardized file pattern.

---

## 4. PR-body policy / PR 说明维护规则

PR #53 should remain readable. Therefore the PR description should not duplicate every rule verbatim. It should maintain:

- current sealed / active Round status（当前封存 / 进行中轮次状态）;
- canonical Current Truth / Audit / Seal links（当前有效真相 / 审计 / 封存入口）;
- provisional user choices（暂定用户选择）;
- implementation authorization state（实现授权状态）;
- next subject（下一主题）;
- this Detailed Rule Review Index（详细规则人工审阅索引）.

The full rules remain in versioned repository documents / historical PR decision records so one rule has one controlling source rather than several stale copies.