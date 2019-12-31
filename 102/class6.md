# Programming Concepts Covered

Students will incorporate JavaScript into a web page to create dynamic content that responds to input
Students will replicate code that uses logical branching and basic conditionals to determine the outcome of content on a web page.
Is JavaScript compiler or interpreter?
JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute.
The first JavaScript engine was created by Brendan Eich in 1995 for the Netscape Navigator web browser. 
The first modern JavaScript engine was V8, created by Google for its Chrome browser. V8 debuted as part of Chrome in 2008, and its performance was much better than any prior engine. The key innovation was just-in-time compilation, which can significantly improve execution times.

# Class Agenda
- So looks like next Saturday class will be from 9-3.
# Review of previous class
  Share your learning
 
# Recap from Code 101
- Proceedural coding. A procedural language is a computer programming language that follows, in order, a set of commands. Examples of computer procedural languages are BASIC, C, FORTRAN, Java, and Pascal.
- Scripting Language - A scripting language is a programming language designed for integrating and communicating with other programming languages. Some of the most widely used scripting languages are JavaScript, VBScript, PHP, Perl, Python, Ruby, ASP and Tcl.
- I have worked through 3 semesters of Java, C#, php, multiple database courses and sometimes it still takes me 30 minutes to figure out what some code from 201 is doing.(pause for class laughter) So I am looking forward to learning along with you as I revisit these concepts and we learn together. 

# Discussion Exercise



# From Mockup to Markup


# Demo: Input and Output
- What are data types. 
- At first break, Ask these questions?
1. What do I do to make it work?
2. What do I do to build something?
3. Answer : Practice.
When we are back from break we will open up an editor (console)  and see what does 1 plus fish equal.
We will make a function, explore within javascript and play a bit when we are doing stuff. I will try and show you that process today. 
Mention that every morning I get up and read code, for about 30 minutes. NOTE: Try to be constantly writing javascript until it starts to stick, javascript is like th wild west. Wride It!. 
- Repl.it uses the same code scaffolding, so here we dont have to interface or a frontend. We just have js file and the results of what we write are going to show up here. 
'Word' + enter = word
BUT: even though it shows up we can not yet do anything with it. 
- So if we have a number and a number and we use the + sign, we get a number return to us. 
So, 1 + 1 would give us 2

Now, if we try this with strings, 
'Craig' + 'Barkley' = concats.
CraigBarkley.
___
If it sees numbers it gives us numbers and strings to concatenate them together.
2 + 'word' this is not a math problem, so we get a string space 'word', javascript made that change for us. 
NOTE: In other languages that are not LOOSLY TYPED, like java a strict language you have to specify what it is. Javascript is like "yeet I think I know what you mean".
___
So now lets ask this? 
// says it has to be the same. 
2 === '2'
What we care about is a number and not a string. 
== // means or says I think you mean this. 
2 == '2' // equals true. 
SO, when we write our logic we use a strict comparison. 
#### NaN
Not a Number, which is a number that is not a number, so we have a bug. 




# Lab: Plan and Build



# New Vocabulary
___
___
# JavaScript
- Javascript and Java are not the same thing. 
- ECMAScript os ES is a scripting-language specification standard by ECMA International. It was created to standardize JS. 
- Javascript was slow to catch on, and people thought it was a joke, because JS as a language was not high level. It was used in conjunction with websites that were for the most part had only static content aside from a contact form. There was very little behavior happening on the sites pages. 
- Now JS is the most widely used language of all time. 
- We can pretty much do anything with JS. Build IoT, Web Servers, Web Applications, Mobile Apps, Smart Watches, Games, Robots, Drones. 
- It is an amazing langauge, and because of that people still hate it, because you can build the same things in different ways. 
- With C# and Java, there are language specifications, that must be followed inorder to create working code, if the rules of the languages are not followed the programs will not compile if your classes are not constructed correctly and thusly, not work.
___
# conditionals

Is this thing equal to this, yes or no? if so we have conditional logic, What is a variable? 
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators
___
# data type
So, lets look at Data Types. 

1. Primitives  In JavaScript, there are 7 primitive 
-data types: 
### string
- Strings are text started with single or double quotes, best practice single qoutes. 
- JavaScript's String type is used to represent textual data. With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. Use strings for textual data. When representing complex data, parse strings and use the appropriate abstraction.
ASK QUESION 
- What is '30' ? // it is a string. 
### number
- is exactly that it is a number, 1 or 27 or
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
### boolean 
- Boolean represents a logical entity and can have two values: true, and false. 
Logic is true or false, yes or no, 1 or 0. 
### null
- The Null type has exactly one value: null. The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
# undefined   
- A variable that has not been assigned a value has the value undefined.
# symbol (new in ECMAScript 2015).
The data type symbol is a primitive data type. Every symbol value returned from Symbol() is unique.
# object. 
In computer science, an object is a value in memory which is possibly referenced by an identifier.
In JavaScript, objects can be seen as a collection of properties. 
- With the object literal syntax, a limited set of properties are initialized; 
An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
- then properties can be added and removed. 
- Property values can be values of any type, including other objects, which enables building complex data structures.
-  Properties are identified using key values. A key value is either a String or a Symbol value.
___
# variable
A variable stores information for later use. 
### Javascript Variables 
JavaScript includes variables which hold the data value and it can be changed anytime.
A string literal is zero or more characters enclosed in double (") or single (') quotation marks.
cat = 'cat'

- Naming Variables.
That was my choice to call my variable cat, cat. We have to be careful when we are naming some variables. Here is a bad example of naming variables. 

dog = 'cat'   //Bad

So, a variable is written like this. 

var name = 'Craig'

We have two things happening it is a variable declaration. Which gives us a holder, this a box. The variable name is what we put in there. 
I HAVE DECLARED A SPOT IN MEMORY AND I HAVE GIVEN IT DATA!


So, lets take a look at that :
var age;  // this is a declaration. 
age = 35; // here is the data/ value. 
Note: undefined is a data type. 
___
Lets talk about console.log
console.log(); is not a tool for building things, it is 100% for telling developers, what the output is going to be, it prints in the 

The Console object has a log method with a name parameter, I dont expect you to remember that, its just fyi for when you see that again in the future. 
# Start Here.
var cool; // declaration of variable.
cool = 2 + 2; mathmatical expression  assignment to cool.
And now we call : console.log(cool);
Most often we will see, 
var cool = 2 + 2;
NOTE: We can not use numbers as variables. 
So, 
var 10 = 10;
var twenty = 20;

console.log(ten + twenty);
___
var firstName = 'Craig';
var lastName = 'Barkley';
var age = 47;
console.log(first + ' ' + last + 'is ' + age);

NOTE: the word 'is' is the only thing that we hard coded into these statements. 

ALRIGHT what we have done so far is to discuss primitive variable types in JS, so lets take a 
____
# SECOND BREAK
When we come back we will build out some basic js. 
- look at 
alert();
prompt();
I will take my old learning journal and delete it and create a new one and pull it down and recreate it.
So the main to take away from this is to realize that a js number is a number and a string is text, and a boolean is true or false. 
make sure to pre-read for the next class.  
____
Back from Break 
___
- So you have a job and you need to add some js into your site.
- So we get a link to a repo. 
- So you cd into the app and you open in vs code. 
Colaboration requires branching which we will cover in 201, so we can branch our project out to be able to do that. 

- BOX MODEL
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model


So now lets look at some dependency needs of our application. 
We are going to need to pull in a js file. 
So where can we do that, we can add to the head tag, are we going to do this? no. I can but I am not. 
I am going to put it at the bottom above the body tag.
With the idea that we need to run our html firt and then begin running our js last. it will be rare what we do today in a live development environment. 
In js we do the first thing hello world 
alert('hello world');
This is proof of concept that your code is working. 

- Instead of using a link tag we are going to use the script tag. We could write js in the script tag but we are going to enforce separation of concerns. 
So, lets build something basic with some logic, we will do some conditional logic, we will look at that in a minute, 
Lets focus on this for a minute, 

if('cool' === cool)

So what this says if the thing on the left is strictly equal to the thing on the right then it will be true. proceed with next line of code. 

var hourNow = prompt('What time is it now? 0-23');

console.log(hourNow);
- Now explain a prompt and how it allows you to add input to it. 



Mention if you have not yet to use google chrome. and show the console. 
Apologies I can not zoom the alert box. 

console.log('prompt question', hourNow) this is called and identifier so I know what it is doing. So, BEST PRACTICE is to label all your console logs. 
- Because it is a scalable way to identify what is coming from where. 

Now we will set a greeting: that will be assigned a value later in the code. 

var greeting; // variable declaration. 
So, right now this is undefined variable type. 
If I do this console.log(greeting) what will I get? Undefined. 
console.log(hello) // will be an error.

if(hourNow > && hourNow < 24){
    greeting = 'Good Night.';
}

Now let's talk about the & operation we will look at the OR || operator later and so if our && has the first part to be true, and the right has to be true, then its truthy, 
GO UP TO BOARD AND SHOW WHAT YOU ARE TALKIN ABOUT. 
So, now we continue, 

else if(condition) {
    greeting = 'Good Morning';
} else {
    greeting = 'Do you know what time it is?';
}
Now we can add a console log and say
console.log('greeting response' + greeting);

So now for the first time we are going to intefreate our code, on day 6 of 201 we will learn about the DOM and here is wear we will do real activity within the pages. 

document.write(greeting);

### method 
A method is a property on an object that is equal to a function. 
document is the object and then .write is the method. 
So, it finds the last element and throws the .write there. This doesnt really do anything cool, but we can see the changes between the things. 

So now it is time for lab, until 3:45.
Show console, 
Ok we didn't just break google. We have a browser that renders a representation of the web site not an actual raw code. So it only happens on our browser. 

NOTE: The way we get paid is to build things where other can use the wysiwyg interface to acccomplish work. 
- DYNAMIC DEVELOPMENT is a program built in such a way that the client can ad say an image to a site.

START by 
a. First thing to do is make sure your files are connected. 
b. Ask am I getting the input in and the something back out? 







### FIRST PROGRAMMING LESSON. -
Spend some time thinking through the things that you are naming. 
var instructorName = 'Craig'

Which is better than 
var x = 'craig'
Many programmers bypass this and you can't!
- At DeltaV the course curriculm is set up not only to teach you how to code, but to instill best practices and developer hueristics that will make you a more valuable employee and developer. 

A variable is a place to store code in memory. A stored location in your computers memory that holds the variable value.

## Variables - can hold any of the primitive types in memory. 