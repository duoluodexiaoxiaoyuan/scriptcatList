let str = 'abc'
let left = 0
let count = 0
let right = 1
let list = []



// 这样写第三次进不来了，假设用count就可以了
while(right - left !== str.length) {
  if(right == str.length) {
    count += 1
    list.push(str.slice(left,right))
    left = 0 
    right = 1 + count
    debugger
  } else {
    list.push(str.slice(left,right))
    left++
    right++
  }
}


list = new Set(list)
console.log(list)




