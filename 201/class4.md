# Programming Concepts Covered


## 6:00
- Announcements. 
Fresca Shortage: Fresca has turned out to be very popular, and we went through it much faster than expected. Donna has ordered more but it’s currently on back order. As soon as it’s available, we’ll get more!

- statement vs expression, the expression does a computation, but nothing is done with it, with a statement we group expressions as a way to express our conditions to do something with the computations. so x *= 5 is explicity implying the assignment of the variable value to x. 

- Arrays are a ref datatype to hold other data. 
They are not primitive, 
Variables allow us to give things in our code human readable values that we can use throughout our code. 

- Attributes happen in html, 

var fruits = ['apple','orange','bob','fred','tom'];

Use typeof(differentThings)

Ask them what they want to look at in code review, 
- counting for correct answers X
    score++ or score = score + 1
- final score 
- going through the array of possible answers, 
- multiple trys different approaches. X

### Start with the html ul an ol lists. 


### Talk about code review,     
- So last time we worked adding some ul and ol lists, worked with conditional statements some more, and also at truthy and falsy values, 

mention that the us of the reset.css, removes the bullets, which we can change, 

- using classes are a standard best practice way of modify css, 
- usually resist using an id, because we cannot duplicate id's accross the site, 
- Not knowing how a project will end up it is best use to practice using classes so that they could potentially be reused in the future. 

### Lets look at Javascript. 

Review code and then as you come accross an issues you can demo debugger. 
open the inspector to console before you reload the page, what debugger does is stops the code where we put it and then we can step through our code to see exactly what is going on with these variables. 

Type in the variables and see what values have been assigned to the variables. 
- In case, the input is a "string" and the number is a Number 10. 
- We can fix by taking away an equal sign, which is not best practice, while that would work we want to covert, the string to a number. 
- Search number conversion javascript. 
- ParseInt, Number 

numGuess = parseInt(input);
- We can use the parseInt to chain to other methods, like numGuess = parseInt(prompt('Guess Higher'));
## 7:00
# Take Break for 10 Minutes.
### When we get back we will look at functions. 

- To stop loops we use break as opposed to setting a variable to the condition value for the for loop. 

- We can use the method .includes()
- returns weather or not an a
```
if(songAnswer.includes(songGues)) {
    alert('You are right'!);
    i = 6; //ends for loop
    score++
}
```
.includes() works on strings and sub strings. 


## This ends the code review. 

# now demo css layouts .
- last time we talked about the box model 
- looked at margin padding and how to calculate the size to specify white space of the elements as well as using box-sizing: border-box; 

- Start with creating some scaffolding. 
- let vs code add html template. 
- Talking about layout and talking about positioning. 
- Add body and h1. 
- Make sure to run the test, on the css and js files. 
- Try to show nav build out quick. 
- Show the comments in css
- review hex colors as the RGB.

- Now is a good time to commit and push out to git hub our initial scaffolding, 

- Pro tip, The idea of your design will most likely not be what your final page looks like. 
- So we start with a low fidelity, rendering of the page, called a wireframe. 
- css is the part of the coding process that will take as much time as you give it, that may not be the best use of our time, so maybe time box or save the work until the end of the day. 

- Draw on the board a wireframe, so that now you know that what you work towards with the html structure and css style are more attainable, because we have demystified, what it is that we need to accomplish. 
- Label out the page as to what we may think we might need, with marking up some elements. 

- Now we have a basic structure, we can start to add some styling. 
- Add up to two css declarations
- Use a span, a span is an inline element. Rerender the page to see that the tag does nothing by itself. 
- add a border to see what the span is doing.
- Try text-align, but didnt change anything because we are aligning it right in the tiny red box. So we could do a margin left, of 75%, when we shrink page, the margin does not operate the way we want. its not quite right. 
- Lets try a new property the position property, 
with position we have 
1. relative - meaning relative to where ever it was suppsoed to be otherwise. Start with where are you supposed to be and then move accordingly, we can use negative values to move relative values. Switching from abs to rel are not used very often, unless we are looking for a specific spot. Because there are weird side effects that change the way other things get laid out near by. 
- So, we should think of these layout issues early on to avoid being lost in what our css is doing to our elements. 

2. fixed - position fixed at first may look like nothing has changed from absolute, however the position fixed keeps the element in position while content on the page moves around it. 

3. absolute. 
Absolute we set what the spacing should be. 
set absolute top-bottom-left-right within the page. It doesnt matter what the parent element is or doing it now goes where ever you tell it to go. Lets you leave the parent element and what it is doing. It is possible to use it within the element. We can keep the elements grouped together so that screen readers can access that grouped data, possibly styling too.  
## 8:06

- So now what we need to talk about is inline and block level elements. 
anchor tags ? are they block or inline. It is an inline element. Because it doesnt take up the whole line. 
- If we add an h5 those are block level elements, so we can see the element push the content down the page, 
- As we have seen in our styles we can add a display of block, we dont standardly use block on inline elements, we style them differently in the page. 
