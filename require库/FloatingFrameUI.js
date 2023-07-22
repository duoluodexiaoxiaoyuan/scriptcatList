// ==UserScript==
// @name       FloatingFrameUI 
// @author     xiaofeiwu
// @version      1.0.5
// ==/UserScript==
function FloatingFrameUI() {
  var floatingBox = function (options) {
      var element = document.createElement('p');
      element.innerHTML = '';
      // 默认配置项
      var defaults = {
          content: 'Hello World', // 悬浮框内容
          width: '200px',
          height: '200px',
          backgroundColor: 'skyblue',
          color: '#fff', // 文字颜色
          background: '#333', // 背景颜色
          padding: '10px', // 内边距
          borderRadius: '5px', // 圆角半径
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // 阴影效果
          zIndex: 9999,
          position: { // 悬浮框位置
              top: '50px',
              left: '50px',
          },
          draggable: true, // 支持拖动
          prohibitDragUrl: [],
          showFloatUrl: ['bbs.tampermonkey.net.cn'], // 展示悬浮框的url
          hideFloat: false,  // 是否隐藏悬浮框
          element: element
      };
      // 合并配置项
      var settings = Object.assign({}, defaults, options);

      // 如果hideFloat为true就不创建悬浮框
      if (settings.hideFloat) {
          return false;
      }
      // 创建悬浮框元素
      var box = document.createElement('div');
      box.style.position = 'fixed';
      box.style.top = settings.position.top;
      box.style.left = settings.position.left;
      box.style.width = settings.width;
      box.style.height = settings.height;
      box.style.color = settings.color;
      box.style.zIndex = settings.zIndex;
      box.style.background = settings.background;
      box.style.padding = settings.padding;
      box.style.borderRadius = settings.borderRadius;
      box.style.boxShadow = settings.boxShadow;
      // box.style.backgroundColor =  settings.position.backgroundColor;
      box.innerHTML = settings.content;

      // 如果有自定义标签内容，添加到悬浮框元素中
      if (settings.element) {
          box.appendChild(settings.element);
      }

      // 添加悬浮框元素到页面
      document.body.appendChild(box);
      settings.prohibitDragUrl.map((item, index) => {
          if (window.location.href.indexOf(item) > -1) {
              settings.draggable = false
          }
      })
      // 如果支持拖动
      if (settings.draggable) {
          var isDragging = false; // 是否在拖动中
          var startOffset = { x: 0, y: 0 }; // 鼠标按下时的偏移量

          // 鼠标按下事件
          box.addEventListener('mousedown', function (e) {
              isDragging = true;
              startOffset.x = e.clientX - box.offsetLeft;
              startOffset.y = e.clientY - box.offsetTop;
              box.style.cursor = 'move';
          });

          // 鼠标移动事件
          document.addEventListener('mousemove', function (e) {
              if (isDragging) {
                  box.style.top = e.clientY - startOffset.y + 'px';
                  box.style.left = e.clientX - startOffset.x + 'px';
              }
          });

          // 鼠标松开事件
          document.addEventListener('mouseup', function (e) {
              isDragging = false;
              box.style.cursor = 'default';
          });
      }
      settings.showFloatUrl.map((item, index) => {
        if (window.location.href.indexOf(item) > -1) {
            box.style.display = 'block'
        } else {
            box.style.display = 'none'
        }
      })
      // 返回悬浮框元素
      return box;
  };

  return floatingBox;
}