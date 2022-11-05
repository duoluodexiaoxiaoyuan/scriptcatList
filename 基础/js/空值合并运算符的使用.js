// 我们定义一个值  用||的话前面是0，false,null,undefined都会输出后面的值，但是我只想前面为null,undefined的时候输出后面的值
// 为false，0这些也代表我有值
let name;
// let a = 0 || '哈哈'     // 哈哈
// let b = false || 'hehe'   // hehe
// let c = null || 'heihei' // heihei
// let d = name || '张三'  // 张三


let a = 0 ?? '哈哈'     // 0
let b = false ?? 'hehe'   // false
let c = null ?? 'heihei' // heihei
let d = name ?? '张三'  // 张三