# Round 8 — Community & Discussion System（社区与讨论系统） — Workshop D（工作坊 D）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Interaction Modes & Participation Semantics（互动模式与参与语义） — reply presentation, question/answer mode, sharing/reference behavior, reactions, saves, follow/subscribe behavior and participation-mode boundaries.

This workshop records the user's current **provisional acceptance（暂定认可）** of the recommended directions:
- Hybrid / Shallow Threading（混合式 / 浅层线程） for reply presentation;
- First-class Question Mode（一级问答模式） inside the unified Community System（统一社区系统）;
- Reference / Share first（引用 / 分享优先） for V1, with a full Repost Graph（转发关系图） deferred.

These are product directions, not immutable technical constants. Exact visual depth, thresholds, labels and interaction polish remain adaptive under the sealed Rule Evolvability & Change Architecture（规则可演进与变更架构）.

---

## R8-D1 — Reply semantics remain fully preserved even when the UI uses shallow threading / 即使前台采用浅层线程，底层仍完整保留回复关系

**Rule class: CONFIRMED PROVISIONAL PRODUCT DIRECTION / 已暂定产品方向.**

The underlying conversation model preserves which Message（消息） replies to which prior Message, but the UI does not need to indent without limit.

V1 direction: use Hybrid / Shallow Threading（混合式 / 浅层线程） so readers can understand local context without producing an endlessly narrowing tree on mobile.

Exact visible nesting depth is ADAPTIVE（弹性） and must not be hard-coded into message identity.

---

## R8-D2 — Deep reply chains remain navigable without becoming deep visual trees / 深层回复关系可追踪，但不要求无限视觉嵌套

**Rule class: HARDENING / 架构加固.**

When a response targets a message beyond the currently displayed visual depth, the interface may show reply-to identity, quoted context, jump-to-parent, expand-context or equivalent mechanisms.

The product must preserve conversation lineage without forcing every lineage edge to become one more horizontal indentation level.

---

## R8-D3 — Question is a first-class participation mode within the unified community / “问题”作为统一社区中的一级参与模式

**Rule class: CONFIRMED PROVISIONAL PRODUCT DIRECTION / 已暂定产品方向.**

Project 3 should support a native Question Mode（问答模式） rather than treating every question as indistinguishable from an ordinary Discussion Thread（讨论线程）.

A Question remains part of the same unified Community System（社区系统） and may link to Topic（主题）, Place（地点）, Work（作品）, Passage（段落）, Knowledge Entity（知识实体） or other supported targets.

It must not become a separate disconnected “Q&A website inside the website”.

---

## R8-D4 — Answer and Reply remain distinguishable where Question Mode requires it / 在问答模式下，回答与普通回复可以区分

**Rule class: HARD INVARIANT for semantic distinction; exact UI ADAPTIVE / 语义区分为硬边界，具体界面弹性.**

An Answer（回答） responds to the Question itself as a candidate substantive answer. A Reply / Comment（回复 / 评论） may instead discuss, clarify or respond to an Answer or another message.

This allows Question Mode to remain structurally useful without forcing every conversational response to masquerade as a full answer.

---

## R8-D5 — Accepted Answer is attributable workflow metadata, not platform truth / “采纳回答”是可归属的流程信息，不是平台真理

**Rule class: HARD INVARIANT / 硬边界.**

Accepted Answer（采纳回答） may indicate that the question owner or another explicitly authorized workflow actor considered one Answer useful or sufficient.

It does not automatically become Canonical Claim（规范知识主张）, Work Recognition（作品认可）, editorial endorsement（编辑背书） or source authority（来源权威）.

If the product later allows multiple accepted answers, expert selection or editorial highlighting, those must remain distinct attributable states rather than collapsing into one universal “correct answer”.

---

## R8-D6 — Resolved Question and unresolved knowledge disagreement may coexist / 问题已解决与知识争议仍存在可以同时成立

**Rule class: HARD INVARIANT / 硬边界.**

Resolved（已解决） describes product workflow. It does not prove that historical, cultural, factual or interpretive disagreement has ended.

A resolved question may still link to competing Claims（知识主张）, later evidence or renewed discussion.

---

## R8-D7 — V1 prioritizes Reference / Share over a full social Repost Graph / V1 优先引用与分享，不先建设完整社交转发图

**Rule class: CONFIRMED PROVISIONAL PRODUCT DIRECTION / 已暂定产品方向.**

V1 should support Share（分享）, Reference（引用）, Citation / Link（引用 / 链接） and contextual Quote（引用内容） without requiring a full Twitter/X/Weibo-style Repost Graph（转发关系图） from launch.

The goal is to enable circulation and discussion while avoiding early dependence on viral forwarding mechanics, repost-chain ranking and associated governance burden.

---

## R8-D8 — Adding commentary to shared content creates a distinct attributable object when durable / 对分享内容加入实质评论时，应保留独立对象与作者归属

**Rule class: HARD INVARIANT / 硬边界.**

When a user merely shares a link, that does not create a new authored publication by default.

When a user adds durable substantive commentary around another object, the platform may create a distinct Community Publication（社区发布）, Discussion object（讨论对象） or equivalent derivative object that references the original while preserving both authorship and provenance.

The derivative object does not overwrite or absorb the original.

---

## R8-D9 — Future Repost / Quote-post support remains architecturally possible / 未来仍保留转发与引用转发扩展能力

**Rule class: HARDENING under Evolvability Architecture / 可演进架构下的加固规则.**

Deferring a full Repost Graph（转发关系图） in V1 is not a permanent prohibition.

If later product evidence justifies Repost / Quote-post（转发 / 引用转发）, the architecture must preserve original object identity, authorship, deletion/visibility state, propagation references and provenance rather than implementing forwarding as uncontrolled content copying.

---

## R8-D10 — Reaction is lightweight social feedback, not a governance vote by default / 互动反应默认是轻量社交反馈，不等于治理投票

**Rule class: HARD INVARIANT / 硬边界.**

Like / Reaction（点赞 / 互动反应） may express interest, appreciation or social response. It does not automatically equal formal nomination, Recognition voting（认可投票）, truth assessment or moderation judgment.

Exact reaction vocabulary remains DEFERRED CALIBRATION（延后校准）.

---

## R8-D11 — Save / Bookmark is a personal reading action, not public endorsement by default / 收藏默认是个人阅读行为，不等于公开背书

**Rule class: HARD INVARIANT / 硬边界.**

Save / Bookmark（收藏 / 书签） primarily records reader intent to return, organize or remember content.

It must not automatically be exposed as endorsement, reviewer evidence or Recognition support unless a later explicit product rule creates a different action.

---

## R8-D12 — Follow / Subscribe remains distinct from direct participation / 关注与订阅不同于直接参与

**Rule class: HARD INVARIANT / 硬边界.**

Following a Person（人物）, Topic（主题）, Place（地点） or other supported target expresses discovery/delivery preference. It does not itself create a Reply, endorsement, membership, moderation role or representation relationship.

---

## R8-D13 — Create Post, Start Discussion and Ask Question may share composition infrastructure without sharing semantics / 发布内容、发起讨论、提出问题可以共用编辑器基础，但不能混成一种语义

**Rule class: HARD INVARIANT / 硬边界.**

The interface may reuse one Composer（编辑器 / 发布器） framework, but the resulting object must retain whether the user intended to publish a durable Community Publication（社区发布）, open a Discussion（讨论） or ask a Question（问题） where those modes have different lifecycle and interaction behavior.

Implementation convenience must not flatten product semantics.

---

## R8-D14 — Participation permissions remain capability/context based, not one global user rank / 参与权限继续基于能力与情境，不采用单一用户等级

**Rule class: HARD INVARIANT inherited from Round 6 / 继承自第六轮的硬边界.**

The platform may apply different posting, replying, question, link-sharing, quoting or moderation restrictions based on Account × Capability × Context（账户 × 能力 × 情境）, risk and product policy.

This must not reintroduce one universal prestige level that silently controls every community action.

---

## R8-D15 — Participation effects remain separate from ranking / 参与行为与推荐排序继续分离

**Rule class: SCOPE GUARD / 范围护栏.**

Round 8 defines what actions mean. It does not decide how much a Like（点赞）, Reply（回复）, Answer（回答）, Follow（关注）, Save（收藏） or Share（分享） should affect recommendation ranking.

Those weights belong to Reader Behavior / Interest Graph（读者行为 / 兴趣图谱） and Discovery / Recommendation（发现 / 推荐）.

---

## R8-D16 — Interaction rules must remain evolvable / 互动规则必须保持可演进

**Rule class: HARDENING from Rule Evolvability & Change Architecture / 来自规则可演进与变更架构的加固规则.**

Before implementation, mutable interaction policies such as visible reply depth, who may accept an answer, reaction vocabulary, share destinations, edit windows and notification behavior must be classified as Policy（策略）, Configuration（配置）, Workflow（工作流） or other appropriate change class rather than being silently hard-coded into UI behavior.

Material future changes must define Migration（迁移）, Compatibility（兼容）, Rollout（灰度发布）, Rollback（回滚） and Decision Provenance（决策溯源） where relevant.

---

# Current visible product picture / 当前用户可见的产品形态

At this checkpoint, the intended community experience is:

1. one unified Community System（统一社区系统） across Project 3;
2. Home / For You / Domain / Topic / Place / Following / Explore（首页 / 为你推荐 / 领域 / 主题 / 地点 / 关注 / 探索） are projections of the same network;
3. ordinary discussion uses Hybrid / Shallow Threading（混合式 / 浅层线程）;
4. questions use a native Question Mode（问答模式） inside that same network;
5. accepted answers help navigation but do not create truth authority;
6. V1 supports strong sharing, quoting and referencing without launching a full Repost Graph（转发关系图）;
7. reactions, saves and follows remain separate signals with separate meanings;
8. recommendation impact remains deferred to later rounds.

---

# Product choices still intentionally open / 仍然明确开放的产品选择

The following do not block Workshop D and should not be frozen prematurely:

- exact visible reply depth and mobile expansion behavior;
- whether Question Mode（问答模式） allows one or multiple accepted answers in specific contexts;
- who besides the question owner may mark a Question as Resolved（已解决） in special workflows;
- exact reaction set and whether negative reactions exist;
- exact share destinations and external/internal share UI;
- whether a later product version introduces a full Repost / Quote-post Graph（转发 / 引用转发关系图）;
- notification frequency, batching and delivery channels.

These are future Policy / UX Calibration（策略 / 用户体验校准） decisions, not reasons to leave the underlying architecture undefined.

# Next review area / 下一审查区域

Next Round 8 work should examine Community Lifecycle & Participation Boundaries（社区生命周期与参与边界）: creation and closure of discussions/questions, edit/withdrawal behavior at the product level, thread ownership versus moderation authority, participation restriction/suspension boundaries, and how community objects move between active, closed, archived and removed states without collapsing into Governance / Moderation policy that belongs to later rounds.
