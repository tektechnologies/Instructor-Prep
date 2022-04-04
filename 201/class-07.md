# First Hour


# Second Hour

### Take Break 10 Minute


# Third Hour




## Prototypes
1. Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
1. All objects have the props & methods of their prototype
1. If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it

- There is a lot of potential for DOM manipulation and JS objects. We could potentially make a `render` method on one of the JS objects that can render these new HTML tags as a list to our page when called:

```js
render: function(){
  let parent = document.getElementById('parentElement');
    for(let i=0; i < people.length; i++){
      let newTag = document.createElement('li');
      newTag.textContent = myArray[i];
      parent.appendChild(newTag);
    }
}
``` 

# Concepts in Review - 
## review quiz and feedback

 #### Document Object Model Review. 

Here is a quick exercise to prove this point: in the console.

1. type `document` IN THE CONSOLE within your browser
1. find `document.body`
1. actually type in `document.body`
1. change the document.body.textContext = 'to something else'
1. look at all the options on the `document.` dot notation.


# Agenda for Today
- Constructor Functions
- ProtoTypes (Inheritance)
- Template literals
- new operator
- html Tables
- google fonts


# Code Review 
- This weeks project is meant to take all week 
- with new implementations to our problem domain, 
- we will look at the code possibly refactor some code
- What was the one thing that you found hardest, 

- Code review topics 
    1. How to do cookies per hour at each location.
    2. Sales amount in each city( adding things to the page) 
    3. id in html, then put other things into that from js. 
    4. ~ how to do css from js.

# Look at Git Repo and notice the differences
- What do we notice from the student repo. 
    1. latest commits
    2. different branches 
    3. different commits 
    4. We can see that the different commits show that work being added over time. 
    5. Watch out for **CAPITALIZATION.** ( Computers,  go to a terminal on your machine, wsl, cd wr, mac users doesnt matter, run ls, to see macs and windows make a choice where capitols do not matter, the issue is that it is not true on Linux, capitalization matters, so when we deploy our code to for instance git hub, that runs on linux, we want to keep things standardized, with lower case. 90% of sites online are running on linux.)
    6. Make sure different citys get different numbers of cookies. 

- What data type is the Seattle variable. === Object
- Using what to store our data            === Key / Value Pair.  

***MustDoThis***
- Show the running total with the debugger


## Did they use a render method 

- We will look at how to create html elements that we will append to our UL and LI items, inorder to create some child/parent relationships. 

 
```js

let allStores = ['storeOne','storeTwo'];

```
- There is a lot of potential for DOM manipulation and JS objects. 
- We could make a `render` method on one of the JS objects that can render these new HTML tags as a list to our page when called: 


- Question how was it creating each object literal? 
# How would you feel if you had to type out another 250 stores, by hand from paper. 
- So since these are all the same object literals there are ways, to automate this process, how you ask?
# Constructor Functions
- With code constructors, instead of object literals. 
- Which is what lab 7 will be on.
- currently we have about 15 - 25 lines of code, x 250 objects. 

- So, with a constructor we can create objects, with a max of 15 lines(once) and we can add one line of code to 15 define each city and one to create store, this scales better the more objects we get, Constructors are powerful tools, for developers, in that we write less lines of code and have less of a chance to make mistakes, while coding out our problem domain. 





---





**Back to our Kitten Demo. In the Console Run Code**   At 10:00am
# Constructors or Constructor functions. 
- it is a function
- it has a specific job to set up objects. (with specific properties(AKA keys))
- Upper Camel Case for the Name. 
- Call with the word "new"  , new is built in key word of javascript. 
- Constructor names tend to be a singular noun. 
- This is how we define a constructor function.  

---

```js

//function key word and capitol letter on the function name.

function Pet(){
    //code goes here.
}

```

---


- Other than the capital letter there is no difference with any other function.
- So now inside the constructor, set up the properties we want for objects created with this constructor
- We need key/value pairs on the new object. 
- Within constructor functions we are going to use the contextual this, so we can say that 



## This is a bad constructor, but we will fix it in a minute. 
---

```js

function Pet(){

    this.breed = 'Labrador';

} //show the "function" first.

```
---





![Screen Shot](consoleObject.png)

- Console.log to create a new Pet: 
- let buddy  = new Pet();
- type buddy  to see the new Pet object, 
- notice that it say's Pet outside the object braces. 
- Try a different dog, 
- console.log is something we write some times.
- What do we do  = when we want to give a function information? 
- In general if we have a function
  and we want to provide information to those functions.
  We pass inbetween parathesis.

- What do we call those thing in the parathesis.?????????????

- In general we call them parameters, to give the function information so that it can run. 
- So, we will take in the values that we want as parameters to out functions. 

![Screen Shot](consoleParameter.png)

```js

function Pet(petBreed){

    //So I want to change this to the breed that I am passing in 
    //this.breed = 'Labrador',
    this.breed = petBreed;

}

```

- Which means now that I need to pass in an argument to the parameter for petBreed.
- So, now in the console I can type 


```js

let cricket = new Pet('Tabby');

```

```js

function Pet(petBreed, petWeight){

    this.breed = petBreed;
    //Name of parmeter and name of property can be the same or different.
    //this.weight = weight;
    this.weight = petWeight;

}

```

![Screen Shot](consoleTwoParameters.png)

- Now go back to the console and pass both parameters in. 

```js

let buddy  = new Pet('Labrador', 45);

```
# Start Talk about using prototypes to move functions out of constructor functions and use prototypes to make the methods accessible to the object that they were created for. 

- So we have methods in the object literals that we want to make accessible for our other pets methods and behaviors. 
# Take this function as an example. 

```js

function Pet(petBreed, petWeight, petInterests){
    this.breed = petBreed;
    //Name of parmeter and name of property can be the same or different.
    //this.weight = weight;
    this.weight = petWeight;
    this.desciption = petInterests;
}
```
So the methods that exsist within the pets 
- next step is to take the getInterests function and make it accessible for every pet
- so we have an exact peice of code to set up for this to work


---

#  So if there is one thing that you accept about how code just works in 201, and does things,it is this the Prototypes. And so we have this, 

## Prototypes
1. Every object has the prototype. 
- It can be assigned explicitly, or is set to the global Object by default
2. All objects have the propertys' & methods of their prototype
3. If a property or method can't be found on the object itself, the JS engine will look up the prototype chain for it


```js
Pet.prototype.functionname = function(any, parameters, go, here){};
```
Benefit is that with any pet that we create will have access to this function. 
Technical description takes about three hours of lecture to get through, so we will just trust that this will work, so that all the pet objects we create will have access to these functions, so lets focus on what functions our objects need and then accept the auto magically, the stuff that prototypes do for us. 

```js

Pet.prototype.getInterests = function() {
//The code that goes in here is already using contextual this, so it will work here for us as well. 
//Creat a random index within the pet description array. 
let randomIndex = Math.floor(Math.random() * this.petInterests.length);
//Use that random index, to go into the array and grab a description.
return this.petInterests[randomIndex];
};
//
Pet.prototype.getInterests = function() {
let randomIndex = Math.floor(Math.random() * this.petInterests.length);
return this.petInterests[randomIndex];
};

```

- So, now lets take the firstPet

---

```js

    let firstPet = new Pet('Labrador', 45, ['playful','excited','cuddly', 'good girl']);

```

---

```js

function Pet(petBreed, petWeight, petInterests){
    this.breed = petBreed,
    this.weight = petWeight,
    this.petInterests = petInterests
}

Pet.prototype.getInterests = function() {
let randomIndex = Math.floor(Math.random() * this.petInterests.length + 1);
return this.petInterests[randomIndex];
};


 let firstPet = new Pet('Labrador', 45, ['playful','excited','cuddly', 'good girl']);

firstPet.getInterest();


```


# If we dont know the parameter, we write null,
- we dont leave it blank because we get syntax errors,
- so use null, however if we do math on say weight and there is a null you will get back a NaN, response. 

- INSTANCES OF AN OBJECT

- We may also call these objects pet instances. Any time we call the constructor we use the new and the name of the object constructor, and then provide arguments, for the constructor. 

# So how did it go, THUMBS?


#### Rememeber.....

- The prototype allows us to create methods accessible by any instance or any object being created by the constructor function, in the console we can call getInterests, now all pets have access to the get description function. Now we can add as many pets as we want and they will all have access to these prototype methods. 
- Add another pet and it works because of us using the contextual this, we can access the description words of that specific pet object. 
#### What other questions do you have about constuctors? 

---


## BREAK TIME Now work on the actual website after the constructor function demo.

- One other part of your lab for today, is HTML tables. 
- So, lab tasks say we should implement a constructor function, instead of the object literal. 
- Change out lists of data to tables of data. Which is how we will build out these tables of data. 
- I advise that you do the constructors first and then build out the tables, 
# do not try and build the entire lab at once, 
- make sure to create our lab 7 branch and commit as soon as you complete a feature. 
# demo tables in the pet adoption
- So to start lets look at tables in the HTML 
- A table tag encloses the rows and cells of our table. 
- So, inside the table we want to add a table row, and inside the table row we will have a cell tag called a <td></td>.
- Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.
- Tables are not good when it comes to mobile design. 

```html
<table>
    <thead>
        <tr>
        <th>Hours</th>
        <th>Location</th>
        <th>Contact</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>8am-5pm</td>
        <td>Cedar Rapids</td>
        <td>555-555-5555</td>
        </tr>
    <tbody>
</table>
```
```css
th td {
    border: 1px solid grey;
}
```
- watch out for addition td tags being displayed that will mess up the table order.
- It allocates space by the content within the cell, tables are not good at being styled and even worse with mobile app. Tables are being styled by the browser as well. 

### Let's create some tables now in our javascript. 

- Writing tables in html is a bit heavy, 
- So lets add a table to store pet data. 
- So typing out our tables can be time consuming and more keystrokes than if we let our javascript, build the table for us.
- So for each of these pets, I want to display a 
- Add table to pet-holder - 
- Then I am going to add a table. 
- With a table row header with breed, weight, and description of that pet is. 

<table id="pet-table">
<tr>
    <td></td>
    <td></td>
</tr>


</table>

- So when we refresh it will have a single row with the titles for our columns. 
- So I am going to add them to the table
- the way that I am going to do that is use creating a render(). on each of my pets. 
```js
 //Add prototype method to add pets to the table.
 ```
- The render() method will allow me to render my pets to the page into a table. 

```js
Pet.prototype.render = function() {
    //grab table from the page the id.
    let petTable = document.getElementById('pet-table');
    //Create the td and tr that will hold the data for this particular pet. 
    //How do we nest html elements in the page. 
    //So make a pet row. a TR 
    // And that tr needs to hold some td's
    let petRow = document.createElement('tr');
    let breedCell = document.createElement('td');
    //Set text content to the breed of the object, how do we access the breed for the object we are referencing we use this. 
    breedCell.textContent = this.petBreed;
    //Now take the piece of data that we created and append it to the row as a child. 
    petRow.appendChild(breedCell);
    
    let weightCell = document.createElement('td');
    weightCell.textContent = this.petWeight;
    petRow.appendChild(weightCell);

    // Also add a description. While I type this out talk outloud about what we are doing. 
     let descriptionCell = document.createElement('td');
    descriptionCell.textContent = this.petInterests;
    petRow.appendChild(descriptionCell);

    //Add to page by appending the Table. 
    animalTable.appendChild(petRow);

// Pet.prototype.render = function() {
//     let petTable = document.getElementById('pet-table');
//     let petRow = document.createElement('tr');
//     let breedCell = document.createElement('td');
//     breedCell.textContent = this.petBreed;
//     petRow.appendChild(breedCell);
//     let weightCell = document.createElement('td');
//     weightCell.textContent = this.petWeight;
//     petRow.appendChild(weightCell);
//      let descriptionCell = document.createElement('td');
//     descriptionCell.textContent = this.petInterests;
//     petRow.appendChild(descriptionCell); 
//     animalTable.appendChild(petRow);
// }
};


```


- Now is when we run firstPet.render(); in the console it add the information to the page. 
- petTwo.render()
- petThree.render()

- Any object instance being created will have access to the render method by way of the prototype. Because it is a prototype method, all pets using the pet constructor will be able to call this function. 

---

# Template literals. 

let name = `Ryan`;

console.log(`Hi my name is ${name}`);

```js

for(let i = 0; i < adoptPets.length; i++) {

let newParagraph = document.createElement('p');
//set text content with template literals.
newParagraph.textContent = `A nice kitten to code with is  ${adoptPets[i].name}  because they are good at ${adoptPets[i].interests} .` ;

petParagraph.appendChild(newParagraph);
}
```
- We will update too: 
# Use and IIFE
```js
(
for(let i = 0; i < adoptPets.length; i++){
    pets[i].render();
}
)();

```

- This is the last bit of code I am going to write for this render, so each time we loop through the pet objects we will call the render function and the render function will create our table for us. 

- For lab we still want the store totals, but we also want to add in the hourly totals as well. 



# Go to **Google Fonts**. You can combine font links to one, and then specify in css. 
