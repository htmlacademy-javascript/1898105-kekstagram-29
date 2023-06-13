// Функция сравнивает длину строки
function checksLenght(string, maxLenght) {
  return string.length <= maxLenght;
}
checksLenght('проверяемая строка', 20);


// Функция проверяет палиндром
function isPalindrome(string) {
  const stringNormal = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';

  for (let i = stringNormal.length - 1; i >= 0; i--) {
    stringReverse += stringNormal.at([i]);
  }

  return stringNormal === stringReverse;

}

isPalindrome('Лёша на полке клопа нашёл ');


// Функция извлекает числа
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
