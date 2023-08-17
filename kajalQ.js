let str  ="I love dogs";
function StringChallenge(sen){
    let arr = str.split(" ");
    let newSen = "";
    let maxLength = 0 ; 
    for (const itr of arr){
        if(itr.length > maxLength){
            maxLength = itr.length;
            newSen = itr;
        }
    }
    return newSen;
}
console.log(StringChallenge(str));
console.log("kajal");