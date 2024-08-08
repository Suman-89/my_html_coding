// console.log("Hi");
// let totalPensionAmount = 298347892 ;
// let roundedValue = Math.round(totalPensionAmount * 0.22 * 100) / 100;
// console.log("roundedValue-->",roundedValue);

// roundedValue = totalPensionAmount * .3 * 100
// let value = roundedValue / 100;
// console.log("value-->",value);

// document.getElementById('reset').onclick = () => console.log("Reset");

// let feature = execution.getVariable("additionalFeatures");
// let featureName = feature.map((data)=>data.name);
// execution.setVariable("feature",featureName);

let arr = [{ id: 3507, name: "Car Indicator LED Display" }, { id: 3509, name: "Landing Indicator LED Display" }, { id: 3510, name: "Overload Sensor" }, { id: 3508, name: "Glass door" }];
let newArr = arr.map(function (data) { return data.name });
// console.log("New Arr-->", newArr);

const num = [1,3,6,7,8];
let l = num.length;
function rev(arr){
    for(var i=0;i<=l/2;i++){
        let temp = arr[i];
        arr[i] = arr[l-1-i];
        arr[l-1-i] = temp;
    }
    return arr;
}
console.log(rev(num));