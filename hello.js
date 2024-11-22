// let x=18;
// let y = 8;
// let result = x-y;
// console.log('Result is: '+ result);

// let a = 10
// let q = 2* --a
// console.log('Result is: '+ q);

// let x = 10
// x+=5 //x = x+5
// console.log(x);
// let x = 13;
// let y = 5;
// result = x==y;
// console.log(result);

// let age = 20;
// if(age>20){
//     console.log("Congrats");

// } else if(age==20){
//     console.log("Just arrvied");
// }
// else {
//     console.log("sorry");
// }

// let starRating = 5

// switch(starRating){

//     case 1:
//         console.log("bad");
//     case 2:
//         console.log("Good") ;
//         default:
//             console.log("None");   
    
//     }

// let i;
// for (i=1;i<5;i++){
//     console.log("The vaue of is :" +i);
// }

// let fruits = ["Apple", "Banana","Grapes"];
// let x;
// for (x of fruits)
// {
//     console.log(x);
// }
// for (x in fruits){
//     console.log(fruits[x]);
// }
// let fruits = ['apple','banana','grapes']
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.push('cherry');
// console.log(fruits);
// fruits.unshift('lemon');
// console.log(fruits);
// delete fruits[1];
// console.log(fruits);
// fruits[1] = 'orange';
// console.log(fruits);
// fruits.splice(1,2);
// console.log(fruits);
// fruits.splice(2,0,'Orange','lemon')
// console.log(fruits);
// let citrusFruits = fruits.slice(0,2)
// console.log(fruits);
// console.log(citrusFruits);
// let en = [2, 4, 6];
// let on = [1,3,5];
// let pm = [2,3,5];
// let numbers = en.concat(on,pm);
// console.log(numbers);
// function add(a,b){
//     return(a+b);
// }
// let result = add(3.5,4.1);
// console.log(result);
// class Employee {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
// }

// let emp1 = new Employee('John', '1100');
// let emp2 = new Employee('Mic', '1101');

// // Corrected console log with string interpolation
// console.log(`${emp1.name},${emp1.id}`);
// console.log(emp1.name);
// console.log(emp1.id);

/******Encapsulation */
// class Employee{
//     setEmpDetails(name,id,phoneNo){
//         this.name = name;
//         this.id = id;
//         this.phoneNo = phoneNo;
//     }
//     getEmpName(){
//         return this.name;

//     }
//     getEmpId(){
//         return this.id;

//     }
//     getEmpPhoneNo(){
//         return this.phoneNo;

//     }
    
// }

// let emp1 = new Employee();
// emp1.setEmpDetails('Jon','1001','0481752334');
// console.log(emp1.getEmpName());
// console.log(emp1.getEmpId());
// console.log(emp1.getEmpPhoneNo());


/*******Inheritance **** */
// class Car {

//     setName(name){
//     this.name = name;
// }
// startEngine(){
//     console.log('Engine started for '+this.name);
// }
// stopEngine(){
//     console.log('Engine stopped for '+this.name);
// }
// }
// class Toyota extends Car{

//     topSpeed(speed){
//         console.log('Top speed for '+this.name+' is '+speed);
//     }
// }
// let mycar = new Toyota;
// mycar.setName('Mazda');
// mycar.startEngine();
// mycar.stopEngine();
// mycar.topSpeed('200');


/*****Prototype *////

// Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype of Person
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Creating a new instance of Person
// let person1 = new Person("John", 30);

// // Accessing the method from the prototype
// person1.greet();  // Output: "Hello, my name is John and I am 30 years old."


////****Ploymorphism *////

class Animal {
    // Constructor to initialize 'name' when creating an instance
    constructor(name) {
        this.name = name;
    }

    setFood(name) {
        this.name = name;
    }

    eats() {
        console.log(this.name + ' eats food');
    }
}
class Alligator extends Animal {
   
    eats() {
        super.eats();
        console.log(this.name + ' eats fish');
    }
}
let murphy = new Alligator('Murphy');
murphy.eats();  // Output: "Murphy eats fish"
abcd

