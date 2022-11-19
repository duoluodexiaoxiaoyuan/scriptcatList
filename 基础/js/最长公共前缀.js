var longestCommonPrefix = function(strs) {
  // 最上面直接考虑一下数组中只有一个元素的情况吧
  if(strs.length == 1) {
    return strs[0]
  }



  // 获取最小值有多少个连续的组合
  function getMinValueCollection(str){
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
    return list
  }
  // 找出最小的字符串
  let minValue = null
  // 公共的值的组合
  let commonList = {}
  strs.map((item,index) => {
    if(minValue && minValue.length < item.length){

    }else {
        minValue = item 
    }
  })
  let minValueCollection = getMinValueCollection(minValue)
  debugger
  // 把最小的字符串过滤出来
  newStrs = strs.filter((item) => item!== minValue)
  // 为了解决["flower","flower","flower","flower"] 这种情况
  if(strs.length > 0 && newStrs.length == 0) {
    return strs[0]
  }

  for(let val of minValueCollection) {
    newStrs.map((item) => {
      // 这样写直接就是前缀的情况下进行的操作["abca","aba","aaab"]解决这个问题
      if(item.indexOf(val) == 0){
        // 加这个if是为了防止出现["dog","racecar","car"]，如果有一个元素都有的时候我们应该设置为false
        if(commonList[val] == false) {
          
        } else {
          commonList[val] = true
        }
        
      } else {
        commonList[val] = false
      }
    })
  }
  if(JSON.stringify(commonList) == '{}') {
    return ''
  } else {
    // 过滤出为true的
    let result = []
		result = Object.entries(commonList).filter(item =>  item[1] )
    console.log(result)
    // 最长前缀
    let maxQianZhui = ''
    result.map((item) => {
      // 这里就需要判断是不是公共前缀了
      strs.map((item1) => {
        if(item1.indexOf(item[0]) !== 0){
          
        } else {
          if(item[0].length > maxQianZhui.length) {
            maxQianZhui = item[0]
          }
        }
      })
     
    })
    console.log('maxQianZhui',maxQianZhui)
    // 判断是不是公共前缀(这里也得加一下)
    // 前缀没理解到位，写复杂了，但是不想改了，我最后for循环判断一下了
    strs.map((item) => {
      if(item.indexOf(maxQianZhui) !== 0){
        maxQianZhui = ''
      }
    })

    return maxQianZhui
  }
};
console.log(longestCommonPrefix(["abca","aba","aaab"]))
