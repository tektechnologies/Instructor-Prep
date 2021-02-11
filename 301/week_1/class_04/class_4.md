# Good Day Happy Friday
**You Made It to Thursday**
--- 

## This has been a big week, thumbs up/down how are you feeling about this week.
- ## First Hour
- Code Warm Up 
- go to Break out rooms and look for errors in the code. When we come back we will discuss.

**errors**
- line 9. 
- div click id is not used.
- line 22 on 'click' not on change
- line 23 need to take strings on to get counter to work. 
- counter also always becomes zero. so put it out as a global variable. 
- line 13 click me in a p tag, could be a button, but we can still click on it 
- line 23 click need 'click'
- line 23 we need a function or arrow function. 
- line 23 we need to add closing )

- Event delegation: The things in the parent element that the event is delegated too. 
-  the div click would not run and we can change the div to the p tag to get the clock to fire. 
- we can attach the click on the outter elements like if new p tags were rendered to the page it would still effect every p that was added. 
- no doctype html at the top
- we never link to the app.js file . 
- we are adding a click to the p tag if we click once
- we can leave the counter and comment out the extra click 
- p tag is not a string line 26
- counter++ was being passed as a parameter which we dont do. 
- it expects a  on(type, [delegated element], callbackfunction)



# Today's Agenda
- Todays plan we are going to rebuild our lab from the start and discuss any questions that might come up. 
- Then we are going to do some grid 
- Then we will look at some regex. 
- The lab today is somewhat short and deals with rebuilding lab one. And should not take to long. 
- Else we should have some time to catch up on code challenges and other labs. 


# What would you like to focus on Lab or Code Challenge. 
- We can do some refactoring of the lab. 











# Code Review. 
In code review start with some comments on how to build out the file. 
```js 
// Collect Data from the json files
// turn the data into instances
// need to render them on the page
// need to switch between two pages
// buttons for sorting by horns, alphabetically, 
// dropdown for filtering by keyword
// the template, the constructor, the retrieval of the json
// set global variables

// what calls the constructor function
// at some point we will have that array which I can use to call the constructor.


let animalsArray = [];
//add actual data before adding the ajax. drop some objects in the array. 
//often times we write code that we cant "test" for a couple hours, so try and find ways to test that data if you can. 


// /do first
// Make a function later
//get the ajax
// $.ajax('data/page-1.json').then(animalData => {
//     animalData.forEach(animal => {
//     const newAnimal = new Animal(animal);
//     animalsArray.push(newAnimal);
//     });

// animalsArray.forEach(animals => animal.render());
// console.log(animalsArray);

// });





const animalData = [{},{}];
//After you get this to work move it to the .ajax()
// animalData.forEach(animal => {
// const newAnimal = new Animal(animal);
// animalsArray.push(newAnimal);
// });


function Animal(animalObject){
  this.image_url  = animalObject.;
  this.title;
  this.description;
  this.keyword;
  this.horns;
}

Animal.prototype.render = function (){
console.log('rendering');
//reference the html of a mustache template go to html
const html = $('#template').html();
//pass a string and an object into Mustache template
const newHtml = Mustache.render(html, this);
//put the results on the page 
$('ul').append(newHtml);

}

// what does the instances do ?(rendering)
// animalsArray.forEach(animals => animal.render());
// console.log(animalsArray);


$('.page').on('click', event => {
  console.log(event.target).text();
  //is there something that helps us choose a page
  $.ajax(`data/${$(event.target).text()}.json`).then(animalData =>{
// //$('li').empty();
// //empty the array as well
// animalsArray = [];
    console.log(animalData);
    //now lets add the above process.
    //this will duplicate the elements on the page need to clear out the old ones. 
    // 
     animalData.forEach(animal => {
    const newAnimal = new Animal(animal);
    animalsArray.push(newAnimal);
    });

    animalsArray.forEach(animals => animal.render());
    console.log(animalsArray);

  });

});



function getDataFromPage(page){


 $.ajax(`data/${page}.json`).then(animalData => {


   $('ul').empty();
//empty the array as well
animalsArray = [];


    animalData.forEach(animal => {
    const newAnimal = new Animal(animal);
    animalsArray.push(newAnimal);
    });

animalsArray.forEach(animals => animal.render());
console.log(animalsArray);

});
}

getDataFromPage('page-1');





// $('.sort').on('click', event => {
//   if($(event.target.text() === 'sort alphabetically')){
//       animalsArray.sort((left, right) => {
//       if(left.title > right.title){
//       return 1;
//       }else if(left.title < right.title){
//       return -1;
//       }else{
//       return 0;
//       }
//       });  
//   } else {
//       animalsArray.sort((left, right) => {
//             if(left.title > right.title){
//             return 1;
//             }else if(left.title < right.title){
//             return -1;
//             }else{
//             return 0;
//             }
//       });
// }
//  $('ul').empty();
// animalsArray.forEach(animals => animal.render());



$('.sort').on('click', event => {
      if($(event.target.text() === 'sort alphabetically')){
        let sortingBy = 'title';
      }else {
      sortingBy = 'horns';
      }
      // animalsArray.sort((left, right) => {
      //   // checking for property called sorting by which no such key exsists. 
      //   // this is how we dynamically choose a key to use on an object----------!!!!
      //   //object access notation 
      //   if(left.[sortingBy] > right.[sortingBy]){
      //   return 1;
      //   }else if(left.[sortingBy] < right.[sortingBy]){
      //   return -1;
      //   }else{
      //   return 0;
      //   }
      // });
      sortByHornsOrTitle(sortingBy);
}
$('ul').empty();
animalsArray.forEach(animals => animal.render());
});

function sortByHornsOrTitle(sortingBy){
      animalsArray.sort((left, right) => { 
        if(left.[sortingBy] > right.[sortingBy]){
        return 1;
        }else if(left.[sortingBy] < right.[sortingBy]){
        return -1;
        }else{
        return 0;
        }
      });
}


animalsArray.sort((left, right) => {
if(left.title > right.title){
return 1;
}else if(left.title < right.title){
return -1;
}else{
return 0;
}
});
 $('ul').empty();
animalsArray.forEach(animals => animal.render());


});









//now to sort on load lets make this a function so we can call it when we load our data. 


```

```html
<!DOCTYPE html>
<html>

<head>
  <title>The Gallery of Horns</title>
  <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <!-- Mustache template for photos -->
   thinking forward on how we are going to sort later. 
    <template id="photo-template" data-horns={{horns}} data-keyword={{keyword}}>
      <li data-horns={{horns}} data-keyword={{keyword}}>
        <img src="{{ image_url }}" alt="{{description}}" />
        <p>{{ description }}</p>
      </li>
    </template>
</head>

<body>
  <header>
    <h1>The Gallery of Horns</h1>
   
  </header>
  
  <main>
<button class="page1">page One<button>
<button class="page1">page Two<button>
<button class="sort">Sort Alphabetically<button>
<button class="sort">By Horns<button>

   <ul></ul>
  </main>
  

  <!-- CDNs -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://unpkg.com/mustache@latest"></script>
  <script src="js/app.js"></script>
</body>

</html>

```


```css
img {
  width: 200px;
}

li {
  width: 200px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}



```















### Shred Talk

- //Regex or regular expressions is a simplified string searching language. It can be used to perform complex searches of string with just a few characters. 

//not a js thing, its regex thing, it is loaded into almost every language
//a bunch of if statements in short format


// const person = 'bobby';
// const regexExample = /bobby/;   //true

// const person = 'bobby';
// const regexExample = /bobby boy/; //true

// const person = 'boy band bobby boy ';
// const regexExample = /bobby boy/; //true
// by default it happens on the first true, but we can tell it to go forever with a g after the last / and is called a flag, flags and functionality to the search, /g is global
// const person = 'boy bobby boy band bobby boy ';
// const regexExample = /bobby boy/g;

//we can use another flag for upper or lower case 
const person = 'boy bobby boy band bobby boy ';
// const regexExample = /bobby boy/i;
const regexExample = /bobby boy/ig;




// simple to complex and we are going simple, 

// two important methods to know
// the first is a string.prototype.match(regex)
// that takes in a regex 
// this will find all matches.
console.log(person.match(regexExample));

// regex.prototype.text and it takes in a string. 
// this is testing for exsistence with returning a true or false
console.log(regexExample.test(person));









const numString = 'there were 5 people on the 6th and 1000000 went to the ball game with 9 innings';

// const numRegex = /5/g;
//  const numRegex = /\d\d/g;
//  const numRegex = /\d\d\d\d/g;
// so lets add the digit char.  /\d/g
 const numRegex = /\d+/g;

// so lets do a variable number. 
// go to regular expressions101.com
//quantifiers - how many?
// * : 0 or more 
// + : 1 or more
// ? : 0 or 1
console.log(numString.match(numRegex));



// .test(/^([a-zA-Z0-9\+_\-]+)(\.[a-zA-Z0-9\+_\-]+)*@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,6}$/)) 
### Code Review

### CSS Grid

- **Why** (5 min)
  - Grid is the next generation of web page layout
  - Mimics a table structure, making it far easier to apply complex layouts
- **What** (10 min)
  - Grid uses a 2-D row and column layout system
  - Very reminiscent of using `<table />` to design sites years ago.
- **How** (30 min)
  - There's a short [Grid Demo](../demo/grid/) that shows how columns work.
  - Demonstrate the "Holy Grail" layout, progressing it from Float to Flex, to Grid.
    - Compare and contrast as you go.
- **Experimentation and Discovery Ideas**

### Regular Expressions

- **Why** (5 min)
  - Match Patterns in strings
    - "Find Stuff"
    - "Easy to remember" once you get over the hurdle
    - Every language supports these.
- **What** (10 min)
  - Matching rules within delimiters, followed by a modifier
  - `/abcdefg/ig`
    - `/` and `/` are the delimiters. The thing to match goes between them.
    - `ig` at the end are modifiers, meaning "Case Insensitive" and "Globally (don't stop when you find the first one)
    - The pattern to match (goes inside the delimiters)
      - Can contain raw characters, group indicators, and several special characters to change how the regex matches.
- **How** (30 min)
  - <http://www.regex101.com>
  - Demonstrate:
    - Basic string, number, special char matching
    - Groups
    - Starts/Ends with
    - Counting things (3 numbers)
- **Experimentation and Discovery Ideas**
  - If time allows, demonstration how to create a fuzzy search in the photo gallery solution code to search for images by matching keywords.

## Lab Notes

- This will be a solo lab - building out the first part of the portfolio
- The starter code is a template with a 5,000+ line .css file
- Students will need to modify the content and apply SMACSS rules to the css