let str = 'abcabc'
let left = 0
let right = 1
// 计算执行了几个来回，刚开始是0来回
let count = 0
// 01 12 23  02 13 03
let list = []

while(count !== str.length) {
  if(right == str.length) {
    count += 1
    list.push(str.slice(left,right))
    left = 0 
    right = 1 + count
  } else {
    list.push(str.slice(left,right))
    left++
    right++
  }
}
// 使用new Set去重
list = new Set(list)





