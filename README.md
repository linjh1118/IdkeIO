# IDKE 实验室主页

基于本仓库原有 Jekyll 学术主页模板维护，保留原布局、样式和 GitHub Pages 工作流。

## 本地预览

使用 Ruby 3.2 或 3.3：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 8769
```

打开 http://127.0.0.1:8769/IdkeIO/ 。GitHub Pages 的子路径配置为 `/IdkeIO`。

## 内容维护

- `index.md`：实验室简介、研究方向、代表工作入口。
- `_data/faculty.json`：教师卡片，照片未提供时使用模板占位图。
- `_data/alumni.json`：38 条毕业生记录，保留原序号；`placeholder: true` 表示 A—Q 为待补姓名。
- `_includes/alumni.html`：按年份展示毕业生，复用原站点表格样式。
- `_data/highlights.yaml`：已核对的代表论文；主页与论文页共同使用。
- `team/index.md`、`research/index.md`、`contact/index.md`：研究队伍、论文发表、加入我们。

## 资料与核对状态

毕业生去向依据用户填写的[飞书资料表](https://ncn5xqvmb1os.feishu.cn/wiki/RXidwp9o6iP1PUkJGZ2cslMcnzf)，学术链接来自 OpenReview 作者档案，更新日期为 2026-10-20。邱朋朋的“小米／作业帮”差异保留在备注中；未核实的共同作者不直接列为实验室成员。

研究方向与教师资料参考[张富老师官方主页](https://faculty.neu.edu.cn/zhangfu/)及[程经纬老师官方主页](https://www.cse.neu.edu.cn/2020/1023/c6664a181057/page.htm)。

原模板示例文件保留在 Git 中，新闻、课程与项目示例通过 `_config.yaml` 排除发布；原 `_members` 示例不再被研究队伍页面引用，且该 collection 未启用单独输出。后续有真实资料时再替换并恢复对应栏目。

### 首页内容核验（2026-10-20）

- 论文概览来自张富老师官方科研论文页：ACL Main 4、Findings 8；EMNLP Main 4、Findings 7。首页按十位向下取整展示 10+ / 10+ / 合计 20+，不含在投稿件。逐类别计数保存在 `_data/publication-counts.json`。
- 研究方向结合 MWPO、EasyEA、RRHF-V，以及林景豪与张富合作的 Deep Research 自蒸馏和 Coding Agent 数据研究归纳。后两项仅作为研究方向依据，不计入发表成果。来源为用户指定的 OpenReview 主页（2026-10-20 核对）。
- ACL 代表作对应链接均直接指向 ACL Anthology，明确区分 Main 与 Findings。
- 张富头像来自其 Google Scholar 公开头像（user=nYnHOqoAAAAJ），本地保存为 `images/fu-zhang.jpg`；来源原图为 85×128，保留原图未生成或改造人像。
- 去向环形图直接读取 `_data/alumni.json`，与成员表共用数据，包含待补姓名记录；年份筛选后重新计算人数和占比。“南京大学”和“读博”合并为继续深造；其他单位可展开查看完整分布。

### 成员资料同步（2026-10-20，文档 revision 185）

38 位毕业生姓名已补全；按最新资料表同步姓名、去向和个人链接。成员页按年展示个人卡片，并保留可展开的完整表格。`_data/alumni.json` 中 `image` 为空时保留空白头像位，可填写仓库内图片路径。林景豪头像使用 GitHub 账号 linjh1118 的公开头像。`destination_type` 区分工作与继续深造，饼图按同一份名单实时计算。

### 机构 Logo 与排版（2026-10-20）

桌面宽度 1100px 起每行 9 人，小屏自动改为 3 / 2 列；五届原表格默认展开。机构素材保存在 `images/organizations/`，来源记录在 `_data/organizations.json`，以官网素材及 Simple Icons v15 为主。目前 24 个机构已配图；度小满、辽宁移动、联通软研院、大连飞创、中国兵器第二一四研究所暂以醒目名称代替，未冒用其他机构标志。白色官方标志使用深色底以保持可见。
