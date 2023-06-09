//STRING METHODS

//Length
//To find the length of a string, use the built-in length property:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


//Escape Character
let text2 = "We are the so-called \"Vikings\" from the north.";


//Slice()
//Extracts a part of a string and returns the extracted part in a new string.
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(7, 13);


//Substring()
//Is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
let str1 = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13);


//Substr()
//Is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let str2 = "Apple, Banana, Kiwi";
let part2 = str.substr(7, 6);


//Replace()
//The replace() method replaces a specified value with another value in a string:
let text4 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");


//UpperCase
let text5 = "Hello World!";
let text6 = text1.toUpperCase();


//LowerCase
let text7 = "Hello World!";       // String
let text8 = text1.toLowerCase();  // text2 is text1 converted to lower


//Concat()
let text9 = "Hello";
let text10 = "World";
let tex11 = text1.concat(" ", text2);


//Trim()
//The trim() method removes whitespace from both sides of a string
let text12 = "      Hello World!      ";
let text13 = text1.trim();


//CharAt()
let text14 = "HELLO WORLD";
let char = text.charAt(0);


//Split()
//A string can be converted to an array with the split() method
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe


//Template Literals
//Template Literals use back-ticks (``) rather than the quotes ("") to define a string
let tl_text = `He's often called "Johnny"`;