# Good Day Happy 3rd lecture Day. 


## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  # Warm-Up Exercise
This code sample is written in Python. Read through the code and determine the output for each function.

```
DOCTORS = [
    {'number': 1, 'actor': 'William Hartnell', 'begin': 1963, 'end': 1966},
    {'number': 2, 'actor': 'Patrick Troughton', 'begin': 1966, 'end': 1969},
    {'number': 3, 'actor': 'Jon Pertwee', 'begin': 1970, 'end': 1974},
    {'number': 4, 'actor': 'Tom Baker', 'begin': 1974, 'end': 1981},
    {'number': 5, 'actor': 'Peter Davison', 'begin': 1982, 'end': 1984},
    {'number': 6, 'actor': 'Colin Baker', 'begin': 1984, 'end': 1986},
    {'number': 7, 'actor': 'Sylvester McCoy', 'begin': 1987, 'end': 1989},
    {'number': 8, 'actor': 'Paul McGann', 'begin': 1996, 'end': 1996},
    {'number': 9, 'actor': 'Christopher Eccleston', 'begin': 2005, 'end': 2005},
    {'number': 10, 'actor': 'David Tennant', 'begin': 2005, 'end': 2010},
    {'number': 11, 'actor': 'Matt Smith', 'begin': 2010, 'end': 2013},
    {'number': 12, 'actor': 'Peter Capaldi', 'begin': 2013, 'end': 2013},
    {'number': 13, 'actor': 'Jodie Whittaker', 'begin': 2017, 'end': 2018},
]

def get_names():
    for doc in DOCTORS:
        print(doc['actor'])
        
get_names()


def get_number(doctors):
    return len(doctors)
    
get_number(DOCTORS)
```
- **Debrief** (5-10 min)
  ## Overview of today's warm-up challenge

This sample is written in Python. The `get_names` function will print the names of the doctors. The `get_number` function will return the length of the array.

# Code Review




# Do Flex Box Demo 




# Do the Mustache Demo
- is one of the original templating library 
- we will use it to build our templates in an easier way
- if you learn the syntax of this library it will be easier to learn other templating resources. 
-react, mustache and even ejs, which we will look at later will make use of this syntax. 
-handle bars  
- it makes use of the {{}} so turned on it side it looks like a mustache. 
-java, android, or php or ruby, can make use of mustache templating. 
- use the mustache 5 documentation.
- we are going to be tying text with {{}}curly braces with an object that has key value pairs that match. like an advance template literal. 

- [mustache](https://mustache.github.io/)
- [cndlibrary](https://cdnjs.com/libraries/mustache.js)
- cnd 
https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.1.0/mustache.min.js






















### Shred Talk

//arr.sort([comparisonFunction]);
// Question: What does the sort method take in?
// Answer: it takes in a function
// Question : in MDN what does the [] mean?
// Answer: it means that optional arugment, it optional the sort works all on its own. 


const arr = [9,6,7,8,5];

arr.sort() 
//numbers are now sorted. 

//sort is a destructive function
// sorts the elements in the original array. doesnt create a new array, on its own it sort alphabetically
arr;


const words = ['cat','dog','Elephant','Anteater','pig','shark'];

// words.sort();

//Capitals come first for alphabetical order because javascript doesnt know what the alphabet is. it knows the unicode value of the letter. 

const bigNums = [9, 90, 99, 10, 1, 129, 20, 30, 50, 60, 6, 7,8];

// bigNums.sort();


//this is a common approach you will find online. 
// bigNums.sort((first, second) => first - second);

//call back function has one job. to return a number greater than zero, less than zero or equal to zero, 
//this will decide to swap, leave alone, or skip ahead in the sort

// bigNums.sort((first, second)=>{
// if(true){
// return 1;
// }else if(false){
// return -1;
// }else{
// return 0;
// }

//lets write a comparison as we work through 
// bigNums.sort((first, second)=>{
// if(second > first){
//   // leave it alone
// return 1;
// }else if(first > second){
// return -1;
// }else{
//   //these must be equal
// return 0;
// }

//flip the signs 
bigNums.sort((first, second)=>{
if(second < first){
  // leave it alone
return 1;
}else if(first < second){
return -1;
}else{
  //these must be equal
return 0;
}
});

words.sort((left, right ) => {
if(left.toLowerCase() > right.toLowerCase()){
  // leave it alone
return 100;
}else if(left.toLowerCase() < right.toLowerCase()){
return -100;
}else{
  //these must be equal
return 0;
}

});


// const people = [
//   {name: 'Zarry', power: 5},
//   {name: 'Craig' , power: 70},
//   {name: 'Garry', power: 9000},
//   {name: 'Dog Dog',power: 65}
// ];
const people = [
  {name: 'Zarry', power: 3},
  {name: 'Craig' , power: 20},
  {name: 'Garry', power: 900},
  {name: 'Dog Dog',power: 6},
   {name: 'Zarry', power: 5},
  {name: 'Craig' , power: 70},
  {name: 'Garry', power: 9000},
  {name: 'Dog Dog',power: 65}
];
people.sort((first, second) => {

    if(first.power > second.power) {
       return 5;
    }else if(first.power < second.power){
      return -70;
    }else{
    return 0;
    }
});
console.log(people);
people.sort((first, second) => {

    if(first.name > second.name) {
       return 5;
    }else if(first.name < second.name){
      return -70;
    }else{
    return 0;
    }
});
people.sort((first, second) => {

    if(first.name > second.name) {
       return 1;
    }else if(first.name < second.name){
      return -1;
    }else{
    return 0;
    }
});
- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
  - Today's code challenge is .sort() which presents the prefect opportunity to introduce ternary statements.
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
  - Once you have completed the demo, point out how much simpler your code can be with the help of a ternary statement.
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

- Students will have attempted their first code challenge following Class 02. Use your code review time to not only review a few of the challenges, but to re-implant the TDD workflow with the class.
  - Every day a new branch
  - Every challenge a new folder
  - TDD
  - Submit a PR for grading
  - Do not merge your code!
- Similarly, the lab for class 02 would have been their first lab working out of a new repository. Review that workflow as well.
  - Every day a new branch
  - Submit a PR for grading
  - Do not merge your code!

### Flexbox

- **Why** (5 min)
  - CSS Float is hard to manage with consistency, reliability, scale
  - (Your demo should demonstrate some of these constraints)
- **What** (10 min)
  - A CSS layout engine that uses flexible boxes to line items (vertically or horizontally) within a container along an axis.
  - Review [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **How** (30 min)
  - Using a live-coded demo, layout items (divs) within a container
  - Use rows and column layout
    - Demonstrate `flex:1`
    - Demonstrate various ways to justify/align the items along the axes
- **Experimentation and Discovery Ideas**
  - Give students markup and css and let them predict the output
  - Show some grid/designs and prompt students for the correct CSS
  - Take suggestions from the class and build what they ask you to

### Mustache

- **Why** (5 min)
  - Creating markup "on the fly" in either VanillaJS or jQuery is a big task, requiring lots of code.
  - It creates a tight coupling between markup and JS
  - With a "Templating Engine" we can let the markup describe itself and "feed" it data
- **What** (10 min)
  - Mustache is a template system (one of many) that maps objects directly to markup
  - Review [mustache docs](https://github.com/janl/mustache.js)
  - Play [try handlebars](http://tryhandlebarsjs.com/)
    - Note this uses handlebars instead of mustache, but the html+data merging is the same, visually
- **How** (30 min)
  - This is the first time that students have really had to dive into documentation to learn a new concept. Be ready to guide them through this process with stories about how you read documentation to learn new concepts.
    - Spend some time pointing out the important things to look for in the Mustache docs and show them step-by-step how to use the example code in the docs to understand a new concept.
  - Using a live-coded demo show the power of a templating system.
    - Begin with a hand coded jQuery solution that clones/creates markup in a few different ways
    - Refactor it to use the Mustache template system.
      - Your demo should focus BOTH on the notion of templating as well as an approach to refactoring.
- **Experimentation and Discovery Ideas**
  - Move between simple divs into more "normal" things, like lists, cards, etc.
  - Demonstrate the use of the `<template>` tag to create the mustache template in place of the `<script>` tag in the head.
  - Have the students drive a layout with data

## Lab Notes

- Students will need to deal with pairing through git ... be ready to help with some merge conflict and workflow issues.
- This is their first "refactor", so assist them in finding ways to analyze working code and transitioning

## What changed from the previous class?

- Students will use Flexbox instead of floats for styling.
- Students will use Mustache Templates to render their images.
- There is a second set of images in another JSON file.

## What might students struggle with today?

- Reading the documentation
- Sorting the elements
- Detail view
- How to populate unique filters for each page

## Past bugs, issues or surprises...

## General Comments and Notes

- Code reivew might be a great time to tie in the WRRC today. The more you can reinforce this concept and slowly build upon it the better.

![Templating](whiteboard-diagrams/templating.png)

