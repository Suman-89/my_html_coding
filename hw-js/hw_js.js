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

