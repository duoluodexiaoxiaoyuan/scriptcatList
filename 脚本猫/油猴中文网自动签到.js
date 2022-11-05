// ==UserScript==
// @name         油猴中文网每日签到
// @version      0.1.0
// @description  天天签个到有点参与感点
// @author       xiaofeiwu
// @crontab      * * once * * 
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @connect      bbs.tampermonkey.net.cn
// ==/UserScript==


// 获取当天日期 type为1加上当前时间，type为0或者默认的时候只显示年月日
function getNewDate(type = 0) {
  var date = new Date();
  var transverse = "-";
  var Verticalpoint = ":";
  var month = date.getMonth() + 1;//获取月份
  var strDate = date.getDate();//获取具体的日期           
  var strHour = date.getHours();//获取...钟点
  var strMinute = date.getMinutes();//获取分钟数
  var strSeconde = date.getSeconds();//获取秒钟数
  //判断获取月份 、 具体的日期 、...钟点、分钟数、秒钟数 是否在1~9
  //如果是则在前面加“0”
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  console.log(month);
  if (strDate >= 1 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  if (strHour >= 1 && strHour <=9) {
      strHour = "0" + strHour
  }
  console.log(strHour);
  if (strMinute >= 1 && strMinute <= 9) {
      strMinute = "0" + strMinute;
  }

  if (strSeconde >= 1 && strSeconde <= 9) {
      strSeconde = "0" + strSeconde;
  }
  //时间日期字符串拼接
  var NewDate = date.getFullYear() + transverse + month + transverse + strDate
  if(type) {
    NewDate = date.getFullYear() + transverse + month + transverse + strDate + " " +
    strHour + Verticalpoint + strMinute + Verticalpoint + strSeconde;
  }
  //返回拼接字符串
  return NewDate;
}

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
  var formobj = new FormData();
  formobj.append('formhash','44c30ff8');
  formobj.append('qdmode',1);
  formobj.append('todaysay',`今天是${getNewDate()},我又来了`);
  formobj.append('fastreply',0);
  GM_xmlhttpRequest({
      method: "POST",
      url: `https://bbs.tampermonkey.net.cn/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`,
      data: formobj,
      onload: xhr => {
          if(xhr.response.indexOf('您今日已经签到，请明天再来') !== -1){
            GM_notification(`今天是${getNewDate()},您今日已经签到，请明天再来`)
          } else {
            GM_notification(`${getNewDate()}签到成功`)
          }
      },
      onerror: xhr => {
          GM_notification("接口请求失败")
      }
  })
}).catch(err => {
  GM_notification("接口请求失败")
});

