function getQueryVariable(variable){
  // let query = window.location.search.substring(1);
  // https://pauction.shop.jd.com/platform/gem/index/create?skuDetailId=7575923&type=2&skuId=10033910781087
  let query = 'skuDetailId=7575923&type=2&skuId=10033910781087';
  let vars = query.split("&");
  for (let i=0;i<vars.length;i++) {
          let pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

console.log(getQueryVariable('skuId'));

let item_id = '681184143568'
let data = [
  {
      "SKU": "681184143568",
      "七天无理由（1代表勾）（0代表不勾）": 0,
      "先鉴别后发货": 1,
      "起  拍  价": 88888,
      "保  证  金": 200,
      "拍卖类型": "增价拍",
      "即刻拍时间": 0
  },
  {
      "SKU": "658526594850",
      "七天无理由（1代表勾）（0代表不勾）": 0,
      "先鉴别后发货": 1,
      "起  拍  价": 5555555,
      "保  证  金": 300,
      "拍卖类型": "即刻拍",
      "即刻拍时间": 1
  }
]

let matchGoods = data.filter((item) => item.SKU == item_id)
console.log(matchGoods)

for(let key in matchGoods[0]) {
  // console.log(key)
  if (key == '七天无理由（1代表勾）（0代表不勾）') {
    console.log('选中7天无理由')
    console.log(matchGoods[0][key])
  }
}

