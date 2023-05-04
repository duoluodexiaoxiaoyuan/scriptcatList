const WebSocket = require('ws');

// 创建WebSocket服务器
const wss = new WebSocket.Server({ port: 8080 });

// 监听WebSocket连接事件
wss.on('connection', function(ws) {
  console.log('WebSocket连接已建立');

  // 监听WebSocket消息事件
  ws.on('message', function(message) {
    const ranking = JSON.parse(message);
    // 处理排名信息
    processRanking(ranking);

    // 将排名信息广播给所有连接的客户端
    wss.clients.forEach(function(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(ranking));
      }
    });
  });
});

// 处理排名信息
function processRanking(ranking) {
  console.log(`第${ranking.screen}屏排名：${ranking.ranking.join(', ')}`);
}

// 启动WebSocket服务器并监听端口
wss.on('listening', function() {
  console.log('WebSocket服务器已启动，监听端口8080');
});

wss.on('error', function(error) {
  console.error('WebSocket服务器发生错误：', error);
});

wss.on('close', function() {
  console.log('WebSocket服务器已关闭');
});