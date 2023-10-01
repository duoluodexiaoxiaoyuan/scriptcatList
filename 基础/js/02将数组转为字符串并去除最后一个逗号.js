// let a = ["1,23,3","1\n2\n3\n", "1\n","4","5"];
// let str = a.join(',').replace(/[\n,]/g, ',');
// // let result = str.split(',');
// console.log(str); // ["1", "23", "3", "1", "2", "3", "1", "4", "5"]


// let a = ["1,23,3","1\n2\n3\n", "1\n","4","5"];
// let str = a.join(',').replace(/[\n,]/g, ',');
// console.log(str); // "1,23,3,1,2,3,1,4,5"

let a = ["1,23,3","1\n2\n3\n", "1\n","4","5"];
let str = a.join(',').replace(/[\n,]+/g, ',');
if (str.endsWith(',')) {
  str = str.slice(0, -1);
}
console.log(str); // "1,23,3,1,2,3,1,4,5"
