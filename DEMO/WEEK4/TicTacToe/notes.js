// //Function Declaration
// function add(a,b)
// {
//     return a + b
// }

// // Execute the function below
// add(3,5)

// // Function Execution 
// const add = function (a, b) {
//     return a + b;
// }

// // Arrow function 
// const add = (a, b) => {
//     return a + b;
// }



// <---- SPREAD OPERATOR ---->

// const numbers = [1,2,3,4,5]
// const numbers2 = [6,4,4,532]

// const numberCopy = [...numbers, ...numbers2];


// <---- For/Of Loop ---->

// const numArray = [2,32,3,123,]

// for (num of numArray);
// console.log(num);

// // const course = "client side script"

// // for (letter of course) {
// //     console.log(letter);
// // }


// // JS Object

// const Car = {
//     type: "SUV",
//     make: "honda",
//     year: 2000
// };
// console.log(Car);
// console.log(Car.type)
// console.log(Car.year)


// // Maps

// const fruts = new Map([
//     ["apple", 500],
//     ["banana", 300]
// ])
// console.log(fruts);
// console.log(fruts.get("banana"))

// // Set (only unique values)
// const letter = new Set();
// letter.add("a");
// letter.add("b");
// letter.add("b");
// letter.add("b");
// letter.add("b");


class Animal {
    constructor(species, numOfLegs, canSwim, canFly) {
        this.species = species;
        this.numOfLegs = numOfLegs;
        this.canSwim = canSwim;
        this.canFly = canFly;
    }
    meow() {
        console.log("meow");
    }
}

const cat = new Animal("Persian Cat", 4, true, false);

console.log(cat);
cat.meow();