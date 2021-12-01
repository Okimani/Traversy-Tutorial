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
console.log(fruits[1]); //Accessing arrays, this will print apples since apples is on index 1
console.log(fruits) // this will print out all the items in the array.
fruits.pop() // removes the last item from the list. 
console.log(Array.isArray(fruits)); //check if there is an array called fruits
console.log(fruits.indexOf('mangoes')); // to find the index of an item in an array

//Javascript Objects literals 
//You can have embedded objects e.g address example below
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['Music','Movies','Sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
//You can separate different console logs with commas
console.log(person.firstname, person.lastname);
console.log(person); //prints out all the values 
console.log(person.hobbies[1]); //prints out movies which is in index 1 
console.log(person.address.street); //prints out the street name. 

//destructuring in javascript
const {firstname, lastname} =person;
console.log(firstname);


