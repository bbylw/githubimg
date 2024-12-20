# GitHub Image Proxy Worker

一个基于 Cloudflare Workers 的 GitHub 图床代理服务，支持 PicGo 配置，可用于搭建私有图床。
![](https://cdn.jsdelivr.net/gh/bbylw/PicGo@master/20241220214822938.png)
> 本项目基于 [@fscarmen](https://www.fscarmen.com/2024/10/blog-post.html) 的方案实现，增加了前端展示页面。原作者提供了更丰富的功能说明和[视频教程](https://youtu.be/eRqIpeeo9SA)，建议参考学习。

## 🌟 特性

- 支持 GitHub 私有仓库作为图床
- 基于 Cloudflare Workers 的全球加速
- 内置优雅的项目展示页面
- 完美配合 PicGo 使用
- 支持图片隐私保护

## 🚀 部署步骤

1. **创建 GitHub 私有仓库**
   - 创建一个新的私有仓库用于存储图片
   - 生成 GitHub Personal Access Token (PAT)
     - 访问 GitHub Settings -> Developer settings -> Personal access tokens
     - 选择 "Tokens (classic)"
     - 生成新 token，只需勾选 `repo` 权限

2. **部署 Cloudflare Worker**
   - 注册 Cloudflare 账号
   - 在 Workers & Pages 中创建新的 Worker
   - 复制 `worker.js` 的内容到 Worker 编辑器
   - 修改以下变量：

     ```javascript
     const GITHUB_USERNAME = 'Your_GitHub_Username'  // 替换为你的 GitHub 用户名
     const GITHUB_PAT = 'Your_GitHub_PAT'  // 替换为你的 GitHub PAT
     ```

3. **绑定自定义域名** (必要步骤)
   - 在 Cloudflare 添加你的域名
   - 修改域名的 DNS 服务器为 Cloudflare 提供的 NS
   - 在 Workers -> 你的Worker -> 触发器 中添加自定义域名
   - 添加格式如：`img.yourdomain.com`
   - 等待域名生效（通常很快，最长约5分钟）

> ⚠️ 注意：由于 workers.dev 域名在某些地区可能无法访问，绑定自定义域名是必要的步骤。

## 📸 PicGo 配置说明

1. **安装 PicGo**
   - 从 [PicGo 官网](https://github.com/Molunerfinn/PicGo) 下载并安装

2. **配置 GitHub 图床**
   - 打开 PicGo 设置
   - 选择 "图床设置" -> "GitHub 图床"
   - 填写配置信息：

     ```yaml
     仓库名：username/repo-name
     分支名：main
     Token：你的 GitHub PAT
     存储路径：images/  (可选)
     自定义域名：https://img.yourdomain.com/main
     ```

3. **使用说明**
   - 上传图片后，PicGo 会自动通过你的 Worker 生成加速链接
   - 图片链接格式：`https://img.yourdomain.com/main/images/xxx.png`

## 🔒 隐私说明

- 所有图片存储在私有仓库中，需要正确的 PAT 才能访问
- Worker 代理请求时会自动处理认证，用户无需关心认证细节
- 响应头中的敏感信息会被自动移除

## 🎨 演示页面

访问 Worker 域名根路径可以看到一个优雅的项目展示页面，展示了对 GitHub 的致敬。

## ⚠️ 注意事项

1. 确保 GitHub PAT 只授予必要的权限
2. 定期更换 PAT 以确保安全
3. 注意 Cloudflare Workers 的免费额度限制
4. 建议设置自定义域名，避免直接使用 workers.dev 域名

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题，请通过 GitHub Issues 联系我们。
