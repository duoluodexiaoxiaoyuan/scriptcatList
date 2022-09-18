// ==UserScript==
// @name         bilibili查看删除视频的up的名字
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  一般感兴趣的才会收藏，所以我比较好奇为什么up要删除视频
// @author       小废物
// @match        https://space.bilibili.com/290513814/favlist?fid=1590135214&ftype=create
// @grant        unsafeWindow
// @connect      api.bilibili.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
  'use strict';
  function request(){
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        url:"https://api.bilibili.com/x/v3/fav/resource/list?media_id=1590135214&pn=3&ps=20&keyword=&order=mtime&type=0&tid=0&platform=web&jsonp=jsonp",
        method :"GET",
        headers: {
            "cookie": document.cookie
        },
        onload:function(xhr){
            let res = JSON.parse(xhr.responseText)
            console.log(res);
            // 拿到关注up的list
            resolve(res.data.list)
        }
      });
    })
  }

  setTimeout(() => {
    console.log(1111);
    request()
  }, 3000);
  
})();