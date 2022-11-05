// ==UserScript==
// @name         百度贴吧自动签到
// @description  定时脚本，请使用脚本猫安装，并确保你的百度账号处于登录状态。
// @namespace    cxxjackie
// @author       cxxjackie
// @version      0.6.0
// @crontab      * 1-23 once * *
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_getValue
// @connect      tieba.baidu.com
// @require      https://scriptcat.org/lib/532/1.0.1/ajax.js
// @homepage     https://bbs.tampermonkey.net.cn/forum.php?mod=viewthread&tid=926
// @supportURL   https://bbs.tampermonkey.net.cn/forum.php?mod=viewthread&tid=926
// ==/UserScript==

/* ==UserConfig==
设置:
  DelayMode:
    title: 延迟签到模式
    default: true
  Notice:
    title: 通知窗口
    default: 总是
    values: [总是, 仅失败时, 关闭]
 ==/UserConfig== */

 function notify(message) {
  GM_notification({
      title: '贴吧签到',
      text: message
  });
}
ajax('default', {
  responseType: 'json',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Origin': 'https://tieba.baidu.com'
  },
  timeout: 20000
});
return new Promise(async (resolve, reject) => {
  const delayMode = GM_getValue('设置.DelayMode', false);
  const notice = GM_getValue('设置.Notice', '总是');
  try {
      const getTbs = await ajax('https://tieba.baidu.com/dc/common/tbs');
      const tbs = getTbs.tbs;
      await ajax('https://tieba.baidu.com/tbmall/onekeySignin1', {
          method: 'post',
          data: `ie=utf-8&tbs=${tbs}`,
          headers: {referer: 'https://tieba.baidu.com/index.html'}
      });
      // const html = await ajax('https://tieba.baidu.com/index.html', { responseType: 'text' });
      // const forums = JSON.parse(html.match(/(?<="forums":)\[.*?\]/)[0]);
      const getForums = await ajax('https://tieba.baidu.com/mo/q/newmoindex');
      const forums = getForums.data.like_forum;
      const unsigns = forums.filter(forum => forum.is_sign != 1);
      let success = forums.length - unsigns.length;
      for (const forum of unsigns) {
          // 贴吧会检测是否签到过快，所以这里不用Promise.all
          const doSign = await ajax('https://tieba.baidu.com/sign/add', {
              method:'post',
              data: `ie=utf-8&kw=${forum.forum_name}&tbs=${tbs}`,
              headers: {referer: `https://tieba.baidu.com/f?ie=utf-8&kw=${encodeURIComponent(forum.forum_name)}`}
          });
          if (doSign.no == 0) success++;
          if (delayMode) await new Promise(resolve => setTimeout(resolve, 1500));
      }
      const fail = forums.length - success;
      const message = `签到完成，已签到${success}个吧，失败${fail}个吧。`;
      if (notice === '总是' || (notice === '仅失败时' && fail > 0)) {
          notify(message);
      }
      resolve(message);
  } catch(e) {
      if (notice !== '关闭') {
          notify(e.error === 'timeout' ? '签到失败，请检查你的网络状态。' : '签到失败，请检查你的登录状态。');
      }
      reject(e);
  }
});