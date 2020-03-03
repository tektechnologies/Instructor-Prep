# Programming Concepts Covered


# Wonderful day. 
- CSS animation
- Using local storage on different pages of the same site. 
- Advanced Topics choose, review, or deep dive     into something else. 


# Projects
- time to think about what we are going to build. 
- Talk to pyschological safety. 



## Lab
- Today is a paired lab 
- This codebase is more complex than you've seen so far, but also less complex than what you will create on your own in the final project" really sets the tone for projects.



# Code Review

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

- Code Review will go long today, because we are doing non code review, review of code. 


### In the console. 
# Show Time out example 
- setTimeout(please run a piece of code for a set amount of time so we pass in a function)

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
- call back function which means that we have a function that will call another function at some point 


- this is an integration of html css and js. 


# infinite loop 

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


- events. 












# Break One