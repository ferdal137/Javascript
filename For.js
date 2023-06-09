// For Loop
//The for statement creates a loop with 3 optional expression
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }


// For In Loop
//The JavaScript for in statement loops through the properties of an Object:
for (key in object) {
    // code block to be executed
  }

//Example
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
    text += person[x];
}


//For Of Loop
//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
for (variable of iterable) {
    // code block to be executed
  }

//Array Example
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}

//String Example
let language = "JavaScript";

let text2 = "";
for (let x of language) {
text2 += x;
}