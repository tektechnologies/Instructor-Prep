# Review Challenges
## Use console.log for printing things out. 
We will complete these review challenges together as there's time.

## Challenge 1

Write a piece of code that creates a variable `numberOfChugga` and sets the value of that variable to 4. Then, write code that uses that variable to print out the word `chugga` 4 times, and then at the end prints out `choo choo!` once.
```js
var numOfChugga = 4;
while(numOfChugga > 0){
    console.log('chugga');
    numberOfChugga--;
}
console.log('Choo Choo!);
```
## Challenge 2

Write a function called `getTwo` that takes in no parameters and returns the number 2.
```js 
function getTwo(){
    return 2;
}
```
- what data type is getTwo // it is a function 

- what data type is this getTwo() // it is a number. 

- getTwo() + 5 // becomes a string 7

- getTwo() - 5// becomes -3

- getTwo -5 // because its math it return Nan

## Challenge 3

Write a function called `addTwo` that takes in one parameter, a number, and returns 2 more than the input number.

Input | Output
------|-------
0     | 2
7     | 9
-5.4  | -3.4

# Solution
```js 
function addTwo(number){return number + 2;}


addTwo(2);
addTwo(getTwo());
addTwo(getTwo()getTwo());
addTwo('2');
4
```
## Challenge 4

Write a function called `repeat` that takes in two parameters, a string and a number, and returns the string repeated that many times, with spaces between repeats.

Input | Output
------|-------
`'a',0` | `''`
`'a',1` | `'a'`
`'a',2` | `'a a'`
`'a',4` | `'a a a a'`
`'abc',3` | `'abc abc abc'`
```js

//going to need a loop
function repeat(string, number){
var answer = '';
//some code here and test. 
for(var i =0; i < number; i++){
answer = answer + string + ' ';

    }
return answer.substring(0, answer.length -1);
}
//we dont want space on the ends
'''

```js
function repeat(string, number){
var answer = '';
for(var i =0; i < number; i++){
answer = answer + string + ' ';
    }
return answer.substring(0, answer.length -1);
}




function repeat(string, number){
var answer = '';
for(var i =0; i < number; i++){
answer = answer + string;
if(i < number - 1){
    answer = answer + ' ';
     }
 }
return answer;
}
'''

## Challenge 5

Write a function that takes in 2 parameters, a string and a number, and returns a string consisting of the number, followed by the string, followed by an 's' if the string should be pluralized based on the number.

Input      | Output
-|-
`'cookie', 1` | `'1 cookie'`
`'cookie', 2` | `'2 cookies'`
`'cookie', 12` | `'12 cookies'`
`'cookie', 0` | `'0 cookies'`
`'salmon', 1` | `'1 salmon'`
`'salmon', 2` | `'2 salmons'`
`'mouse', 3` | `'3 mouses'`

## Challenge 6

In what order will these `console.log` statements run?

```javascript
console.log(1);

function doStuff() {
  console.log(2);
}

console.log(3);

function doThings() {
  console.log(4);
  doStuff();
  console.log(5);
}

console.log(6);

doStuff();

console.log(7);

doThings();

console.log(8);
```

## Challenge 7

What will this code log to the console?

```javascript
var a = 2;
var b = 3;
console.log(a + b);
var c = a;
a = 7;
console.log(a);
console.log(c);

function printTheThing(a) {
  console.log(a);
}

printTheThing(4);
printTheThing(b);
```
