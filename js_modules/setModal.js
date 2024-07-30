function setModal(parent, answer) {
  const modalBackground = document.createElement('article');
  modalBackground.classList.add('modal__background');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal__wrapper');

  const modalBorder = document.createElement('div');
  modalBorder.classList.add('modal__border');

  const gameResult = document.createElement('p');
  gameResult.classList.add('modal__game-result');

  const modalAnswer = document.createElement('p');
  modalAnswer.classList.add('modal__answer');
  modalAnswer.textContent = `${answer}`;

  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('modal__play-again-btn');
  playAgainBtn.textContent = 'play again';

  modalBorder.append(gameResult);
  modalBorder.append(modalAnswer);
  modalBorder.append(playAgainBtn);
  modalWrapper.append(modalBorder);
  modalBackground.append(modalWrapper);

  document.querySelector(parent).append(modalBackground);
}

export default setModal;