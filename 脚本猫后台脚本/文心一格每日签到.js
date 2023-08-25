// ==UserScript==
// @name         文心一格每日签到获取电量
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.1
// @description  每日签到获取电量，但是电量有效期是一个月，所以不用的话就不用安装脚本了
// @author       小垃圾kiki
// @crontab      * * once * *
// @connect      yige.baidu.com
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// ==/UserScript==



return new Promise((resolve, reject) => {
  //  实时获取时间戳，防止封号
 const timestamp = new Date().getTime();
 GM_xmlhttpRequest({
   method: "GET",
   url: `https://yige.baidu.com/api/t2p/points/task_complete?t=${timestamp}&appname=pc&ptask_type=6`,
   onload: xhr => {
       console.log(xhr)
       let data = JSON.parse(xhr.response)
       let { message } = data
       if (message === 'success') {
         GM_notification(`文心一格签到成功`)
       } else if (message === 'already signed') {
         GM_notification(`文心一格，您已经签过到了，请明天再来吧`)
       } else {
         GM_notification(`文心一格，签到失败，请联系开发者处理`)
       }
   },
   onerror: xhr => {
       GM_notification("接口请求失败")
   }
})
}).catch(err => {
GM_notification("接口请求失败")
});;
