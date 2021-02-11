'use strict';
const dogs = [];

function Dog (name, url, hobby){
  this.name = name;
  this.image_url = url;
  this.hobbies = hobby;
}


//----------comment the old render out as it no longer is a part of what we are doing.
Dog.prototype.render = function(){
  // this gets us the whole jquery object and then we can grab the inner html of the template
  const htmlTemplateString = $('#dog-template').html();
  // within the proto what variable do I have access too
  const object = this;
  //find the string find the object and then we can render the page.
  const renderedHtml = Mustache.render(htmlTemplateString, object);
  $('ul').append(renderedHtml);
};






//pass in call back function the stuffThatComesBack
$.ajax('/data.json').then(stuffThatComesBack => {
  // console.log(stuffThatComesBack);

  stuffThatComesBack.forEach( (dog) => {
    dogs.push(new Dog(dog.name, dog.image_url, dog.hobbies));
  });

  console.log(dogs);

  dogs.forEach(dog => { dog.render(); });

  //javascript is not tied to the html
  // Pretend a button click happened
  dogs.sort((left, right) => {
    if (left.hobbies.length > right.hobbies.length) {
      return 1;
    } else if (left.hobbies.length < right.hobbies.length) {
      return -1;
    } else {
      return 0;
    }
  });
  $('li').remove();
  dogs.forEach(dog => dog.render());
});



// Clicking and 'filtering'
$('button').on('click', () => { // In today's
  $('li').hide();
  $('li:contains(Clifford)').show();

});


