# First Hour


# Second Hour



# Third Hour








# Code review
   - Review Truthy/Falsy
   - Review Arrays Question 7
   - Review Loops Question 6
# CSS layout
   - Introduce codepen.io
   - Review box model
   - Introduce Positioning
   - Absolute
   - Relative
   - Fixed
   - Block vs inline-block vs inline
# JS functions
   - What are they?
   - Anatomy of a function
   - Parameters, arguments
   - Calls/invoke
   - Anonymous functions
   - Scope
# Pair Programming
# Lab prep



# Start Code Review
## Statement vs Expression 
- statement vs expression, the expression does a computation, but nothing is done with it, with a statement we group expressions as a way to express our conditions to do something with the computations. 
- so x *= 5 is explicity implying the assignment of the variable value to x. 
## Array 
- Arrays are a ref datatype to hold other data. They are not primitive.
var fruits = ['apple','orange','bob','fred','tom'];
## Variable
- Variables allow us to give things in our code human readable values that we can use throughout our code. 
- Attributes happen in html: form, image, input elements all have the ability to add attributes to them. In the form:
```html
 <label for="name">
 <input type="text">
 <button type="button">
```
## Data Types
To determine what type of data type a value is use typeof(differentThings)
### Code Review question 6 or 7.
#### debugger.  Guessing Game walk through.
open the inspector to console before you reload the page, 
- what debugger does is stops the code where we put it and then we can step through our code  to see exactly what is going on with these variables. 
Type in the variables and see what values have been assigned to the variables. 
- In case, the input is a "string" and the number is a Number 10. 
- We can fix by taking away an equal sign, which is not best practice, while that would work we want to covert, the string to a number.
#### Search number conversion javascript. 
- ParseInt, Number 
numGuess = parseInt(input);
- We can use the parseInt to chain to other methods, like 
```js 
   var numGuess = parseInt(prompt('Try again, Guess Higher!'));
```
### Method .includes()
- We can use the method .includes()
.includes() works on strings and sub strings. 
---
# End of first Hour of Code Review Take Break
---



-- Start and Finish Demo Code by 11:00.
# now demo css layouts.
- last time we talked about the box model 
- looked at margin padding and how to calculate the size to specify white space of the        elements as well as using 
- box-sizing: border-box; 
- Start with creating some scaffolding. 
- let vs code add html template. 
- Talking about layout and talking about positioning. 
- Add body and h1. 
- Make sure to run the test, on the css and js files. 
- Try to show nav build out quick. 
- Show the comments in css
### review hex colors as the RGB.
- Let them know we will calculate hexidecimal in class 5.
# Pro tip, The idea of your design will most likely not be what your final page looks like. 
- So we start with a low fidelity, rendering of the page, called a wireframe. 
- css is the part of the coding process that will take as much time as you give it, that may not be the best use of our time, so maybe time box or save the work until the end of the day. 
- Label out the page as to what we may think we might need, with marking up some elements. 
- Now we have a basic structure, we can start to add some styling. 
- Add up to two css declarations.
- Use a span, a span is an inline element.
### Rerender the page to see that the tag does nothing by itself. 
- add a **border** to see what the span is doing.
- Try text-align, but didnt change anything because we are aligning it right in the tiny red box. So we could do a margin left, of 75%, when we shrink page, the margin does not operate the way we want. 
# Lets try a new property the position property, 
with position we have 
---
# relative
1. relative - meaning relative to where ever it was supposed to be otherwise. Start with where are you supposed to be and then move accordingly, we can use negative values to move relative values. Switching from abs to rel are not used very often, unless we are looking for a specific spot. Because there are weird side effects that change the way other things get laid out near by. 
- So, we should think of these layout issues early on to avoid being lost in what our css is doing to our elements. 
---
# fixed
2. fixed - position fixed at first may look like nothing has changed from absolute, however the position fixed keeps the element in position while content on the page moves around it. 
---
# absolute
3. absolute. 
Absolute we set what the spacing should be. 
set absolute top-bottom-left-right within the page. It doesnt matter what the parent element is or doing it now goes where ever you tell it to go. Lets you leave the parent element and what it is doing. It is possible to use it within the element. We can keep the elements grouped together so that screen readers can access that grouped data, possibly styling too.
---  
### inline and block level elements
- So now what we need to talk about is inline and block level elements. 
anchor tags ? are they block or inline. It is an inline element. Because it doesnt take up the whole line. 
- If we add an **h5 those are block level elements**, so we can see the element push the content down the page, 
- As we have seen in our styles we can add a display of block, we dont standardly use block on inline elements.
Are **images inline or block level, they are inline**. 
- We can change the image to block, but usually not a tool I reach for. 
---
# End CSS Layout Demo. 





# Start Function Demo 
# two more things to do today. 
brief look at **functions**. and how to do that within lab. 
we will look more at functions in lab five. 
so another thing today is that our lab is going to be **pair programming**. 

- Start with a key word function 
- Then give your function a name
- Then I will add the () so people can call it to the end of the name
- Next we add in the {} 
- And within th curly braces I will put my code. 

- If i go back to my browser nothing will work? why.
- Because we need to call it. 
- So I think of a recipe, a function is the recipe, but inorder for the recipe to work I need to run the recipe, call for the ingredients
- If I put that call in the console it will run and if I want I can add it to the app.js file. which is the normal practice. 




--- 
# Start at 11:45

# Lab details
- This is all you need to know to complete the lab today. This is a change that your partner will make that will not effect the functioning of your program, what questions do you have. 
- This is our first experience with pair programming, so the code implementations that we are doing are fairly simplistic. 
- if you find that you are writing alot of code for the lab, then you may be over doing it. 

- So what i will say about today's lab is that there are several steps, and make sure to do one at a time. 
- Explain pair programming, forking partners repo, while they navigate, since it is their project. 
- So we know what to achieve, but you can also look at other code that you may be having issues with as well, during lab time. 
- So we will go through the git process on forking, 
- Give repo link to partner. 
- git remote -v
- change some stuff and push to master, to the drivers forked repo. 
- Now how do we get the updates to the original repo.  
- Create a pull request, to merge to master repo. 
- Which takes us back to the original repo, 
- Last step is to merge pull request and then pull the updated master to local copy and continue to work. 




