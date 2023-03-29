# Wonderful day

- CSS animation
- Using local storage on different pages of the same site.
- Advanced Topics choose, review, or deep dive     into something else.

## Projects

- time to think about what we are going to build.
- Talk to pyschological safety.

## Psychological Safety  (1 hour)

- 60 second pitch
- remind them of there 60 second pitch assignment
- did you do the readings?

### round table discussion

- students to close laptops,

- lot of insight and experience in the room, so you want to hear from everyone.

- You are looking to understand this new term "psychological safety".
    1. In your own words, what defines psychological safety.
    2. How does your previous experience relate to the things your read?
    3. What are the results for teams who practice psychological safety?
- white board the answers
The screen recording is running, and we want it to pick up everyone's comments,
so you will be walking around with the mircophone to ensure voices are picked up.
Ensure this is all clear, and re-iterate the 3 prompts above to get it started.
Segment the iPad into 2 sections with a line down the middle. Do not label the
sections at the start.

## Code Review

- show local storage accessible in different pages of the same domain.
- localStorage.setItem('num', 7);
- localStorage.getItem('num') //returns 7
- run the above in a new window.

- Look at CSS.
- edit css
- Look at toggle in the console.
$0.classList.toggle('red-border');
true
$0.classList.toggle('red-border');
false

### In the console

## Show Time out example

- setTimeout(run a piece of code for a set amount of time so we pass in a function)

```js
setTimeout(function() {
    console.log('timer is up!');
}, 1000)
```

- use set timeout to run code at a certain time.

```js
var img = document.getElementById('1');
undefined
img.addEventListener('click', function(){
    setTimeout(function() {
    img.classList.toggle('red-border');
}, 500);

});

```

- call back function which means that we have a function that will call another
 function at some point

- this is an integration of html css and js.

## infinite loop

```js

function a() {
    console.log('a');
    b();
}
function b() {
    console.log('a');
    a();
}
```

- chrome dinosaur. important facts you should know as a dev.

## Transitions

- make sure to use transitions sparingly.

- put hover on the parent

## Lab

- Today is a paired lab
- create a repo , partner will fork, add partner as a contributor
- This codebase is more complex than you've seen so far, but also less complex
 than what you will create on your own in the final project" really sets the tone
for projects.

- do the first one for them
