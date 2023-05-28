// ==UserScript==
// @name         淘宝报名
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://item-paimai.taobao.com/pmp_item/*
// @run-at document-end
// ==/UserScript==

(function() {
  'use strict';

  // @run-at document-end 表示脚本应该在文档加载完成后运行，但在所有图片、样式表和子框架加载完成之前运行。这通常是在 DOMContentLoaded 事件触发后，但在 load 事件触发之前。
  setInterval(() => {
      let baoMingSpan = document.querySelector("#J_ApplyBtn > span:nth-child(2)")
      if (baoMingSpan) {
          document.querySelectorAll('.pm-button')[0].click()
          setTimeout(() => {
              if (document.querySelector(".bid-popup")) {
                  document.querySelector('.submit-btn').click()
              }
          }, 1000)
      }
  },5000)
})();