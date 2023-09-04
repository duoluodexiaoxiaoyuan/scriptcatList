// ==UserScript==
// @name         抖音批量隐藏作品
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.3
// @description  方便自媒体用户批量隐藏作品
// @license MIT
// @author       xiaolaji
// @grant        GM_addStyle
// @match        https://creator.douyin.com/creator-micro/content/manage
// ==/UserScript==

(function () {
  'use strict';
  setTimeout(() => {
    // 获取所有视频内容主页标签
    const videoCard = document.querySelector('.content-body--29zhI');
    // 获取所有操作标签的布局
    const opBtns = document.querySelectorAll('.op-btns--DxbEz');
    // 遍历opBtns，给每个opBtns添加一个隐藏按钮
    opBtns.forEach((item, index) => {
      // 创建一个id为hideBtn的button元素
      const hideBtn = document.createElement('button');
      hideBtn.id = 'hideBtn';
      hideBtn.textContent = '隐藏';
      hideBtn.style.backgroundColor = 'red';
      hideBtn.style.color = 'white';
      hideBtn.style.border = 'none';
      hideBtn.style.padding = '10px';
      hideBtn.style.marginLeft = '10px';
      hideBtn.style.marginTop = '10px';
      // 给每个opBtns添加一个隐藏按钮
      item.appendChild(hideBtn);
      // 给每个隐藏按钮添加点击事件
      hideBtn.addEventListener('click', function () {
        // 在这里添加点击事件的处理逻辑
        alert('隐藏视频');
      });
    });

    // 选择要监视变化的节点
    const targetNode = opBtns;

    // 创建一个 MutationObserver 实例
    const observer = new MutationObserver((mutationsList, observer) => {
      // 遍历每个发生变化的节点
      for (let mutation of mutationsList) {
        // 创建一个id为hideBtn的button元素
      const hideBtn = document.createElement('button');
      hideBtn.id = 'hideBtn';
      hideBtn.textContent = '隐藏';
      hideBtn.style.backgroundColor = 'red';
      hideBtn.style.color = 'white';
      hideBtn.style.border = 'none';
      hideBtn.style.padding = '10px';
      hideBtn.style.marginLeft = '10px';
      hideBtn.style.marginTop = '10px';
      // 给每个opBtns添加一个隐藏按钮
      item.appendChild(hideBtn);
      // 给每个隐藏按钮添加点击事件
      hideBtn.addEventListener('click', function () {
        // 在这里添加点击事件的处理逻辑
        alert('隐藏视频');
      });
        // // 如果是子节点列表发生了变化
        // if (mutation.type === 'childList') {
        //   // 遍历每个新增的节点
        //   for (let node of mutation.addedNodes) {
        //     // 判断是否为块标签
        //     if (node.nodeName === 'DIV' && node.classList.contains('block')) {
        //       // 创建一个按钮
        //       const button = document.createElement('button');
        //       button.textContent = 'Click me';

        //       // 将按钮添加到块标签中
        //       node.appendChild(button);
        //     }
        //   }
        // }
      }
    });

    // 配置观察选项
    const config = { childList: true, subtree: false };

    // 开始观察变化
    observer.observe(targetNode, config);
  }, 5 * 1000);
})();

GM_addStyle(`
  .video-card--1404D .op-btns--DxbEz {
    visibility: visible !important;
    opacity:1 !important;
  }
`);
