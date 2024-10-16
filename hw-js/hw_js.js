let numArr = [2,3,4,5,3,7,5,9];

function doubleArray(arr){
    let newArr = [];
    for(let i in arr){
        let j = arr[i]*2;
        newArr.push(j);
    }
    return newArr;
}
// console.log(doubleArray(numArr));
function evenArray(arr){
    let newArr = [];
    for(let i in arr){
        if(arr[i] % 2 == 0){
        newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(evenArray(numArr));
function arraySum(arr){
    return arr.reduce((acc,params) => acc + params, 0);
}
// console.log(arraySum(numArr));

function maxNumber(arr){
    return arr.reduce((acc,params)=>{
        return Math.max(acc,params);
    })
}
// console.log(maxNumber(numArr));

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num % i == 0){
            return false;
        }
        return true;
    }
}
function primeArray(arr){
    return arr.filter(isPrime);
}
// console.log(primeArray(numArr));

function ascendingSort(arr){
    return arr.sort((a,b) => a - b);
}
function descendingSort(arr){
    return arr.sort((a,b) => b - a);
}
// console.log('Ascending order --> ',ascendingSort(numArr));
// console.log('Descending order -->',descendingSort(numArr));

function remDup(arr){
   return arr.filter((value,index) => arr.indexOf(value) == index);
// return arr.filter((value,index) => console.log( arr.indexOf(value)));

}
// console.log('Original Array -->', numArr);
// console.log('remDup -->',remDup(numArr));
// remDup(numArr);

function avgNumber(...nums){
    let total = nums.reduce((acc,value) => acc + value,0);
    return total / nums.length;
}
function mxNumber(...nums){
    return nums.reduce((a,v)=>Math.max(a,v));
}
// console.log(avgNumber(1,3,5,7,9));
// console.log(mxNumber(1,3,5,7,9));
// mxNumber(1,3,5,7,9);

// 12
function createArray(...params){
    let arrNew = [];
    for(let i in params){
        if(params[i].length >= 4){
            arrNew.push(params[i]);
        }
    }
    return arrNew;
}
// console.log(createArray('suman','adi','serr','sdfrty'));

// 13
let arrObj = [
    {name:'Suman'},
    {name:'Aditya'},
    {name:'Shree'}
]
function updateArray(arr) {
    return arr.map((v)=> {
        if(v.name == 'Suman'){
            v.name = 'Ram';
        }
        return v;
    });
}
// updateArray(arrObj);
console.log('Original Array -->',arrObj);
console.log('Updated Array -->',updateArray(arrObj));