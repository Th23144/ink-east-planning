# Round 11 — Cross-Workshop Hardening Addendum（第十一轮跨工作坊架构加固补充）

> **Status:** HARDENING ADDENDUM / PRODUCT ARCHITECTURE ONLY（架构加固补充 / 仅产品架构）  
> **Source:** `ROUND-11-CROSS-WORKSHOP-CONSISTENCY-COMPLETENESS-AUDIT.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## R11-CW1 — Canonical Issue version identity is independent from reader access filtering / 议题正式版本身份与读者访问过滤相互独立

**HARD VERSION / ACCESS SAFEGUARD（版本 / 访问硬保护）.**

Latest-valid-first（默认最新有效版本） determines the controlling Issue version lineage first. Rights, privacy, membership or other access policy then determines what the current reader may actually see inside that version.

Access filtering may redact, gate, replace with a permitted placeholder or otherwise restrict representation where policy requires, but it must not silently fabricate a different Issue version identity merely because two readers have different entitlements.

A later policy may explicitly define an alternative eligible representation, but that must remain explainable rather than creating hidden phantom versions.

---

## R11-CW2 — Internal planning relationships are not public graph facts until deliberately published / 内部规划关系在明确公开前不是公共图谱事实

**HARD PRIVACY / PROVENANCE SAFEGUARD（隐私 / 溯源硬保护）.**

An internal candidate topic, possible contributor, draft commission, tentative partner or planned Issue relationship must not automatically create a public Knowledge Graph（知识图谱）, Search（搜索）, Recommendation（推荐） or user-facing relationship.

If the platform later deliberately announces, publishes or otherwise establishes a public relationship, that public fact receives its own provenance and lifecycle.

The system must not expose private editorial intent as though it were an already-established public fact.

---

## R11-CW3 — Repeated curation of the same Work is not repeated independent Recognition evidence / 同一作品被多次策展不等于多份独立作品认可证据

**HARD ANTI-FEEDBACK-LOOP SAFEGUARD（反反馈回路硬保护）.**

The same Work（作品） may legitimately appear in multiple Issues or multiple versions of one Issue. Those inclusion events are valid editorial history, but the platform must not mechanically count them as multiple independent votes proving Work Recognition（作品认可）, factual authority or user trustworthiness.

Likewise, repeated platform-driven exposure originating from repeated Issue placement must remain distinguishable from genuinely independent audience/editorial evidence where later systems consume such signals.

---

## R11-CW4 — Issue-level performance must not be automatically attributed to every included Work or author / 议题整体表现不能自动归因给每个收录作品或作者

**HARD MEASUREMENT SAFEGUARD（测量硬保护）.**

Views, completion, saves, subscriptions, discussion, conversion or other Issue-level outcomes may describe the publication package as a whole.

They do not automatically prove that every included Work, author or placement produced the same outcome.

Object-level attribution should preserve applicable context such as actual exposure, placement, version, reader path and measurement method where material. The architecture must resist halo effects such as:

```text
Issue performs well
→ every included Work is treated as high quality
→ every author gains recommendation / Recognition advantage
```

---

## R11-CW5 — Editorial amendment history is distinct from access / rights visibility history / 编辑修订历史与访问、权利可见性历史必须区分

**HARD HISTORY SEMANTICS（历史语义硬保护）.**

A visible representation may change for different reasons:

- editorial correction or amendment;
- rights/license expiry;
- privacy/consent change;
- legal restriction;
- membership/access policy;
- technical delivery issue;
- another governed cause.

These causes must not be flattened into one generic `changed` state.

A rights-driven image replacement may produce a new Issue representation/version where materially required, but the event remains attributable as a rights/access change rather than being falsely presented as a factual correction to the author’s work.

---

## R11-CW6 — Membership, access and delivery policies layer over stable Issue/version ontology / 会员、访问与投递策略应叠加在稳定议题版本本体之上

**HARD RULE-EVOLVABILITY BOUNDARY（规则可演进硬边界）.**

Future Membership / Reading Room（会员 / 阅读室）, Notifications / Delivery（通知 / 投递） and related access/distribution policies may evolve without redefining what the Issue or historical published version *is*.

Policy changes may alter:

- who can access a representation;
- what preview is allowed;
- which delivery channels are used;
- when a user is notified;
- what archive benefit a membership grants.

They must not retroactively rewrite stable Issue identity, original publication history or underlying authorship/provenance.

---

## Effect / 影响

- Workshop A–E rules remain valid.
- R11-CW1…R11-CW6 are controlling cross-workshop hardening rules for Round 11 consolidation.
- No new product fork is introduced.
- Round 11 is ready for Current Truth（当前有效真相） consolidation.
