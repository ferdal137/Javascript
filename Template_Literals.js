//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World!`;

//With template literals, you can use both single and double quotes inside a string:
let text1 = `He's often called "Johnny"`;

//Template literals allows multiline strings:
let text2 =
`The quick
brown fox
jumps over
the lazy dog`;


//Interpolation
//Template literals provide an easy way to interpolate variables and expressions into strings.

//Example 1
let firstName = "John";
let lastName = "Doe";

let text3 = `Welcome ${firstName}, ${lastName}!`;

//2
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;