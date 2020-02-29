
// Different ways I used to solve the Hackerrank quicksort partition coding challenge:


// First way
// return arr.sort(function(a,b){return a-b})


// Second way
// return arr.sort((a,b)=>a-b)


// Third way
let arr=[4,5,3,7,2];
let arrSorted=[];

let arrMid=[]
arrMid.push(arr[0])
let arrLeft=[]
let arrRight=[]
 
for ( let i=1; i<=arr.length-1; i++){
    if(arr[i]<arrMid){
        arrLeft.push(arr[i]);
    }
    else{
        arrRight.push(arr[i]);
    }
}

arrSorted=arrLeft.concat(arrMid).concat(arrRight)

console.log(arrSorted)
