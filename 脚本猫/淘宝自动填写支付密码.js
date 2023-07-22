// ==UserScript==
// @name         淘宝自动填写支付密码
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://cashiersa128.alipay.com/*
// ==/UserScript==

(function() {
  'use strict';

  setInterval(() => {
      // 输入支付密码
      document.querySelector('#payPassword_rsainput').value='123456'
      setTimeout(() => {
          // 点击付款
          document.querySelector('#J_authSubmit').click()
      }, 1000)
  }, 3000)
})();