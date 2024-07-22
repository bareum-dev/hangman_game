function setHangman() {
  const hangman = document.createElement('section');
  hangman.classList.add('hangman');

  const hangmanImgWrapper = document.createElement('div');
  hangmanImgWrapper.classList.add('hangman__img--wrapper');

  const title = document.createElement('h1');
  title.textContent = 'Hangman game';

  hangman.append(hangmanImgWrapper);
  hangman.append(title);

  return hangman;
}

export default setHangman;
