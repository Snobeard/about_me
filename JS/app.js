'use strict'; /* helps with declaration of variables and errors */

var score = 0;
var scorePossible = 0;
var guessFour = 4;
var guessSix = 6;
var userName, answer1, answer2, answer3, answer4, answer5, answer6, answer7;
var answerZ = [userName, answer1, answer2, answer3, answer4, answer5, answer6, answer7];
var a1, a2, a3, a4, a5, a6, a7;
var myStates = [
  'california',
  'georgia',
  'new york',
  'iowa',
  'texas',
  'colorado',
  'kentucky',
  'new mexico',
  'michigan'
];

var questionZ = [
  'Greetings! What is your name?',
  'Do I ride a motorcycle?',
  'Have I swam with sharks before?',
  'Have I been to Australia?',
  'Can I do a handstand?',
  'Are Mini Cooper\'s amazing?',
  'How many licks does it take to get to the center of a tootsie pop?',
  'Can you guess a state that I have lived in besides Washington?'
];

var runQuestions = [
  // asks for users name
  function askName() {
    answerZ[0] = prompt(questionZ[0]);
    alert('Well hello there ' + answerZ[0] + '! Pleasure to meet you! See if you can get these couple answers right about me.');
  },

  // Question 1
  function q1() {
    answerZ[1] = prompt(questionZ[1]).toLowerCase();
    scorePossible += 1;
    if (answerZ[1] === 'y' || answerZ[1] === 'yes') {
      alert('You are Correct!');
      score += 1;
      a1 = 'Correct';
    } else {
      alert('You are Incorrect.');
      a1 = 'Incorrect';
    }
  },

  // Question 2
  function q2() {
    answerZ[2] = prompt(questionZ[2]).toLowerCase();
    scorePossible += 1;
    if (answerZ[2] === 'n' || answerZ[2] === 'no') {
      alert('Correctamundo!');
      score += 1;
      a2 = 'Correct';
    } else {
      alert('That is Incorrect.');
      a2 = 'Incorrect';
    }
  },

  // Question 3
  function q3() {
    answerZ[3] = prompt(questionZ[3]).toLowerCase();
    scorePossible += 1;
    if (answerZ[3] === 'n' || answerZ[3] === 'no') {
      alert('Correct! I have not. But I always have wanted to go to Australia.');
      score += 1;
      a3 = 'Correct';
    } else {
      alert('Incorrect, I have never been to Australia.');
      a3 = 'Incorrect';
    }
  },

  // Question 4
  function q4() {
    answerZ[4] = prompt(questionZ[4]).toLowerCase();
    scorePossible += 1;
    if (answerZ[4] === 'y' || answerZ[4] === 'yes') {
      alert('Correct! I can do a handstand quite well.');
      score += 1;
      a4 = 'Correct';
    } else {
      alert('That is Incorrect, I actually am capable of walking around on my hands.');
      a4 = 'Incorrect';
    }
  },

  // Question 5
  function q5() {
    answerZ[5] = prompt(questionZ[5]).toLowerCase();
    scorePossible += 1;
    if (answerZ[5] === 'y' || answerZ[5] === 'yes') {
      alert('Hell yes they are!');
      score += 1;
      a5 = 'Correct';
    } else {
      alert('You should probably re-think your interests, that is Incorrect.');
      a5 = 'Incorrect';
    }
  },

  // Question 6
  function q6() {
    scorePossible += 1;
    do {
      answerZ[6] = prompt(questionZ[6] + '\n(you have ' + guessFour + ' tries left)');
      answerZ[6] = Number(answerZ[6]);
      guessFour -= 1;
      if (isNaN(answerZ[6])) {
        alert('Please enter a number.');
      } else if (answerZ[6] === 7) {
        alert('Well Done! It takes 7 licks to get to the center of a tootsie pop!');
        score += 1;
        a6 = 'Correct';
      } else if (answerZ[6] < 7) {
        alert(a6 = 'Too Low!');
      } else
        alert(a6 = 'Too High!');
    } while (answerZ[6] !== 7 && guessFour > 0);
  },

  // Question 7
  function q7() {
    scorePossible += 1;
    do {
      answerZ[7] = prompt(questionZ[7] + '\n(you have ' + guessSix + ' tries left)').toLowerCase();
      guessSix -= 1;
      if (myStates.indexOf(answerZ[7]) > -1) {
        alert('Yes! I have lived in ' + answerZ[7] + ' before.\n\n The possible states could have been: | ' + (myStates.join(' | ')));
        score += 1;
        a7 = 'one of the choices.';
      } else {
        a7 = 'not one of the choices.';
      }
    } while (!myStates.includes(answerZ[7]) && guessSix > 0);
  }
];


// alert with final score
function getScore() {
  if (score > 5) {
    alert('Congratulations, you have achieved ' + score + ' out of 7 correct answers!');
  } else if (score > 2) {
    alert('Not bad, you got ' + score + ' out of 7 correct answers.');
  } else {
    alert('You should get to know me better, unfortunately you only got ' + score + ' out of ' + scorePossible + ' correct answers.');
  }
}

// var runQuestions = [askName(), q1(), q2(), q3(), q4(), q5(), q6(), q7()];

for (var i = 0; i < runQuestions.length; i ++) {
  runQuestions[i]();
}

getScore();

// console logs
console.log('User Name: ' + answerZ[0]);
console.log('Question 1_' + questionZ[1] + ': ' + answerZ[1] + ' was ' + a1);
console.log('Question 2_' + questionZ[2] + ': ' + answerZ[2] + ' was ' + a2);
console.log('Question 3_' + questionZ[3] + ': ' + answerZ[3] + ' was ' + a3);
console.log('Question 4_' + questionZ[4] + ': ' + answerZ[4] + ' was ' + a4);
console.log('Question 5_' + questionZ[5] + ': ' + answerZ[5] + ' was ' + a5);
console.log('Question 6_' + questionZ[6] + ': ' + answerZ[6] + ' was ' + a6);
console.log('Question 7_' + questionZ[7] + ': ' + answerZ[7] + ' was ' + a7);
