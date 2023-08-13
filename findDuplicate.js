let arr = ['a','b','c','a','b'];
let newArr = [];
for (const iterator of arr) {
   if(newArr.indexOf(iterator) < 0 ){
      newArr.push(iterator)
   } 
}
console.log(newArr);