// console.log("Hello");
class message {
    ping () {
       console.log("Hi ! this is a class method"); 
    }
}

let msg = new message();
// msg.ping();

class suman {
    constructor(args) {
        // console.log("Hi ! this is a class constructor" + " " + args);
    }
}
// let newMsg = new suman();
class sumpa extends suman{

}

let s = new sumpa("I am Sumpa");

class employee {
    constructor(name, age, id,salary) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.salary = salary;
        console.log("Employee:");
    }
    info (){
        document.write(`<h3>EMPLOYEE DETAILS</h3><br>
            Name : ${this.name}<br>
            Age : ${this.age}<br>
            ID : ${this.id}<br>
            Salary :  ${this.salary}`);
    }
}

class manager extends employee{
    // constructor(){
    //     super();
    //     console.log("manager: constructor");
    //     super.info();
    // }
    info(){
        let da = 240000;
        let ta = 50000;
        let hra = 200000;
        let totalsalary = this.salary + da + ta + hra;
        document.write(`<h3>MANAGER DETAILS</h3><br>
            Name : ${this.name}<br>
            Age : ${this.age}<br>
            ID : ${this.id}<br>
            Salary :  ${totalsalary}`);
    }
}
class test extends manager{
    
}

// let p = new manager("SUMAN",35,"001",120000);
// let emp = new employee("DIPAK",27,"EL65",21000);
// p.info();
// emp.info();

let d = new test ("ADITYA",40,"003",180000);
d.info();