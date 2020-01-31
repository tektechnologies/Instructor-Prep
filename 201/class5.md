# Programming Concepts Covered
## Announcements
## Partner Power hours are mandatory at Code Fellows. 

## Pair Programming Debrief
- learning from partner while driving
- talking about how code works as navigator is also a skill. 
- navigator still has control
- style nitpicks or variable name nitpicks. 



# Code Review

1. Look at web page, check out the css, and how its working. 
- Show them how to identify, errors in the code, the left side bar shows little red boxes. We can fix those issues with hovering over the red lines, and selecting the "fix all" options. 

# Base 16 and Hex code. 

134, a normal number. 
the one's place, the 10's place and the hundredths place as we move past ten we add a 1 and then start at 0 in the one's position again.
100 X 1 + 3 X 10 + 4 x 1 = 134
This is a decimal, base 10 mathmatical, 

With Computers there are two binary system
## Binary 
- are zero's and one's, because it is base 2. 
- we count from zero to 1 and then begin again. 
- So we start at the 1's position and then move to the 2's position and then the 4's position and then the 8's position, 16th, 32nd place, we multiply by two each time. 
thumbs on base 10.
- so if we have a number in binary 101 then that means we have one 1 and zero 2's and one 4's. (1 x 4 + 1 x 1) That number in binary is what we call 5 in decimal. (101 === 5). We use binary in computers because it is easy for the computer to compute whether a value is on or off, a 1 or a 0. And we can stick those 0 and 1's together to make, the numbers we need. 

Binary is base 2. All zero's and one's. Then move to the next spot over. 
Decimal is base 10. Count 0 - 9. 
 
https://www.binary-code.org/binary/8bit/10000110/

In binary decimal points work the same as in decimal, with usually dont have to think about those, the 1/10's space the 1/2 space and then 1/4 and so on. 

# HEX code. and RGB Values. 

so we can specify our desired colors in RGB by the number of red, number of green and number of blue. 
 The number 256 is an important number (16x16) 0r 2 to the 8th. 
 If we use base 16, we have a one's place and then a 16th's place and then a 256th's place, so all of our possible color values fit into and what that makes convenient is that all our possible values fit into just two digits of HEXIDecimal. So we can always use two digits to represent a HEX number, which is how they came up with Hexadecimal. 
### #RRGGBB 
 In base 16 we need something that means the number 10 (0-9 and then A)
 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
 A - 10
 B - 11
 C - 12
 D - 13
 E - 14
 F - 15
 E - 16( We go into Second Place Number)

Decimal 16 is equal to 10
Decimal 17 is equal to 11
Decimal 25 is equal to 19
Decimal 26 is equal to 1A
Decimal 31 is equal to 1F

This is how Hex codes work. 
                        
FFFFFF  is equal to (15 X 16) + (15 X 1) = 255
![FF in Hex](FFHEx.png)

### Convert an RGB to HEX.
rgb(184,)
184
16 * 11 + 8 * 1
      B + 8 = B8(Hex)
# Note it is ok, if you can not computate these values by memory
- the google will have resources that will aid in translating these values back and forth. 

Ask why things are happening in their code, like why do we have all of our global variables at the top, and how does that effect scope if they are organized all over?
- As long as we declare the variable, globally, it will be accessible in any function it will be in scope for those functions, as long as we declare them first, make sure to set those variables before we start running our functions.

What happens on    var quizObject == creating a variable data type that will be an array. Inside the array we see that there are some objects and their properties, we have an array of objects. this allows a dev to loop through the objects and with dryer code. 

var answer = yes;
var wasRight = answer === 'yes' || answer === 'y';

If I look at wasRight it will be true. However if I reset my answer in the future to no, then wasRight is still yes. We can fix this using a function. OR keep the conditionals in the loop to recalculate the condition to be true or false.
Discuss review code, for feedback on the about me lab. 
- --------------------------------------------- 
# 7:00

Show them that the TA will provide feedback within github pull requests, as well as grading in class. 
We have that history for review, each commit has a hash, it is base 16, although it is still really long, we can run in command git checkout and that hash number. This allows me to go back in time and look at the code how it was in the past throughout its development. Now if we look at the code we are seeing the code before the commit was made. 
git checkout master takes us back to master. 

# Break 7:10 - 7:20 
- git commits to search for more information.
- We can look at network graphs


# Warm up 
- Have the students take a couple minutes to answer these questions. 

1. What is a function? 
2. Why do we write functions? 

### What is a function?
- procedure 
- Contains a set of statments that perform a specific tasks. 
- functions usually describe a task that we do
- it is a named piece of code. 


### Why do we write functions? 
- Makes code Dryer. (less copy and paste)
- Call the code over and over. 
- Make code more readable for other developers. 
- Use functions when we want to reuse a section of code many times. 
- So when I do something multiple times, I realize I have a piece of behavior that needs to happen more than a few times, is when I realize it. 

### How do we write functions in our code. 
- figure out what I want to do.
- figure out what inputs and outputs I will have
- Last step is writing the function.

## This follows our class 5 from 102 
- We dont just jump into code. 
A. Talk about it.
B. Learn about it. 
C. Then code it. 

first we need to figure out what the problem is and then we can start to build out our functions.

# Cover this Below: 

https://github.com/codefellows/code-201-guide/blob/master/curriculum/class-04/demo/demo.md

### Talk about adding names to anonymous functions to show the outcome in the stacktrace in the console. 

- We want to build out functions in a couple of differnet ways. For one, we may be working on a block of logic that does something and may eventually end up in a function where this named peice of code, can then have its parameters determined and can be called over and over. 

- Some times we may know ahead of time because of we know the code that we will be writing and we start with a rough draft or smaller peice of that code and refactor or make it better as we go along. 


//So lets write a function that prompts a user for a pizza crust.

function pizzaCrustType() {
   var pizzaCrustType = prompt('What type of pizza crust would you like?');

   console.log('Customer Pizza Crust Type is: ' + pizzaCrustType);

}
pizzaCrustType();

console.log('Your Pizza Crust Type is: ' + pizzaCrustType);

- //This will return undefined. Because our variable scope is within the function where the variable is declared. 

var pizzaCrustType;

function pizzaCrustType() {
   pizzaCrustType = prompt('What type of pizza crust would you like?');
   console.log('Customer Pizza Crust Type is: ' + pizzaCrustType);
}
pizzaCrustType();