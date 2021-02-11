'use strict';

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

// const animalData = [{},{}];
//After you get this to work move it to the .ajax()
// animalData.forEach(animal => {
// const newAnimal = new Animal(animal);
// animalsArray.push(newAnimal);
// });


function Animal(animalObject){
  this.image_url = animalObject.image_url;
  this.title = animalObject.title;
  this.description = animalObject.description;
  this.keyword = animalObject.keyword;
  this.horns = animalObject.horns;
}

Animal.prototype.render = function() {
  console.log('rendering');
  //reference the html of a mustache template go to html
  const html = $('#photo-template').html();
  //pass a string and an object into Mustache template
  const newHtml = Mustache.render(html, this);
  //put the results on the page
  $('ul').append(newHtml);
};
// do 1
// what does the instances do ?(rendering)
// animalsArray.forEach(animals => animal.render());
// console.log(animalsArray);


$('.page').on('click', event => {
  console.log('ssssssss',event.target);
  //is there something that helps us choose a page
  $.ajax(`data/${$(event.target).text()}.json`).then(animalData => {
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

    animalsArray.forEach(animal => animal.render());
    console.log(animalsArray);

  });
});

$('button').on('click', event => {
  getDataFromPage($(event.target).text());
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
    sortByHornsOrTitle('title');

    animalsArray.forEach(animal => animal.render());
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
//});











// animalsArray.sort((left, right) => {
//   if(left.title > right.title){
//     return 1;
//   }else if(left.title < right.title){
//     return -1;
//   }else{
//     return 0;
//   }
// });
/////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////
$('.sort').on('click', event => {
  let sortingBy;
  if($(event.target).text() === 'sort alphabetically'){
    sortingBy = 'title';
  }else {
    sortingBy = 'horns';
  }

  sortByHornsOrTitle(sortingBy);
  $('ul').empty();
  animalsArray.forEach(animal => animal.render());
});


function sortByHornsOrTitle(sortingBy){
  animalsArray.sort((left, right) => {
    if(left[sortingBy] > right[sortingBy]){
      return 1;
    }else if(left[sortingBy] < right[sortingBy]){
      return -1;
    }else{
      return 0;
    }
  });
}//close sortbyfunction






//now to sort on load lets make this a function so we can call it when we load our data.
