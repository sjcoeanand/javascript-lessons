/* use strict switches the javascript runtime engine to modern mode */
"use strict"
/* alert on page load */
// alert("Welcome to Javascript day1");

/* errors without semicolons */
// alert("There will be an error")
// [1, 2].forEach(alert);

/* variables let and const1 */
// let admin, name;
// name = 'john';
// admin = name;
// console.log(admin);
// const BIRTHDAY;
// const age;

/* data types */
// let num = 1; //number dt
// let name = "anand"; //string dt
// let on = true, off = false;; //boolean
// console.log("switch it to", on, "or", off)
// let x; 
// console.log(x); // undefined dt
// let age = null; // null dt

/* Symbol */
// let mysymbol1 = Symbol("some data 1")
// let mysymbol2 = Symbol("some data 1")
// console.log(mysymbol2 == mysymbol1); //Symbol is primitive data type in es6

/* array object difference */
// let personArray = ["anand", "rickie", "ankur"]
// let personObject = {name : "anand", profile : "frontned", experience : 3}
// console.log("personArray", personArray)
// console.log("personObject", personObject)

/* typeof operato */
// console.log(typeof(anytext)) // "undefined"
// console.log(typeof(0)) // "number"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)

/* type conversion */
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false

//operations
// let a='a', b=15, c=10;
// console.log(b+c+a);
// let a='a', b=15, c=10;
// console.log(b+a+c);

// let x = 0;
// alert( ++x );

// Remainder %
// alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2

// Increment/decrement
// let counter = 0;
// let a = ++counter;
// let c = counter++;
// let b = counter;
// alert(b);


