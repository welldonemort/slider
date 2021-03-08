const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

const sliderElOne = document.querySelector('.slider-element-1');
const sliderElTwo = document.querySelector('.slider-element-2');
const sliderElThree = document.querySelector('.slider-element-3');

setInterval(
function slide() {
  if (sliderElOne.style.display != 'none') {
  arrowRight.addEventListener('click', () => {
    sliderElOne.style.display = 'none';
    sliderElTwo.style.display = 'block';
    dotOne.style.opacity = 0.3;
    dotTwo.style.opacity = 1;
  });
  arrowLeft.addEventListener('click', () => {
    sliderElOne.style.display = 'none';
    sliderElThree.style.display = 'block';
    dotOne.style.opacity = 0.3;
    dotThree.style.opacity = 1;
  });
  dotTwo.addEventListener('click', () => {
    sliderElOne.style.display = 'none';
    sliderElTwo.style.display = 'block';
    dotOne.style.opacity = 0.3;
    dotTwo.style.opacity = 1;
  });
  dotThree.addEventListener('click', () => {
    sliderElOne.style.display = 'none';
    sliderElThree.style.display = 'block';
    dotOne.style.opacity = 0.3;
    dotThree.style.opacity = 1;
  });
} else if (sliderElTwo.style.display != "none") {
  arrowRight.addEventListener('click', () => {
    sliderElTwo.style.display = 'none';
    sliderElThree.style.display = 'block';
    dotTwo.style.opacity = 0.3;
    dotThree.style.opacity = 1;
  });
  arrowLeft.addEventListener('click', () => {
    sliderElTwo.style.display = 'none';
    sliderElOne.style.display = 'block';
    dotTwo.style.opacity = 0.3;
    dotOne.style.opacity = 1;
  });
} else if (sliderElThree.style.display != "none") {
  arrowRight.addEventListener('click', () => {
    sliderElThree.style.display = 'none';
    sliderElOne.style.display = 'block';
    dotThree.style.opacity = 0.3;
    dotOne.style.opacity = 1;
  });
  arrowLeft.addEventListener('click', () => {
    sliderElThree.style.display = 'none';
    sliderElTwo.style.display = 'block';
    dotThree.style.opacity = 0.3;
    dotTwo.style.opacity = 1;
  });
}
}, 0);