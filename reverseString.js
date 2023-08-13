function revrseString(str){
    let newStr = str.split("");
    str = newStr.reverse().join("");
    console.log(str);
    return str;
}
let str = "Hare Rama Hare krishna";
//eraH amaR eraH anhsirk
let splitedString = str.split(" ");
console.log(splitedString);
let allReverseStrings = [];
for(var itr of splitedString){
   allReverseStrings.push(revrseString(itr));
}
str = allReverseStrings.join(" ");
console.log(str);

