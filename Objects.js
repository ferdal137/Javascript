//Object definition
//You define (and create) a JavaScript object with an object literal:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Also you can write:

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

//The name:values pairs in JavaScript objects are called properties:


//Accessing Object Properties
//You can access object properties in two ways:
objectName.propertyName
objectName["propertyName"]

//Example
person.lastName;
person["lastName"];


//Object methods
const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;   //In JavaScript, the this keyword refers to an object.
    }
  };