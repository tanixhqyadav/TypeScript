// ? 🔵 JavaScript OOP Support (Key Features)

// * 🟢 Encapsulation ✅ Yes
// ! 🔴 JavaScript allows encapsulation through closures, ES2022 `#private` fields, and module patterns.
// ! 🔴 Example:
class EncapsulatedJS {
    #secret = "hidden"; // private field
    getSecret() {
        return this.#secret;
    }
}
// console.log(new EncapsulatedJS().getSecret()); // hidden

// * 🟢 Inheritance ✅ Yes
// ! 🔴 JavaScript supports prototype chaining and ES6 `class` syntax using `extends` under the hood.
// ! 🔴 Example:
class Animal {
    speak() { console.log("Animal speaks"); }
}
class Dog extends Animal {
    speak() { console.log("Dog barks"); }
}
// new Dog().speak(); // Dog barks

// * 🟢 Polymorphism ✅ Yes
// ! 🔴 JS supports method overriding and duck typing (if it walks like a duck...).
// ! 🔴 Example:
function makeItSpeak(entity) {
    entity.speak();
}
const cat = { speak: () => console.log("Meow") };
makeItSpeak(cat); // Meow

// * 🟢 Abstraction ❌ Limited
// ! 🔴 No built-in abstract class or interface — abstraction is simulated via design patterns or documentation.
// ! 🔴 Example:
function Shape() {
    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class");
    }
}
// const s = new Shape(); // Throws Error

// * 🟢 Interfaces ❌ No
// ! 🔴 JavaScript has no native support for interfaces. Use JSDoc comments or switch to TypeScript for static typing.
// ! 🔴 Example (via JSDoc):
/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 */
const person = { name: "Alice", age: 30 }; // JS trusts the structure

// ? 🔵 TypeScript OOP Features (Enhancing JavaScript with Classical OOP)

// * 🟢 Classes ✅ Yes
// ! 🔴 TypeScript builds on JavaScript's ES6 `class` syntax but adds types for better safety.
// ! 🔴 Example:
class TSClass {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

// * 🟢 Inheritance ✅ Yes
// ! 🔴 Use `extends` to inherit properties and methods from a parent class.
// ! 🔴 Example:
class Base {
    greet() { console.log("Hello"); }
}
class Derived extends Base {
    greet() { console.log("Hi"); }
}
// new Derived().greet(); // Hi

// * 🟢 Polymorphism ✅ Yes
// ! 🔴 Achieved through method overriding and interface implementation with full type checking.
// ! 🔴 Example:
interface Speaker {
    speak(): void;
}
class Human implements Speaker {
    speak() { console.log("Talking"); }
}
const h = new Human();
h.speak(); // Talking

// * 🟢 Encapsulation ✅ Yes
// ! 🔴 Access modifiers like `public`, `private`, and `protected` control visibility of class members.
// ! 🔴 Example:
class Secure {
    private secret: string = "123";
    reveal() {
        return this.secret;
    }
}
// const s = new Secure();
// s.secret; // ❌ Error: private property

// * 🟢 Abstraction ✅ Yes
// ! 🔴 Supports `abstract` classes and methods — forces child classes to implement required behavior.
// ! 🔴 Example:
abstract class Vehicle {
    abstract drive(): void;
}
class Car extends Vehicle {
    drive() {
        console.log("Driving a car");
    }
}
// new Car().drive(); // Driving a car

// * 🟢 Interfaces ✅ Yes
// ! 🔴 Interfaces define contracts for class structure and are checked at compile time only (not runtime).
// ! 🔴 Example:
interface User {
    id: number;
    username: string;
}
const user: User = { id: 1, username: "john_doe" };

// * 🟢 Constructor Overload ✅ Simulated
// ! 🔴 TypeScript doesn't support true constructor overloading, but simulates it using optional/default parameters.
// ! 🔴 Example:
class Book {
    title: string;
    pages: number;

    constructor(title: string, pages?: number) {
        this.title = title;
        this.pages = pages ?? 100; // Default to 100
    }
}
const b1 = new Book("TS Guide");
const b2 = new Book("TS Advanced", 250);


// Java vs TypeScript – OOP Comparison
// Feature	Java	TypeScript
// Strong Typing	✅ Compile-time	✅ Compile-time
// Interfaces	✅ Runtime enforced	✅ Compile-time only
// Access Modifiers	✅ public/private/protected	✅ Same
// Abstract Class	✅ Yes	✅ Yes
// Multiple Inheritance	❌ Only via interfaces	❌ Only via interfaces
// Constructor Overloading	✅ True overloading	❌ Simulated with options
// Primitive Types	✅ int, float, etc.	✅ number, boolean (all objects at runtime)
// Generics	✅ Yes	✅ Yes
// Inheritance	✅ class extends class	✅ class extends class
// Implements Keyword	✅ class implements iface	✅ class implements iface
// Compile to	Bytecode (JVM)	JavaScript
// Null Safety	✅ With tools (e.g. Optional)	✅ ? for optional chaining
