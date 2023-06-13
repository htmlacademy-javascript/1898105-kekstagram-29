// Функция сравнивает длину строки
function checksLenght(string, maxLenght) {
  return string.length <= maxLenght;
}

console.log(checksLenght('проверяемая строка', 20));


// Функция проверяет палиндром
function isPalindrome(string) {
  const stringNormal = string.replaceAll(' ', '').toLowerCase();
  let stringReverse = '';

  for (let i = stringNormal.length - 1; i >= 0; i--) {
    stringReverse += stringNormal.at([i]);
  }

  if (stringNormal === stringReverse) {
    console.log('Это он');
  } else {
    console.log('Нет');
  }

  return string;
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

console.log(createsNumbers('2023 год'));
console.log(createsNumbers('ECMAScript 2022'));
console.log(createsNumbers('1 кефир, 0.5 батона'));
console.log(createsNumbers('агент 007'));
console.log(createsNumbers('а я томат'));
