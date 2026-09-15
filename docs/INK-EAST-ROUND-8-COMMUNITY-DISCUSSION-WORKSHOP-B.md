# Round 8 — Community & Discussion System / 社区与讨论系统 — Workshop B / 工作坊 B

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: conversation topology, message/reference semantics, edit/history behavior, thread lifecycle, cross-thread movement and the boundary between Community & Discussion（社区与讨论） and later Governance / Behavior / Recommendation（治理 / 行为 / 推荐） rounds.

This batch intentionally avoids forcing genuine product forks that do not need to be decided yet. It establishes durable boundaries first, while preserving later choices such as exact nesting depth, user-created spaces, native Q&A form and repost-style social mechanics.

Standing project-wide constraint: all material community rules must remain compatible with the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

---

## R8-B1 — Thread identity is durable and independent from title, URL or current placement / 讨论线程身份独立于标题、网址和当前位置

**Rule class: HARD INVARIANT / 硬边界.**

A Discussion Thread（讨论线程） that needs durable reference must have a stable internal identity. Renaming, moving, retagging or changing its public URL must not silently create a new thread or destroy historical references.

Redirect（重定向） or alias（别名） may preserve navigation where appropriate, but navigation continuity does not erase thread history.

---

## R8-B2 — Message identity is distinct from rendered position / 消息身份与展示位置分离

**Rule class: HARD INVARIANT / 硬边界.**

A Reply / Comment / Message（回复 / 评论 / 消息） that participates in durable conversation should have its own stable identity rather than being identified only by list position, page number or current sort order.

Changing ranking, pagination or presentation must not change which message a reply, quote, report or deep link refers to.

---

## R8-B3 — Reply relation and display topology are different concerns / 回复关系与展示拓扑分离

**Rule class: HARD INVARIANT for relation semantics; presentation ADAPTIVE / 关系语义为硬边界，展示方式弹性.**

The system must be able to represent what message a response is replying to where that relation matters. The UI may later choose flat, shallow-threaded, nested or hybrid presentation without redefining historical reply relationships.

Exact maximum nesting depth is deliberately deferred.

---

## R8-B4 — Quote is a reference action, not a copy that becomes independent truth / 引用回复是引用关系，不是复制后独立成真

**Rule class: HARD INVARIANT / 硬边界.**

A Quote（引用） should preserve a reference to the quoted message/object. Where quote drift would materially damage context, the system may also preserve a bounded snapshot or excerpt sufficient to reconstruct what was quoted at that time.

The copied excerpt does not replace the original object's provenance or authority.

---

## R8-B5 — Mention is social addressing, not authority, endorsement or consent / 提及是社交寻址，不代表权威、背书或同意

**Rule class: HARD INVARIANT / 硬边界.**

A Mention（提及） may create a reference or notification to an Account / Display Identity / relevant Actor（账户 / 展示身份 / 相关行为主体）. Being mentioned does not make that person responsible for the content, does not imply endorsement, and does not itself grant permission to act on their behalf.

Notification behavior remains configurable and privacy-aware.

---

## R8-B6 — Deep links preserve the intended conversational target / 深链接必须指向原本 intended 的讨论对象

**Rule class: HARDENING / 架构加固.**

Where a thread/message has a durable permalink or deep link（永久链接 / 深链接）, later sorting, pagination, moderation state or UI redesign should not silently redirect that reference to a different message or conversation.

If the target is lawfully unavailable, the system may show an appropriate privacy-safe Tombstone（隐私安全占位记录） or unavailable state rather than fabricating replacement content.

---

## R8-B7 — Canonical passage references use stable Round 7 anchors / 古籍正文引用沿用第七轮稳定锚点

**Rule class: HARD INVARIANT inherited from Round 7 / 继承自第七轮的硬边界.**

Discussion that cites a Work / Edition / Segment / Passage（作品 / 版本 / 分段 / 段落） should use the stable source-aware addressing model already established by Round 7 where material.

Community convenience links must not degrade a precise source reference into a generic page URL when the underlying target is known.

---

## R8-B8 — Material edits preserve meaningful conversation history / 实质性编辑保留有意义的对话历史

**Rule class: HARD INVARIANT for material changes; exact retention ADAPTIVE / 实质性变化为硬边界，具体保留方式弹性.**

A typo fix（错字修正） need not be treated like a new publication. But an edit that materially changes the meaning of a message after replies, quotes, moderation action or durable citation must not silently rewrite the historical conversation.

Possible mechanisms include revision history（修订历史）, supersession（取代关系）, edit marker（编辑标记） or retained decision-time snapshot（决策时快照）. Exact product treatment is deferred.

---

## R8-B9 — Deletion, withdrawal, hiding and moderation removal are distinct / 删除、撤回、隐藏与审核移除必须区分

**Rule class: HARD INVARIANT / 硬边界.**

User deletion request（用户删除请求）, author withdrawal（作者撤回）, moderator hiding/removal（审核隐藏 / 移除）, legal removal（法律移除）, account-level privacy action（账户级隐私处理） and spam cleanup（垃圾内容清理） are not one generic deleted state.

Exact retention and visibility rules belong to Governance / Moderation（治理 / 审核）, but Round 8 must preserve enough state distinction for those later policies to exist safely.

---

## R8-B10 — Conversation integrity does not override privacy or legal deletion / 对话完整性不能凌驾于隐私或法律删除

**Rule class: HARD INVARIANT / 硬边界.**

The desire to preserve reply context is not a universal excuse to retain content that must lawfully be deleted or minimized. Where full content cannot remain, the platform may preserve a minimal lawful structural record if permitted.

Historical integrity and privacy/legal obligations must be reconciled explicitly rather than assuming either side always wins.

---

## R8-B11 — Open, Closed, Locked, Archived and Resolved remain separate lifecycle semantics / 开放、关闭、锁定、归档、已解决保持独立语义

**Rule class: HARD INVARIANT for semantic separation; exact state set ADAPTIVE / 语义分离为硬边界，具体状态集合弹性.**

A thread being Closed（关闭） or Locked（锁定） means conversation behavior changed; Archived（归档） means lifecycle/visibility treatment changed; Resolved（已解决） may represent a product workflow outcome.

None of these states automatically means the underlying factual or scholarly issue is settled.

---

## R8-B12 — Resolution is workflow metadata, not epistemic settlement / “已解决”是流程元数据，不是知识真理结论

**Rule class: HARD INVARIANT / 硬边界.**

If the product later supports Question / Answer（问题 / 回答） behavior, an accepted answer or resolved thread may help readers navigate a conversation, but it must not automatically become a canonical Claim（知识主张）, Work Recognition（作品认可） or source authority decision.

Whether native Question / Answer is a first-class content type is still deferred as a genuine product choice.

---

## R8-B13 — Reporting is moderation input, not proof of wrongdoing / 举报是审核输入，不是违规事实证明

**Rule class: HARD INVARIANT / 硬边界.**

Report / Flag（举报 / 标记） is a user or system signal that may start review. It does not itself prove spam, harassment, misinformation, impersonation or another violation.

Exact reporting categories, thresholds, abuse controls and enforcement consequences belong to Governance / Moderation（治理 / 审核）.

---

## R8-B14 — Moderation action preserves actor, basis and target provenance where consequential / 重要审核动作保留行为主体、依据与目标溯源

**Rule class: HARDENING inherited from Round 6 and Evolvability Architecture / 继承自第六轮与规则可演进架构的加固规则.**

Consequential community actions such as lock, remove, restore, move, merge or split should preserve enough Decision Provenance（决策溯源） to know what was acted on, under what policy/rule version, by which authorized Actor / Acting Context（行为主体 / 行为情境）, and with what outcome, subject to privacy rules.

This does not decide the future moderation policy itself.

---

## R8-B15 — Moving a thread does not rewrite its original identity or authorship / 移动线程不得重写原身份或作者关系

**Rule class: HARD INVARIANT / 硬边界.**

If a thread is moved between Topic / Space / Knowledge target（主题 / 空间 / 知识目标） for organization or moderation, that move must not silently create a new author, erase the original context, or make it appear that the thread was originally created in the destination context.

Material moves should preserve appropriate provenance.

---

## R8-B16 — Merge and split are explicit conversation corrections / 合并与拆分属于显式讨论结构修正

**Rule class: HARDENING / 架构加固.**

If duplicate threads are merged or one mixed thread is split for product/moderation reasons, the platform should preserve source identity, redirects/references and sufficient provenance rather than silently rewriting all messages as if the final structure had always existed.

Merge/split must not mechanically transfer authority, recognition or knowledge truth.

---

## R8-B17 — Cross-post, repost and share are not silently the same object / 跨发、转发与分享不得静默视为同一对象

**Rule class: HARD INVARIANT for identity/provenance; product mechanics DEFERRED / 身份与溯源为硬边界，产品机制延后决定.**

If the platform later supports Cross-post（跨发）, Repost（转发） or Quote-post（引用转发）, the architecture must distinguish reference/republication/derivative context from the original object and preserve authorship/provenance.

Round 8 Workshop B does not yet decide whether a social-network-style repost graph exists in V1.

---

## R8-B18 — Duplicate conversation detection does not authorize automatic identity collapse / 重复讨论检测不能自动授权身份合并

**Rule class: HARD INVARIANT / 硬边界.**

Two threads about the same passage/topic are not automatically duplicates. Automated or moderator-assisted duplicate detection may propose merge/linking, but similarity alone must not silently collapse distinct conversations.

---

## R8-B19 — Direct/private messaging is outside current Round 8 scope / 私信系统不属于当前第八轮范围

**Rule class: SCOPE GUARD / 范围护栏.**

Private Message / Direct Message（私信 / 直接消息） has materially different privacy, abuse, notification, retention and safety requirements from public community discussion. It must not be smuggled into the public Discussion Thread model by implementation convenience.

If Project 3 later adds private messaging, it requires its own architecture treatment.

---

## R8-B20 — Search/indexing of conversation must preserve visibility and lifecycle constraints / 讨论搜索与索引必须尊重可见性和生命周期约束

**Rule class: HARD INVARIANT / 硬边界.**

Search Index（搜索索引）, cache（缓存）, notification payload（通知载荷） or recommendation materialization（推荐派生数据） must not keep serving community content beyond the effective visibility/privacy/moderation state merely because derived data is stale.

The sealed Rule Evolvability Architecture（规则可演进架构） therefore applies directly: state/policy changes require defined invalidation or re-evaluation behavior.

---

## R8-B21 — Notification is a derived effect, not the authoritative conversation record / 通知是派生效果，不是讨论权威记录

**Rule class: HARD INVARIANT / 硬边界.**

A notification about a reply, mention, quote or moderation event is a delivery artifact. It must not become the only authoritative record of what occurred, nor keep a stronger visibility entitlement than the underlying object.

Exact notification channels, preferences, batching and frequency are deferred.

---

## R8-B22 — Conversation mechanics are versionable policies where change is realistic / 讨论机制中现实可能变化的部分必须可版本化演进

**Rule class: HARDENING from project-wide Evolvability Architecture / 来自项目级规则可演进架构的加固规则.**

Rules such as edit behavior, thread lifecycle transitions, duplicate handling, quoting semantics, movement/merge permissions and moderation routing must be classified as Core Invariant（核心不变量）, Policy（策略）, Configuration（配置）, Workflow（工作流） or Algorithm（算法） before implementation where material.

Future changes must define Migration（迁移）, Compatibility（兼容）, Rollout（灰度发布）, Rollback（回滚） and Decision Provenance（决策溯源） where consequence warrants it.

---

# Genuine product forks deliberately not decided in Workshop B / 工作坊 B 暂不替用户决定的真实产品分叉

The following remain open because different choices produce materially different products:

1. User-created Groups / Communities / Spaces（用户创建群组 / 社群 / 空间） in V1 versus primarily Topic/content-linked community surfaces（主题 / 内容关联型社区）.
2. Exact reply presentation model: unlimited nested tree（无限嵌套树）, shallow threading（浅层线程）, or flat/hybrid conversation（扁平 / 混合讨论）.
3. Native Question / Answer / Accepted Answer（原生问答 / 采纳答案） as first-class product structure versus Discussion subtype（讨论子类型）.
4. Social repost / quote-post graph（社交式转发 / 引用转发关系图） versus reference/share-only mechanics（仅引用 / 分享机制）.

These forks do not block the invariant conversation architecture above. They can be decided when the next Round 8 batch reaches the corresponding product surface.

---

# Cross-round and project-wide compatibility / 跨轮次与项目级兼容

Workshop B preserves:
- Round 6 Identity / Role / Permission（身份 / 角色 / 权限） and Acting Context（行为情境） boundaries;
- Round 7 stable citation/provenance and correction history;
- Round 8 Workshop A publication/discussion/private-note separation;
- Rule Evolvability & Change Architecture（规则可演进与变更架构） E1–E27;
- community engagement != truth / recognition / source reliability;
- moderation state != epistemic truth;
- report != guilt;
- technical derived data != authoritative policy state.

# Next review area / 下一审查区域

Workshop C should examine Community Surface & Participation Structure（社区表面与参与结构）: Topics（主题）, spaces/communities（空间 / 社群）, following/subscription（关注 / 订阅）, participation entry points（参与入口）, publication-to-discussion relationships（发布与讨论关系）, and the genuine fork around whether V1 permits user-created community spaces.

Exact feed ranking, behavioral interest signals and recommendation weights remain deferred to Reader Behavior / Interest Graph（读者行为 / 兴趣图谱） and Discovery / Recommendation（发现 / 推荐） rounds. Exact enforcement policy remains deferred to Governance / Moderation（治理 / 审核）.