//Boolean - true/false
let isIceCreamCold = true;

//Number
let king = 23;

//String - can use double "" or single ' '
let color = "blue";

//Arrays index start with 0
let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];

// Constant
const nbMonth = 12;

console.log("Number ", king)

console.log("Number ${king}") // variable value inside a string

console.log("Number ${king*2}") // do the math inside 

//Named function
function add(a, b){
    return a + b;
}
console.log('Function add:', add(2, 3))

//Anonymous function
let added = function (x, y) { return x + y };
console.log('Function added:', added(2, 3))

class Animal {
    move(distanceInMeters = 0) {
        console.log('Animal moved ${distanceInMeters}m.');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

let boss = {
    name: "Michael Scott",
    phone: "555-555-5555",
    address: "Scranton, PA"
}
console.log("The world's best boss is:", boss.name, boss.phone, boss.address);

//Reference of an object
let bestBoss = boss;
boss.phone = "+1555-555-555";
console.log("The world's best boss is still:", boss.name, boss.phone, boss.address)

//Copy of an object
let newBoss = { ...boss } // spread operator
newBoss.name = "Andy Bernard"
console.log("The new boss is:", newBoss.name, newBoss.phone, newBoss.address)
console.log("The world's best boss remains:", boss.name, boss.phone, boss.address)

let sayHi = () => {return "Hello!!!"};
//equivalent to the function 
function sayHi_other() {return "Hello!!!"};

let mult2_e = x => 2 * x;
//equivalent to the function
function mult2_other(x){return 2*x}

// an array of strings
let myarray = ['Microsoft', 'Google']

// printing the array with map. map calls the function as parameters on each element of the array
console.log('Printing the array with map')

// Create a function that will print it's first parameter and ignore any others:
let printIt = (value) => console.log(value)

// print the array using map
myarray.map(printIt)

// Multiply all elements of an array by 22

let numberarray = [1, 6, 7.5]; 

let mult22 = (x) => x * 22; 

let newarray = numberarray.map(mult22); 

console.log(newarray);

// an array of numbers
let nums = [1, 2, 5, 6, 10, 20, 100, 200];

// Starting with the 'nums' array, create a new array that only has numbers less than 20
const smallNums = nums.filter((elt) => elt < 20);

var items = ["1", "2", "3"];
function printStuff(a, b, c) {
  console.log("Printing: " + a + " " + b + " " + c);
}
// using the spread operator
printStuff(...items);

// without using the spread operator
printStuff(items[0], items[1], items[2]);





