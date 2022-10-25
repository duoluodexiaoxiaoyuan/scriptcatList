/* 
  
  昨天用到了，所以记录一下。
  主要注意的点，new RegExp里面传入不是字符串，如果你传入的是字符串，就涉及到了转义了。
  所以我们可以得出结论，字符串中只有\会出现问题,如果要写反斜杠要写两次\,斜杠写一次就好了(只要我们涉及到\d,字符串中就要写成\d, \w=>\w)
  然后就是exec的用法，这里也没有彻底搞懂，但是感觉其实也用不到，下面的案例可以参考，案例写法就可以。感觉test,match,replace就够用了。
*/
// var patt1=new RegExp('/+')
// console.log(patt1);
// let a = patt1.exec("%1212323//42434,.123%123")
// console.log(a);
// 最终搞出来了
var patt1=new RegExp('\\d+','g')
console.log(patt1);
let a = patt1.exec("%121232342434,.123%123")
console.log(a);



// 正则写法1
// var patt1=new RegExp(/\d+/g)
// console.log(patt1);
// let a = patt1.exec("%121232342434,.123%123")
// console.log(a);

// 正则写法2
// /\/d+\/g/
// /\d+/g
// var patt1=new RegExp('\\d+')
// console.log(patt1);
// let a = patt1.exec("%121232342434,.123%123")
// console.log(a);

// 正则写法3
// var patt1=new RegExp('\\d+','g')
// console.log(patt1);
// let a = patt1.exec("%121232342434,.123%123")
// console.log(a);

// 正则写法4
// var patt1= /\d+/g
// console.log(patt1);
// let a = patt1.exec("%121232342434,.123%123")
// console.log(a);


// 正则工具地址https://c.runoob.com/front-end/854/
// 正则中match的使用
// var pattern = /[0-9]+/g
// var str = '123abc456def'
// console.log(str.match(pattern));

// exec注意事项，/g要加,while里面arr = pattern.exec(str)要加，否则就会造成死循环，相信我不会用exec了，因为没必要，match，replace一般的问题都可以解决
// var pattern = /[0-9]+/g
// var str = '123abc456def'
// let arr = pattern.exec(str)
// while(arr != null){
//   console.log(arr);
//   arr = pattern.exec(str)
// }



// let str="web2.0 .net2.0";
// let pattern=/(\w+)(\d)\.(\d)/g;//有全局标志g
// let arr = pattern.exec(str);

// while(arr !== null) {
//     console.log(`匹配${arr[0]}成功，该结果的起始位置在${pattern.lastIndex}`);
//     // 匹配web2.0成功，该结果的起始位置在6
//     // 匹配net2.0成功，该结果的起始位置在14
//     arr = pattern.exec(str);
// }
// console.log(arr);

