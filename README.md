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

## 当前线上地址

当前测试版已发布在 GitHub Pages：

```text
https://smallocean43658.github.io/tongyi-education-site/
```

适合当前设计联调与内容确认，不适合作为面向国内微信传播的正式部署方案。

## 正式部署建议

如果目标是：

- 国内无需翻墙访问
- 尽量适合微信内直接打开
- 作为长期正式站点使用

推荐正式方案：

- 腾讯云 COS 静态网站托管
- 自定义域名
- ICP 备案
- HTTPS
- 需要时再接腾讯云 CDN

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

## 国内正式部署待办

当前暂停在正式部署准备阶段，未开始执行腾讯云部署。继续前需要先完成：

1. 注册并登录腾讯云控制台
2. 购买一个可备案域名
3. 完成实名认证
4. 准备 ICP 备案所需主体资料

完成以上后，下一步执行顺序为：

1. 创建腾讯云 COS 存储桶
2. 上传当前静态站文件
3. 开启静态网站托管
4. 绑定自定义域名
5. 配置 HTTPS
6. 按需要接入 CDN

## 上线前需要替换的内容

- `sitemap.xml` 里的正式站点域名
- 如有正式域名，可在 `index.html` 中补 canonical
- 如有活动照片、导师头像、往期反馈，可继续增强信任感

## 内容来源

- `问卷.md`
- `素材/规划与复盘学习共修营网站信息.pdf`
- `assets/images/logo.jpg`
- `assets/images/wechat-qr.jpg`
