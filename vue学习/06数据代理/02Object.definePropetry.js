let person = {}
// set和get中的this都是指当前对象(如下这么写会形参递归，无限循环了)
// Object.defineProperty(person, 'name', {
//   set(value,b){  // 当修改person.name时候set被调用，set会收到新的值
//     console.log('set',value);
//     this.name = value
//   },
//   get(){ //当读取person.name时,get被调用，get的返回值就是name的值
//     console.log('get');
//     return 100
//   }
// })

console.log(person.name);
// 模拟数据代理
let _data = {msg: "sgg"}
let vm = {}

Object.defineProperty(vm, 'msg', {
  set(value){
    _data.msg = value
  },
  get(){
    return _data.msg
  }
})
console.log(vm);
