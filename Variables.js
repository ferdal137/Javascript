// VARIABLES

x = 5;
y = 6;
z = x + y;

var x = 5;
var y = 6;
var z = x + y;

let x = 5;       //Variables defined with let can not be redeclared.
let y = 6;
let z = x + y;

const x = 5;
const y = 6;
const z = x + y;

/*
Always use const if the value should not be changed

Always use const if the type should not be changed (Arrays and Objects)

Only use let if you can't use const

Only use var if you MUST support old browsers.
*/