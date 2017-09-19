'use strict'; /* helps with declaration of variables and errors */

var userName = prompt('Greetings! What is your name?');
alert('Well hello there ' + userName + '! Pleasure to meet you! See if you can get these couple answers right about me.');

// Question 1
var answer1 = prompt('Do I have 4 cats?').toLowerCase();

if (answer1 === 'n' || answer1 === 'no') {
  alert('You are Correct');
} else {
  alert('You are Incorrect');
}
