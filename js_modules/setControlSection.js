function setControlSection() {
  const control = document.createElement('section');
  control.classList.add('control');

  const controlQuestion = document.createElement('div');
  controlQuestion.classList.add('control__question');

  const controlAnswer = document.createElement('div');
  controlAnswer.classList.add('control__answer');

  const controlKeyboard = document.createElement('div');
  controlKeyboard.classList.add('control__keyboard');

  const incorrectCounter = document.createElement('p');
  incorrectCounter.classList.add('control__incorrect-counter');
  incorrectCounter.setAttribute('data-incorrect-counter', '0');
  incorrectCounter.innerHTML = `Incorrect quesses: <span>0 / 6</span>`;

  control.append(controlQuestion);
  control.append(controlAnswer);
  control.append(controlKeyboard);
  control.append(incorrectCounter);

  return control;
}

export default setControlSection;
