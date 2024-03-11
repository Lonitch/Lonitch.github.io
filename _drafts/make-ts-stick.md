---
title: "Make TS Stick"
author: Sizhe Liu
categories: post
tags: [programming, web-dev, basics]
---

_Only suffering and pain stick, so we become proficient through them_<!--more-->

<!-- mtoc-start -->

* [`#` versus `private`](#-versus-private)
* [Make variable immutable](#make-variable-immutable)
* [Simple conversion from string to dictionary](#simple-conversion-from-string-to-dictionary)
* [`string` vs `String`, `number` vs `Number`](#string-vs-string-number-vs-number)
* [A `Promise/resolve` knowledge checker](#a-promiseresolve-knowledge-checker)
* [use `...rest` in tuple type](#use-rest-in-tuple-type)
* [`useUnknownInCatchVariables`](#useunknownincatchvariables)
* [Define a class using template literal](#define-a-class-using-template-literal)

<!-- mtoc-end -->

## `#` versus `private`

- `#fieldName`is a JS private field, and it’s actually inaccessible outside of the class at runtime
- `private filedName` is a TypeScript private field, and while type-checking helps ensure we do not access it improperly, at runtime it’s **accessible** outside the class.

## Make variable immutable

```javascript
// "a" holds a immutable value and cannot be reassigned
const a = "AAAAAA";
// "b" holds a immutable value and can be reassigned
let b = "BBBBBB";
// "c" cannot be reassigned
const c = { learnAt: "web" };
// but the following is OK
c.learnAt = "xxxx";
// "d" is reassignable, and it holds a mutable value
let d = { learnAt: "cafe" };
// "e" is not reassignable, and holds an immutable value
const e = Object.freeze({ learnAt: "school" });
// the following is NOT OK
// e.learnAt="xxxx"
```

We can also use `readOnly` to make a property in an object not reassignable:

```typescript
type ImmutableObject = {
  readonly property: string;
};

const myImmutableObject: ImmutableObject = {
  property: "This property cannot be changed",
};

// Trying to change these values will result in a TypeScript error
// myImmutableObject.property = "New value"; // Error
```

## Simple conversion from string to dictionary

```javascript
const str = "hello";
let val = { ...str.split("") };
console.log(val);
/**
 * {
 *   '0': 'h',
 *   '1': 'e',
 *   '2': 'l',
 *   '3': 'l',
 *   '4': 'o'
 * }
 */
```

## `string` vs `String`, `number` vs `Number`

`string` and `number` are premitives, while `String` and `Number` are interfaces(defined in object-like fashion). Thus,

```typescript
let a: string & number; // never
// a type contains properties shared by String & Number
let b: String & Number;
```

We can even extend a new interface from `String` and `Number` by resolving conflicting properties:

```typescript
interface Bar extends String, Number {
  valueOf(): never;
  toString(): string;
}
```

## A `Promise/resolve` knowledge checker

In what order will the animal names below be printed to the console?

```javascript
function getData() {
  console.log("elephant");
  const p = new Promise((resolve) => {
    console.log("giraffe");
    resolve("lion");
    console.log("zebra");
  });
  console.log("koala");
  return p;
}
async function main() {
  console.log("cat");
  const result = await getData();
  console.log(result);
}
console.log("dog");
main().then(() => {
  console.log("moose");
});
```

The answer: dog, cat, elephant, giraffe, zebra, koala, lion, moose.

The explanation:

- `main` function runs `console.log("cat")` first,
- jump into `getData` function
- run `console.log("elephant")`
- executor function in `Promise` is called synchronously with the `Promise` constructor, hence,
  - `console.log("giraffe")` runs first
  - `resolve("lion")` executes, but it does not return any `result` until the rest of the function is executed
  - `console.log("zebra")` prints "zebra"
  - `console.log("koala")` prints "koala"
- execute `console.log(result)`, printing "lion"
- execute `console.log("moose")` printing "moose"

## use `...rest` in tuple type

Define a tuple type whose first element is number, an enum the second which is followed by some other strings:

```typescript
enum SecondElem = {
    GroundBeef,
    Lamb,
    Pork
}
// ...string[] is the rest element here
type TupleType = [number, SecondElem, ...string[]];

const t: TupleType = [12, SecondElem.Pork, "str2"];
```

It's a bit tricky when you create a function that manipulate tuple types like the one defined above. As it's possible to **lose some type information**:

```typescript
// exclude the first element in the passed tuple
function foo<T>(arg: readOnly [number, ...T[]]){
  const [_ignored, ...rest] = arg;
  return rest;
}
// tail has a type of (string|SecondElem)[]
const tail = foo([11,SecondElem.GroundBeef, "lettuce"])
```

The type of `tail` is `(string|SecondElem)[]`, not `[SecondElem, ...string[]]`. To solve this issue, we can rewrite `foo` as:

```typescript
function foo<T extends any[]>(arg: readOnly [number, ...T]){
    // remain the same
}
const tail = foo([11,SecondElem.GroundBeef,"lettuce"])
// tail now has a type of [SecondElem, ...string[]]
```

When defining a tuple type, you can use multiple `...` and they can be anywhere. But there can only be one `...rest[]`:

```typescript
type GoodType1 = [...[number, string], ...string[]];
// compiler error
type BadType = [...number[], ...string[]];
type GoodType2 = [string, ...number[], string];
```

## `useUnknownInCatchVariables`

Turn `useUnknownInCatchVariables` in `tsconfig.json` to `true`, to formulate your `catch` clause as the following:

```typescript
try{
    somethingRisky()
} catch (error unknown){
    if(err instanceof Error) throw err
    else throw new Error(`${err}`);
}
```

## Define a class using template literal

The `DataStore` class below gives some sort of type error that alerts you that you’ve broken the established pattern if you mis-name a method on the class(e.g., `getSongs` instead of `getAllSong`).

If you add a new entity like Comic (shown below) and make no other changes to your solution, you should get some sort of type error that alerts you to the absence of a clearComics, `getAllComics` and `getAllSongs` method.

```typescript
export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

export type Setter = {
  [K in keyof DataEntityMap as `add${Capitalize<K>}`]: (
    arg: DataEntityMap[K],
  ) => void;
};

export type Getter = {
  [K in keyof DataEntityMap as `get${Capitalize<K>}`]: (
    arg: string,
  ) => DataEntityMap[K] | undefined;
};

export type GetAll = {
  [K in keyof DataEntityMap as `getAll${Capitalize<K>}`]: () => DataEntityMap[K][];
};

export type Clearer = {
  [K in keyof DataEntityMap as `clear${Capitalize<K>}`]: () => void;
};

export type StoreMethods = Setter & Getter & GetAll & Clearer;

export class DataStore implements StoreMethods {
  constructor(
    public movies: { [key: string]: Movie } = {},
    public songs: { [key: string]: Song } = {},
  ) {}
  addMovie(arg: Movie) {
    this.movies[arg.id] = arg;
  }
  addSong(arg: Song) {
    this.songs[arg.id] = arg;
  }
  getSong(arg: string) {
    return this.songs[arg];
  }
  getMovie(arg: string) {
    return this.movies[arg];
  }
  getAllSong() {
    return Object.values(this.songs);
  }
  getAllMovie() {
    return Object.values(this.movies);
  }
  clearSong() {
    this.songs = {};
  }
  clearMovie() {
    this.movies = {};
  }
}
```
