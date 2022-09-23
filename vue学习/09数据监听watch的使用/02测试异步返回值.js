function add(){

  setTimeout(()=>{
      console.log('nihao')
      return "111"
  },1000)
}

function jian(){
  console.log('nihao')
  return "111"
}

console.log(add());  // 因为它执行的比setTimeout执行的快，又忘记了
console.log(jian());