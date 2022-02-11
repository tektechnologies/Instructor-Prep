'use strict';
console.log('this file is connected.');


// function functionName() {
// //our code lives here.
//   console.log('this is from the functions');

// }
// functionName();

// parameter are  var variables = allow us to give things in our code human readable values that we can use throughout the code.

// function multiply(num1, num2){
// //   console.log('console', num1);
//   let answer = num1 * num2;
//   return answer;

// }

// let result1 = multiply(2, 3);
// let result2 = multiply(4,5);

// console.log('console result 1', result1);
// console.log('console result 2', result2);
//////////////////////////////////////////////////////////////////////
// let i;
// //Scope
// for(i = 0;     2;      3;)

// let globalVar = 'universal';

// function scoper(param){
//   let localVar = 'I like my privacy!';
//   console.log('inside the function we can see para = ' + param);
//   console.log('we can see localVar ' + localVar);
//   console.log('we can see the global variable ' + globalVar);

//   for(let i = 0; i < 3; i++){
//     console.log('the value of i ' + i);
//   }
//   // uncomment below to see error and scope
//   // console.log('can we see i outside the loop? ' + i);

// }
// scoper('argument');

// console.log('we can see the global variable ' + globalVar);
// console.log('we can see localVar ' + localVar);
// console.log('inside the function we can see para = ' + param);






////////////////////////////////////////////////
function circlePropsOne(radius){

  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  let props = [area, circumference];
  console.log('props before return: ',props)
  return props;
}
let circle1 = circlePropsOne(3);

console.log(circle1);
/////////////////////////////////////////////////
//this is a function expression.
let circlePropsTwo = function(radius) {
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;

  return [area, circumference];
};

let getCircle = circlePropsTwo(3);
console.log(getCircle);

/////////////////////////////////////////////////
let checkLogin = (function() {
  let userID = 1234;
  if (userID) {
    console.log('user with ID ' + userID + ' is logged in.');
  } else {
    console.log('user not logged in.');
  }
})();

///////////////////////////////////////////////

function yesOrNoPrompt(promptInfo){
  let userInput = prompt(promptInfo);
  if (userInput === 'yess'){
    console.log('hurray');
  } else if ( userInput === 'no'){
    console.log('nope');
  } else if (userInput === 'mabe'){
    console.log('make up your mind');
  } else {
    console.log('ERROR: incorrect useage');
  }
}

yesOrNoPrompt('whell yess or no');
yesOrNoPrompt('how bout yess or no');





let videoGames = ['ILLINOIS', 'IOWA', 'ARKANSAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
console.log(states.length);
let attempts = 0;
let correctAnswer = 0;
while(attempts !== 7){
  let userAnswer = prompt('What states of the world, have I lived in?');
  let userAnswerTrimmedToUpper = userAnswer.toUpperCase().trim();
  if (states.indexOf(userAnswerTrimmedToUpper) >= 0) {
    alert('Yes! ' + userAnswer + ' is one of my favorite states!');
    correctAnswer++;
  } else {
    alert('WRONG');

  }
  attempts++;
}

alert('All states that I lived in are: ' + states.join(', '));
alert('You answered ' + correctAnswer + ' out of 7 correctly');

alert('Thanks for Playin...');

let results = document.getElementById('results');
let finalResults = 'You guessed ' + attempts + ' and got ' + correctAnswer + ' correct answers.';
results.innerHTML = finalResults;