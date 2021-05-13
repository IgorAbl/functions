// 1) Делится ли число на 5, или на 3, или на 2 без остатка?

const a = prompt('Enter number');

if (a % 5 === 0) {
    alert('Число кратно 5');
} else if (a % 3 === 0) {
    alert('Число кратно 3');
} else if (a % 2 === 0) {
    alert('Число кратно 2');
} else {
    alert('Число не кратно 5, 3, 2');
} 

// Долго писать условия для ситуаций когда кратно одновременно нескольким числам :)



// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)

let result = 1;

for (let i = 1; i <= 5; i++) {
    result = result * i;
  }

console.log('result :>> ', result);

// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).

let result = 5;

for (let i = 6; i <= 12; i++) {
    result = result * i;
  }

console.log('result :>> ', result);


// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// Ожидаемый вывод:
// isAdult(20); // true
// isAdult(4); // false


const x = prompt('enter your age');
const isAdult = function (x) {
    if(x < 18) {
        return 'false';
    } else {
        return 'true';
    }
}
console.log('Adult? :>> ', isAdult(x));


// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

const sumAB = sum();

function sum(a, b) {
  if (a % b ===0) {
    return 'true'
  } else {
      return 'false'
  }
}

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

const asd = treugolnik();

function treugolnik (a, b, c) {
  
  if (a + b > c && a + c > b && b + c > a) {
      return 'true';
  } else {
      return 'false'
  }
}



// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)


const treug = Streugolnika();
/**
 * 
 * @param {number} c значение основания
 * @param {number} d значение высоты
 * @returns Площадь треугольника
 */
function Streugolnika(c, d) {
  return c * d / 2; 
}


const pryam = Spryamougolnika();
/**
 * 
 * @param {number} e зничение первой стороны
 * @param {number} f значение смежной стороны
 * @returns 
 */
function Spryamougolnika (e,f) {
    return e * f;
}


const konus = Skonusa();
/**
 * 
 * @param {number} g Радиус основания конуса
 * @param {number} h Образующая конуса
 * @returns Площадь боковой поверхности конуса
 */
function Skonusa (g,h) {
    return g * h * 3.14;
}


const parall = Sparall();
/**
 * 
 * @param {number} j Длина
 * @param {number} k Ширина
 * @param {number} l Высота
 * @returns Площадь параллелепипеда
 */
function Sparall (j,k,l) {
    return 2 * (j * k + j * l + k * l);
}