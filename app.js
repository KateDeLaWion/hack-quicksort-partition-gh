
// 2 ways I used to solve the Hackerrank quicksort partition coding challenge:
// return arr.sort(function(a,b){return a-b})
// return arr.sort((a,b)=>a-b)

let arr=[4,5,3,7,2];
let arrSorted=[];

arrSorted=arr.sort(function(a,b){return a-b})
console.log(arrSorted)


