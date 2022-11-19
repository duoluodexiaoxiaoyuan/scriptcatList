//一个对象，存储页面图片数量和下载的数量
var monitorObj = {
      imgTotal:  0,
      imgLoaded: 0 
}
//创建a标签，赋予图片对象相关属性，并插入body
var createA = function (obj) {
    var a = document.createElement("a");
    a.id = obj.id;
    a.target = "_blank";//注意：要在新页面打开
    a.href = obj.url;
    a.download = obj.url;

    document.body.appendChild(a);
}

//获取页面的图片
var imgs = document.images;
//创建每个图片对象的对应a标签
for (var i = 0; i < imgs.length;i++){
    var obj = {
        id: "img_" + i,
        url: imgs[i].src
    }
    //过滤掉不属于这几种类型的图片
    // if (["JPG", "JPEG", "PNG","GIF"].indexOf(obj.url.substr(obj.url.lastIndexOf(".")+ 1).toUpperCase()) <  0) {
    //     continue;
    // }
    //这里是为了去掉知乎用户头像的图片，头像大小是  *  
    // if (imgs[i].width <= 50   || imgs[i].height <= 50 ) {
    //     continue;
    // }
    //统计图片数量
    monitorObj.imgTotal++;
    createA(obj);
}
//开始下载图片
for (var i = 0; i < imgs.length; i++) {
    if (document.getElementById("img_" + i)) {
        //重点：触发a标签的click事件        
        document.getElementById("img_" + i).click();
        monitorObj.imgLoaded++; //统计已下载的图片数量
    } 
} 
console.log("已下载："+monitorObj.imgLoaded + "/" + monitorObj.imgTotal);