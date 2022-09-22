/*
  !的使用我们这里死记住
  用在变量前表示取反
  用在赋值的内容后时，使null和undefined类型可以赋值给其他类型并通过编译

  ?放到变量后面表示参数可选应该都知道
*/
// interface IDemo {
//   x: number
// }

let y:number

const demo = (parma?: IDemo) => {
  y = parma?.x!
  console.log(parma?.x);
  
}



// 下面是我之前的疑惑的店
let objectList = [
  {
    name: '',
    hobby: ['1','2']
  },
  {
    name: null,
    hobby: ['1','2']
  },
  {
    
  }
]

objectList.map((item) => {
  item.hobby?.map((item) => {
    console.log(item);
    
  })
})
  