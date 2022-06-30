# Welcome to Class 3

```js
//arr.sort([comparisonFunction]);
// Question: What does the sort method take in?
// Answer: it takes in a function
// Question : in MDN what does the [] mean?
// Answer: it means that optional arugment, it optional the sort works all on its own.

const arr = [9,6,7,8,5];

arr.sort()
//numbers are now sorted.

//sort is a destructive function
// sorts the elements in the original array. doesnt create a new array,
// on its own it sort alphabetically
arr;

const words = ['cat','dog','Elephant','Anteater','pig','shark'];

// words.sort();

//Capitals come first for alphabetical order because javascript doesnt know
//what the alphabet is. it knows the unicode value of the letter.

const bigNums = [9, 90, 99, 10, 1, 129, 20, 30, 50, 60, 6, 7,8];

// bigNums.sort();

//this is a common approach you will find online.
// bigNums.sort((first, second) => first - second);

//call back function has one job. to return a number greater than zero,
//less than zero or equal to zero,
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

- Students will have attempted their first code challenge following Class 02.
- Use your code review time to not only review a few of the challenges,
  but to re-implant the TDD workflow with the class.
    - Every day a new branch
    - Every challenge a new folder
    - TDD
    - Submit a PR for grading
    - Do not merge your code!
- Similarly, the lab for class 02 would have been their first lab working out
  of a new repository. Review that workflow as well.
    - Every day a new branch
    - Submit a PR for grading
    - Do not merge your code!

### Flexbox

- **Why** (5 min)
    - CSS Float is hard to manage with consistency, reliability, scale
    - (Your demo should demonstrate some of these constraints)
- **What** (10 min)
    - A CSS layout engine that uses flexible boxes to line items
     (vertically or horizontally) within a container along an axis.
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
e students drive a layout with data

## Lab Notes

## Past bugs, issues or surprises

## General Comments and Notes

- Code reivew might be a great time to tie in the WRRC today.
  The more you can reinforce this concept and slowly build upon it the better.
  