# Full Stack from Zero: The Complete MERN Journey

## HTML (HyperText Markup Language)

### Web Fundamentals

- [x] World Wide Web communication
- [x] HTTP Request / Response
- [x] The HTTP Request Cycle — how browser ↔ server communication happens

### Introduction to HTML

- [x] What is HTML?
- [x] What are HTML tags?
- [x] What are a tag, an element, and an attribute?
  - [x] Examples: `<p>`, `<a href="">`, `<img src="">`
- [x] Difference between HTML and HTML5
- [x] Basic structure of an HTML document
  - [x] `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- [x] The `<title>` tag — purpose and SEO importance

### Core Tags & Elements

- [x] Headings and paragraphs — `<h1>` … `<h6>`, `<p>`
- [x] Line breaks — `<br>` (and when to avoid it)
- [x] Lists — `<ul>`, `<ol>`, `<li>`
- [x] Links (Hyperlinks) — `<a href="">`
  - [x] Absolute vs Relative URLs
  - [x] Open in new tab safely (`target="_blank"` + `rel="noopener noreferrer"`)
  - [x] Email links — `mailto:`
- [x] Images — `<img>` with `alt` attribute importance
- [x] `div` and `span`
  - [x] Block-level vs inline elements
- [x] Adding videos (HTML5) — `<video>`

### Semantic HTML

- [x] What are semantic tags?
- [x] Common semantic elements — `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`
- [x] Semantic vs non-semantic tags
- [x] Difference between `<strong>` vs `<b>` and `<em>` vs `<i>`
- [x] `<address>` — when to use it

### Table

### Forms and Inputs

- [x] The `<form>` tag
- [x] `action` and `method` attributes
- [x] `enctype` and `multipart/form-data`
- [x] Input types
  - [x] `text`, `password`, `hidden`, `checkbox`, `radio`
- [x] Labels — `<label>` and `for`/`id` for accessibility
- [x] Dropdown lists — `<select>` + `<option>`
- [x] `textarea` — multi-line text input
- [x] `fieldset` and `legend` — grouping form elements
- [x] `contenteditable` attribute — making elements editable

### Meta & Accessibility

- [x] The `<meta>` tag — `charset`, `description`, `viewport`
- [x] `lang` attribute on `<html>`
- [x] The `<noscript>` tag — purpose and relevance

---

## CSS — Cascading Style Sheets

### CSS Introduction & Fundamentals

- [x] What is CSS (Cascading Style Sheets)?
- [x] What is the current version of CSS?
- [x] How is CSS different from CSS3?
- [x] Recommended CSS frameworks (Tailwind, Bootstrap, Bulma, etc.)
- [x] Syntax of CSS
- [x] How to add CSS to a webpage
  - [x] Inline CSS
  - [x] Internal CSS
  - [x] External CSS
- [x] Which type of CSS holds the highest priority?
- [x] How to add comments in CSS
- [x] Best way to include a CSS file and why use `@import`

### Selectors & Specificity

- [x] What are CSS selectors?
- [x] Difference between class and id selector
- [x] Universal selector
- [x] Attribute selectors
- [x] CSS combinators — descendant, child, sibling
- [x] Pseudo-classes
- [x] Pseudo-elements
- [x] What is specificity in CSS?
- [x] What is `!important` and when (not) to use it

### CSS Box Model & Layout Basics

- [x] CSS Box Model (margin, border, padding, content)
- [x] Difference between margin and padding
- [x] CSS border properties
- [x] Difference between border and outline
- [x] `margin: 40px 100px 120px 80px` explained
- [x] `box-sizing` property
- [x] CSS `overflow`
- [x] CSS `float` property
- [x] `display`: `inline`, `block`, `inline-block`
- [x] Can elements overlap? → `position` & `z-index`
- [x] Positioning — `static`, `relative`, `absolute`, `fixed`, `sticky`

### Colours, Backgrounds & Visual Styling

- [x] CSS colours (HSL, RGB, HEX)
- [x] CSS backgrounds and their properties
- [x] Text formatting in CSS
- [x] Shadow effects — `text-shadow`, `box-shadow`
- [x] List styling → custom list markers (including images)
- [x] Borders and `border-radius`
- [x] CSS image reflection
- [x] CSS gradients (linear, radial, conic)

### Advanced Selectors, States & Effects

- [x] CSS link states — `link`, `hover`, `active`, `visited`
- [x] Hide an element — `display: none` vs `visibility: hidden`
- [x] Centering content vertically and horizontally (text, images)
- [x] CSS counters
- [x] Pagination in CSS
- [x] Multiple text columns (newspaper style)
- [x] CSS transitions
- [x] CSS animations
  - [x] `@keyframes` rule
- [x] CSS 2D and 3D transformations

### Responsive Design & Modern Techniques

- [x] Responsive Web Design (RWD)
- [x] How to make a website responsive using CSS
- [x] CSS flexbox
- [x] CSS grid
- [x] Difference between flexbox and grid
- [x] Logical properties (e.g., `inline-start`, `block-end`) vs physical properties
- [x] Skip-to-content accessibility link (`:focus-visible` best practices)
- [x] CSS custom properties (variables) and how they cascade
- [x] Organising custom properties for colour schemes
- [x] Difference between CSS reset and normaliser

### Additional & Best Practices

- [x] Case-sensitivity in CSS
- [x] CSS animations — why and how they improve UX
- [x] RWD recap and combining flexbox + grid
- [x] Accessible, maintainable CSS architecture (BEM, variables, etc.)

---

## JavaScript

### JavaScript Fundamentals

- [x] What is JavaScript?
- [x] JavaScript vs Java — common misconceptions

### Syntax & Variables

- [x] How to add JavaScript to a webpage
  - [x] Internal `<script>` tags
  - [x] External `.js` files
  - [x] Script placement (head vs body) and performance implications
- [x] Variables — `var`, `let`, and `const`
  - [x] Difference between `var`, `let`, and `const`
  - [x] Scope — global, function, and block scope
  - [x] Hoisting and temporal dead zone
- [x] Naming conventions for variables
- [x] Comments in JavaScript — single-line and multi-line

### Data Types & Operators

- [x] JavaScript data types — primitive vs non-primitive
  - [x] Primitive types — `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
  - [x] Non-primitive types — `object`, `array`
- [x] Type coercion and type conversion
  - [x] Truthy and falsy values
  - [x] `==` vs `===`
- [x] Arithmetic operators — `+`, `-`, `*`, `/`, `%`, `**`
- [x] Assignment operators
- [x] Comparison operators
- [x] Logical operators — `&&`, `||`, `!`
- [x] Incremental and Decremental
- [x] Ternary operator — `? :`
- [x] String operators and string concatenation
- [x] `typeof` operator

### Functions

- [ ] What are functions?
- [ ] Function declaration, function expression, and arrow functions
- [ ] Parameters and arguments
- [ ] Return statement
- [ ] Default parameters
- [ ] Rest parameters — `...args`
- [ ] Function scope and closure
- [ ] Hoisting of functions
- [ ] Anonymous functions
- [ ] IIFE (Immediately Invoked Function Expression)
- [ ] Callback functions
- [ ] Pure functions vs impure functions
- [ ] Recursion

### Objects & Arrays

- [ ] What is an object?
- [ ] Object literals and properties
- [ ] Accessing object properties — dot notation vs bracket notation
- [ ] Methods — functions as object properties
- [ ] `this` keyword in objects
- [ ] Object destructuring
- [ ] Spread operator for objects — `...object`
- [ ] Arrays — what and why
- [ ] Array methods
  - [ ] `push()`, `pop()`, `shift()`, `unshift()`
  - [ ] `map()`, `filter()`, `reduce()`
  - [ ] `find()`, `findIndex()`, `includes()`
  - [ ] `sort()`, `reverse()`
  - [ ] `slice()`, `splice()`
  - [ ] `join()`, `split()`
  - [ ] `forEach()`, `some()`, `every()`
- [ ] Array destructuring
- [ ] Spread operator for arrays — `...array`
- [ ] Multidimensional arrays

### Control Flow & Conditionals

- [ ] If, else if, else statements
- [ ] Switch statements
- [ ] For loops — standard, for...in, for...of
- [ ] While and do...while loops
- [ ] Break and continue statements
- [ ] Loop control and best practices

### DOM Manipulation

- [ ] What is the DOM (Document Object Model)?
- [ ] DOM hierarchy — parent, child, sibling relationships
- [ ] Selecting elements — `getElementById()`, `querySelector()`, `querySelectorAll()`
- [ ] Selecting by class and tag name
- [ ] Traversing the DOM — parent, children, siblings
- [ ] Creating and inserting elements — `createElement()`, `appendChild()`, `insertBefore()`
- [ ] Removing elements — `removeChild()`, `remove()`
- [ ] Modifying element content — `textContent`, `innerHTML`, `innerText`
- [ ] Modifying element attributes — `setAttribute()`, `getAttribute()`
- [ ] Modifying element classes — `classList.add()`, `remove()`, `toggle()`
- [ ] Modifying element styles
- [ ] Event listeners — `addEventListener()`
- [ ] Event object and event properties
- [ ] Removing event listeners

### Events & Event Handling

- [ ] What are events?
- [ ] Common events — `click`, `submit`, `change`, `input`, `mouseover`, `mouseout`, `keydown`, `keyup`
- [ ] Event propagation — bubbling and capturing
- [ ] `stopPropagation()` and `preventDefault()`
- [ ] Event delegation
- [ ] Form validation with JavaScript
- [ ] Handling form submission
- [ ] Focus and blur events

### ES6+ Modern JavaScript

- [ ] Template literals — backticks and `${expression}`
- [ ] Arrow functions — `() => {}`
- [ ] Destructuring — objects and arrays
- [ ] Spread and rest operators
- [ ] Default parameters
- [ ] Promises — what and why
  - [ ] States of a Promise — pending, fulfilled, rejected
  - [ ] `.then()`, `.catch()`, `.finally()`
- [ ] Async/await
  - [ ] How async/await simplifies Promise handling
  - [ ] Try/catch with async/await
- [ ] Classes in JavaScript
  - [ ] Constructor and methods
  - [ ] Inheritance and `super`
  - [ ] Static methods and properties
- [ ] Modules — `import` and `export`
- [ ] Map, Set, and WeakMap/WeakSet

### Error Handling

- [ ] Try, catch, finally blocks
- [ ] Throwing errors — `throw` statement
- [ ] Error types — `ReferenceError`, `TypeError`, `SyntaxError`, etc.
- [ ] Custom errors
- [ ] Debugging with `console.log()`, `console.error()`, `console.table()`

### APIs & Asynchronous Operations

- [ ] Fetch API — making HTTP requests
  - [ ] GET, POST, PUT, DELETE requests
  - [ ] Request headers and body
  - [ ] Handling responses and JSON
- [ ] Handling errors in fetch
- [ ] XMLHttpRequest (older approach)
- [ ] CORS — Cross-Origin Resource Sharing
- [ ] `setTimeout()` and `setInterval()`
- [ ] Clearing timeouts and intervals

### Local & Session Storage

- [ ] localStorage — persistent storage
- [ ] sessionStorage — temporary storage
- [ ] Storing and retrieving data
- [ ] `getItem()`, `setItem()`, `removeItem()`
- [ ] Storing complex data with JSON — `JSON.stringify()`, `JSON.parse()`

### Functional Programming Concepts

- [ ] First-class functions
- [ ] Higher-order functions
- [ ] Map, filter, reduce — practical applications
- [ ] Function composition
- [ ] Currying
- [ ] Memoization

### Object-Oriented Programming

- [ ] Prototypes and prototype chain
- [ ] Constructor functions
- [ ] Object.create()
- [ ] Inheritance in JavaScript
- [ ] ES6 classes vs constructor functions
- [ ] `instanceof` and `typeof` in OOP context

### Advanced Concepts

- [ ] Scope chain and lexical scope
- [ ] Closures — understanding and practical uses
- [ ] Currying and partial application
- [ ] Hoisting — functions, variables, and classes
- [ ] `this` binding — call, apply, bind
- [ ] Event loop and call stack
- [ ] Microtask and macrotask queues
- [ ] Generators and iterators
- [ ] Symbols
- [ ] Proxy and Reflect

### Best Practices & Performance

- [ ] Code organization and naming conventions
- [ ] DRY (Don't Repeat Yourself) principle
- [ ] SOLID principles in JavaScript
- [ ] Avoiding global variables
- [ ] Performance optimization — debouncing and throttling
- [ ] Memory leaks and how to avoid them
- [ ] Testing JavaScript — unit tests and integration tests
- [ ] ESLint and code quality tools
- [ ] Comments and documentation
