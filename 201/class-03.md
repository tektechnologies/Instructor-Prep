# Class 03

## First Hour

## The only way to get better at programming is to practice

### Introduce

Week 1 Career assignments:

- *Behavioral Interview Questions*
- *Career Coaching Overview*
- *Social Media*
- *Status Report*
- *Reflect on Emotional Intelligence*

---

### To Cover

- What does **'use strict';** do?
- Cancelling a Prompt() window returns a ***null*** value
- Alert() message returns ***undefined*** if no user input.
- Collective ownership: We share in the responsibility of each other's success.
- Inside the document, we have `<head>` and we have a `<body>` and that's it.
- Explain the **control flow**.
    - In general, means how the program decides which code to run, in which order.
    - Ask question, make choice, should we take or not. (?)
    - Then if we do, how do we handle the question and response. 
    - So we control the flow of our program.
- What kinds of control flow are there?
- Condition comments for control flow: We say "show this code" or not.

---

## Review Code Lab 2

---

## Second Hour

### Misc Topics

- Avoid introducing `typeof` and `parseInt` today.

## JavaScript Control Flow

a.k.a. *In What Order Shall We Do All of the Things?*

Scripts without any Decision Points aren't very useful, so we use conditionals
to decide which parts of our script to run. All conditionals return a `true` or
`false` and we use this value to make `if / else if / else` decisions.

---

## Evaluating Comparisons

1. Syntax: `(<operand> <operator> <operand>)`
2. Each operand can be a value, a variable, or an expression
3. Comparisons will usually be wrapped in `()`
4. If comparing expressions using a logical operator:
   1. Evaluate each expression to get `true` or `false`
   2. Use the booleans to evaluate the logical expression

```javascript
1 === 1     -> true
1 == '1'    -> true
1 === '1'   -> false

let a = 10;
let b = 100;
a < b         -> true
a >= 50       -> false

(a + b === 110) -> (10 + 100 === 110)
                -> (110 === 110)
                -> true

(a + b > a - b) -> (110 > -90)
                -> true

(a === b && true) -> (false && true)
                  -> false

((a !== b) || (a < b)) -> (true || true)
                       -> true
```

---

## 'if...else' Statements

Evaluate a conditional and proceed based on whether the result is `true` or
`false`. All `if` and `else if` conditions are checked, even if a match is found.

```javascript
if (condition === true) {
  //do this stuff
} else if (condition2 === true) {
  //do this other stuff
} else {
  //do this last stuff
}
```

---

## Comparison Operators

Compare two values and get a result in the form of `true` or `false`

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a == b | loose equal to | equality of **values** a & b |
| a === b | strict equal to | equality of **values and types** a & b |
| a != b | not equal to | inequality of **values** a & b |
| a !== b | strict not equal to | inequality of **values and types** a & b |
| a > b | greater than | is value a greater than value b |
| a < b | less than | is value a less than value b |
| a >= b | greater than or equal to | is val a greater than OR equal to value b |
| a <= b | less than or equal to | is value a less than OR equal to value b |

---

## Logical Operators

Compare the results of multiple comparison operators and (usually) get a final
`true` or `false` result

| Operator | Name | Evaluates |
| -------- | ---- | --------- |
| a && b   | and  | are a and b *both* true |
| a &#124;&#124; b   | or   | is a *or* b true |
| !a       | not  | inverts the boolean value of a |

---

## Type Coercion, Weak Typing, and Truthy/Falsy Values

JavaScript is called *weakly typed*, because values can be changed from one data
type to another. Languages that don't allow this are *strongly typed*. When
performing loose equality checks, JS performs *type coercion* to see if values
are equal if they are evaluated as having the same data type.

```javascript
let a = 5;
a = 'cookie'; //this is legit in JS

'10' > 1 -> true
```

| Truthy  | Falsy   |
| ------- | ------- |
| true    | false   |
| 1       | 0       |
| 'mom'   | ''      |
| 5 / 2   | '5' / 2 |
|         | let a;  |
| 'true'  |         |
| 'false' |         |
| '0'     |         |

---

Any existing value is considered truthy, so we can use a conditional to check
whether something exists:

```javascript
let a = 10;
let obj = {};

if (a) {
  console.log('a exists');
}

if (a && obj) {
  console.log('they both exist');
}
```

---

## Short Circuit Values

Logical operators work from left -> right, and stop as soon as they get a result.
When they stop, they return whatever value stopped them, so we can write logical
expressions that return a value other than `true` or `false`. This can be used
to set default values.

```javascript
let name1 = 'Bob';
let name2 = '';

let userName1 = (name1 || 'unknown'); -> userName = 'Bob'
let userName2 = (name2 || 'unknown'); -> userName2 = 'unknown'
```

---

## Break

---

## Third Hour

## Loops

*What are loops? Why do we need them?*

Introduce the concepts of loops and discuss the importance of them.

A great way to introduce the concepts of loops is to talk about how something
needs to repeated over and over again, such as mixing ingredients in a recipe.

Walk through with the students how "they know they are done" with the prompt.

In programming, we can create loops a few different ways.

Check a condition. If `condition === true`, repeatedly execute a code block
until the condition becomes `false`.

1. Keywords
   1. `break` - stop the loop and go to the next statement outside the loop
   1. `continue` - stop looping, re-check the loop condition, and keep
       looping if `condition === true`

---

## 'for' Loops

`for` loops are primarily used when iterating over arrays.
A `for` loop runs "**for** the number of times specified".

Use a `for` loop when you want to run a loop a certain number of times.
Track how many times the loop has executed using a counter variable.

The syntax is as follows:

```js
for(let counter = <initial value>; <stop condition>; <increment>){
  //do stuff
}
```

Order of operations:

1. Set counter = `<initial value>`.
2. Check counter against `<stop condition>`. If this expression is true, continue.
3. Execute the loop statements once.
4. Increment counter.
5. Repeat steps 2 - 4 until `<stop condition>` is met.

### Examples

```js
for (let i = 0; i < 10; i++)
{
  console.log(i);
}
```

```js
//console log the values in an array
let arr = ['a', 2, false, {}, 'I am last'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

## 'while' and 'do...while' Loops

Use a `while` loop when you don't know how many times you need to loop - maybe
even zero times.

Use a `do...while` loop when you know you want to run the loop once, but don't
know how many more times.

These loops will keep running until `condition === false`, so you must ensure
that the condition will become false at some point.

***If you don't, you'll get an infinite loop!***

```javascript
let myNumber = 3;
let userNumber = prompt('What number am I thinking of?');

while (userNumber != myNumber) {
  userNumber = prompt('What number am I thinking of?');
}

let i = 1;

do {
  console.log(i);
  i++;
} while (i < 1);
```

While and do while loops:

```javascript
let index = 0;
while (index < 100) {
  console.log(index);
  index++;
}

do {
  console.log('The index is shrinking!!! Index: ' + index);
  index--;
} while (index > 0);
```

---

## Box Model

### Review the basics of the box model

1. Margin
2. Border
3. Padding

`ManBearPig!`

Layouts using CSS with the Box model:

- Cannot put a top and bottom margin on inline elements.
- If we want to display margin on top, we will use display-inline block,
  which adds the margin all around.

---
