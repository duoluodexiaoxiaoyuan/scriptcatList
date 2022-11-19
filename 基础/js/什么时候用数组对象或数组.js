let data = [
  {
    sex:1
  },
  {
    sex:0
  },
  {
    sex:1
  },
  {
    sex:0
  },
  {
    sex:1
  }

]


let sexType = [
  {
    type: 1,
    label: '男'
  },
  {
    type: 0,
    label: '女'
  }
]

data.map((item) => {
  // 一个item会匹配一次sex.type
  let label = sexType.map((sex) => {
    if(item.sex == sex.type){
      return sex.label
    }
    return ''
  })
  console.log(label);
})
