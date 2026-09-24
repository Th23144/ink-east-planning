# PR #53 — Supersession Regression Audit V2
# PR #53 —— 已淘汰方向回流审计 V2

> **Status:** DEEP REGRESSION PASS COMPLETE（深度回归检查完成）  
> **Scope:** accepted cross-round corrections A1–A47 + F1–F10 + sealed Round 6–11 Current Truth + Round 12 reopening  
> **Purpose:** verify that later rules have not silently revived product directions already rejected, narrowed or corrected.  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 0. Result / 结论

This deeper pass uses every accepted Rounds 1–6 cross-round correction/amendment as a regression test vector, then checks later Current Truth layers for contradiction or accidental revival.

### Result summary

- **57 / 57 accepted A/F correction vectors:** no later sealed Round 6–11 rule was found to reverse them.
- **1 later active product regression:** Round 12 Workshop A revived the old Membership/paywall/VIP-content direction. This is already reopened and corrected.
- **Multiple documentation hazards:** old Round 3/4, Brief/Roadmap/Handoff/Phase/source-planning files retain stale detail and can mislead a new window.
- **Legacy implementation debt:** the Level 1 source scaffold still contains `reader` / `patron` visibility options and `is_vip`. No code migration is authorized yet.

This does **not** mean every historical file is clean. It means the later controlling architecture is not currently adopting those old directions, except for the Round 12 regression already identified and corrected.

---

# 1. A1–A24 regression checks / 第一批跨轮修正回归检查

| Rule | Regression being tested（检查是否回流的旧方向） | Result | Later-control check |
|---|---|---|---|
| A1 | Platform permanently East-only（平台永久只做东方文化） | PASS | START-HERE keeps Eastern/Chinese culture as initial wedge, not permanent boundary. |
| A2 | Blanket punishment/restrictions merely because account is new（新账号天然受全面限制） | PASS | Round 6 keeps ordinary public actions ordinary; Round 8 community does not require a universal new-user prison. |
| A3 | One permanent monolithic Recognition Board（唯一全局高认可榜） | PASS | Round 10 supports multiple domain/topic/place/discovery surfaces; Recognition remains a state/framework rather than one mandatory page. |
| A4 | Recognition framework applied to every social/content object（所有内容都强行进入作品认可流程） | PASS | Round 8 distinguishes replies/discussions/questions/publications; ordinary social messages are not automatically Recognition objects. |
| A5 | Linear governance-capability ladder as canonical user hierarchy（线性治理等级成为用户层级） | PASS | Round 6 explicitly rejects global levels/prestige ladders; governance permissions are capability/context based. |
| A6 | Reading/consumption behavior treated as broad trust proof（阅读行为直接证明用户可信/专业） | PASS | Round 9 interest evidence is separate from trust/expertise/governance; cultural reading cannot infer sensitive identity/belief. |
| A7 | Contributor-exclusive organic launch support（贡献者身份独享自然流量启动） | PASS | Round 10 exploration/new-item/long-tail mechanisms are platform-wide; paid/status origin cannot masquerade as organic merit. |
| A8 | `Verified Contributor` as one conflated canonical identity（认证身份与贡献者资格混成一个身份） | PASS + DOC HAZARD | Round 6 separates Claim verification from Contributor Qualification + Expertise Scope. Old Round 3/4 terminology remains historical. |
| A9 | Editing/creating an Organization knowledge page grants control/representation（建组织词条就获得控制权） | PASS | Round 6 explicitly separates knowledge-record editing from identity/control/representation. |
| A10 | High-sensitivity staff powers mixed into normal staff/editor account capability（高敏后台权力和普通编辑权限混在一起） | PASS | Round 6 has separate internal security boundary, JIT elevation, audit and domain separation. |
| A11 | Founding Reader becomes a permanent privileged caste（早期读者成为永久特权阶级） | PASS | Round 6 rejects prestige ladder; Round 9 treats behavior as interest/context, not permanent status. |
| A12 | Primary Content Type forced into one false singular category（内容必须被硬塞进一个唯一分类） | PASS | Round 8 controlled content types permit structured semantics without turning classification into universal truth; later graph architecture supports multiple relations. |
| A13 | Transparency requires publishing anti-abuse internals（透明度 = 公开反滥用算法细节） | PASS | Round 6 keeps bounded user-facing explanations while internal anti-abuse formulas remain protected. |
| A14 | Organization attestation loses issuer/authority provenance（机构证明不记录谁有权证明） | PASS | Round 6 Claim/attestation provenance preserves issuer, authorized actor/context, time and lifecycle. |
| A15 | Multi-account linking evidence becomes unrestricted reusable profile/identity data（多账号关联证据变成通用画像数据） | PASS | Round 6 purpose-limits identity linkage; Round 9 prohibits silent use of sensitive/private evidence as recommendation fuel. |
| A16 | `Institution` remains universal organization base type（机构继续作为所有组织的基础类型） | PASS + DOC REPAIR | Round 6 uses Organization base / Institution subtype. A16 historical diagram was annotated because F4 later removes Platform-owned Entity as peer type. |
| A17 | Platform control called legal Ownership by default（平台控制权默认等于法律所有权） | PASS | Round 6 explicitly separates Entity Control Authority from Legal Ownership Claim. |
| A18 | One unique supreme Organization owner required（组织必须只有一个唯一最高所有者） | PASS | Round 6 permits shared highest control and contextual continuity safeguards. |
| A19 | Multi-author/contributor roles flattened into one author field（多人贡献关系压成单一作者） | PASS | Round 6 authorship/contribution relations remain first-class; Issue curation preserves original authorship. |
| A20 | Organization hierarchy automatically inherits control permissions（组织层级自动继承控制权） | PASS | Round 6 explicitly prohibits automatic hierarchy-based permission inheritance. |
| A21 | Premature universal age/guardian/legal rules（过早写死统一年龄/监护规则） | PASS | Round 6 reserves minors/guardian architecture without fixed age/legal assumptions. |
| A22 | Bots/AI agents masquerade as human or act without controller provenance（自动化伪装成人类/无控制者溯源） | PASS | Round 6 treats automation as auditable Actor with controller/authorizer/scope provenance. |
| A23 | Multi-account linkage forces public identity merge（多账号关联强制公开合并身份） | PASS | Round 6 permits multiple personas and prohibits linkage as automatic public merge/permission bridge. |
| A24 | Guardian/executor/representative substitutes for the person's identity（监护/执行人直接继承本人身份） | PASS | Round 6 treats these as scoped Relationships, not identity substitution. |

---

# 2. A25–A36 regression checks / 第二批跨轮修正回归检查

| Rule | Regression being tested | Result | Later-control check |
|---|---|---|---|
| A25 | Editorial/platform discovery becomes positive Recognition evidence（编辑发现本身变成认可证据） | PASS | Round 11 selection/curation does not manufacture Recognition; Round 10 editorial source remains distinct. |
| A26 | Platform-owned/Partner/commercial works get privileged Recognition fast lane（官方/合作/商业作品走认可捷径） | PASS | Round 6 rejects status-origin privilege; Round 11 partner/official status does not guarantee placement/Recognition. |
| A27 | Recognition → exposure → engagement → stronger Recognition self-loop（认可和推荐形成自证循环） | PASS | Round 10 preserves exposure provenance and separates recommendation outcome from authority/Recognition. |
| A28 | Recognized/prestigious incumbents consume all discovery opportunity（已认可/大号吃掉所有探索机会） | PASS | Round 10 explicitly protects exploration, long-tail, new/low-exposure routes and source diversity. |
| A29 | Recommendation learning ignores served context/position/source（推荐训练把平台制造的曝光当自然偏好） | PASS | Round 9/10 preserve Exposure Context / served-source provenance and position/source semantics. |
| A30 | Reviewer anonymity = merely hide display name（评审匿名只隐藏名字但可轻易反推） | PASS | Round 6 carries privacy-aware aggregation/coarsening/delay protections. |
| A31 | Reviewer identity casually visible to ordinary staff/commercial/recommendation systems（评审身份成为普通后台数据） | PASS | Round 6 makes reviewer identity least-privilege, purpose-limited governance data. |
| A32 | Organization attestation automatically grants Contributor Qualification（机构证明直接生成贡献者资格） | PASS | Round 6 explicitly says attestation proves scoped facts, not qualification. |
| A33 | Partner/Organization bulk-mints Contributor Qualification（合作机构批量生成贡献者资格） | PASS | Round 6 explicitly prohibits this. |
| A34 | Reviewer Trust self-validates by agreeing with current majority（评审信任 = 跟多数人一致） | PASS | Round 6 keeps Reviewer Trust separate; Round 3/6 evidence model remains multi-source, not majority self-loop. |
| A35 | Conflict of Interest is only voluntary etiquette（利益冲突只靠自觉申报） | PASS | Round 6 makes COI first-class for consequential cases; Round 11 editorial workflow also supports recusal/reassignment/second review. |
| A36 | Badge/status stacking recreates visible/algorithmic caste（徽章叠加重新制造等级社会） | PASS | Round 6 requires verification to explain what was verified and prevents prestige stacking; Round 10 does not use status density as generic quality. |

---

# 3. A37–A47 regression checks / 第三批跨轮修正回归检查

| Rule | Regression being tested | Result | Later-control check |
|---|---|---|---|
| A37 | Unlimited identical appeal replay loop（相同材料无限重复申诉） | PASS | Round 6 controls duplicate unchanged submissions while permitting materially changed basis. |
| A38 | Filing appeal automatically restores risky capability（提交申诉自动恢复高风险权限） | PASS | Round 6 explicitly says appeal does not automatically restore risky capability. |
| A39 | Appeal / Evidence Reversal / Re-evaluation collapsed into one object（申诉/证据纠错/重新评估混成一个流程） | PASS | Round 6 keeps them distinct. |
| A40 | Account deletion either cascades all public knowledge or guarantees permanent retention of everything（账号删除 = 全删 / 永久全留二选一） | PASS | Round 6 has category-specific lifecycle/data disposition. |
| A41 | Removed cited object disappears with unexplained hard 404 only（被引用对象删除后引用历史断裂） | PASS | Round 6 supports privacy-safe tombstone; Round 11 uses safe tombstone/version history where appropriate. |
| A42 | “Authoritative Classical Text” means every claim inside is true（权威古籍 = 书里每句话都是真理） | PASS | Round 7 explicitly separates provenance/source authority from claim truth. |
| A43 | Canonical/source authority and Work Recognition collapse（来源权威 = 作品认可） | PASS | Round 7 makes this separation foundational; Round 11 curation also cannot transfer authority. |
| A44 | Moderation suppression, recommendation ranking and user preference collapse into one low-exposure cause（低曝光原因全部混成排序） | PASS | Round 8/10 distinguish moderation eligibility, recommendation, follow/mute/negative preference and editorial origin. |
| A45 | Manual/policy suppression can masquerade as neutral ranking with no provenance（人工压制可伪装成正常排序） | PASS | Round 6 requires consequential intervention provenance; Round 10 keeps source/eligibility/ranking distinctions. |
| A46 | Account recovery automatically restores Organization control（找回账号 = 找回机构控制权） | PASS | Round 6 permanently separates these recovery systems. |
| A47 | Organization control transfer transfers personal trust/qualification/governance history（组织控制转移连带继承个人声望/权力） | PASS | Round 6 explicitly prohibits transfer of personal standing/history. |

---

# 4. F1–F10 final cross-audit regression checks / 最终跨轮纠正回归检查

| Rule | Regression being tested | Result | Later-control check |
|---|---|---|---|
| F1 | Universal fixed appeal count resurrected（重新写死统一申诉次数） | PASS | Round 6 says no universal appeal count; materially changed basis may reopen. |
| F2 | Legitimate joint action blocked OR permission fusion allowed（禁止联合行动 / 允许跨主体拼权） | PASS | Round 6 permits Joint Action but prohibits cross-entity authority fusion. |
| F3 | Control continuity interpreted as “organization can never intentionally end without successor”（控制连续性阻止正常注销） | PASS | Round 6 permits explicit closure/dissolution/archive lifecycle. |
| F4 | Platform-owned resurrected as peer entity type（Platform-owned 再次成为顶级实体类型） | PASS + DOC REPAIR | Round 6 Current Truth uses relationship/capacity semantics; A16 historical tree now carries explicit supersession note. |
| F5 | Ordinary users forced into real-world Person resolution（普通用户必须绑定真实人物） | PASS | Round 6 Stable Platform Identity supports pseudonymous/unresolved real-person state. |
| F6 | Anti-abuse correlation becomes factual/public social relation（风控关联证据自动变成公开身份关系） | PASS | Round 6 explicitly prevents this. |
| F7 | Historical Recognition automatically rewritten by current removal/account enforcement（当前撤稿/封号直接改写历史作品认可） | PASS | Round 6 separates historical Recognition from current availability; Round 11 preserves version/lifecycle history. |
| F8 | Served-context provenance interpreted as permanent exhaustive tracking（曝光溯源 = 永久保存所有行为） | PASS | Round 9/10 data minimization/retention/purpose limitation remain explicit. |
| F9 | Editorial non-selection becomes negative Recognition evidence（没被编辑选中 = 作品差 / 降低认可） | PASS | Round 11 explicitly says non-selection is not a quality verdict; editorial selection remains distinct. |
| F10 | Future implementer must reconstruct current truth by replaying old history（实现者必须自己拼旧文档） | **PARTIAL PASS / HARDENED** | Rounds 6–11 have Current Truth files; Rounds 1–5 still have historical-density risk, now mitigated by warning banners + supersession registry. A dedicated Rounds 1–5 clean current-truth consolidation remains a possible documentation-hardening task. |

---

# 5. Later-round regression checks beyond A/F / A/F 之外的后期回归检查

| Vector | Result | Finding |
|---|---|---|
| Unified Community（统一社区） accidentally becomes siloed forums | PASS | Round 8 remains one shared substrate with multiple projections. |
| Interest Graph（兴趣图谱） becomes permanent user identity label | PASS | Round 9 remains temporal, multi-interest, correctable and non-identity. |
| Recommendation becomes one universal score/feed | PASS | Round 10 remains multi-surface/task-specific. |
| Paid Membership or commerce buys organic recommendation | PASS | Round 10 X5 prohibits this. |
| Anonymous session history silently bulk-merges into durable account state | PASS | User-confirmed scoped/transparent handoff remains controlling. |
| Issue fixed eight-slot/core-character format becomes ontology | PASS | Round 11 explicitly rejects fixed template as platform invariant. |
| Issue inclusion manufactures Recognition / author status | PASS | Round 11 explicitly prohibits this. |
| Published Issue silently rewrites history | PASS | Versioned publication + stable historical snapshot controls. |
| Canonical Issue page loses current-version decision | PASS | Latest-valid-first remains user-confirmed provisional direction. |
| Membership reverts to article/Archive/Issue paywall | **FAIL -> CORRECTED** | Round 12 Workshop A did this; scope correction now supersedes the paywall assumptions. |
| Fixed Reader/Patron names/prices/tier count silently become locked again | PASS | Round 12 packaging remains explicitly deferred. |
| Old VIP Library becomes required content ontology | **FAIL RISK -> BLOCKED** | Legacy docs/preview/source fields carry it, but current Round 12 correction rejects it and legacy files are quarantined. |

---

# 6. Legacy-document and implementation contamination findings / 旧文档与实现污染发现

## Historical documents now explicitly quarantined

Warning banners have been added to high-risk sources including:

- `INK-EAST-BRIEF.md`;
- `INK-EAST-ROADMAP.md`;
- `.kiro/steering/ink-east-handoff.md`;
- `PROJECT-CONTROL-MASTER.md`;
- `INK-EAST-SOURCE-ARCHITECTURE.md`;
- `INK-EAST-PHASE-1-SOURCE-PLAN.md`;
- `INK-EAST-PHASE-2-TECHNICAL-DECISION.md`;
- legacy WordPress planning files;
- early Product Architecture Workshop / Decision Log;
- historical Round 3 / Round 4 consolidation;
- `docs/PROJECT-3-CURRENT-HANDOFF.md`;
- Level 1 Task 5 access-model documentation.

## Current authoritative content supplement repaired

`docs/INK-EAST-CONTENT-KNOWLEDGE-SYSTEM-V1.md` was aligned so historical `VIP Long Read` language no longer implies current paywalled/member-only content, and stale contributor vocabulary no longer overrides Contributor Qualification semantics.

## Round 11 sealed blob preserved; later scope correction controls externally

Round 11 Current Truth remains byte-for-byte in its sealed/current-truth form. Its generic access/gating wording must be interpreted together with the later `ROUND-12-PUBLIC-CONTENT-MEMBERSHIP-SCOPE-CORRECTION.md`, which has later scope precedence for Membership semantics. No post-seal edit is used to rewrite Round 11 history.

## High-precedence A16 repaired

The Rounds 1–6 amendment record now explicitly notes that F4 supersedes the old `Platform-owned Entity` peer-type portion of A16.

## Legacy implementation debt discovered

Actual prototype source still contains:

- `apps/web/src/fields/visibilityField.ts` → `reader`, `patron`;
- `apps/web/src/collections/Articles.ts` → `is_vip`.

These are **not current product truth**. No code change is authorized in PR #53; future implementation must reconcile/migrate them after Product Architecture is complete.

---

# 7. Remaining risk / 剩余风险

The earlier Round 1–5 handoff gap has now been materially closed by:

- `INK-EAST-ROUNDS-1-5-CURRENT-TRUTH-SAFETY-CONSOLIDATION-V1.md`;
- `ROUNDS-1-5-SAFETY-CONSOLIDATION-SOURCE-PARITY-PASS.md` — PASS AFTER HARDENING.

This is intentionally a safe current-reading/material-parity layer rather than a verbatim archive replay. Historical Decision Provenance（决策溯源） remains in the original Round records and PR comments.

No unresolved material Round 1–5 handoff blocker remains at this checkpoint. The project-wide final Full Comprehensive Adversarial Audit（全量综合对抗性审计） after sequence 1–16 still remains mandatory.

---

# 8. Gate status / 闸门状态

**Regression verdict:**

- Sealed Round 6–11 current architecture: **PASS against accepted supersession vectors**.
- Historical Round 1–5/legacy files: **high contamination risk, now quarantined and indexed**.
- Round 12 Workshop A: **real regression found, reopened and partially superseded**.
- Legacy source schema: **migration debt recorded; no code changes authorized**.
- Next Product Architecture workshop: **PAUSED**.
- Merge: **NOT AUTHORIZED**.
- Implementation: **NOT AUTHORIZED**.
