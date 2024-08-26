// // console.log("Hi");
// // let totalPensionAmount = 298347892 ;
// // let roundedValue = Math.round(totalPensionAmount * 0.22 * 100) / 100;
// // console.log("roundedValue-->",roundedValue);

// // roundedValue = totalPensionAmount * .3 * 100
// // let value = roundedValue / 100;
// // console.log("value-->",value);

// // document.getElementById('reset').onclick = () => console.log("Reset");

// // let feature = execution.getVariable("additionalFeatures");
// // let featureName = feature.map((data)=>data.name);
// // execution.setVariable("feature",featureName);

// let arr = [{ id: 3507, name: "Car Indicator LED Display" }, { id: 3509, name: "Landing Indicator LED Display" }, { id: 3510, name: "Overload Sensor" }, { id: 3508, name: "Glass door" }];
// let newArr = arr.map(function (data) { return data.name });
// // console.log("New Arr-->", newArr);

// const num = [1,3,6,7,8];
// let l = num.length;
// function rev(arr){
//     for(var i=0;i<=l/2;i++){
//         let temp = arr[i];
//         arr[i] = arr[l-1-i];
//         arr[l-1-i] = temp;
//     }
//     return arr;
// }
// console.log(rev(num));
function calculateStageKycElapsedTime(stageKycStartTime, stageKycEndTime) {
    // Parse the stageKycStartTime and stageKycEndTime into Date objects
    var startTime = new Date(stageKycStartTime);
    var endTime = new Date(stageKycEndTime);

    // Calculate the difference in milliseconds
    var diffInMilliseconds = endTime - startTime;

    // Ensure the difference is not negative
    if (diffInMilliseconds < 0) {
        throw new Error("stageKycEndTime is before stageKycStartTime. Cannot calculate the difference.");
    }

    // Convert the difference into hours, minutes, and seconds
    var diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    var diffInMinutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    var diffInSeconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

    // Format the output in hh:mm:ss format
    var formattedTime =
        (diffInHours < 10 ? '0' : '') + diffInHours + ':' +
        (diffInMinutes < 10 ? '0' : '') + diffInMinutes + ':' +
        (diffInSeconds < 10 ? '0' : '') + diffInSeconds;

    return formattedTime;
}

// Example usage: Replace these variables with your actual stageKycStartTime and stageKycEndTime
var stageKycStartTime = execution.getVariable('stageKycStartTime');
var stageKycEndTime = execution.getVariable('stageKycEndTime');

try {
    var kycStageElapsedTime = calculateStageKycElapsedTime(stageKycStartTime, stageKycEndTime);
    execution.setVariable('kycStageElapsedTime', kycStageElapsedTime);
} catch (error) {
    // Set a process variable to indicate the error
    execution.setVariable('kycStageElapsedTimeError', error.message);
    // Optionally, set a default value for the elapsed time
    execution.setVariable('kycStageElapsedTime', '00:00:00');
}