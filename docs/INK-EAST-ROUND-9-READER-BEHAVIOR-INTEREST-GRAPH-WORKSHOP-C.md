# Round 9 — Reader Behavior & Interest Graph（读者行为与兴趣图谱） — Workshop C（工作坊 C）

Status: **PROPOSED / REVIEW IN PROGRESS（提案中 / 审查进行中）**. Product architecture only（仅产品架构）. No implementation authorization（未授权实现）.

Scope: Interest Derivation, Confidence & User Correction（兴趣推导、置信与用户纠错） — define how signals become inferred interests without fake precision, how contradictory evidence is handled, and how users can correct personalization before the later Discovery & Recommendation（发现与推荐） round.

Inputs:
- `docs/ROUND-9-PREWORKSHOP-MATURE-PLATFORM-RECOMMENDATION-BENCHMARK-V1.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-A.md`
- `docs/INK-EAST-ROUND-9-READER-BEHAVIOR-INTEREST-GRAPH-WORKSHOP-B.md`

Standing principle: **Inferred Interest（推断兴趣） is a revisable system hypothesis about relevance, not a declaration of who the user is.**

---

## R9-C1 — Inference is a hypothesis, not user identity truth / 推断是系统假设，不是用户身份真相

**HARD INVARIANT（硬边界）.**

A derived interest, cluster or relevance feature represents a current system hypothesis for personalization. It must not be presented internally or externally as a permanent statement of identity, belief, expertise or character.

---

## R9-C2 — Signal combination is task-specific, not one master formula / 信号组合必须按任务解释，不采用一个总公式

**HARD INVARIANT（硬边界）.**

Different downstream tasks may combine behavior differently. Home / For You（首页 / 为你推荐）, Search（搜索）, Related Content（相关推荐）, Notifications（通知） and Topic / Place（主题 / 地点） surfaces do not require one universal formula.

Round 9 does not authorize one master `interest_score` controlling all personalization.

---

## R9-C3 — Explicit user actions retain stronger interpretive authority over inferred state within their scope / 用户明确操作在对应范围内对系统推断具有更强纠错力

**HARD PRODUCT DIRECTION（产品级硬方向）.**

When a user explicitly follows, unfollows, chooses an interest, marks Not Interested（不感兴趣）, selects Show Less（少看） or otherwise directly corrects recommendations, the system must treat that action as intentional evidence within the action's declared scope.

This does not mean one action universally erases all other historical evidence.

---

## R9-C4 — Explicit negative feedback is scoped, not globally destructive / 明确负反馈按范围生效，不做全局破坏

**HARD INVARIANT（硬边界）.**

Not Interested（不感兴趣） in one item, creator, Topic（主题）, Place（地点）, content type or surface must retain its target scope.

The platform must not silently turn “少看这个作者” into “用户不喜欢整个文化领域”.

---

## R9-C5 — Contradictory evidence is preserved rather than forcibly averaged away / 相互矛盾的证据应保留，不强行平均掉

**HARD INVARIANT（硬边界）.**

A user may repeatedly read one Topic while also choosing Show Less for one subtype; may follow a creator but skip a particular series; may search a subject intensely for one week and ignore it later.

The model must allow contradictory or context-specific evidence to coexist until downstream interpretation resolves it for a particular task.

---

## R9-C6 — Confidence is local to a derived relation/state / 置信度只属于具体推断关系或状态

**HARD INVARIANT（硬边界）.**

If confidence/uncertainty is represented, it belongs to a specific inferred interest, target, cluster, time horizon or model output.

No universal “how well we know this user” score may silently govern all recommendation behavior.

---

## R9-C7 — Confidence need not be exposed as a fake percentage / 置信度不要求展示成伪精确百分比

**HARDENING（架构加固）.**

Internal confidence may be modeled numerically where technically useful, but product architecture must not require statements such as “83% interested in architecture” unless such precision is genuinely meaningful and explainable.

User-facing explanations should favor understandable reasons over pseudo-scientific precision.

---

## R9-C8 — No fixed universal promotion threshold from emerging to durable interest / 不设置统一固定的“新兴兴趣→长期兴趣”门槛

**ADAPTIVE RULE（弹性规则）.**

Promotion between interest lifecycle states may depend on signal family, repetition, time spread, target type, content type and explicit preference.

Exact thresholds remain DEFERRED CALIBRATION（延后校准）.

---

## R9-C9 — Content consumption and content creation are different evidence / 阅读行为与创作行为是不同证据

**HARD INVARIANT（硬边界）.**

Publishing a post, answering a Question（问题） or correcting a factual error may indicate expertise, obligation, disagreement or professional activity rather than consumption preference.

Creation/participation signals may inform relevance while remaining distinct from reader-interest evidence.

---

## R9-C10 — Co-consumption does not prove semantic equivalence / 经常一起消费不等于内容语义相同

**HARD INVARIANT（硬边界）.**

Collaborative patterns such as “users who read A often read B” may support retrieval or exploration, but must not rewrite Knowledge Graph（知识图谱） ontology or claim that A and B are conceptually identical.

Behavioral correlation is not knowledge identity.

---

## R9-C11 — Similar-user / collaborative inference is a candidate signal, not user identity / 相似用户推断只能是候选信号，不是用户身份

**HARD INVARIANT（硬边界）.**

Collaborative Filtering（协同过滤）, Lookalike（相似用户） or cohort-based models may predict useful candidates, but must not assign durable identity/authority labels merely because behavior resembles another cohort.

---

## R9-C12 — Popularity may help cold-start retrieval without becoming personal preference / 热度可以辅助冷启动召回，但不能冒充个人兴趣

**ADAPTIVE RULE（弹性规则）.**

Popular, trending, editorially curated or broadly useful content may serve users with weak personalization history, but its inclusion must not create a false derived claim that the user already prefers it.

---

## R9-C13 — Negative inference from silence requires repeated contextual evidence / 从“沉默”推断负偏好需要重复且有情境的证据

**HARDENING（架构加固）.**

Repeated meaningful exposure without engagement may become weak negative evidence in some contexts, but only when actual exposure, position, opportunity and competing intent are reasonably known.

It remains weaker/different from explicit Not Interested（不感兴趣）.

---

## R9-C14 — Satisfaction cannot be inferred from attention alone / 不能只靠注意力推断满意度

**HARD INVARIANT（硬边界）.**

Long dwell, repeated scrolling, many replies or repeated opens may reflect satisfaction, confusion, controversy, verification or frustration.

Where satisfaction matters, later product/model design should use richer evidence or explicit feedback rather than attention alone.

---

## R9-C15 — User-facing recommendation explanations should be truthful but proportionate / 推荐解释应真实但不必暴露全部模型细节

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The architecture should support understandable explanations such as “因为你关注了某主题”, “因为你最近阅读了某类内容”, “来自你关注的地点”, “探索内容” or equivalent.

Explanations must not invent certainty or falsely claim a single cause when the system used several signals.

---

## R9-C16 — “Why this?” explanation is separate from full audit provenance / “为什么推荐这个”与完整审计溯源分离

**HARDENING（架构加固）.**

User-facing explanation may summarize the dominant recommendation reason. Internal Decision Provenance（决策溯源） may contain deeper model/policy/context metadata where proportionate.

The platform need not expose raw sensitive behavioral logs or proprietary model internals to provide meaningful user control.

---

## R9-C17 — Users must be able to correct recommendations without deleting their account / 用户应能纠正推荐，而不是只能删号重来

**HARD PRODUCT REQUIREMENT（产品级硬要求）.**

The architecture must preserve pathways for Show More/Less（多看 / 少看）, Not Interested（不感兴趣）, Unfollow（取消关注）, interest editing or Recommendation Reset（推荐重置） so inferred state can be corrected directly.

Exact V1 controls remain deferred.

---

## R9-C18 — Recommendation Reset is a personalization-state operation, not necessarily raw-history deletion / 推荐重置属于个性化状态操作，不必等同于删除全部原始历史

**HARD INVARIANT（硬边界）.**

A reset may invalidate/reduce current inferred profiles, embeddings, clusters or derived features while lawful raw history remains governed separately by privacy/retention policy.

If the user separately requests data deletion, that is a different operation and must follow the applicable privacy workflow.

---

## R9-C19 — Corrections must propagate to derived features and caches / 用户纠错必须能传递到派生特征与缓存

**HARD INVARIANT under Rule Evolvability（规则可演进硬要求）.**

Not Interested（不感兴趣）, reset, unfollow or interest editing must not update only the visible UI while stale embeddings, feature-store values, candidate caches or recommendation profiles continue using obsolete state indefinitely.

Invalidation/recomputation strategy is required before implementation.

---

## R9-C20 — Interest inference must not silently infer sensitive identity from cultural consumption / 不能从文化内容消费静默推断敏感身份

**HARD PRODUCT SAFEGUARD（产品级硬保护）.**

Reading religious history, political history, health-related culture, ethnic traditions, sexuality-related culture or other sensitive subjects does not by itself authorize the platform to infer that the user personally belongs to, believes in or is characterized by the corresponding sensitive category.

Content interest and sensitive personal identity are different concepts.

---

## R9-C21 — Purpose limitation applies to inferred interests / 推断兴趣也受用途限制

**HARD INVARIANT（硬边界）.**

A personalization inference must not automatically become advertising entitlement, identity verification, fraud evidence, governance authority, employment/eligibility judgment or unrelated commercial scoring.

New uses require their own explicit product/legal basis.

---

## R9-C22 — The platform may keep internal interest representation richer than the user-facing profile / 内部兴趣表示可以比用户看到的兴趣设置更丰富

**ADAPTIVE ARCHITECTURAL REQUIREMENT（弹性架构要求）.**

Users do not need to manage every low-level embedding dimension or micro-interest manually.

However, internal richness does not cancel the requirement for meaningful high-level controls and correction paths.

---

## R9-C23 — User-visible interest editing need not expose every inferred cluster / 用户兴趣编辑不要求暴露全部内部兴趣簇

**ADAPTIVE PRODUCT DIRECTION（弹性产品方向）.**

Future UX may expose understandable Topics / Places / creators / content types or broad interests while keeping transient/low-confidence internal clusters hidden.

The exact transparency level remains deferred; the architecture must support correction without requiring a debugging console for the recommender.

---

## R9-C24 — Exploration-origin signals retain origin context / 来自探索内容的行为应保留“探索来源”上下文

**HARDENING（架构加固）.**

When the platform deliberately injects content outside known interests, subsequent behavior should retain that origin so one exploratory click is not interpreted identically to a repeated self-directed search/follow pattern.

This supports anti-filter-bubble behavior without immediate self-reinforcement.

---

## R9-C25 — Model/policy changes should support shadow evaluation before broad activation / 模型或策略重大变化应支持影子评估

**ARCHITECTURAL REQUIREMENT（架构要求）.**

For high-impact changes to interest derivation, confidence, negative feedback handling or reset semantics, the platform should be able to compare new behavior against current behavior before full rollout where proportionate.

Exact experimentation infrastructure remains an implementation decision.

---

## R9-C26 — Interest corrections and interpretation rules are versionable / 兴趣纠错与解释规则必须可版本化

**HARDENING（架构加固）.**

Changes such as “what Show Less means”, “how long a negative preference lasts”, “how explicit follows interact with inferred state” or “how lifecycle promotion works” must be treated as Policy / Workflow / Algorithm（策略 / 工作流 / 算法） changes, not invisible UI tweaks.

Historical states should remain interpretable where material.

---

## R9-C27 — Raw behavioral history need not be retained forever to preserve interpretability / 为了可解释性不代表原始行为必须永久保存

**HARD INVARIANT with privacy proportionality（带隐私比例原则的硬边界）.**

The system may retain summarized provenance, derived evidence families or bounded audit records while deleting/aggregating old raw events according to retention/privacy policy.

Auditability must be balanced with data minimization.

---

## R9-C28 — No algorithm family is approved by this workshop / 本工作坊不批准任何特定算法家族

**SCOPE GUARD（范围护栏）.**

Collaborative Filtering（协同过滤）, Embedding（嵌入）, Graph Neural Network（图神经网络）, Sequential Model（序列模型）, Contextual Bandit（上下文多臂老虎机）, Reinforcement Learning（强化学习） or Large Language Model（大语言模型） techniques may later be evaluated, but none is mandated by Round 9C.

The product semantics must survive algorithm replacement.

---

# Current visible product picture / 当前可见产品形态

Round 9 now treats personalization as a revisable inference system rather than a hidden permanent profile:

1. explicit user preference and inferred preference remain different;
2. user correction has meaningful scoped effect;
3. contradictory evidence can coexist;
4. confidence remains local, uncertain and non-prestige-bearing;
5. collaborative/popularity signals help candidate discovery without redefining user identity or knowledge ontology;
6. users eventually receive understandable “why this?” explanations and direct correction controls;
7. resets invalidate personalization state without automatically meaning legal deletion of all history;
8. sensitive identity must not be inferred merely from cultural-content consumption;
9. derived features/caches must actually update after corrections;
10. model families remain replaceable implementation choices.

# Product choices intentionally still open / 仍明确开放的产品选择

No new major product fork blocks Workshop C. Still deferred:
- exact priority rules between explicit positive/negative signals in edge cases;
- exact user-facing interest-management UI;
- whether recommendation explanations show one dominant reason or several;
- exact duration/decay of negative feedback;
- precise reset scopes available in early V1;
- exact confidence representation;
- specific ML/AI model families.

# Next review area / 下一审查区域

Next Round 9 work should examine Exploration, Diversity & Anti-Filter-Bubble Architecture（探索、多样性与反信息茧房架构）: how personalization deliberately leaves room for adjacent and unrelated discovery, how diversity is evaluated across a whole page/session, how repetition/fatigue is controlled, and how the system avoids allowing one high-engagement interest cluster to monopolize Home / For You（首页 / 为你推荐）.