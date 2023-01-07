'use strict';

//Hoisting
//vanilla Js function declaration
//whats the difference between the two when it comes to hoisting?


//will this work
console.log(add(4,7)); //works because of hoisting.
// console.log(myAdd(4,7)); // can not call before defining it.

// answer:
function add(a, b){
  return a + b;
}

//answer: 
//vanilla JS function expression
let myAdd = function(a,b){
  return a + b;
};


//arrow functions 
// multi line needs curly braces. 
let arrowAdd = (a,b) => {
  //'this' is refering to things outside the function. Can be useful with classes. Scope is on the class object. we will talk about that more later. 
  return a + b;
};

// or we can write it this way
//no return needed no {needed}
let arrowAdd2 = (a,b) => a + b;

console.log(arrowAdd2(5, 7));  

//this will refer to the context to which its declared. so plain old 201 constructor you can use this to refer to the instance of the object that is being created. this will refer to stuff outside of the arrow function itself. 



//Lets talk about classes. 
//Lets create a constructor

function Musician(artist, style){
  this.artist = artist;
  this.style = style;
  this.isAmazing = true;
}
let godFather = new Musician('James Brown', 'Funk');
console.log('our new object',godFather);



//class constructor

class MusicianClass {
  constructor(artist, style){
    this.artist = artist;
    this.style = style;
    this.isAmazing = true;
  }

  //remember that outside our constructor we can add functions.
  //then demo ()
  makeItFunky = () => {
    console.log('Get up, get into it and get involved!');
  }
}

let classGodFather = new MusicianClass('James Brown', 'Funk');
console.log('our class object',classGodFather);



//whats nice about classes is that our class constructors can be extended. 
//parent child classes where children can inherit there parents attributes. 

class MusicGroup extends MusicianClass{
  constructor(artist, style, members){
    super(artist, style);
      this.members = members;
     
  }
  //then demo ()
  help = () => {
    console.log('I need somebody!')
  }
}

let beatles = new MusicGroup('Beatles', 'Rock and Roll', ['john', 'paul', 'george', 'ringo']);

console.log('what did we inherit from MusicClass?',beatles);

beatles.help();// works because its extended
beatles.makeItFunky();

// godFather.makeItFunky();
//will not work, only has access to their class 

classGodFather.makeItFunky();
// classGodFather.help();