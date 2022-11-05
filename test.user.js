// ==UserScript==
// @name         油猴中文网每日签到
// @version      0.1.0
// @description  天天签个到有点参与感点
// @author       xiaofeiwu
// @crontab      * once * * *
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @connect      bbs.tampermonkey.net.cn
// ==/UserScript==






return new Promise((resolve, reject) => {
  //   * * * * * * 每秒运行一次
  //   * * * * * 每分钟运行一次
  //   0 */6 * * * 每6小时的0分时执行一次
  //   15 */6 * * * 每6小时的15分时执行一次
  //   * once * * * 每小时运行一次
  //   * * once * * 每天运行一次
  //   * 10 once * * 每天10点-10:59中运行一次,假设当10:04时运行了一次,10:05-10:59的后续的时间将不会再运行
  //   * 1,3,5 once * * 每天1点3点5点中运行一次,假设当1点时运行了一次,3,5点将不会再运行
  //   * */4 once * * 每天每隔4小时检测运行一次,假设当4点时运行了一次,8,12,16,20,24点等后续的时间将不会再运行
  //   * 10-23 once * * 每天10点-23:59中运行一次,假设当10:04时运行了一次,10:05-23:59的后续时间将不会再运行
  //   * once 13 * * 每个月的13号的每小时运行一次
  GM_xmlhttpRequest({
      method: "POST",
      url: `https://bbs.tampermonkey.net.cn/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`,
      onload: xhr => {
          console.log(xhr)
          GM_notification(xhr)
          // 这里我们通过xhr拿值的时候先调试一些确认取得是哪个字段
          // let data = JSON.parse(xhr.response)
          // GM_notification(data.note)
          // GM_notification(data.content)
      },
      onerror: xhr => {
          console.log(xhr)
          GM_notification(xhr)
          // GM_notification("接口请求失败")
          // reject(xhr)
      }
  })
}).catch(err => {
  GM_notification("接口请求失败")
});
