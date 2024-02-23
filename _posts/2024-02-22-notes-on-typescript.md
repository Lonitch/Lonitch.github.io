---
layout: post
title: "Typescript: Fundementals + Intermediate"
date: 2024-02-22 21:30:00
categories: post
tags: [programming, web-dev]
---

_Typescript is a statically typed fake language._<!--more-->

## Forewords

This post records some random notes when taking the Typescript fundamental class on the frontend master.

## Type vs. Interface

Simple **type** definition looks like the following

```javascript
type Amount = {
  currency: string,
  value: number
}
```

You can create type aliases that combine existing types with new behavior by using Intersection (&) types.

```typescript
type SpecialDate = Date & { getDescription(): string };

const newYearsEve: SpecialDate = Object.assign(new Date(), {
  getDescription: () => "Last day of the year",
});
//              ^| newYearsEve.getDescription is now available
```

An **interface** is a way of defining an object type (not to be confused with a type called object, which we’ll discuss later). In this context think of an object type is anything that looks like this.

```typescript
{
  field: value;
}
```

### `extends` and `implements` for interfaces

- Just as in in JavaScript, a subclass extends from a base class.
- Additionally a “sub-interface” extends from a base interface, as shown in the example below

```typescript
interface Animal {
  isAlive(): boolean;
}
interface Mammal extends Animal {
  getFurOrHairColor(): string;
}
interface Hamster extends Mammal {
  squeak(): string;
}
function careForHamster(h: Hamster) {
  h.getFurOrHairColor();
  h.squeak();
}
```

TypeScript adds a second heritage clause that can be used to state that a given class should produce instances that confirm to a given interface: implements.

```typescript
// @noImplicitAny: false
function consumeFood(arg) {}
interface AnimalLike {
  eat(food): void;
}

class Dog implements AnimalLike {
  bark() {
    return "woof";
  }
  eat(food) {
    consumeFood(food);
  }
}
```

### Open Interfaces: augmenting existing built-in or library types

TypeScript interfaces are “open”, meaning that unlike in type aliases, you can have multiple declarations in the same scope:

```typescript
// @noImplicitAny: false
interface AnimalLike {
  // From before
  eat(food): void;
}
function feed(animal: AnimalLike) {
  animal.eat;
  animal.isAlive;
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
  isAlive(): boolean;
}
```

These declarations are merged together to create a result identical to what you would see if both the isAlive and eat methods were on a single interface declaration. This is useful in a situation where you want to add a global property to a predefined object whose type is not easy to find out. Consider the following example:

```typescript
window.document; // an existing property
window.exampleProperty = 42;
// tells TS that `exampleProperty` exists
interface Window {
  exampleProperty: number;
}
```

### Choose btw `type` or `interface`

In many situations, either a type alias or an interface would be perfectly fine, however…

- If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
- If you need to define a type to use with the implements heritage term on a class, use an interface
- If you need to allow consumers of your types to augment them, you must use an interface.

## Recursive types

Recursive types, are self-referential, and are often used to describe infinitely nestable types. For example, consider infinitely nestable arrays of numbers

```typescript
type NestedNumbers = number | NestedNumbers[];
const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];
```

as a more complex example, we use recursive types to define possible values in JSON type:

```typescript
type JSONValue =
  | number
  | string
  | boolean
  | null
  | JSONValue[]
  | { [k: string]: JSONValue };

//! DO NOT EDIT ANY CODE BELOW THIS LINE
function isJSON(arg: JSONValue) {}

//✔️ POSITIVE test cases (must pass)
isJSON("hello"); //✔️ Strings
isJSON([4, 8, 15, 16, 23, 42]); //✔️ Arrays of numbers
isJSON({ greeting: "hello" }); //✔️ Objects
isJSON(false); //✔️ Boolean values
isJSON(true);
isJSON(null); //✔️ null values
isJSON({ a: { b: [2, 3, "foo", null, false] } }); //✔️ A complex object

//! NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => ""); //! Functions are not valid JSON
// @ts-expect-error
isJSON(class {}); //! Classes are not valid JSON
// @ts-expect-error
isJSON(undefined); //! undefined is not valid JSON
// @ts-expect-error
isJSON(BigInt(143)); //! BigInts are not valid JSON
```

## Type queries

### `keyof`

The keyof type query allows us to obtain type representing all property keys on a given interface. Because not all keys are strings, so we can separate out those keys that are symbols and those that are strings using the intersection operator (&). You can think of & in this case as the intersection operator. we’re left only with the sub-part of the keyof Date that also is included by string or symbol, respectively.

```typescript
type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;
```

### `typeof`

The `typeof` type query allows you to extract a type from a value. A common use of `typeof` is to obtain a type representing the “static site” of a class (meaning: constructor, static properties, and other things not present on an instance of the class)

### Indexed access types

At the simplest level, these kinds of types are all about accessing some part of another type, via an index:

```typescript
interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car["color"];
let carProperty: Car["color" | "year"];
```

## Callables and Constructables

### Callable types

Both type alias and interfaces offer the capability to describe **call signatures**:

```typescript
interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;
const subtract: TwoNumberCalc = (x, y) => x - y;
```

Let’s pause for a minute to note:

- The return type for an interface is `:number`, and for the type alias it’s `=> number`
- Because we provide types for the functions add and subtract, we don’t need to provide type annotations for each individual function’s argument list or return type

### `void`

The return value of a `void`-returning function is intended to be ignored. We could type functions as returning `undefined`, but there are some interesting differences that highlight the reason for void’s existence:

```typescript
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}
const values: number[] = [];
// invalid, gives error: Type 'number' is not assignable to type 'undefined'.
invokeInFourSeconds(() => values.push(4));
// It happens that Array.prototype.push returns a number, so ()=> void is better here
invokeInFiveSeconds(() => values.push(4));
```

### Function overloads

In the example below, the third paragraph implements function `handleMainEvent`, and the first two paragraphs are overloads for binding `Form` with `Submit` and `Frame` with `Message`. Note that **the type union is required for the implementation**, you can get `function typeincompatible` if you don't have the unions.

```ts
function handleMainEvent(elem: Form, handler: Submit);
function handleMainEvent(elem: Frame, handler: Message);
// implementation function signature must be general enough to include
// everything that’s possible through the exposed first and second function heads.
function handleMainEvent(elem: Form | Frame, handler: Submit | Message) {}
```

### `this` types

When dealing with callback functions tied to DOM elements, it's a better practice to include `this` as the first argument of the callback. Take the snippet below as an example:

```ts
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

const myButton = document.getElementsByTagName("button")[0];
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event("click")); // bound version: ok
myClickHandler.call(myButton, new Event("click")); // also ok
```

### Explicitly define return types

Consider the following two implementations of the `getData` function:

```ts
// ts is happy with this
export async function getData(url: string) {
  const resp = await fetch(url);
  const data = (await resp.json()) as {
    properties: string[];
  };
  return data;
}

// ts is unhappy with this
async function getData(url: string) {
  const resp = await fetch(url);
  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };
    return data;
  }
}
```

TS will not be happy with the second implementation because the return type could be `undefined`. If we use the same example, but define a return type explicitly, the error message is surfaced at the declaration site:

```ts
async function getData(
  url: string,
  // (2366): Function lacks ending return statement and
  // return type does not include 'undefined'.
): Promise<{ properties: string[] }> {
  const resp = await fetch(url);
  if (resp.ok) {
    const data = (await resp.json()) as {
      properties: string[];
    };
    return data;
  }
}
```

## Classes

### `public`, `private`, and `protected`

| keyword   | who can access (instance field/method)                          |
| :-------- | :-------------------------------------------------------------- |
| public    | Anyone who has access to the scope in which the instance exists |
| protected | the instance itself, and subclasses                             |
| private   | only the instance itself                                        |

| keyword   | who can access (static field/method)                         |
| :-------- | :----------------------------------------------------------- |
| public    | Anyone who has access to the scope in which the class exists |
| protected | static and instance scopes of the class and its subclasses   |
| private   | static scope instance scopes of the class only               |

Note that `private` in TS does not provide any security benefits. A checkpoint in browser can still expose its value.

### JS private `#fields`

TS(>=3.8) supports use of ECMAScript private class fields. The class below has the JS private field: `#serialNumber`:

```ts
class Car {
  private static nextSerialNumber: number;
  private static generateSerialNumber() {
    return this.nextSerialNumber++;
  }

  make: string;
  model: string;
  year: number;
  #serialNumber = Car.generateSerialNumber();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
```

Unlike TypeScript’s private keyword, these are truly private fields, which cannot be easily accessed at runtime. It’s important to remember, particularly if you’re writing client side code, that there are still ways of accessing private field data through things like the Chrome Dev Tools protocol. Use this as an encapsulation tool, not as a security construct.

### Param properties

Repeatitive definition of `make`, `model`, and `year` in the `Car` class can be optimized through the use of **param properties**:

```ts
class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number,
  ) {}
}
```

### Overrides

A common mistake, that has historically been difficult for TypeScript to assist with is typos when overriding a class method, see the following example:

```ts
class Car {
  honk() {
    console.log("beep");
  }
}

class Truck extends Car {
  hoonk() {
    // OOPS! you meant to override, but endup adding a new method
    console.log("BEEP");
  }
}

const t = new Truck();
t.honk(); // "beep"
```

TypeScript 5 includes an override keyword that makes this easier to spot:

```ts
// @errors: 4117
class Car {
  honk() {
    console.log("beep");
  }
}

class Truck extends Car {
  override hoonk() {
    // Error: This member cannot have an 'override' modifier because it is not declared in the base class 'Car'. Did you mean 'honk'?
    console.log("BEEP");
  }
}

const t = new Truck();
t.honk(); // "beep"
```

## Type Guards and Narrowing

### Built-in type guards

Below is an illustrative example of a wide variety of built-in types:

```ts
let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value;
}
// typeof
else if (typeof value === "string") {
  value;
}
// Specific value check
else if (value === null) {
  value;
}
// Truthy/falsy check
else if (!value) {
  value;
  // let value: undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
  value;
}
// Property presence check
else if ("dateRange" in value) {
  value;
} else {
  value;
  // let value: never
}
```

### User-defined type guard

- Use `is` for type guarding:

```ts
interface CarLike {
  make: string;
  model: string;
}

let maybeCar: any;

// the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string"
  );
}

// using the guard
if (isCarLike(maybeCar)) {
  maybeCar;
  // let maybeCar: CarLike
}
```

- Use `assert value is Class`:

```ts
interface CarLike {
  make: string;
  model: string;
}

let maybeCar: any;

// the guard
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

assertIsCarLike(maybeCar);
maybeCar;
// let maybeCar: CarLike
```

- Use with private `#field` presence checks

```ts
class Car {
  static #nextSerialNumber: number = 100;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  #serialNumber = Car.#generateSerialNumber();

  static isCar(other: any): other is Car {
    if (
      other && // is it truthy
      typeof other === "object" && // and an object
      #serialNumber in other
    ) {
      // and we can find a private field that we can access from here
      // then it *must* be a car
      other;
      // ^? (parameter) other: Car
      return true;
    }
    return false;
  }
}

let val: any;
if (Car.isCar(val)) {
  val;
  // ^? let val: Car
}
```

### Narrowing with `switch(true)`

TypeScript 5.3 introduced the ability to use switch(true) for narrowing:

```ts
class Fish {
  swim(): void {}
}
class Bird {
  fly(): void {}
}

let val = {} as any;
switch (true) {
  case val instanceof Bird:
    val.fly();
    break;
  case val instanceof Fish:
    val.swim();
    break;
}
```

### `satisfies` keyword

How can we make sure that `usHolidays` conforms to the type `Holidays`? We could use a type annotation:

```ts
type DateLike = Date | number | string;

type Holidays = {
  [k: string]: DateLike;
};

const usHolidays: Holidays = {
  independenceDay: "July 4, 2024",
  memorialDay: new Date("May 27, 2024"),
  laborDay: 1725260400000, // September 2, 2024
};
```

\*\*but now, we have to treat `memorialDay`, for example, as `Date | number | string`. To prevent this, we can use `satisfies`:

```ts
const usHolidays = {
  independenceDay: "July 4, 2024",
  memorialDay: new Date("May 27, 2024"),
  laborDay: 1725260400000, // September 2, 2024
};
```

It’s important to remember that we’re **not** actually executing a type guard here — the satisfies operator is exclusively using type information, based on what’s been inferred by the declaration of usHolidays and what’s been declared for the Holidays type.

## Generics

Generics are dummy names for type parameters.

### Defining type parameter for function

simple example can be found below:

```ts
function wrapInArray<T>(arg: T): [T] {
  return [arg];
}
wrapInArray(new Date());
// ^? wrapInArray<number>(arg: number):[number]
wrapInArray(new Date());
// ^? wrapInArray<Date>(arg: Date):[Date]
```

### Defining type parameter for interface

simple example can be found below:

```ts
interface Dict<T> {
  [k: string]: T;
}
```

### An exercise: map, filter, and reduce for dictionary

```ts
///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict(...args: any[]): any {}
// Array.prototype.filter, but for Dict
function filterDict(...args: any[]): any {}
// Array.prototype.reduce, but for Dict
function reduceDict(...args: any[]): any {}
```

{::options parse_block_html="true" /}

<details><summary markdown="span">try the challenge before see the solution here!</summary>
```ts
// Array.prototype.map, but for Dict
function mapDict<T, S>(
  inputDict: Dict<T>,
  mapFunction: (original: T, key: string) => S
): Dict<S> {
  const outDict: Dict<S> = {}
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    outDict[k] = mapFunction(thisVal, k)
  }
  return outDict
}
// Array.prototype.filter, but for Dict
function filterDict<T>(
  inputDict: Dict<T>,
  filterFunction: (value: T, key: string) => boolean
): Dict<T> {
  const outDict: Dict<T> = {}
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    if (filterFunction(thisVal, k)) outDict[k] = thisVal
  }
  return outDict
}
// Array.prototype.reduce, but for Dict
function reduceDict<T, S>(
  inputDict: Dict<T>,
  reducerFunction: (
    currentVal: S,
    dictItem: T,
    key: string
  ) => S,
  initialValue: S
): S {
  let value = initialValue
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    value = reducerFunction(value, thisVal, k)
  }
  return value
}
```
</details>
<br/>

{::options parse_block_html="false" /}
