let numArr = [2,3,4,5,6,7,8,9];

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
    for(let p in arr){
        if(arr[p]){
            return arr.filter(arr[p]);
        }
    }
}
console.log('remDup -->',remDup(numArr));