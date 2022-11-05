let obj = null
console.log(obj.name)
// 我们平时在项目中加入后端传入的数据的data有时候是null,然后我们要是对象的时候取对象里面的某一个值
if(obj && obj instanceof Object){
  console.log(obj.name)
}


// 假如用了可选链选择符，我们可以这样写
console.log(obj?.name)


// 上面是为了防止obj为null,undefined的时候， 直接obj.name会报错    如果初始值obj为{},是不会报错的



/*
  数组也是一样
*/
let list;

// 之前我们要这样写
if(list instanceof Array && list.length > 0) {
  list.map((item) => {
    console.log(item)
  })
}


// 现在这样写就好了
list?.map((item) => {
  console.log(item)
})




