//A JavaScript function is a block of code designed to perform a particular task.
//That function is executed when "something" invokes it (calls it).


//Function Syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }


//Example: Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

let x = myFunction(4, 3);



//Local variables

//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables can only be accessed from within the function.

// code here can NOT use carName

function otherFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName