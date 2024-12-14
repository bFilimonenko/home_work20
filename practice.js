//1. Дано два різні числа. Визначити, яке з них більше, а яке менше.

const firstNum = parseInt(prompt("Enter your first number"));
const secondNum = parseInt(prompt("Enter your second number"));

console.log(firstNum < secondNum ? "first number is less than second" : "second number is less than second");

if (firstNum < secondNum) {
  console.log("first number is less than second");
} else {
  console.log("second number is less than second");
}

//2. Відомі дві відстані. Одна в кілометрах, інша - у футах (1 фут = 0,305 м). Яка відстань менша?

const distanceF = parseInt(prompt("Enter your distance number in foot"));
const distanceK = parseInt(prompt("Enter your distance number in kilometer"));

if (distanceF > (distanceK * 305)) {
  console.log("distance in kilometer is less that foot");
} else if (distanceF === (distanceK * 305)) {
  console.log("distance is the same");
} else {
  console.log("distance in foot is less that kilometer");
}

//3. Визначити, чи є число 'a' дільником числа 'b'? І навпаки (Дати 2 відповіді)

const a = parseInt(prompt("Enter a number"));
const b = parseInt(prompt("Enter a number"));

if (b % a === 0 && a % b === 0) {
  console.log(`number ${a} is a divisor number ${b} and number ${b} is a divisor number ${a}`);
} else if (b % a === 0) {
  console.log(`number ${a} is a divisor number ${b}`);
} else if (a % b === 0) {
  console.log(`number ${b} is a divisor number ${a}`);
} else {
  console.log(`numbers ${a} and ${b} are not divisible`);
}

//4. Дано число. Визначити, чи закінчується воно парною цифрою, чи непарною? Вивести в консоль останню цифру.

const number = parseInt(prompt("Enter a number"));

const calculation = number % 10;
console.log(calculation);
console.log(calculation % 2 === 0 ? "last digit is even" : "last digit is odd");

//5. Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const twoDigitNumber = parseInt(prompt("Enter two digit number"));

const lastDigit = twoDigitNumber % 10;
const firstDigit = (twoDigitNumber - lastDigit) / 10;

if (firstDigit < lastDigit) {
  console.log("The first digit is less than the second");
} else if (firstDigit < lastDigit) {
  console.log("The last digit is less than the first digit");
} else {
  console.log("The digits are the same");
}

// 6. Дано тризначне число.
// а. Визначити, чи є парною сума його цифр
// b. Визначити, чи кратна сума его цифр п'яти
// с. Визначити, чи є добуток його цифр більшим за 100

const threeDigitNum = parseInt(prompt("Enter three-digit number"));

const lastDigit = threeDigitNum % 10;

const firstAndSecond = (threeDigitNum - lastDigit) / 10;

const middleDigit = firstAndSecond % 10;
const firstDigit = (firstAndSecond - middleDigit) / 10;

console.log((firstDigit + middleDigit + lastDigit) % 2 === 0 ?
  "The sum of digits is even" :
  "The sum of digits is odd");
console.log((firstDigit + middleDigit + lastDigit) % 5 === 0 ?
  "The sum of the digits is a multiple of 5" :
  "The sum of the digits is not a multiple of 5");
console.log((firstDigit + middleDigit + lastDigit) > 100 ?
  "The product of digits is greater than 100" :
  "The product of digits is less than 100");

if ((firstDigit + middleDigit + lastDigit) % 2 === 0) {
  console.log("The sum of digits is even");
}
if ((firstDigit + middleDigit + lastDigit) % 5 === 0) {
  console.log("The sum of the digits is a multiple of 5");
}
if ((firstDigit + middleDigit + lastDigit) > 100) {
  console.log("The product of digits is greater than 100");
}

//7. Дано тризначне число.
// а. Чи всі його цифри однакові?
// b. Чи є серед них однакові?

// Used value task 6

if (firstDigit === middleDigit && firstDigit === lastDigit) {
  console.log("All the numbers are the same");
} else if (firstDigit === middleDigit || middleDigit === lastDigit || lastDigit === firstDigit) {
  console.log("You have two identical numbers");
} else {
  console.log("You do not have the same numbers");
}

//8. Визначити, чи є задане шестизначне число дзеркальним? (Напр., 123321, 147741)

const sixDigitNum = prompt("Enter six-digit number");

if (sixDigitNum.charAt(0) === sixDigitNum.charAt(5) && sixDigitNum.charAt(1) === sixDigitNum.charAt(4) &&
  sixDigitNum.charAt(2) === sixDigitNum.charAt(3)) {
  console.log("The number is mirror");
}



