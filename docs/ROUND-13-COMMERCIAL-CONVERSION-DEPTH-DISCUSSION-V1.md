# Round 13（第十三轮）— Commercial Conversion Depth Discussion V1
# 商业转化深度讨论 V1

> **Status（状态）:** RESOLVED / SUPERSEDED BY RESOLUTION（已解决 / 由结论文档接管）
> **Implementation（实现）:** NOT AUTHORIZED（未授权）
> **Merge（合并）:** NOT AUTHORIZED（未授权）
> **Prerequisite（前置结论）:** `ROUND-13-COMMERCIAL-ACTOR-CONTENT-DISTRIBUTION-SEPARATION-V1.md`

---

## 1. Question（问题）

Ink & East（墨与东方） may eventually host commercial Organizations（商业组织） that:
- publish substantive content（发布实质内容）;
- participate normally as platform actors（作为平台主体正常参与）;
- optionally purchase Paid Amplification（付费加热） or other commercial distribution.

The next architecture question is:

> **Should Ink & East（墨与东方） only help these actors gain attention, or may the platform also help convert relevant user intent into real business actions?（平台只帮助商业主体获得注意力，还是也可以帮助相关用户意图进一步转化成真实商业行为？）**

This is about Product Architecture（产品架构） depth, not current implementation.

---

## 2. Four progressive depths（四级渐进深度）

These are not mutually exclusive platform-wide choices. Different verticals may stop at different depths.

### Level 1 — Discovery / Outbound（发现 / 外跳）
Ink & East（墨与东方） provides:
- content discovery（内容发现）;
- commercial exposure（商业曝光）;
- organization profile / presence（组织资料 / 平台存在）;
- outbound link（外部链接）.

The commercial relationship then continues outside Ink & East（墨与东方）.

Example（例）:
A travel agency publishes a strong guide and users click through to the agency's own site.

### Level 2 — Intent / Lead Capture（意图 / 线索承接）
Ink & East（墨与东方） may allow a user to express commercial intent without completing the transaction on-platform.

Possible examples:
- Ask for information（咨询资料）;
- Contact organization（联系机构）;
- Request itinerary / quote（请求行程 / 报价）;
- Register interest（登记意向）;
- Request course information（咨询课程）.

The platform may pass the qualified intent to the relevant Organization（组织）.

This is deeper than advertising but does not make Ink & East（墨与东方） the merchant/service fulfiller.

### Level 3 — Booking / Transaction Enablement（预订 / 交易承载）
For suitable verticals, Ink & East（墨与东方） may eventually support on-platform actions such as:
- booking（预订）;
- event registration（活动报名）;
- course enrollment（课程报名）;
- ticket purchase（购票）;
- service/product checkout（服务 / 商品结账）.

At this depth, payment, refund, cancellation, liability, support and merchant responsibility（支付、退款、取消、责任、客服与商户责任） must be explicitly designed.

This is not currently authorized.

### Level 4 — Marketplace / Intermediation（市场平台 / 交易中介）
Ink & East（墨与东方） would go beyond transaction tooling and operate a more complete multi-provider commercial market.

Possible responsibilities could include:
- provider discovery/comparison（服务方发现 / 比较）;
- commercial trust / qualification mechanisms（商业信任 / 资格机制）;
- transaction fees / revenue share（交易费 / 收益分成）;
- dispute / refund process（争议 / 退款流程）;
- supply-side tools（供给方工具）;
- platform-managed marketplace rules（平台市场规则）.

This is the deepest model and creates the largest operational/regulatory burden.

No Marketplace（市场平台） decision is currently made.

---

## 3. Architecture judgment（架构判断）

The current product direction does **not** require one global answer such as:

> “Ink & East（墨与东方） is a marketplace（市场平台）.”

A more flexible model is:

> **Commercial Conversion Depth（商业转化深度） is vertical-specific and capability-based（按垂直领域与能力决定）.**

For example:
- one cultural publisher may stop at Level 1（第一级）;
- a travel partner may use Level 2（第二级） first;
- a future event/education vertical may later justify Level 3（第三级）;
- Level 4（第四级） should require independent justification rather than being assumed.

---

## 4. Hard separations（硬分离）

Regardless of depth:
- buying advertising / Paid Amplification（广告 / 付费加热） does not buy Work Recognition（作品认可）;
- commercial conversion does not create source/truth authority（来源 / 真相权威）;
- Organization commercial success（组织商业成功） does not manufacture Contributor Qualification（贡献者资格）;
- organic/editorial/paid distribution provenance（自然 / 编辑 / 付费分发来源） remains distinguishable;
- the platform must identify who actually provides the service/product and who carries transaction responsibility（谁实际提供服务 / 商品以及谁承担交易责任）.

---

## 5. Immediate decision target（当前决策目标）

The useful decision at this stage is not whether to build Booking（预订） or Marketplace（市场平台） now.

It is only:

> **Should Ink & East（墨与东方） preserve the architectural possibility of moving beyond traffic/exposure into Level 2–3 commercial conversion（第二至第三级商业转化） when a vertical genuinely justifies it, while Level 4 Marketplace（第四级市场平台） remains a separately justified future model?**


Resolution（结论）: `ROUND-13-COMMERCIAL-CONVERSION-DEPTH-RESOLUTION-V1.md`.
