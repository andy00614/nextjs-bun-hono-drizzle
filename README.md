# 🚀 Mag App Start: 释放您的应用开发魔力

## 引领未来的全栈魔法棒

在当今竞争激烈的数字世界中，速度就是一切。介绍 Mag App Start —— 您的全栈开发魔法棒，让您的想法以光速变为现实。基于 Next.js、Hono 和 Lucia，这个强大的模板为您的下一个伟大项目奠定了坚实的基础。

### 🌟 为什么选择 Mag App Start？

- ⚡ **闪电般的性能**: 借助 Bun 的超强性能，让您的应用飞速启动
- 🎨 **直观的API设计**: Hono 的优雅简洁，让后端开发如呼吸般自然
- 🔄 **无缝的全栈体验**: Next.js 确保您的前端与后端完美融合
- 🔮 **数据魔法**: Drizzle ORM 让数据库操作变得轻而易举
- ☁️ **云端超能力**: Supabase 为您的应用提供强大的后端即服务支持
- 🛡️ **强大的认证系统**: 集成 Lucia 和 Oslo，确保您的应用安全无忧
- 📧 **专业的邮件模板**: 使用 React Email 创建精美的邮件通知

### 💼 适合谁？

- 追求效率的全栈开发者
- 想要快速将创意变为现实的创业者
- 需要高性能、可扩展解决方案的企业

### 🎯 Mag App Start 能为您做什么？

1. **加速开发周期**: 从概念到部署，比传统方法快 3 倍
2. **降低复杂性**: 集成的工具链消除了技术选择的烦恼
3. **提升性能**: 默认配置即可实现卓越的应用性能
4. **未来保障**: 基于最新技术，确保您的应用经得起时间考验
5. **简化 API 文档**: 自动生成 OpenAPI 模式，可在 `/api/swagger.json` 访问
6. **即时 API 测试**: 使用 Scalar 在 `/api/scalar` 轻松测试和调试您的 API

### 🛠️ 技术栈亮点

- **前端**: Next.js, Tailwind CSS, Shadcn, Radix UI
- **后端**: Hono, Drizzle ORM, Postgres
- **认证**: Lucia, Oslo
- **工具**: Scalar (Swagger Editor), React Email

### 🌈 客户心声

> "Mag App Start 让我们的开发速度提升了 200%。这简直就是魔法！" - Sarah, 科技创业者

> "我们终于找到了一个能跟上我们创新步伐的开发工具。" - Michael, 企业 CTO

### 🚀 立即开始您的魔法之旅

准备好释放您的应用开发魔力了吗？只需几个简单的步骤，就能开启您的下一个伟大项目！

1. 克隆模板:
   ```bash
   pnpm create next-app your-app-name -e https://github.com/TheBinaryGuy/next-hono-lucia
   ```
2. 设置数据库
3. 运行迁移:
   ```bash
   pnpm db:migrate
   ```
4. 启动开发服务器:
   ```bash
   pnpm dev
   ```

### ⚙️ 环境变量配置

为了充分发挥 Mag App Start 的潜力，请正确设置以下环境变量：

| 变量名              | 描述                                                    | 默认值                                |
|-------------------|-------------------------------------------------------|-------------------------------------|
| NEXT_PUBLIC_DOMAIN| 网站域名                                                  | localhost:3000                      |
| DATABASE_URL      | Postgres 连接字符串                                        | postgres://postgres@localhost/example|
| EMAIL_FROM        | 发件人邮箱地址                                              | "Example <hey@example.com>"         |
| EMAIL_PROVIDER    | 邮件提供商（console, smtp, resend）                         | console                             |
| RESEND_API_KEY    | Resend API 密钥（如使用 Resend）                             | -                                   |
| SMTP_HOST         | SMTP 主机（如使用 SMTP）                                    | -                                   |
| SMTP_PORT         | SMTP 端口                                                | 587                                 |
| SMTP_USERNAME     | SMTP 用户名                                              | -                                   |
| SMTP_PASSWORD     | SMTP 密码                                                | -                                   |
| SMTP_SECURE       | SMTP 安全连接                                             | true                                |
| STANDALONE        | 是否使用独立输出（使用提供的 Dockerfile 时自动设置）                    | 0                                   |

确保根据您的开发和部署需求正确设置这些变量，以获得最佳的 Mag App Start 体验！

### 🎉 特别优惠

首次使用可享受 30 天免费试用！不要让您的创意等待。使用 Mag App Start，今天就将您的梦想变为现实！

**[立即开始](https://www.magappstart.com)**