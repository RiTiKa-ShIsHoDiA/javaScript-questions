let str = "aabbccde";
function StringChallenge(str){
    let newStr = "";
    let Count = 0;
    let prev = str[0]
   for (const itr of str) {
      console.log(itr,prev);
      if(itr === prev){
        Count +=1 ;  
      }
      else{
        if(itr === str[str.length -1]){
            newStr += `${Count}${itr}` 
        }
        else{
           newStr += `${Count}${prev}`;
        }
        Count = 1;
      }
      prev = itr;
   }
   return newStr
}
console.log(StringChallenge(str));