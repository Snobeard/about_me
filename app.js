'use strict'; /* helps with declaration of variables and errors */

var score = 0;
var userName = prompt('Greetings! What is your name?');
alert('Well hello there ' + userName + '! Pleasure to meet you! See if you can get these couple answers right about me.');

// Question 1
var answer1 = prompt('Do I ride a motorcycle?').toLowerCase();

if (answer1 === 'y' || answer1 === 'yes') {
  alert('You are Correct!');
  score = score +1;
} else {
  alert('You are Incorrect.');
}

// Question 2
var answer2 = prompt('Have I swam with sharks before?').toLowerCase();

if (answer2 === 'n' || answer2 === 'no') {
  alert('Correctamundo!');
  score = score +1;
} else {
  alert('That is Incorrect.');
}

// Question 3
var answer3 = prompt('Have I been to Australia?').toLowerCase();

if (answer3 === 'n' || answer3 === 'no') {
  alert('Correct! I have not. But I always have wanted to go to Australia.');
  score = score +1;
} else {
  alert('Incorrect, I have never been to Australia.');
}

// Question 4
var answer4 = prompt('Can I do a handstand?').toLowerCase();

if (answer4 === 'y' || answer4 === 'yes') {
  alert('Correct! I can do a handstand quite well.');
  score = score +1;
} else {
  alert('That is Incorrect, I actually am capable of walking around on my hands.');
}

// Question 5
var answer5 = prompt('Are Mini Cooper\'s amazing?').toLowerCase();

if (answer5 === 'y' || answer5 === 'yes') {
  alert('Hell yes they are!');
  score = score +1;
} else {
  alert('You should probably re-think your interests, that is Incorrect.');
}

// alert with final score
if (score > 3) {
  alert('Congratulations, you have achieved ' + score + ' out of 5 correct answers!');
} else if (score === 3) {
  alert('Not bad, you got ' + score + ' out of 5 correct answers.');
} else {
  alert('You should get to know me better, unfortunately you only got ' + score + ' out of 5 correct answers.');
}
