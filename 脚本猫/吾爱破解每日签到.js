// ==UserScript==
// @name         吾爱破解每日定时签到【脚本猫专用】
// @version      0.1.1
// @description  定时脚本，每日1次，需要先登陆www.52pojie.cn
// @author       DreamNya
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @connect      52pojie.cn
// @crontab      1-59 * once * *
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
      method: "GET",
      url: "https://www.52pojie.cn/home.php?mod=task&do=apply&id=2",
      onload: xhr => {
          console.log(xhr)
          try {
              resolve(xhr.responseText.match(/dynamicurl\|\/(.+?)\|/)[1])
          } catch {
              let text = "吾爱破解定时签到失败-重复签到"
              GM_notification(text)
              reject(text)
          }
      },
      onerror: xhr => {
          console.log(xhr)
          let text = "吾爱破解定时签到失败-网络错误或重复签到"
          GM_notification(text)
          reject(text)
      }
  })
}).then(url => {
  return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
          method: "GET",
          url: "https://www.52pojie.cn/" + url + "?wzwscspd=MC4wLjAuMA==",
          onload: xhr => {
              console.log(xhr)
              let text
              if (xhr.responseText.includes("任务已完成")) {
                  text = "吾爱破解定时签到成功"
                  GM_notification(text)
                  resolve(text)
              } else if (xhr.responseText.includes("本期您已申请过此任务")) {
                  text = "吾爱破解定时签到失败 - 重复签到"
                  GM_notification(text)
                  resolve(text)
              } else {
                  text = "吾爱破解定时签到失败-未知错误-详见调试"
                  GM_notification(text)
                  reject(text)
              }
          },
          onerror: xhr => {
              console.log(xhr)
              let text = "吾爱破解定时签到失败-网络错误"
              GM_notification(text)
              reject(text)
          }
      })
  })
})