const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const hendlStart = () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.setAttribute('disabled', true);
};

const hendlStop = () => {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
};

refs.btnStart.addEventListener('click', hendlStart);
refs.btnStop.addEventListener('click', hendlStop);
