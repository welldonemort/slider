const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

const sliderElOne = document.querySelector('.slider-element-1');
const sliderElTwo = document.querySelector('.slider-element-2');
const sliderElThree = document.querySelector('.slider-element-3');

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

let currentIndex = 0

arrowLeft.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
arrowRight.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})