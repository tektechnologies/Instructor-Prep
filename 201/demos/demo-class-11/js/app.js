'use strict';
console.log('js file is connected');
/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two pizzas


  App Flow:
  - Randomly put 2 pizzas on the screen
    - Random number generator
    - a function to display pizzas
  - A user clicks on a pizza
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 5 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which pizza was clicked on
        - update click images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 pizzas, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'Chicago Pizza',
    clicks: 0,
    timesShown: 0,
    url : 'chicagoPizza.jpeg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked pizzas from being picked
      - STRETCH pick all pizzas evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/












/////////////////////////SIX///////////////////////////////
// Globals variables to get images and image section.
const pizzaImageSectionTag = document.getElementById('all_pizzas');
const leftPizzaImageTag = document.getElementById('left_pizza_img');
const rightPizzaImageTag = document.getElementById('right_pizza_img');
/////////////////////////SIX///////////////////////////////





/////////////////////////NINE///////////////////////////////
let totalClicks = 0;
/////////////////////////NINE///////////////////////////////





/////////////////////////FOUR///////////////////////////////

//variables to store the pizzas already on the page.
let leftPizzaOnThePage = null;
let rightPizzaOnThePage = null;
/////////////////////////FOUR///////////////////////////////


////////////////////////////////TWO/////////////////////////
//constructor function
const PizzaPicture = function(name, imageSrc){
  this.name = name;
  this.url = imageSrc;
  //count our pizza votes.
  this.clicks = 0;
  this.timesShown = 0;
  //push object into our array to store the pizza object.
  PizzaPicture.allImages.push(this);
};
PizzaPicture.allImages = [];

/////////////////////////TWO///////////////////////////////
/*
Prevent last picked pizzas from being picked
    */




/////////////////////////FIVE///////////////////////////////

const renderNewPizzas = function(leftIndex, rightIndex){
  // console.log('create the image src="X" for left and right images', leftIndex);
  // console.log('PizzaPicture.allImages[leftIndex].url;', PizzaPicture.allImages[leftIndex].url);
  leftPizzaImageTag.src = PizzaPicture.allImages[leftIndex].url;
  rightPizzaImageTag.src = PizzaPicture.allImages[rightIndex].url;
};
/////////////////////////FIVE///////////////////////////////





/////////////////////////THREE///////////////////////////////
const pickNewPizzas = function(){
  const leftIndex = Math.floor(Math.random() * PizzaPicture.allImages.length);
  // console.log('leftIndex', leftIndex);
  let rightIndex;
  do{
    rightIndex = Math.floor(Math.random() * PizzaPicture.allImages.length);
  } while(rightIndex === leftIndex);
  // console.log(PizzaPicture.allImages[leftIndex].name + ' and ' + PizzaPicture.allImages[rightIndex].name);



  //leftPizzaOnThePage is an object from our array that we update key values later in code
  leftPizzaOnThePage = PizzaPicture.allImages[leftIndex];
  rightPizzaOnThePage = PizzaPicture.allImages[rightIndex];

  renderNewPizzas(leftIndex,rightIndex);
};
/////////////////////////THREE///////////////////////////////





/////////////////////////EIGHT///////////////////////////////
const handleClickOnPizza = function(event){
  console.log('Lets handle the click now...');
  console.log('left pizza on the page. ', leftPizzaOnThePage);
  /////////////////////////EIGHT///////////////////////////////




  /////////////////////////ELEVEN///////////////////////////////
  if( totalClicks < 5){
    //do some stuff
    // console.log('event target', event.target);

    const thingWeClickedOn = event.target;
    // console.log('thingWeClickedOn', thingWeClickedOn);

    const id = thingWeClickedOn.id;
    // console.log('this is the id: ',id);

    if(id === 'left_pizza_img' || id === 'right_pizza_img'){
      //track the pizzas
      // increment the pizza image in the left_pizza_image slot's clicks
      // if pizza is the left pizza, increment the left pizza)
      if(id === 'left_pizza_img'){
        console.log('left pizza on the page.', leftPizzaOnThePage);
        leftPizzaOnThePage.clicks++;
      }
      if(id === 'right_pizza_img'){
        console.log('right pizza on the page.', rightPizzaOnThePage);

        rightPizzaOnThePage.clicks++;
      }
      console.log('left pizza on the page. ', leftPizzaOnThePage);
      leftPizzaOnThePage.timesShown++;
      rightPizzaOnThePage.timesShown++;
      pickNewPizzas();
    }//the next if
    console.log('is this running ',event.target.id);
  }//this close the first if

  /////////////////////////ELEVEN///////////////////////////////





  /////////////////////////TEN///////////////////////////////
  //still inside the function now we have set up image to be shown for next time and counted times shown.
  totalClicks++;
  if(totalClicks === 5){
    pizzaImageSectionTag.removeEventListener('click', handleClickOnPizza);
    console.log('the vote has ended. and remove listener works. ');
  }
  /////////////////////////TEN///////////////////////////////





};//closes the function handle click

/////////////////////////SEVEN///////////////////////////////
pizzaImageSectionTag.addEventListener('click', handleClickOnPizza);
/////////////////////////SEVEN///////////////////////////////










////////////////////ONE///////////////////////////////
//create pizza objects
new PizzaPicture('Brick Oven Pizza', 'assets/images/brickOvenPizza.jpg');
new PizzaPicture('Calzone', 'assets/images/calzonePizza.jpg');
new PizzaPicture('Chicago Deep Dish', 'assets/images/chicagoPizza.jpg');
new PizzaPicture('Chicago Pizza and Oven Grinder', 'assets/images/cpoGinderPizza.jpg');
new PizzaPicture('Detroit Style', 'assets/images/detroitPizza.jpg');
new PizzaPicture('Papa Vito\'s Thin', 'assets/images/mwDeluxePizzaThinCrust.jpg');
new PizzaPicture('New York Thin', 'assets/images/newYorkPizza.jpg');
new PizzaPicture('Detroit Style', 'assets/images/sgDansHtossedMeatLovPizza.jpg');


//////////////////////ONE/////////////////////////////////





leftPizzaOnThePage = PizzaPicture.allImages[3];
rightPizzaOnThePage = PizzaPicture.allImages[0];
pickNewPizzas();
