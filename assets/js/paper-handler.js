document.addEventListener('DOMContentLoaded', function() {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const paperId = urlParams.get('paper');
  
  // 如果存在paper参数，显示对应的论文内容
  if (paperId) {
    // 隐藏论文列表
    const paperList = document.getElementById('paper-list');
    if (paperList) {
      paperList.style.display = 'none';
    }
    
    // 显示论文详情
    showPaperDetail(paperId);
  }
});

function showPaperDetail(paperId) {
  // 清除之前的内容
  const mainContent = document.querySelector('.site-content .container');
  
  // 根据paperId加载不同的论文内容
  if (paperId === '1') {
    // 添加低光照图像增强论文的详情
    const paperDetail = document.createElement('div');
    paperDetail.className = 'paper-detail';
    paperDetail.innerHTML = `
      <div class="paper-header">
        <h2>Low-Light Image Enhancement via New Intuitionistic Fuzzy Generator-Based Retinex Approach</h2>
        <div class="paper-metadata">
          <p><strong>期刊：</strong> IEEE Access 2025</p>
          <p><strong>报告人：</strong> 张国豪</p>
          <p><strong>日期：</strong> 2025-03-26</p>
        </div>
      </div>

      <div class="abstract-section">
        <h3>摘要</h3>
        <p>本研究提出了一种基于模糊集增强的动态提示调整方法，用于解决不完整数据场景下的自然语言处理任务，提高了模型在缺失信息情况下的性能。</p>
      </div>

      <div class="research-section">
        <h3>研究内容</h3>
        <p>本研究提出了一种基于梯度引导退火（Gradient-Guided Annealing）的域泛化方法，通过自适应调整模型参数的训练过程，有效提高了模型在未知目标域上的泛化能力。</p>
      </div>

      <div class="resources">
        <a href="https://ieeexplore.ieee.org/document/10902139" target="_blank">查看原文</a>
        <a href="./index.html">返回论文列表</a>
      </div>
    `;
    
    // 替换主内容
    mainContent.innerHTML = '';
    mainContent.appendChild(paperDetail);
    
    // 更新页面标题
    document.title = "低光照图像增强 - 安徽大学VR视觉研究组";
  }
}
