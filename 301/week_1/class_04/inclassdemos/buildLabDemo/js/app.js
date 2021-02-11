'use strict';
console.log('this is connected');


//global variables        x
//need to get data
//render the data to the page
//need to switch between pages
//we some event handlers for the buttons
//constructor functions and prototypes.
//template
//what is going to call the constuctor function.
//need array.
//page change handle the update data.
//sort aphla and horns


let animalsArray = [];


function Animal(animalObject) {
  this.image_url = animalObject.image_url;
  this.title = animalObject.title;
  this.description = animalObject.description;
  this.keyword = animalObject.keyword;
  this.horns = animalObject.horns;
}


Animal.prototype.render = function(){
//ref the html
  const html = $('#photo-template').html();
  console.log(html);
  //pass in a string and an object into Mustcache template
  const newHtml = Mustache.render(html, this);
  //put results on the page
  $('ul').append(newHtml);
};



$('.page').on('click', event => {
  console.log('eventsssssss', $(event.target).text());
  $('ul').empty();
  animalsArray = [];
  $.ajax(`data/${ $(event.target).text() }.json`).then(animalData => {
    console.log(animalData);

    animalData.forEach(animal => {
      const newAnimal = new Animal(animal);
      animalsArray.push(newAnimal);
    });
    animalsArray.forEach(animal => animal.render());
  });
});



function getDataFromPage(page){
  console.log(page);
  $('ul').empty();
  $.ajax(`data/${page}.json`).then(animalData => {
    animalData.forEach(animal => {
      const newAnimal = new Animal(animal);
      animalsArray.push(newAnimal);
    });
    animalsArray.forEach(animal => animal.render());
    console.log(animalsArray);
  });
}


getDataFromPage('page-1');


$('.sort').on('click', event => {
  let sortingBy;
  if($(event.target).text() === 'sort alphabetically'){
    sortingBy = 'keyword';
  }else{
    sortingBy = 'horns';
  }
  sortByHornsOrTitle(sortingBy);
  $('ul').empty();
  animalsArray.forEach(animal => animal.render());
});


function sortByHornsOrTitle(sortingBy){
  animalsArray.sort((left, right) => {
    //checking for a property called sortingBy which no such key exsists.
    //this is how we dynamically choose a key to use on an object
    //object access notation
    if(left[sortingBy] > right[sortingBy]){
      return 1;
    }else if (left[sortingBy] < right[sortingBy]){
      return -1;
    } else{
      return 0;
    }
  });

}
