const name = '李四'
const data = {
}

function caoZuo() {
  const {name: returnName} = data   
  let b = returnName || name
  console.log(b)    // 这个时候b是李四
}
caoZuo()







// const data = {
//   // name: "张三"
//   // name: ""
// }

// function caoZuo() {
//   const {name: returnName} = data 

//   let b = returnName || name 
//   console.log(b)
// }


