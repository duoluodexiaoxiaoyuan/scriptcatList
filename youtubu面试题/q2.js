/*
  const aa = { a: 'tz', b: { c: { tz: 'name', }, }, };
  编一个函数输出{ a:'tz', b.c.tz:'name' }
*/
function changeObject(duixiang) {
  // 将对象进行处理，如果是多级对象层级改为一级，键值为多级键值拼接
  let result = {};
  function change(duixiang, key) {
    for (let i in duixiang) {
      if (typeof duixiang[i] === 'object') {
        change(duixiang[i], key + '.' + i);
      } else {
        result[key + '.' + i] = duixiang[i];
      }
    }
  }
  // 遍历对象然后调用change方法
  for (let i in duixiang) {
    if (typeof duixiang[i] === 'object') {
      change(duixiang[i], i);
    } else {
      result[i] = duixiang[i];
    }
  }
  return result
}

console.log(changeObject({ a: 'tz', b: { c: { tz: 'name', }, },}));