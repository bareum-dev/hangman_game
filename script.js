// global vars
const globalVars = {
  question: '',
  answer: '',
  answerCounter: null
};

import alphabet from './js_modules/alphabet.js';
import questions from './js_modules/questions.js';

// fill app
import setMain from './js_modules/setMain.js';
import setHangman from './js_modules/setHangman.js';
import setControlSection from './js_modules/setControlSection.js';

// get random number
import getRandomNumber from './js_modules/getRandomNumber.js';

// output question
import outputQuestion from './js_modules/outputQuestion.js';

// output answer cells
import outputAnswerBoxes from './js_modules/outputAnswerBoxes.js';

// output keyboard buttons
import outputKeyboardButtons from './js_modules/outputKeyboardButtons.js';

import setModal from './js_modules/setModal.js';
import setGallows from './js_modules/setGallow.js';

document.addEventListener('load', startGame());

function startGame() {
  // add main
  const body = document.querySelector('body');
  body.append(setMain());

  // add sections - hangman and control
  const main = document.querySelector('.main');
  main.append(setHangman());
  main.append(setControlSection());

  // get random question
  const randomNum = getRandomNumber(0, questions.length);
  globalVars['question'] = Object.values(questions[randomNum])[0];
  globalVars['answer'] = Object.keys(questions[randomNum])[0];

  // set answerCounter (global var)
  globalVars['answerCounter'] = globalVars['answer'].length;

  // output question
  outputQuestion(
    document.querySelector('.control__question'),
    globalVars['question'],
  );

  // output answer cells
  outputAnswerBoxes(
    globalVars['answer'],
    document.querySelector('.control__answer'),
  );

  // output keyboard
  outputKeyboardButtons(alphabet, document.querySelector('.control__keyboard'));

  // set gallows
  setGallows(document.querySelector('.hangman__img--wrapper'));

  // set modal
  setModal('body', globalVars['answer']);

  document.addEventListener('click', clickButtons);
  document.addEventListener('keyup', keyUp);

  document
    .querySelector('.modal__play-again-btn')
    .addEventListener('click', endGame);

  document.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && document.querySelector('.modal__background.open')) {
    endGame();
  }
})
}

function clickButtons(e) {
  if (!e.target.closest('.keyboard__button')) return;
  if (document.querySelector('.modal__background.open')) return;

  let clickedButton = e.target;
  let arr = globalVars['answer'].split('');

  // if clicked true button
  if (arr.includes(clickedButton.textContent)) {
    let answerLetters = document.querySelectorAll('.answer__letter-box');
    answerLetters.forEach((letterBox) => {
      if (
        letterBox.getAttribute('data-letter').toLowerCase() ===
          clickedButton.textContent &&
        !letterBox.classList.contains('guess')
      ) {
        letterBox.textContent = clickedButton.textContent;
        letterBox.classList.add('guess');
        clickedButton.classList.add('guess');

        // check end game
        globalVars['answerCounter'] -= 1;
        if (globalVars['answerCounter'] === 0) {
          document.querySelector('.modal__background').classList.toggle('open');
          document.querySelector('.modal__game-result').textContent =
            'Congratulations! You won =))';
        }
      }
    });
  }
  // if clicked false button
  if (
    clickedButton.classList.contains('false-guess') ||
    clickedButton.classList.contains('guess')
  )
    return;

  clickedButton.classList.add('false-guess');

  let incorrectOutput = document.querySelector('.control__incorrect-counter');

  let incorrectCount = +incorrectOutput.getAttribute('data-incorrect-counter');
  incorrectCount += 1;
  incorrectOutput.setAttribute('data-incorrect-counter', incorrectCount);
  incorrectOutput.innerHTML = `Incorrect quesses: <span>${incorrectCount} / 6</span>`;

  // add body parts
  addBodyParts(incorrectCount);
  // check end game
  checkEndGame(incorrectCount);
}

function keyUp(e) {
  if (!alphabet.includes(`${e.key}`)) return;
  if (document.querySelector('.modal__background.open')) return;

  let clickedButton = document.querySelector(`[data-key-letter="${e.key}"]`);
  let arr = globalVars['answer'].split('');

  // if clicked true button
  if (arr.includes(e.key)) {
    let answerLetters = document.querySelectorAll('.answer__letter-box');
    answerLetters.forEach((letterBox) => {
      if (
        letterBox.getAttribute('data-letter').toLowerCase() === e.key &&
        !letterBox.classList.contains('guess')
      ) {
        letterBox.textContent = e.key;
        letterBox.classList.add('guess');
        clickedButton.classList.add('guess');

        // check end game
        globalVars['answerCounter'] -= 1;
        if (globalVars['answerCounter'] === 0) {
          document.querySelector('.modal__background').classList.toggle('open');
          document.querySelector('.modal__game-result').textContent =
            'Congratulations! You won =))';
        }
      }
    });
  }
  // if clicked false button
  if (
    clickedButton.classList.contains('false-guess') ||
    clickedButton.classList.contains('guess')
  )
    return;

  clickedButton.classList.add('false-guess');

  let incorrectOutput = document.querySelector('.control__incorrect-counter');

  let incorrectCount = +incorrectOutput.getAttribute('data-incorrect-counter');
  incorrectCount += 1;
  incorrectOutput.setAttribute('data-incorrect-counter', incorrectCount);
  incorrectOutput.innerHTML = `Incorrect quesses: <span>${incorrectCount} / 6</span>`;

  // add body parts
  addBodyParts(incorrectCount);
  // check end game
  checkEndGame(incorrectCount);
}

function endGame() {
  // reset global vars
  globalVars['question'] = '';
  globalVars['answer'] = '';
  globalVars['answerCounter'] = null;

  document.querySelector('body').innerHTML = '';
  document.addEventListener('load', startGame());
}

function addBodyParts(incorrect) {
  switch (incorrect) {
    case 1:
      document.querySelector('.head').classList.toggle('open');
      break;
    case 2:
      document.querySelector('.body').classList.toggle('open');
      break;
    case 3:
      document.querySelector('.left-hand').classList.toggle('open');
      break;
    case 4:
      document.querySelector('.right-hand').classList.toggle('open');
      break;
    case 5:
      document.querySelector('.left-leg').classList.toggle('open');
      break;
    case 6:
      document.querySelector('.right-leg').classList.toggle('open');
      break;
  }
}

function checkEndGame(incorrect) {
  if (incorrect === 6) {
    document.querySelector('.modal__background').classList.toggle('open');
    document.querySelector('.modal__game-result').textContent = 'WASTED =((';
  }
}