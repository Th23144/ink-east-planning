# Round 14（第十四轮）— Appeal / Review / Restoration Discussion V1
# 第十四轮——申诉 / 复核 / 恢复机制讨论 V1

> **Status（状态）:** RESOLVED / SUPERSEDED BY RESOLUTION（已解决 / 由结论文档接管）
> **Implementation（实现）:** NOT AUTHORIZED（未授权）
> **Merge（合并）:** NOT AUTHORIZED（未授权）
> **Prerequisite（前置）:** `ROUND-14-GOVERNANCE-MODERATION-CORRECTIONS-FOUNDATION-RESOLUTION-V1.md`

---

## 1. Why “appeal allowed（允许申诉）” is not enough

A platform does not have a meaningful Appeal（申诉） system merely because there is a button.

A real system must answer:
- who may appeal（谁可以申诉）;
- which decisions are appealable（哪些决定可申诉）;
- who reviews the appeal（谁复核申诉）;
- whether the original decision-maker may review their own decision（原决定者能否复核自己的决定）;
- whether a second review exists（是否存在第二次复核）;
- when human review is mandatory（何时必须人工介入）;
- what happens when a decision is reversed（决定被推翻后如何恢复）;
- how repeated abusive appeals are handled（如何处理恶意重复申诉）.

---

## 2. Proposed appealability by impact（建议按影响程度决定可申诉性）

### Low-impact operational actions（低影响操作性处理）
Examples:
- spam hiding（垃圾内容隐藏）;
- rate limits（速率限制）;
- minor content formatting action（轻微内容格式处理）.

Possible model:
- lightweight review or no formal multi-stage appeal（轻量复核，或不进入正式多级申诉）;
- clear reason where feasible（可行时提供明确理由）.

### Medium-impact actions（中影响处理）
Examples:
- temporary comment/reply restriction（临时评论 / 回复限制）;
- content removal（内容删除）;
- limited capability suspension（特定能力临时停用）.

Possible model:
- one formal appeal（一次正式申诉）;
- reason + evidence category（理由 + 证据类型）;
- review by a different reviewer/system path where practical（可行时由不同复核者 / 路径处理）.

### High-impact actions（高影响处理）
Examples:
- account suspension（账户停用）;
- Contributor Qualification（贡献者资格） removal;
- Organization Verification（组织验证） removal;
- Recognition（认可） withdrawal;
- major archival/source status removal（重大档案 / 来源状态撤销）.

Possible model:
- formal appeal right（正式申诉权）;
- stronger evidence/provenance record（更强证据 / 来源记录）;
- independent second review（独立第二次复核）;
- mandatory human review in defined cases（特定情况强制人工复核）;
- explicit restoration path（明确恢复路径）.

---

## 3. The original decision-maker should not be the sole appeal reviewer（原决定者不应独自复核自己的决定）

A core fairness principle:

> **The person/system that made a consequential decision should not be the only authority reviewing the appeal against that same decision.（作出高影响决定的人 / 系统，不应成为该申诉的唯一复核者。）**

Possible structures:
- different human reviewer（不同人工复核者）;
- human review after automated action（自动处理后转人工复核）;
- second-stage reviewer for high-impact cases（高影响案件第二阶段复核）.

Exact staffing remains later.

---

## 4. Human review should be mandatory only where justified（人工复核应在确有必要时强制）

Human review may be mandatory for:
- permanent/long account suspension（永久 / 长期账户停用）;
- removal of Contributor Qualification（贡献者资格）;
- removal of Organization Verification（组织验证）;
- withdrawal of Recognition（认可）;
- disputed high-value/source-sensitive cultural records（有争议的重要 / 来源敏感文化记录）;
- cases where automation cannot reliably interpret context（自动机制无法可靠理解上下文的案件）.

Routine spam and obvious abuse need not consume the same process.

---

## 5. Appeal is not permission for endless relitigation（申诉不等于无限重复重审）

The system should distinguish:
- a legitimate first appeal（合法首次申诉）;
- new evidence / changed circumstances（新证据 / 情况变化）;
- repetitive appeal with no new basis（无新依据的重复申诉）;
- abusive appeal behavior（滥用申诉机制）.

Possible rule:
> a closed case may be reopened when material new evidence exists（出现实质性新证据时可重新开启已关闭案件）.

This avoids both infinite loops and irreversible mistakes.

---

## 6. Restoration must repair the affected state（恢复必须真正修复受影响状态）

If an appeal succeeds, restoration should not merely say “appeal accepted（申诉成功）”.

Where applicable, the system should restore:
- content visibility（内容可见性）;
- capability access（能力访问）;
- qualification status（资格状态）;
- Recognition（认可） status;
- profile / organization verification（个人资料 / 组织验证）;
- related metadata/history（相关元数据 / 历史）.

The record may retain:
- original action（原处理）;
- appeal result（申诉结果）;
- restoration date（恢复日期）;
- reason for reversal（推翻原因）.

The platform should not erase its own mistake from history by default.

---

## 7. Role differences may affect process, not fairness（角色差异可以影响流程，但不能影响公平）

Contributor（贡献者）, ordinary user（普通用户）, Organization（组织）, partner（合作方）, Member（会员）, Early Co-builder（早期共建者） may have different relevant capabilities or records.

However:
- payment does not buy better appeal outcomes（付费不能购买更好的申诉结果）;
- Early Co-builder（早期共建者） status does not shield enforcement;
- partner/commercial status does not receive hidden leniency（合作 / 商业关系不获得隐藏宽待）.

Process may differ because the affected capability differs, not because one identity is socially superior.

---

## 8. Current decision set（当前决策题）

1. Should appeal rights scale with decision impact rather than every action using the same process?
2. Should the original decision-maker be prevented from being the sole reviewer for consequential appeals?
3. Should defined high-impact cases require human review?
4. Should repeated appeals require material new evidence or changed circumstances after the first full review?
5. If an appeal succeeds, should the platform restore the affected state and preserve a transparent reversal history rather than silently deleting the prior action?


Resolution（结论）: `ROUND-14-APPEAL-REVIEW-RESTORATION-RESOLUTION-V1.md`.
