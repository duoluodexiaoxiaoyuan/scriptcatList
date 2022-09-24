// launchApp('支付宝')

// var confirmRepeat = confirm("确认开始进行")
// if(confirmRepeat){
//   toast("开始执行")
// }else {
//   toast("回到上一级")
// }

let num = 0

// 一直翻
function reverseRepat(){
  num = num + 1
  console.log(num);
  // if (num == 7) {
  //   clearInterval(timer)
  // }
  Math.floor((Math.random()*10)+1) ? click(292,1293) : click(774,1293)
  setTimeout(() => {
    console.log('执行');
    click(540,1756)
  }, 5000);
}

// reverseRepat()
let timer = setInterval(() => {
  reverseRepat()
}, 6000);

