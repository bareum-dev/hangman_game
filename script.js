// global vars
const globalVars = {
  question: '',
  answer: '',
  answerCounter: null,
};

import alphabet from './js_modules/alphabet.js';
import questions from './js_modules/questions.js';

// fill app
import setMain from './js_modules/setMain.js';
import setHangman from './js_modules/setHangman.js';
import setControlSection from './js_modules/setControlSection.js';

// get random number
import getRandomNumber from './js_modules/getRandomNumber.js';

// output question - function
import outputQuestion from './js_modules/outputQuestion.js';

// output answer boxes - function
import outputAnswerBoxes from './js_modules/outputAnswerBoxes.js';

// output keyboard buttons - function
import outputKeyboardButtons from './js_modules/outputKeyboardButtons.js';

//
document.addEventListener('load', startGame());

function startGame() {
  // add main section
  const body = document.querySelector('body');
  body.append(setMain());

  // add sections - hangman and control into main section
  const main = document.querySelector('.main');
  main.append(setHangman());
  main.append(setControlSection());

  // get random question
  const randomNum = getRandomNumber(0, questions.length);
  globalVars['question'] = Object.values(questions[randomNum])[0];
  globalVars['answer'] = Object.keys(questions[randomNum])[0];

  // set answerCounter global var
  globalVars['answerCounter'] = globalVars['answer'].length;

  // output question
  outputQuestion(
    document.querySelector('.control__question'),
    globalVars['question']
  );

  // output answer boxes
  outputAnswerBoxes(
    globalVars['answer'],
    document.querySelector('.control__answer')
  );

  // output keyboard buttons
  outputKeyboardButtons(
    alphabet, document.querySelector('.control__keyboard')
  );
}