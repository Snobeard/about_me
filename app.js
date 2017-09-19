'use strict'; /* helps with declaration of variables and errors */

var score = 0;
var a1, a2, a3, a4, a5;
var q1, q2, q3, q4, q5;

var userName = prompt('Greetings! What is your name?');
alert('Well hello there ' + userName + '! Pleasure to meet you! See if you can get these couple answers right about me.');

// Question 1
var answer1 = prompt((q1 = 'Do I ride a motorcycle?')).toLowerCase();

if (answer1 === 'y' || answer1 === 'yes') {
  alert('You are Correct!');
  score = score + 1;
  a1 = 'Correct';
} else {
  alert('You are Incorrect.');
  a1 = 'Incorrect';
}

// Question 2
var answer2 = prompt((q2 = 'Have I swam with sharks before?')).toLowerCase();

if (answer2 === 'n' || answer2 === 'no') {
  alert('Correctamundo!');
  score = score + 1;
  a2 = 'Correct';
} else {
  alert('That is Incorrect.');
  a2 = 'Incorrect';
}

// Question 3
var answer3 = prompt((q3 = 'Have I been to Australia?')).toLowerCase();

if (answer3 === 'n' || answer3 === 'no') {
  alert('Correct! I have not. But I always have wanted to go to Australia.');
  score = score + 1;
  a3 = 'Correct';
} else {
  alert('Incorrect, I have never been to Australia.');
  a3 = 'Incorrect';
}

// Question 4
var answer4 = prompt((q4 = 'Can I do a handstand?')).toLowerCase();

if (answer4 === 'y' || answer4 === 'yes') {
  alert('Correct! I can do a handstand quite well.');
  score = score + 1;
  a4 = 'Correct';
} else {
  alert('That is Incorrect, I actually am capable of walking around on my hands.');
  a4 = 'Incorrect';
}

// Question 5
var answer5 = prompt((q5 = 'Are Mini Cooper\'s amazing?')).toLowerCase();

if (answer5 === 'y' || answer5 === 'yes') {
  alert('Hell yes they are!');
  score = score + 1;
  a5 = 'Correct';
} else {
  alert('You should probably re-think your interests, that is Incorrect.');
  a5 = 'Incorrect';
}

// alert with final score
if (score > 3) {
  alert('Congratulations, you have achieved ' + score + ' out of 5 correct answers!');
} else if (score === 3) {
  alert('Not bad, you got ' + score + ' out of 5 correct answers.');
} else {
  alert('You should get to know me better, unfortunately you only got ' + score + ' out of 5 correct answers.');
}

console.log('Question 1_' + q1 + ': ' + answer1 + ' was ' + a1);
console.log('Question 2_' + q2 + ': ' + answer2 + ' was ' + a2);
console.log('Question 3_' + q3 + ': ' + answer3 + ' was ' + a3);
console.log('Question 4_' + q4 + ': ' + answer4 + ' was ' + a4);
console.log('Question 5_' + q5 + ': ' + answer5 + ' was ' + a5);
