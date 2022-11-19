var isValid = function(s) {
  let flag = false
  let flagList = []
  if(s.length % 2 !== 0) {
    return flag
  }
  for(i=0;i<s.length/2;i++) {
    // if(s[i] == '(' && s[s.length-1-i]== ')'){
    //     flagList.push(true) 
    // }else if(s[i] == '{' && s[s.length-1-i] == '}') {
    //     flagList.push(true) 
    // }else if (s[i] == '[' && s[s.length-1-i] == ']') {
    //     flagList.push(true) 
    // }else if (s[i] == ')' && s[s.length-1-i] == '(') {
    //     flagList.push(true) 
    // }else if (s[i] == '}' && s[s.length-1-i] == '{') {
    //     flagList.push(true) 
    // }else if (s[i] == ']' && s[s.length-1-i] == '[') {
    //     flagList.push(true) 
    // }else {
    //     flagList.push(false) 
    // }
    if(s[i] == '(' && s[s.length-1-i]== ')'){
        flagList.push(true) 
    }else if(s[i] == '{' && s[s.length-1-i] == '}') {
        flagList.push(true) 
    }else if (s[i] == '[' && s[s.length-1-i] == ']') {
        flagList.push(true) 
    }else {
        flagList.push(false) 
    }
  }
  if(flagList.filter((item) => !item).length > 0) {
  } else {
    return true
  }

  // 思路就是因为只有3种情况，那我们就可以直接分析如果i是(那么i+1一定是)
  // 如果不是直接返回false(这的不是包含s的长度只为1的情况也包含进行了)


  // 突然想到了另外一种思路该字符串必为偶数,然后我们在两个为一组进行分割
  // 如果可以判断左右对称就好了。分组以后直接进行遍历
  // 如果 if(item == '()' || item == '{}' || item == '[]')则返回true
  // for(i=0;i<s.length;){
  //   if(s[i] == '('){
  //     if(s[i+1] == ')') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   } else if (s[i] == '[') {
  //     if(s[i+1] == ']') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   }else if (s[i] == '{') {
  //     if(s[i+1] == '}') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   } else if (s[i] == ')') {
  //     if(s[i+1] == '(') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   } else if (s[i] == '}') {
  //     if(s[i+1] == '{') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   } else if (s[i] == '[') {
  //     if(s[i+1] == ']') {
  //         flag = true
  //         if(s[i+2]){
  //           i=i+2
  //         }else {
  //           return flag
  //         }
  //     } else {
  //         flag = false 
  //         return flag
  //     }
  //   } else {
  //     return false
  //   }
  // }
  for(i=0;i<s.length;){
    if(s[i] == '('){
      if(s[i+1] == ')') {
          flag = true
          if(s[i+2]){
            i=i+2
          }else {
            return flag
          }
      } else {
          flag = false 
          return flag
      }
    } else if (s[i] == '[') {
      if(s[i+1] == ']') {
          flag = true
          if(s[i+2]){
            i=i+2
          }else {
            return flag
          }
      } else {
          flag = false 
          return flag
      }
    }else if (s[i] == '{') {
      if(s[i+1] == '}') {
          flag = true
          if(s[i+2]){
            i=i+2
          }else {
            return flag
          }
      } else {
          flag = false 
          return flag
      }
    } else {
      return false
    }
  }

  // 上面的情况没有考虑到"{[]}"这种对称的情况
  
};

// console.log(isValid('({{{{}}}))'))


// 这个很暴力，但是也很好理解
let str = '((({})))'
while(str.indexOf('()') > -1 || str.indexOf('{}') > -1 || str.indexOf('[]') > -1) {
  str = str.replace('()', '')
  str = str.replace('{}', '')
  str = str.replace('[]', '')
}
return str.length == 0
console.log('----',str)