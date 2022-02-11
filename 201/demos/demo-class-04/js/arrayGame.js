
// let age = 31;

// for (let i = 0; i < 4; i++){
//   let ageAnswer = prompt('How old is Lee? Redheads are deceptively difficult to tell with!');
//   if (ageAnswer == age) {
//     alert('You got it right! Great job, partner. Lee is ' + age + '!');
//     console.log('User response is ' + ageAnswer + ' to question 6');
//     correctAnswers++;
//     break;
//   }
//   else if (ageAnswer > age) {
//     alert('You guessed a bit too high. Does he look that old?');
//     console.log('User response is ' + ageAnswer + ' to question ');
//   }
//   else if (ageAnswer < age) {
//     alert('You\'re a bit too low. I realize Lee\'s immature, but not that bad.');
//     console.log('User response is ' + ageAnswer + ' to question 6');
//   }
//   else if (isNaN(ageAnswer) === true) {
//     alert('That is not a number. You can\'t do that.');
//     console.log('User response is ' + ageAnswer + ' to question 6');
//   }
//   else if ((i === 3) && (ageAnswer !== age)) {
//     alert('You\'ve run out of chances. Lee\'s ' + age + ', for the record!');
//     console.log('User response is ' + ageAnswer + ' to question 6');
//   }






let states = ['ILLINOIS', 'IOWA', 'ARKANSAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
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
