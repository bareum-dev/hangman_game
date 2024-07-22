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


//
const body = document.querySelector('body');
body.append(setMain());

const main = document.querySelector('main');
main.append(setHangman());
main.append(setControlSection());