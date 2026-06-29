# 我的晚报 (sinton.github.io)

这是一个基于 [astro-newspaper-theme](https://GitHub/Sinton/MyBlog)（旧报纸风格）构建的个人作品集与博客主站。本站点用于记录个人开发作品、技术随笔以及旅行足迹。

🌐 **在线预览**：[www.l0101.com](https://www.l0101.com)

## 📌 特色与页面划分

*   **头版调查 (首页)**：展示主打作品、最近更新日志、站点统计以及本期推荐。
*   **作品刊 ([/works/](https://GitHub/Sinton/sinton.github.io/src/pages/works))**：收录个人设计的软件作品与开发工具。
*   **随笔栏 ([/articles/](https://GitHub/Sinton/sinton.github.io/src/pages/articles))**：分享技术沉淀与技术探究（如 Java 锁升级、MySQL MVCC 等）。
*   **远行记 ([/travel/](https://GitHub/Sinton/sinton.github.io/src/pages/travel))**：基于 ECharts 异步数据加载技术呈现的旅行足迹，记录每一次远行印记。

## 🛠️ 技术栈

*   **静态站点生成**：Astro 6
*   **内容管理**：MDX + Astro Content Collections
*   **图表与交互**：Apache ECharts (足迹地图)
*   **包管理工具**：pnpm

## 📁 目录结构与内容创作

文章和作品内容均以 Markdown/MDX 格式存放在 [src/content/](https://GitHub/Sinton/sinton.github.io/src/content) 目录下：

### 1. 作品刊 (`src/content/works/`)
存放在该目录下的 MDX 文件代表个人作品，其 Frontmatter 的常用关键属性如下：
*   `title`: 作品名称
*   `subtitle`: 副标题
*   `deck`: 简短摘要（展示在卡片）
*   `accent`: 强调色（可选 `red`, `blue`, `green`, `gold`, `ink`）
*   `briefs`: 项目亮点（String 数组，会在首页“本期看点”与详情页“本案速览”中自动渲染）
*   `stack`: 技术栈数组
*   `screenshots`: 样张图片配置
*   `links`: 外部链接（如演示地址、下载链接等）

### 2. 随笔栏 (`src/content/articles/`)
用于存放技术解析或随笔文章，其 Frontmatter 常用关键属性如下：
*   `title`: 标题
*   `description`: 简短介绍
*   `date`: 发布日期 (如 `2026-06-29`)
*   `category`: 栏目类别 (默认为 `Column`)
*   `tags`: 标签数组
*   `featured`: 是否推荐到首页

### 3. 远行记 (`src/content/travel/`)
用于记录旅行日记，其 Frontmatter 常用关键属性如下：
*   `title`: 标题
*   `description`: 简短说明
*   `date`: 旅行日期
*   `location`: 城市名 (如 `阿勒泰`)
*   `region`: 省份/区域 (如 `新疆`)
*   `mood`: 氛围/心情标签 (默认为 `Field Note`)

## ⚙️ 站点配置

*   **常规与路由配置**：在 [astro.config.mjs](https://GitHub/Sinton/sinton.github.io/astro.config.mjs) 中配置站点 URL 等。
*   **文案与导航配置**：在 [src/theme.config.ts](https://GitHub/Sinton/sinton.github.io/src/theme.config.ts) 中配置网站标题、副标题、时区、导航链接和社交账号等。
*   **自定义域名**：根目录下的 `public/CNAME` 文件定义了本站的自定义域名 `www.l0101.com`。

## 🚀 本地开发与构建

> [!NOTE]
> 本项目依赖本地同级目录下的 [MyBlog (astro-newspaper-theme)](https://GitHub/Sinton/MyBlog) 主题项目。在首次运行前，请确保两个项目均在同级目录下并成功配置了软链接。

```bash
# 安装依赖
pnpm install

# 启动本地开发服务
pnpm dev

# 代码静态类型与配置检测
pnpm check

# 生产环境编译打包 (静态输出至 /dist)
pnpm build

# 预览本地静态包
pnpm preview
```

## 🔄 自动化部署 (CI/CD)

本项目配置了基于 **GitHub Actions** 的自动化部署流程，工作流文件定义在 [.github/workflows/deploy.yml](https://GitHub/Sinton/sinton.github.io/.github/workflows/deploy.yml)：
1.  **触发条件**：当向 `master` 分支推送代码时触发。
2.  **构建机制**：工作流会自动拉取两个并行的代码仓库（当前主站 `sinton.github.io` 与本地主题库 `Sinton/MyBlog`）至同级目录。
3.  **部署目标**：使用 `pnpm` 构建生产环境静态产物，并利用 `actions/deploy-pages` 自动发布至 **GitHub Pages** 服务。

## 📄 版权与开源许可声明

*   **代码部分**：项目所有框架及组件代码采用 [MIT License](https://GitHub/Sinton/sinton.github.io/LICENSE) 协议开源。
*   **内容部分**：本项目所有 MDX 载录的文章、技术随笔以及远行手记等文字、图片内容均采用 **[CC BY-NC-SA 4.0 (署名-非商业性使用-相同方式共享 4.0 国际)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)** 协议进行保护。未经授权，禁止用于商业性转载或汇编。
