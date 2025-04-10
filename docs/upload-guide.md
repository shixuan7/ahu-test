---
layout: default
title: 论文分享上传指南
---

# 📝 论文分享上传指南

本指南将帮助你了解如何上传你的论文分享到小组网站。

## 0️⃣ 加入工程

1. 检查邮箱，点击 GitHub 邀请邮件中的“Accept invitation”按钮
2. 如果没有 GitHub 账号，请先在 [github.com](https://github.com) 注册
3. 接受邀请后，你就可以开始上传论文了

## 1️⃣ 上传步骤

1. 打开[小组仓库](https://github.com/shixuan7/ahu-test)
2. 进入 `_posts` 目录
3. 点击 "Add file" → "Create new file"
4. 按照下述两条规则填写文件名和内容
5. 点击页面右上角的 "Commit changes" 提交

## 2️⃣ 文件命名规则
创建新的Markdown文件时，请按照以下格式命名：
```
YYYY-MM-DD-序号-姓名拼音缩写.md
```

例如：
- `2025-03-26-1-wzh.md`（2025年3月26日，第1个报告，王振华）
- `2025-03-26-2-lxy.md`（2025年3月26日，第2个报告，李小燕）

## 3️⃣文件内容模板
每个Markdown文件需要包含以下内容：

```markdown
---
layout: paper
title: "论文标题"
journal: "会议/期刊名称 年份"
presenter: "你的名字"
date: YYYY-MM-DD
original_link: "论文原文链接"
categories: paper
---

## 摘要

在这里写论文摘要...

## 个人总结

在这里写你对论文的理解、见解和思考...
```

### 📋 必填字段说明

- `layout`: 固定填写 `paper`
- `title`: 论文的完整标题
- `journal`: 发表的会议/期刊名称和年份，如 "CVPR 2025"
- `presenter`: 你的名字
- `date`: 报告日期，格式为 YYYY-MM-DD
- `original_link`: 论文的原文链接（arXiv或官方链接）
- `categories`: 固定填写 `paper`



## 4️⃣ 注意事项

1. 确保文件名格式正确，特别是**日期部分**
2. 检查YAML头部（---之间的内容）格式是否正确
3. 标题和链接中如果包含特殊字符，请用引号包裹
4. 提交后，GitHub Actions会自动更新网站和README

## 5️⃣ 常见问题

1. **Q: 提交后网站没有更新？**
   A: 请等待1-2分钟，GitHub Actions需要一些时间来构建和部署网站。


## 🆘 需要帮助？

如果你在上传过程中遇到任何问题，可以：
1. 查看[Jekyll文档](https://jekyllrb.com/docs/)
2. 联系管理员获取帮助

祝你分享愉快！ 🎉
