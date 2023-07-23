const ALERT_SHOW_TIME = 5000;

/**Функция создаёт рандомные числа*/
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {randomInteger};

/**Функция сравнивает длину строки*/
function checksLenght(string, maxLenght) {
  return string.length <= maxLenght;
}
checksLenght('проверяемая строка', 20);


/**Функция проверяет палиндром*/
function isPalindrome(string) {
  const stringNormal = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';

  for (let i = stringNormal.length - 1; i >= 0; i--) {
    stringReverse += stringNormal.at([i]);
  }

  return stringNormal === stringReverse;

}

isPalindrome('Лёша на полке клопа нашёл ');

const showAlert = (message, color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const debounce = (callback, timeoutDelay = 500) => {

  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

/**Функция извлекает числа*/
function createsNumbers(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}
createsNumbers('ECMAScript 2022');

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey, showAlert, debounce};
