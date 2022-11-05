// ==UserScript==
// @name         shabi
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  b站获取直播列表
// @author       xiaofeiwu
// @match        https://t.bilibili.com/
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net.cn
// @grant        unsafeWindow
// @run-at document-start
// @grant        GM_addStyle
// @connect      api.live.bilibili.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

function request(){
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url:"https://api.live.bilibili.com/xlive/web-ucenter/user/following?page=1&page_size=29",
      method :"GET",
      headers: {
          "cookie": document.cookie
      },
      onload:function(xhr){
          let res = JSON.parse(xhr.responseText)
          // 拿到关注up的list
          resolve(res.data.list)
      }
    });
  })
}

function createDiv() {
  var div = document.createElement("div");
  div.setAttribute('class', 'upList')
  document.body.append(div)
}

function createUpListDate(){
  var ol = document.createElement("ol");
  ol.setAttribute('class', 'upListOl')
  request().then((res) => {
    console.log(res);
    res.map((item,index) => {
       if(item.live_status == 1) {
        ol.innerHTML += '<li>' + item.uname + ' ' + '正在直播' + '</li>'
       }
        
    })
    document.getElementsByClassName("upList")[0].append(ol)
  })
}

setTimeout(() => {
  createDiv()
  createUpListDate()
}, 2000)






GM_addStyle(`
    .upList {
      position: fixed;
      background: skyblue;
      top:100px;
      right:5px;
      width: 200px;
      height: 200px;
      z-index: 999;
    }
    .upListOl {
      margin
    }
`)


