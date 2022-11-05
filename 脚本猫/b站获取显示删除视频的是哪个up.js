// ==UserScript==
// @name         b站的收藏夹悬浮才显示的内容加个button点击全部显示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license MIT
// @description  因为我需要看到作者，所以才想做这个功能
// @author       xiaoxiami
// @match        https://space.bilibili.com/*/favlist?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        unsafeWindow
// @connect      api.bilibili.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  function request(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        url: url,
        method: 'GET',
        headers: {
          cookie: document.cookie,
        },
        onload: function (xhr) {
          let res = JSON.parse(xhr.responseText);
          resolve(res);
        },
      });
    });
  }

  // 获取我们需要的网页上的dom
  function getDomList() {
    // 直接拿到页面显示的每个视频的li
    let liList = document.getElementsByClassName(
      'fav-video-list clearfix content'
    )[0].childNodes;
    return liList;
  }

  // 获取url参数
  function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  }

  // 判断当前页数
  function judgePage() {
    let pages =document.getElementsByClassName("be-pager")[0].childNodes
    for (let item in pages) {
      if(pages[item].classList && pages[item].classList.length > 1){
          let page = pages[item].innerText
          if(page == "上一页") return 1
          return page
      }
    }
  }

  setTimeout(() => {
    // 默认是不显示的
    let flag = false;
    let playPosition = document.getElementsByClassName('favInfo-details')[0];
    let getHoverContent = `<button id="getHoverContent">控制显示和隐藏悬浮内容<button> <button id="displayUp">显示删除的视频是哪个up</button>`;
    playPosition.insertAdjacentHTML('afterend', `${getHoverContent}`);
    let jianTingButton = document.getElementById('getHoverContent');
    let jianTingDisplayUpButton = document.getElementById('displayUp');
    jianTingDisplayUpButton.addEventListener('click', () => {
      // https://space.bilibili.com/778482303/favlist?fid=1590135214&ftype=create   // 这里的778482303对应的就是用户id,1590135214对应的就是每个收藏夹的fid
      let fid = getUrlParam('fid');
      // 判断当前是第几页
      let page = judgePage()
      request(`https://api.bilibili.com/x/v3/fav/resource/list?media_id=${fid}&pn=${page}&ps=20&keyword=&order=mtime&type=0&tid=0&platform=web&jsonp=jsonp`).then((res) => {
        let { medias } = res.data
        let liList = getDomList()
        console.log(medias);
        // 拿到当前页收藏的up的视频list
        // https://space.bilibili.com/23207098
        medias.map((media,index) => {
          if(media.title == "已失效视频") {
            let url = "https://space.bilibili.com/" + media.upper.mid
            let shipinUrl = "https://www.bilibili.com/" + media.bvid
            liList[index].innerHTML = `<a href=${url} target="_blank"><span id="upName">${media.upper.name}<span/>的<span id="shipinName">${media.intro}</sapn>视频已失效，点击跳转其主页</a><p><a href=${shipinUrl}   target="_blank">当然你也可以点击此处跳到视频页确认一下</a></p>`
          }
        })
      }).catch(err => {

      })
    });
  }, 2000);
})();
// 参考文章https://www.jianshu.com/p/d3f5d9565886
GM_addStyle(`
#getHoverContent {
  background-color: skyblue;
  height: 30px;
}

#displayUp {
  background-color: skyblue;
  height: 30px;
}
#getHoverContent+button {
  display:none
}

#upName {
  background-color: pink;
}
#shipinName {
  background-color: orange;
}



`);
