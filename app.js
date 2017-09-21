'use strict'; /* helps with declaration of variables and errors */

var score = 0;
var scorePossible = 0;
var guessFour = 4;
var guessSix = 6;
var a1, a2, a3, a4, a5, a6, a7;
var q1, q2, q3, q4, q5, q6, q7;
var myStates = ['california', 'georgia', 'new york', 'iowa', 'texas', 'colorado', 'kentucky', 'new mexico', 'michigan'];

var userName = prompt('Greetings! What is your name?');
alert('Well hello there ' + userName + '! Pleasure to meet you! See if you can get these couple answers right about me.');

// Question 1
var answer1 = prompt(q1 = 'Do I ride a motorcycle?').toLowerCase();
scorePossible += 1;
if (answer1 === 'y' || answer1 === 'yes') {
  alert('You are Correct!');
  score += 1;
  a1 = 'Correct';
} else {
  alert('You are Incorrect.');
  a1 = 'Incorrect';
}

// Question 2
var answer2 = prompt(q2 = 'Have I swam with sharks before?').toLowerCase();
scorePossible += 1;
if (answer2 === 'n' || answer2 === 'no') {
  alert('Correctamundo!');
  score += 1;
  a2 = 'Correct';
} else {
  alert('That is Incorrect.');
  a2 = 'Incorrect';
}

// Question 3
var answer3 = prompt(q3 = 'Have I been to Australia?').toLowerCase();
scorePossible += 1;
if (answer3 === 'n' || answer3 === 'no') {
  alert('Correct! I have not. But I always have wanted to go to Australia.');
  score += 1;
  a3 = 'Correct';
} else {
  alert('Incorrect, I have never been to Australia.');
  a3 = 'Incorrect';
}

// Question 4
var answer4 = prompt(q4 = 'Can I do a handstand?').toLowerCase();
scorePossible += 1;
if (answer4 === 'y' || answer4 === 'yes') {
  alert('Correct! I can do a handstand quite well.');
  score += 1;
  a4 = 'Correct';
} else {
  alert('That is Incorrect, I actually am capable of walking around on my hands.');
  a4 = 'Incorrect';
}

// Question 5
var answer5 = prompt(q5 = 'Are Mini Cooper\'s amazing?').toLowerCase();
scorePossible += 1;
if (answer5 === 'y' || answer5 === 'yes') {
  alert('Hell yes they are!');
  score += 1;
  a5 = 'Correct';
} else {
  alert('You should probably re-think your interests, that is Incorrect.');
  a5 = 'Incorrect';
}

// Question 6
scorePossible += 1;
do {
  var answer6 = prompt((q6 = 'How many licks does it take to get to the center of a tootsie pop?') + '\n(you have ' + guessFour + ' tries left)');
  answer6 = Number(answer6);
  guessFour -= 1;
  if (isNaN(answer6)) {
    alert('Please enter a number.');
  } else if (answer6 === 7) {
    alert('Well Done! It takes 7 licks to get to the center of a tootsie pop!');
    score += 1;
    a6 = 'Correct';
  } else if (answer6 < 7) {
    alert(a6 = 'Too Low!');
  } else
    alert(a6 = 'Too High!');
} while (answer6 !== 7 && guessFour > 0);

// Question 7
scorePossible += 1;
do {
  var answer7 = prompt((q7 = 'Can you guess a state that I have lived in besides Washington?') + '\n(you have ' + guessSix + ' tries left)').toLowerCase();
  guessSix -= 1;
  if (myStates.indexOf(answer7) > -1) {
    alert('Yes! I have lived in ' + answer7 + ' before.\n\n The possible states could have been: | ' + (myStates.join(' | ')));
    score += 1;
    a7 = 'one of the choices.';
  } else {
    a7 = 'not one of the choices.';
  }
} while (myStates.indexOf(answer7) === -1 && guessSix > 0);

// alert with final score
if (score > 5) {
  alert('Congratulations, you have achieved ' + score + ' out of 7 correct answers!');
} else if (score > 2) {
  alert('Not bad, you got ' + score + ' out of 7 correct answers.');
} else {
  alert('You should get to know me better, unfortunately you only got ' + score + ' out of ' + scorePossible + ' correct answers.');
}

// console logs
console.log('User Name: ' + userName);
console.log('Question 1_' + q1 + ': ' + answer1 + ' was ' + a1);
console.log('Question 2_' + q2 + ': ' + answer2 + ' was ' + a2);
console.log('Question 3_' + q3 + ': ' + answer3 + ' was ' + a3);
console.log('Question 4_' + q4 + ': ' + answer4 + ' was ' + a4);
console.log('Question 5_' + q5 + ': ' + answer5 + ' was ' + a5);
console.log('Question 6_' + q6 + ': ' + answer6 + ' was ' + a6);
console.log('Question 7_' + q7 + ': ' + answer7 + ' was ' + a7);
