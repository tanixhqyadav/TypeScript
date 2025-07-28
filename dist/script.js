"use strict";
// ! let a;
// * when we let a then in ts we need to define the type of a
let a;
// * when we use let a = 1 then ts will infer the type of a as number
let b = 1; // ! inferred as number or else it will be any which is not good practice
// * when we use let a = '1' then ts will infer the type of a as string
let c = '1'; // ! inferred as string
// * when we use let a = true then ts will infer the type of a as boolean
let d = true; // ! inferred as boolean
// * when we use let a = [1, 2, 3] then ts will infer the type of a as number[]
let e = [1, 2, 3]; // ! inferred as number[]    
// * when we use let a = { name: 'John' } then ts will infer the type of a as { name: string }
let f = { name: 'John' }; // ! inferred as { name: string }
// * when we use let a = () => {} then ts will infer the type of a as () => void
let g = () => { }; // ! inferred as () => void
// so here we have a few examples of how TypeScript infers types based on the initial value assigned to a variable.
// * when we use let a = [1, '2', true] then ts will infer the type of a as (number | string | boolean)[]
let h = [1, '2', true]; // ! inferred as (number | string | boolean)[] so here we can use tuples as well
// * when we use let a = [1, '2', true] as const then ts will infer the type of a as readonly [1, '2', true]
let ar = [1, '2', true]; // ! inferred as [number, string, boolean]
let i = [1, '2', true]; // ! inferred as readonly [1, '2', true]
// ? Data types in TypeScript are similar to JavaScript but with some additional features.
// data types in TypeScript include:
// 1. number: for all numeric values (both integers and floats)     
// 2. string: for text values
// 3. boolean: for true/false values
// 4. array: for lists of values, which can be of a specific type or mixed types
// 5. tuple: for fixed-length arrays with specific types for each element
// 6. enum: for defining a set of named constants
// 7. any: for values that can be of any type (not recommended for strict typing)
// 8. void: for functions that do not return a value
// 9. never: for values that never occur (e.g., functions that always throw an error or never return)
// 10. unknown: for values that are not known at compile time, requiring type checking
// ! Type Inferencing 
// ? TypeScript can automatically infer types based on the values assigned to variables.
// ? This means you don't always have to explicitly declare types, but it's good practice to do so for clarity and maintainability.
// Union Types Intersection Types
// ? Union types allow a variable to hold values of multiple types, while intersection types combine multiple types into one.
// ? Union types are defined using the pipe (|) symbol, while intersection types are defined using the ampersand (&) symbol.    
// Example of Union Type
let unionExample; // This variable can be either a number or a string
unionExample = 42; // Valid assignment
unionExample = "Hello"; // Valid assignment
// ! unionExample = true; // Invalid assignment, TypeScript will throw an error
let varx;
varx = "12";
//! here it will give methods from both string and number types 
if (typeof varx === 'string') {
    console.log(varx.toUpperCase()); // Valid, as varx is a string
    //! but here it will give error with number method and it give all the method of string type
}
// Intersection 
//
