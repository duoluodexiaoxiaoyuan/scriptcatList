// ==UserScript==
// @name         淘宝拍卖成交跳转到指定网页
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://item-paimai.taobao.com/pmp_item/*
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  setInterval(() => {
      let paiMaiSuccess = document.querySelector('.bid-result.pm-money').innerText
      console.log('拍卖时提醒', paiMaiSuccess)
      if (paiMaiSuccess.indexOf('拍卖已成交') !=  -1) {
          // 跳转到百度
          // window.location.href = 'https://www.baidu.com'
          // 关闭当前页
          //  window.close()
      }
  }, 5 * 1000)
  
})();