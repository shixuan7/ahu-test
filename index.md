---
layout: default
title: 首页
---

# 小组会安排

本页面记录了我们研讨班的小组会安排和论文讨论记录

每周四上午8:30-11:30，地点：安徽大学计算机科学与技术学院会议室

<div class="meeting-rules">
  <h2>小组会制度：</h2>
  <ol>
    <li><strong>报告安排：</strong> 每周安排4位同学进行论文分享和研究进展汇报</li>
    <li><strong>论文选择：</strong> 优先选择近期发表于顶级会议/期刊的论文，与小组研究方向相关</li>
    <li><strong>报告准备：</strong>
      <ul>
        <li>精读论文，理解核心思想和创新点</li>
        <li>准备25-30分钟的演讲幻灯片</li>
        <li>可以适当补充相关工作的背景知识</li>
        <li>建议对论文方法进行复现或尝试改进</li>
      </ul>
    </li>
    <li><strong>讨论环节：</strong> 报告后留出15-20分钟的讨论时间，鼓励大家积极参与讨论</li>
    <li><strong>资料分享：</strong> 报告后请将论文、幻灯片和笔记上传至本网站，方便大家查阅</li>
  </ol>
</div>

## 论文分享列表

<div class="paper-list" id="paper-list">
  {% for post in site.posts %}
  <div class="paper-item">
    <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.journal }}</p>
      <p>报告人：{{ post.presenter }}</p>
      <p>日期：{{ post.date | date: "%Y-%m-%d" }}</p>
    </a>
  </div>
  {% endfor %}
</div>
