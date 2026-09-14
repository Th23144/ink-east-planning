# Round 10 Workshop C — Adversarial Audit（第十轮工作坊 C 对抗性审计）

> **Status:** PASS AFTER HARDENING / ONE PRODUCT DECISION STILL PENDING（加固后通过 / 仍有 1 个产品决定待确认）  
> **Target:** `docs/INK-EAST-ROUND-10-DISCOVERY-RECOMMENDATION-WORKSHOP-C.md`  
> **Hardening:** `docs/ROUND-10-WORKSHOP-C-HARDENING-ADDENDUM.md`  
> **Implementation:** NOT AUTHORIZED（未授权实现）

---

## 1. Audit purpose / 审计目的

Workshop C defines the semantic contract of four dedicated discovery surfaces: Following（关注）, Explore（探索）, Search（搜索） and Related / Next（相关推荐 / 下一项）.

The audit attacks the design from the perspective of user intent, recommendation leakage, filter-bubble pressure, explicit-control conflicts, authority/provenance contamination, stale derived state and implementation shortcuts.

The Following default-order choice remains intentionally open; the audit tests whether each option can be implemented safely and whether the current recommendation introduces hidden architectural damage.

---

## 2. Following checks / 关注页检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 1 | Following（关注）退化成另一个 For You（为你推荐） | PASS — C1/C2 |
| 2 | 无关推荐静默挤占明确关注内容 | PASS — C2 |
| 3 | 低互动被当成隐式 Unfollow（取消关注） | PASS — C3 |
| 4 | Follow（关注）绕过隐私 / 审核 / 权限 | PASS — C4 |
| 5 | 排序逻辑改变“是否关注”的关系事实 | PASS — C5 |
| 6 | Ranked（相关排序）把某些低互动关注对象长期饿死且系统无法发现 | GAP FOUND → C39 |
| 7 | Latest（最新）页面被伪装成时间序，但其实仍重度排序 | PASS — C8 |
| 8 | Ranked（相关排序）导致用户再也找不到完整关注更新 | PASS — C7 |
| 9 | Following 默认模式被悄悄锁死成产品硬常量 | PASS — C6 explicitly open |
| 10 | 推荐的 Option B（方案 B）在架构上无法兼容未来 Option A/C | PASS — mode policy remains evolvable |

---

## 3. Explore checks / 探索页检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 11 | Explore（探索）只是低置信度 Home（首页） | PASS — C9/C11 |
| 12 | Explore 变成随机噪音 | PASS — C10 |
| 13 | Interest Graph（兴趣图谱）重新吞掉探索页 | PASS — C11 |
| 14 | 一个候选来源实际上垄断 Explore，但页面名义上仍叫“探索” | GAP FOUND → C40 |
| 15 | 新内容 / 长尾内容没有真实候选路径 | PASS — C15 |
| 16 | 探索点击立即被理解成长期强兴趣 | PASS — C13 + Round 9 |
| 17 | “偶然发现”被用来主动扩散敏感 / 高风险内容 | PASS — C14 |
| 18 | Explore 的分类 / tab（标签页）被提前写死 | PASS — C12 |
| 19 | 热门等于探索、探索等于热门 | PASS through C9/C10/C15 + Workshop A |

---

## 4. Search checks / 搜索页检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 20 | Search（搜索）被推荐系统改写成“猜你想看” | PASS — C16/C18 |
| 21 | 直接标题 / 实体匹配被个性化内容压到后面 | PASS — C20 |
| 22 | Semantic Search（语义搜索）把弱相关内容大量冒充命中 | PASS — C19 |
| 23 | Zero-result（零结果）回退伪装成真实结果 | PASS — C21 |
| 24 | Related discovery（相关发现）污染核心搜索列表 | PASS — C22 |
| 25 | 一次查询永久改写长期兴趣 | PASS — C23 |
| 26 | 私人笔记 / 私信 / 审核案件被拿去偷偷猜查询意图 | PASS — C24 |
| 27 | 不同对象类型的原始分数直接比较 | PASS — C25 |
| 28 | 用户此前点过 Show Less（少看），以后主动搜索同一主题仍被推荐抑制强行阻止 | GAP FOUND → C41 |
| 29 | 用户 Unfollow（取消关注）某对象后，搜索也把对象当作不可见 | GAP FOUND → C41 |
| 30 | 搜索中“热门”或发布方可操控元数据变成事实权威 / 绝对相关性 | GAP FOUND → C43 |
| 31 | Search 的探索目标反过来破坏明确 Query Intent（查询意图） | PASS — C16/C22 |

---

## 5. Related / Next checks / 相关推荐与下一项检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 32 | Related（相关推荐）直接复用 Home 排名 | PASS — C26 |
| 33 | 个性化兴趣压过当前对象真实关系 | PASS — C29 |
| 34 | 有明确章节 / 系列顺序时算法把结构性 Next（下一项）替换掉 | PASS — C27 |
| 35 | 相关推荐只保留一个无类型 `similarity_score`（相似度分数） | PASS — C28 |
| 36 | “相关”被用户误解成平台认可 / 事实正确 / 来源可靠 | GAP FOUND → C42 |
| 37 | Canonical（典籍）页面的社区讨论被混成典籍正文 | PASS — C30 |
| 38 | Related 形成少数对象之间的循环推荐 | PASS — C31 |
| 39 | 老内容统一降权导致经典来源越来越难被相关推荐 | PASS — C32 |
| 40 | 实用 / 本地 / 时效内容过期后仍因为历史相关分继续出现 | PASS in principle through C32, but invalidation hardening needed → C44 |

---

## 6. Cross-surface control & state checks / 跨页面控制与状态检查

| # | Failure mode（失效模式） | Result（结果） |
|---:|---|---|
| 41 | 所有负反馈都自动升级为全局封锁 | PASS — C33 |
| 42 | 一个页面的显示方式改变对象作者 / 来源 / Recognition（作品认可） | PASS — C34 |
| 43 | Paid / Sponsored（付费 / 赞助）伪装成 Follow / Search / Related 自然结果 | PASS — C35 |
| 44 | 页面来源情境丢失，后续模型不知道点击来自 Search 还是 Explore | PASS — C36 |
| 45 | 搜索 / 探索 / 相关推荐缓存继续显示已撤回、移除、失效或权限变化对象 | GAP FOUND → C44 |
| 46 | 四个页面最终被同一个通用算法静默控制 | PASS — C38 |
| 47 | 页面策略以后改动只能修改散落 UI（用户界面）代码 | PASS — C37 |
| 48 | 专门页面的用户主动意图被 Home / For You 的目标反向污染 | PASS — standing rule + C1/C9/C16/C26 |

---

## 7. Findings / 审计发现

No CORRECTION（真正修正） to Workshop C's core direction was required.

The audit found six hardening gaps:

1. **R10-C39 — NEW SAFEGUARD（新增保护）**  
   Ranked Following（相关排序关注页）需要能发现长期被压制的已关注来源，防止“还关注着，但永远看不见”。

2. **R10-C40 — NEW SAFEGUARD（新增保护）**  
   Explore（探索）需要候选来源组成可观察，防止某一个 retriever / source family（召回器 / 候选来源族）实际垄断探索。

3. **R10-C41 — CLARIFICATION + SAFEGUARD（澄清 + 保护）**  
   Recommendation suppression（推荐抑制）与 Direct Intent（直接主动意图）必须分开；Show Less（少看）通常不等于以后主动搜索也禁止显示，Unfollow（取消关注）也不等于 Block（屏蔽）。

4. **R10-C42 — NEW SAFEGUARD（新增保护）**  
   Related（相关）关系不等于 endorsement / truth / authority（认可 / 真理 / 权威）。

5. **R10-C43 — HARDENING（架构加固）**  
   Search（搜索）不能让流量、点击、关键词堆砌或发布方自控元数据自动成为权威 / 质量 / 事实相关性。

6. **R10-C44 — HARDENING（架构加固）**  
   Visibility / lifecycle / freshness / rights / access（可见性 / 生命周期 / 新鲜度 / 权利 / 访问）变化必须能使 Search / Explore / Related / Following 的派生候选和缓存失效或重算。

---

## 8. Audit conclusion / 审计结论

**Result: PASS AFTER HARDENING / ZERO UNRESOLVED ARCHITECTURAL BLOCKERS（加固后通过 / 0 个未解决架构阻塞）.**

There remains exactly **one unresolved product choice** rather than an architecture defect:

> **Following（关注）默认排序模式：A / B / C。**

The audit does not invalidate the current recommendation **B — Ranked default + visible Latest / All Updates（默认相关排序 + 明确最新 / 全部更新）**. With R10-C39 and existing C7/C8 safeguards, B remains the recommended direction.

Workshop D should not permanently treat B as accepted until the user explicitly confirms it.

---

## 9. Global audit checkpoint / 全局审计检查点

The local Workshop C audit is not a substitute for the user-requested **Full Comprehensive Adversarial Audit（全量综合对抗性审计）** after the overall Product Architecture sequence 1–16 is complete.

Future records must continue using readable headings, decision summaries, tables, explicit decision status and deferred-item sections for manual PR #53 review.
