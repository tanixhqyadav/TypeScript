// ? we need to add a tsconfig.json file to enable TypeScript in our project
// ? TypeScript is a superset of JavaScript that adds static typing to the language.
// ? we also need a folder dist to store the compiled JavaScript files
// ? TypeScript files have the extension .ts, while compiled JavaScript files have the extension
// ? on terminal type tsc scropt.js to compiler it  and for real time use tsc --watch script.ts
// ? Type Script does not support Modular import and export we need to work with bundler to use with import and export here 



// ! let a;
// * when we let a then in ts we need to define the type of a
let a: number;
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
let g = () => {}; // ! inferred as () => void
// so here we have a few examples of how TypeScript infers types based on the initial value assigned to a variable.
// * when we use let a = [1, '2', true] then ts will infer the type of a as (number | string | boolean)[]
let h = [1, '2', true]; // ! inferred as (number | string | boolean)[] so here we can use tuples as well
// * when we use let a = [1, '2', true] as const then ts will infer the type of a as readonly [1, '2', true]
let ar: [number, string, boolean] = [1, '2', true]; // ! inferred as [number, string, boolean]
let i = [1, '2', true] as const; // ! inferred as readonly [1, '2', true]



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
let unionExample: number | string; // This variable can be either a number or a string
unionExample = 42; // Valid assignment
unionExample = "Hello"; // Valid assignment
// ! unionExample = true; // Invalid assignment, TypeScript will throw an error
let varx: string | number;
varx="12";
//! here it will give  common methods from both string and number types 
if(typeof varx === 'string') {
    console.log(varx.toUpperCase()); // Valid, as varx is a string
    //! but here it will give error with number method and it give all the method of string type
}

// Intersection 
// ? Intersection types allow you to combine multiple types into one, meaning a variable must satisfy all the combined types.
// ! we will gwt to it a bit later in the course
 let use:number & string; // This variable must be both a number and a string, which is not possible in practice
//  use="42"; // Invalid assignment, TypeScript will throw an error
// ! use = 42; // Invalid assignment, TypeScript will throw an error
// use = "Hello"; // Invalid assignment, TypeScript will throw an error
// ?Here that we have a Types in TypeScript, we can use them to define the types of variables, function parameters, and return values.
// ? TypeScript also supports type annotations, which allow you to explicitly specify the type of a variable or function parameter.
  

type use={
    name: string;
    age: number;
}

type use2 = {
    name: string;
    age: number;
    isActive: boolean;
}

type use3 = use & use2; // !Intersection type combining use and use2
// ? This means that use3 must have all properties from both use and use2.
let nm:use3 = {
    name: "John",
    age: 30,
    isActive: true
};// !TypeScript is binding the type use3 to the object nm, ensuring it has the properties name, age, and isActive with the correct types.

// ? Type Aliases
// ? Type aliases allow you to create a new name for a type, making it easier to reference complex types.
type User = {
    name: string;
    age: number;
    isActive: boolean;
};
let user: User = {
    name: "Alice",
    age: 30,
    isActive: true
};// !TypeScript is binding the type User to the object user, ensuring it has the properties name, age, and isActive with the correct types.
// ? Type aliases can also be used with union and intersection types.
type StringOrNumber = string | number;


// ? InterFace 
// ? Interfaces are similar to type aliases but are specifically designed for defining the shape of objects.
interface UserInterface {
    name: string;
    age: number;
    isActive: boolean;
}

let userInterface: UserInterface = {
    name: "Bob",
    age: 25,
    isActive: false
};// !TypeScript is binding the type UserInterface to the object userInterface, ensuring it has the properties name, age, and isActive with the correct types.
// Interface and types are diffrent in the way they are used and defined, but they can often be used interchangeably for defining object shapes.
// ? The main difference is that interfaces can be extended and implemented, while type aliases cannot.
// ? Interfaces can also be used to define function types, which is useful for defining the shape of callback functions or event handlers.
//? we can have same name interface and type but they will be diffrent 



// ? Class in TypeScript
// ? Classes in TypeScript are similar to classes in JavaScript, but with added type annotations
class Person {
    name!: string;
    age!: number;
    // * The exclamation mark (!) after the property names indicates that these properties will be initialized later,
    // here name: string and age: number  this was not running as it needs to be initialized in the constructor or with a default value
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let p1= new Person("John", 30); // Creating an instance of the Person class
let p2 = new Person("Alice", 25); // Creating another instance of the Person class

// ? classes also extends other classes, allowing for inheritance and code reuse.
class Employee extends Person {
    position!: string;
    constructor(name: string, age: number, position: string) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.position = position;
    }
}
let emp1 = new Employee("Bob", 28, "Developer"); // Creating an instance of the Employee class


//! Constructors in classes are special methods that are called when an instance of the class is created.
// ? They are used to initialize the properties of the class and can take parameters to set initial values.
// ? In the example above, the Person class has a constructor that takes name and age as parameters and initializes the corresponding properties.
// ? The Employee class extends the Person class and adds a new property position, which is initialized in its own constructor.

// Access Modifiers
// ? TypeScript supports access modifiers to control the visibility of class members (properties and methods).
// ? The three main access modifiers are:
// 1. public: Members are accessible from anywhere (default).
// 2. private: Members are accessible only within the class.
// 3. protected: Members are accessible within the class and its subclasses.
class Animal {
    public name: string; // Public member, accessible from anywhere
    private age: number; // Private member, accessible only within the class
    protected species: string; // Protected member, accessible within the class and subclasses

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public getAge(): number {
        return this.age; // Public method to access private member
    }
}
// ? In the example above, the Animal class has public, private, and protected members, demonstrating how access modifiers control visibility.

//! TypeScript also have readonly modifier, which makes a property immutable after initialization.
class Car {
    readonly make: string; // Readonly property, cannot be changed after initialization
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}
// ? The Car class has a readonly property make, which cannot be changed after initialization.

// ? Class with getter and setter methods
class UserProfile {
    private _username: string; // Private property

    constructor(username: string) {
        this._username = username;
    }

    // Getter method for _username
    public get username(): string {
        return this._username;
    }

    // Setter method for _username
    public set username(value: string) {
        this._username = value;
    }
}

//! Functions in TypeScript
// ? Functions in TypeScript can have type annotations for parameters and return values, allowing for better type checking and documentation.
function add(a: number, b: number): number {    
    return a + b; // Function that adds two numbers and returns the result
}

// ? Optoinal Parameters
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}

// Rest Parameters
// ? Rest parameters allow a function to accept an arbitrary number of arguments as an array.
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0); // Function that sums an arbitrary number of numbers
}

