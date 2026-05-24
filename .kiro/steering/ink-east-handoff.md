---
inclusion: always
---

# Ink & East · Handoff Map

*Auto-loaded into every session. Source of truth: INK-EAST-BRIEF.md (1324 lines).*
*Last refreshed: 2026-05-24 against commit 9084f13 (post 工作日志 append).*

## 0. 阅读顺序

1. 这份文件（速读，~100 行）
2. **BRIEF 工作日志**（L1195-1324）= **当前活跃产品决策**，比 §一~§三十更优先
3. 需要细节再 grep `BRIEF §X` 拿背景

主 agent 在新 session 开工前先看本表第 1+2 节就够，不要全读 BRIEF。

## 1. 仓库性质

- 仓库 `Th23144/-`，两个 WP 项目的视觉皮肤蓝图：
  - **Spatial Flow**（电商主站，已开发完成 → 100% 换皮，仅 CSS）
  - **Ink & East**（期刊会员子站，部分新功能待开发 → 视觉 + 产品需求）
- `preview/` 下 HTML 不部署，是给开发者移植 CSS 用的
- 工作流：直接 commit 到 main，不开 PR / 分支

## 2. 工作日志要点（BRIEF L1195-1324，**优先级最高**）

### 三种内容类型（L1203-1212）

| 类型 | 占比 | Paywall | 备注 |
|---|---|---|---|
| 常规文章 | ~99% | ✗ 全免费 | 散文 / 来信 / 编辑笔记 / 原创 / 田野 / 古文译注 |
| VIP 板块文章 | 极少数 | ✓ 30% 后锁 | 单独板块 |
| 定制解读服务 | 按需 | 不适用 | 按次付费，独立产品 |

### 会员含义（L1216-1228）

会员 ≠ 解锁文章。会员是「加入刊物作为支持者」，回报含 VIP 板块 / Reader Notes 写作权 / 投票 / 纸质年刊 / 信件优先回复 / 定制解读优先排队。
**价格永远是占位**（¥38 / ¥98 月，或 BRIEF §四 旧版的 $9 / $72/年），不要纠结数字。
档位结构（单档 / 双档 / 三档）尚未敲定。

### 定制解读服务（L1232-1252，**真正商业核心**）

- 用户痛点：古文 / 神话 / 经典在现代官方注释中晦涩，母语读者也吃力
- 形态：用户付费定制深度个性化解读，编辑团队按用户迷茫点接单
- 完成后可询是否公开到 VIP 板块（公开者得福利）
- 未来形态：可下放到社区联盟营销 / marketplace（社区作者投标）
- **位置**：独立 `/services/custom-reading` 页 + 提交表单
- **绝对不要塞进 paywall 卡片**

### Paywall 卡片设计原则（L1256-1278，**强制**）

仅 VIP 板块文章使用。是「邀请」不是「销售台」。

✓ 必须：编辑口吻 / 横向 band / 一段为何有会员制的说明 / 主按钮 → `/reading-room` / 副链接 → `/membership`+SignIn+Restore
✗ 严禁：价格 / Tier 对比 / "推薦"角标 / "立即升级"按钮 / "You've read 30%"进度条 / 任何购物感

参考实现：`preview/ink-east-article-001-v1.html` 的横向 band 视觉（文件中实物 class 名为 `support-band` 且注释标注 "NOT a paywall"——它是免费文章用的同款 visual treatment）。

### 跨页面链接约定（L1282-1306，**强制**）

**严禁 `href="#"` 死链**。当前导航图：

```
ink-east-v1.html (首页)
   ├─ "Open the issue" → ink-east-issue-001-v1.html
   └─ Footer "Spatial Flow" → spatial-flow-v1.html

ink-east-issue-001-v1.html (Issue)
   ├─ Backbar → ink-east-v1.html
   └─ TOC No.03 → ink-east-article-001-v1.html

ink-east-article-001-v1.html (文章)
   ├─ Issue bar → ink-east-issue-001-v1.html
   ├─ Sidebar Issue 目錄 → ink-east-issue-001-v1.html
   ├─ Paywall 主按钮 → /reading-room（待做）
   └─ Paywall 副链接 → /membership（待做）
```

每做新页面：从相关页面加入入口 / 统一 footer / 更新 BRIEF L1282 链接图。

### 模块优先级（L1310-1322）

| # | 模块 | 状态 |
|---|---|---|
| 1 | article-001 guest 状态 | ✓ 完成 |
| 2 | VIP Paywall 状态变体（已登免费 / Reader / Patron） | ⏳ 待 |
| 3 | Reader Notes 评论区独立组件 | ⏳ 待 |
| 4 | Reading Room VIP 会员中心 | ⏳ 待 |
| 5 | Letters 投稿表单页 | ⏳ 待 |
| 6 | Custom Ebook Studio 服务详情页 | ⏳ 待 |
| 7 | Membership 套餐对比页 | ⏳ 待 |
| 8 | 定制解读服务页（核心商业，独立产品） | ⏳ 待 |

开新模块前用户会发「3 件套规格」（核心规格 / 权限矩阵 / WP 暗示）。

## 3. Design system（不变项，引 BRIEF §一~§二十五）

- 色板 #f4ede0 / #faf5e9 / #e8dfce / #1a1611 / #a02d23 朱砂 — BRIEF L48-58
- 字体 EB Garamond + Noto Serif SC + Inter + JetBrains Mono — BRIEF L62-66
- 朱砂红使用限制 — BRIEF §二十五 L979-1008
- 视觉红线 — BRIEF L75-83
- 14 条不可妥协 — BRIEF §二十九 L1159-1177

## 4. Page inventory

| 文件 | 用途 | 状态 |
|---|---|---|
| ink-east-v1.html | 子站首页 | done |
| ink-east-issue-001-v1.html | Issue 内页 | done |
| ink-east-article-001-v1.html | 单篇文章 + support-band | done（含 BLOCK 注释） |
| spatial-flow-v1.html | 主站首页 | done |
| spatial-flow-{shop,product,cart,journal}-v1.html | 主站内页 | 待核 |
| style-1~5（含 4a/4b/4c） | 早期风格探索 | abandoned |
| index.html | 未读 | 待查 |

## 5. Quick grep index

| 想找 | 去哪 |
|---|---|
| **当前 paywall / 会员 / 定制解读决策** | **BRIEF L1195-1324（工作日志）** |
| 完整色板 / 字体 token | BRIEF §二 L42-90 |
| 朱砂使用限制 | BRIEF §二十五 L979-1008 |
| 权限矩阵全表 | BRIEF §十三 L472-491 |
| 法律页最低要求 | BRIEF §十八 L696-759 |
| Custom Ebook 9 步 / 报价 / 版权 | BRIEF §十七 L621-694（注：§十七 = Custom **Ebook**；工作日志 §3 = Custom **Reading**，两者不同产品） |
| 页面验收 checklist | BRIEF §二十八 L1079-1157 |
| URL / SEO 规则 | BRIEF §二十 L793-835 |
| 视觉系统两站对比 | DESIGN-CONSTRAINTS.md L114-148 |

## 6. 文档冲突提示

BRIEF 主体（§一~§三十）写于 v1.1（2026-05-19），工作日志写于其后（2026 春）。冲突时 **工作日志为准**：

- §四板块2 / §九 列了 Reader $9 月 / Patron $72 年 / Custom Ebook $5000 → 工作日志 §2 改为 ¥38/¥98 占位 + 档位未定。**统一口径：价格全部是占位**，不在设计稿中精确呈现。
- §四板块4 「Custom Ebook Studio」≠ 工作日志 §3 「Custom Reading Service」。前者是定制写一本电子书，后者是定制解读古文。两个独立产品，不要混。

## 7. Files NOT covered by this map

- `preview/index.html` 内容未读
- `preview/spatial-flow-{shop,product,cart,journal}-v1.html` 五个文件具体完成度未核
- BRIEF §四板块4 与工作日志 §3 的产品边界（"Custom Ebook" vs "Custom Reading"）尚未在 BRIEF 中正式合并/区分
