//An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];

const cars1 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const cars = new Array("Saab", "Volvo", "BMW");

//Accessing
let car = cars[0];

cars[0] = "Opel";

//Properties and Methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits                                                 