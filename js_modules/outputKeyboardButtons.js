function outputKeyboardButtons(alphabet, buttonOutput) {
  for (let i = 0; i < alphabet.length; i++) {
    const letterBox = document.createElement('div');
    letterBox.classList.add('keyboard__button');
    letterBox.textContent = alphabet[i];
    letterBox.setAttribute('tabindex', `-1`);
    letterBox.setAttribute('data-key-letter', `${alphabet[i]}`);
    buttonOutput.append(letterBox);
  }
}

export default outputKeyboardButtons;
