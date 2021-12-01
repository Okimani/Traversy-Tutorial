// strings, numbers, boolean, null, undefined , symbol
//const names ='John';
//const age = 30;
//const iscool =true;
//const rating =4.5;
//const x =null;
//const y = undefined;
//let z

//console.log(typeof names);

const names ='John';
const age = 30;

//concatenation
//old method of concatenation
console.log ('my name is ' + names + ' and I am '+ age);

//New method of concatenation
console.log(`My name is  ${names} and I am ${age} years old`);

//assign above to a variable 
const hello = `My name is  ${names} and I am ${age} years old`;
console.log(hello);

// string properties,  note a property doesn't have parenthesis, length counts plus the spaces
const s =('hello World');

console.log (s.length); //length is a property therefore no paranthesis

console.log (s.toUpperCase()); //to uppercase is a method, therefore use of parenthesis
console.log (s.substring(0, 5)); //substring extracts from specified index
console.log (s.substring(0, 5).toUpperCase()); // You can also chain the code into each other 
console.log (s.split('')); //This will split each letter 

// Splitting into an array
const y =('AWS, AZURE, VMWARE, GCP, ALIBABA'); 
console.log(y.split(', ')); //Split into an array that you can feed into a database

//Arrays variables that hold multiple values

const numbers = new Array(1,2,3,4,5); // old method using array constructor
console.log(numbers);

//new way of using arrays
const fruits = ['apples', 'oranges', 'pineapples'];
console.log(fruits);
//note that in Javascript you can mix up the data types in an array 'apples' 10, true 'oranges'
fruits [3] = 'grapes'; //add grapes to the fruits array, goes to the end but not the best way to go about it
fruits.push('Mangoes'); //added as the last item
fruits.unshift('strawberries'); //Adds strawberry as the first item
console.log(fruits[1]); //Accessing arrays, this will print apples since apples in on index 1
console.log(fruits) // this will print out all the items in the array.