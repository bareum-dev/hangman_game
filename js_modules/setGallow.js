function setGallows(parent) {
  const img1 = document.createElement('img');
  img1.setAttribute('src', './images/gallows1.png');
  img1.classList.add('img1');

  const img2 = document.createElement('img');
  img2.setAttribute('src', './images/gallows2.png');
  img2.classList.add('img2');

  const img3 = document.createElement('img');
  img3.setAttribute('src', './images/gallows3.png');
  img3.classList.add('img3');

  // chilkman
  const head = document.createElement('img');
  head.setAttribute('src', './images/1.svg');
  head.classList.add('head');

  const body = document.createElement('img');
  body.setAttribute('src', './images/2.svg');
  body.classList.add('body');

  const leftHand = document.createElement('img');
  leftHand.setAttribute('src', './images/3.svg');
  leftHand.classList.add('left-hand');

  const rightHand = document.createElement('img');
  rightHand.setAttribute('src', './images/4.svg');
  rightHand.classList.add('right-hand');

  const leftLeg = document.createElement('img');
  leftLeg.setAttribute('src', './images/5.svg');
  leftLeg.classList.add('left-leg');

  const rightLeg = document.createElement('img');
  rightLeg.setAttribute('src', './images/6.svg');
  rightLeg.classList.add('right-leg');

  parent.append(img1);
  parent.append(img2);
  parent.append(img3);
  parent.append(head);
  parent.append(body);
  parent.append(leftHand);
  parent.append(rightHand);
  parent.append(leftLeg);
  parent.append(rightLeg);
}

export default setGallows;