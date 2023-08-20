
let obj = { a: 1, b: 2, c: 3 };

let keys = Object.keys(obj);
let values = Object.values(obj);
console.log(keys, values);
const getKey =  keys.map((item) => item) ;

 console.log({first:getKey});
console.log("==>", {first:keys.map((item)=> item), second:values});
