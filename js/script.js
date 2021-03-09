const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

const sliderElOne = document.querySelector('.slider-element-1');
const sliderElTwo = document.querySelector('.slider-element-2');
const sliderElThree = document.querySelector('.slider-element-3');

const lineOne = document.querySelector('.line-decorate-1');
const lineTwo = document.querySelector('.line-decorate-2');
const lineThree = document.querySelector('.line-decorate-3');

const entities = [
  {
    img: './images/projects.svg'
  },
  {
    img: './images/projects-1.png'
  },
  {
    img: './images/projects-2.png'
  }
]

const slider = document.querySelector('.slider');

const setEntity = (index) => {
  slider.style.backgroundImage = `url(${entities[index].img})`;
}

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {


  switch (currentIndex) {
    case 0:
      dotOne.style.opacity = 0.3;
      dotThree.style.opacity = 1;
      lineOne.classList.remove('brown-hypertext');
      lineThree.classList.add('brown-hypertext');
      break;
    case 1:
      dotTwo.style.opacity = 0.3;
      dotOne.style.opacity = 1;
      lineTwo.classList.remove('brown-hypertext');
      lineOne.classList.add('brown-hypertext');
      break;
    case 2:
      dotThree.style.opacity = 0.3;
      dotTwo.style.opacity = 1;
      lineThree.classList.remove('brown-hypertext');
      lineTwo.classList.add('brown-hypertext');
      break;
  }

  if (currentIndex == 0) {
    setEntity(entities.length - 1);
    currentIndex = entities.length - 1;
  } else {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  }
})
arrowRight.addEventListener('click', () => {
  switch (currentIndex) {
    case 0:
      dotOne.style.opacity = 0.3;
      dotTwo.style.opacity = 1;
      lineOne.classList.remove('brown-hypertext');
      lineTwo.classList.add('brown-hypertext');
      break;
    case 1:
      dotTwo.style.opacity = 0.3;
      dotThree.style.opacity = 1;
      lineTwo.classList.remove('brown-hypertext');
      lineThree.classList.add('brown-hypertext');
      break;
    case 2:
      dotThree.style.opacity = 0.3;
      dotOne.style.opacity = 1;
      lineThree.classList.remove('brown-hypertext');
      lineOne.classList.add('brown-hypertext');
      break;
  }

  if (currentIndex == entities.length - 1) {
    setEntity(0);
    currentIndex = 0;
  } else {
    setEntity(currentIndex + 1);
    currentIndex += 1;
  }
})