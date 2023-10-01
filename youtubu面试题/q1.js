// 写一个函数，接收一个字符串，将字符串偶数字符大写，奇数字符小写，返回新的字符串
// 例如：changeCase('abcdefg') // => 'AbCdEfG'
const camelLetters = (string) => {
  let arr = string.split('');
  let result = arr.map((item, index) => {
    if (index % 2 === 0) {
      return item.toUpperCase();
    } else {
      return item.toLowerCase();
    }
  });
  return result.join('');
}

console.log(camelLetters('hello'));
console.log(camelLetters('yo eli'));
console.log(camelLetters('hello???'));
console.log(camelLetters('HELLO'));