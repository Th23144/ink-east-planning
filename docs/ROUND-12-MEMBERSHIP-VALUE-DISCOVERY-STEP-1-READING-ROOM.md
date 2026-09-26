# Round 12 Membership Value Discovery — Step 1
# 第十二轮会员价值发现——第一步

# Reading Room Product Definition V0
# 阅读室产品定义 V0

> **Status:** PRODUCT DISCOVERY DRAFT / ACCESS & MEMBERSHIP BOUNDARY UNDECIDED（产品发现稿 / 访问与会员边界未决定）  
> **Implementation:** NOT AUTHORIZED（未授权实现）  
> **Preconditions:** public-content baseline; unified Community System（统一社区系统）; private Reader Notes（读者私人笔记） remain distinct from public discussion; Save / Follow（收藏 / 关注） retain their own semantics.

---

## 0. What this step is deciding / 这一步决定什么

This step does **not** decide:

- whether Reading Room（阅读室） is member-only;
- which functions are paid;
- plan/tier/price;
- exact page layout;
- final storage/usage quotas.

It only decides:

> **What product problem Reading Room is supposed to solve, and what capabilities belong inside that product concept.**

---

# 1. Proposed product definition / 暂定产品定义

Reading Room（阅读室） should be treated as:

> **An account-linked personal reading workspace and continuity layer over Project 3's public content/knowledge/community system.**

It is **not**:

- a VIP Library（会员内容库）;
- a second Archive（归档）;
- a second Community（社区）;
- a private copy of public articles;
- a status dashboard whose main job is showing paid tier;
- a generic account-settings page.

Its product job is to help a person:

1. return to what they were reading;
2. organize what they want to revisit;
3. keep private reading thoughts/annotations;
4. connect their own reading activity across Topic / Place / Text / Work（主题 / 地点 / 文本 / 作品）;
5. manage explicit reading relationships such as Save / Follow（收藏 / 关注）;
6. find their own submitted/participated items without turning them into public prestige;
7. carry continuity across sessions/devices where supported.

---

# 2. Reading Room capability map / 阅读室能力地图

The zones below are **candidate product modules（候选产品模块）**, not a requirement that every capability ship, nor a decision that any particular module is free or paid.

## Zone A — Continue / 继续阅读

Purpose: restore personal reading continuity.

Possible capabilities:

- Recently Read（最近阅读）;
- Continue Reading（继续阅读）;
- Reading Queue / Read Later（阅读队列 / 稍后阅读）;
- recently opened Issue / Work / Topic / Place（最近打开的议题 / 作品 / 主题 / 地点）;
- progress state where the content form meaningfully supports it.

Boundary:

- reading continuity is personal state, not a public quality signal;
- completion/progress must not become prestige or expertise evidence.

---

## Zone B — Saved Library / 个人收藏库

Purpose: organize durable reading intent.

Possible capabilities:

- Save / Bookmark（收藏 / 书签）;
- user-created Collections / Shelves（自定义集合 / 书架）;
- ordering / filtering / search inside saved items;
- personal labels/tags for organization;
- saved Topics / Places / Works（已收藏主题 / 地点 / 作品）.

Boundary:

- Round 8 already defines Save as personal reading intent by default, not public endorsement;
- personal organization does not change public Knowledge Graph（知识图谱） classification.

---

## Zone C — Private Notes & Annotation / 私人笔记与批注

Purpose: let users think *with* the material rather than only consume it.

Possible capabilities:

- private note attached to a Work / passage / Topic / Place;
- private annotation/highlight where technically appropriate;
- note search/filter;
- note-to-note links;
- personal tags/categories;
- optional export.

Boundary:

- private Reader Notes（读者私人笔记） are not public Community content;
- they are not Recommendation（推荐） fuel by default under Round 9;
- a future explicit “publish/share this note” action would create a separate public object rather than silently changing the private note's class.

---

## Zone D — Personal Reading Map / 个人阅读地图

Purpose: show the user's own reading relationships without pretending to define their identity.

Possible capabilities:

- visual or structured view of read/saved/followed Topics / Places / Texts / Works;
- user-created connections between saved items;
- personal reading paths;
- “related things I saved together”;
- revisit clusters by theme/place/text.

Boundary:

- this is a personal workspace projection;
- it is **not** the public Knowledge Graph;
- it is **not** Interest Graph（兴趣图谱） identity truth;
- it must not label the user as belonging to a belief, ideology, profession or expertise group.

---

## Zone E — Following & Return Paths / 关注与回访路径

Purpose: bring explicit user-chosen relationships into one personal place.

Possible capabilities:

- followed authors / Topics / Places / future supported entities;
- new eligible updates from followed objects;
- explicit routes to Following（关注页） and Latest / All Updates（最新 / 全部更新）;
- recent saved/continued items.

Boundary:

- Reading Room does not replace the dedicated Following（关注） surface;
- Follow remains an explicit discovery/delivery relation, not endorsement or authority.

---

## Zone F — My Participation / 我的参与

Purpose: give users continuity over things they themselves submitted or joined.

Possible capabilities:

- Questions / Ask submissions（问题 / 问古书提交）;
- Letters（来信）;
- Community publications/discussions/replies where supported;
- event registrations;
- editorial feedback requests;
- service requests/status links where appropriate.

Boundary:

- this is a **personal activity index**, not a second Community database;
- public objects remain the same public objects;
- private submissions remain private according to their own lifecycle/visibility state.

---

## Zone G — Personal Relationship / Service Status / 个人关系与服务状态

Purpose: surface account-specific ongoing relationships without making them the center of reading.

Possible capabilities:

- supporter/Membership status if Membership later exists;
- service booking/project status;
- event eligibility/registration;
- account/capability notices relevant to reading/participation;
- future relationship-specific benefits.

Boundary:

- Reading Room must still make sense as a reading product even if Membership packaging changes;
- supporter/payment status must not become authority/trust/Recognition evidence.

---

# 3. What does NOT belong inside Reading Room / 明确不属于阅读室的东西

## 3.1 Public content catalogue
Archive / Search / Explore / Issue / Topic / Place pages remain public discovery surfaces.

Reading Room may link back to them but does not replace them.

## 3.2 Public Community feed
Public Community（社区） remains one unified system.

Reading Room may show “my activity” or “my joined spaces,” but must not fork a second social graph/feed stack.

## 3.3 Governance center
Reports, moderation queues, Reviewer workflows and Organization control are separate systems.

## 3.4 Full account settings
Security, password, legal/privacy settings and billing administration may be reachable from Reading Room but do not define the product.

## 3.5 VIP content library
Explicitly rejected under the current public-content baseline.

---

# 4. Product objects / state that may support Reading Room / 阅读室可能需要承载的产品对象与状态

This is product semantics, not a database schema.

Potential personal-state classes:

1. Save / Bookmark（收藏 / 书签）
2. Reading Progress（阅读进度）
3. Read Later / Queue（稍后阅读 / 队列）
4. Private Note（私人笔记）
5. Private Annotation（私人批注）
6. Personal Collection / Shelf（个人集合 / 书架）
7. Personal Tag / Folder（个人标签 / 文件夹）
8. Personal Reading Path（个人阅读路径）
9. Follow Relation（关注关系）
10. Participation Reference（参与记录引用）
11. Submission / Request Reference（投稿 / 请求记录引用）
12. Event Registration Reference（活动报名引用）
13. Service Case Reference（服务案件 / 项目引用）
14. Supporter / Membership Relationship Reference（支持者 / 会员关系引用）

These states must remain semantically separate rather than collapsing into one “engagement score.”

---

# 5. Privacy defaults / 隐私默认

Suggested product defaults:

- Reading history: private by default.
- Reading progress: private by default.
- Private notes/annotations: private by default.
- Personal collections/shelves: private by default unless future explicit sharing exists.
- Personal reading map: private by default.
- Save / Bookmark: personal/private intent by default.
- Follow: relation semantics remain separately governed; Reading Room merely displays the user's own relationship state.
- Participation that is already public remains public through its original object; Reading Room does not alter visibility.
- Private submissions remain private until their own workflow changes them.

No Reading Room private state becomes Recommendation, public Profile or training input merely because it exists.

---

# 6. First product-level conclusion / 第一个产品级结论

Reading Room appears to be **primarily a personal reading continuity/workspace product**, with a secondary role as a place to surface the user's own participation and relationship state.

That means its conceptual center is:

```text
Continue
+ Save / Organize
+ Think / Annotate
+ Revisit / Connect
+ Track my own participation
```

not:

```text
Membership status
+ locked content
+ upgrade prompt
```

This is a **discovery conclusion**, not yet a Membership/free split.

---

# 7. What remains deliberately unresolved / 仍然不决定

This step does not decide whether the following are ordinary/free or Membership-enhanced:

- advanced collections/shelves;
- advanced note organization;
- cross-device sync;
- export formats;
- advanced personal reading map;
- configurable digest/delivery;
- advanced history/search;
- storage limits;
- personalization options;
- supporter/member relationship panel.

Those questions should be answered **after** the Reading Room product itself is accepted as coherent.

---

# 8. Test against old plans / 对旧方案的回归测试

This V0 deliberately does **not** revive:

- VIP Library（会员内容库）;
- Reader / Patron（读者 / 赞助者） content access tiers;
- member-only Archive;
- paywall;
- member-only Reader Notes;
- separate member forum;
- paid Recommendation advantage.

Historical old Reading Room ideas are used only as provenance/inspiration where they survive current architecture.

---

# 9. Step-1 checkpoint / 第一步检查点

If this product definition is directionally sound, the next discovery step should **not** be pricing or Membership packaging.

Next would be:

**Step 2 — Participation Product Definition（第二步——参与产品定义）**

Only after Reading Room / Participation / Supporter Relationship / Service Relationship are all concrete should B-C1…B-C6 be revisited.
