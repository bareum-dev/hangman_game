function outputAnswerBoxes(answer, answerOutput) {
  answerOutput.innerHTML = '';
  for (let i = 0; i < answer.length; i++) {
    const letterBox = document.createElement('div');
    letterBox.classList.add('answer__letter-box');
    letterBox.setAttribute('data-letter', `${answer[i]}`);
    answerOutput.append(letterBox);
  }
}

export default outputAnswerBoxes;