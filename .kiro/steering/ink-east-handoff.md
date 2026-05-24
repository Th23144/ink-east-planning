---
inclusion: always
---

# Ink & East · Handoff Map

*Auto-loaded into every session. Source of truth: INK-EAST-BRIEF.md.*
*Last refreshed: 2026-05-24 against post-paywall-model-revision state.*

## 0. 阅读顺序

1. 这份文件（速读，~150 行）
2. **BRIEF 工作日志 + 末尾日志补遗**（L1195+）= **当前活跃产品决策**，比 §一~§三十更优先
3. 需要细节再 grep `BRIEF §X` 拿背景

主 agent 在新 session 开工前先看本表第 1+3 节就够，不要全读 BRIEF。

## 1. 处理大文件的标准做法

任何 ≥ 300 行的文件(BRIEF / 现有 preview/ HTML),不要主窗口直接读。

正确做法:
1. 用 invoke_sub_agent 派 general-task-execution
2. 让 sub-agent 读完,按指定 schema 吐回 60-80 行结构化提纲
3. 主窗口只吃提纲

⚠️ 关键纪律(违反 = 委派失效):
- invoke_sub_agent 那一批 tool 调用里,**绝对不要**并行加 read_files / grep_search
- 哪怕"顺手准备一下"也不行——会把委派的全部价值毁掉,等于两份钱都付
- 等 sub-agent 返回再决定下一步

## 2. 仓库性质

- 仓库 `Th23144/-`，两个 WP 项目的视觉皮肤蓝图：
  - **Spatial Flow**（电商主站，已开发完成 → 100% 换皮，仅 CSS）
  - **Ink & East**（期刊会员子站，部分新功能待开发 → 视觉 + 产品需求）
- `preview/` 下 HTML 不部署，是给开发者移植 CSS 用的
- 工作流：直接 commit 到 main，不开 PR / 分支

## 3. 工作日志要点（**优先级最高**）

### 三种内容类型（**已修订**，见 §7 已知现象）

| 类型 | 占比 | 访问 | 备注 |
|---|---|---|---|
| 常规文章 | ~99% | **全免费，无 paywall** | 散文 / 来信 / 编辑笔记 / 原创 / 田野 / 古文译注 |
| VIP 板块文章 | 极少数 | **整篇仅会员可见** | 非会员只见标题 + 邀请条占位（**非 30% 后锁**） |
| 定制解读服务 | 按需 | 独立产品 | 按次付费，详见下文 |

### 会员含义

会员 ≠ 解锁文章。会员是「加入刊物作为支持者」，回报含 VIP 板块 / Reader Notes 写作权 / 投票 / 纸质年刊 / 信件优先回复 / 定制解读优先排队。
**价格永远是占位**（¥38 / ¥98 月，或旧版 BRIEF §四 列的 $9 / $72 年），不要纠结数字。
档位结构（单档 / 双档 / 三档）尚未敲定。

### 定制解读服务（**真正商业核心**）

- 用户痛点：古文 / 神话 / 经典在现代官方注释中晦涩，母语读者也吃力
- 形态：用户付费定制深度个性化解读，编辑团队按用户迷茫点接单
- 完成后可询是否公开到 VIP 板块（公开者得福利）
- 未来形态：可下放到社区联盟营销 / marketplace（社区作者投标 → 定制方审核 → 选中者得报酬奖励）
- **位置**：独立 `/services/custom-reading` 页 + 提交表单
- **绝对不要塞进 paywall 卡片**

### Paywall 卡片设计原则（**强制**）

仅 VIP 板块文章使用。**取代正文显示**，不是「30% 后浮起」。是「邀请」不是「销售台」。

非会员看到：文章标题 + 简介 + 横向 band（占据原正文位置）。会员看到：完整正文。

✓ 必须：编辑口吻 / 横向 band / 一段为何有会员制的说明 / 主按钮 → `/reading-room` / 副链接 → `/membership` + SignIn + Restore
✗ 严禁：价格 / Tier 对比 / "推薦"角标 / "立即升级"按钮 / "You've read 30%"进度条 / 任何购物感

视觉参考：`preview/ink-east-article-001-v1.html` 末尾的 `support-band`（注释标 "NOT a paywall" —— 它是免费文章末尾的邀请条；VIP 文章 paywall 复用同款 visual treatment，但**替换正文位置**而非追加在末尾）。

### 跨页面链接约定（**强制**）

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

每做新页面：从相关页面加入入口 / 统一 footer / 更新链接图。

### 模块优先级

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

## 4. Design system（不变项，引 BRIEF §一~§二十五）

- 色板 #f4ede0 / #faf5e9 / #e8dfce / #1a1611 / #a02d23 朱砂 — BRIEF L48-58
- 字体 EB Garamond + Noto Serif SC + Inter + JetBrains Mono — BRIEF L62-66
- 朱砂红使用限制 — BRIEF §二十五 L979-1008
- 视觉红线 — BRIEF L75-83
- 14 条不可妥协 — BRIEF §二十九 L1159-1177

## 5. Page inventory

| 文件 | 用途 | 状态 |
|---|---|---|
| ink-east-v1.html | 子站首页 | done |
| ink-east-issue-001-v1.html | Issue 内页 | done |
| ink-east-article-001-v1.html | 单篇文章 + support-band | done（含 BLOCK 注释） |
| spatial-flow-v1.html | 主站首页 | done |
| spatial-flow-{shop,product,cart,journal}-v1.html | 主站内页 | 待核 |
| style-1~5（含 4a/4b/4c） | 早期风格探索 | abandoned |
| index.html | 未读 | 待查 |

## 6. Quick grep index

| 想找 | 去哪 |
|---|---|
| **当前 paywall / 会员 / 定制解读决策** | **BRIEF 工作日志 + 末尾日志补遗** |
| 完整色板 / 字体 token | BRIEF §二 L42-90 |
| 朱砂使用限制 | BRIEF §二十五 L979-1008 |
| 权限矩阵全表 | BRIEF §十三 L472-491 |
| 法律页最低要求 | BRIEF §十八 L696-759 |
| Custom Ebook 9 步 / 报价 / 版权 | BRIEF §十七 L621-694（注：§十七 = Custom **Ebook**；工作日志 = Custom **Reading**，两者不同产品） |
| 页面验收 checklist | BRIEF §二十八 L1079-1157 |
| URL / SEO 规则 | BRIEF §二十 L793-835 |
| 视觉系统两站对比 | DESIGN-CONSTRAINTS.md L114-148 |
| **模块任务清单 / 每窗口规格** | **INK-EAST-ROADMAP.md** |

## 7. 已知现象（不是冲突）

BRIEF 主体（§一~§三十）写于 v1.1（2026-05-19），工作日志写于其后，末尾日志补遗最新。两处看似不一致的内容均为已知现象：

- **价格 ¥/$ 不一致** → 已知占位差异，真定价时统一，设计稿中不精确呈现具体数字。
- **Custom Ebook vs Custom Reading** → 两个独立产品（详见工作日志 + 主页 Studio 区块），不是冲突。
- **Paywall 30% 试读规则废止** → BRIEF §十九 L761-790 全章基于「30% 试读 + 服务端截断」；末尾日志补遗已明示废止此规则，统一为「整篇仅会员可见」。设计 paywall 卡片时**以日志补遗为准**。

## 8. Files NOT covered by this map

- `preview/index.html` 内容未读
- `preview/spatial-flow-{shop,product,cart,journal}-v1.html` 五个文件具体完成度未核
