# Programming Concepts Covered

# Agenda

## Announcements
#### Don't forget. to....
- Commit More
- Turn off Projector
- Increase Screen Size.

### Debug
- Today is a review of some concepts we have already covered. And we will look at some salmon cookies projects that other people have done, that have some bugs in it and we will debug those. 
### Chocolate Pizza
- Then with some additional css review we will  do a paired assignment where you and your partner will construct a wireframe from 

- thumbs up how is your cookie salmon going, with a working sales page and style index? 

# Code Review. 
#### good practice
- Note if we encounter an error in our js it will stop the rest of the page from populating, and even keeps working code from continuing to run. So remember to fix errors before moving forward in teh program and even avoid adding in additional code that could further cause issues within your code. 
#### redundate info in html pages
- In addition to DRY code we want to keep redundant data at a minimum and that will become even more important when we add in databases to our application in 301. The js is our logic of which data should be displayed. 
#### when does our html end up in the JS
- Modern single page web app the SPA pattern, where the actual html, just contains the basic div structure. Which is a normal build pattern. You will see that in 301. 
#### place holder form styling
- Place holder attribute. Is a 'bad' idea, as a user if I type in the box, I can not see what it was that I was supposed to fill in the input, not a great user experience, and it does not make the form accessible, in fact with out labels, it is not accessible by any screen readers. 
#### labels on forms. 
- We labels on our inputs. 
- Materialize css.  to use the no label approach. Where the label is shown on click of the input box. https://materializecss.com/text-inputs.html
- CSS MUG!!!!
#### styling tables
- Styling the table is not an easy thing to do. And generally tables are not looked at as a first choice to implement. Once upon a time, they were a dev's friend. 
- document.getElementById('add-location').reset();
#### object methods - google it. 
- How do we find out more about how that function works, where do I go look for the information. So the reset function is a function that we did not create. What does it do? Let's go to the internet. 

### linking two html pages to a js page.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

```js
if(window.location.pathname.endsWith('sales.html')){
    buildTable();
    buildTotal();
    buildEmployeeTable();

} 
if(window.location.pathname.endsWith('index.html')){
    for(var i = 0; i < cookieStand.length; i++) {
        var newLine = document.createElement('li');
    newLine.textContent = `${cookieStand[i].location}: ${hoursOfDay[0]- ${hoursOfDay[12]}`;
    mainLocationsHolder.appendChild(newLine);
    }
}

```

```js

document.getElementById('resetbutton').addEventLister('clickReset', function() {
    event.preventDefault; //otherwise it will do it on its own, and I want to prompt the user.
    //debugger;
    if(confirm('Are you sure you want to reset the form?')){
        event.srcElement.parentNode.reset();
    } else {
        //do nothing
    }
});
// This is calling the fieldset. 
```

#### In the console
- event.srcElement // shows the element reset button so find the parent element.

- event.srcElement.parentElement.parentElement.reset();// is where we find the form id. 

#### the add event listener format. 
- element.addEventListener('whichEvent', handlerFunction);



# JS review

https://github.com/codefellows/code-201-guide/blob/master/curriculum/class-10/review.md



## check goals from lab 9 with index styling. 
### Your public-facing index.html page should include the following:

- locations with addresses,
- hours open
- contact information
- Anything else you feel neccesary.
- A link to your sales.html page
- Be sure to also include a link to your index.html page on your           sales.html pages as well.
