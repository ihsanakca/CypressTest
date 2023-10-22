/**
 
There is no Collection in JS. In JS we only have Arrays and Map
NOT Fixed size
There are two important Brackets in JS
[] ----> creates an Array
{} ----> creates an object
*/

// creating array

var scores = new Array(); //empty
var numbers = new Array(10); //array with initial size (10 elementlik)

var mynumbers = new Array(3,5,9,4); //array with initial elements
var elif=mynumbers[0];
console.log(elif)

var numbers = Array(3); //array with initial size (3 elementlik)
var name_1 = Array("Ahmet"); //array with initial size (3 elementlik)
console.log(name_1)

var mynumbers_1 = Array(87,5,9,4); //array with initial elements
var elif=mynumbers_1[0];
console.log(elif)

var emptyArray=[];
var colorsArray=["red",'green','yellow'];
var secondColor=colorsArray[1];
console.log(secondColor);
console.log(colorsArray);

//arrays examples
let tools=["Jest","selenium","Cypress","testCafe","phantomJS","protractor"];

//accessing array elements
console.log(tools);
console.log(tools.toString());
console.log(tools[2]);

const string=tools.toString();
console.log(string);

const lengthOfString=string.length;
console.log(lengthOfString);

const join=tools.join(" * "); // add * between elements
console.log(join);
const lengthOfJoin=join.length;
console.log(lengthOfJoin);
console.log(typeof join)

const pop=tools.pop();  // removes last element from the array.. returns the element which is removed
console.log(pop);
console.log(tools);

const push=tools.push('slimerJS'); //adds an element to end of array.. returns new length of array
console.log(push);
console.log(tools);

const shift=tools.shift();  // removes an element from the beginning of array .. returns the element which is removed
console.log(shift);
console.log(tools);

const unshift=tools.unshift("Selenoid");//adds an element to begining of array.. returns new length of array
console.log(unshift);
console.log(tools);


const sort=tools.sort(); //sorts elements of array
console.log(sort);
console.log(tools);

const reverse=tools.reverse(); //reverses elements of array 
console.log(reverse);
console.log(tools);