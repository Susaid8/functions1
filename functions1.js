// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true

const myFavNum = 6
const myNumBoo = Boolean(myFavNum)
//console.log(myNumBoo) will show true


// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true

const myString = ''
const myStringBoo = Boolean(myString)
//console.log(myStringBoo) will show false


// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0

const iLoveCats = true
let catsNum = Number(iLoveCats)
//console.log(catsNum) will show 1


// create a variable equal to a string of numbers, on the next line convert that string into a number 
// using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the

let numString = '1234'
let convertedString = +numString
//console.log(numString, convertedString) shows 1234 in white because its a number and 1234 in yellow because its a string

// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, 
// console.log it and the result will be the same as the other two versions

let inOneLine = +'1234'
//console.log(inOneLine) will show 1234 in yellow only since its just a string

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail

let myHeight = '62in'
let withNum = Number(myHeight)
let withParse = parseInt(myHeight)

//console.log(withNum) will show Nan since theres letters involved
//console.log(withParse) will show first number only


// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors

let myAge = 21
let ageToString = String(myAge)
//console.log(myAge, ageToString) will show 21 in yellow because its a number and the converted 21 in white because its a string

// create another variable but this time use concatenation of empty quotes to turn your number into a string

let ageToString2 = myAge + ''
//console.log(ageToString2) will show in just white because its only a string now

// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string

const lovesPokemon = true
let doYouLovePokemon = 'Do I love pokemon? Yes, that is ' + lovesPokemon
//console.log(doYouLovePokemon) will show "Do I love pokemon? Yes, that is true"


// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, 
// starts with, and ends with the letter(s) you input as parameters

const myName = 'Sumaya'

// .includes()
//console.log(myName.includes('ay')) returns true
if(myName.includes('a') && myName.includes('y')){
    //console.log('Include A and Y') returns 'Include A and Y'
}

// .startsWith()
// console.log(myName.startsWith('Au')) returns false

// .endsWith()
// console.log(myName.endsWith('a')) returns true


// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the word(s) in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces

const lotsOSpaces = '  wow so roomy in here  '
let noMoreSpaces = lotsOSpaces.trim()
//console.log(noMoreSpaces) shows wow so roomy in here
//console.log(lotsOSpaces) shows   wow so roomy in here  


// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)

let lowercase = 'these are my letters and i love them'
lowercase.toUpperCase()
//console.log(lowercase) improper way of doing it

lowercase = lowercase.toUpperCase
console.log(lowercase)
// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string


// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference


// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference


// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function


// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error


// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code

// then show an arrow function with implicit return as well