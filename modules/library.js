let message = "ES6 Modules";

function sum(a,b){
    return a + b;
}

class test{
    constructor(){
        console.log("Constructor function");
    }
}
export default message;
export{sum,test};