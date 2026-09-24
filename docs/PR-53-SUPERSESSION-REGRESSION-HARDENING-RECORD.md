# PR #53 — Supersession Regression Hardening Record
# PR #53 —— 已淘汰方案回流防护加固记录

> **Status:** HARDENING COMPLETE FOR CURRENT CHECKPOINT（当前检查点加固完成）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Merge:** NOT AUTHORIZED（未授权合并）

---

## 1. Regression test result / 回归测试结果

Preferred audit:

`docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V2.md`

Result:

- accepted cross-round regression vectors A1–A47 + F1–F10: **57 / 57 no later sealed Round 6–11 reversal found**;
- Round 12 Workshop A: **one real active regression found** — old Membership/paywall/VIP-content assumptions returned;
- Round 12 is reopened / paused and the paywall assumptions are superseded by `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

---

## 2. Legacy-document quarantine / 旧文档隔离

Verified warning banners are present on the high-risk legacy/current-looking files identified by this regression-hardening pass, including later-added Round 12 and superseded Round 6/older seal records.

They include:

- early Brief / Roadmap / Kiro handoff;
- old Project Control Master;
- pre-PR#53 source architecture / Phase 1 / Phase 2 plans;
- legacy WordPress field/implementation/link maps;
- legacy Design Constraints;
- historical static-gap / static-completion / static-review files;
- Level 1 Task 4 / 5 / 7 prototype docs;
- apps/web README precedence warning;
- early Product Architecture Workshop / Decision Log;
- historical Round 3 / Round 4 consolidations;
- old-named `PROJECT-3-CURRENT-HANDOFF.md`.

These warnings do not delete history. They prevent old files from presenting themselves as safe standalone current truth.

---

## 3. New current guards / 新增当前护栏

Created:

- `docs/PROJECT-3-SUPERSEDED-DIRECTION-REGISTRY-V1.md` — explicit OLD → CURRENT map for superseded directions;
- `docs/INK-EAST-ROUNDS-1-5-CURRENT-TRUTH-SAFETY-CONSOLIDATION-V1.md` — safe modern reading layer for Rounds 1–5;
- `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V1.md`;
- `docs/PR-53-SUPERSESSION-REGRESSION-AUDIT-V2.md`;
- `docs/ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`.

`PROJECT-3-START-HERE.md` and the PR #53 detailed review index now route future windows through these guards before historical files.

---

## 4. Current-truth repairs / 当前真相修复

- `INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md`: historical `VIP Long Read` language no longer implies member-only/paywalled content; contributor vocabulary aligned to current qualification semantics.
- Round 11 Current Truth remains unmodified as a sealed record; the later Round 12 scope correction externally controls Membership/paywall interpretation.
- Rounds 1–6 amendment A16: explicit F4 supersession note added for the old `Platform-owned Entity` peer-type diagram.
- Round 6 V6 Current Truth was restored to its exact frozen blob `bf32db1e213194ab95701e66cf1dc55138a01035`; its later replacement seal and START-HERE control current lifecycle status rather than rewriting the frozen file.

---

## 5. Legacy implementation-schema debt / 旧实现字段技术债

Actual Level 1 source still contains:

- `apps/web/src/fields/visibilityField.ts`: `reader` / `patron`;
- `apps/web/src/collections/Articles.ts`: `is_vip`.

These are recorded as historical prototype/migration debt.

**No product code was changed.**

Future implementation must not preserve/remove/migrate these fields until implementation is separately authorized and final Round 12 Membership/public-content architecture is complete.

---

## 6. Remaining documentation risk / 剩余文档风险

Rounds 1–5 now have:

- a safe current-reading consolidation;
- a dedicated Material Source Parity Pass（重大规则来源完整性检查） with **PASS AFTER HARDENING**.

The parity pass found and repaired material omissions before passing, including Round 3 negative/evidence-insufficient/revalidation lifecycle, Round 4 qualification/integrity/organization semantics, Round 5 final mature-platform additions and additional integrity/Sybil details.

Detailed historical wording still remains in Decision Provenance（决策溯源） rather than being duplicated verbatim. No unresolved material Round 1–5 handoff blocker remains.

The project-wide final Full Comprehensive Adversarial Audit（全量综合对抗性审计） after sequence 1–16 remains mandatory.

---

## 7. Mandatory future gate / 后续强制闸门

Before every remaining Product Architecture workshop:

1. identify the domain;
2. read START-HERE;
3. read Superseded Direction Registry（已淘汰方向登记表）;
4. compare legacy plans against current truth;
5. classify discovered old behavior as CURRENT / SUPERSEDED / PROVENANCE-ONLY / UNRESOLVED;
6. do not revive a superseded plan without explicit user choice;
7. run a regression-specific adversarial check before sealing the workshop.

---

## 8. Current gate state / 当前闸门状态

- Round 6–11 sealed current architecture: regression PASS.
- Round 12 Workshop A: REOPENED / NON-CONTROLLING historical provenance.
- Round 12 packaging: DEFERRED.
- Membership paywall/content-unlock direction: SUPERSEDED / NOT AUTHORIZED.
- Pre-resume full checkpoint audit: PASS AFTER FINAL HARDENING.
- Mainline: RESUMED at Round 12 Workshop B — Membership Value Proposition & Benefit Catalogue（会员价值主张与权益清单）.
- Implementation: NOT AUTHORIZED.
- Merge: NOT AUTHORIZED.
