# 同益教育网站

同益未来教育学社「人生规划与复盘学习共修营」静态展示站。

## 当前内容

- 首页品牌展示
- 课程价值与适合人群
- 导师阵容与可信背书
- 课程安排、FAQ、报名流程
- 微信二维码转化区

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://127.0.0.1:8080
```

## 部署建议

首选静态托管平台：

- GitHub Pages
- Netlify
- Vercel

部署时直接上传以下文件和目录即可：

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/`

## GitHub Pages 部署

项目已经包含 GitHub Pages workflow：

- `.github/workflows/deploy-pages.yml`

你需要做的事：

1. 把当前目录初始化成 Git 仓库
2. 推送到 GitHub 新仓库默认分支 `main`
3. 在 GitHub 仓库设置里启用 Pages
4. Source 选择 `GitHub Actions`

推送成功后，GitHub 会自动部署，默认地址会是：

```text
https://<你的 GitHub 用户名>.github.io/<仓库名>/
```

## 上线前需要替换的内容

- `sitemap.xml` 里的正式站点域名
- 如有正式域名，可在 `index.html` 中补 canonical
- 如有活动照片、导师头像、往期反馈，可继续增强信任感

## 内容来源

- `问卷.md`
- `素材/规划与复盘学习共修营网站信息.pdf`
- `assets/images/logo.jpg`
- `assets/images/wechat-qr.jpg`
